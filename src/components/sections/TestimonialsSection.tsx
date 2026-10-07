import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>CLIENT PERSPECTIVE</span>
            <span aria-hidden="true">·</span>
            <span>VERIFIED FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Trusted by Leaders Across the United Kingdom.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Here is what managing directors, operations leaders, and commercial heads report after partnering with Techonrise. (Note: Client records below represent sample placeholder testimonials for demonstration).
          </p>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-accent/40 transition-all duration-200 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-muted">
                  <span className="text-accent">{t.industry}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] bg-[var(--surface-2)] px-2 py-0.5 rounded text-muted">
                      {t.location}
                    </span>
                    {t.isPlaceholder && (
                      <span className="text-[10px] font-mono text-muted/70 bg-[var(--surface-2)] px-1.5 py-0.5 rounded uppercase">
                        Placeholder
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-main/90 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-subtle space-y-2">
                <div className="text-xs font-mono text-accent font-medium">
                  {t.outcomeMetric}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-main">{t.author}</h4>
                  <p className="text-xs text-muted">
                    {t.role}, <span className="text-main/80">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
