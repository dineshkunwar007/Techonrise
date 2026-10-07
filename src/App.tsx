import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/layout/CookieBanner';
import { StickyMobileCta } from './components/layout/StickyMobileCta';
import { ConsultationModal } from './components/ui/ConsultationModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { IndustriesView } from './views/IndustriesView';
import { IndustryDetailView } from './views/IndustryDetailView';
import { CaseStudiesView } from './views/CaseStudiesView';
import { CaseStudyDetailView } from './views/CaseStudyDetailView';
import { LocationsView } from './views/LocationsView';
import { LocationDetailView } from './views/LocationDetailView';
import { PackagesView } from './views/PackagesView';
import { FreeAuditView } from './views/FreeAuditView';
import { FAQView } from './views/FAQView';
import { ContactView } from './views/ContactView';
import { PrivacyPolicyView, TermsView, CookiePolicyView, NotFoundView } from './views/LegalViews';
// TODO: Remove this temporary /dev/ui route before production launch
import { DevUiView } from './views/DevUiView';

import { updatePageMetadata, getRouteMetadata } from './lib/seo';
import { BUSINESS_INFO } from './lib/constants';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Listen to popstate for browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronise Page Title & Description per route from centralized SEO engine
  useEffect(() => {
    const metaConfig = getRouteMetadata(currentPath);
    updatePageMetadata(metaConfig);
  }, [currentPath]);

  // Route Resolver
  const renderCurrentView = () => {
    if (currentPath === '/') {
      return (
        <HomeView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/about') {
      return (
        <AboutView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/services') {
      return (
        <ServicesView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailView
          slug={slug}
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/industries') {
      return (
        <IndustriesView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '');
      return (
        <IndustryDetailView
          slug={slug}
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/case-studies') {
      return (
        <CaseStudiesView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath.startsWith('/case-studies/')) {
      const slug = currentPath.replace('/case-studies/', '');
      return (
        <CaseStudyDetailView
          slug={slug}
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/locations') {
      return <LocationsView onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/locations/')) {
      const citySlug = currentPath.replace('/locations/', '');
      return (
        <LocationDetailView
          citySlug={citySlug}
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/packages') {
      return (
        <PackagesView
          onNavigate={navigate}
          onOpenConsultationModal={() => setConsultationModalOpen(true)}
        />
      );
    }
    if (currentPath === '/free-audit') {
      return <FreeAuditView onNavigate={navigate} />;
    }
    if (currentPath === '/faq') {
      return <FAQView onNavigate={navigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactView onNavigate={navigate} />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyView onNavigate={navigate} />;
    }
    if (currentPath === '/terms') {
      return <TermsView onNavigate={navigate} />;
    }
    if (currentPath === '/cookie-policy') {
      return <CookiePolicyView onNavigate={navigate} />;
    }
    // TODO: Remove this temporary /dev/ui route before production launch
    if (currentPath === '/dev/ui') {
      return <DevUiView onNavigate={navigate} />;
    }

    return <NotFoundView onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-main font-sans selection:bg-accent/30 selection:text-accent">
      {/* Skip to Content Link for WCAG Keyboard Navigation */}
      <a href="#main-content" className="skip-to-content font-mono text-xs">
        Skip to main content
      </a>

      {/* Top Bar Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Consent-first Cookie Banner */}
      <CookieBanner />

      {/* Sticky Mobile Quick-Action CTA Bar for 375px/Mobile-First */}
      <StickyMobileCta
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
