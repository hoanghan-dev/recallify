import { create } from 'zustand';
import { learningEngine } from '../services/learning/learningEngine.js';
import { localStorageService } from '../services/storage/localStorageService.js';
import { useAppStore } from './useAppStore.js';

export const useLearningStore = create((set, get) => ({
  subjectId: null,
  round: 1,
  queue: [],
  currentIndex: 0,
  roundCorrect: [], // array of question IDs answered correctly in this round
  roundIncorrect: [], // array of question IDs answered incorrectly in this round
  mastered: [], // array of question IDs graduated into mastery during this entire session
  userSelection: null, // current pending selection (string for single, array for multi)
  feedback: null, // { isCorrect, correctAnswers, selectedAnswers, explanation }
  isEvaluated: false,
  isRoundComplete: false,
  isAllMastered: false,
  isResumed: false,

  _persist: () => {
    const s = get();
    if (!s.subjectId || !s.queue || s.queue.length === 0) return;
    localStorageService.setActiveLearning(s.subjectId, {
      subjectId: s.subjectId,
      round: s.round,
      queue: s.queue,
      currentIndex: s.currentIndex,
      roundCorrect: s.roundCorrect,
      roundIncorrect: s.roundIncorrect,
      mastered: s.mastered,
      userSelection: s.userSelection,
      feedback: s.feedback,
      isEvaluated: s.isEvaluated,
      isRoundComplete: s.isRoundComplete,
      isAllMastered: s.isAllMastered
    });
  },

  initOrResumeSession: (subjectId, allQuestions) => {
    if (!subjectId || !allQuestions || allQuestions.length === 0) return { resumed: false };

    // Check if active uncompleted session exists in localStorage
    const saved = localStorageService.getActiveLearning(subjectId);
    if (saved && saved.queue && saved.queue.length > 0 && !saved.isAllMastered) {
      set({
        subjectId: saved.subjectId || subjectId,
        round: saved.round || 1,
        queue: saved.queue,
        currentIndex: saved.currentIndex || 0,
        roundCorrect: saved.roundCorrect || [],
        roundIncorrect: saved.roundIncorrect || [],
        mastered: saved.mastered || [],
        userSelection: saved.userSelection || null,
        feedback: saved.feedback || null,
        isEvaluated: !!saved.isEvaluated,
        isRoundComplete: !!saved.isRoundComplete,
        isAllMastered: !!saved.isAllMastered,
        isResumed: true
      });
      return { resumed: true };
    }

    // Otherwise start fresh
    get().startSession(subjectId, allQuestions);
    return { resumed: false };
  },

  startSession: (subjectId, questions) => {
    if (!questions || questions.length === 0) return;

    // Sequential ascending order by default, exactly like Flashcard mode
    const sequential = [...questions];
    const prevMastered = localStorageService.getStats().subjectStats[subjectId]?.mastered || [];

    const newState = {
      subjectId,
      round: 1,
      queue: sequential,
      currentIndex: 0,
      roundCorrect: [],
      roundIncorrect: [],
      mastered: prevMastered,
      userSelection: null,
      feedback: null,
      isEvaluated: false,
      isRoundComplete: false,
      isAllMastered: false,
      isResumed: false
    };

    set(newState);
    get()._persist();
  },

  restartSession: (subjectId, questions) => {
    localStorageService.clearActiveLearning(subjectId);
    get().startSession(subjectId, questions);
  },

  selectOption: (optionId) => {
    const { queue, currentIndex, isEvaluated, userSelection } = get();
    if (isEvaluated) return; // Prevent changing after evaluation

    const currentQ = queue[currentIndex];
    const isMultiple = Array.isArray(currentQ?.correctAnswer) || currentQ?.type === 'multiple';

    if (isMultiple) {
      const currentList = Array.isArray(userSelection) ? userSelection : [];
      let updated;
      if (currentList.includes(optionId)) {
        updated = currentList.filter((id) => id !== optionId);
      } else {
        updated = [...currentList, optionId];
      }
      set({ userSelection: updated });
    } else {
      set({ userSelection: optionId });
      // For single choice, auto-evaluate immediately on selection!
      get().evaluateCurrentAnswer(optionId);
    }
  },

  evaluateCurrentAnswer: (overrideSelection = null) => {
    const { queue, currentIndex, isEvaluated, userSelection, subjectId, roundCorrect, roundIncorrect } = get();
    if (isEvaluated) return;

    const currentQ = queue[currentIndex];
    if (!currentQ) return;

    const selectionToUse = overrideSelection !== null ? overrideSelection : userSelection;
    if (selectionToUse === null || selectionToUse === undefined) return;

    const evalResult = learningEngine.evaluateAnswer(currentQ, selectionToUse);

    // Record to storage
    localStorageService.recordAnswer(subjectId, currentQ.id, evalResult.isCorrect);
    useAppStore.getState().refreshStats();

    // Update round tracking
    let nextCorrect = [...roundCorrect];
    let nextIncorrect = [...roundIncorrect];

    if (evalResult.isCorrect) {
      if (!nextCorrect.includes(currentQ.id)) nextCorrect.push(currentQ.id);
      // Immediately graduate to mastered in real time!
      localStorageService.markQuestionsMastered(subjectId, [currentQ.id]);
      useAppStore.getState().refreshStats();
    } else {
      if (!nextIncorrect.includes(currentQ.id)) nextIncorrect.push(currentQ.id);
    }

    const nextMastered = evalResult.isCorrect
      ? Array.from(new Set([...get().mastered, currentQ.id]))
      : get().mastered;

    set({
      userSelection: selectionToUse,
      feedback: evalResult,
      isEvaluated: true,
      roundCorrect: nextCorrect,
      roundIncorrect: nextIncorrect,
      mastered: nextMastered
    });
    get()._persist();
  },

  continueToNext: () => {
    const { queue, currentIndex, roundCorrect, roundIncorrect, subjectId, mastered } = get();

    if (currentIndex < queue.length - 1) {
      // Advance to next question in round
      set({
        currentIndex: currentIndex + 1,
        userSelection: null,
        feedback: null,
        isEvaluated: false
      });
      get()._persist();
    } else {
      // Completed all questions in current round!
      // Any questions answered correctly in this round graduate to mastered
      const newMastered = Array.from(new Set([...mastered, ...roundCorrect]));
      if (roundCorrect.length > 0) {
        localStorageService.markQuestionsMastered(subjectId, roundCorrect);
        useAppStore.getState().refreshStats();
      }

      set({
        mastered: newMastered,
        isRoundComplete: true,
        isAllMastered: roundIncorrect.length === 0
      });
      get()._persist();
    }
  },

  /**
   * CRITICAL BUSINESS RULE (FR-03 & BR-LRN-04):
   * Generates a new repetition round containing ONLY questions that were missed in this round.
   * Mastered questions are removed from the next queue.
   */
  startRepetitionRound: () => {
    const { round, queue, roundIncorrect } = get();
    if (roundIncorrect.length === 0) return;

    const nextRoundInfo = learningEngine.generateNextRepetitionRound(round, queue, roundIncorrect);

    set({
      round: nextRoundInfo.roundNumber,
      queue: nextRoundInfo.queue,
      currentIndex: 0,
      roundCorrect: [],
      roundIncorrect: [],
      userSelection: null,
      feedback: null,
      isEvaluated: false,
      isRoundComplete: false,
      isAllMastered: false
    });
    get()._persist();
  },

  finishSession: () => {
    const { subjectId } = get();
    if (subjectId) {
      localStorageService.clearActiveLearning(subjectId);
    }
    set({
      subjectId: null,
      round: 1,
      queue: [],
      currentIndex: 0,
      roundCorrect: [],
      roundIncorrect: [],
      mastered: [],
      userSelection: null,
      feedback: null,
      isEvaluated: false,
      isRoundComplete: false,
      isAllMastered: false,
      isResumed: false
    });
    useAppStore.getState().refreshStats();
  }
}));

export default useLearningStore;

