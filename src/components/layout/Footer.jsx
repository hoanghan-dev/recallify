import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { LogoMark } from '../common/Logo.jsx';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2.5 flex-wrap">
          <LogoMark size="xs" />
          <span className="font-bold text-slate-800 text-sm">
            Recall<span className="text-indigo-600">ify</span>
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200/80 rounded-md">
            Beta Preview
          </span>
          <span className="text-slate-400">•</span>
          <span>Autonomous Exam Preparation Platform</span>
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

