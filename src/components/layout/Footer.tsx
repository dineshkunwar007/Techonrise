import React from 'react';
import { Logo } from '../ui/Logo';
import { BUSINESS_INFO, TOP_UK_LOCATIONS } from '../../lib/constants';
import { SERVICES_DATA } from '../../data/services';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-[var(--surface-1)] border-t border-subtle pt-12 sm:pt-16 pb-28 lg:pb-14 text-sm text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-subtle">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block"
              aria-label="Techonrise Home"
            >
              <Logo size="md" showTagline={false} />
            </a>
            <p className="text-muted leading-relaxed max-w-sm text-xs sm:text-sm">
              {BUSINESS_INFO.positioning}
            </p>
            <div className="pt-2 text-xs space-y-1.5 font-mono text-muted">
              <p>Registered Address: {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}</p>
              <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-main hover:underline">{BUSINESS_INFO.email}</a></p>
              <p>Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-main hover:underline">{BUSINESS_INFO.phone}</a></p>
              <p>Operating Hours: {BUSINESS_INFO.humanHours}</p>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-3 text-xs">
              <a
                href={BUSINESS_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent flex items-center gap-0.5"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href={BUSINESS_INFO.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent flex items-center gap-0.5"
              >
                X (Twitter) <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>·</span>
              <a
                href={BUSINESS_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent flex items-center gap-0.5"
              >
                Instagram <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
              Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services/${service.slug}`}
                    onClick={(e) => handleLinkClick(e, `/services/${service.slug}`)}
                    className="hover:text-main transition-colors block py-0.5"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="/free-audit"
                  onClick={(e) => handleLinkClick(e, '/free-audit')}
                  className="text-accent hover:underline flex items-center gap-1 font-medium"
                >
                  Free Digital Audit →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Solutions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
              Company
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  About Techonrise
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  onClick={(e) => handleLinkClick(e, '/industries')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  Industry Solutions
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  onClick={(e) => handleLinkClick(e, '/case-studies')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  Case Studies & Proof
                </a>
              </li>
              <li>
                <a
                  href="/packages"
                  onClick={(e) => handleLinkClick(e, '/packages')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  Packages & Retainers
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => handleLinkClick(e, '/faq')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  FAQ & Governance
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="hover:text-main transition-colors block py-0.5"
                >
                  Contact & Brief Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: UK Regional Hubs */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-main font-semibold">
              UK Regional Hubs
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {TOP_UK_LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <a
                    href={`/locations/${loc.slug}`}
                    onClick={(e) => handleLinkClick(e, `/locations/${loc.slug}`)}
                    className="hover:text-main transition-colors block py-0.5 truncate"
                  >
                    {loc.city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Techonrise Ltd. All rights reserved.</span>
            <span>·</span>
            <span>Registered in England & Wales</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className="hover:text-main transition-colors"
            >
              Privacy Policy
            </a>
            <span>·</span>
            <a
              href="/terms"
              onClick={(e) => handleLinkClick(e, '/terms')}
              className="hover:text-main transition-colors"
            >
              Terms of Business
            </a>
            <span>·</span>
            <a
              href="/cookie-policy"
              onClick={(e) => handleLinkClick(e, '/cookie-policy')}
              className="hover:text-main transition-colors"
            >
              Cookie Policy
            </a>
            <span>·</span>
            <a
              href="/locations"
              onClick={(e) => handleLinkClick(e, '/locations')}
              className="hover:text-main transition-colors"
            >
              UK Coverage
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
