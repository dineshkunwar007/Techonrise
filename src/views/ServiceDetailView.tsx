import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { SERVICES_DATA, type ServiceCategory } from '../data/services';
import { INDUSTRIES_DATA } from '../data/industries';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, Building2 } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { Accordion } from '../components/ui/Accordion';

/**
 * Static Params Generator for dynamic routes (Phase 5)
 */
export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

interface ServiceDetailViewProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  slug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const service =
    SERVICES_DATA.find((s) => s.slug === slug) ||
    SERVICES_DATA[0];

  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 2);
  const relatedIndustries = INDUSTRIES_DATA.slice(0, 3);

  const accordionFaqs = service.faqs.map((f, i) => ({
    id: `srv-faq-${i}`,
    title: f.question,
    content: f.answer,
  }));

  return (
    <div className="pt-28 pb-20">
      {/* Service Schema, FAQ Schema & Breadcrumb Schema */}
      <JsonLd
        schema={[
          generateServiceSchema({
            title: service.title,
            description: service.overview,
            url: `/services/${service.slug}`,
          }),
          generateFAQSchema(service.faqs),
          generateBreadcrumbSchema([
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${service.slug}` },
          ]),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${service.slug}` },
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Header with Unique H1 */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>PRACTICE {service.categoryNumber}</span>
            <span aria-hidden="true">·</span>
            <span>CAPABILITIES BLUEPRINT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            {service.title} Delivery & Architecture.
          </h1>
          <p className="text-xl text-main/90 font-medium leading-snug">
            {service.tagline}
          </p>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {service.overview}
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
              Discuss {service.title}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('/packages')}
            >
              View Retainers & Pricing
            </Button>
          </div>
        </div>

        {/* Commercial Outcomes & Ideal Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              Quantified Outcomes
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-main">
              Commercial Outcomes Delivered
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed pb-2">
              {service.businessImpact}
            </p>
            <ul className="space-y-2 pt-2 border-t border-subtle text-xs sm:text-sm text-main">
              {service.outcomes.map((out, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              Client Fit Criteria
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-main">
              Ideal Organisations For This Practice
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-muted">
              {service.idealClients.map((client, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--surface-2)] border border-subtle">
                  <span className="text-accent font-mono">✓</span>
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What's Included / Sub-services Deliverables Grid */}
        <div className="my-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              MODULAR ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
              What’s Included in {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Every deliverable is crafted in-house by senior engineers and growth specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((sub, sIdx) => (
              <div
                key={sub.id}
                id={sub.slug}
                className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">0{sIdx + 1}.</span>
                    <Sparkles className="w-3.5 h-3.5 text-accent/60" />
                  </div>
                  <h3 className="text-base font-semibold text-main">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {sub.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-subtle space-y-1.5">
                  <span className="text-[10px] font-mono text-muted uppercase font-semibold block">
                    Core Deliverables
                  </span>
                  {sub.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-main">
                      <span className="text-accent text-xs">✓</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Process for this service */}
        <div className="my-16 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              DELIVERY FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
              How We Deliver {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Our structured 4-step framework ensures zero unexpected delays and flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-2 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold">Stage 0{idx + 1}</span>
                  <h3 className="text-sm font-semibold text-main mt-1">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs with WAI-ARIA Accordion */}
        <div className="my-16 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              PRACTICE SPECIFIC GUIDANCE
            </span>
            <h2 className="text-2xl font-display font-bold text-main">
              Frequently Asked Questions for {service.title}
            </h2>
          </div>
          <Accordion items={accordionFaqs} defaultOpenIndex={0} />
        </div>

        {/* Cross-Linking: Related Industries Served */}
        <div className="my-16 bg-[var(--surface-2)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                SECTOR APPLICATION
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-main mt-1">
                How British Sectors Leverage {service.title}
              </h2>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate('/industries')}
            >
              All 9 UK Industries
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-2 group"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <Building2 className="w-3.5 h-3.5 text-accent" />
                  <span>{ind.title}</span>
                </div>
                <h3 className="text-sm font-semibold text-main group-hover:text-accent transition-colors">
                  {ind.headline}
                </h3>
                <span className="text-xs text-accent font-medium block pt-1">
                  View Sector Blueprint →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Complementary Services */}
        <div className="my-16 pt-12 border-t border-subtle">
          <h2 className="text-xl font-display font-bold text-main mb-6">
            Related Complementary Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.id}
                className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-xs font-mono text-accent">Practice {rel.categoryNumber}</span>
                  <h3 className="text-base font-semibold text-main mt-0.5">{rel.title}</h3>
                  <p className="text-xs text-muted mt-1 max-w-md">{rel.tagline}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onNavigate(`/services/${rel.slug}`)}
                  withArrow
                >
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Final Conversion CTA */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-4xl mx-auto my-16 shadow-md">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
            Start Your Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-main">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Speak directly with the UK senior leads who will architect and build your solution. We review your current systems and provide a scoped technical proposal.
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
              Book Practice Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('/services')}
            >
              All 5 Practices
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
