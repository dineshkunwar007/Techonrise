import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, ShieldCheck, Clock, Check } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <section className="py-24 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Subtle depth lighting */}
      <div className="absolute inset-0 bg-radial from-[#2DD4BF]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-8 sm:p-14 lg:p-16 text-center space-y-8 shadow-2xl">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
              Start Your Digital Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight text-balance">
              Ready to Grow, Automate & Modernise Your Business?
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Book a direct technical discovery call with our directors. We’ll review your digital systems, diagnose acquisition bottlenecks, and provide a clear engineering roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => {
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  onNavigate('/contact');
                }
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book a Technical Consultation
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate('/free-audit')}
            >
              Claim Free Digital Audit
            </Button>
          </div>

          {/* Confidence markers */}
          <div className="pt-6 border-t border-subtle flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" />
              <span>Direct discussion with technical leads</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              <span>Response within 1 business day</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>100% intellectual property ownership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
