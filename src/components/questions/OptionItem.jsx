import React from 'react';
import { Check, X } from 'lucide-react';
import { clsx } from 'clsx';

export const OptionItem = ({
  id,
  text,
  isSelected = false,
  isMultiple = false,
  isEvaluated = false,
  isCorrect = false,
  isUserIncorrectChoice = false,
  disabled = false,
  onClick
}) => {
  // Determine styling based on evaluation state
  let stateStyles = 'border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/50';

  if (isEvaluated) {
    if (isCorrect) {
      stateStyles = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 shadow-xs ring-1 ring-emerald-500/30';
    } else if (isUserIncorrectChoice) {
      stateStyles = 'border-rose-500 bg-rose-50/90 text-rose-950 shadow-xs ring-1 ring-rose-500/30';
    } else {
      stateStyles = 'border-slate-200 bg-white/60 opacity-60 text-slate-500';
    }
  } else if (isSelected) {
    stateStyles = 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-600/30 shadow-xs';
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isEvaluated}
      className={clsx(
        'w-full flex items-start gap-3.5 p-4 rounded-xl border text-left transition-all duration-150',
        stateStyles,
        disabled && 'cursor-default'
      )}
    >
      {/* Option Key Marker (A, B, C, D) or Indicator */}
      <div
        className={clsx(
          'w-7 h-7 rounded-lg flex items-center justify-center font-semibold text-xs shrink-0 transition-colors duration-150',
          isEvaluated && isCorrect
            ? 'bg-emerald-600 text-white'
            : isEvaluated && isUserIncorrectChoice
            ? 'bg-rose-600 text-white'
            : isSelected
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-600'
        )}
      >
        {isEvaluated && isCorrect ? (
          <Check className="w-4 h-4 stroke-[3]" />
        ) : isEvaluated && isUserIncorrectChoice ? (
          <X className="w-4 h-4 stroke-[3]" />
        ) : (
          <span>{id}</span>
        )}
      </div>

      {/* Option Text */}
      <div className="flex-1 text-[15px] leading-relaxed pt-0.5">
        <span>{text}</span>
      </div>

      {/* Multi-select indicator badge */}
      {isMultiple && !isEvaluated && (
        <div
          className={clsx(
            'w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5',
            isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white'
          )}
        >
          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
        </div>
      )}
    </button>
  );
};

export default OptionItem;

