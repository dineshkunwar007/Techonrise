import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CompanyOverview } from '../components/sections/CompanyOverview';
import { ServiceTilesSection } from '../components/sections/ServiceTilesSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection';
import { FinalCTA } from '../components/sections/FinalCTA';
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

      {/* 1. Welcoming Hero with Plain-English Value Proposition & Quick-Jump Pillar Tiles */}
      <HeroSection onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />

      {/* 2. About Techonrise, Our Core Company Values & Key Verified Metrics */}
      <CompanyOverview onNavigate={onNavigate} />

      {/* 3. Interactive Service & Site Navigation Tiles (All 5 Core Services + Industries + Tools) */}
      <ServiceTilesSection onNavigate={onNavigate} />

      {/* 4. Client Feedback, 5-Star Reviews & UK Partner Accreditations */}
      <TestimonialsSection onNavigate={onNavigate} />

      {/* 5. Featured Case Studies (2 Flagship Previews + Link to Full Portfolio) */}
      <CaseStudiesSection onNavigate={onNavigate} />

      {/* 6. Final Conversion CTA & Direct Contact Quick-Tiles */}
      <FinalCTA onNavigate={onNavigate} onOpenConsultationModal={onOpenConsultationModal} />
    </div>
  );
};

