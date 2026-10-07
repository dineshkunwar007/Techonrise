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
    sm: 20,
    md: 26,
    lg: 32,
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
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
        <rect width="32" height="32" rx="7" className="fill-[#141A1F] dark:fill-[#141A1F] light:fill-[#ECE9E2]" />
        {/* Three rising monolithic pillars symbolizing digital ascension: Search -> Systems -> AI */}
        <rect x="7" y="17" width="4" height="8" rx="1.5" className="fill-[#94A3A0] dark:fill-[#94A3A0] light:fill-[#56635F]" />
        <rect x="14" y="12" width="4" height="13" rx="1.5" className="fill-[#2DD4BF] dark:fill-[#2DD4BF] light:fill-[#0F766E]" />
        <rect x="21" y="7" width="4" height="18" rx="1.5" className="fill-[#E7B65C] dark:fill-[#E7B65C] light:fill-[#D97706]" />
        {/* Subtle rising diagonal trajectory */}
        <path d="M7 16L14 11L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-[#2DD4BF] opacity-50" />
      </svg>

      <div className="flex flex-col">
        <span className={`font-display font-bold tracking-tight text-main ${sizeClasses[size]}`}>
          Techon<span className="text-accent">rise</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-wider text-muted font-mono">
            Digital Transformation UK
          </span>
        )}
      </div>
    </div>
  );
};
