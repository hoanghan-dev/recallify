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

  startSession: (subjectId, questions) => {
    if (!questions || questions.length === 0) return;

    // Shuffle questions initially for active recall
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    set({
      subjectId,
      round: 1,
      queue: shuffled,
      currentIndex: 0,
      roundCorrect: [],
      roundIncorrect: [],
      mastered: [],
      userSelection: null,
      feedback: null,
      isEvaluated: false,
      isRoundComplete: false,
      isAllMastered: false
    });
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
    } else {
      if (!nextIncorrect.includes(currentQ.id)) nextIncorrect.push(currentQ.id);
    }

    set({
      userSelection: selectionToUse,
      feedback: evalResult,
      isEvaluated: true,
      roundCorrect: nextCorrect,
      roundIncorrect: nextIncorrect
    });
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
  },

  finishSession: () => {
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
      isAllMastered: false
    });
    useAppStore.getState().refreshStats();
  }
}));

export default useLearningStore;

