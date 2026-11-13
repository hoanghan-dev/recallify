import { create } from 'zustand';
import { localStorageService } from '../services/storage/localStorageService.js';
import { statsEngine } from '../services/statistics/statsEngine.js';

export const useAppStore = create((set, get) => ({
  bookmarks: localStorageService.getBookmarks(),
  metrics: statsEngine.getOverviewMetrics(),

  refreshStats: () => {
    set({
      metrics: statsEngine.getOverviewMetrics(),
      bookmarks: localStorageService.getBookmarks()
    });
  },

  toggleBookmark: (questionId) => {
    const updated = localStorageService.toggleBookmark(questionId);
    set({ bookmarks: updated });
    get().refreshStats();
  },

  isBookmarked: (questionId) => {
    return get().bookmarks.includes(questionId);
  },

  resetProgress: () => {
    localStorageService.resetAllProgress();
    get().refreshStats();
  }
}));

export default useAppStore;

