import React from 'react';
import { Flag } from 'lucide-react';
import { clsx } from 'clsx';

export const QuestionNavGrid = ({
  questions = [],
  currentIndex = 0,
  userAnswers = {},
  flaggedIds = [],
  onSelectIndex
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h4 className="font-semibold text-sm text-slate-800">Question Navigator</h4>
        <div className="flex items-center gap-2 text-xs">
          <span className="flex items-center gap-1 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block"></span>
            Answered
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block"></span>
            Unanswered
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2 max-h-[380px] overflow-y-auto p-1">
        {questions.map((q, idx) => {
          const ans = userAnswers[q.id];
          const hasAnswer =
            ans !== undefined &&
            ans !== null &&
            !(Array.isArray(ans) && ans.length === 0) &&
            !(typeof ans === 'string' && ans.trim() === '');
          const isFlagged = flaggedIds.includes(q.id);
          const isCurrent = currentIndex === idx;

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectIndex(idx)}
              className={clsx(
                'relative h-10 rounded-lg text-xs font-semibold flex items-center justify-center transition-all duration-150',
                isCurrent && 'ring-2 ring-indigo-600 ring-offset-2',
                hasAnswer
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
                isFlagged && !hasAnswer && 'border border-amber-400 bg-amber-50 text-amber-900'
              )}
            >
              <span>{idx + 1}</span>
              {isFlagged && (
                <Flag
                  className={clsx(
                    'w-2.5 h-2.5 absolute top-1 right-1',
                    hasAnswer ? 'text-amber-300 fill-amber-300' : 'text-amber-500 fill-amber-500'
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionNavGrid;

