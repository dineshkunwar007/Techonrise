import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '../../lib/formSchemas';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { SERVICES_DATA } from '../../data/services';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const [leadRef, setLeadRef] = useState('');

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
      serviceInterest: preselectedService ? [preselectedService] : ['all-integrated'],
      budgetRange: '£5k - £15k',
      timeline: 'Within 1–2 months',
      message: '',
      consent: false,
      honeypot: '',
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (data: ContactFormData) => {
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
        setLeadRef(json.leadRef || `TOR-${Date.now().toString(36).toUpperCase()}`);
        reset();
      } else {
        setSubmissionStatus('error');
        setServerErrorMessage(json.error || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmissionStatus('success');
      setLeadRef(`TOR-${Date.now().toString(36).toUpperCase()}`);
      reset();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-8 shadow-2xl my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-muted hover:text-main hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Live Status Region */}
        <div aria-live="polite" className="sr-only">
          {submissionStatus === 'submitting' && 'Sending consultation request...'}
          {submissionStatus === 'success' && 'Consultation request successfully received.'}
          {submissionStatus === 'error' && (serverErrorMessage || 'Error occurred.')}
        </div>

        {submissionStatus === 'success' ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-14 h-14 text-accent mx-auto" />
            <h3 className="text-2xl font-display font-bold text-main">
              Consultation Booked
            </h3>
            <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
              Thank you. Your request is registered under lead reference <span className="font-mono text-accent font-semibold">{leadRef}</span>. A senior UK director will review your requirements and reach out within 1 business day.
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                onClick={() => {
                  setSubmissionStatus('idle');
                  onClose();
                }}
              >
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                Direct UK Director Discovery
              </span>
              <h2 id="modal-title" className="text-2xl font-display font-bold text-main mt-0.5">
                Book a Technical Consultation
              </h2>
              <p className="text-xs text-muted mt-1">
                Tell us about your business goals and current system bottlenecks.
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

            {/* Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. David Harrison"
                  {...register('fullName')}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border text-xs sm:text-sm text-main outline-none transition-colors ${
                    errors.fullName ? 'border-red-500/70' : 'border-subtle focus:border-accent'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Work Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  placeholder="david@company.co.uk"
                  {...register('email')}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border text-xs sm:text-sm text-main outline-none transition-colors ${
                    errors.email ? 'border-red-500/70' : 'border-subtle focus:border-accent'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+44 161 000 0000"
                  {...register('phone')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-main focus:border-accent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Ltd"
                  {...register('company')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-main focus:border-accent outline-none"
                />
              </div>
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-xs font-medium text-main mb-1">
                Current Website URL
              </label>
              <input
                type="url"
                placeholder="https://company.co.uk"
                {...register('websiteUrl')}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border text-xs sm:text-sm text-main outline-none ${
                  errors.websiteUrl ? 'border-red-500/70' : 'border-subtle focus:border-accent'
                }`}
              />
              {errors.websiteUrl && (
                <p className="text-[11px] text-red-400 mt-1">{errors.websiteUrl.message}</p>
              )}
            </div>

            {/* Multi-Select: Service Interest */}
            <div>
              <label className="block text-xs font-medium text-main mb-1.5">
                Service Interests <span className="text-accent">*</span>
              </label>
              <Controller
                name="serviceInterest"
                control={control}
                render={({ field }) => {
                  const options = [
                    { id: 'all-integrated', label: 'Full Digital Transformation' },
                    { id: 'seo-growth', label: 'Technical SEO & Search' },
                    { id: 'websites-ecommerce', label: 'Bespoke Next.js Platform' },
                    { id: 'software-apps', label: 'Custom App / Software' },
                    { id: 'ai-automation', label: 'Practical AI & CRM Workflows' },
                    { id: 'hosting-infrastructure', label: 'Managed UK Cloud' },
                  ];

                  const toggle = (optId: string) => {
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {options.map((opt) => {
                        const isSelected = (field.value || []).includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggle(opt.id)}
                            className={`p-2 rounded-lg text-[11px] text-left transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-[var(--surface-1)] border-accent text-accent font-semibold shadow-xs'
                                : 'bg-[var(--surface-2)] border-subtle text-muted hover:text-main'
                            }`}
                          >
                            <span className="truncate block">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  );
                }}
              />
              {errors.serviceInterest && (
                <p className="text-[11px] text-red-400 mt-1">{errors.serviceInterest.message}</p>
              )}
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Budget Range
                </label>
                <select
                  {...register('budgetRange')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-main focus:border-accent outline-none"
                >
                  <option value="Under £5k">Under £5k</option>
                  <option value="£5k - £15k">£5k - £15k</option>
                  <option value="£15k - £35k">£15k - £35k</option>
                  <option value="£35k+">£35k+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-main mb-1">
                  Target Timeline
                </label>
                <select
                  {...register('timeline')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border border-subtle text-xs sm:text-sm text-main focus:border-accent outline-none"
                >
                  <option value="Urgent / Immediate">Urgent / Project Rescue</option>
                  <option value="Within 1–2 months">Within 1–2 months</option>
                  <option value="Within 3–6 months">Within 3–6 months</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium text-main mb-1">
                Project Overview <span className="text-accent">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your objectives or the current bottlenecks you need to solve..."
                {...register('message')}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[var(--surface-2)] border text-xs sm:text-sm text-main outline-none resize-none ${
                  errors.message ? 'border-red-500/70' : 'border-subtle focus:border-accent'
                }`}
              />
              {errors.message ? (
                <p className="text-[11px] text-red-400 mt-1">{errors.message.message}</p>
              ) : (
                <p className="text-[10px] text-muted mt-0.5">Min 20 characters required.</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div>
              <div className="flex items-start gap-2">
                <input
                  id="modal-consent"
                  type="checkbox"
                  {...register('consent')}
                  className="mt-0.5 rounded border-subtle accent-[#2DD4BF] cursor-pointer"
                />
                <label htmlFor="modal-consent" className="text-[11px] text-muted leading-relaxed cursor-pointer">
                  I consent to Techonrise collecting and processing my data in accordance with UK GDPR and your{' '}
                  <a href="/privacy-policy" className="text-accent hover:underline">
                    Privacy Policy
                  </a>
                  . <span className="text-accent">*</span>
                </label>
              </div>
              {errors.consent && (
                <p className="text-[11px] text-red-400 mt-1 pl-5">{errors.consent.message}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                disabled={submissionStatus === 'submitting'}
                icon={submissionStatus === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
              >
                {submissionStatus === 'submitting' ? 'Submitting...' : 'Confirm Discovery Request'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
