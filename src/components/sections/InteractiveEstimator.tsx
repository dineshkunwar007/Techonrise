import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface InteractiveEstimatorProps {
  onOpenConsultationModal?: () => void;
  onNavigate: (path: string) => void;
}

export const InteractiveEstimator: React.FC<InteractiveEstimatorProps> = ({
  onOpenConsultationModal,
  onNavigate,
}) => {
  const [selectedService, setSelectedService] = useState('full-stack');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['cwv-guarantee']);

  const serviceOptions = [
    {
      id: 'full-stack',
      name: 'Full Digital Transformation',
      subtitle: 'Next.js Platform + Technical SEO + AI Automations',
      baseWeeks: 8,
      basePrice: '£12k – £25k',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AI Pipelines'],
      deliverables: [
        'Custom bespoke web application (sub-second speeds)',
        'Full technical SEO & Schema.org entity graph',
        'Inbound lead triage & CRM sync pipeline',
        '100% intellectual property & code ownership',
      ],
    },
    {
      id: 'seo-growth',
      name: 'Technical SEO & AEO Growth',
      subtitle: 'Core Web Vitals + Keyword Clusters + AI Overviews',
      baseWeeks: 4,
      basePrice: '£4k – £8k',
      stack: ['Google Search Console', 'Ahrefs/Semrush', 'Schema JSON-LD', 'Edge CDN'],
      deliverables: [
        'Comprehensive 100+ checkpoint technical audit',
        'Hub-and-spoke topical authority content architecture',
        'Direct codebase speed & Core Web Vitals remediation',
        'Targeting Google AI Overviews & Perplexity citations',
      ],
    },
    {
      id: 'web-portal',
      name: 'Bespoke Web App / SaaS Portal',
      subtitle: 'Customer Portals, Booking Engines & Internal Tools',
      baseWeeks: 6,
      basePrice: '£8k – £18k',
      stack: ['React 19', 'Next.js', 'PostgreSQL', 'Supabase/Prisma', 'Stripe API'],
      deliverables: [
        'Role-based access control & secure client authentication',
        'Mobile-first responsive UX/UI design tokens',
        'Automated document/invoice generation',
        'CI/CD automated testing & deployment pipeline',
      ],
    },
    {
      id: 'ai-automation',
      name: 'Practical AI & CRM Workflows',
      subtitle: 'Eliminate Repetitive Paperwork & Manual Admin',
      baseWeeks: 3,
      basePrice: '£3.5k – £7.5k',
      stack: ['Python', 'OpenAI / Claude APIs', 'Make/n8n', 'PostgreSQL Vector'],
      deliverables: [
        'Sub-minute inbound lead scoring & calendar booking',
        'Automated PDF invoice & document data extraction',
        'Private company SOP knowledge assistant (Zero hallucinations)',
        'UK GDPR data residency parameters',
      ],
    },
  ];

  const addons = [
    { id: 'cwv-guarantee', label: 'Core Web Vitals 95+ Guarantee', cost: 'Included' },
    { id: 'data-migration', label: 'Legacy Database & URL Migration', cost: '+ 1 Week' },
    { id: 'sovereign-vault', label: 'UK Sovereign Cloud Vault (GDPR)', cost: 'Included' },
    { id: 'retainer-opt', label: 'Ongoing Monthly Engineering Sprint', cost: 'Optional' },
  ];

  const currentService = useMemo(
    () => serviceOptions.find((s) => s.id === selectedService) || serviceOptions[0],
    [selectedService]
  );

  const calculatedWeeks = useMemo(() => {
    let weeks = currentService.baseWeeks;
    if (timelineSpeed === 'accelerated') weeks = Math.max(3, Math.round(weeks * 0.65));
    if (selectedAddons.includes('data-migration')) weeks += 1;
    return weeks;
  }, [currentService, timelineSpeed, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-[var(--surface-1)] border-y border-subtle relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SCOPE ESTIMATOR</span>
            <span aria-hidden="true">·</span>
            <span>TRANSPARENT ENGINEERING PLANNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Estimate Your Project Scope & Delivery Timeline.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Select your technical focus and pace below to explore estimated sprint duration, deliverables, recommended tech stack, and indicative investment.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Scope & Parameter Controls */}
          <div className="lg:col-span-7 space-y-6 bg-[var(--surface-2)] p-6 sm:p-8 rounded-3xl border border-subtle">
            
            {/* Step 1: Service Archetype */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                01. Select Primary Transformation Need
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceOptions.map((opt) => {
                  const isSelected = opt.id === selectedService;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedService(opt.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[var(--surface-1)] border-accent shadow-sm ring-1 ring-accent/30'
                          : 'bg-[var(--surface-1)]/60 border-subtle hover:border-accent/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-semibold ${isSelected ? 'text-accent' : 'text-main'}`}>
                            {opt.name}
                          </h3>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <p className="text-[11px] text-muted mt-1 leading-snug">
                          {opt.subtitle}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-subtle/50 flex items-center justify-between text-[11px] font-mono text-muted">
                        <span>Starting from</span>
                        <span className="text-main font-semibold">{opt.basePrice}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Delivery Pace */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                02. Choose Sprint Cadence & Pace
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTimelineSpeed('standard')}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    timelineSpeed === 'standard'
                      ? 'bg-[var(--surface-1)] border-accent font-semibold shadow-xs'
                      : 'bg-[var(--surface-1)]/60 border-subtle text-muted hover:text-main'
                  }`}
                >
                  <div className="text-xs text-main font-semibold">Standard Agile Cadence</div>
                  <div className="text-[11px] text-muted mt-0.5">Two-week structured sprints</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimelineSpeed('accelerated')}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    timelineSpeed === 'accelerated'
                      ? 'bg-[var(--surface-1)] border-accent font-semibold shadow-xs'
                      : 'bg-[var(--surface-1)]/60 border-subtle text-muted hover:text-main'
                  }`}
                >
                  <div className="text-xs text-main font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Fast-Track Sprint</span>
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">Dedicated priority engineering team</div>
                </button>
              </div>
            </div>

            {/* Step 3: Architecture Inclusions & Addons */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                03. Quality & Compliance Inclusions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between text-xs ${
                        isChecked
                          ? 'bg-[var(--surface-1)] border-accent/50 text-main font-medium shadow-2xs'
                          : 'bg-[var(--surface-1)]/40 border-subtle text-muted hover:text-main'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center text-[10px] ${
                          isChecked ? 'bg-accent border-accent text-[#0C0F12] font-bold' : 'border-subtle'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                        <span>{addon.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-accent ml-1">
                        {addon.cost}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Blueprint Card */}
          <div className="lg:col-span-5 bg-[var(--surface-2)] border border-subtle rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-4 border-b border-subtle">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Live Engineering Estimate
              </span>
              <span className="text-[11px] font-mono text-muted bg-[var(--surface-1)] px-2 py-0.5 rounded">
                UK Senior Delivery
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted uppercase">Recommended Model</span>
              <h3 className="text-2xl font-display font-bold text-main">
                {currentService.name}
              </h3>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[var(--surface-1)] border border-subtle">
              <div>
                <span className="text-[11px] font-mono text-muted block">Estimated Timeline</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-accent tabular-nums flex items-baseline gap-1">
                  ~{calculatedWeeks} Weeks
                  {timelineSpeed === 'accelerated' && (
                    <span className="text-[10px] font-mono text-amber-500 font-normal">Fast</span>
                  )}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted block">Indicative Budget</span>
                <span className="text-xl sm:text-2xl font-display font-bold text-main tabular-nums">
                  {currentService.basePrice}
                </span>
              </div>
            </div>

            {/* Recommended Stack */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                Target Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentService.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono bg-[var(--surface-1)] text-main px-2.5 py-1 rounded-md border border-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables Included */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-semibold block">
                What’s Delivered
              </span>
              <ul className="space-y-2 text-xs text-muted">
                {currentService.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-tight text-main/90">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conversion CTA */}
            <div className="pt-4 border-t border-subtle space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full min-h-[48px]"
                withArrow
                onClick={() => {
                  if (onOpenConsultationModal) {
                    onOpenConsultationModal();
                  } else {
                    onNavigate('/contact');
                  }
                }}
              >
                Discuss This Scope with Directors
              </Button>
              <p className="text-center text-[11px] text-muted">
                100% intellectual property ownership · NDA provided on request · 1 business day response
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
