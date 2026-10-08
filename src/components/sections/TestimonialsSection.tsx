import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>EXECUTIVE FEEDBACK</span>
            <span aria-hidden="true">·</span>
            <span>MEASURED OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Trusted by Commercial Leaders Across Britain.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Here is what managing directors, operations leaders, and commercial heads report after partnering with Techonrise to modernize their digital systems.
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => {
            const initials = t.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={t.id}
                className="bg-[var(--surface-1)] border border-subtle rounded-xl sm:rounded-2xl p-5 sm:p-8 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs hover:shadow-md relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-main/90 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 text-accent font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-main">{t.author}</h4>
                      <p className="text-xs text-muted">
                        {t.role}, <span className="text-main/80 font-medium">{t.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono font-semibold text-accent bg-[var(--surface-2)] px-3 py-1.5 rounded-lg border border-subtle w-fit">
                    {t.outcomeMetric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
