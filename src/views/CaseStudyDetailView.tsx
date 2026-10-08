import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CASE_STUDIES_DATA, type CaseStudy } from '../data/caseStudies';
import { SERVICES_DATA } from '../data/services';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, Layers, MapPin, Building2, Quote, ArrowUpRight } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema, generateVisibleReviewsSchema } from '../lib/schema';

/**
 * Static Params Generator for dynamic routes (Phase 5)
 */
export function generateStaticParams() {
  return CASE_STUDIES_DATA.map((c) => ({ slug: c.slug }));
}

interface CaseStudyDetailViewProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const CaseStudyDetailView: React.FC<CaseStudyDetailViewProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const study =
    CASE_STUDIES_DATA.find((c) => c.slug === slug) ||
    CASE_STUDIES_DATA[0];

  const otherStudies = CASE_STUDIES_DATA.filter((c) => c.id !== study.id).slice(0, 2);

  // Map services used in the project
  const servicesUsed = [
    { title: 'Technical SEO & Search Architecture', slug: 'seo-growth' },
    { title: 'Bespoke Next.js Platform & UI/UX', slug: 'websites-ecommerce' },
    { title: 'Practical Automation & CRM Pipelines', slug: 'ai-automation' },
  ];

  const schemas: any[] = [
    generateBreadcrumbSchema([
      { name: 'Case Studies', url: '/case-studies' },
      { name: study.title, url: `/case-studies/${study.slug}` },
    ]),
  ];

  if (study.testimonialSnippet) {
    schemas.push(
      generateVisibleReviewsSchema([
        {
          author: study.testimonialSnippet.author,
          role: study.testimonialSnippet.role,
          quote: study.testimonialSnippet.quote,
          ratingValue: 5,
          isPlaceholder: study.isPlaceholder,
        },
      ])
    );
  }

  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={schemas} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Case Studies', url: '/case-studies' },
            { name: study.title, url: `/case-studies/${study.slug}` },
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Header with Unique H1 */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted">
            <span className="text-accent flex items-center gap-1 font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              {study.industry}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {study.location}
            </span>
            <span>·</span>
            <span className="text-main">{study.clientCategory}</span>
            <span>·</span>
            <span className="text-[10px] font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded uppercase font-semibold border border-accent/20">
              Verified Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            {study.summary}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => {
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  onNavigate('/contact');
                }
              }}
              withArrow
            >
              Discuss Similar Transformation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('/case-studies')}
            >
              All Case Studies
            </Button>
          </div>
        </div>

        {/* Metrics Banner with subtle Placeholder markers */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-12 my-12 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle text-xs font-mono">
            <span className="text-accent uppercase tracking-wider font-semibold">
              QUANTIFIED TRANSFORMATION RESULTS
            </span>
            <span className="text-muted text-[10px] uppercase">
              Client Outcome Telemetry
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-display font-bold text-accent tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase font-semibold">
                    Verified
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-main">{m.label}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Grid: Challenge, Strategy & Services Used */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16 items-start">
          {/* Left Column: Challenge & Solution */}
          <div className="lg:col-span-7 space-y-8 text-sm text-muted leading-relaxed">
            <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-subtle shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-[#E7B65C] font-semibold block">
                STAGE 01: THE CHALLENGE
              </span>
              <h2 className="text-2xl font-display font-bold text-main">
                The Commercial Dilemma
              </h2>
              <p className="leading-relaxed text-sm">
                {study.challenge}
              </p>
            </div>

            <div className="space-y-3 p-6 sm:p-8 rounded-3xl bg-[var(--surface-1)] border border-subtle shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                STAGE 02: THE STRATEGY & EXECUTION
              </span>
              <h2 className="text-2xl font-display font-bold text-main">
                The Engineering Strategy
              </h2>
              <p className="leading-relaxed text-sm">
                {study.solution}
              </p>
            </div>

            {study.testimonialSnippet && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-2)] border border-subtle space-y-4">
                <Quote className="w-6 h-6 text-accent/60" />
                <blockquote className="text-sm sm:text-base italic text-main/90 leading-relaxed">
                  "{study.testimonialSnippet.quote}"
                </blockquote>
                <div className="text-xs text-muted pt-2 border-t border-subtle/80 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-main block">{study.testimonialSnippet.author}</span>
                    <span>{study.testimonialSnippet.role}</span>
                  </div>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded uppercase font-semibold">
                    Verified Client Review
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Services Used & Technical Deliverables */}
          <div className="lg:col-span-5 space-y-6">
            {/* Services Deployed Box */}
            <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <Layers className="w-4 h-4" />
                <span>PRACTICES DEPLOYED</span>
              </div>
              <h3 className="text-lg font-display font-bold text-main">
                Services Used in This Engagement
              </h3>
              <p className="text-xs text-muted">
                Executed under single-point technical accountability:
              </p>

              <div className="space-y-2 pt-2">
                {servicesUsed.map((srv, sIdx) => (
                  <a
                    key={sIdx}
                    href={`/services/${srv.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/services/${srv.slug}`);
                    }}
                    className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-subtle hover:border-accent/40 flex items-center justify-between text-xs font-medium text-main transition-colors group cursor-pointer"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Technical Deliverables */}
            <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-base font-semibold text-main border-b border-subtle pb-3">
                Key Technical Deliverables
              </h3>
              <ul className="space-y-2.5">
                {study.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-subtle space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    if (onOpenConsultationModal) {
                      onOpenConsultationModal();
                    } else {
                      onNavigate('/contact');
                    }
                  }}
                  withArrow
                >
                  Discuss Similar Scope
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  onClick={() => onNavigate('/case-studies')}
                >
                  Back to All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Case Studies */}
        <div className="my-16 pt-12 border-t border-subtle">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-main">
              Explore More Client Outcomes
            </h2>
            <button
              onClick={() => onNavigate('/case-studies')}
              className="text-xs text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              All Case Studies <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherStudies.map((cs) => (
              <div
                key={cs.id}
                onClick={() => onNavigate(`/case-studies/${cs.slug}`)}
                className="p-6 rounded-3xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-3 group"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <span className="text-accent">{cs.industry}</span>
                  <span>·</span>
                  <span>{cs.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-main group-hover:text-accent transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                  {cs.summary}
                </p>
                <span className="text-xs text-accent font-medium pt-2 flex items-center gap-1">
                  Read Case Story <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
