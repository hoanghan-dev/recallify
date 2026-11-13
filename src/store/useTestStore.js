import { create } from 'zustand';
import { testEngine } from '../services/testing/testEngine.js';
import { localStorageService } from '../services/storage/localStorageService.js';
import { useAppStore } from './useAppStore.js';

export const useTestStore = create((set, get) => ({
  testId: null,
  subjectId: null,
  subjectName: '',
  title: 'Practice Exam',
  questions: [], // randomized non-duplicate subset
  currentIndex: 0,
  userAnswers: {}, // { [questionId]: optionId | string[] }
  flaggedIds: [], // question IDs flagged by user for review
  startTime: null,
  elapsedSeconds: 0,
  timerIntervalId: null,
  status: 'idle', // 'idle' | 'in_progress' | 'submitted'
  result: null, // calculated score and review details

  startTest: (config, allQuestions, subject) => {
    // Generate questions with zero duplicates
    const selectedQuestions = testEngine.generateTestQuestions(allQuestions, config.questionCount);
    const testId = `test-${Date.now()}`;
    const startTime = Date.now();

    // Clean active test in storage
    const initialTestData = {
      testId,
      subjectId: subject.id,
      subjectName: subject.name,
      title: config.title || `${subject.code} Practice Exam`,
      questions: selectedQuestions,
      userAnswers: {},
      flaggedIds: [],
      startTime,
      status: 'in_progress'
    };
    localStorageService.setActiveTest(initialTestData);

    set({
      testId,
      subjectId: subject.id,
      subjectName: subject.name,
      title: config.title || `${subject.code} Practice Exam`,
      questions: selectedQuestions,
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      startTime,
      elapsedSeconds: 0,
      status: 'in_progress',
      result: null
    });
  },

  setAnswer: (questionId, optionId) => {
    const { questions, userAnswers, status } = get();
    if (status !== 'in_progress') return;

    const targetQ = questions.find((q) => q.id === questionId);
    if (!targetQ) return;

    const isMultiple = Array.isArray(targetQ.correctAnswer) || targetQ.type === 'multiple';
    let updated;

    if (isMultiple) {
      const currentArr = Array.isArray(userAnswers[questionId]) ? userAnswers[questionId] : [];
      if (currentArr.includes(optionId)) {
        updated = currentArr.filter((id) => id !== optionId);
      } else {
        updated = [...currentArr, optionId];
      }
    } else {
      updated = optionId;
    }

    const nextAnswers = {
      ...userAnswers,
      [questionId]: updated
    };

    set({ userAnswers: nextAnswers });

    // Sync to active test storage for reload resilience
    const activeTest = localStorageService.getActiveTest();
    if (activeTest) {
      localStorageService.setActiveTest({
        ...activeTest,
        userAnswers: nextAnswers
      });
    }
  },

  toggleFlag: (questionId) => {
    const { flaggedIds } = get();
    let nextFlags;
    if (flaggedIds.includes(questionId)) {
      nextFlags = flaggedIds.filter((id) => id !== questionId);
    } else {
      nextFlags = [...flaggedIds, questionId];
    }
    set({ flaggedIds: nextFlags });
  },

  setCurrentIndex: (index) => {
    const { questions } = get();
    if (index >= 0 && index < questions.length) {
      set({ currentIndex: index });
    }
  },

  incrementElapsed: () => {
    set((state) => ({ elapsedSeconds: state.elapsedSeconds + 1 }));
  },

  submitTest: () => {
    const { questions, userAnswers, testId, subjectId, subjectName, title, elapsedSeconds } = get();
    
    // Grade exam using domain engine
    const grading = testEngine.gradeTest(questions, userAnswers, elapsedSeconds);

    const fullResult = {
      id: testId,
      subjectId,
      subjectName,
      title,
      score: grading.score,
      totalQuestions: grading.totalQuestions,
      correctCount: grading.correctCount,
      incorrectCount: grading.incorrectCount,
      unansweredCount: grading.unansweredCount,
      passed: grading.passed,
      durationSeconds: elapsedSeconds,
      answers: userAnswers,
      questions,
      detailedResults: grading.detailedResults
    };

    // Save to test history
    localStorageService.saveTestResult(fullResult);
    localStorageService.clearActiveTest();
    useAppStore.getState().refreshStats();

    set({
      status: 'submitted',
      result: fullResult
    });

    return fullResult;
  },

  resetTest: () => {
    set({
      testId: null,
      subjectId: null,
      subjectName: '',
      title: 'Practice Exam',
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      flaggedIds: [],
      startTime: null,
      elapsedSeconds: 0,
      status: 'idle',
      result: null
    });
  }
}));

export default useTestStore;

