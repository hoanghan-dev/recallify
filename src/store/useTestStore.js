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
      currentIndex: 0,
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

  restoreActiveTest: () => {
    const activeTest = localStorageService.getActiveTest();
    if (activeTest && activeTest.questions && activeTest.questions.length > 0 && activeTest.status === 'in_progress') {
      const elapsed = activeTest.startTime
        ? Math.floor((Date.now() - activeTest.startTime) / 1000)
        : activeTest.elapsedSeconds || 0;

      set({
        testId: activeTest.testId,
        subjectId: activeTest.subjectId,
        subjectName: activeTest.subjectName,
        title: activeTest.title,
        questions: activeTest.questions,
        currentIndex: activeTest.currentIndex || 0,
        userAnswers: activeTest.userAnswers || {},
        flaggedIds: activeTest.flaggedIds || [],
        startTime: activeTest.startTime,
        elapsedSeconds: elapsed,
        status: 'in_progress',
        result: null
      });
      return true;
    }
    return false;
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

    const activeTest = localStorageService.getActiveTest();
    if (activeTest) {
      localStorageService.setActiveTest({
        ...activeTest,
        flaggedIds: nextFlags
      });
    }
  },

  setCurrentIndex: (index) => {
    const { questions } = get();
    if (index >= 0 && index < questions.length) {
      set({ currentIndex: index });
      const activeTest = localStorageService.getActiveTest();
      if (activeTest) {
        localStorageService.setActiveTest({
          ...activeTest,
          currentIndex: index
        });
      }
    }
  },

  incrementElapsed: () => {
    set((state) => {
      const nextElapsed = state.elapsedSeconds + 1;
      // Periodically sync elapsed seconds
      if (nextElapsed % 5 === 0) {
        const activeTest = localStorageService.getActiveTest();
        if (activeTest) {
          localStorageService.setActiveTest({
            ...activeTest,
            elapsedSeconds: nextElapsed
          });
        }
      }
      return { elapsedSeconds: nextElapsed };
    });
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
    localStorageService.clearActiveTest();
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

