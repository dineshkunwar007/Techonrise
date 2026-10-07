import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { INDUSTRIES_DATA } from '../data/industries';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';

interface IndustriesViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Industries', url: '/industries' }])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Industries', url: '/industries' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>SECTOR EXPERTISE</span>
            <span aria-hidden="true">·</span>
            <span>09 DEDICATED DOMAINS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Tailored Digital Systems for Your Specific Industry.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Every vertical experiences distinct operational bottlenecks, compliance rules, and customer acquisition funnels. Discover how Techonrise engineers domain-specific advantage across the United Kingdom.
          </p>
        </div>

        {/* 9 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-accent/40 transition-all duration-200 shadow-sm group"
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold block">
                    Sector Architecture
                  </span>
                  <h2 className="text-xl font-display font-bold text-main group-hover:text-accent transition-colors mt-1">
                    {ind.title}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-main/90 font-medium leading-snug">
                  {ind.headline}
                </p>

                <p className="text-xs text-muted leading-relaxed">
                  {ind.shortSummary}
                </p>

                <div className="pt-3 border-t border-subtle space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
                    Recommended Solution
                  </span>
                  <p className="text-xs font-semibold text-main">
                    {ind.recommendedBundle.category}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {ind.recommendedBundle.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-subtle">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full justify-between"
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Sector Blueprint
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
