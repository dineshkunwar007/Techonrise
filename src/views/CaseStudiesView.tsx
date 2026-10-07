import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CASE_STUDIES_DATA } from '../data/caseStudies';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';

interface CaseStudiesViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Case Studies', url: '/case-studies' }])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Case Studies', url: '/case-studies' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>DEMONSTRATED PROOF</span>
            <span aria-hidden="true">·</span>
            <span>COMMERCIAL IMPACT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Case Studies & Real Client Transformations.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Examine how Techonrise partners with UK companies to modernise legacy operations, eliminate administrative bottlenecks, and capture commanding search authority.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-10 my-16">
          {CASE_STUDIES_DATA.map((cs) => (
            <div
              key={cs.id}
              className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 hover:border-accent/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-subtle">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="text-accent">{cs.industry}</span>
                    <span>·</span>
                    <span>{cs.location}</span>
                    {cs.isPlaceholder && (
                      <>
                        <span>·</span>
                        <span className="bg-[var(--surface-2)] px-2 py-0.5 rounded text-[10px]">
                          Sample Narrative
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
                    <a
                      href={`/case-studies/${cs.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/case-studies/${cs.slug}`);
                      }}
                      className="hover:text-accent transition-colors"
                    >
                      {cs.title}
                    </a>
                  </h2>
                </div>

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => onNavigate(`/case-studies/${cs.slug}`)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Read Full Case Story
                </Button>
              </div>

              {/* Metrics Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-[var(--surface-2)] border border-subtle">
                {cs.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-display font-bold text-accent tabular-nums block">
                      {m.value}
                    </span>
                    <span className="text-xs sm:text-sm text-main font-medium block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-muted leading-relaxed">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                    The Commercial Challenge
                  </span>
                  <p>{cs.challenge}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                    The Techonrise Solution
                  </span>
                  <p>{cs.solution}</p>
                </div>
              </div>

              {/* Testimonial Quote */}
              {cs.testimonialSnippet && (
                <div className="pt-4 border-t border-subtle">
                  <blockquote className="text-xs sm:text-sm text-muted italic border-l-2 border-accent pl-4 leading-relaxed">
                    "{cs.testimonialSnippet.quote}"
                  </blockquote>
                  <div className="mt-2 text-xs text-main font-semibold pl-4">
                    {cs.testimonialSnippet.author} · <span className="text-muted font-normal">{cs.testimonialSnippet.role}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
