import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ContactSection } from '../components/sections/ContactSection';
import { BUSINESS_INFO } from '../lib/constants';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';

interface ContactViewProps {
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-12">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Contact', url: '/contact' }])} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} onNavigate={onNavigate} />

        {/* Hero Header */}
        <div className="max-w-3xl space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>GET IN TOUCH</span>
            <span aria-hidden="true">·</span>
            <span>MANCHESTER HQ & NATIONWIDE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-main tracking-tight">
            Start Your Project With Techonrise.
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Schedule a technical consultation, request an architecture review, or send us your scope of work. A senior engineer will respond within 1 business day.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
