import React from 'react';
import { FAQS_DATA } from '../../data/faqs';
import { Accordion } from '../ui/Accordion';
import { JsonLd } from '../seo/JsonLd';
import { generateFAQSchema } from '../../lib/schema';
import { Button } from '../ui/Button';

interface FAQSectionProps {
  onNavigate: (path: string) => void;
  limit?: number;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate, limit }) => {
  const displayFaqs = limit ? FAQS_DATA.slice(0, limit) : FAQS_DATA;

  const accordionItems = displayFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="py-24 bg-[var(--surface-1)] border-t border-subtle">
      {/* Schema.org FAQPage structured data */}
      <JsonLd schema={generateFAQSchema(displayFaqs)} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
            <span>CLARITY & GOVERNANCE</span>
            <span aria-hidden="true">·</span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-main tracking-tight">
            Direct Answers to Technical & Commercial Questions.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Everything you need to know about our service models, code ownership, security standards, and project workflows before starting.
          </p>
        </div>

        {/* Crawlable WAI-ARIA Accordion */}
        <div className="bg-[var(--surface-2)] p-6 sm:p-10 rounded-2xl border border-subtle">
          <Accordion items={accordionItems} defaultOpenIndex={0} />
        </div>

        {limit && limit < FAQS_DATA.length && (
          <div className="mt-10 text-center space-y-3">
            <p className="text-xs text-muted">
              Have a specific question not covered here?
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('/faq')}
              >
                View All {FAQS_DATA.length} FAQs
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onNavigate('/contact')}
              >
                Ask Our Engineering Team
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
