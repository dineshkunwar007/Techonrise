import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Panel, PanelHeader, PanelTitle, PanelDescription, PanelBody, PanelFooter } from '../components/ui/Panel';
import { Badge } from '../components/ui/Badge';
import { Tabs } from '../components/ui/Tabs';
import { Accordion } from '../components/ui/Accordion';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Marquee } from '../components/ui/Marquee';
import { JsonLd } from '../components/ui/JsonLd';
import { Mail, Search, ShieldCheck, Zap, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { LazyAutomationGraph, LazyInfrastructureLayers } from '../components/three/LazyScenes';
import { HeroPosterFallback } from '../components/three/StaticFallbacks';

/**
 * Temporary Design System Showcase Route
 * TODO: Remove this /dev/ui route and view before production launch.
 */
export const DevUiView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [selectedOption, setSelectedOption] = useState('option-1');
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <div className="pt-28 pb-24">
      {/* Search Engines: Mark noindex */}
      <JsonLd schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'UI Kit Showcase (Internal Only)' }} />

      <Container>
        {/* Review Notice */}
        <div className="p-4 mb-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>INTERNAL DEVELOPMENT REVIEW:</strong> Phase 2 UI Kit & Component Showcase. (TODO: Remove /dev/ui route before production launch).
            </span>
          </div>
          <Badge variant="warning" size="sm">noindex</Badge>
        </div>

        <SectionHeading
          eyebrow="PHASE 2 COMPONENT SYSTEM"
          headline="Techonrise Dark-Luxury UI Kit"
          intro="Centralised component primitives engineered for high performance, strict WCAG AA contrast, and zero-pill discipline."
        />

        {/* 1. BUTTONS */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">1. Button Component (`/components/ui/Button`)</h3>
            <p className="text-xs text-muted">Primary, Secondary, Outline, Ghost variants with refined micro-interactions and loading states.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" withArrow>Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="outline">Outline Action</Button>
              <Button variant="ghost">Ghost Action</Button>
              <Button
                variant="primary"
                loading={buttonLoading}
                onClick={() => {
                  setButtonLoading(true);
                  setTimeout(() => setButtonLoading(false), 1200);
                }}
              >
                {buttonLoading ? 'Processing...' : 'Click for Loading State'}
              </Button>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>

            <div className="pt-4 border-t border-subtle flex flex-wrap items-center gap-4 text-xs text-muted">
              <span className="font-mono text-accent">Size Variants:</span>
              <Button size="sm" variant="secondary">Small (sm)</Button>
              <Button size="md" variant="secondary">Medium (md)</Button>
              <Button size="lg" variant="secondary">Large (lg)</Button>
            </div>
          </div>
        </section>

        {/* 2. PANELS & CARDS */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">2. Panel / Card Primitive (`/components/ui/Panel`)</h3>
            <p className="text-xs text-muted">Layered surfaces, optional accent border glow, and interactive elevation math.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Panel variant="surface">
              <PanelHeader>
                <Badge variant="neutral" size="sm">Surface 1</Badge>
                <PanelTitle className="mt-1">Standard Surface</PanelTitle>
                <PanelDescription>Clean neutral surface with hairline container border.</PanelDescription>
              </PanelHeader>
              <PanelBody>
                <p className="text-xs text-muted">Ideal for primary section containers and baseline content blocks.</p>
              </PanelBody>
              <PanelFooter>
                <span className="text-[11px] font-mono text-muted">border-subtle</span>
                <span className="text-xs text-accent">Default</span>
              </PanelFooter>
            </Panel>

            <Panel variant="elevated" interactive>
              <PanelHeader>
                <Badge variant="accent" size="sm">Interactive</Badge>
                <PanelTitle className="mt-1">Elevated Surface</PanelTitle>
                <PanelDescription>Hover to test subtle elevation lift and border illumination.</PanelDescription>
              </PanelHeader>
              <PanelBody>
                <p className="text-xs text-muted">Used for clickable feature cards and service capability highlights.</p>
              </PanelBody>
              <PanelFooter>
                <span className="text-[11px] font-mono text-muted">interactive=true</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </PanelFooter>
            </Panel>

            <Panel variant="surface" glow>
              <PanelHeader>
                <Badge variant="warning" size="sm">Glow Effect</Badge>
                <PanelTitle className="mt-1">Accent Border Glow</PanelTitle>
                <PanelDescription>Subtle radial emerald shadow and border accentuation.</PanelDescription>
              </PanelHeader>
              <PanelBody>
                <p className="text-xs text-muted">Reserved strictly for Marquee flagship cards and primary pricing tiers.</p>
              </PanelBody>
              <PanelFooter>
                <span className="text-[11px] font-mono text-muted">glow=true</span>
                <Sparkles className="w-3.5 h-3.5 text-accent" />
              </PanelFooter>
            </Panel>
          </div>
        </section>

        {/* 3. BADGES */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">3. Badge Component (`/components/ui/Badge`)</h3>
            <p className="text-xs text-muted">Restrained typographic status markers without garish candy styling.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle flex flex-wrap items-center gap-4">
            <Badge variant="neutral">Neutral Status</Badge>
            <Badge variant="accent">Active Practice</Badge>
            <Badge variant="warning">Sample Data</Badge>
            <Badge variant="outline">Outline Metric</Badge>
            <Badge variant="accent" size="sm">Small Tag</Badge>
          </div>
        </section>

        {/* 4. TABS */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">4. Tabs Component (`/components/ui/Tabs`)</h3>
            <p className="text-xs text-muted">WAI-ARIA accessible segmented control with ArrowLeft/ArrowRight keyboard navigation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle">
            <Tabs
              tabs={[
                {
                  id: 'tab-1',
                  label: 'Practice 01: SEO',
                  badge: '6 Services',
                  content: (
                    <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs text-muted space-y-1">
                      <span className="font-semibold text-main block">Technical & Programmatic SEO</span>
                      <p>Full Core Web Vitals remediation, answer-engine optimization (AEO), and regional GBP management.</p>
                    </div>
                  ),
                },
                {
                  id: 'tab-2',
                  label: 'Practice 02: Software',
                  badge: 'Custom Portals',
                  content: (
                    <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs text-muted space-y-1">
                      <span className="font-semibold text-main block">Custom Next.js & Mobile Apps</span>
                      <p>PostgreSQL multi-tenant systems, offline-first mobile synchronization, and internal operating tools.</p>
                    </div>
                  ),
                },
                {
                  id: 'tab-3',
                  label: 'Practice 03: Automation',
                  badge: 'AI Workflows',
                  content: (
                    <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs text-muted space-y-1">
                      <span className="font-semibold text-main block">Deterministic Intelligence Pipelines</span>
                      <p>Instant SMS/Email lead qualification, PDF invoice extraction, and zero public data leaks.</p>
                    </div>
                  ),
                },
              ]}
              activeTabId={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </section>

        {/* 5. ACCORDION */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">5. Accordion Component (`/components/ui/Accordion`)</h3>
            <p className="text-xs text-muted">Retains content in DOM for search engine crawlability with smooth grid animation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle">
            <Accordion
              items={[
                {
                  id: 'demo-1',
                  title: 'How does the Accordion ensure SEO crawlability?',
                  content: 'Unlike implementations that unmount children on collapse, this accordion retains all heading, link, and paragraph DOM nodes continuously, animating via grid-template-rows so search engine crawlers can index every word.',
                },
                {
                  id: 'demo-2',
                  title: 'Is full keyboard navigation supported?',
                  content: 'Yes. Buttons follow the WAI-ARIA Disclosure pattern with aria-expanded and aria-controls attributes matching the panel ID.',
                },
              ]}
              defaultOpenIndex={0}
            />
          </div>
        </section>

        {/* 6. FORM CONTROLS */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">6. Form Controls (`Input`, `Textarea`, `Select`, `Checkbox`)</h3>
            <p className="text-xs text-muted">Accessible form controls with hint text, error states, and custom checkmarks.</p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--surface-1)] border border-subtle space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="David Harrison"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                hint="Your registered corporate name"
                leftIcon={<Mail className="w-4 h-4" />}
                required
              />

              <Input
                label="Input With Error State"
                placeholder="invalid-email"
                defaultValue="invalid-format-test"
                error={inputError ? 'Please enter a valid UK corporate email address.' : undefined}
                hint="Click button below to toggle validation error state"
                required
              />
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setInputError(!inputError)}
              >
                Toggle Form Error Simulation
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Select
                label="Select Service Practice"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                hint="Choose primary engagement focus"
                options={[
                  { value: 'option-1', label: 'Technical SEO & Search Authority' },
                  { value: 'option-2', label: 'Bespoke Web Platform (Next.js)' },
                  { value: 'option-3', label: 'Custom Software & Mobile App' },
                  { value: 'option-4', label: 'Practical AI & CRM Workflows' },
                ]}
              />

              <Textarea
                label="Project Scope Summary"
                placeholder="Describe your current systems and desired milestones..."
                hint="Minimum 20 characters recommended"
                rows={3}
              />
            </div>

            <div className="pt-2">
              <Checkbox
                label="I agree to Techonrise processing my details in accordance with UK GDPR."
                hint="Required consent for privacy-by-design compliance"
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                required
              />
            </div>
          </div>
        </section>

        {/* 7. MARQUEE */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">7. Marquee Component (`/components/ui/Marquee`)</h3>
            <p className="text-xs text-muted">Continuous smooth horizontal ticker with pause-on-hover and edge fade gradients.</p>
          </div>

          <div className="py-6 rounded-2xl bg-[var(--surface-1)] border border-subtle">
            <Marquee speed="normal">
              <span className="text-xs font-mono font-bold tracking-wider text-main uppercase">
                Core Web Vitals 95+
              </span>
              <span className="text-muted">·</span>
              <span className="text-xs font-mono font-bold tracking-wider text-accent uppercase">
                UK Data Residency
              </span>
              <span className="text-muted">·</span>
              <span className="text-xs font-mono font-bold tracking-wider text-main uppercase">
                100% IP Ownership
              </span>
              <span className="text-muted">·</span>
              <span className="text-xs font-mono font-bold tracking-wider text-[#E7B65C] uppercase">
                Sub-Second Next.js Delivery
              </span>
              <span className="text-muted">·</span>
              <span className="text-xs font-mono font-bold tracking-wider text-main uppercase">
                Answer-Engine (AEO) Ready
              </span>
              <span className="text-muted">·</span>
            </Marquee>
          </div>
        </section>

        {/* 8. BREADCRUMBS */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3">
            <h3 className="text-xl font-display font-bold text-main">8. Breadcrumbs Component (`/components/ui/Breadcrumbs`)</h3>
            <p className="text-xs text-muted">Typographic path indicator with Schema.org BreadcrumbList JSON-LD integration.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle">
            <Breadcrumbs
              items={[
                { name: 'Services', url: '/services' },
                { name: 'Technical SEO', url: '/services/seo-growth' },
              ]}
              onNavigate={onNavigate}
            />
          </div>
        </section>

        {/* 9. PHASE 4: 3D LAYER & FALLBACK SHOWCASE */}
        <section className="my-16 space-y-6">
          <div className="border-b border-subtle pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-display font-bold text-main">9. Phase 4: 3D Layer & Performance Fallback System</h3>
              <p className="text-xs text-muted">React Three Fiber procedural scenes with lazy-loading, DPR cap, and static poster fallbacks.</p>
            </div>
            <Badge variant="accent" size="sm">Phase 4 Verified</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI & Automation 3D Scene */}
            <div className="bg-[var(--surface-1)] p-6 rounded-2xl border border-subtle space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-main">AI & Automation Topology Graph</h4>
                <span className="text-[10px] font-mono text-accent">Procedural R3F</span>
              </div>
              <p className="text-xs text-muted">Nodes passing live signal pulses along connection lines.</p>
              <div className="h-64 rounded-xl overflow-hidden border border-subtle">
                <LazyAutomationGraph />
              </div>
            </div>

            {/* Sovereign Cloud Infrastructure 3D Scene */}
            <div className="bg-[var(--surface-1)] p-6 rounded-2xl border border-subtle space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-main">Sovereign Cloud Stack (Rack Modules)</h4>
                <span className="text-[10px] font-mono text-accent">Procedural R3F</span>
              </div>
              <p className="text-xs text-muted">Stacked metallic tiers with telemetry LEDs and data conduits.</p>
              <div className="h-64 rounded-xl overflow-hidden border border-subtle">
                <LazyInfrastructureLayers />
              </div>
            </div>
          </div>

          {/* Static Fallback Verification Box */}
          <div className="bg-[var(--surface-1)] p-6 rounded-2xl border border-subtle space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-main">Static Poster Fallback Verification (0ms LCP)</h4>
                <p className="text-xs text-muted">Immediate SVG/CSS architectural poster rendered when WebGL is loading, disabled, or prefers-reduced-motion is active.</p>
              </div>
              <Badge variant="neutral" size="sm">Fallback Preview</Badge>
            </div>

            <div className="relative h-64 rounded-xl overflow-hidden border border-subtle bg-[var(--bg-main)]">
              <HeroPosterFallback />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[var(--surface-1)]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-subtle text-xs font-mono text-center">
                  <span className="text-accent font-semibold block">STATIC POSTER FALLBACK ACTIVE</span>
                  <span className="text-muted text-[10px]">Instant 0ms First Contentful Paint / No WebGL Dependency</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
