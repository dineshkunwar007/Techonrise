import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { BUSINESS_INFO, PLACEHOLDER_METRICS } from '../lib/constants';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Target, Code2, Users2, Cpu, CheckCircle2, ArrowRight, Sparkles, Lock, Server } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateOrganizationSchema, generateBreadcrumbSchema } from '../lib/schema';

export const AboutView: React.FC<{
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={[
          generateOrganizationSchema(),
          generateBreadcrumbSchema([{ name: 'About', url: '/about' }]),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'About', url: '/about' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>ABOUT TECHONRISE</span>
            <span aria-hidden="true">·</span>
            <span>MANCHESTER HQ & NATIONWIDE UK DELIVERY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            We Help British Businesses Grow, Automate & Modernise.
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-3xl">
            Techonrise was founded to bridge the painful divide between creative marketing agencies that cannot write production software and software development consultancies that don’t understand commercial search acquisition.
          </p>
        </div>

        {/* Integrated Model & Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm text-muted leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
              The Integrated Technology Partner Model
            </h2>
            <p>
              In modern enterprise, marketing visibility, web engineering, and operational automation are fundamentally interdependent. A high-converting Google Ads or SEO campaign will fail if the underlying platform suffers from poor Core Web Vitals, or if incoming qualified leads sit in an unmonitored inbox for hours before human contact.
            </p>
            <p>
              By uniting technical SEO, bespoke Next.js web applications, cross-platform mobile apps, practical AI workflow automation, and managed UK sovereign cloud hosting under one roof, we eliminate vendor fragmentation, handoff latency, and finger-pointing.
            </p>
            <p>
              Whether you are an established SME replacing spreadsheet paperwork with automated portals, a regional multi-location contractor capturing local search dominance, or a founder engineering an MVP, our senior UK engineers take unified accountability for your technology pipeline.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-semibold text-main">British Data Standards</h3>
                <p className="text-xs text-muted">
                  Strict UK GDPR compliance, UK/EU data residency guarantees, and Cyber Essentials readiness support.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-semibold text-main">100% Code Ownership</h3>
                <p className="text-xs text-muted">
                  You own all source code, database architectures, and design tokens outright with zero proprietary vendor lock-in.
                </p>
              </div>
            </div>
          </div>

          {/* Operating Foundations / Values */}
          <div className="lg:col-span-5 bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-subtle pb-3">
              <h3 className="text-base font-semibold text-main">
                Operating Values & Principles
              </h3>
              <span className="text-xs font-mono text-accent">THE STANDARD</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-main text-sm">Commercial Outcome Over Vanity Metrics</h4>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    Every line of TypeScript and every keyword cluster is tied directly to pipeline revenue, customer retention, or hours recovered.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-main text-sm">Zero-Bloat Engineering & Anti-Slop Discipline</h4>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    We reject bloated generic WordPress templates and speculative AI novelty demos. We build deterministic, typed software designed to run fast.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-main text-sm">Direct Access to UK Technical Leads</h4>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    You collaborate directly with experienced system architects and senior strategists. No communication buffers or non-technical intermediaries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-main text-sm">Long-Term Partnership Integrity</h4>
                  <p className="text-muted mt-0.5 leading-relaxed">
                    We structure transparent sprint contracts, proactive patch schedules, and rollover hours that adapt to your evolving business roadmap.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-subtle text-xs text-muted space-y-1">
              <p>Registered Office: {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}</p>
              <p>Direct Director Access: {BUSINESS_INFO.email}</p>
            </div>
          </div>
        </div>

        {/* Security & Privacy Approach */}
        <div className="bg-[var(--surface-2)] border border-subtle rounded-3xl p-8 sm:p-12 my-16 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              Security, Data Residency & Compliance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
              Built on UK Privacy Sovereignty
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              We engineer our systems to meet the highest regulatory standards mandated for UK commercial and public sector engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-semibold text-main">UK GDPR by Design</h3>
              <p className="text-xs text-muted leading-relaxed">
                Consent Mode v2, minimal data footprinting, zero third-party leakage, and complete user subject deletion workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
              <Server className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-semibold text-main">UK / EU Data Residency</h3>
              <p className="text-xs text-muted leading-relaxed">
                Database clusters and compute nodes hosted in London and Manchester cloud data centers with encrypted backups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-2">
              <Lock className="w-5 h-5 text-[#E7B65C]" />
              <h3 className="text-sm font-semibold text-main">Cyber Essentials Aligned</h3>
              <p className="text-xs text-muted leading-relaxed">
                Strict TLS 1.3 encryption, MFA perimeter defenses, rate-limiting, and automated vulnerability scanning on all deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Grid with Placeholder Markers */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 sm:p-8 my-16 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-subtle text-xs font-mono text-muted">
            <span>CLIENT TELEMETRY BENCHMARKS</span>
            <span className="text-accent">VERIFIED DATA</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PLACEHOLDER_METRICS.map((m) => (
              <div key={m.label} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold text-accent tabular-nums">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase font-semibold">
                    Verified
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-main">{m.label}</h3>
                <p className="text-xs text-muted leading-tight">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Cross-Linking Grid */}
        <div className="my-16 pt-10 border-t border-subtle space-y-6">
          <h2 className="text-xl font-display font-bold text-main">
            Explore Techonrise Across Britain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              onClick={() => onNavigate('/services')}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-2 group"
            >
              <span className="text-xs font-mono text-accent">01. CAPABILITIES</span>
              <h3 className="text-base font-semibold text-main group-hover:text-accent transition-colors">
                Explore 5 Core Practices
              </h3>
              <p className="text-xs text-muted">Technical SEO, web apps, mobile tools, AI automation, and cloud hosting.</p>
            </div>

            <div
              onClick={() => onNavigate('/industries')}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-2 group"
            >
              <span className="text-xs font-mono text-accent">02. SECTORS</span>
              <h3 className="text-base font-semibold text-main group-hover:text-accent transition-colors">
                Industry Blueprints
              </h3>
              <p className="text-xs text-muted">Bespoke technical bundles engineered for 9 specific UK commercial verticals.</p>
            </div>

            <div
              onClick={() => onNavigate('/locations')}
              className="p-5 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/40 cursor-pointer transition-colors space-y-2 group"
            >
              <span className="text-xs font-mono text-accent">03. REGIONAL COVERAGE</span>
              <h3 className="text-base font-semibold text-main group-hover:text-accent transition-colors">
                10 UK Regional Hubs
              </h3>
              <p className="text-xs text-muted">Manchester HQ, London, Birmingham, Leeds, Glasgow, and nationwide delivery.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 text-center space-y-6 max-w-4xl mx-auto my-12 shadow-md">
          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
            Direct Technical Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-main">
            Meet With Our Technical Directors
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery discussion to explore how Techonrise can streamline your systems, improve organic search visibility, and scale your digital pipeline.
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
