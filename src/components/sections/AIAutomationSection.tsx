import React from 'react';
import { LazyAutomationGraph } from '../three/LazyScenes';
import { Button } from '../ui/Button';
import { ArrowRight, Bot, Cpu, Zap, FileSpreadsheet, Lock } from 'lucide-react';

interface AIAutomationSectionProps {
  onNavigate: (path: string) => void;
}

export const AIAutomationSection: React.FC<AIAutomationSectionProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      icon: <Zap className="w-4 h-4 text-accent" />,
      title: 'Sub-Minute Lead Qualification',
      description: 'Intelligent multi-channel parsing of incoming form requests and inbound inquiries. Automatically scores commercial value and dispatches calendar booking invites in seconds.',
    },
    {
      icon: <FileSpreadsheet className="w-4 h-4 text-[#E7B65C]" />,
      title: 'Document & Invoice Data Extraction',
      description: 'Automated extraction of structured line items from messy PDF invoices, inspection certificates, and supplier quotes straight into your accounting software.',
    },
    {
      icon: <Bot className="w-4 h-4 text-accent" />,
      title: 'Deterministic Knowledge Assistants',
      description: 'Private, grounded assistants trained strictly on your company SOPs and technical manuals. No internet hallucinations; strict citations and human escalation triggers.',
    },
    {
      icon: <Lock className="w-4 h-4 text-accent" />,
      title: 'UK GDPR & Enterprise Privacy',
      description: 'Data never leaves secure UK/EU enterprise API parameters. Zero training on public models; full compliance with confidentiality standards.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Practical AI Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-accent">
              <span>PRACTICAL AUTOMATION</span>
              <span aria-hidden="true">·</span>
              <span>ZERO HYPE · MEASURABLE RECOVERY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight text-balance">
              Cut 20+ Hours of Repetitive Admin Every Week.
            </h2>

            <p className="text-base text-muted leading-relaxed">
              Most businesses don’t need speculative AI chatbots; they need automated operational pipelines that triage incoming leads, extract invoice data, and eliminate manual rekeying between systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--surface-1)] border border-subtle space-y-2 hover:border-accent/40 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-subtle w-fit">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-main">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/services/ai-automation')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Automation Services
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/contact')}
              >
                Audit Your Workflows
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Automation Flow Visual */}
          <div className="lg:col-span-6">
            <LazyAutomationGraph />
          </div>
        </div>
      </div>
    </section>
  );
};
