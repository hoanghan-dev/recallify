import React, { useState, useEffect } from 'react';
import { Bookmark, RotateCw, Sparkles, CheckCircle2, XCircle, Check } from 'lucide-react';
import { clsx } from 'clsx';
import { Badge } from '../common/Badge.jsx';

export const FlipCard = ({
  question,
  questionNumber,
  totalQuestions,
  isFlipped = false,
  isBookmarked = false,
  onFlip,
  onToggleBookmark
}) => {
  const [userGuess, setUserGuess] = useState(null);

  // Reset guess when card changes
  useEffect(() => {
    setUserGuess(null);
  }, [question?.id]);

  if (!question) return null;

  const isMultiple = Array.isArray(question.correctAnswer) || question.type === 'multiple';

  const isGuessCorrect = () => {
    if (!userGuess) return null;
    if (isMultiple) {
      const correctArr = Array.isArray(question.correctAnswer)
        ? question.correctAnswer
        : String(question.correctAnswer || '').split(',').map((s) => s.trim().toUpperCase());
      const guessArr = Array.isArray(userGuess) ? userGuess : [userGuess];
      return (
        guessArr.length === correctArr.length &&
        guessArr.every((g) => correctArr.includes(g))
      );
    }
    return userGuess === question.correctAnswer;
  };

  const handleOptionClick = (e, optId) => {
    e.stopPropagation();
    if (isMultiple) {
      setUserGuess((prev) => {
        const arr = Array.isArray(prev) ? prev : [];
        return arr.includes(optId) ? arr.filter((id) => id !== optId) : [...arr, optId];
      });
    } else {
      setUserGuess((prev) => (prev === optId ? null : optId));
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto perspective-1000 select-none">
      <div
        onClick={onFlip}
        className={clsx(
          'relative w-full min-h-[480px] sm:min-h-[520px] rounded-2xl cursor-pointer transition-transform duration-500 transform-style-3d shadow-md hover:shadow-lg',
          isFlipped ? 'rotate-y-180' : ''
        )}
      >
        {/* ================= CARD FRONT ================= */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="primary" size="sm">
                  Card {questionNumber} / {totalQuestions}
                </Badge>
                {question.topic && (
                  <span className="text-xs text-slate-500 font-medium truncate max-w-[260px] sm:max-w-md">
                    {question.topic}
                  </span>
                )}
                <Badge variant={isMultiple ? 'purple' : 'default'} size="xs">
                  {isMultiple ? 'Select all that apply' : 'Single Choice'}
                </Badge>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark();
                }}
                className={clsx(
                  'p-2 rounded-lg transition-colors',
                  isBookmarked
                    ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                )}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark this question'}
              >
                <Bookmark className={clsx('w-5 h-5', isBookmarked && 'fill-amber-500')} />
              </button>
            </div>

            {/* Question Prompt */}
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                {question.question}
              </h3>
            </div>

            {/* Answer Options to Consider */}
            {question.options && question.options.length > 0 && (
              <div className="space-y-2.5 pt-1 text-left">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Options to choose from (click to select your guess):</span>
                  {userGuess && (
                    <span className="text-indigo-600 font-semibold">
                      Your guess:{' '}
                      {Array.isArray(userGuess) ? userGuess.join(', ') : userGuess}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {question.options.map((opt) => {
                    const isSelected = isMultiple
                      ? Array.isArray(userGuess) && userGuess.includes(opt.id)
                      : userGuess === opt.id;

                    return (
                      <div
                        key={opt.id}
                        onClick={(e) => handleOptionClick(e, opt.id)}
                        className={clsx(
                          'p-3 rounded-xl border text-sm flex items-start gap-3 transition-all duration-150 cursor-pointer',
                          isSelected
                            ? 'bg-indigo-50/90 border-indigo-500 text-indigo-950 font-medium ring-1 ring-indigo-500/30 shadow-xs'
                            : 'bg-slate-50/70 border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/30 text-slate-800'
                        )}
                      >
                        <span
                          className={clsx(
                            'w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors',
                            isSelected
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-200/80 text-slate-700'
                          )}
                        >
                          {opt.id}
                        </span>
                        <span className="flex-1 pt-0.5 leading-snug">{opt.text}</span>
                        {isMultiple && isSelected && (
                          <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer Instruction */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-4 mt-4 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>
                Click outside options or press{' '}
                <kbd className="font-mono bg-slate-100 px-1 py-0.5 rounded border border-slate-200 text-slate-600">
                  Space
                </kbd>{' '}
                to flip
              </span>
            </div>
            <div className="flex items-center gap-1 text-indigo-600 font-semibold">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Flip for answer</span>
            </div>
          </div>
        </div>

        {/* ================= CARD BACK ================= */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-6 sm:p-8 border-2 border-indigo-200/60 shadow-lg flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm" className="font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Correct Answer
                </Badge>
                <span className="text-xs text-slate-500 font-medium">
                  Card {questionNumber} of {totalQuestions}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark();
                }}
                className={clsx(
                  'p-2 rounded-lg transition-colors',
                  isBookmarked
                    ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                )}
              >
                <Bookmark className={clsx('w-5 h-5', isBookmarked && 'fill-amber-500')} />
              </button>
            </div>

            {/* User Guess Feedback pill if selected */}
            {userGuess && (
              <div className="flex items-center gap-2 text-xs">
                {isGuessCorrect() ? (
                  <Badge variant="success" size="sm" className="font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    Your guess was Correct! 🎉
                  </Badge>
                ) : (
                  <Badge variant="danger" size="sm" className="font-bold">
                    <XCircle className="w-3.5 h-3.5 mr-1 text-rose-600" />
                    Your guess ({Array.isArray(userGuess) ? userGuess.join(', ') : userGuess}) was Incorrect
                  </Badge>
                )}
              </div>
            )}

            {/* Answer Key Banner */}
            <div className="p-4 bg-emerald-50/90 border border-emerald-300 rounded-xl text-left space-y-1">
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Official Answer Key
              </div>
              <div className="text-lg font-extrabold text-emerald-950">
                {Array.isArray(question.correctAnswer)
                  ? question.correctAnswer.join(', ')
                  : question.correctAnswer}
                {question.options && (
                  <span className="font-medium text-slate-800 ml-2">
                    —{' '}
                    {question.options
                      .filter((o) =>
                        Array.isArray(question.correctAnswer)
                          ? question.correctAnswer.includes(o.id)
                          : o.id === question.correctAnswer
                      )
                      .map((o) => o.text)
                      .join('; ')}
                  </span>
                )}
              </div>
            </div>

            {/* Options Review with Highlighted Correct Option */}
            {question.options && question.options.length > 0 && (
              <div className="space-y-1.5 text-left pt-1">
                <span className="text-xs text-slate-500 font-medium">All Options:</span>
                <div className="grid grid-cols-1 gap-1.5">
                  {question.options.map((opt) => {
                    const isOfficialCorrect = Array.isArray(question.correctAnswer)
                      ? question.correctAnswer.includes(opt.id)
                      : opt.id === question.correctAnswer;

                    const isUserSelected = Array.isArray(userGuess)
                      ? userGuess.includes(opt.id)
                      : userGuess === opt.id;

                    let optStyle = 'bg-slate-50/70 border-slate-200/80 text-slate-600';
                    if (isOfficialCorrect) {
                      optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400/30';
                    } else if (isUserSelected && !isOfficialCorrect) {
                      optStyle = 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={clsx('p-2.5 rounded-lg border text-xs flex items-start gap-2.5', optStyle)}
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
                        <span className="flex-1 pt-0.5 leading-snug">{opt.text}</span>
                        {isOfficialCorrect && (
                          <span className="text-[11px] font-bold text-emerald-700">✓ Correct</span>
                        )}
                        {isUserSelected && !isOfficialCorrect && (
                          <span className="text-[11px] font-bold text-rose-600">Your choice</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Explanation */}
            {question.explanation && (
              <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-left">
                <span className="font-bold text-slate-900 block mb-0.5">Explanation:</span>
                {question.explanation}
              </div>
            )}
          </div>

          {/* Footer Instruction */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 mt-3 border-t border-slate-100">
            <span>Click card to flip back</span>
            <div className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
              <span>Shortcuts: ← Prev | → Next | Space Flip</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
