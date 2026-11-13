// Domain engine for Test Mode: Random selection, assessment grading, and review generation
import { learningEngine } from '../learning/learningEngine.js';

export const testEngine = {
  /**
   * Generates a randomized, non-duplicate subset of questions.
   * Guarantees 0 duplicate questions.
   */
  generateTestQuestions(allQuestions, count) {
    if (!allQuestions || allQuestions.length === 0) return [];
    
    // Clamp count
    const safeCount = Math.max(1, Math.min(count, allQuestions.length));
    
    // Fisher-Yates copy and shuffle
    const pool = [...allQuestions];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, safeCount);
  },

  /**
   * Counts unanswered questions in the active exam.
   */
  countUnanswered(questions, userAnswers = {}) {
    if (!questions) return 0;
    return questions.filter((q) => {
      const ans = userAnswers[q.id];
      if (ans === undefined || ans === null) return true;
      if (Array.isArray(ans) && ans.length === 0) return true;
      if (typeof ans === 'string' && ans.trim() === '') return true;
      return false;
    }).length;
  },

  /**
   * Grades the completed test.
   */
  gradeTest(questions, userAnswers = {}, durationSeconds = 0) {
    if (!questions || questions.length === 0) {
      return {
        totalQuestions: 0,
        correctCount: 0,
        incorrectCount: 0,
        unansweredCount: 0,
        score: 0,
        passed: false,
        durationSeconds,
        detailedResults: []
      };
    }

    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const detailedResults = questions.map((question) => {
      const userSelection = userAnswers[question.id];
      const hasAnswer =
        userSelection !== undefined &&
        userSelection !== null &&
        !(Array.isArray(userSelection) && userSelection.length === 0) &&
        !(typeof userSelection === 'string' && userSelection.trim() === '');

      if (!hasAnswer) {
        unansweredCount += 1;
        const evalRes = learningEngine.evaluateAnswer(question, null);
        return {
          question,
          userSelection: null,
          isCorrect: false,
          isUnanswered: true,
          correctAnswers: evalRes.correctAnswers,
          explanation: question.explanation || ''
        };
      }

      const evalRes = learningEngine.evaluateAnswer(question, userSelection);
      if (evalRes.isCorrect) {
        correctCount += 1;
      } else {
        incorrectCount += 1;
      }

      return {
        question,
        userSelection,
        isCorrect: evalRes.isCorrect,
        isUnanswered: false,
        correctAnswers: evalRes.correctAnswers,
        explanation: question.explanation || ''
      };
    });

    const totalQuestions = questions.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    const passed = score >= 70;

    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      unansweredCount,
      score,
      passed,
      durationSeconds,
      detailedResults
    };
  }
};

export default testEngine;

