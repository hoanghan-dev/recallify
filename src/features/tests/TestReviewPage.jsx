import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Filter,
  Flag,
  FileCheck2,
  RotateCw
} from 'lucide-react';
import { useTestStore } from '../../store/useTestStore.js';
import { localStorageService } from '../../services/storage/localStorageService.js';
import { Badge } from '../../components/common/Badge.jsx';
import { Button } from '../../components/common/Button.jsx';
import { clsx } from 'clsx';

export const TestReviewPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const activeResult = useTestStore((state) => state.result);
  const resetTest = useTestStore((state) => state.resetTest);

  const result = useMemo(() => {
    if (activeResult && activeResult.id === testId) return activeResult;
    const history = localStorageService.getTestHistory();
    return history.find((t) => t.id === testId) || null;
  }, [activeResult, testId]);

  const [activeFilter, setActiveFilter] = useState('ALL'); // 'ALL' | 'INCORRECT'

  if (!result) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Test Record Not Found</h2>
        <Button variant="primary" onClick={() => navigate('/subjects')}>
          Back to Subjects
        </Button>
      </div>
    );
  }

  const detailedItems = result.detailedResults || [];

  const filteredItems = detailedItems.filter((item) => {
    if (activeFilter === 'INCORRECT') return !item.isCorrect;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to={`/tests/${result.id}/result`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Result Scorecard</span>
        </Link>

        <div className="flex items-center gap-2">
          <Badge variant={result.passed ? 'success' : 'danger'} size="sm" className="font-bold">
            Score: {result.score}%
          </Badge>
          <span className="text-xs text-slate-500">
            {result.correctCount} / {result.totalQuestions} Correct
          </span>
        </div>
      </div>

      {/* Review Filter Tabs */}
      <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveFilter('ALL')}
            className={clsx(
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors',
              activeFilter === 'ALL'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            )}
          >
            All Questions ({detailedItems.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('INCORRECT')}
            className={clsx(
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors',
              activeFilter === 'INCORRECT'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            )}
          >
            Missed / Unanswered ({result.incorrectCount + result.unansweredCount})
          </button>
        </div>

        <span className="text-xs text-slate-400 hidden sm:inline px-3">
          Detailed Assessment Review
        </span>
      </div>

      {/* Questions Review List */}
      <div className="space-y-5">
        {filteredItems.map((item, index) => {
          const q = item.question;
          const userAns = item.userSelection;
          const isCorrect = item.isCorrect;
          const isUnanswered = item.isUnanswered;

          return (
            <div
              key={q.id || index}
              className={clsx(
                'bg-white rounded-2xl border p-6 shadow-xs space-y-4',
                isCorrect
                  ? 'border-emerald-200/80'
                  : isUnanswered
                  ? 'border-amber-200/80'
                  : 'border-rose-200/80'
              )}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">Q{index + 1}</span>
                  <Badge
                    variant={isCorrect ? 'success' : isUnanswered ? 'warning' : 'danger'}
                    size="xs"
                    className="font-bold"
                  >
                    {isCorrect ? 'Correct' : isUnanswered ? 'Unanswered' : 'Incorrect'}
                  </Badge>
                  {q.topic && (
                    <span className="text-xs text-slate-500 font-medium truncate max-w-xs">
                      {q.topic}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Prompt */}
              <div className="text-base font-bold text-slate-900 leading-relaxed">
                {q.question}
              </div>

              {/* Options Review List */}
              <div className="space-y-2 pt-1">
                {q.options.map((opt) => {
                  const isOfficialCorrect = Array.isArray(q.correctAnswer)
                    ? q.correctAnswer.includes(opt.id)
                    : opt.id === q.correctAnswer;

                  const isUserSelected = Array.isArray(userAns)
                    ? userAns.includes(opt.id)
                    : userAns === opt.id;

                  let optStyles = 'bg-slate-50/70 border-slate-200/80 text-slate-700';
                  if (isOfficialCorrect) {
                    optStyles = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium ring-1 ring-emerald-400/30';
                  } else if (isUserSelected && !isOfficialCorrect) {
                    optStyles = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                  }

                  return (
                    <div
                      key={opt.id}
                      className={clsx('p-3 rounded-xl border text-xs flex items-start gap-2.5', optStyles)}
                    >
                      <span
                        className={clsx(
                          'w-5 h-5 rounded flex items-center justify-center font-bold text-[11px] shrink-0',
                          isOfficialCorrect
                            ? 'bg-emerald-600 text-white'
                            : isUserSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        )}
                      >
                        {opt.id}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <span>{opt.text}</span>
                        {isUserSelected && (
                          <span className="ml-2 font-bold text-[11px] text-slate-600">
                            (Your selection)
                          </span>
                        )}
                        {isOfficialCorrect && (
                          <span className="ml-2 font-bold text-[11px] text-emerald-700">
                            (Correct Answer)
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Source Reference */}
              {item.explanation && (
                <div className="p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs text-indigo-950 leading-relaxed">
                  <span className="font-bold text-indigo-900 block mb-0.5">Official Explanation:</span>
                  {item.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Return to Dashboard Footer */}
      <div className="text-center pt-6">
        <Button
          variant="outline"
          size="md"
          onClick={() => {
            resetTest();
            navigate('/');
          }}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default TestReviewPage;

