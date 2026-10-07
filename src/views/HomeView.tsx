import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustProofStrip } from '../components/sections/TrustProofStrip';
import { CompanyOverview } from '../components/sections/CompanyOverview';
import { ServicesShowcase } from '../components/sections/ServicesShowcase';
import { IndustrySolutions } from '../components/sections/IndustrySolutions';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { ContactSection } from '../components/sections/ContactSection';
import { JsonLd } from '../components/seo/JsonLd';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  generateVisibleReviewsSchema,
} from '../lib/schema';
import { TESTIMONIALS_DATA } from '../data/testimonials';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenConsultationModal }) => {
  return (
    <div>
      {/* Site-wide Schema: Organization, WebSite, LocalBusiness & Visibly Rendered Reviews */}
      <JsonLd
        schema={[
          generateOrganizationSchema(),
          generateWebSiteSchema(),
          generateLocalBusinessSchema(),
          generateVisibleReviewsSchema(TESTIMONIALS_DATA),
        ]}
      />

      {/* 1. Hero with Styled Static Background Placeholder (No 3D yet) */}
      <HeroSection onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />

      {/* 2. Trust & Proof Strip: Telemetry, Client Types, Certifications & Placeholder markers */}
      <TrustProofStrip />

      {/* 3. Company Overview & Strategic Positioning */}
      <CompanyOverview onNavigate={onNavigate} />

      {/* 4. Services Mega Section (All 5 practices, crawlable HTML) */}
      <ServicesShowcase onNavigate={onNavigate} />

      {/* 5. Industry Solutions (9 sectors with tailored promises) */}
      <IndustrySolutions onNavigate={onNavigate} />

      {/* 6. Process: Interactive Stage-Scrubber Timeline (Discover -> Strategise -> Design -> Build -> Launch -> Grow) */}
      <ProcessTimeline />

      {/* 7. Case Studies / Featured Quantitative Proof */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 8. Why Choose Techonrise (6 integrated pillars) */}
      <WhyChooseUs />

      {/* 9. Testimonials with subtle Placeholder markers */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions with FAQPage Schema */}
      <FAQSection onNavigate={onNavigate} limit={8} />

      {/* 11. Final Conversion CTA */}
      <FinalCTA onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />

      {/* 12. Contact Section with Manchester Innovation Corridor map */}
      <ContactSection />
    </div>
  );
};
