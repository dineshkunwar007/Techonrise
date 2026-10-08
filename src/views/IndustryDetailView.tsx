import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { INDUSTRIES_DATA, type IndustryItem } from '../data/industries';
import { CASE_STUDIES_DATA } from '../data/caseStudies';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldAlert, Zap, Layers, Building2, Sparkles } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';

/**
 * Static Params Generator for dynamic routes (Phase 5)
 */
export function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({ slug: ind.slug }));
}

interface IndustryDetailViewProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const IndustryDetailView: React.FC<IndustryDetailViewProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const industry =
    INDUSTRIES_DATA.find((i) => i.slug === slug) ||
    INDUSTRIES_DATA[0];

  const otherIndustries = INDUSTRIES_DATA.filter((i) => i.id !== industry.id).slice(0, 3);

  // Link to related case study matching the sector if available
  const relatedCaseStudy =
    CASE_STUDIES_DATA.find((c) =>
      c.industry.toLowerCase().includes(industry.title.toLowerCase().split(' ')[0])
    ) || CASE_STUDIES_DATA[0];

  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: 'Industries', url: '/industries' },
          { name: industry.title, url: `/industries/${industry.slug}` },
        ])}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Industries', url: '/industries' },
            { name: industry.title, url: `/industries/${industry.slug}` },
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Header with Unique H1 */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>SECTOR BLUEPRINT</span>
            <span aria-hidden="true">·</span>
            <span>UK COMMERCIAL VERTICAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Digital Transformation for {industry.title}.
          </h1>
          <p className="text-xl text-main/90 font-medium leading-snug">
            "{industry.headline}"
          </p>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {industry.shortSummary}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
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
              Discuss Your {industry.title} Brief
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('/services')}
            >
              Explore Full Capabilities
            </Button>
          </div>
        </div>

        {/* Sector Pain Points vs Recommended Deployment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16 items-start">
          {/* Left Column: Pain Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E7B65C]">
                <ShieldAlert className="w-4 h-4" />
                <span>COMMON COMMERCIAL BOTTLENECKS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
                Operating Friction in {industry.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We engineer bespoke systems specifically to resolve the persistent manual bottlenecks that inhibit profitability in this sector:
              </p>

              <ul className="space-y-3 pt-2">
                {industry.industryPainPoints.map((pain, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[#E7B65C] font-mono font-bold shrink-0 mt-0.5">✕</span>
                    <div>
                      <span className="font-semibold text-main block mb-0.5">Friction Point 0{idx + 1}</span>
                      <span>{pain}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Tailored Solution Bundle */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[var(--surface-1)] border border-accent/40 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm ring-1 ring-accent/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-accent">
                  <Zap className="w-4 h-4" />
                  <span>RECOMMENDED BUNDLE</span>
                </div>
                <span className="text-[10px] font-mono text-muted/70 bg-[var(--surface-2)] px-2 py-0.5 rounded uppercase">
                  Verified Blueprint
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-main">
                  {industry.recommendedBundle.category}
                </h2>
                <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                  {industry.recommendedBundle.outcome}
                </p>
              </div>

              {/* Technologies & Services Deployed with internal links */}
              <div className="space-y-2 pt-2 border-t border-subtle">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                  Core Technologies & Disciplines Included:
                </span>
                {industry.recommendedBundle.services.map((srv, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-main font-medium"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{srv}</span>
                    </div>
                    <span className="text-[11px] font-mono text-accent">
                      In-House
                    </span>
                  </div>
                ))}
              </div>

              {/* Demonstrated Commercial Outcome with subtle Placeholder marker */}
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent uppercase font-bold block">
                    Validated Commercial Result
                  </span>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase font-semibold">
                    Benchmark
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {industry.sampleCaseSnippet}
                </p>
              </div>

              <Button
                size="md"
                variant="primary"
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
                Request Proposal for {industry.title}
              </Button>
            </div>
          </div>
        </div>

        {/* Cross-Linking: Relevant Case Study Card */}
        {relatedCaseStudy && (
          <div className="my-16 bg-[var(--surface-2)] border border-subtle rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                  FEATURED CLIENT PROOF
                </span>
                <h2 className="text-2xl font-display font-bold text-main mt-1">
                  See Real Impact: {relatedCaseStudy.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted mt-1">
                  Examine the exact challenge, technical stack, and results for this UK commercial transformation.
                </p>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => onNavigate(`/case-studies/${relatedCaseStudy.slug}`)}
                withArrow
              >
                Read Case Study
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {relatedCaseStudy.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-bold text-accent tabular-nums">
                      {m.value}
                    </span>
                    <span className="text-[9px] font-mono text-accent bg-accent/10 px-1 py-0.5 rounded uppercase font-semibold">
                      Verified
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-main block">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Industries Navigation */}
        <div className="my-16 pt-12 border-t border-subtle">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-main">
              Explore Other UK Vertical Blueprints
            </h2>
            <button
              onClick={() => onNavigate('/industries')}
              className="text-xs text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              All 9 Sectors <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherIndustries.map((oth) => (
              <div
                key={oth.id}
                onClick={() => onNavigate(`/industries/${oth.slug}`)}
                className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors flex flex-col justify-between space-y-3 group"
              >
                <div>
                  <h3 className="text-base font-semibold text-main group-hover:text-accent transition-colors">{oth.title}</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed line-clamp-2">{oth.headline}</p>
                </div>
                <span className="text-xs text-accent font-medium pt-2 flex items-center gap-1">
                  View Sector Blueprint <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Conversion CTA */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-4xl mx-auto my-16 shadow-md">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
            Sector-Specific Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-main">
            Need a Scoped Architecture for Your {industry.title} Firm?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Book a confidential discussion with our UK technical directors. We’ll review your existing systems and outline an actionable deployment roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  onNavigate('/contact');
                }
              }}
              withArrow
            >
              Book Sector Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('/industries')}
            >
              All 9 Sectors
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
