import React from 'react';
import { Target, Code2, TrendingUp, Cpu, Users2, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-accent" />,
      title: 'Strategy & Execution In One Partner',
      description:
        'No finger-pointing between separate marketing agencies, web developers, and freelance contractors. We take single-point responsibility for the entire digital ecosystem.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-accent" />,
      title: 'Engineers Who Understand Growth',
      description:
        'Our developers write clean TypeScript with deep understanding of Core Web Vitals, conversion rate optimization, semantic entity schemas, and acquisition funnel mechanics.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-accent" />,
      title: 'SEO Experts Who Understand Code',
      description:
        'We do not deliver PowerPoint lists of recommendations for others to implement. We implement technical fixes directly into the codebase, resolving bottlenecks instantly.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#E7B65C]" />,
      title: 'Practical AI Grounded In ROI',
      description:
        'We skip novelty generative demos in favour of deterministic automations: lead qualification, document extraction, and private knowledge bases that save hundreds of hours.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-accent" />,
      title: 'Built For UK Founders & SMEs',
      description:
        'Our leadership team works directly on your project. You gain institutional enterprise capabilities scaled sensibly for ambitious UK businesses.',
    },
    {
      icon: <Shield className="w-5 h-5 text-accent" />,
      title: '100% IP & Code Ownership',
      description:
        'You own all source code, database architectures, and design tokens outright upon completion. Zero vendor lock-in or proprietary licensing traps.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-y border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>THE INTEGRATED ADVANTAGE</span>
            <span aria-hidden="true">·</span>
            <span>WHY TECHONRISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Why Ambitious UK Firms Consolidate With Techonrise.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            The traditional model of juggling a creative agency for design, a freelancer for maintenance, and an outsourced agency for SEO results in fragmented results and endless excuses. Techonrise unifies the entire stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[var(--surface-2)] border border-subtle hover-card-elevate space-y-3 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-[var(--surface-1)] border border-subtle w-fit shadow-2xs">
                  {pillar.icon}
                </div>
                <span className="font-mono text-xs text-muted/60 group-hover:text-accent transition-colors">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-main group-hover:text-accent transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
