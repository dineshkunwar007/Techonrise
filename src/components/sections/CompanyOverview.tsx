import React from 'react';
import { Layers, Zap, Cpu, ShieldCheck, ArrowRight, HeartHandshake, Users2, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface CompanyOverviewProps {
  onNavigate: (path: string) => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onNavigate }) => {
  const companyValues = [
    {
      icon: <HeartHandshake className="w-4 h-4 text-accent" />,
      title: 'Plain-English Transparency',
      description: 'No confusing tech jargon or hidden fees. We explain every step clearly and show you exactly what you are paying for.',
    },
    {
      icon: <Users2 className="w-4 h-4 text-accent" />,
      title: 'One Accountable UK Team',
      description: 'No finger-pointing between separate web designers, SEO agencies, and IT contractors. One Manchester team handles it all.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-accent" />,
      title: '100% Yours — Zero Lock-In',
      description: 'You own your website, code, domain, and data outright from day one. No proprietary traps or hostage contracts.',
    },
    {
      icon: <Award className="w-4 h-4 text-[#E7B65C]" />,
      title: 'Results Over Vanity Metrics',
      description: 'Every project is designed around real business outcomes: winning more enquiries, saving staff hours, and growing revenue.',
    },
  ];

  return (
    <section id="about-overview" className="py-14 sm:py-20 lg:py-24 bg-[var(--surface-1)] border-y border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Warm About Us Introduction & 3 Pillars */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <span>ABOUT TECHONRISE</span>
              <span aria-hidden="true">·</span>
              <span>WHO WE ARE &amp; OUR VALUES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight text-balance">
              A Friendly, Accountable Technology Partner Built Around Your Business.
            </h2>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We know that dealing with technology and digital agencies can feel overwhelming. Most business owners don’t want a lecture on software code—they simply want a fast, reliable website that brings in customers and tools that save their team time.
            </p>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Based in Manchester and supporting businesses across the UK, Techonrise brings customer growth (SEO &amp; websites) and time-saving automation (custom software &amp; AI) together under one roof—guided by straightforward, honest values.
            </p>

            {/* Three Pillar Cards (Clickable to Services) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('/services/seo-growth')}
                className="text-left p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover:border-accent/50 hover-card-elevate space-y-1.5 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <Zap className="w-5 h-5 text-accent" />
                  <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-semibold text-main group-hover:text-accent transition-colors">01. Grow</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Get found on Google &amp; turn website visitors into paying clients.
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/services/ai-automation')}
                className="text-left p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover:border-accent/50 hover-card-elevate space-y-1.5 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <Cpu className="w-5 h-5 text-[#E7B65C]" />
                  <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-semibold text-main group-hover:text-accent transition-colors">02. Automate</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Eliminate repetitive paperwork, manual data entry &amp; slow follow-ups.
                </p>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/services/websites-ecommerce')}
                className="text-left p-4 rounded-xl bg-[var(--surface-2)] border border-subtle hover:border-accent/50 hover-card-elevate space-y-1.5 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <Layers className="w-5 h-5 text-accent" />
                  <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-semibold text-main group-hover:text-accent transition-colors">03. Modernise</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Upgrade outdated sites, client portals, mobile apps &amp; UK cloud hosting.
                </p>
              </button>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/about')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                More About Us &amp; Our Story
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/free-audit')}
              >
                Claim a Free Website Audit
              </Button>
            </div>
          </div>

          {/* Right Column: Company Values & At-a-Glance Trust Metrics */}
          <div className="lg:col-span-6">
            <div className="bg-[var(--surface-2)] border border-subtle rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-subtle">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                    Our Company Values
                  </span>
                  <p className="text-xs text-muted mt-0.5">
                    What you can expect when working with our team
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="text-xs font-mono text-accent hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Full Values</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* 4 Company Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {companyValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-subtle shrink-0">
                        {val.icon}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-main leading-snug">
                        {val.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Compact Verified Trust Strip Inside About Card */}
              <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-accent/30 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Proven Track Record Across Britain
                  </span>
                  <span className="text-[11px] font-mono text-muted">40+ UK SMEs</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-subtle/60 text-center">
                  <div>
                    <span className="text-lg sm:text-xl font-display font-extrabold text-accent block tabular-nums">3.4x</span>
                    <span className="text-[10px] text-muted block">Avg. Enquiry Growth</span>
                  </div>
                  <div className="border-x border-subtle/60 px-1">
                    <span className="text-lg sm:text-xl font-display font-extrabold text-main block tabular-nums">99.4%</span>
                    <span className="text-[10px] text-muted block">Client Retention</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-display font-extrabold text-accent block tabular-nums">22 hrs</span>
                    <span className="text-[10px] text-muted block">Weekly Admin Saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

