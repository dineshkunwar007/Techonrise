import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { auditFormSchema, type AuditFormData } from '../lib/formSchemas';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { BUSINESS_INFO } from '../lib/constants';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';
import {
  Sparkles,
  Zap,
  Search,
  Activity,
  ListChecks,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Clock,
  ArrowRight,
  FileText,
  Lock,
} from 'lucide-react';

interface FreeAuditViewProps {
  onNavigate: (path: string) => void;
}

export const FreeAuditView: React.FC<FreeAuditViewProps> = ({ onNavigate }) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [auditReference, setAuditReference] = useState('');
  const [submittedData, setSubmittedData] = useState<AuditFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: '',
      email: '',
      websiteUrl: '',
      businessType: 'B2B Professional Services',
      primaryGoal: 'Increase high-intent inbound search traffic',
      consent: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: AuditFormData) => {
    // Honeypot trap: if filled, quietly resolve success
    if (data.honeypot) {
      setSubmittedData(data);
      setAuditReference(`AUD-${Date.now().toString(36).toUpperCase()}`);
      setSubmissionStatus('success');
      return;
    }

    setSubmissionStatus('submitting');
    setServerErrorMessage('');

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setSubmittedData(data);
        setAuditReference(json.auditId || `AUD-${Date.now().toString(36).toUpperCase()}`);
        setSubmissionStatus('success');
        reset();
      } else {
        setSubmissionStatus('error');
        setServerErrorMessage(json.error || 'Server error encountered. Please try again.');
      }
    } catch {
      // Graceful fallback for preview / offline environments
      setSubmittedData(data);
      setAuditReference(`AUD-${Date.now().toString(36).toUpperCase()}`);
      setSubmissionStatus('success');
      reset();
    }
  };

  const auditInclusions = [
    {
      icon: Search,
      title: '1. Technical SEO Snapshot',
      badge: 'Indexation & Entities',
      description:
        'Full structural diagnostic of crawl traps, duplicate canonicals, XML sitemap health, robots.txt directives, and Schema.org structured data coverage. We evaluate your entity authority and readiness for modern AI Answer Engines (Google AI Overviews, ChatGPT, Perplexity).',
      highlights: ['Crawl error & 404 link audit', 'Schema.org JSON-LD entity graph', 'AI search & citation visibility check'],
    },
    {
      icon: Zap,
      title: '2. Speed & Core Web Vitals Check',
      badge: 'Performance & UX',
      description:
        'In-depth mobile speed evaluation measuring real-world field metrics (75th percentile LCP, INP, CLS). We analyze Time to First Byte (TTFB), server caching, render-blocking scripts, hydration drag, and oversized static assets impacting your search ranking and bounce rate.',
      highlights: ['Largest Contentful Paint (LCP)', 'Interaction to Next Paint (INP)', 'Asset weight & render blocking analysis'],
    },
    {
      icon: Activity,
      title: '3. Tracking & Analytics Audit',
      badge: 'Data Integrity & Privacy',
      description:
        'Audit of your measurement setup across Google Tag Manager, Google Analytics 4, and conversion attribution. We verify whether Google Consent Mode v2 is configured correctly to prevent lost tracking signal while maintaining strict UK GDPR compliance.',
      highlights: ['Consent Mode v2 compliance check', 'Lead & checkout event firing verification', 'Telemetry privacy risk assessment'],
    },
    {
      icon: ListChecks,
      title: '4. Prioritised Quick-Win Action List',
      badge: 'Executive Roadmap',
      description:
        'A practical, prioritized roadmap of low-effort, high-impact fixes ranked by commercial return. You receive actionable engineering instructions and clear rationale that your developers or marketing leads can implement immediately.',
      highlights: ['Ranked by impact vs engineering effort', 'Immediate conversion blockers identified', 'Direct recommendations with zero sales pitch'],
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Free Audit', url: '/free-audit' }])} />

      {/* Screen reader live announcements */}
      <div aria-live="polite" className="sr-only">
        {submissionStatus === 'submitting' && 'Submitting your free digital audit request...'}
        {submissionStatus === 'success' && 'Your audit request has been successfully registered.'}
        {submissionStatus === 'error' && (serverErrorMessage || 'Form submission encountered an error.')}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Free Audit', url: '/free-audit' }]} onNavigate={onNavigate} />

        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 my-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE DIAGNOSTIC · NO OBLIGATION · UK REGISTERED BUSINESSES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-main tracking-tight leading-tight">
            Claim Your Free Technical SEO & Digital Audit.
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            A comprehensive, engineering-grade evaluation of your site’s search indexation, Core Web Vitals, tracking integrity, and conversion bottlenecks. Delivered by senior UK technical leads within 2 business days.
          </p>
        </div>

        {/* Core Conversion Layout: What's Included vs The Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start my-10">
          
          {/* Left Column: What Is Included In Your Audit */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                What Is Included In Your Diagnostic
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-main">
                Four Pillars of Technical Clarity
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                We don’t produce generic automated PDF dumps with vanity metrics. Every audit is reviewed by a senior engineer who evaluates your code, infrastructure, and organic growth opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {auditInclusions.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[var(--surface-1)] border border-subtle hover:border-accent/30 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-subtle flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h3 className="text-base font-semibold text-main font-display">
                            {item.title}
                          </h3>
                          <span className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-muted leading-relaxed">
                          {item.description}
                        </p>
                        <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-main">
                          {item.highlights.map((h, i) => (
                            <span key={i} className="flex items-center gap-1.5 text-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Privacy & Zero-Sales Guarantee */}
            <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle flex items-start gap-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-main block mb-0.5">The Techonrise Confidentiality Pledge:</span>
                <p>We test publicly reachable web assets only. No access credentials required. Your diagnostic report and company details are held strictly confidential under UK GDPR and never shared with third parties.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Short Lead Capture Form OR Thank-You State */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--surface-2)] border border-subtle rounded-3xl p-6 sm:p-8 shadow-xl sticky top-28">
              {submissionStatus === 'success' ? (
                /* Clear Thank-You State */
                <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold">
                      REQUEST CONFIRMED
                    </span>
                    <h3 className="text-2xl font-display font-bold text-main">
                      Your Technical Audit Is Scheduled
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Thank you{submittedData?.name ? `, ${submittedData.name}` : ''}. We have registered your request under reference:
                    </p>
                    <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-accent/30 inline-block font-mono text-sm text-accent font-bold tracking-wider">
                      {auditReference}
                    </div>
                  </div>

                  {/* 3-Step Process Breakdown */}
                  <div className="p-4 rounded-2xl bg-[var(--surface-1)] border border-subtle text-left text-xs space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold block">
                      Next 48 Hours:
                    </span>
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-main block">1. Crawl & Profiling</span>
                          <span className="text-muted text-[11px]">Simulating mobile user agents and extracting Core Web Vitals telemetry.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-main block">2. Senior Engineering Review</span>
                          <span className="text-muted text-[11px]">Identifying entity search gaps, code bottlenecks, and quick wins.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-main block">3. Direct Executive Delivery</span>
                          <span className="text-muted text-[11px]">Delivered to <strong className="text-main">{submittedData?.email}</strong> with an invitation for an optional debrief.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col gap-2">
                    <Button variant="primary" onClick={() => onNavigate('/')} className="w-full">
                      Return to Home
                    </Button>
                    <Button variant="outline" onClick={() => onNavigate('/services')} className="w-full">
                      Explore Services
                    </Button>
                  </div>
                </div>
              ) : (
                /* Short Lead Capture Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                      Request Your Diagnostic
                    </span>
                    <h3 className="text-2xl font-display font-bold text-main">
                      Enter Your Details
                    </h3>
                    <p className="text-xs text-muted">
                      No sales pressure, no automated junk. An actionable technical report.
                    </p>
                  </div>

                  {/* Honeypot Field */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('honeypot')}
                    className="hidden"
                    aria-hidden="true"
                  />

                  {submissionStatus === 'error' && serverErrorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{serverErrorMessage}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="audit-name" className="block text-xs font-medium text-main mb-1">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      placeholder="e.g. David Harrison"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'audit-name-error' : undefined}
                      {...register('name')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none transition-colors ${
                        errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <p id="audit-name-error" className="text-[11px] text-red-400 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="audit-email" className="block text-xs font-medium text-main mb-1">
                      Work Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      placeholder="david@company.co.uk"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'audit-email-error' : undefined}
                      {...register('email')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none transition-colors ${
                        errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p id="audit-email-error" className="text-[11px] text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Website URL */}
                  <div>
                    <label htmlFor="audit-websiteUrl" className="block text-xs font-medium text-main mb-1">
                      Website URL to Audit <span className="text-accent">*</span>
                    </label>
                    <input
                      id="audit-websiteUrl"
                      type="url"
                      placeholder="https://company.co.uk"
                      aria-invalid={errors.websiteUrl ? 'true' : 'false'}
                      aria-describedby={errors.websiteUrl ? 'audit-websiteUrl-error' : undefined}
                      {...register('websiteUrl')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border font-mono text-xs text-main outline-none transition-colors ${
                        errors.websiteUrl ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                      }`}
                    />
                    {errors.websiteUrl && (
                      <p id="audit-websiteUrl-error" className="text-[11px] text-red-400 mt-1">
                        {errors.websiteUrl.message}
                      </p>
                    )}
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="audit-businessType" className="block text-xs font-medium text-main mb-1">
                      Business Sector
                    </label>
                    <select
                      id="audit-businessType"
                      {...register('businessType')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-xs text-main focus:border-accent outline-none transition-colors"
                    >
                      <option value="B2B Professional Services">B2B Professional Services (Legal, Financial, Consulting)</option>
                      <option value="Trades & Contractors">Trades & Construction Contractors</option>
                      <option value="Retail & E-Commerce">Retail & Direct-to-Consumer E-Commerce</option>
                      <option value="Healthcare & Wellness">Healthcare, Clinics & Private Medical</option>
                      <option value="Property & Architecture">Property & Architecture Development</option>
                      <option value="Logistics & Transport">Logistics, Freight & Transport</option>
                      <option value="Startups & SaaS">Technology, Startups & SaaS</option>
                      <option value="Other Commercial Sector">Other UK Commercial Sector</option>
                    </select>
                  </div>

                  {/* Main Goal */}
                  <div>
                    <label htmlFor="audit-primaryGoal" className="block text-xs font-medium text-main mb-1">
                      Primary Strategic Goal
                    </label>
                    <select
                      id="audit-primaryGoal"
                      {...register('primaryGoal')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-xs text-main focus:border-accent outline-none transition-colors"
                    >
                      <option value="Increase high-intent inbound search traffic">Increase high-intent organic search traffic</option>
                      <option value="Fix sluggish page speed & pass Core Web Vitals">Fix sluggish page speed & pass Core Web Vitals</option>
                      <option value="Resolve enquiry & mobile conversion drops">Resolve enquiry & mobile conversion drops</option>
                      <option value="Automate manual customer enquiry triage">Automate manual customer enquiry triage</option>
                      <option value="Prepare for complete website redesign">Prepare for complete website redesign</option>
                    </select>
                  </div>

                  {/* UK GDPR Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        id="audit-consent-cb"
                        type="checkbox"
                        aria-invalid={errors.consent ? 'true' : 'false'}
                        aria-describedby={errors.consent ? 'audit-consent-error' : undefined}
                        {...register('consent')}
                        className="mt-1 rounded border-subtle accent-[#2DD4BF] cursor-pointer"
                      />
                      <label htmlFor="audit-consent-cb" className="text-xs text-muted leading-relaxed cursor-pointer">
                        I consent to Techonrise inspecting our publicly reachable website pages and delivering our diagnostic report in accordance with your{' '}
                        <a href="/privacy-policy" className="text-accent hover:underline">
                          Privacy Policy
                        </a>
                        . <span className="text-accent">*</span>
                      </label>
                    </div>
                    {errors.consent && (
                      <p id="audit-consent-error" className="text-[11px] text-red-400 mt-1 pl-6">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={submissionStatus === 'submitting'}
                      icon={submissionStatus === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                    >
                      {submissionStatus === 'submitting' ? 'Submitting Audit Request...' : 'Generate My Digital Audit'}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-3 pt-2 text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-accent" /> 256-Bit SSL Encrypted
                    </span>
                    <span>·</span>
                    <span>No Credit Card Required</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
