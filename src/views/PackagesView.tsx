import React, { useState } from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { PACKAGES_DATA, type PackageItem } from '../data/packages';
import { Button } from '../components/ui/Button';
import { Check, ArrowRight, ShieldCheck, X, Sparkles } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema, generateOfferCatalogSchema } from '../lib/schema';

export const PackagesView: React.FC<{
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}> = ({ onNavigate, onOpenConsultationModal }) => {
  const [filterType, setFilterType] = useState<'all' | 'retainer' | 'project'>('all');

  const filteredPackages =
    filterType === 'all'
      ? PACKAGES_DATA
      : PACKAGES_DATA.filter((p) => p.type === filterType);

  // Feature Comparison Matrix Data
  const comparisonFeatures = [
    {
      feature: 'Dedicated Monthly Engineering Sprint Hours',
      websiteCare: '4 hrs/mo',
      seoGrowth: '8 hrs/mo',
      digitalPartner: '24 hrs/mo',
      softwareMaint: '16 hrs/mo',
      aiAutomation: '12 hrs/mo',
    },
    {
      feature: 'Core Web Vitals & Speed Monitoring',
      websiteCare: true,
      seoGrowth: true,
      digitalPartner: true,
      softwareMaint: true,
      aiAutomation: false,
    },
    {
      feature: 'Technical SEO Audits & Keyword Tracking',
      websiteCare: false,
      seoGrowth: true,
      digitalPartner: true,
      softwareMaint: false,
      aiAutomation: false,
    },
    {
      feature: 'Custom Next.js & TypeScript Feature Sprints',
      websiteCare: false,
      seoGrowth: false,
      digitalPartner: true,
      softwareMaint: true,
      aiAutomation: false,
    },
    {
      feature: 'AI Pipeline & CRM Workflow Automation',
      websiteCare: false,
      seoGrowth: false,
      digitalPartner: true,
      softwareMaint: false,
      aiAutomation: true,
    },
    {
      feature: '24/7 Synthetic Uptime & Emergency Rollback',
      websiteCare: true,
      seoGrowth: false,
      digitalPartner: true,
      softwareMaint: true,
      aiAutomation: true,
    },
    {
      feature: 'UK GDPR Data Sovereignty & Audit Logs',
      websiteCare: true,
      seoGrowth: true,
      digitalPartner: true,
      softwareMaint: true,
      aiAutomation: true,
    },
    {
      feature: 'Direct Technical Director SLA',
      websiteCare: 'Next business day',
      seoGrowth: 'Next business day',
      digitalPartner: '< 4 hours',
      softwareMaint: '< 4 hours',
      aiAutomation: '< 8 hours',
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-14 sm:pb-20">
      <JsonLd
        schema={[
          generateBreadcrumbSchema([{ name: 'Packages & Retainers', url: '/packages' }]),
          generateOfferCatalogSchema(
            PACKAGES_DATA.map((p) => ({
              title: p.name,
              description: p.description,
              url: '/packages',
            }))
          ),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Packages & Retainers', url: '/packages' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-6 sm:my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>TRANSPARENT COMMERCIAL TIERS</span>
            <span aria-hidden="true">·</span>
            <span>SCOPED SPRINTS & RETAINERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Flexible Retainers & Scoped Project Delivery.
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Choose between continuous monthly growth retainers or fixed-price scoped transformation projects. Every agreement provides 100% intellectual property ownership and direct senior technical access. Figures represent indicative baseline tiers for scoping & budgeting.
          </p>
        </div>

        {/* Segmented Filter Control */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-[var(--surface-1)] border border-subtle rounded-xl max-w-full overflow-x-auto scrollbar-none mb-8 sm:mb-12">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 whitespace-nowrap ${
              filterType === 'all'
                ? 'bg-[var(--surface-2)] text-main font-semibold shadow-xs'
                : 'text-muted hover:text-main'
            }`}
          >
            All Models ({PACKAGES_DATA.length})
          </button>
          <button
            onClick={() => setFilterType('retainer')}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 whitespace-nowrap ${
              filterType === 'retainer'
                ? 'bg-[var(--surface-2)] text-main font-semibold shadow-xs'
                : 'text-muted hover:text-main'
            }`}
          >
            Monthly Retainers (7 Models)
          </button>
          <button
            onClick={() => setFilterType('project')}
            className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 whitespace-nowrap ${
              filterType === 'project'
                ? 'bg-[var(--surface-2)] text-main font-semibold shadow-xs'
                : 'text-muted hover:text-main'
            }`}
          >
            One-Off Scoped Projects
          </button>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[var(--surface-1)] border rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-200 relative ${
                pkg.isPopular
                  ? 'border-accent shadow-md ring-1 ring-accent/30'
                  : 'border-subtle hover:border-accent/40'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-6 bg-accent text-[#0C0F12] text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <span className="text-xs font-mono uppercase text-muted font-semibold block">
                    {pkg.type === 'retainer' ? 'Monthly Retainer' : 'Scoped Fixed-Price'}
                  </span>
                  <h2 className="text-xl font-display font-bold text-main mt-1">
                    {pkg.name}
                  </h2>
                </div>

                <div className="space-y-0.5 border-b border-subtle pb-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-display font-bold text-main tabular-nums">
                      {pkg.priceNote}
                    </span>
                    <span className="text-xs text-muted">
                      {pkg.billingFrequency}
                    </span>
                  </div>
                  <span className="text-[10px] text-accent font-mono block uppercase font-medium">
                    Indicative Tier
                  </span>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {pkg.description}
                </p>

                <div className="p-3 rounded-lg bg-[var(--surface-2)] border border-subtle text-xs text-muted">
                  <span className="font-semibold text-main block mb-0.5">Best Suited For:</span>
                  {pkg.targetAudience}
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-main font-semibold block">
                    What's Included
                  </span>
                  <ul className="space-y-2 text-xs text-muted">
                    {pkg.keyInclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-subtle">
                <Button
                  size="md"
                  variant={pkg.isPopular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => {
                    if (onOpenConsultationModal) {
                      onOpenConsultationModal();
                    } else {
                      onNavigate('/contact');
                    }
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Proposal
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table (Scrolls horizontally inside container on mobile) */}
        <div className="my-20 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              FEATURE BY FEATURE MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
              Retainer Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Side-by-side evaluation of core technical capabilities, sprint allocations, and SLAs.
            </p>
          </div>

          <div className="rounded-2xl border border-subtle bg-[var(--surface-1)] shadow-sm overflow-hidden">
            {/* Scrollable Container with responsive indicator */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-subtle bg-[var(--surface-2)]">
                    <th className="p-4 sm:p-5 font-semibold text-main w-1/3">
                      Deliverable / Capability
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-main text-center">
                      Website Care
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-main text-center">
                      SEO Growth
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-accent text-center bg-accent/5">
                      Digital Partner
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-main text-center">
                      Software Maint.
                    </th>
                    <th className="p-4 sm:p-5 font-semibold text-main text-center">
                      AI Automation
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-subtle">
                  {comparisonFeatures.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[var(--surface-2)]/40 transition-colors">
                      <td className="p-4 sm:p-5 font-medium text-main">
                        {row.feature}
                      </td>
                      
                      {/* Website Care */}
                      <td className="p-4 sm:p-5 text-center text-muted">
                        {typeof row.websiteCare === 'boolean' ? (
                          row.websiteCare ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted/40">—</span>
                          )
                        ) : (
                          <span className="font-mono text-main">{row.websiteCare}</span>
                        )}
                      </td>

                      {/* SEO Growth */}
                      <td className="p-4 sm:p-5 text-center text-muted">
                        {typeof row.seoGrowth === 'boolean' ? (
                          row.seoGrowth ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted/40">—</span>
                          )
                        ) : (
                          <span className="font-mono text-main">{row.seoGrowth}</span>
                        )}
                      </td>

                      {/* Digital Partner (Flagship) */}
                      <td className="p-4 sm:p-5 text-center text-accent bg-accent/5 font-semibold">
                        {typeof row.digitalPartner === 'boolean' ? (
                          row.digitalPartner ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted/40">—</span>
                          )
                        ) : (
                          <span className="font-mono">{row.digitalPartner}</span>
                        )}
                      </td>

                      {/* Software Maint */}
                      <td className="p-4 sm:p-5 text-center text-muted">
                        {typeof row.softwareMaint === 'boolean' ? (
                          row.softwareMaint ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted/40">—</span>
                          )
                        ) : (
                          <span className="font-mono text-main">{row.softwareMaint}</span>
                        )}
                      </td>

                      {/* AI Automation */}
                      <td className="p-4 sm:p-5 text-center text-muted">
                        {typeof row.aiAutomation === 'boolean' ? (
                          row.aiAutomation ? (
                            <Check className="w-4 h-4 text-accent mx-auto" />
                          ) : (
                            <span className="text-muted/40">—</span>
                          )
                        ) : (
                          <span className="font-mono text-main">{row.aiAutomation}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-3 bg-[var(--surface-2)] text-[11px] text-muted flex items-center justify-between border-t border-subtle">
              <span>Swipe horizontally on mobile to view all tiers</span>
              <span className="text-accent font-mono font-medium">All tiers include 100% IP ownership</span>
            </div>
          </div>
        </div>

        {/* Retainer Governance Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-subtle my-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <ShieldCheck className="w-4 h-4" />
              <span>CUSTOM CONTRACT SPECIFICATIONS</span>
            </div>
            <h3 className="text-xl font-display font-bold text-main">
              Need a Custom Hybrid Engineering Retainer?
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              For complex operations combining custom Next.js development, technical SEO, and dedicated AI pipeline monitoring, we configure bespoke sprint capacity models with guaranteed SLA turnarounds and rollover allocations.
            </p>
          </div>
          <Button
            size="md"
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
            Discuss Custom Retainer
          </Button>
        </div>

      </div>
    </div>
  );
};
