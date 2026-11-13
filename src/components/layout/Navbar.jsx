import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles, BookOpen, Layers, BarChart3, Bookmark, RotateCcw, AlertTriangle } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore.js';
import { Modal } from '../common/Modal.jsx';
import { Button } from '../common/Button.jsx';
import { clsx } from 'clsx';

export const Navbar = () => {
  const { metrics, bookmarks, resetProgress } = useAppStore();
  const [showResetModal, setShowResetModal] = useState(false);

  const handleConfirmReset = () => {
    resetProgress();
    setShowResetModal(false);
  };

  const navLinkClasses = ({ isActive }) =>
    clsx(
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150',
      isActive
        ? 'bg-indigo-50 text-indigo-700 font-semibold'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
    );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                Recallify
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 -mt-1">
                Exam Prep
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <NavLink to="/" end className={navLinkClasses}>
              <Layers className="w-4 h-4" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/subjects" className={navLinkClasses}>
              <BookOpen className="w-4 h-4" />
              <span>Subjects</span>
            </NavLink>
            <NavLink to="/analytics" className={navLinkClasses}>
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </NavLink>
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            {/* Mastered Badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200/80 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{metrics.masteredCount} Mastered</span>
            </div>

            {/* Bookmarks Counter */}
            <Link
              to="/analytics#bookmarks"
              className="flex items-center gap-1.5 p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title={`${bookmarks.length} Bookmarked questions`}
            >
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span className="text-xs font-semibold">{bookmarks.length}</span>
            </Link>

            {/* Reset Progress Button */}
            <button
              onClick={() => setShowResetModal(true)}
              className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title="Reset All Progress"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Reset Confirmation Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset All Study Progress"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <p>
              This will clear your learning progress, test scores, answered history, and bookmarks from local storage.
              <strong> Original subject question banks will NOT be affected.</strong>
            </p>
          </div>
          <p className="text-sm text-slate-600">
            Are you sure you want to reset all data and start fresh?
          </p>
          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <Button variant="outline" onClick={() => setShowResetModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmReset}>
              Yes, Reset Everything
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;

