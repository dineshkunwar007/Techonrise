import React from 'react';
import { Button } from '../ui/Button';
import { LazyHeroScene } from '../three/LazyScenes';
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[var(--bg-main)]">
      {/* 
        3D Architectural Scene:
        Positioned to bleed gracefully off the right edge while preserving
        100% crisp typography on the left.
      */}
      <LazyHeroScene />

      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typographic Hierarchy & Depth Layers */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 max-w-3xl">
            
            {/* Eyebrow Line */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--surface-1)] border border-subtle shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-main tracking-wide">
                UK Digital Transformation &amp; AI Practice
              </span>
              <span className="text-muted/40" aria-hidden="true">|</span>
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                Manchester HQ
              </span>
            </div>

            {/* Display Headline: Clean, beautifully aligned, with 100% visible typography */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-[4.25rem] font-bold text-main tracking-tight leading-[1.14]">
                Grow, Automate <br className="hidden sm:inline" />
                <span className="text-teal-600 dark:text-teal-400">&amp; Modernise</span>{' '}
                Your Business.
              </h1>

              {/* Sub-headline / Positioning Statement */}
              <p className="text-sm sm:text-lg lg:text-xl text-muted leading-relaxed font-normal max-w-2xl">
                Techonrise unifies technical SEO, bespoke web applications, cloud architecture, and practical AI automations into one accountable, UK-based engineering team.
              </p>
            </div>

            {/* Primary Action Zone: Ergonomic on mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md sm:max-w-none">
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
                className="w-full sm:w-auto min-h-[48px] sm:min-h-[50px] shadow-md dark:shadow-[0_4px_24px_rgba(45,212,191,0.28)] font-semibold"
              >
                Book a Consultation
              </Button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3">
                <Button
                  size="md"
                  variant="secondary"
                  onClick={() => onNavigate('/free-audit')}
                  className="w-full sm:w-auto min-h-[46px] sm:min-h-[50px] text-xs sm:text-sm px-3 sm:px-5"
                >
                  Free Audit
                </Button>

                <Button
                  size="md"
                  variant="outline"
                  onClick={() => onNavigate('/case-studies')}
                  className="w-full sm:w-auto min-h-[46px] sm:min-h-[50px] text-xs sm:text-sm px-3 sm:px-5"
                >
                  Case Studies
                </Button>
              </div>
            </div>

            {/* Depth Layer Cards: Symmetric 2x2 on mobile, 4 across on desktop */}
            <div className="pt-2 sm:pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle shadow-2xs space-y-1">
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold block">01 · SEARCH</span>
                  <span className="text-xs sm:text-sm font-semibold text-main block">Technical SEO</span>
                  <span className="text-[11px] text-muted block">Core Web Vitals &amp; AEO</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle shadow-2xs space-y-1">
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold block">02 · SOFTWARE</span>
                  <span className="text-xs sm:text-sm font-semibold text-main block">Next.js &amp; Apps</span>
                  <span className="text-[11px] text-muted block">100% Code Ownership</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle shadow-2xs space-y-1">
                  <span className="text-[11px] font-mono text-amber-500 font-semibold block">03 · AI &amp; DATA</span>
                  <span className="text-xs sm:text-sm font-semibold text-main block">AI Automation</span>
                  <span className="text-[11px] text-muted block">CRM &amp; Vector Pipelines</span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle shadow-2xs space-y-1">
                  <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold block">04 · SECURITY</span>
                  <span className="text-xs sm:text-sm font-semibold text-main block">UK Sovereign</span>
                  <span className="text-[11px] text-muted block">GDPR &amp; Cyber Ready</span>
                </div>
              </div>
            </div>

            {/* Social Proof Line */}
            <div className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-y-2 gap-x-4 text-xs text-muted pt-1">
              <div className="flex items-center gap-1.5 text-main font-medium">
                <div className="flex text-amber-400" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
              <span className="text-muted/40 hidden xs:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" aria-hidden="true" />
                <span>100% In-house UK Senior Leads</span>
              </div>
              <span className="text-muted/40 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0" aria-hidden="true" />
                <span>1 Business Day Response Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Space reserved for 3D visual on desktop */}
          <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
};
