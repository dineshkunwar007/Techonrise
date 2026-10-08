import React from 'react';
import { Target, Layers, Zap, Cpu, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface CompanyOverviewProps {
  onNavigate: (path: string) => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Mission & Strategic Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <span>STRATEGIC POSITIONING</span>
              <span aria-hidden="true">·</span>
              <span>ONE INTEGRATED PARTNER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight text-balance">
              Not Just a Design Agency. A Business-Focused Technology Partner.
            </h2>

            <p className="text-base text-muted leading-relaxed">
              Most businesses struggle with fragmented vendors: marketing agencies that cannot write software, freelance developers who ignore SEO, and offshore teams that require constant supervision.
            </p>

            <p className="text-sm text-muted leading-relaxed">
              Techonrise unifies customer acquisition and digital operations. We build the high-speed search engines that drive new revenue, while simultaneously engineering the custom software and AI workflows that streamline your internal back-office.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover-card-elevate space-y-2">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-semibold text-main">01. Grow</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Technical SEO, AEO search & conversion engines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover-card-elevate space-y-2">
                <Cpu className="w-5 h-5 text-[#E7B65C]" />
                <h3 className="text-sm font-semibold text-main">02. Automate</h3>
                <p className="text-xs text-muted leading-relaxed">
                  AI lead triage, document extraction & CRM sync.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover-card-elevate space-y-2">
                <Layers className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-semibold text-main">03. Modernise</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Bespoke web apps, mobile tools & UK cloud.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/about')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                About Our Operating Model
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/free-audit')}
              >
                Free Digital Audit
              </Button>
            </div>
          </div>

          {/* Right Column: Architectural Comparison Graphic */}
          <div className="lg:col-span-6">
            <div className="bg-[var(--surface-2)] border border-subtle rounded-xl sm:rounded-2xl p-4 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-subtle">
                <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold">
                  Operating Model Contrast
                </span>
                <span className="text-xs text-accent font-mono">The Techonrise Standard</span>
              </div>

              {/* The Fragmented Old Model */}
              <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle/80 opacity-70 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-main">Traditional Fragmented Model</span>
                  <span className="text-red-400 font-mono text-[11px]">High Friction</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Separate SEO agency + external web designer + part-time contractor. Bottlenecks at every handoff, duplicate retainers, and finger-pointing when performance drops.
                </p>
              </div>

              {/* The Unified Techonrise Model */}
              <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-1)] border border-accent/50 shadow-md space-y-3 relative">
                <div className="absolute top-3 right-3 text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                  Unified Stack
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <h3 className="text-sm font-bold text-main">The Techonrise Integrated Model</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  One aligned UK partner executing strategy, software engineering, search indexation, mobile tools, and AI workflows under unified technical leadership.
                </p>
                <div className="pt-2 grid grid-cols-1 xs:grid-cols-2 gap-2 text-[11px] text-main font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> Sub-second Next.js
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> Technical SEO built-in
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> UK GDPR data residency
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-accent">✓</span> Complete IP ownership
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
