import React from 'react';
import { Button } from '../ui/Button';
import { BUSINESS_INFO } from '../../lib/constants';
import { ArrowRight, ShieldCheck, Clock, Check, Phone, Mail, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-t border-subtle relative overflow-hidden">
      {/* Subtle depth lighting */}
      <div className="absolute inset-0 bg-radial from-[#2DD4BF]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-14 text-center space-y-6 sm:space-y-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              Start Your Digital Transformation
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight text-balance">
              Ready to Grow, Automate &amp; Modernise Your Business?
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Speak directly with our friendly Manchester team—no pushy sales scripts or confusing tech talk. We’ll listen to your goals, review your current setup, and show you clear options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
              onClick={() => {
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  onNavigate('/contact');
                }
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => onNavigate('/free-audit')}
            >
              Claim Free Website Audit
            </Button>
          </div>

          {/* Direct Contact Quick-Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left max-w-3xl mx-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-subtle hover:border-accent/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-subtle text-accent shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-muted block">Call Manchester HQ</span>
                <span className="text-xs font-semibold text-main group-hover:text-accent transition-colors truncate block">
                  {BUSINESS_INFO.phone}
                </span>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-subtle hover:border-accent/50 transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-subtle text-accent shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-muted block">Email Us Directly</span>
                <span className="text-xs font-semibold text-main group-hover:text-accent transition-colors truncate block">
                  {BUSINESS_INFO.email}
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="p-3.5 rounded-xl bg-[var(--surface-1)] border border-subtle hover:border-accent/50 transition-all flex items-center justify-between gap-3 group cursor-pointer text-left"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-subtle text-accent shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-muted block">Online Enquiry</span>
                  <span className="text-xs font-semibold text-main group-hover:text-accent transition-colors truncate block">
                    Send Project Brief
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
            </button>
          </div>

          {/* Confidence markers */}
          <div className="pt-5 border-t border-subtle flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent shrink-0" />
              <span>Plain-English advice from UK specialists</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span>Reply within 1 business day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>100% ownership &amp; no lock-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

