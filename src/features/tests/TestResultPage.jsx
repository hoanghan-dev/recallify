import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCw,
  FileText,
  Clock,
  ArrowRight,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTestStore } from '../../store/useTestStore.js';
import { localStorageService } from '../../services/storage/localStorageService.js';
import { ScoreRadial } from '../../components/common/ScoreRadial.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { Button } from '../../components/common/Button.jsx';

export const TestResultPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const activeResult = useTestStore((state) => state.result);
  const resetTest = useTestStore((state) => state.resetTest);

  // If not currently in memory, load from test history
  const result = useMemo(() => {
    if (activeResult && activeResult.id === testId) return activeResult;
    const history = localStorageService.getTestHistory();
    return history.find((t) => t.id === testId) || null;
  }, [activeResult, testId]);

  useEffect(() => {
    if (result && result.passed) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [result]);

  if (!result) {
    return (
      <div className="py-20 text-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-800">Test Record Not Found</h2>
        <Button variant="primary" onClick={() => navigate('/subjects')}>
          Back to Subjects
        </Button>
      </div>
    );
  }

  const formatDuration = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}m ${rem}s`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link
          to={`/subjects/${result.subjectId}`}
          onClick={resetTest}
          className="hover:text-slate-800 transition-colors"
        >
          ← Return to {result.subjectName || 'Subject'}
        </Link>
        <span>Test ID: {result.id}</span>
      </div>

      {/* Main Result Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-md text-center space-y-8">
        <div className="space-y-3 max-w-lg mx-auto">
          <Badge
            variant={result.passed ? 'success' : 'danger'}
            size="md"
            className="font-bold uppercase tracking-wider text-xs px-3 py-1"
          >
            {result.passed ? 'Exam Passed' : 'Exam Not Passed'}
          </Badge>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {result.title}
          </h1>

          <p className="text-sm text-slate-600">
            {result.passed
              ? 'Outstanding performance! You exceeded the 70% passing threshold for this exam.'
              : 'Keep practicing! Review your missed questions below to reinforce the core principles.'}
          </p>
        </div>

        {/* Circular Gauge and Stats Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
          <ScoreRadial
            score={result.score}
            size={160}
            strokeWidth={12}
            passed={result.passed}
            label={result.passed ? 'Passed' : 'Score'}
          />

          <div className="grid grid-cols-2 gap-4 text-left w-full sm:w-72">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">Total Questions</span>
              <span className="text-xl font-bold text-slate-900">{result.totalQuestions}</span>
            </div>
            <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase block">Correct</span>
              <span className="text-xl font-bold text-emerald-700">{result.correctCount}</span>
            </div>
            <div className="bg-rose-50 p-3.5 rounded-xl border border-rose-100">
              <span className="text-[11px] font-semibold text-rose-800 uppercase block">Incorrect</span>
              <span className="text-xl font-bold text-rose-700">{result.incorrectCount}</span>
            </div>
            <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-100">
              <span className="text-[11px] font-semibold text-amber-800 uppercase block">Unanswered</span>
              <span className="text-xl font-bold text-amber-700">{result.unansweredCount}</span>
            </div>
          </div>
        </div>

        {/* Duration Meta */}
        <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200/60">
          <Clock className="w-3.5 h-3.5" />
          <span>Completion Time: {formatDuration(result.durationSeconds || 0)}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-slate-100">
          <Button
            variant="primary"
            size="lg"
            icon={FileText}
            onClick={() => navigate(`/tests/${result.id}/review`)}
          >
            Review All Answers
          </Button>

          <Button
            variant="outline"
            size="lg"
            icon={RotateCw}
            onClick={() => {
              resetTest();
              navigate(`/subjects/${result.subjectId}`);
            }}
          >
            Take Another Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResultPage;

