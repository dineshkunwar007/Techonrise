import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

/**
 * Techonrise Brand Mark & Wordmark
 *
 * Symbolism ("The Rising T-Nexus"):
 * 1. Architectural 'T' + Upward Chevron Arrow: Fuses "Tech" (the structural T) with
 *    "Rise" (an ascending arrow/wings soaring upward).
 * 2. Three Interlocking Geometric Planes: Represent the 3 core pillars —
 *    Grow (Search & Acquisition), Automate (AI & Workflows), and Modernise (Web, Apps & Cloud).
 * 3. Golden Apex Spark ("On"): A warm amber/gold diamond node at the summit symbolizing
 *    activation ("On"), intelligence, and a rising horizon.
 */
export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const uid = useId().replace(/:/g, '');

  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl sm:text-[1.35rem]',
    lg: 'text-2xl sm:text-3xl',
  };

  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 44,
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* Iconic Geometric Emblem: The Rising T-Nexus */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Subtle ambient hover glow behind the emblem */}
        <div
          className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-teal-500/25 via-cyan-400/20 to-amber-400/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          aria-hidden="true"
        />

        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 shrink-0 transition-transform duration-300 group-hover:scale-[1.04]"
          aria-hidden="true"
        >
          <defs>
            {/* Deep Luxury Badge Surface */}
            <linearGradient id={`${uid}-bg`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#111922" />
              <stop offset="100%" stopColor="#090D12" />
            </linearGradient>

            {/* Precision Metallic/Teal Rim Gradient */}
            <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.55" />
            </linearGradient>

            {/* Primary Luminous Teal Gradient (Central Rising T-Spear & Right Wing) */}
            <linearGradient id={`${uid}-teal-main`} x1="20" y1="8" x2="20" y2="33" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5EEAD4" />
              <stop offset="55%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0D9488" />
            </linearGradient>

            {/* Secondary Deep Cyan-Teal Gradient (Left Structural Wing) */}
            <linearGradient id={`${uid}-teal-left`} x1="7" y1="12" x2="20" y2="26" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>

            {/* Golden Sunrise / 'On' Spark Gradient */}
            <linearGradient id={`${uid}-gold`} x1="16" y1="5" x2="24" y2="14" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Squircle Shield Base */}
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="10"
            fill={`url(#${uid}-bg)`}
            stroke={`url(#${uid}-rim)`}
            strokeWidth="1.25"
          />

          {/* Subtle Inner Horizon Grid Arc */}
          <path
            d="M6 29C14 24 26 24 34 29"
            stroke="#2DD4BF"
            strokeOpacity="0.14"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Plane 1 (Left Wing - Modernise): Sweeping architectural wing forming the left T-crossbar */}
          <path
            d="M7.5 17.5L18.5 11.5V16.8L10.5 21.2C8.8 22.1 7.5 20.9 7.5 19.1V17.5Z"
            fill={`url(#${uid}-teal-left)`}
          />

          {/* Plane 2 (Right Wing - Grow): Ascending wing sweeping higher to the right */}
          <path
            d="M32.5 17.5L21.5 11.5V16.8L29.5 21.2C31.2 22.1 32.5 20.9 32.5 19.1V17.5Z"
            fill={`url(#${uid}-teal-main)`}
            fillOpacity="0.9"
          />

          {/* Plane 3 (Central Rising Pillar - The 'T' Stem & Ascending Arrow):
              Slices upward toward the apex, uniting the wings into a powerful 'T' */}
          <path
            d="M20 13.5L24.2 18.2H22.1V31C22.1 32.1 21.2 33 20 33C18.8 33 17.9 32.1 17.9 31V18.2H15.8L20 13.5Z"
            fill={`url(#${uid}-teal-main)`}
          />

          {/* Ascending Trajectory Chevron (Secondary Lift Line) */}
          <path
            d="M12.5 25.5L17.9 22.2V25.2L12.5 28.4V25.5ZM27.5 25.5L22.1 22.2V25.2L27.5 28.4V25.5Z"
            fill="#2DD4BF"
            fillOpacity="0.45"
          />

          {/* Apex Node (The 'On' & 'Rise' Beacon): Faceted golden diamond at the summit */}
          <path
            d="M20 5.2L23.2 8.6L20 12L16.8 8.6L20 5.2Z"
            fill={`url(#${uid}-gold)`}
          />
          <circle cx="20" cy="8.6" r="1.1" fill="#FEF3C7" />
        </svg>
      </div>

      {/* Elevated Brand Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span
            className={`font-display font-extrabold tracking-tight text-main leading-none ${sizeClasses[size]}`}
          >
            Tech<span className="font-semibold text-main/85">on</span>
            <span className="bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 dark:from-[#2DD4BF] dark:via-[#5EEAD4] dark:to-[#38BDF8] bg-clip-text text-transparent font-extrabold">
              rise
            </span>
          </span>
          {/* Subtle golden horizon period/spark */}
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-0.5 mb-0.5 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            aria-hidden="true"
          />
        </div>

        {showTagline ? (
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-muted font-mono mt-1">
            Grow · Automate · Modernise
          </span>
        ) : (
          <span className="text-[9px] uppercase tracking-[0.18em] text-muted/80 font-mono mt-0.5 hidden sm:block">
            Grow · Automate · Modernise
          </span>
        )}
      </div>
    </div>
  );
};
