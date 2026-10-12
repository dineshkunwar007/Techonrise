import React from 'react';
import { SERVICES_DATA } from '../../data/services';
import { INDUSTRIES_DATA } from '../../data/industries';
import {
  ArrowRight,
  Zap,
  Sparkles,
  Layers,
  ShieldCheck,
  Bot,
  Building2,
  Calculator,
  Clock,
  HelpCircle,
  SearchCheck,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../ui/Button';

interface ServiceTilesSectionProps {
  onNavigate: (path: string) => void;
}

export const ServiceTilesSection: React.FC<ServiceTilesSectionProps> = ({ onNavigate }) => {
  // Plain-English summaries & highlight badges tailored for non-technical & commercial clarity
  const friendlyMeta: Record<
    string,
    {
      icon: React.ReactNode;
      badge: string;
      highlightMetric: string;
      plainSummary: string;
    }
  > = {
    'seo-growth': {
      icon: <Zap className="w-5 h-5 text-accent" />,
      badge: '01 · GET FOUND ONLINE',
      highlightMetric: 'Up to 3x More Enquiries',
      plainSummary:
        'Rank higher on Google Search and local maps so ready-to-buy customers find your business first instead of your competitors.',
    },
    'websites-ecommerce': {
      icon: <Sparkles className="w-5 h-5 text-accent" />,
      badge: '02 · MODERN WEBSITES',
      highlightMetric: 'Sub-Second Load Speed',
      plainSummary:
        'Fast, mobile-friendly websites and online stores custom-designed to look professional, build trust, and turn visitors into enquiries.',
    },
    'software-apps': {
      icon: <Layers className="w-5 h-5 text-accent" />,
      badge: '03 · BESPOKE SOFTWARE',
      highlightMetric: '100% Code Ownership',
      plainSummary:
        'Custom client portals, booking systems, and iOS/Android mobile apps built around how your team actually works—replacing messy spreadsheets.',
    },
    'ai-automation': {
      icon: <Bot className="w-5 h-5 text-[#E7B65C]" />,
      badge: '04 · SAVE STAFF TIME',
      highlightMetric: 'Cut 20+ Hrs/Wk Admin',
      plainSummary:
        'Practical automation that responds to new leads in seconds, extracts data from PDF invoices, and connects your everyday business tools.',
    },
    'hosting-infrastructure': {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      badge: '05 · CLOUD & SECURITY',
      highlightMetric: '99.95% Uptime Guarantee',
      plainSummary:
        'Secure UK-based cloud hosting, automated daily backups, GDPR compliance, and round-the-clock monitoring for complete peace of mind.',
    },
  };

  const quickDirectoryTiles = [
    {
      icon: <Calculator className="w-4 h-4 text-accent" />,
      label: 'PRICING & ESTIMATOR',
      title: 'Packages & Cost Calculator',
      desc: 'Compare fixed-price projects, monthly retainers & estimate your timeline.',
      path: '/packages',
    },
    {
      icon: <Clock className="w-4 h-4 text-accent" />,
      label: 'HOW WE WORK',
      title: 'Our 6-Stage Delivery Process',
      desc: 'See how we take your project from initial discovery to launch without guesswork.',
      path: '/services#process-timeline',
    },
    {
      icon: <SearchCheck className="w-4 h-4 text-[#E7B65C]" />,
      label: 'FREE REVIEW',
      title: 'Claim a Free Website Audit',
      desc: 'Get a plain-English video & report showing how to improve your site and rankings.',
      path: '/free-audit',
    },
    {
      icon: <HelpCircle className="w-4 h-4 text-accent" />,
      label: 'PLAIN-ENGLISH ANSWERS',
      title: 'Frequently Asked Questions',
      desc: 'Direct answers about pricing, timelines, support, and code ownership.',
      path: '/faq',
    },
  ];

  const handlePathNavigation = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      onNavigate(route);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      onNavigate(path);
    }
  };

  return (
    <section
      id="services-showcase"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden bg-[var(--bg-main)]"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <span>EXPLORE OUR SERVICES</span>
              <span aria-hidden="true">·</span>
              <span>TAP ANY TILE TO VIEW DETAILS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
              Choose the Service Your Business Needs.
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Everything you need to grow your customer base, upgrade your digital presence, and streamline daily operations—organised into clear, dedicated service areas. Select a tile below to explore how we can help.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            className="w-full sm:w-auto shrink-0"
            onClick={() => onNavigate('/services')}
            withArrow
          >
            View All Services Overview
          </Button>
        </div>

        {/* Primary 6-Tile Navigation Grid (5 Core Services + 1 Industry Solutions Hub Tile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((cat) => {
            const meta = friendlyMeta[cat.id] || {
              icon: <Zap className="w-5 h-5 text-accent" />,
              badge: `${cat.categoryNumber} · SERVICE`,
              highlightMetric: 'UK Senior Team',
              plainSummary: cat.overview,
            };

            return (
              <div
                key={cat.id}
                onClick={() => onNavigate(`/services/${cat.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate(`/services/${cat.slug}`);
                  }
                }}
                className="group bg-[var(--surface-1)] border border-subtle hover:border-accent/60 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category Badge + Outcome Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-[var(--surface-2)] border border-subtle group-hover:border-accent/40 transition-colors shrink-0">
                        {meta.icon}
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider">
                        {meta.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-main bg-[var(--surface-2)] px-2.5 py-1 rounded-full border border-subtle shrink-0">
                      {meta.highlightMetric}
                    </span>
                  </div>

                  {/* Title & Plain-English Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-main group-hover:text-accent transition-colors flex items-center justify-between gap-2">
                      <span>{cat.title}</span>
                      <ArrowRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {meta.plainSummary}
                    </p>
                  </div>

                  {/* Key Sub-Services Included (Visible at a glance) */}
                  <div className="pt-3 border-t border-subtle/80 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
                      What’s Included:
                    </span>
                    <ul className="space-y-1.5">
                      {cat.subServices.slice(0, 4).map((sub) => (
                        <li
                          key={sub.id}
                          className="flex items-center gap-2 text-xs text-main/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">{sub.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tile Footer CTA */}
                <div className="pt-5 mt-5 border-t border-subtle flex items-center justify-between text-xs font-semibold text-accent">
                  <span>Explore {cat.title}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Page <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}

          {/* 6th Tile: Industry-Specific Solutions Hub */}
          <div
            onClick={() => onNavigate('/industries')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate('/industries');
              }
            }}
            className="group bg-gradient-to-br from-[var(--surface-1)] via-[var(--surface-1)] to-[var(--surface-2)] border border-accent/30 hover:border-accent rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/30 shrink-0">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-accent uppercase tracking-wider">
                    06 · BY INDUSTRY
                  </span>
                </div>

                <span className="text-[10px] font-mono font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20 shrink-0">
                  9 UK Sectors
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-main group-hover:text-accent transition-colors flex items-center justify-between gap-2">
                  <span>Solutions for Your Industry</span>
                  <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Every sector has different customer habits and admin challenges. Explore pre-built digital packages tailored specifically to your line of business.
                </p>
              </div>

              {/* Quick-Tap Sector Chips */}
              <div className="pt-3 border-t border-subtle/80 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
                  Popular Sectors We Support:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {INDUSTRIES_DATA.slice(0, 6).map((ind) => (
                    <button
                      key={ind.slug}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(`/industries/${ind.slug}`);
                      }}
                      className="text-[11px] bg-[var(--surface-2)] hover:bg-accent/15 hover:text-accent hover:border-accent/40 text-main px-2.5 py-1 rounded-lg border border-subtle transition-colors cursor-pointer"
                    >
                      {ind.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-subtle flex items-center justify-between text-xs font-semibold text-accent">
              <span>Browse All 9 Industry Blueprints</span>
              <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                View Sectors <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Quick-Navigation Tiles Bar: Tools, Process, Pricing & FAQ */}
        <div className="mt-8 sm:mt-10 pt-8 border-t border-subtle">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              Helpful Tools &amp; Quick Links
            </span>
            <span className="text-xs text-muted hidden sm:inline">
              Direct access to pricing, our delivery process &amp; common questions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {quickDirectoryTiles.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => handlePathNavigation(item.path)}
                className="text-left p-4 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/50 transition-all group cursor-pointer flex flex-col justify-between space-y-3 shadow-2xs hover:shadow-md"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-accent font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      {item.icon}
                      {item.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-main group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Crawlable Semantic DOM Section for Search Crawlers (Preserves 100% SEO Equity) */}
        <div className="sr-only" aria-hidden="false">
          {SERVICES_DATA.map((cat) => (
            <div key={`crawlable-cat-${cat.id}`}>
              <h3>
                <a href={`/services/${cat.slug}`}>{cat.title}</a>
              </h3>
              <p>{cat.overview}</p>
              <ul>
                {cat.subServices.map((sub) => (
                  <li key={`crawlable-sub-${sub.id}`}>
                    <a href={`/services/${cat.slug}#${sub.slug}`}>{sub.title}</a>
                    <p>{sub.shortDesc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
