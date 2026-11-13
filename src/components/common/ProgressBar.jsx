import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  className
}) => {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100) || 0));

  const variants = {
    primary: 'bg-indigo-600',
    success: 'bg-emerald-500',
    amber: 'bg-amber-500',
    gradient: 'bg-gradient-to-r from-indigo-500 to-emerald-500'
  };

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5'
  };

  return (
    <div className={twMerge('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-xs text-slate-600 mb-1 font-medium">
          <span>{value} of {max}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className={clsx('w-full bg-slate-100 rounded-full overflow-hidden flex', sizes[size])}>
        <div
          className={clsx('h-full transition-all duration-300 rounded-full', variants[variant])}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

