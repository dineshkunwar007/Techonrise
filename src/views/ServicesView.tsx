import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SERVICES_DATA } from '../data/services';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, Zap, Layers, ShieldCheck } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateOfferCatalogSchema, generateBreadcrumbSchema } from '../lib/schema';
import { FAQSection } from '../components/sections/FAQSection';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';

export const ServicesView: React.FC<{
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}> = ({ onNavigate, onOpenConsultationModal }) => {
  const catalogList = SERVICES_DATA.map((c) => ({
    title: c.title,
    description: c.overview,
    url: `/services/${c.slug}`,
  }));

  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={[
          generateOfferCatalogSchema(catalogList),
          generateBreadcrumbSchema([{ name: 'Services', url: '/services' }]),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Services', url: '/services' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>FULL-STACK DIGITAL CAPABILITIES</span>
            <span aria-hidden="true">·</span>
            <span>01 TO 05 INTEGRATED PRACTICES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Integrated Services Engineered for Measurable Growth.
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            Techonrise operates across five core practices. Every discipline is delivered by in-house UK specialists working in unison to eliminate handoffs, accelerate time-to-market, and compound your commercial digital advantage.
          </p>
        </div>

        {/* Strategic Benefits Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
            <Zap className="w-5 h-5 text-accent" />
            <h3 className="text-base font-semibold text-main">Unified Technical Execution</h3>
            <p className="text-xs text-muted leading-relaxed">
              No division between designers, programmers, and SEO managers. One cohesive UK engineering squad accountable for your KPIs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
            <Layers className="w-5 h-5 text-accent" />
            <h3 className="text-base font-semibold text-main">Sub-Second Modern Architecture</h3>
            <p className="text-xs text-muted leading-relaxed">
              Engineered with clean Next.js, Tailwind, and relational databases. Zero generic templates or bloated plugin dependencies.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#E7B65C]" />
            <h3 className="text-base font-semibold text-main">Sovereign UK Data Standards</h3>
            <p className="text-xs text-muted leading-relaxed">
              100% intellectual property ownership, UK GDPR compliance by design, and hosting localized in British data facilities.
            </p>
          </div>
        </div>

        {/* Five Core Practices Grid */}
        <div className="space-y-12 my-16">
          {SERVICES_DATA.map((cat) => (
            <div
              key={cat.id}
              className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 hover:border-accent/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-subtle">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-accent font-semibold">
                      PRACTICE {cat.categoryNumber}
                    </span>
                    <span className="text-muted">·</span>
                    <span className="text-xs text-muted">{cat.subServices.length} Specialized Sub-Services</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
                    {cat.title}
                  </h2>
                  <p className="text-sm font-medium text-main/90 max-w-2xl">
                    {cat.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate(`/services/${cat.slug}`)}
                    withArrow
                  >
                    View Practice Blueprint
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-sm text-muted leading-relaxed">
                    {cat.overview}
                  </p>
                  
                  <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-1.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                      Commercial Impact
                    </span>
                    <p className="text-xs text-muted leading-relaxed">
                      {cat.businessImpact}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`/services/${cat.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/services/${cat.slug}`);
                      }}
                      className="text-xs text-accent hover:underline flex items-center gap-1 font-semibold"
                    >
                      Explore {cat.title} Specifications <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Subservice Disciplines with Deep Links */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.subServices.map((sub, sIdx) => (
                    <div
                      key={sub.id}
                      onClick={() => onNavigate(`/services/${cat.slug}#${sub.slug}`)}
                      className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-2 hover:border-accent/40 cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-accent">0{sIdx + 1}.</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent/60 group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="text-sm font-semibold text-main group-hover:text-accent transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {sub.shortDesc}
                      </p>
                      <span className="text-[11px] font-mono text-accent block pt-1">
                        View Details →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Interactive 6-Stage Delivery Process Timeline */}
        <div className="my-16 -mx-4 sm:-mx-6 lg:-mx-8">
          <ProcessTimeline />
        </div>

        {/* Sector Solution Callout */}
        <div className="p-8 rounded-3xl bg-[var(--surface-1)] border border-subtle my-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              CROSS-SECTOR SPECIALISATION
            </span>
            <h2 className="text-2xl font-display font-bold text-main">
              Tailored Bundles for 9 Specific UK Industries
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              From trades and logistics to healthcare and private professional practices, see our pre-architected vertical technology packages.
            </p>
          </div>
          <Button
            size="md"
            variant="secondary"
            onClick={() => onNavigate('/industries')}
            withArrow
          >
            Explore Industry Blueprints
          </Button>
        </div>

        {/* Practice FAQ Section */}
        <FAQSection onNavigate={onNavigate} limit={6} />

        {/* Final Conversion CTA */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-4xl mx-auto my-16 shadow-md">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
            Integrated Project Scoping
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-main">
            Ready to Plan Your Next Strategic Milestone?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Discuss your requirements with senior technical leads. We'll examine your current architecture, isolate bottlenecks, and provide a clear delivery scope.
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
              Book a Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('/packages')}
            >
              View Retainers & Pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
