import React from 'react';
import { clsx } from 'clsx';

/**
 * Recallify Exclusive Brand Logo
 * 
 * Concept:
 * - Geometric "R" Monogram synthesized with:
 *   1. Dual Flashcard Flip (Active Recall metaphor)
 *   2. Spaced Repetition Loop (continuous retrieval arch)
 *   3. Epiphany Spark (4-point intellect star at the pinnacle)
 *   4. Forward Progress Kick (dynamic diagonal ascent)
 */
export const LogoMark = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  const currentSize = sizeMap[size] || size;

  return (
    <div
      className={clsx(
        'relative inline-flex items-center justify-center shrink-0 rounded-xl transition-transform duration-200 group-hover:scale-105 select-none',
        currentSize,
        className
      )}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          {/* Background Gradient */}
          <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="45%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          {/* Loop Gradient */}
          <linearGradient id="logo-loop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EEF2FF" />
          </linearGradient>

          {/* Dynamic Kick Gradient */}
          <linearGradient id="logo-kick" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#C7D2FE" />
          </linearGradient>

          {/* Epiphany Spark Gradient */}
          <linearGradient id="logo-spark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <filter id="logo-drop" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#1E1B4B" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Squircle Base with Inner Border */}
        <rect x="3" y="3" width="58" height="58" rx="16" fill="url(#logo-bg)" filter="url(#logo-drop)" />
        <rect x="3.5" y="3.5" width="57" height="57" rx="15.5" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1" />

        {/* Angled Back Flashcard Layer (Perspective) */}
        <rect
          x="22"
          y="10"
          width="26"
          height="20"
          rx="5"
          fill="#FFFFFF"
          fillOpacity="0.14"
          transform="rotate(7 35 20)"
        />

        {/* Left Vertical Pillar of "R" */}
        <rect x="15" y="15" width="7" height="34" rx="3.5" fill="#FFFFFF" />

        {/* Upper Loop of "R" (Memory Orbit) */}
        <path
          d="M18.5 15 H34 C41.1797 15 47 20.1487 47 26.5 C47 32.8513 41.1797 38 34 38 H18.5 V31 H33.5 C36.8137 31 39.5 28.9853 39.5 26.5 C39.5 24.0147 36.8137 22 33.5 22 H18.5 V15 Z"
          fill="url(#logo-loop)"
        />

        {/* Forward Dynamic Kick of "R" */}
        <path
          d="M27.5 32.5 L40.5 47.2 C41.6 48.4 43.4 48.6 44.7 47.6 C46 46.5 46.2 44.7 45.1 43.5 L33.2 30 C32 28.6 29.8 28.5 28.3 29.6 C27.5 30.2 27.2 31.4 27.5 32.5 Z"
          fill="url(#logo-kick)"
        />

        {/* Epiphany Spark (4-Point Star) */}
        <g transform="translate(47, 12)">
          <path
            d="M0 -6 C0.3 -2 2 -0.3 6 0 C2 0.3 0.3 2 0 6 C-0.3 2 -2 0.3 -6 0 C-2 -0.3 -0.3 -2 0 -6 Z"
            fill="url(#logo-spark)"
          />
          <circle cx="0" cy="0" r="1.4" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};

export const Logo = ({
  size = 'md',
  showText = true,
  showTagline = true,
  showBetaBadge = true,
  inverted = false,
  className = ''
}) => {
  return (
    <div className={clsx('flex items-center gap-2.5 group select-none', className)}>
      <LogoMark size={size} />

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={clsx(
                'font-extrabold tracking-tight leading-none font-sans',
                size === 'sm' && 'text-lg',
                size === 'md' && 'text-xl',
                size === 'lg' && 'text-2xl',
                size === 'xl' && 'text-3xl',
                inverted ? 'text-white' : 'text-slate-900'
              )}
            >
              Recall<span className="text-indigo-600">ify</span>
            </span>

            {showBetaBadge && (
              <span
                className={clsx(
                  'px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-md border shadow-2xs leading-none select-none',
                  inverted
                    ? 'bg-white/20 text-indigo-100 border-white/30'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200/90'
                )}
                title="Recallify Experimental Beta Version"
              >
                Beta
              </span>
            )}
          </div>

          {showTagline && (
            <span
              className={clsx(
                'text-[9px] sm:text-[10px] uppercase font-bold tracking-wider mt-0.5',
                inverted ? 'text-indigo-200' : 'text-indigo-600'
              )}
            >
              Remember • Challenge • Improve
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
