import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { LOCATIONS_DATA, type LocationData } from '../data/locations';
import { Button } from '../components/ui/Button';
import { MapPin, ArrowRight, CheckCircle2, Building2, Layers, ShieldCheck } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateFAQSchema, generateBreadcrumbSchema, generateLocalBusinessSchema } from '../lib/schema';
import { Accordion } from '../components/ui/Accordion';

/**
 * Static Params Generator for dynamic routes (Phase 5)
 */
export function generateStaticParams() {
  return LOCATIONS_DATA.map((l) => ({ city: l.slug }));
}

interface LocationDetailViewProps {
  citySlug: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const LocationDetailView: React.FC<LocationDetailViewProps> = ({
  citySlug,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const loc =
    LOCATIONS_DATA.find((l) => l.slug === citySlug) ||
    LOCATIONS_DATA[0];

  const otherLocations = LOCATIONS_DATA.filter((l) => l.slug !== loc.slug).slice(0, 3);

  const accordionItems = loc.localFaqs.map((f, i) => ({
    id: `loc-faq-${i}`,
    title: f.question,
    content: f.answer,
  }));

  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={[
          generateFAQSchema(loc.localFaqs),
          generateLocalBusinessSchema(),
          generateBreadcrumbSchema([
            { name: 'Locations', url: '/locations' },
            { name: loc.city, url: `/locations/${loc.slug}` },
          ]),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: 'Locations', url: '/locations' },
            { name: loc.city, url: `/locations/${loc.slug}` },
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero Header with Unique H1 */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <MapPin className="w-3.5 h-3.5" />
            <span>{loc.region.toUpperCase()}</span>
            <span>·</span>
            <span>UK REGIONAL HUB</span>
            {loc.isHeadquarters && (
              <>
                <span>·</span>
                <span className="bg-accent/15 text-accent px-2 py-0.5 rounded font-bold">
                  National Headquarters
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight leading-tight">
            Digital Transformation & Technology Partner in {loc.city}.
          </h1>

          <p className="text-xl text-main/90 font-medium leading-snug">
            "{loc.heroHeadline}"
          </p>

          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {loc.localIntro}
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
              Consult With Our {loc.city} Team
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

        {/* Regional Strategy & Strategic Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16 items-start">
          {/* Left Column: Local Strategy Emphasis */}
          <div className="lg:col-span-7 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              REGIONAL CAPABILITY EMPHASIS
            </span>
            <h2 className="text-2xl font-display font-bold text-main">
              Tailored Digital Strategy for {loc.city} Enterprises
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              {loc.serviceEmphasis}
            </p>

            <div className="pt-4 border-t border-subtle space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-main font-semibold block">
                Primary Regional Sectors Supported:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-muted">
                {loc.keySectorsServed.map((sec, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--surface-2)] border border-subtle">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="font-medium text-main">{sec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-subtle text-xs text-muted flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-main block mb-0.5">Physical Hub & Service Coverage:</span>
                <p>{loc.addressSnippet}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Territorial Coverage & Catchment Areas */}
          <div className="lg:col-span-5 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
              CATCHMENT TERRITORIES
            </span>
            <h3 className="text-lg font-semibold text-main">
              Comprehensive Regional Reach
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Our engineering squads and on-site strategy directors support businesses throughout {loc.city} and neighboring economic areas:
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              {loc.nearbyAreasCovered.map((area, aIdx) => (
                <span
                  key={aIdx}
                  className="px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-subtle text-main font-medium"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-subtle space-y-2 text-xs text-muted">
              <p className="font-semibold text-main">Meeting Formats in {loc.city}:</p>
              <p>• In-person discovery workshops available across {loc.region}</p>
              <p>• Secure virtual engineering planning and sprint reviews</p>
              <p>• Emergency same-day on-site support for business-critical outages</p>
            </div>
          </div>
        </div>

        {/* Localized FAQs */}
        <div className="my-16 bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-mono text-accent uppercase font-semibold">
              LOCAL GUIDANCE & COMPLIANCE
            </span>
            <h2 className="text-2xl font-display font-bold text-main">
              {loc.city} Regional FAQs
            </h2>
          </div>
          <Accordion items={accordionItems} defaultOpenIndex={0} />
        </div>

        {/* Other UK Strategic Hubs */}
        <div className="my-16 pt-12 border-t border-subtle">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold text-main">
              Explore Other UK Regional Hubs
            </h2>
            <button
              onClick={() => onNavigate('/locations')}
              className="text-xs text-accent hover:underline flex items-center gap-1 font-semibold"
            >
              All 10 Hubs <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherLocations.map((nl) => (
              <div
                key={nl.slug}
                onClick={() => onNavigate(`/locations/${nl.slug}`)}
                className="p-6 rounded-3xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-3 group"
              >
                <div>
                  <span className="text-xs font-mono text-accent">{nl.region}</span>
                  <h3 className="text-lg font-semibold text-main mt-0.5 group-hover:text-accent transition-colors">
                    {nl.city}
                  </h3>
                  <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                    {nl.localIntro}
                  </p>
                </div>
                <span className="text-xs text-accent font-medium pt-2 flex items-center gap-1">
                  View {nl.city} Hub <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-4xl mx-auto my-16 shadow-md">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
            Regional Project Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-main">
            Ready to Accelerate Your {loc.city} Business?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Connect directly with our UK senior leads. We review your localized search visibility, custom software requirements, and digital workflows.
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
              Book Discovery Session
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate('/services')}
            >
              Explore Capabilities
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
