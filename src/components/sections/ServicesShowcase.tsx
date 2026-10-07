import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/services';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { LazyAutomationGraph, LazyInfrastructureLayers } from '../three/LazyScenes';

interface ServicesShowcaseProps {
  onNavigate: (path: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onNavigate }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(SERVICES_DATA[0].id);
  const [openSubServiceId, setOpenSubServiceId] = useState<string | null>(SERVICES_DATA[0].subServices[0].id);

  const activeCategory = SERVICES_DATA.find((c) => c.id === activeCategoryId) || SERVICES_DATA[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    'seo-growth': <Zap className="w-4 h-4 text-accent" />,
    'websites-ecommerce': <Sparkles className="w-4 h-4 text-accent" />,
    'software-apps': <Layers className="w-4 h-4 text-accent" />,
    'ai-automation': <Sparkles className="w-4 h-4 text-[#E7B65C]" />,
    'hosting-infrastructure': <ShieldCheck className="w-4 h-4 text-accent" />,
  };

  const handleSubServiceToggle = (subId: string) => {
    setOpenSubServiceId(openSubServiceId === subId ? null : subId);
  };

  return (
    <section id="services-showcase" className="py-24 relative overflow-hidden bg-[var(--surface-1)] border-y border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with answer-first intro for SEO */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>CAPABILITIES ARCHITECTURE</span>
            <span aria-hidden="true">·</span>
            <span>01 TO 05 INTEGRATED PRACTICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Integrated Digital Capabilities. Zero Vendor Fragmentation.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Techonrise combines growth marketing, bespoke software engineering, mobile development, practical AI automations, and cloud infrastructure under one UK roof. We bridge the gap between creative agencies that cannot write software and software shops that don’t understand commercial growth.
          </p>
        </div>

        {/* Sophisticated Combination: Sticky Side Navigation + Split Layered Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Sticky Category Side-Navigation on desktop */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-muted px-2 block font-semibold mb-3">
              Delivery Practices
            </span>
            <div className="space-y-1.5 bg-[var(--surface-2)] p-2 rounded-2xl border border-subtle">
              {SERVICES_DATA.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setOpenSubServiceId(cat.subServices[0].id);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-between cursor-pointer group select-none ${
                      isActive
                        ? 'bg-[var(--surface-1)] text-main font-semibold shadow-xs border border-accent/40'
                        : 'text-muted hover:text-main hover:bg-[var(--surface-1)]/50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent">
                        {cat.categoryNumber}.
                      </span>
                      <span className="truncate">{cat.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-muted/80 bg-[var(--surface-2)] px-2 py-0.5 rounded">
                      {cat.subServices.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs text-muted space-y-1 mt-4 hidden lg:block">
              <span className="text-main font-semibold block">Full Stack Delivery:</span>
              <p>Every practice is executed by in-house UK engineers and growth strategists.</p>
            </div>
          </div>

          {/* Right Column: Layered Split Detail Panel + Accordion for Sub-Services */}
          <div className="lg:col-span-8 bg-[var(--surface-2)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
            {/* Active Category Header */}
            <div className="space-y-3 pb-6 border-b border-subtle">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-[var(--surface-1)] border border-subtle">
                    {categoryIcons[activeCategory.id]}
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold uppercase">
                    Practice {activeCategory.categoryNumber}
                  </span>
                </div>

                <a
                  href={`/services/${activeCategory.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/services/${activeCategory.slug}`);
                  }}
                  className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                >
                  View Practice Blueprint <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-main">
                {activeCategory.title}
              </h3>
              <p className="text-sm font-medium text-main/90 leading-snug">
                {activeCategory.tagline}
              </p>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {activeCategory.overview}
              </p>
            </div>

            {/* Split Layout: Outcomes & Ideal Fit (Left) + Sub-Service Accordion (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Sub-Column: Rationale & Outcomes */}
              <div className="md:col-span-5 space-y-5">
                <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                    Commercial Outcomes
                  </span>
                  <ul className="space-y-2 text-xs text-muted">
                    {activeCategory.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-tight">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-main font-semibold block">
                    Ideal Fit
                  </span>
                  <ul className="space-y-1.5 text-xs text-muted">
                    {activeCategory.idealClients.map((client, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contextual 3D Visual for AI & Automation */}
                {activeCategory.id === 'ai-automation' && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                      3D Orchestration Topology
                    </span>
                    <LazyAutomationGraph />
                  </div>
                )}

                {/* Contextual 3D Visual for Cloud Hosting & Infrastructure */}
                {activeCategory.id === 'hosting-infrastructure' && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block">
                      3D Sovereign Infrastructure Stack
                    </span>
                    <LazyInfrastructureLayers />
                  </div>
                )}

                <Button
                  size="sm"
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavigate(`/services/${activeCategory.slug}`)}
                  withArrow
                >
                  Explore {activeCategory.title}
                </Button>
              </div>

              {/* Right Sub-Column: Accordion for Sub-Services */}
              <div className="md:col-span-7 space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block mb-2">
                  Sub-Services & Deliverables ({activeCategory.subServices.length})
                </span>

                <div className="space-y-2">
                  {activeCategory.subServices.map((sub, sIdx) => {
                    const isOpen = openSubServiceId === sub.id;
                    return (
                      <div
                        key={sub.id}
                        className="rounded-xl border border-subtle bg-[var(--surface-1)] overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => handleSubServiceToggle(sub.id)}
                          aria-expanded={isOpen}
                          className="w-full text-left p-4 flex items-center justify-between cursor-pointer group focus-visible:outline-2 focus-visible:outline-accent"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="font-mono text-xs text-accent">0{sIdx + 1}.</span>
                            <span className="text-sm font-semibold text-main group-hover:text-accent transition-colors">
                              {sub.title}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-muted group-hover:text-main transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-accent' : ''
                            }`}
                          />
                        </button>

                        {/* Subservice details: strictly in DOM for crawlers without display:none */}
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden px-4 pb-4">
                            <p className="text-xs text-muted leading-relaxed pb-3 border-b border-subtle">
                              {sub.shortDesc}
                            </p>

                            <div className="pt-3 space-y-1.5">
                              <span className="text-[10px] font-mono uppercase text-muted font-semibold block">
                                Deliverables
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-main">
                                {sub.deliverables.map((del, dIdx) => (
                                  <div key={dIdx} className="flex items-center gap-1.5 truncate">
                                    <span className="text-accent text-xs">✓</span>
                                    <span className="truncate">{del}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 mt-3 border-t border-subtle flex justify-end">
                              <a
                                href={`/services/${activeCategory.slug}#${sub.slug}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate(`/services/${activeCategory.slug}`);
                                }}
                                className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                              >
                                View practice specs for {sub.title} <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crawlable Semantic DOM Section for Search Crawlers */}
        <div className="sr-only" aria-hidden="false">
          {SERVICES_DATA.map((cat) => (
            <div key={`crawlable-cat-${cat.id}`}>
              <h3>{cat.title}</h3>
              <p>{cat.overview}</p>
              <ul>
                {cat.subServices.map((sub) => (
                  <li key={`crawlable-sub-${sub.id}`}>
                    <a href={`/services/${cat.slug}`}>{sub.title}</a>
                    <p>{sub.shortDesc}</p>
                    <ul>
                      {sub.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
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
