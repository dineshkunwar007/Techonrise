import React, { useState } from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { FAQS_DATA } from '../data/faqs';
import { Accordion } from '../components/ui/Accordion';
import { JsonLd } from '../components/seo/JsonLd';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { Button } from '../components/ui/Button';
import { Search } from 'lucide-react';

interface FAQViewProps {
  onNavigate: (path: string) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const accordionItems = filteredFaqs.map((f) => ({
    id: f.id,
    title: f.question,
    content: f.answer,
  }));

  return (
    <div className="pt-28 pb-20">
      <JsonLd
        schema={[
          generateFAQSchema(FAQS_DATA),
          generateBreadcrumbSchema([{ name: 'FAQ', url: '/faq' }]),
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>GOVERNANCE & COMMON INQUIRIES</span>
            <span aria-hidden="true">·</span>
            <span>UK STANDARDS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Frequently Asked Questions.
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Transparent explanations covering our integrated operating model, technical standards, IP ownership, UK GDPR compliance, and delivery timelines.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 my-10">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter questions by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--surface-1)] border border-subtle text-xs sm:text-sm text-main focus:border-accent outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[var(--surface-2)] text-accent border-accent font-semibold'
                  : 'bg-[var(--surface-1)] text-muted border-subtle hover:text-main'
              }`}
            >
              All Topics ({FAQS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedCategory('general')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'general'
                  ? 'bg-[var(--surface-2)] text-accent border-accent font-semibold'
                  : 'bg-[var(--surface-1)] text-muted border-subtle hover:text-main'
              }`}
            >
              General & Operating Model
            </button>
            <button
              onClick={() => setSelectedCategory('services')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'services'
                  ? 'bg-[var(--surface-2)] text-accent border-accent font-semibold'
                  : 'bg-[var(--surface-1)] text-muted border-subtle hover:text-main'
              }`}
            >
              Websites & SEO
            </button>
            <button
              onClick={() => setSelectedCategory('technology')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'technology'
                  ? 'bg-[var(--surface-2)] text-accent border-accent font-semibold'
                  : 'bg-[var(--surface-1)] text-muted border-subtle hover:text-main'
              }`}
            >
              AI & Software Systems
            </button>
            <button
              onClick={() => setSelectedCategory('pricing-governance')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === 'pricing-governance'
                  ? 'bg-[var(--surface-2)] text-accent border-accent font-semibold'
                  : 'bg-[var(--surface-1)] text-muted border-subtle hover:text-main'
              }`}
            >
              Pricing & UK GDPR
            </button>
          </div>
        </div>

        {/* Accordion Component */}
        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 my-8 shadow-sm">
          {filteredFaqs.length > 0 ? (
            <Accordion items={accordionItems} defaultOpenIndex={0} />
          ) : (
            <div className="py-12 text-center text-sm text-muted">
              No questions matched your search query. Please try another keyword or contact us directly.
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="p-8 rounded-2xl bg-[var(--surface-2)] border border-subtle my-12 text-center space-y-4">
          <h2 className="text-xl font-display font-bold text-main">
            Have an Unanswered Question?
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto leading-relaxed">
            Our Manchester engineering team is on hand to answer technical queries regarding database architectures, integrations, and migration strategies.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => onNavigate('/contact')}>
              Contact Our Engineers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
