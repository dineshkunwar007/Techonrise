import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { LOCATIONS_DATA } from '../data/locations';
import { Button } from '../components/ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '../lib/schema';

interface LocationsViewProps {
  onNavigate: (path: string) => void;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={[
          generateBreadcrumbSchema([{ name: 'UK Locations', url: '/locations' }]),
          generateLocalBusinessSchema(),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'UK Locations', url: '/locations' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>REGIONAL HUBS & COVERAGE</span>
            <span aria-hidden="true">·</span>
            <span>UK-WIDE ENGINEERING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Supporting Ambitious Businesses Across the United Kingdom.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Headquartered in Manchester with nationwide digital engineering teams, Techonrise powers technical SEO, bespoke web applications, and automated operations for leading regional enterprises.
          </p>
        </div>

        {/* 10 UK Regional Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.slug}
              className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-accent/40 transition-all duration-200 shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    {loc.region}
                  </span>
                  {loc.isHeadquarters && (
                    <span className="text-[10px] font-mono bg-accent/15 text-accent px-2 py-0.5 rounded font-bold">
                      Main HQ
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-main group-hover:text-accent transition-colors flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>{loc.city}</span>
                  </h2>
                  <p className="text-xs font-medium text-main/90 mt-1">
                    {loc.heroHeadline}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {loc.localIntro}
                </p>

                <div className="pt-2 border-t border-subtle space-y-1">
                  <span className="text-[10px] font-mono uppercase text-muted font-semibold block">
                    Key Sectors Served
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-muted">
                    {loc.keySectorsServed.map((sec, i) => (
                      <span key={i} className="bg-[var(--surface-2)] px-2 py-0.5 rounded">
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-subtle">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full justify-between"
                  onClick={() => onNavigate(`/locations/${loc.slug}`)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View {loc.city} Hub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
