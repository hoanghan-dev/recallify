import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Clock,
  Flag,
  ArrowLeft,
  ArrowRight,
  Send,
  AlertTriangle,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';
import { useTestStore } from '../../store/useTestStore.js';
import { testEngine } from '../../services/testing/testEngine.js';
import { QuestionNavGrid } from '../../components/questions/QuestionNavGrid.jsx';
import { Button } from '../../components/common/Button.jsx';
import { Modal } from '../../components/common/Modal.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { clsx } from 'clsx';

export const TestRunnerPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();

  const {
    title,
    subjectId,
    subjectName,
    questions,
    currentIndex,
    userAnswers,
    flaggedIds,
    elapsedSeconds,
    status,
    setAnswer,
    toggleFlag,
    setCurrentIndex,
    incrementElapsed,
    submitTest
  } = useTestStore();

  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Guard & Restore: if no active test or invalid state, try restoring from localStorage
  useEffect(() => {
    if (!questions || questions.length === 0 || status === 'idle') {
      const restored = useTestStore.getState().restoreActiveTest();
      if (!restored) {
        navigate('/subjects');
      }
    }
  }, [questions, status, navigate]);

  // Elapsed timer interval
  useEffect(() => {
    if (status !== 'in_progress') return;
    const interval = setInterval(() => {
      incrementElapsed();
    }, 1000);
    return () => clearInterval(interval);
  }, [status, incrementElapsed]);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];
  const isMultiple = Array.isArray(currentQ?.correctAnswer) || currentQ?.type === 'multiple';
  const isFlagged = flaggedIds.includes(currentQ?.id);

  // Count unanswered
  const unansweredCount = testEngine.countUnanswered(questions, userAnswers);
  const answeredCount = questions.length - unansweredCount;

  // Format timer
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remaining = secs % 60;
    return `${mins}:${remaining < 10 ? '0' : ''}${remaining}`;
  };

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false);
    const result = submitTest();
    navigate(`/tests/${result.id}/result`);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Test Runner Top Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant="primary" size="xs">{subjectName || 'Exam'}</Badge>
            <span className="text-xs text-slate-400">• Formal Assessment</span>
          </div>
          <h1 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer Widget */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-xl text-slate-800 text-sm font-semibold font-mono">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>

          {/* Submit Exam Button */}
          <Button
            variant="success"
            size="md"
            icon={Send}
            onClick={() => setShowSubmitModal(true)}
          >
            Submit Test
          </Button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Active Question Assessment Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Question Index & Flag Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-indigo-700">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <Badge variant={isMultiple ? 'purple' : 'default'} size="xs">
                {isMultiple ? 'Multiple Choice' : 'Single Choice'}
              </Badge>
            </div>

            {/* Flag for Review Button */}
            <button
              type="button"
              onClick={() => toggleFlag(currentQ.id)}
              className={clsx(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-colors',
                isFlagged
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              )}
            >
              <Flag className={clsx('w-3.5 h-3.5', isFlagged && 'fill-amber-600 text-amber-600')} />
              <span>{isFlagged ? 'Flagged for Review' : 'Flag Question'}</span>
            </button>
          </div>

          {/* Question Content */}
          <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </div>

          {/* Options (Strictly No Answer Leaks / Hints) */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const currentAns = userAnswers[currentQ.id];
              const isSelected = isMultiple
                ? Array.isArray(currentAns) && currentAns.includes(opt.id)
                : currentAns === opt.id;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setAnswer(currentQ.id, opt.id)}
                  className={clsx(
                    'w-full flex items-start gap-3.5 p-4 rounded-xl border text-left transition-all duration-150',
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 text-indigo-950 ring-1 ring-indigo-600/30 shadow-xs'
                      : 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60 text-slate-800'
                  )}
                >
                  <div
                    className={clsx(
                      'w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors',
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    {opt.id}
                  </div>
                  <div className="flex-1 text-[15px] leading-relaxed pt-0.5">
                    {opt.text}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <Button
              variant="outline"
              size="md"
              icon={ArrowLeft}
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              Previous
            </Button>

            {currentIndex < questions.length - 1 ? (
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="success"
                size="md"
                icon={Send}
                onClick={() => setShowSubmitModal(true)}
              >
                Submit Exam
              </Button>
            )}
          </div>
        </div>

        {/* Right: Question Navigation Grid (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <QuestionNavGrid
            questions={questions}
            currentIndex={currentIndex}
            userAnswers={userAnswers}
            flaggedIds={flaggedIds}
            onSelectIndex={setCurrentIndex}
          />

          <div className="bg-slate-50 rounded-2xl border border-slate-200/70 p-4 text-xs text-slate-500 space-y-2">
            <div className="flex justify-between">
              <span>Answered:</span>
              <span className="font-semibold text-slate-800">{answeredCount} of {questions.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Unanswered:</span>
              <span className="font-semibold text-amber-600">{unansweredCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Flagged:</span>
              <span className="font-semibold text-amber-700">{flaggedIds.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Test Submission Confirmation Modal */}
      <Modal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        title="Confirm Test Submission"
      >
        <div className="space-y-4">
          {unansweredCount > 0 ? (
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">You have {unansweredCount} unanswered questions!</span>
                Unanswered questions will receive 0 points. Are you sure you are ready to finalize and grade this test?
              </div>
            </div>
          ) : (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">All {questions.length} questions answered!</span>
                You are ready to submit your test and review your score breakdown.
              </div>
            </div>
          )}

          <p className="text-xs text-slate-600">
            Once submitted, your answers will be locked, scored, and logged to your historical record.
          </p>

          <div className="flex justify-end gap-2.5 pt-3 border-t border-slate-100">
            <Button variant="outline" onClick={() => setShowSubmitModal(false)}>
              Return to Test
            </Button>
            <Button variant="success" icon={Send} onClick={handleConfirmSubmit}>
              Submit & View Results
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TestRunnerPage;

