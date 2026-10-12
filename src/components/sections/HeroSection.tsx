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
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-3xl">
            
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
                Your all-in-one UK technology partner. We help ambitious businesses win more customers on Google, build fast modern websites and apps, and automate repetitive daily admin—all handled by one friendly, accountable Manchester team.
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
                  onClick={() => onNavigate('/services')}
                  className="w-full sm:w-auto min-h-[46px] sm:min-h-[50px] text-xs sm:text-sm px-3 sm:px-5"
                >
                  Our Services
                </Button>
              </div>
            </div>

            {/* Mobile-Only Services Banner Placement (Smooth Flow Under Action CTAs) */}
            <div className="block lg:hidden pt-3 sm:pt-4">
              <div className="relative group w-full">
                <div
                  className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-teal-500/20 via-cyan-500/25 to-teal-400/20 rounded-2xl blur-lg opacity-75 pointer-events-none -z-10"
                  aria-hidden="true"
                />
                <div className="relative rounded-2xl overflow-hidden border border-teal-500/30 dark:border-teal-400/25 bg-[var(--surface-1)]/90 backdrop-blur-xl shadow-xl">
                  <div className="relative aspect-video w-full overflow-hidden bg-[#090D11]">
                    <img
                      src="/techonrise-services-banner.jpg"
                      alt="Techonrise 5 Core Digital Practices: SEO Growth, Bespoke Websites, Custom Software, AI Automation, UK Cloud"
                      width={1280}
                      height={720}
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#090D11]/85 backdrop-blur-md border border-teal-500/30 text-[10px] font-mono text-teal-300 font-semibold shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
                      <span>UK HUB</span>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 bg-[var(--surface-2)]/90 border-t border-subtle flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider">
                      5 Core Services
                    </span>
                    <a
                      href="#services-showcase"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('services-showcase');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        else onNavigate('/services');
                      }}
                      className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Jump to Service Tiles</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Quick-Navigation Pillar Tiles: Symmetric 2x2 on mobile, 4 across on desktop */}
            <div className="pt-2 sm:pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl">
                <button
                  type="button"
                  onClick={() => onNavigate('/services/seo-growth')}
                  className="text-left p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle hover:border-accent/50 shadow-2xs space-y-1 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">01 · GET FOUND</span>
                    <ArrowRight className="w-3 h-3 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-main group-hover:text-accent transition-colors block">SEO &amp; Growth</span>
                  <span className="text-[11px] text-muted block">Rank higher on Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/services/websites-ecommerce')}
                  className="text-left p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle hover:border-accent/50 shadow-2xs space-y-1 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">02 · MODERNISE</span>
                    <ArrowRight className="w-3 h-3 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-main group-hover:text-accent transition-colors block">Web &amp; Apps</span>
                  <span className="text-[11px] text-muted block">Fast websites &amp; portals</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/services/ai-automation')}
                  className="text-left p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle hover:border-accent/50 shadow-2xs space-y-1 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-amber-500 font-semibold">03 · SAVE TIME</span>
                    <ArrowRight className="w-3 h-3 text-muted group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-main group-hover:text-accent transition-colors block">AI Automation</span>
                  <span className="text-[11px] text-muted block">Cut weekly paperwork</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/services/hosting-infrastructure')}
                  className="text-left p-3 sm:p-3.5 rounded-xl bg-[var(--surface-1)]/90 backdrop-blur-md border border-subtle hover:border-accent/50 shadow-2xs space-y-1 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold">04 · RELIABLE</span>
                    <ArrowRight className="w-3 h-3 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-main group-hover:text-accent transition-colors block">UK Hosting</span>
                  <span className="text-[11px] text-muted block">Secure &amp; GDPR ready</span>
                </button>
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

          {/* Right Column: Desktop Featured Services Banner Showcase */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <div className="relative group w-full">
              {/* Glowing ambient bloom */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 via-cyan-500/25 to-teal-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none -z-10"
                aria-hidden="true"
              />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 dark:border-teal-400/25 bg-[var(--surface-1)]/90 backdrop-blur-xl shadow-2xl shadow-teal-950/20 transition-all duration-300 group-hover:border-teal-400/50 group-hover:shadow-teal-900/30">
                <div className="relative aspect-video w-full overflow-hidden bg-[#090D11]">
                  <img
                    src="/techonrise-services-banner.jpg"
                    alt="Techonrise 5 Core Digital Practices: SEO Growth, Bespoke Websites, Custom Software, AI Automation, UK Cloud"
                    width={1280}
                    height={720}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Micro-badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#090D11]/85 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono text-teal-300 font-semibold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
                    <span>UK ENGINEERING</span>
                  </div>
                </div>

                {/* Bottom caption bar */}
                <div className="p-3.5 bg-[var(--surface-2)]/90 border-t border-subtle flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-teal-600 dark:text-teal-400 font-bold uppercase tracking-wider">
                      5 Core Practices
                    </span>
                    <span className="text-muted/40" aria-hidden="true">·</span>
                    <span className="text-[11px] text-muted">
                      Unified UK Delivery Squad
                    </span>
                  </div>

                  <a
                    href="#services-showcase"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('services-showcase');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else onNavigate('/services');
                    }}
                    className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Explore Practices</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
