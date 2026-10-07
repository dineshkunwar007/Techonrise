import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../../data/industries';
import { ArrowRight, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';
import { Button } from '../ui/Button';

interface IndustrySolutionsProps {
  onNavigate: (path: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onNavigate }) => {
  const [selectedSlug, setSelectedSlug] = useState(INDUSTRIES_DATA[0].slug);

  const selectedIndustry =
    INDUSTRIES_DATA.find((ind) => ind.slug === selectedSlug) || INDUSTRIES_DATA[0];

  return (
    <section id="industry-solutions" className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>TAILORED INDUSTRY BLUEPRINTS</span>
            <span aria-hidden="true">·</span>
            <span>09 SECTORS SUPPORTED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Engineered for Your Sector’s Exact Commercial Reality.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Every vertical experiences distinct operational bottlenecks, compliance rules, and customer acquisition funnels. We do not deliver generic multi-purpose templates; we assemble specific technical bundles calibrated to your industry.
          </p>
        </div>

        {/* Asymmetric Strategic Layout: Left Sector Selector with Tailored Promises + Right Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sector Navigation with Tailored Promises */}
          <div className="lg:col-span-4 space-y-1.5 bg-[var(--surface-1)] p-3 rounded-2xl border border-subtle">
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-3 py-2 block font-semibold">
              Select Vertical
            </span>
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = ind.slug === selectedSlug;
              return (
                <button
                  key={ind.slug}
                  type="button"
                  onClick={() => setSelectedSlug(ind.slug)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex flex-col justify-between cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[var(--surface-2)] border border-accent/40 shadow-xs'
                      : 'hover:bg-[var(--surface-2)]/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-accent' : 'text-main'}`}>
                      {ind.title}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isSelected ? 'translate-x-0.5 text-accent' : 'opacity-0'
                      }`}
                    />
                  </div>
                  <p className="text-[11px] text-muted truncate mt-0.5 max-w-[280px]">
                    {ind.headline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Industry Deep Dive (Bottlenecks vs Recommended Bundle) */}
          <div className="lg:col-span-8 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
            <div className="space-y-3 border-b border-subtle pb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                  Sector Blueprint
                </span>
                <a
                  href={`/industries/${selectedIndustry.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/industries/${selectedIndustry.slug}`);
                  }}
                  className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                >
                  View Sector Page <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-main">
                {selectedIndustry.title}
              </h3>

              {/* Tailored one-line promise per industry */}
              <div className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-subtle">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block mb-0.5">
                  Sector Commercial Promise:
                </span>
                <p className="text-sm font-semibold text-main leading-snug">
                  "{selectedIndustry.headline}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed pt-1">
                {selectedIndustry.shortSummary}
              </p>
            </div>

            {/* Pain Points vs Recommended Solution Bundle */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Sector Bottlenecks */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                  Common Sector Bottlenecks
                </span>
                <ul className="space-y-2.5 text-xs text-muted">
                  {selectedIndustry.industryPainPoints.map((pain, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-[var(--surface-2)] p-3.5 rounded-xl border border-subtle">
                      <span className="text-[#E7B65C] font-mono shrink-0 mt-0.5">✕</span>
                      <span className="leading-relaxed">{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Service Bundle */}
              <div className="space-y-4 bg-[var(--surface-2)] p-6 rounded-2xl border border-subtle flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                      Recommended Bundle
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-main">
                    {selectedIndustry.recommendedBundle.category}
                  </h4>

                  <ul className="space-y-2 text-xs text-main">
                    {selectedIndustry.recommendedBundle.services.map((srv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="font-medium">{srv}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-muted leading-relaxed pt-3 border-t border-subtle">
                    {selectedIndustry.recommendedBundle.outcome}
                  </p>
                </div>

                <div className="pt-3 border-t border-subtle space-y-3">
                  <div className="p-3 rounded-lg bg-[var(--surface-1)] border border-subtle text-xs text-muted">
                    <div className="flex items-center justify-between text-[10px] font-mono text-accent uppercase font-bold mb-0.5">
                      <span>Validated Sector Impact</span>
                      <span className="text-muted/70">Placeholder</span>
                    </div>
                    {selectedIndustry.sampleCaseSnippet}
                  </div>

                  <Button
                    size="sm"
                    variant="primary"
                    className="w-full"
                    onClick={() => onNavigate(`/industries/${selectedIndustry.slug}`)}
                    withArrow
                  >
                    Explore {selectedIndustry.title} Solutions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
