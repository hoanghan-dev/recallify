import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="font-semibold text-slate-700">Recallify</span>
          <span>— Autonomous Exam Preparation Platform</span>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-slate-800 transition-colors">Dashboard</Link>
          <Link to="/subjects" className="hover:text-slate-800 transition-colors">Subjects</Link>
          <Link to="/analytics" className="hover:text-slate-800 transition-colors">Analytics</Link>
          <span className="text-slate-300">|</span>
          <span className="inline-flex items-center gap-1">
            Inspired by Quizlet <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

