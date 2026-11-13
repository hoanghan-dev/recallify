import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  RotateCw,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { subjects } from '../../data/subjects.js';
import { getQuestionsBySubjectId } from '../../data/questions/index.js';
import { useLearningStore } from '../../store/useLearningStore.js';
import { useAppStore } from '../../store/useAppStore.js';
import { OptionItem } from '../../components/questions/OptionItem.jsx';
import { Button } from '../../components/common/Button.jsx';
import { ProgressBar } from '../../components/common/ProgressBar.jsx';
import { Badge } from '../../components/common/Badge.jsx';
import { ScoreRadial } from '../../components/common/ScoreRadial.jsx';
import { clsx } from 'clsx';

export const LearningPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];
  const allQuestions = useMemo(() => getQuestionsBySubjectId(subject.id), [subject.id]);

  const {
    round,
    queue,
    currentIndex,
    roundCorrect,
    roundIncorrect,
    mastered,
    userSelection,
    feedback,
    isEvaluated,
    isRoundComplete,
    isAllMastered,
    isResumed,
    initOrResumeSession,
    restartSession,
    selectOption,
    evaluateCurrentAnswer,
    continueToNext,
    startRepetitionRound,
    finishSession
  } = useLearningStore();

  // Initialize or resume session when subject changes
  useEffect(() => {
    initOrResumeSession(subject.id, allQuestions);
  }, [subject.id, allQuestions, initOrResumeSession]);

  // Trigger celebration confetti when 100% mastery achieved
  useEffect(() => {
    if (isRoundComplete && isAllMastered) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isRoundComplete, isAllMastered]);

  const currentQ = queue[currentIndex];
  const isMultiple = Array.isArray(currentQ?.correctAnswer) || currentQ?.type === 'multiple';

  const autoNextTimeoutRef = useRef(null);

  // Auto-next question after 1s when answer is correct; manual continue when incorrect
  useEffect(() => {
    if (isEvaluated && feedback?.isCorrect && !isRoundComplete) {
      autoNextTimeoutRef.current = setTimeout(() => {
        continueToNext();
      }, 200);
    }

    return () => {
      if (autoNextTimeoutRef.current) {
        clearTimeout(autoNextTimeoutRef.current);
        autoNextTimeoutRef.current = null;
      }
    };
  }, [isEvaluated, feedback?.isCorrect, currentIndex, isRoundComplete, continueToNext]);

  const handleManualContinue = useCallback(() => {
    if (autoNextTimeoutRef.current) {
      clearTimeout(autoNextTimeoutRef.current);
      autoNextTimeoutRef.current = null;
    }
    continueToNext();
  }, [continueToNext]);

  // Handle enter key to continue or check answer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        if (isEvaluated && !isRoundComplete) {
          e.preventDefault();
          handleManualContinue();
        } else if (!isEvaluated && isMultiple && userSelection && userSelection.length > 0) {
          e.preventDefault();
          evaluateCurrentAnswer();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEvaluated, isRoundComplete, isMultiple, userSelection, handleManualContinue, evaluateCurrentAnswer]);

  if (!currentQ && !isRoundComplete) {
    return (
      <div className="py-20 text-center text-slate-500 space-y-4">
        <Brain className="w-12 h-12 mx-auto text-indigo-500 animate-pulse" />
        <p>Loading questions for {subject.name}...</p>
      </div>
    );
  }

  const answeredInRound = currentIndex + (isEvaluated ? 1 : 0);
  const roundAccuracy =
    roundCorrect.length + roundIncorrect.length > 0
      ? Math.round(
        (roundCorrect.length / (roundCorrect.length + roundIncorrect.length)) * 100
      )
      : 100;

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-300">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to={`/subjects/${subject.id}`}
          onClick={finishSession}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Learning Session</span>
        </Link>

        {/* Round Badge & Subject Info */}
        <div className="flex items-center gap-2">
          <Badge variant={round === 1 ? 'primary' : 'warning'} size="sm" className="font-bold">
            {round === 1 ? 'Round 1: Initial Learning' : `Repetition Round ${round}`}
          </Badge>
          <Badge variant="default" size="sm">{subject.code}</Badge>
        </div>
      </div>

      {/* Auto-Restored Session Banner */}
      {isResumed && !isRoundComplete && (
        <div className="bg-indigo-50/90 border border-indigo-200/80 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-indigo-950 shadow-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Đã tự động khôi phục tiến trình học tập</p>
              <p className="text-slate-600 text-[11px]">Đang tiếp tục tại Vòng {round}, Câu {currentIndex + 1} của {queue.length}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => restartSession(subject.id, allQuestions)}
            className="text-xs font-bold text-indigo-700 hover:text-indigo-900 bg-white px-3 py-1.5 rounded-lg border border-indigo-200 hover:border-indigo-300 shadow-2xs transition-all self-start sm:self-auto cursor-pointer"
          >
            Học lại từ đầu
          </button>
        </div>
      )}

      {/* Real-Time Session Status Bar */}
      {!isRoundComplete && (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-700">
              Question {currentIndex + 1} of {queue.length} in this round
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-emerald-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {roundCorrect.length} Correct
              </span>
              <span className="flex items-center gap-1 text-rose-600 font-bold">
                <XCircle className="w-3.5 h-3.5" />
                {roundIncorrect.length} Incorrect
              </span>
              <span className="text-slate-400">|</span>
              <span className="font-bold text-indigo-700">
                {roundAccuracy}% Accuracy
              </span>
            </div>
          </div>
          <ProgressBar
            value={currentIndex + 1}
            max={queue.length}
            variant="primary"
            size="sm"
          />
        </div>
      )}

      {/* ================= ACTIVE QUESTION CONTAINER ================= */}
      {!isRoundComplete && currentQ && (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Question Topic Header */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-400">Q{currentIndex + 1}</span>
              {currentQ.topic && (
                <span className="text-xs font-semibold text-slate-600">
                  {currentQ.topic}
                </span>
              )}
            </div>
            <Badge variant={isMultiple ? 'purple' : 'primary'} size="xs">
              {isMultiple ? 'Select all that apply' : 'Single Choice'}
            </Badge>
          </div>

          {/* Question Prompt */}
          <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </div>

          {/* Options List */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = isMultiple
                ? Array.isArray(userSelection) && userSelection.includes(opt.id)
                : userSelection === opt.id;

              const isOptCorrect = feedback
                ? feedback.correctAnswers.includes(opt.id)
                : false;

              const isUserIncorrect = feedback
                ? !feedback.isCorrect && isSelected && !isOptCorrect
                : false;

              return (
                <OptionItem
                  key={opt.id}
                  id={opt.id}
                  text={opt.text}
                  isSelected={isSelected}
                  isMultiple={isMultiple}
                  isEvaluated={isEvaluated}
                  isCorrect={isOptCorrect}
                  isUserIncorrectChoice={isUserIncorrect}
                  onClick={() => selectOption(opt.id)}
                />
              );
            })}
          </div>

          {/* Multi-Choice Submit Button (before evaluation) */}
          {isMultiple && !isEvaluated && (
            <div className="flex justify-end pt-2">
              <Button
                variant="primary"
                size="md"
                disabled={!userSelection || userSelection.length === 0}
                onClick={() => evaluateCurrentAnswer()}
              >
                Check Answer
              </Button>
            </div>
          )}

          {/* ================= IMMEDIATE FEEDBACK BANNER ================= */}
          {isEvaluated && feedback && (
            <div className="animate-in fade-in duration-200 pt-3 space-y-4">
              <div
                className={clsx(
                  'p-4 rounded-2xl border flex items-start gap-3.5',
                  feedback.isCorrect
                    ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                    : 'bg-rose-50/90 border-rose-300 text-rose-950'
                )}
              >
                {feedback.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-sm">
                      {feedback.isCorrect
                        ? 'Chính xác! Đã nắm vững câu hỏi này.'
                        : 'Chưa chính xác! Câu này sẽ lặp lại ở vòng sau.'}
                    </span>

                    {feedback.isCorrect && (
                      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/90 px-2 py-0.5 rounded-full inline-flex items-center gap-1.5 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        <span>Tự động chuyển câu sau 1s</span>
                      </span>
                    )}
                  </div>

                  {!feedback.isCorrect && (
                    <div className="text-xs font-semibold text-emerald-900 pt-1">
                      Đáp án đúng:{' '}
                      <span className="font-extrabold">{feedback.correctAnswers.join(', ')}</span>
                    </div>
                  )}

                  {feedback.explanation && (
                    <div className="text-xs leading-relaxed text-slate-700 bg-white/70 p-3 rounded-xl border border-slate-200/60 mt-2">
                      <span className="font-semibold block mb-0.5 text-slate-900">Giải thích:</span>
                      {feedback.explanation}
                    </div>
                  )}
                </div>
              </div>

              {/* Continue Button */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {feedback.isCorrect
                    ? 'Đang tự động chuyển tiếp hoặc bấm '
                    : 'Xem lại giải thích rồi bấm '}
                  <kbd className="font-mono bg-slate-100 px-1.5 py-0.5 rounded border text-slate-600">Enter</kbd>
                </span>
                <Button
                  variant={feedback.isCorrect ? 'outline' : 'primary'}
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={handleManualContinue}
                  className="w-full sm:w-auto ml-auto px-6 font-semibold"
                >
                  {currentIndex === queue.length - 1
                    ? 'Xem tổng kết vòng'
                    : feedback.isCorrect
                      ? 'Tiếp tục ngay →'
                      : 'Tiếp tục sang câu sau'}
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= ROUND COMPLETION SUMMARY ================= */}
      {isRoundComplete && (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 text-center shadow-md space-y-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="space-y-3 max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-2">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isAllMastered
                ? 'All Questions Mastered! 🏆'
                : `Round ${round} Summary`}
            </h2>

            <p className="text-sm text-slate-600">
              {isAllMastered
                ? `Incredible job! You have answered all questions in this session correctly.`
                : `You've completed Round ${round}. Recallify's repetition queue is ready to reinforce your missed questions.`}
            </p>
          </div>

          {/* Round Stats Radial & Breakdown */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
            <ScoreRadial score={roundAccuracy} size={150} label="Accuracy" />

            <div className="grid grid-cols-2 gap-4 text-left w-full sm:w-64">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block">Total in Round</span>
                <span className="text-xl font-bold text-slate-900">{queue.length}</span>
              </div>
              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-100">
                <span className="text-[11px] font-semibold text-emerald-800 uppercase block">Correct</span>
                <span className="text-xl font-bold text-emerald-700">{roundCorrect.length}</span>
              </div>
              <div className="bg-rose-50 p-3.5 rounded-xl border border-rose-100">
                <span className="text-[11px] font-semibold text-rose-800 uppercase block">Needs Review</span>
                <span className="text-xl font-bold text-rose-700">{roundIncorrect.length}</span>
              </div>
              <div className="bg-indigo-50 p-3.5 rounded-xl border border-indigo-100">
                <span className="text-[11px] font-semibold text-indigo-800 uppercase block">Total Mastered</span>
                <span className="text-xl font-bold text-indigo-700">{mastered.length}</span>
              </div>
            </div>
          </div>

          {/* Critical Repetition Actions (FR-03 & BR-LRN-04) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
            {roundIncorrect.length > 0 ? (
              <>
                <Button
                  variant="primary"
                  size="lg"
                  icon={RotateCw}
                  onClick={startRepetitionRound}
                  className="w-full sm:w-auto font-bold"
                >
                  Review Incorrect Questions ({roundIncorrect.length})
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    finishSession();
                    navigate(`/subjects/${subject.id}`);
                  }}
                  className="w-full sm:w-auto"
                >
                  Finish Learning Session
                </Button>
              </>
            ) : (
              <Button
                variant="success"
                size="lg"
                icon={CheckCircle2}
                onClick={() => {
                  finishSession();
                  navigate(`/subjects/${subject.id}`);
                }}
                className="w-full sm:w-auto font-bold"
              >
                Complete Session & Return to Subject
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningPage;

