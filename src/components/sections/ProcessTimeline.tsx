import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Clock, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Button } from '../ui/Button';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Technical & Commercial Audit',
      duration: 'Weeks 1 – 2',
      focus: 'Deep diagnostic audit of current tech debt, crawl equity, and commercial leakage.',
      description:
        'We audit your current codebases, search console telemetry, database architecture, and commercial conversion funnel to isolate growth bottlenecks and technical debt.',
      outputs: [
        'Core Web Vitals & CWV Diagnostic Report',
        'Competitor Entity Gap & Keyword Cluster Map',
        'Database & API Architecture Blueprint',
        'Conversion Funnel Drop-off Analysis',
      ],
      gateCriteria: 'Executive presentation of findings with prioritized risk/impact matrix.',
      codeSnippet: `// Step 01: Telemetry Diagnostic\nconst auditResults = await techonrise.audit({\n  target: "client-system.co.uk",\n  cwv: { lcp: "< 1.2s", cls: 0, inp: "< 80ms" },\n  schema: ["Organization", "WebSite", "LocalBusiness"],\n  bottlenecksIdentified: 14\n});`,
    },
    {
      number: '02',
      title: 'Strategise',
      tagline: 'Specification & Architecture Roadmap',
      duration: 'Weeks 2 – 3',
      focus: 'Translating commercial objectives into deterministic technical specifications.',
      description:
        'We define the precise technology stack, database schemas, topical keyword clusters, and user journeys. Every milestone is tied directly to measurable commercial outcomes.',
      outputs: [
        'Entity Relationship Diagram (ERD) & Schema Models',
        'Information Architecture & 301 Redirect Matrix',
        'Two-Week Agile Sprint Deliverable Roadmap',
        'Data Sovereignty & UK GDPR Compliance Spec',
      ],
      gateCriteria: 'Formal architectural specification sign-off and milestone agreement.',
      codeSnippet: `// Step 02: Architecture Spec\nexport interface ProjectRoadmap {\n  sprints: 6;\n  techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL"];\n  seoArchitecture: "Hub-and-Spoke Topical Authority";\n  slas: { uptime: "99.95%", responseTime: "< 250ms" };\n}`,
    },
    {
      number: '03',
      title: 'Design',
      tagline: 'High-Fidelity Systems & Tokens',
      duration: 'Weeks 3 – 5',
      focus: 'Crafting dark-luxury visual hierarchy and frictionless conversion ergonomics.',
      description:
        'Crafting bespoke Figma design tokens, interactive prototypes, and conversion paths adhering to strict WCAG 2.2 AA accessibility and modern typography hierarchies.',
      outputs: [
        'Tokenised Design System (Colors, Type, Surfaces)',
        'Mobile-First Responsive Layout Flows (320px – 1920px)',
        'Interactive Figma Clickthrough Sign-Off Prototype',
        'Zero-Pill Minimalist UI Hierarchy Specs',
      ],
      gateCriteria: 'Interactive prototype approval and accessibility contrast verification.',
      codeSnippet: `// Step 03: Design Tokens (Figma -> Code)\nexport const tokens = {\n  palette: { canvas: "#0C0F12", surface: "#161B22", accent: "#2DD4BF" },\n  typography: { display: "Bricolage Grotesque", body: "Plus Jakarta Sans" },\n  accessibility: "WCAG 2.2 AA Verified (Ratio >= 4.5:1)"\n};`,
    },
    {
      number: '04',
      title: 'Build',
      tagline: 'Full-Stack TypeScript Engineering',
      duration: 'Weeks 5 – 9',
      focus: 'Clean modular implementation without bloated templates or third-party baggage.',
      description:
        'Clean TypeScript component development, sub-second static rendering, automated unit tests, and secure API webhooks. Zero reliance on bloated generic themes.',
      outputs: [
        'Production-Grade Next.js / TypeScript Codebase',
        'Automated CI/CD Build & Typecheck Pipelines',
        'Private Cloud Staging Sandbox with Password Access',
        'Structured Schema.org JSON-LD Ingestion Hooks',
      ],
      gateCriteria: 'All unit tests passing, zero lint warnings, and 100% Lighthouse audit score.',
      codeSnippet: `// Step 04: Production Build Gate\nexport async function verifyBuild() {\n  const suite = await runTestSuite();\n  assert(suite.errors === 0, "Zero fatal compiler errors");\n  assert(suite.lighthouseScore >= 95, "Lighthouse Core Web Vitals passed");\n  return { status: "STAGING_APPROVED" };\n}`,
    },
    {
      number: '05',
      title: 'Launch',
      tagline: 'Zero-Downtime Verification & Cutover',
      duration: 'Week 10',
      focus: 'Flawless DNS migration, redirect conservation, and search engine re-indexation.',
      description:
        'Seamless DNS cutover, comprehensive 301 URL redirect mapping to protect existing SEO equity, SSL verification, and real-time synthetic uptime monitoring setup.',
      outputs: [
        'Zero-Downtime DNS Cutover & TLS Provisioning',
        '100% Verified 301 Redirect Loop-Free Matrix',
        'XML Sitemap & Robots.txt Ingestion in GSC',
        'Real-Time Synthetic Uptime & Error Alerting',
      ],
      gateCriteria: 'Clean Google Search Console crawl status and live synthetic health green.',
      codeSnippet: `// Step 05: DNS Cutover Checklist\nawait cutoverDns({\n  ttl: 300,\n  redirectIntegrityCheck: "100% 301 preserved",\n  sslVerification: "Automated Let's Encrypt Wildcard",\n  googleSearchConsole: "Sitemaps submitted & indexed"\n});`,
    },
    {
      number: '06',
      title: 'Grow',
      tagline: 'Continuous Compounding & Retainers',
      duration: 'Ongoing Monthly',
      focus: 'Proactive engineering sprints, ranking expansion, and operational automation.',
      description:
        'Ongoing monthly authority sprints, conversion rate A/B tests, cloud patch management, and automated workflow optimizations to compound your digital competitive edge.',
      outputs: [
        'Bi-Weekly Technical Developer Sprint Allocations',
        'Rank Tracking & Entity Authority Expansion Reports',
        'Automated Database Optimization & Security Patches',
        'Quarterly Executive Commercial Review Sessions',
      ],
      gateCriteria: 'Quarterly compounding review against agreed KPIs and conversion gains.',
      codeSnippet: `// Step 06: Compounding Engine\nconst monthlyGrowth = await techonrise.retainerSprint({\n  organicSearchDelta: "+42%",\n  conversions: "+28%",\n  infrastructurePatching: "100% up-to-date",\n  newAIFeaturesShipped: 2\n});`,
    },
  ];

  const activeStep = steps[activeStepIndex];

  return (
    <section id="process-timeline" className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-y border-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-8 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>METHODOLOGY & EXECUTION</span>
            <span aria-hidden="true">·</span>
            <span>01 TO 06 STAGE DELIVERY TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Predictable Engineering. Zero Guesswork.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            We follow an interactive, transparent agile process that eliminates ambiguity and ensures projects launch on time, on budget, and engineered to outperform competitors.
          </p>
        </div>

        {/* Standout Visual Moment: Interactive Step-Scrubber Timeline Bar */}
        <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl p-3.5 sm:p-6 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 mb-4 border-b border-subtle text-xs font-mono">
            <span className="text-muted uppercase tracking-wider font-semibold">
              Interactive Stage Scrubber
            </span>
            <span className="text-accent font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              Active Phase: {activeStep.number} {activeStep.title} ({activeStep.duration})
            </span>
          </div>

          {/* Stepper Navigation Buttons with Connecting Progress Track */}
          <div className="relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 bg-subtle hidden md:block" aria-hidden="true" />
            
            {/* Active connecting bar indicator */}
            <div
              className="absolute top-1/2 left-4 -translate-y-1/2 h-0.5 bg-accent transition-all duration-300 hidden md:block"
              style={{ width: `${(activeStepIndex / (steps.length - 1)) * 92}%` }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 relative z-10">
              {steps.map((s, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;

                return (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border select-none group ${
                      isActive
                        ? 'bg-[var(--surface-1)] border-accent shadow-md ring-1 ring-accent/30'
                        : isPast
                        ? 'bg-[var(--surface-1)]/70 border-subtle hover:border-accent/40 text-main'
                        : 'bg-[var(--surface-2)] border-subtle/80 hover:bg-[var(--surface-1)]/50 text-muted'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                          isActive
                            ? 'bg-accent/15 text-accent'
                            : isPast
                            ? 'bg-[var(--surface-2)] text-accent'
                            : 'bg-[var(--surface-1)] text-muted'
                        }`}
                      >
                        {s.number}
                      </span>
                      {isPast ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      ) : (
                        <span className="text-[10px] font-mono text-muted/60">
                          {s.duration.split(' ')[0]}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-2.5">
                      <span
                        className={`text-xs font-bold block truncate transition-colors ${
                          isActive ? 'text-accent' : 'text-main group-hover:text-main'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="text-[10px] text-muted truncate block">
                        {s.tagline.split(' ')[0]} {s.tagline.split(' ')[1] || ''}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Stage Deep-Dive Showcase (Standout Asymmetric Card) */}
        <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Stage Detail & Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-accent">
                    Phase {activeStep.number}
                  </span>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[var(--surface-1)] border border-subtle text-muted uppercase font-semibold">
                    {activeStep.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-main">
                  {activeStep.title}: {activeStep.tagline}
                </h3>

                <p className="text-sm sm:text-base text-main/90 font-medium leading-snug">
                  {activeStep.focus}
                </p>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Tangible Deliverables Checklist */}
              <div className="bg-[var(--surface-1)] p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-subtle space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Phase Deliverables & Artifacts</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-main">
                  {activeStep.outputs.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2 bg-[var(--surface-2)] p-2.5 rounded-xl border border-subtle/80">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gate Criteria / Quality Check */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-accent/5 border border-accent/20 text-xs">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <span className="font-mono uppercase font-bold text-accent mr-1.5">
                    Handoff Gate:
                  </span>
                  <span className="text-main/90">{activeStep.gateCriteria}</span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-mono text-muted hover:text-main disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                >
                  ← Previous Phase
                </button>

                <div className="flex items-center gap-1 text-xs font-mono text-muted">
                  <span>{activeStepIndex + 1}</span>
                  <span>/</span>
                  <span>{steps.length}</span>
                </div>

                <button
                  type="button"
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="text-xs font-mono text-accent hover:underline disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1 font-semibold"
                >
                  Next Phase →
                </button>
              </div>
            </div>

            {/* Right Column: Technical Execution Terminal / Code Artifact Preview */}
            <div className="lg:col-span-5 bg-[var(--surface-1)] border border-subtle rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-subtle text-xs font-mono">
                  <div className="flex items-center gap-2 text-muted">
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span>ENGINEERING_STAMP</span>
                  </div>
                  <span className="text-accent text-[11px]">
                    STAGE_{activeStep.number}_VERIFIED
                  </span>
                </div>

                <div className="bg-[var(--bg-main)] p-3 sm:p-4 rounded-xl border border-subtle font-mono text-xs leading-relaxed overflow-x-auto text-main/90">
                  <pre className="text-[11px] text-muted whitespace-pre-wrap break-all sm:break-normal">
                    <code>{activeStep.codeSnippet}</code>
                  </pre>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>STATUS</span>
                    <span className="text-accent font-semibold">DETERMINISTIC_EXECUTION</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>CODE OWNERSHIP</span>
                    <span className="text-main font-semibold">100% Client Retained</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                    <span>SPRINT CADENCE</span>
                    <span className="text-main font-semibold">2-Week Bi-Weekly Reviews</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-subtle">
                <p className="text-xs text-muted mb-3">
                  Need a scoped delivery estimate for your bespoke project?
                </p>
                <a
                  href="/contact"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-[var(--surface-2)] hover:bg-accent/10 border border-subtle hover:border-accent/40 text-xs font-semibold text-main transition-colors flex items-center justify-center gap-1.5"
                >
                  Request Stage Breakdown & Scope <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Crawlable Semantic DOM representation for All 6 Stages */}
        <div className="sr-only" aria-hidden="false">
          {steps.map((s) => (
            <article key={`crawlable-step-${s.number}`}>
              <h3>
                Stage {s.number}: {s.title} - {s.tagline}
              </h3>
              <p>Duration: {s.duration}</p>
              <p>{s.description}</p>
              <h4>Key Deliverables</h4>
              <ul>
                {s.outputs.map((out, i) => (
                  <li key={i}>{out}</li>
                ))}
              </ul>
              <p>Handoff Gate: {s.gateCriteria}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
