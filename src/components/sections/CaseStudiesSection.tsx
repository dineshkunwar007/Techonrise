import React from 'react';
import { CASE_STUDIES_DATA } from '../../data/caseStudies';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CaseStudiesSectionProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <span>VALIDATED PROOF & CASE STUDIES</span>
              <span aria-hidden="true">·</span>
              <span>COMMERCIAL OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
              Real Transformations. Measurable Commercial Equity.
            </h2>
            <p className="text-base text-muted leading-relaxed">
              Explore how we have engineered competitive advantage for UK businesses through integrated search visibility, sub-second web platforms, and automated operations.
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={() => onNavigate('/case-studies')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            All Case Studies
          </Button>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_DATA.slice(0, 4).map((cs) => (
            <div
              key={cs.id}
              className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-7 sm:p-8 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">{cs.industry}</span>
                    <span>·</span>
                    <span>{cs.location}</span>
                  </div>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded uppercase font-semibold">
                    Verified Case Study
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-main group-hover:text-accent transition-colors">
                    <a
                      href={`/case-studies/${cs.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/case-studies/${cs.slug}`);
                      }}
                      className="flex items-center justify-between"
                    >
                      <span>{cs.title}</span>
                      <ArrowUpRight className="w-5 h-5 shrink-0 ml-2 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent" />
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-2.5 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-subtle">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <span className="text-xl sm:text-2xl font-display font-bold text-accent tabular-nums block">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-muted leading-tight block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote Snippet */}
              {cs.testimonialSnippet && (
                <div className="pt-5 mt-5">
                  <blockquote className="text-xs text-muted italic border-l-2 border-accent/40 pl-3 leading-relaxed">
                    "{cs.testimonialSnippet.quote}"
                  </blockquote>
                  <div className="mt-2 text-[11px] text-main font-medium pl-3">
                    {cs.testimonialSnippet.author} · <span className="text-muted">{cs.testimonialSnippet.role}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
