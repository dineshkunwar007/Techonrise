import React from 'react';
import { PLACEHOLDER_METRICS } from '../../lib/constants';
import { ShieldCheck, Award, CheckCircle2, Lock, Sparkles, Building2 } from 'lucide-react';

export const TrustProofStrip: React.FC = () => {
  const certifications = [
    {
      name: 'Google Partner',
      category: 'Search & Growth',
      icon: <Award className="w-4 h-4 text-accent" />,
      status: 'Certified Partner',
      isPlaceholder: true,
    },
    {
      name: 'AWS Partner Network',
      category: 'Cloud Infrastructure',
      icon: <ShieldCheck className="w-4 h-4 text-accent" />,
      status: 'Cloud Practitioner',
      isPlaceholder: true,
    },
    {
      name: 'UK Cyber Essentials',
      category: 'Security Standards',
      icon: <Lock className="w-4 h-4 text-accent" />,
      status: 'Readiness Aligned',
      isPlaceholder: true,
    },
    {
      name: 'ISO 27001 Framework',
      category: 'Data Governance',
      icon: <CheckCircle2 className="w-4 h-4 text-accent" />,
      status: 'Compliance Ready',
      isPlaceholder: true,
    },
  ];

  const clientTypes = [
    { name: 'Apex Legal Chambers', type: 'Professional Practice', location: 'Manchester', isPlaceholder: true },
    { name: 'Vanguard Logistics', type: 'Fleet Operations', location: 'Birmingham', isPlaceholder: true },
    { name: 'Aura Clinical Health', type: 'Private Healthcare', location: 'London', isPlaceholder: true },
    { name: 'Nordic Living Direct', type: 'E-Commerce Retail', location: 'Leeds', isPlaceholder: true },
    { name: 'Beacon Property Group', type: 'Commercial Real Estate', location: 'Bristol', isPlaceholder: true },
  ];

  return (
    <section className="bg-[var(--surface-1)] border-b border-subtle relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Row 1: Quantitative Metrics Grid */}
        <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle text-xs font-mono">
            <span className="text-muted uppercase tracking-wider font-semibold">
              Performance Benchmark Telemetry
            </span>
            <span className="text-accent flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Verified Client Baselines
            </span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 divide-y xs:divide-y-0 sm:divide-x divide-subtle">
            {PLACEHOLDER_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`${idx > 0 ? 'pt-4 xs:pt-0 sm:pl-6' : ''} space-y-1.5`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-bold text-accent tabular-nums">
                    {metric.value}
                  </span>
                  {metric.isPlaceholder && (
                    <span className="text-[10px] font-mono text-muted/70 bg-[var(--surface-1)] px-1.5 py-0.5 rounded uppercase">
                      Placeholder
                    </span>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-main">
                  {metric.label}
                </h3>
                <p className="text-[11px] text-muted leading-tight">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Client Types & Partner Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Client Organisations Strip */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-accent" />
                Trusted by Ambitious UK Organisations
              </span>
              <span className="text-[10px] font-mono text-muted/70 uppercase">
                Sample Clients (Placeholder)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {clientTypes.map((client) => (
                <div
                  key={client.name}
                  className="p-3 rounded-xl bg-[var(--surface-2)] border border-subtle/80 flex flex-col justify-between hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-main truncate">
                      {client.name}
                    </span>
                    <span className="text-[9px] font-mono text-muted/60 uppercase">
                      Placeholder
                    </span>
                  </div>
                  <span className="text-[10px] text-muted truncate mt-1">
                    {client.type} · {client.location}
                  </span>
                </div>
              ))}
              <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-dashed border-subtle flex items-center justify-center text-center">
                <span className="text-[11px] font-mono text-accent">
                  + 40+ UK SMEs
                </span>
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
              <span className="text-[10px] font-mono text-muted/70 uppercase">
                Placeholder
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-3 rounded-xl bg-[var(--surface-2)] border border-subtle flex items-start gap-2.5"
                >
                  <div className="p-1.5 rounded-lg bg-[var(--surface-1)] border border-subtle shrink-0">
                    {cert.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-semibold text-main truncate">
                        {cert.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted block truncate">
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
