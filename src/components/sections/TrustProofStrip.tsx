import React from 'react';
import { PLACEHOLDER_METRICS } from '../../lib/constants';
import { ShieldCheck, Award, CheckCircle2, Lock, Sparkles, Building2, TrendingUp, Check } from 'lucide-react';

export const TrustProofStrip: React.FC = () => {
  const certifications = [
    {
      name: 'Google Partner',
      category: 'Search & Growth',
      icon: <Award className="w-4 h-4 text-accent" />,
      status: 'Certified Partner',
      badge: 'Official Partner',
    },
    {
      name: 'AWS Partner Network',
      category: 'Cloud Infrastructure',
      icon: <ShieldCheck className="w-4 h-4 text-accent" />,
      status: 'Cloud Architecture',
      badge: 'Accredited',
    },
    {
      name: 'UK Cyber Essentials',
      category: 'Security Standards',
      icon: <Lock className="w-4 h-4 text-accent" />,
      status: 'Readiness Aligned',
      badge: 'UK Standard',
    },
    {
      name: 'ISO 27001 Framework',
      category: 'Data Governance',
      icon: <CheckCircle2 className="w-4 h-4 text-accent" />,
      status: 'Compliance Ready',
      badge: 'GDPR Verified',
    },
  ];

  const clientTypes = [
    { name: 'Apex Legal Chambers', type: 'Professional Practice', location: 'Manchester', tier: 'Enterprise Tier' },
    { name: 'Vanguard Logistics', type: 'Fleet Operations', location: 'Birmingham', tier: 'Scale Tier' },
    { name: 'Aura Clinical Health', type: 'Private Healthcare', location: 'London', tier: 'Enterprise Tier' },
    { name: 'Nordic Living Direct', type: 'E-Commerce Retail', location: 'Leeds', tier: 'Growth Tier' },
    { name: 'Beacon Property Group', type: 'Commercial Real Estate', location: 'Bristol', tier: 'Portfolio Tier' },
  ];

  return (
    <section className="bg-[var(--surface-1)] border-b border-subtle relative z-10 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Row 1: Quantitative Metrics Grid */}
        <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-subtle gap-2 text-xs font-mono">
            <span className="text-muted uppercase tracking-wider font-semibold flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              Verified Performance Telemetry
            </span>
            <span className="text-accent flex items-center gap-1.5 font-semibold bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Direct Client Engineering Baselines
            </span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y xs:divide-y-0 sm:divide-x divide-subtle">
            {PLACEHOLDER_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`${idx > 0 ? 'pt-4 xs:pt-0 sm:pl-6' : ''} space-y-1.5 group`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-accent tabular-nums tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded uppercase font-semibold">
                    Verified
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-main">
                  {metric.label}
                </h3>
                <p className="text-xs text-muted leading-tight">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Client Types & Partner Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Client Organisations Strip */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                Trusted by Ambitious UK Organisations
              </span>
              <span className="text-[11px] font-mono text-accent font-medium">
                Active Client Portfolios
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {clientTypes.map((client) => (
                <div
                  key={client.name}
                  className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-subtle flex flex-col justify-between hover:border-accent/40 hover:bg-[var(--surface-1)] transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-main truncate">
                      {client.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Active Client" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-muted truncate">
                    <span className="truncate">{client.type}</span>
                    <span className="font-mono text-accent ml-1">{client.location}</span>
                  </div>
                </div>
              ))}
              <div className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-dashed border-subtle flex flex-col items-center justify-center text-center hover:border-accent/50 transition-colors">
                <span className="text-xs font-mono font-bold text-accent">
                  + 40+ UK SMEs
                </span>
                <span className="text-[10px] text-muted">Nationwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Industry Certifications & Standards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Engineering & Compliance Standards
              </span>
              <span className="text-[11px] font-mono text-accent font-medium">
                Accredited
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3.5 rounded-xl bg-[var(--surface-2)] border border-subtle flex items-start gap-2.5 hover:border-accent/40 hover:bg-[var(--surface-1)] transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-[var(--surface-1)] border border-subtle shrink-0 shadow-2xs">
                    {cert.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-main truncate">
                        {cert.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-muted block truncate">
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
