import React from 'react';

export const ScoreRadial = ({
  score = 0,
  size = 140,
  strokeWidth = 10,
  label = 'Score',
  passed = null
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const safeScore = Math.min(100, Math.max(0, score));
  const strokeDashoffset = circumference - (safeScore / 100) * circumference;

  // Determine color based on pass threshold (70%) or score
  let strokeColor = '#4f46e5'; // brand indigo
  if (passed !== null) {
    strokeColor = passed ? '#10b981' : '#ef4444';
  } else if (safeScore >= 80) {
    strokeColor = '#10b981';
  } else if (safeScore >= 60) {
    strokeColor = '#f59e0b';
  } else {
    strokeColor = '#ef4444';
  }

  return (
    <div className="relative inline-flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f1f5f9"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress stroke */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
          {safeScore}%
        </span>
        {label && <span className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{label}</span>}
      </div>
    </div>
  );
};

export default ScoreRadial;

