import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustProofStrip } from '../components/sections/TrustProofStrip';
import { CompanyOverview } from '../components/sections/CompanyOverview';
import { ServicesShowcase } from '../components/sections/ServicesShowcase';
import { AIAutomationSection } from '../components/sections/AIAutomationSection';
import { InteractiveEstimator } from '../components/sections/InteractiveEstimator';
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

      {/* 1. Hero with 3D Architectural Spatial Scene & Value Proposition */}
      <HeroSection onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />

      {/* 2. Trust & Telemetry Strip: Verified Metrics, Active Clients & Certifications */}
      <TrustProofStrip />

      {/* 3. Company Overview & Strategic Positioning */}
      <CompanyOverview onNavigate={onNavigate} />

      {/* 4. Services Mega Section (All 5 practices, crawlable HTML) */}
      <ServicesShowcase onNavigate={onNavigate} />

      {/* 5. Practical AI Automation Spotlight with 3D Graph */}
      <AIAutomationSection onNavigate={onNavigate} />

      {/* 6. Interactive Scope & Delivery Timeline Estimator */}
      <InteractiveEstimator
        onNavigate={onNavigate}
        onOpenConsultationModal={onOpenConsultationModal}
      />

      {/* 7. Industry Solutions (9 sectors with tailored promises) */}
      <IndustrySolutions onNavigate={onNavigate} />

      {/* 8. Process: Interactive Stage-Scrubber Timeline (Discover -> Strategise -> Design -> Build -> Launch -> Grow) */}
      <ProcessTimeline />

      {/* 9. Case Studies / Featured Quantitative Proof */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 10. Why Choose Techonrise (6 integrated pillars) */}
      <WhyChooseUs />

      {/* 11. Testimonials with 5-Star Ratings & Verified Client Feedback */}
      <TestimonialsSection />

      {/* 12. Frequently Asked Questions with FAQPage Schema */}
      <FAQSection onNavigate={onNavigate} limit={8} />

      {/* 13. Final Conversion CTA */}
      <FinalCTA onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />

      {/* 14. Contact Section with Manchester Innovation Corridor map */}
      <ContactSection />
    </div>
  );
};
