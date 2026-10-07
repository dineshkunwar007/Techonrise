import React from 'react';
import { Button } from '../ui/Button';
import { LazyHeroScene } from '../three/LazyScenes';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[var(--bg-main)]">
      {/* 
        3D Architectural Scene:
        Positioned to bleed gracefully off the right edge while preserving
        100% crisp typography on the left.
      */}
      <LazyHeroScene />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typographic Hierarchy & Depth Layers */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 max-w-3xl">
            
            {/* Small Eyebrow Line with Monospace Metric Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--surface-1)] border border-subtle shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase text-main">
                UK Digital Transformation & Growth Practice
              </span>
              <span className="text-muted/40 hidden sm:inline" aria-hidden="true">|</span>
              <span className="text-[11px] sm:text-xs font-mono text-accent hidden sm:inline">
                Manchester HQ
              </span>
            </div>

            {/* Display Headline with Tighter Tracking & Organic Balance */}
            <div className="space-y-3">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-display font-extrabold text-main tracking-[-0.035em] leading-[1.04] text-balance">
                Grow, Automate <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-main via-main to-accent/90">
                  & Modernise
                </span>{' '}
                Your Business.
              </h1>

              {/* Sub-headline / Positioning Statement */}
              <p className="text-base sm:text-lg lg:text-xl text-muted leading-relaxed font-normal max-w-2xl pt-1">
                Techonrise unifies technical SEO, bespoke web applications, cloud architecture, and practical AI automations into one accountable, UK-based engineering team.
              </p>
            </div>

            {/* Primary Action Zone: Mobile-first responsive sizing (no hover requirement) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <Button
                size="lg"
                variant="primary"
                withArrow
                onClick={() => {
                  if (onOpenConsultationModal) {
                    onOpenConsultationModal();
                  } else {
                    onNavigate('/contact');
                  }
                }}
                className="w-full sm:w-auto min-h-[50px] shadow-[0_4px_20px_rgba(45,212,191,0.25)]"
              >
                Book a Consultation
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => onNavigate('/free-audit')}
                className="w-full sm:w-auto min-h-[50px]"
              >
                Claim Free Technical Audit
              </Button>
            </div>

            {/* Subtle Depth Layer Card: Replaces scattered pills with cohesive technical credentials */}
            <div className="pt-2 sm:pt-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface-1)]/80 backdrop-blur-sm border border-subtle shadow-xs max-w-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-subtle">
                  
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-accent block">01 · SEARCH</span>
                    <span className="text-xs sm:text-sm font-semibold text-main block">Technical SEO</span>
                    <span className="text-[11px] text-muted block">Core Web Vitals & AEO</span>
                  </div>

                  <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
                    <span className="text-xs font-mono text-accent block">02 · SOFTWARE</span>
                    <span className="text-xs sm:text-sm font-semibold text-main block">Next.js & Apps</span>
                    <span className="text-[11px] text-muted block">100% Code Ownership</span>
                  </div>

                  <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
                    <span className="text-xs font-mono text-accent block">03 · AI & DATA</span>
                    <span className="text-xs sm:text-sm font-semibold text-main block">AI Automation</span>
                    <span className="text-[11px] text-muted block">CRM & Vector Pipelines</span>
                  </div>

                  <div className="pt-2 sm:pt-0 sm:pl-4 space-y-1">
                    <span className="text-xs font-mono text-accent block">04 · SECURITY</span>
                    <span className="text-xs sm:text-sm font-semibold text-main block">UK Sovereign</span>
                    <span className="text-[11px] text-muted block">GDPR & Cyber Ready</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center gap-2 text-xs text-muted pt-1">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
              <span>Direct senior UK engineering leads · No offshore hand-offs · 1 business day response</span>
            </div>

          </div>

          {/* Right Column: Visual Spatial Area (3D scene renders seamlessly behind and across here) */}
          <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
};
