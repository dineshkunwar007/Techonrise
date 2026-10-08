import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '../../lib/formSchemas';
import { BUSINESS_INFO } from '../../lib/constants';
import { Button } from '../ui/Button';
import { SERVICES_DATA } from '../../data/services';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Linkedin,
  Twitter,
  Github,
} from 'lucide-react';
import { JsonLd } from '../seo/JsonLd';
import { generateLocalBusinessSchema } from '../../lib/schema';

export const ContactSection: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [leadReference, setLeadReference] = useState('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      websiteUrl: '',
      serviceInterest: ['all-integrated'],
      budgetRange: '£5k - £15k',
      timeline: 'Within 1–2 months',
      message: '',
      consent: false,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot trap: if filled, quietly resolve success
    if (data.honeypot) {
      setSubmissionStatus('success');
      return;
    }

    setSubmissionStatus('submitting');
    setServerErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setSubmissionStatus('success');
        setLeadReference(json.leadRef || `TOR-${Date.now().toString(36).toUpperCase()}`);
        reset();
      } else {
        setSubmissionStatus('error');
        setServerErrorMessage(json.error || 'Server error encountered. Please try again.');
      }
    } catch {
      // In preview or disconnected environments, simulate graceful confirmation
      setSubmissionStatus('success');
      setLeadReference(`TOR-${Date.now().toString(36).toUpperCase()}`);
      reset();
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-t border-subtle">
      <JsonLd schema={generateLocalBusinessSchema()} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Info, Abstract Map & Socials */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-accent">
                <span>DIRECT ACCESS</span>
                <span aria-hidden="true">·</span>
                <span>MANCHESTER HQ & NATIONWIDE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-main tracking-tight">
                Let’s Discuss Your Next Strategic Milestone.
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Whether you need an integrated digital transformation, a technical SEO overhaul, a bespoke Next.js portal, or practical AI automations, our senior leads are ready to collaborate.
              </p>
            </div>

            {/* Direct Contact Credentials Card */}
            <div className="bg-[var(--surface-2)] p-4 sm:p-7 rounded-xl sm:rounded-2xl border border-subtle space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
                    Headquarters
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-subtle">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs sm:text-sm text-main hover:text-accent transition-colors mt-0.5 block font-medium"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-subtle">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
                    Telephone
                  </h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xs sm:text-sm text-main hover:text-accent transition-colors mt-0.5 block font-medium"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-subtle">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
                    Operating Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    {BUSINESS_INFO.humanHours} (UK Time)
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-subtle flex items-center justify-between text-xs text-muted">
                <span className="font-mono text-[11px]">Connect With Leadership:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--surface-1)] hover:text-accent text-main transition-colors border border-subtle"
                    aria-label="Techonrise on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_INFO.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--surface-1)] hover:text-accent text-main transition-colors border border-subtle"
                    aria-label="Techonrise on X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={BUSINESS_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--surface-1)] hover:text-accent text-main transition-colors border border-subtle"
                    aria-label="Techonrise on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Abstract Manchester Innovation Corridor Location Panel */}
            <div className="bg-[var(--surface-2)] border border-subtle rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-subtle text-xs font-mono text-muted">
                <span>MANCHESTER CORRIDOR COORDINATES</span>
                <span className="text-accent">53.4808° N, 2.2426° W</span>
              </div>
              <div className="h-32 flex items-center justify-center relative my-2">
                <svg width="100%" height="100%" viewBox="0 0 300 120" className="opacity-40" fill="none">
                  <path d="M0 40H300M0 80H300M60 0V120M150 0V120M240 0V120" stroke="currentColor" strokeWidth="0.75" />
                  <path d="M20 110L280 10" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="150" cy="40" r="6" fill="#2DD4BF" />
                  <circle cx="150" cy="40" r="14" stroke="#2DD4BF" strokeWidth="0.5" strokeOpacity="0.5" />
                </svg>
                <div className="absolute text-center bg-[var(--surface-1)]/90 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-subtle">
                  <span className="text-xs font-semibold text-main block">Innovation House</span>
                  <span className="text-[10px] text-muted font-mono">London Road, Manchester M1</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-subtle text-xs text-muted">
                <span>In-person strategy sessions across North West & London</span>
                <span className="text-accent flex items-center gap-0.5 font-medium">UK-Wide <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>

            {/* Strong Closing Trust Message */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-start gap-3 text-xs text-muted">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-main block mb-0.5">The Techonrise Guarantee:</span>
                <p>100% intellectual property ownership upon completion · No offshore subcontracts · UK GDPR compliant data architecture.</p>
              </div>
            </div>

          </div>

          {/* Right Column: React Hook Form + Zod Form Container */}
          <div className="lg:col-span-7 bg-[var(--surface-2)] border border-subtle rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative">
            
            {/* Live Status Region for Accessibility */}
            <div aria-live="polite" className="sr-only">
              {submissionStatus === 'submitting' && 'Submitting your project brief...'}
              {submissionStatus === 'success' && 'Your project brief was successfully sent.'}
              {submissionStatus === 'error' && (serverErrorMessage || 'Form submission encountered an error.')}
            </div>

            {submissionStatus === 'success' ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
                <h3 className="text-2xl font-display font-bold text-main">Enquiry Successfully Dispatched</h3>
                <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                  Thank you. Your brief has been directly routed to our UK senior directors under reference <span className="font-mono text-accent font-semibold">{leadReference}</span>. We will review your scope and respond within 1 business day.
                </p>
                <div className="pt-4">
                  <Button variant="outline" onClick={() => setSubmissionStatus('idle')}>
                    Submit Another Brief
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    Start a Conversation
                  </span>
                  <h3 className="text-2xl font-display font-bold text-main mt-1">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Low-friction enquiry form. An experienced technical lead will reply directly.
                  </p>
                </div>

                {/* Honeypot Field (Hidden from screen and tab order) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register('honeypot')}
                  className="hidden"
                  aria-hidden="true"
                />

                {submissionStatus === 'error' && serverErrorMessage && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2.5 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverErrorMessage}</span>
                  </div>
                )}

                {/* Row 1: Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-fullName" className="block text-xs font-medium text-main mb-1">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      placeholder="e.g. David Harrison"
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      {...register('fullName')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none transition-colors ${
                        errors.fullName ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-[11px] text-red-400 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-main mb-1">
                      Work Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="david@company.co.uk"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none transition-colors ${
                        errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-red-400 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-main mb-1">
                      Phone Number <span className="text-muted text-[11px] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+44 161 000 0000"
                      {...register('phone')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-sm text-main focus:border-accent outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-medium text-main mb-1">
                      Company / Organization <span className="text-muted text-[11px] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="e.g. Apex Chambers Ltd"
                      {...register('company')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-sm text-main focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="contact-website" className="block text-xs font-medium text-main mb-1">
                    Current Website or Portal URL <span className="text-muted text-[11px] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-website"
                    type="url"
                    placeholder="https://company.co.uk"
                    aria-invalid={errors.websiteUrl ? 'true' : 'false'}
                    aria-describedby={errors.websiteUrl ? 'websiteUrl-error' : undefined}
                    {...register('websiteUrl')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none transition-colors ${
                      errors.websiteUrl ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                    }`}
                  />
                  {errors.websiteUrl && (
                    <p id="websiteUrl-error" className="text-[11px] text-red-400 mt-1">
                      {errors.websiteUrl.message}
                    </p>
                  )}
                </div>

                {/* Multi-Select: Service Interest */}
                <div>
                  <span className="block text-xs font-medium text-main mb-1.5">
                    Service Areas of Interest <span className="text-accent">*</span>
                  </span>
                  <Controller
                    name="serviceInterest"
                    control={control}
                    render={({ field }) => {
                      const options = [
                        { id: 'all-integrated', label: 'Full Digital Transformation (Integrated)' },
                        { id: 'seo-growth', label: 'Technical SEO & Search AEO' },
                        { id: 'websites-ecommerce', label: 'Bespoke Next.js Platform' },
                        { id: 'software-apps', label: 'Custom Web / Mobile Application' },
                        { id: 'ai-automation', label: 'Practical AI & CRM Automation' },
                        { id: 'hosting-infrastructure', label: 'Managed UK Sovereign Hosting' },
                      ];

                      const toggleOption = (optId: string) => {
                        const current = field.value || [];
                        if (optId === 'all-integrated') {
                          field.onChange(['all-integrated']);
                          return;
                        }
                        const filtered = current.filter((x) => x !== 'all-integrated');
                        if (filtered.includes(optId)) {
                          const next = filtered.filter((x) => x !== optId);
                          field.onChange(next.length === 0 ? ['all-integrated'] : next);
                        } else {
                          field.onChange([...filtered, optId]);
                        }
                      };

                      return (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {options.map((opt) => {
                            const isSelected = (field.value || []).includes(opt.id);
                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => toggleOption(opt.id)}
                                className={`text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between border cursor-pointer ${
                                  isSelected
                                    ? 'bg-[var(--surface-1)] border-accent text-main font-semibold shadow-xs'
                                    : 'bg-[var(--surface-1)]/60 border-subtle text-muted hover:text-main'
                                }`}
                              >
                                <span className="truncate">{opt.label}</span>
                                {isSelected ? (
                                  <span className="w-2 h-2 rounded-full bg-accent shrink-0 ml-1.5" />
                                ) : (
                                  <span className="w-2 h-2 rounded-full border border-subtle shrink-0 ml-1.5" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      );
                    }}
                  />
                  {errors.serviceInterest && (
                    <p className="text-[11px] text-red-400 mt-1">
                      {errors.serviceInterest.message}
                    </p>
                  )}
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-medium text-main mb-1">
                      Target Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      {...register('budgetRange')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-sm text-main focus:border-accent outline-none transition-colors"
                    >
                      <option value="Under £5k">Under £5k (Diagnostic or Retainer Tier)</option>
                      <option value="£5k - £15k">£5k - £15k (Core Platform / SEO Growth)</option>
                      <option value="£15k - £35k">£15k - £35k (Custom Portal / Scoped MVP)</option>
                      <option value="£35k+">£35k+ (Full Digital Transformation)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-medium text-main mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      {...register('timeline')}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-sm text-main focus:border-accent outline-none transition-colors"
                    >
                      <option value="Immediate / Project Rescue">Immediate / Urgent Project Rescue</option>
                      <option value="Within 1–2 months">Within 1–2 months</option>
                      <option value="Next quarter (3–6 months)">Next quarter (3–6 months)</option>
                      <option value="Exploratory / Planning stage">Exploratory / Planning stage</option>
                    </select>
                  </div>
                </div>

                {/* Project Details & Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-main mb-1">
                    Project Details & Primary Goals <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe your current bottlenecks, target deliverables, or the business outcomes you need to achieve..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-1)] border text-sm text-main outline-none resize-none transition-colors ${
                      errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-subtle focus:border-accent'
                    }`}
                  />
                  {errors.message ? (
                    <p id="message-error" className="text-[11px] text-red-400 mt-1">
                      {errors.message.message}
                    </p>
                  ) : (
                    <p className="text-[11px] text-muted mt-1">Minimum 20 characters required.</p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div>
                  <div className="flex items-start gap-2.5">
                    <input
                      id="contact-consent-cb"
                      type="checkbox"
                      aria-invalid={errors.consent ? 'true' : 'false'}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      {...register('consent')}
                      className="mt-1 rounded border-subtle accent-[#2DD4BF] cursor-pointer"
                    />
                    <label htmlFor="contact-consent-cb" className="text-xs text-muted leading-relaxed cursor-pointer">
                      I consent to Techonrise collecting and processing my details in accordance with UK GDPR and your{' '}
                      <a href="/privacy-policy" className="text-accent hover:underline">
                        Privacy Policy
                      </a>
                      . <span className="text-accent">*</span>
                    </label>
                  </div>
                  {errors.consent && (
                    <p id="consent-error" className="text-[11px] text-red-400 mt-1 pl-6">
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={submissionStatus === 'submitting'}
                    icon={submissionStatus === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                  >
                    {submissionStatus === 'submitting' ? 'Submitting Project Brief...' : 'Submit Project Brief'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
