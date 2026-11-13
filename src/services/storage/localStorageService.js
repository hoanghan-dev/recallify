// Safe localStorage persistence service with versioning and corruption handling

const STORAGE_KEYS = {
  STATS: 'recallify_stats_v1',
  TESTS: 'recallify_tests_v1',
  BOOKMARKS: 'recallify_bookmarks_v1',
  ACTIVE_LEARNING: 'recallify_learning_v1',
  ACTIVE_TEST: 'recallify_active_test_v1',
  FLASHCARDS: 'recallify_flashcards_v1'
};

const DEFAULT_STATS = {
  totalAnswered: 0,
  totalCorrect: 0,
  masteredQuestions: [], // array of question IDs mastered in learning mode
  attemptedQuestions: {}, // { [questionId]: { attempts: number, correct: number, lastAttempt: timestamp } }
  subjectStats: {
    swd301: { answered: 0, correct: 0, mastered: [] },
    sba301: { answered: 0, correct: 0, mastered: [] }
  }
};

export const localStorageService = {
  get(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      if (item === null || item === undefined) return defaultValue;
      return JSON.parse(item);
    } catch (err) {
      console.warn(`[Recallify Storage] Failed to parse key: ${key}. Returning fallback.`, err);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`[Recallify Storage] Failed to save key: ${key}`, err);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error(`[Recallify Storage] Failed to remove key: ${key}`, err);
    }
  },

  // Bookmarks
  getBookmarks() {
    return this.get(STORAGE_KEYS.BOOKMARKS, []);
  },

  isBookmarked(questionId) {
    const list = this.getBookmarks();
    return list.includes(questionId);
  },

  toggleBookmark(questionId) {
    const current = this.getBookmarks();
    let updated;
    if (current.includes(questionId)) {
      updated = current.filter((id) => id !== questionId);
    } else {
      updated = [...current, questionId];
    }
    this.set(STORAGE_KEYS.BOOKMARKS, updated);
    return updated;
  },

  // Stats
  getStats() {
    const stats = this.get(STORAGE_KEYS.STATS, DEFAULT_STATS);
    // Ensure all expected fields exist
    return {
      ...DEFAULT_STATS,
      ...stats,
      masteredQuestions: stats.masteredQuestions || [],
      attemptedQuestions: stats.attemptedQuestions || {},
      subjectStats: {
        ...DEFAULT_STATS.subjectStats,
        ...(stats.subjectStats || {})
      }
    };
  },

  recordAnswer(subjectId, questionId, isCorrect) {
    const stats = this.getStats();
    stats.totalAnswered += 1;
    if (isCorrect) stats.totalCorrect += 1;

    // Record question attempt
    const prevAttempt = stats.attemptedQuestions[questionId] || { attempts: 0, correct: 0 };
    stats.attemptedQuestions[questionId] = {
      attempts: prevAttempt.attempts + 1,
      correct: prevAttempt.correct + (isCorrect ? 1 : 0),
      lastAttempt: Date.now()
    };

    // Update subject-level stats
    if (!stats.subjectStats[subjectId]) {
      stats.subjectStats[subjectId] = { answered: 0, correct: 0, mastered: [] };
    }
    stats.subjectStats[subjectId].answered += 1;
    if (isCorrect) {
      stats.subjectStats[subjectId].correct += 1;
    }

    this.set(STORAGE_KEYS.STATS, stats);
    return stats;
  },

  markQuestionsMastered(subjectId, questionIds) {
    const stats = this.getStats();
    const currentGlobal = new Set(stats.masteredQuestions);
    questionIds.forEach((id) => currentGlobal.add(id));
    stats.masteredQuestions = Array.from(currentGlobal);

    if (!stats.subjectStats[subjectId]) {
      stats.subjectStats[subjectId] = { answered: 0, correct: 0, mastered: [] };
    }
    const currentSub = new Set(stats.subjectStats[subjectId].mastered || []);
    questionIds.forEach((id) => currentSub.add(id));
    stats.subjectStats[subjectId].mastered = Array.from(currentSub);

    this.set(STORAGE_KEYS.STATS, stats);
    return stats;
  },

  // Test History
  getTestHistory() {
    return this.get(STORAGE_KEYS.TESTS, []);
  },

  saveTestResult(testResult) {
    const history = this.getTestHistory();
    const newEntry = {
      id: testResult.id || `test-${Date.now()}`,
      subjectId: testResult.subjectId,
      subjectName: testResult.subjectName,
      title: testResult.title,
      score: testResult.score,
      totalQuestions: testResult.totalQuestions,
      correctCount: testResult.correctCount,
      incorrectCount: testResult.incorrectCount,
      unansweredCount: testResult.unansweredCount,
      passed: testResult.score >= 70,
      durationSeconds: testResult.durationSeconds || 0,
      timestamp: Date.now(),
      answers: testResult.answers || {},
      questions: testResult.questions || []
    };
    const updated = [newEntry, ...history];
    this.set(STORAGE_KEYS.TESTS, updated);
    return updated;
  },

  // Active session cache
  getActiveTest() {
    return this.get(STORAGE_KEYS.ACTIVE_TEST, null);
  },

  setActiveTest(testData) {
    this.set(STORAGE_KEYS.ACTIVE_TEST, testData);
  },

  clearActiveTest() {
    this.remove(STORAGE_KEYS.ACTIVE_TEST);
  },

  // Active Learning session cache
  getActiveLearning(subjectId) {
    const all = this.get(STORAGE_KEYS.ACTIVE_LEARNING, {});
    return all[subjectId] || null;
  },

  setActiveLearning(subjectId, state) {
    const all = this.get(STORAGE_KEYS.ACTIVE_LEARNING, {});
    all[subjectId] = {
      ...state,
      lastUpdated: Date.now()
    };
    this.set(STORAGE_KEYS.ACTIVE_LEARNING, all);
    return all[subjectId];
  },

  clearActiveLearning(subjectId) {
    const all = this.get(STORAGE_KEYS.ACTIVE_LEARNING, {});
    delete all[subjectId];
    this.set(STORAGE_KEYS.ACTIVE_LEARNING, all);
  },

  getAllActiveLearning() {
    return this.get(STORAGE_KEYS.ACTIVE_LEARNING, {});
  },

  // Flashcards Progress
  getFlashcardsProgress(subjectId) {
    const all = this.get(STORAGE_KEYS.FLASHCARDS, {});
    return all[subjectId] || null;
  },

  setFlashcardsProgress(subjectId, progress) {
    const all = this.get(STORAGE_KEYS.FLASHCARDS, {});
    all[subjectId] = {
      ...(all[subjectId] || {}),
      ...progress,
      lastUpdated: Date.now()
    };
    this.set(STORAGE_KEYS.FLASHCARDS, all);
    return all[subjectId];
  },

  clearFlashcardsProgress(subjectId) {
    const all = this.get(STORAGE_KEYS.FLASHCARDS, {});
    delete all[subjectId];
    this.set(STORAGE_KEYS.FLASHCARDS, all);
  },

  getAllFlashcardsProgress() {
    return this.get(STORAGE_KEYS.FLASHCARDS, {});
  },

  // Reset progress for a specific subject
  resetSubjectProgress(subjectId) {
    this.clearActiveLearning(subjectId);
    this.clearFlashcardsProgress(subjectId);

    const stats = this.getStats();
    if (stats.subjectStats && stats.subjectStats[subjectId]) {
      const subMastered = stats.subjectStats[subjectId].mastered || [];
      stats.masteredQuestions = (stats.masteredQuestions || []).filter((id) => !subMastered.includes(id));
      stats.totalAnswered = Math.max(0, (stats.totalAnswered || 0) - (stats.subjectStats[subjectId].answered || 0));
      stats.totalCorrect = Math.max(0, (stats.totalCorrect || 0) - (stats.subjectStats[subjectId].correct || 0));
      stats.subjectStats[subjectId] = { answered: 0, correct: 0, mastered: [] };
    }
    if (stats.attemptedQuestions) {
      Object.keys(stats.attemptedQuestions).forEach((qid) => {
        if (qid.toLowerCase().includes(subjectId.toLowerCase())) {
          delete stats.attemptedQuestions[qid];
        }
      });
    }
    this.set(STORAGE_KEYS.STATS, stats);

    const tests = this.getTestHistory().filter((t) => t.subjectId !== subjectId);
    this.set(STORAGE_KEYS.TESTS, tests);
    return true;
  },

  // Reset progress completely (preserves immutable mock data)
  resetAllProgress() {
    Object.values(STORAGE_KEYS).forEach((key) => {
      this.remove(key);
    });
    return true;
  }
};

export default localStorageService;

