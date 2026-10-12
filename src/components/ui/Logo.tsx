import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const iconSizes = {
    sm: 24,
    md: 30,
    lg: 36,
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      {/* Abstract Rising Step Mark */}
      <svg
        width={iconSizes[size]}
        height={iconSizes[size]}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect
          width="32"
          height="32"
          rx="8"
          className="fill-slate-100 dark:fill-[#141A21] stroke-slate-200 dark:stroke-white/10"
          strokeWidth="1"
        />
        {/* Three rising monolithic pillars symbolizing digital ascension: Search -> Systems -> AI */}
        <rect
          x="7"
          y="18"
          width="4"
          height="7"
          rx="1.5"
          className="fill-slate-400 dark:fill-[#94A3B8]"
        />
        <rect
          x="14"
          y="12"
          width="4"
          height="13"
          rx="1.5"
          className="fill-teal-600 dark:fill-[#2DD4BF]"
        />
        <rect
          x="21"
          y="7"
          width="4"
          height="18"
          rx="1.5"
          className="fill-amber-500 dark:fill-[#F59E0B]"
        />
        {/* Subtle rising diagonal trajectory */}
        <path
          d="M7 16L14 10.5L21 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-teal-600 dark:text-[#2DD4BF] opacity-60"
        />
      </svg>

      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight text-main ${sizeClasses[size]}`}>
          Techon<span className="text-accent">rise</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-wider text-muted font-mono -mt-0.5">
            Digital Transformation UK
          </span>
        )}
      </div>
    </div>
  );
};
