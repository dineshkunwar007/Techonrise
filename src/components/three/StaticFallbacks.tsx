import React from 'react';

/**
 * Immediate Static Poster Fallback for Hero
 * Ensures LCP never waits on WebGL, provides instant visual presence,
 * and seamlessly handles prefers-reduced-motion.
 */
export const HeroPosterFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
    >
      {/* Layered radial glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full bg-radial from-[#2DD4BF]/10 via-[#2DD4BF]/2 to-transparent blur-3xl opacity-80" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial from-[#E7B65C]/6 via-transparent to-transparent blur-3xl opacity-70" />

      {/* Architectural coordinate grid */}
      <div
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Diagonal trajectory lines & coordinate indicators */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 dark:opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20%" y1="0" x2="80%" y2="100%" stroke="var(--accent)" strokeWidth="0.75" strokeDasharray="6 6" />
        <circle cx="65%" cy="45%" r="220" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="3 4" fill="none" />
        <circle cx="65%" cy="45%" r="340" stroke="var(--border-color)" strokeWidth="0.5" fill="none" />
        <circle cx="65%" cy="45%" r="4" fill="var(--accent)" />
        
        {/* Isometric schematic cubes */}
        <polygon points="650,280 730,230 810,280 730,330" stroke="var(--accent)" strokeWidth="0.75" fill="rgba(45,212,191,0.03)" />
        <polygon points="650,280 650,370 730,420 730,330" stroke="var(--accent)" strokeWidth="0.75" fill="rgba(45,212,191,0.02)" />
        <polygon points="730,330 730,420 810,370 810,280" stroke="var(--accent)" strokeWidth="0.75" fill="rgba(45,212,191,0.05)" />
      </svg>

      {/* Floating geographic coordinate stamp */}
      <div className="absolute top-36 right-8 hidden xl:block text-[11px] font-mono text-muted/60 tracking-wider text-right space-y-0.5">
        <p>UK_GRID: 53.4808° N, 2.2426° W</p>
        <p>ENGINEERING_HUB: MANCHESTER_M1</p>
        <p>ORCHESTRATION_LAYER: INITIALISED</p>
      </div>
    </div>
  );
};

/**
 * Immediate Static Poster Fallback for AI & Automation
 */
export const AutomationPosterFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full h-full flex items-center justify-center bg-[var(--surface-1)] rounded-2xl border border-subtle p-6 select-none"
    >
      <svg width="100%" height="220" viewBox="0 0 320 220" fill="none" className="max-w-md">
        {/* Connecting signal lines */}
        <path d="M40 110 H120 M120 110 L180 50 M120 110 L180 170 M180 50 H260 M180 170 H260" stroke="#2DD4BF" strokeWidth="1.5" strokeDasharray="3 3" />
        
        {/* Nodes */}
        <circle cx="40" cy="110" r="14" fill="#161B22" stroke="#2DD4BF" strokeWidth="1.5" />
        <text x="40" y="114" fill="#2DD4BF" fontSize="8" fontFamily="monospace" textAnchor="middle">IN</text>

        <circle cx="120" cy="110" r="18" fill="#161B22" stroke="#2DD4BF" strokeWidth="1.5" />
        <text x="120" y="114" fill="#EEF2F1" fontSize="8" fontFamily="monospace" textAnchor="middle">TRIAGE</text>

        <circle cx="180" cy="50" r="14" fill="#161B22" stroke="#E7B65C" strokeWidth="1.5" />
        <text x="180" y="54" fill="#E7B65C" fontSize="8" fontFamily="monospace" textAnchor="middle">LLM</text>

        <circle cx="180" cy="170" r="14" fill="#161B22" stroke="#2DD4BF" strokeWidth="1.5" />
        <text x="180" y="174" fill="#2DD4BF" fontSize="8" fontFamily="monospace" textAnchor="middle">SYNC</text>

        <circle cx="260" cy="50" r="16" fill="#161B22" stroke="#2DD4BF" strokeWidth="1.5" />
        <text x="260" y="54" fill="#2DD4BF" fontSize="8" fontFamily="monospace" textAnchor="middle">CRM</text>

        <circle cx="260" cy="170" r="16" fill="#161B22" stroke="#2DD4BF" strokeWidth="1.5" />
        <text x="260" y="174" fill="#2DD4BF" fontSize="8" fontFamily="monospace" textAnchor="middle">DISPATCH</text>
      </svg>
    </div>
  );
};

/**
 * Immediate Static Poster Fallback for Infrastructure
 */
export const InfrastructurePosterFallback: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="w-full h-full flex flex-col justify-center items-center bg-[var(--surface-1)] rounded-2xl border border-subtle p-6 select-none"
    >
      <div className="w-full max-w-xs space-y-2">
        <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-accent/40 flex items-center justify-between text-xs font-mono">
          <span className="text-accent flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            L01: Edge Anycast DNS
          </span>
          <span className="text-muted">100% Uptime</span>
        </div>
        <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-subtle flex items-center justify-between text-xs font-mono">
          <span className="text-main flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E7B65C]" />
            L02: Next.js Compute Cluster
          </span>
          <span className="text-muted">&lt; 40ms</span>
        </div>
        <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-subtle flex items-center justify-between text-xs font-mono">
          <span className="text-main flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            L03: UK PostgreSQL & Redis
          </span>
          <span className="text-muted">Encrypted</span>
        </div>
      </div>
    </div>
  );
};
