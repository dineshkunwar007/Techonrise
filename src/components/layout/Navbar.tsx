import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../ui/Button';
import { SERVICES_DATA } from '../../data/services';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenConsultationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  // Reduced navigation for lead-magnet landing page
  if (currentPath === '/free-audit') {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-subtle py-3 shadow-sm'
            : 'bg-[var(--bg-main)]/80 backdrop-blur-md py-4 border-b border-subtle/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="flex items-center group cursor-pointer"
              aria-label="Techonrise Home"
            >
              <Logo size="md" />
            </a>

            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>FREE EXECUTIVE AUDIT · NO COMMITMENT</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/');
                }}
                className="text-muted hover:text-main transition-colors flex items-center gap-1"
              >
                <span>← Return to Main Site</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--bg-main)]/92 backdrop-blur-md border-b border-subtle py-3 shadow-sm'
            : 'bg-[var(--bg-main)]/60 backdrop-blur-md py-4 sm:py-5 border-b border-subtle/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Strict single element) */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="flex items-center group cursor-pointer"
              aria-label="Techonrise Home"
            >
              <Logo size="md" />
            </a>

            {/* Zone 2: Navigation Links (4-6 single-line links + Services Mega Dropdown) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
              {/* Services with Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick('/services')}
                  className={`inline-flex items-center gap-1.5 py-2 hover:text-accent transition-colors ${
                    currentPath.startsWith('/services') ? 'text-accent font-semibold' : 'text-muted'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Services Mega Menu Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[800px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[var(--surface-1)] border border-subtle rounded-2xl p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 dark:ring-white/10">
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-subtle">
                        <div>
                          <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                            Full-Stack Delivery
                          </span>
                          <p className="text-xs text-muted mt-0.5">
                            Five integrated practices delivering end-to-end digital modernising.
                          </p>
                        </div>
                        <a
                          href="/services"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('/services');
                          }}
                          className="text-xs text-accent hover:underline flex items-center gap-1 font-medium"
                        >
                          View all services <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {SERVICES_DATA.slice(0, 3).map((category) => (
                          <div key={category.id} className="space-y-2.5">
                            <a
                              href={`/services/${category.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(`/services/${category.slug}`);
                              }}
                              className="block group"
                            >
                              <span className="text-xs font-mono text-muted mr-1.5">
                                {category.categoryNumber}.
                              </span>
                              <span className="text-sm font-semibold text-main group-hover:text-accent transition-colors">
                                {category.title}
                              </span>
                            </a>
                            <ul className="space-y-1.5 text-xs text-muted">
                              {category.subServices.slice(0, 4).map((sub) => (
                                <li key={sub.id}>
                                  <a
                                    href={`/services/${category.slug}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavClick(`/services/${category.slug}`);
                                    }}
                                    className="hover:text-main transition-colors block py-0.5 truncate"
                                  >
                                    {sub.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-6 mt-6 pt-5 border-t border-subtle">
                        {SERVICES_DATA.slice(3, 5).map((category) => (
                          <div key={category.id} className="space-y-2">
                            <a
                              href={`/services/${category.slug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(`/services/${category.slug}`);
                              }}
                              className="block group"
                            >
                              <span className="text-xs font-mono text-muted mr-1.5">
                                {category.categoryNumber}.
                              </span>
                              <span className="text-sm font-semibold text-main group-hover:text-accent transition-colors">
                                {category.title}
                              </span>
                            </a>
                            <ul className="space-y-1 text-xs text-muted">
                              {category.subServices.slice(0, 3).map((sub) => (
                                <li key={sub.id}>
                                  <a
                                    href={`/services/${category.slug}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleNavClick(`/services/${category.slug}`);
                                    }}
                                    className="hover:text-main transition-colors block py-0.5 truncate"
                                  >
                                    {sub.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/industries"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/industries');
                }}
                className={`hover:text-accent transition-colors ${
                  currentPath.startsWith('/industries') ? 'text-accent font-semibold' : 'text-muted'
                }`}
              >
                Industries
              </a>

              <a
                href="/case-studies"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/case-studies');
                }}
                className={`hover:text-accent transition-colors ${
                  currentPath.startsWith('/case-studies') ? 'text-accent font-semibold' : 'text-muted'
                }`}
              >
                Case Studies
              </a>

              <a
                href="/packages"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/packages');
                }}
                className={`hover:text-accent transition-colors ${
                  currentPath === '/packages' ? 'text-accent font-semibold' : 'text-muted'
                }`}
              >
                Packages
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/about');
                }}
                className={`hover:text-accent transition-colors ${
                  currentPath === '/about' ? 'text-accent font-semibold' : 'text-muted'
                }`}
              >
                About
              </a>

              <a
                href="/faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/faq');
                }}
                className={`hover:text-accent transition-colors ${
                  currentPath === '/faq' ? 'text-accent font-semibold' : 'text-muted'
                }`}
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: Actions (ThemeToggle + Consultation CTA) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />

              {/* Consultation CTA: Visible on mobile and desktop */}
              <div>
                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => {
                    if (onOpenConsultationModal) {
                      onOpenConsultationModal();
                    } else {
                      handleNavClick('/contact');
                    }
                  }}
                  className="px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs min-h-[38px] font-semibold"
                >
                  <span className="hidden xs:inline">Book Consultation</span>
                  <span className="xs:hidden">Book</span>
                </Button>
              </div>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-muted hover:text-main hover:bg-[var(--surface-2)] transition-colors focus-visible:ring-2 focus-visible:ring-accent cursor-pointer shrink-0"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 lg:hidden bg-[var(--bg-main)]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-1 text-base font-medium">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${currentPath === '/' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('/services')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath.startsWith('/services') ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Services & Capabilities
            </button>
            <div className="pl-4 border-l border-subtle space-y-1 my-1 text-sm text-muted">
              {SERVICES_DATA.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleNavClick(`/services/${s.slug}`)}
                  className="block text-left min-h-[40px] flex items-center px-2 rounded hover:text-main hover:bg-[var(--surface-2)]/50 w-full truncate transition-colors"
                >
                  {s.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('/industries')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath.startsWith('/industries') ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Industry Solutions
            </button>
            <button
              onClick={() => handleNavClick('/case-studies')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath.startsWith('/case-studies') ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('/packages')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath === '/packages' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Packages & Retainers
            </button>
            <button
              onClick={() => handleNavClick('/about')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath === '/about' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              About Techonrise
            </button>
            <button
              onClick={() => handleNavClick('/free-audit')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath === '/free-audit' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Free Digital Audit
            </button>
            <button
              onClick={() => handleNavClick('/faq')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath === '/faq' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className={`text-left min-h-[44px] flex items-center px-2 rounded-lg hover:text-accent transition-colors ${
                currentPath === '/contact' ? 'text-accent font-bold bg-[var(--surface-2)]' : 'text-main'
              }`}
            >
              Contact Us
            </button>
          </div>

          <div className="mt-auto pt-8 border-t border-subtle space-y-3">
            <Button
              className="w-full"
              size="lg"
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultationModal) {
                  onOpenConsultationModal();
                } else {
                  handleNavClick('/contact');
                }
              }}
            >
              Book a Consultation
            </Button>
            <p className="text-center text-xs text-muted">
              Manchester HQ: +44 20 1234 5678 · hello@techonrise.co.uk
            </p>
          </div>
        </div>
      )}
    </>
  );
};
