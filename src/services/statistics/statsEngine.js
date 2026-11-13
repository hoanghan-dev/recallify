// Aggregates and calculates statistics for dashboard and progress analytics
import { subjects } from '../../data/subjects.js';
import { localStorageService } from '../storage/localStorageService.js';

export const statsEngine = {
  getOverviewMetrics() {
    const stats = localStorageService.getStats();
    const testHistory = localStorageService.getTestHistory();
    const bookmarks = localStorageService.getBookmarks();

    const totalSubjects = subjects.length;
    const totalQuestions = subjects.reduce((sum, s) => sum + s.totalQuestions, 0);

    const masteredCount = (stats.masteredQuestions || []).length;
    const totalAnswered = stats.totalAnswered || 0;
    const totalCorrect = stats.totalCorrect || 0;

    const globalAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const completedTestsCount = testHistory.length;

    const averageTestScore =
      completedTestsCount > 0
        ? Math.round(
            testHistory.reduce((sum, t) => sum + (t.score || 0), 0) / completedTestsCount
          )
        : 0;

    // Subject breakdown
    const subjectProgress = subjects.map((subj) => {
      const subStat = stats.subjectStats[subj.id] || { answered: 0, correct: 0, mastered: [] };
      const mastered = (subStat.mastered || []).length;
      const masteryPercentage = subj.totalQuestions > 0 ? Math.round((mastered / subj.totalQuestions) * 100) : 0;
      const accuracy = subStat.answered > 0 ? Math.round((subStat.correct / subStat.answered) * 100) : 0;

      return {
        ...subj,
        answered: subStat.answered,
        correct: subStat.correct,
        mastered,
        masteryPercentage,
        accuracy
      };
    });

    return {
      totalSubjects,
      totalQuestions,
      masteredCount,
      totalAnswered,
      globalAccuracy,
      completedTestsCount,
      averageTestScore,
      bookmarkedCount: bookmarks.length,
      subjectProgress,
      recentTests: testHistory.slice(0, 5)
    };
  }
};

export default statsEngine;

