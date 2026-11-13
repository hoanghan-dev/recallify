// Domain engine for Adaptive Learning and Incorrect Question Repetition Queue

export const learningEngine = {
  /**
   * Evaluates a user answer against the question's correct answer.
   * Handles both single choice and multiple choice questions.
   */
  evaluateAnswer(question, selection) {
    if (!question) {
      return { isCorrect: false, correctAnswers: [], selectedAnswers: [], explanation: '' };
    }

    const isMultiple = Array.isArray(question.correctAnswer) || question.type === 'multiple';
    let isCorrect = false;
    let selectedAnswers = [];
    let correctAnswers = [];

    if (isMultiple) {
      // Normalize correct answers to sorted array of uppercase strings
      const rawCorrect = Array.isArray(question.correctAnswer)
        ? question.correctAnswer
        : String(question.correctAnswer || '').split(',').map((s) => s.trim());
      correctAnswers = rawCorrect.map((s) => String(s).toUpperCase()).sort();

      // Normalize selection
      const rawSelected = Array.isArray(selection)
        ? selection
        : selection ? [selection] : [];
      selectedAnswers = rawSelected.map((s) => String(s).toUpperCase()).sort();

      // Exact match for multiple choice
      if (
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every((val, index) => val === correctAnswers[index])
      ) {
        isCorrect = true;
      }
    } else {
      // Single choice
      const singleCorrect = String(question.correctAnswer || '').trim().toUpperCase();
      const singleSelected = String(selection || '').trim().toUpperCase();
      correctAnswers = [singleCorrect];
      selectedAnswers = singleSelected ? [singleSelected] : [];
      isCorrect = singleSelected === singleCorrect;
    }

    return {
      isCorrect,
      isMultiple,
      correctAnswers,
      selectedAnswers,
      explanation: question.explanation || ''
    };
  },

  /**
   * Critical Business Rule (FR-03 & BR-LRN-04):
   * Creates a new repetition round containing ONLY questions that were answered incorrectly.
   * Questions answered correctly in the previous round are graduated and removed.
   */
  generateNextRepetitionRound(currentRoundNumber, currentQueue, incorrectQuestionIds) {
    const errorSet = new Set(incorrectQuestionIds);
    // Filter the current queue to keep only items that were missed
    const nextQueue = currentQueue.filter((q) => errorSet.has(q.id));

    return {
      roundNumber: currentRoundNumber + 1,
      queue: nextQueue,
      totalCount: nextQueue.length
    };
  },

  /**
   * Calculates round statistics.
   */
  calculateRoundStats(totalQuestions, correctCount, incorrectCount) {
    const answered = correctCount + incorrectCount;
    const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;
    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      accuracy,
      isComplete: answered >= totalQuestions,
      isAllMastered: incorrectCount === 0 && correctCount > 0
    };
  }
};

export default learningEngine;

