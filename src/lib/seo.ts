/**
 * @file seo.ts
 * Central SEO engine for Techonrise.
 * Provides buildMetadata() helper with title templating ("%s | Techonrise"),
 * strict length enforcement (<60 chars title, <155 chars description),
 * canonical URL generation, OpenGraph, Twitter card attributes, and runtime DOM synchronization.
 */

import { BUSINESS_INFO } from './constants';
import { SERVICES_DATA } from '../data/services';
import { INDUSTRIES_DATA } from '../data/industries';
import { LOCATIONS_DATA } from '../data/locations';
import { CASE_STUDIES_DATA } from '../data/caseStudies';

export const SITE_URL =
  (typeof process !== 'undefined' &&
    (process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.VITE_SITE_URL ||
      process.env.APP_URL)) ||
  BUSINESS_INFO.siteUrl ||
  'https://techonrise.co.uk';

export interface RouteMetadataConfig {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
}

export interface NextCompatibleMetadata {
  metadataBase: URL;
  title: {
    default: string;
    template: string;
  };
  description: string;
  alternates: {
    canonical: string;
  };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: string;
    type: 'website' | 'article';
    images: Array<{ url: string; width: number; height: number; alt: string }>;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
    creator?: string;
  };
  robots?: {
    index: boolean;
    follow: boolean;
  };
}

/**
 * Format title with "%s | Techonrise" template while ensuring strict <= 60 chars.
 */
export function formatTitle(rawTitle: string): string {
  const brand = BUSINESS_INFO.name;
  if (rawTitle.includes(brand)) {
    return rawTitle.length > 60 ? rawTitle.slice(0, 57) + '...' : rawTitle;
  }
  const formatted = `${rawTitle} | ${brand}`;
  if (formatted.length > 60) {
    const trimmed = rawTitle.slice(0, 60 - ` | ${brand}`.length).trim();
    return `${trimmed} | ${brand}`;
  }
  return formatted;
}

/**
 * Ensure description complies with strict <= 155 chars.
 */
export function formatDescription(rawDesc: string): string {
  const trimmed = rawDesc.trim();
  if (trimmed.length > 155) {
    return trimmed.slice(0, 152) + '...';
  }
  return trimmed;
}

/**
 * Canonical URL resolver
 */
export function getCanonicalUrl(canonicalPath: string): string {
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const normalizedBase = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
  return `${normalizedBase}${cleanPath}`;
}

/**
 * Framework-level buildMetadata() helper
 */
export function buildMetadata(config: RouteMetadataConfig): NextCompatibleMetadata {
  const fullTitle = formatTitle(config.title);
  const cleanDescription = formatDescription(config.description);
  const canonicalUrl = getCanonicalUrl(config.canonicalPath);
  const ogImageUrl = config.ogImage || `${SITE_URL}/og-image.png`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: fullTitle,
      template: `%s | ${BUSINESS_INFO.name}`,
    },
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: BUSINESS_INFO.name,
      locale: 'en_GB',
      type: config.ogType || 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_INFO.name} - Digital Transformation, SEO & AI Automation`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: cleanDescription,
      images: [ogImageUrl],
      creator: '@techonrise',
    },
    ...(config.noindex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

/**
 * Runtime DOM synchroniser for SPA client routing.
 * Updates <title>, <meta description>, canonical, OpenGraph, Twitter, and robots tags.
 */
export function updatePageMetadata(config: RouteMetadataConfig) {
  if (typeof document === 'undefined') return;

  const fullTitle = formatTitle(config.title);
  const cleanDescription = formatDescription(config.description);
  const canonicalUrl = getCanonicalUrl(config.canonicalPath);
  const ogImageUrl = config.ogImage || `${SITE_URL}/og-image.png`;

  // Title
  document.title = fullTitle;

  // Helper for setting meta attributes
  const setMeta = (attrName: string, attrVal: string, contentVal: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', contentVal);
  };

  // Standard Meta
  setMeta('name', 'description', cleanDescription);

  // Open Graph
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', cleanDescription);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:site_name', BUSINESS_INFO.name);
  setMeta('property', 'og:type', config.ogType || 'website');
  setMeta('property', 'og:image', ogImageUrl);
  setMeta('property', 'og:locale', 'en_GB');

  // Twitter Cards
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', fullTitle);
  setMeta('name', 'twitter:description', cleanDescription);
  setMeta('name', 'twitter:image', ogImageUrl);

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // Robots Meta for noindex routes (e.g. 404, /dev/ui)
  let robotsEl = document.querySelector('meta[name="robots"]');
  if (config.noindex) {
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.setAttribute('name', 'robots');
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute('content', 'noindex, nofollow');
  } else if (robotsEl) {
    robotsEl.setAttribute('content', 'index, follow');
  }
}

/**
 * Route metadata catalogue for all static routes.
 * Every title is <= 60 characters with "| Techonrise".
 * Every description is <= 155 characters.
 */
export const STATIC_ROUTE_METADATA: Record<string, RouteMetadataConfig> = {
  '/': {
    title: 'Digital Transformation & SEO UK',
    description: 'Grow, automate and modernise your business with technical SEO, custom web development, mobile apps, and practical AI workflows.',
    canonicalPath: '/',
  },
  '/about': {
    title: 'About Our Technical Team',
    description: 'Discover how Techonrise unites technical SEO, bespoke software engineering, and practical AI automation under one Manchester roof.',
    canonicalPath: '/about',
  },
  '/services': {
    title: 'Digital Services & Engineering',
    description: 'Explore 5 core capabilities: Technical SEO, Custom Web & E-Commerce, Software & Mobile Apps, AI Workflows, and UK Cloud Hosting.',
    canonicalPath: '/services',
  },
  '/industries': {
    title: 'UK Industry Sector Solutions',
    description: 'Tailored technology, local search, and operational software bundles engineered for 9 specific UK commercial industry verticals.',
    canonicalPath: '/industries',
  },
  '/case-studies': {
    title: 'Client Case Studies & Results',
    description: 'Explore commercial case studies delivering measurable revenue growth, speed improvements, and automated operational workflows across the UK.',
    canonicalPath: '/case-studies',
  },
  '/locations': {
    title: 'UK Regional Office Hubs',
    description: 'Digital transformation, technical SEO, and cloud software engineering across 10 major UK regional commercial centres.',
    canonicalPath: '/locations',
  },
  '/packages': {
    title: 'Growth Retainers & Packages',
    description: 'Transparent indicative retainers and scoped project tiers for technical SEO, digital flagships, and operational web portals.',
    canonicalPath: '/packages',
  },
  '/free-audit': {
    title: 'Free Technical SEO Audit',
    description: 'Claim a complimentary diagnostic audit covering Core Web Vitals, entity search readiness, and tracking integrity for your UK website.',
    canonicalPath: '/free-audit',
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    description: 'Direct technical answers on code ownership, UK GDPR compliance, engineering sprints, and dedicated retainer service levels.',
    canonicalPath: '/faq',
  },
  '/contact': {
    title: 'Contact Manchester HQ',
    description: 'Discuss your project with senior UK engineers. Contact our Manchester headquarters on London Road or submit a project brief.',
    canonicalPath: '/contact',
  },
  '/privacy-policy': {
    title: 'Privacy Policy & UK GDPR',
    description: 'Techonrise UK GDPR data privacy policy, lawful processing bases, and data subject information notice for clients and users.',
    canonicalPath: '/privacy-policy',
  },
  '/terms': {
    title: 'Terms of Business',
    description: 'Commercial terms of business, 100% intellectual property code ownership framework, and service level guidelines for Techonrise clients.',
    canonicalPath: '/terms',
  },
  '/cookie-policy': {
    title: 'Cookie Policy & Consent Mode',
    description: 'Information regarding Techonrise consent-first cookie preferences, categories, and Google Consent Mode v2 implementation.',
    canonicalPath: '/cookie-policy',
  },
  '/404': {
    title: 'Page Not Found',
    description: 'The requested resource could not be found. Return to the Techonrise homepage or browse our core digital practices.',
    canonicalPath: '/404',
    noindex: true,
  },
  '/dev/ui': {
    title: 'UI Kit Internal Showcase',
    description: 'Temporary component preview for design verification. Not indexed.',
    canonicalPath: '/dev/ui',
    noindex: true,
  },
};

/**
 * Dynamic route metadata resolver for services, industries, locations, and case studies.
 */
export function getRouteMetadata(path: string): RouteMetadataConfig {
  if (STATIC_ROUTE_METADATA[path]) {
    return STATIC_ROUTE_METADATA[path];
  }

  // Dynamic Service Pages (/services/[slug])
  if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '');
    const service = SERVICES_DATA.find((s) => s.slug === slug);
    if (service) {
      const shortTitle = service.title.replace(' & ', ' & ').replace(' Infrastructure', ' Hosting');
      return {
        title: `${shortTitle} Practice`,
        description: formatDescription(service.overview || service.tagline),
        canonicalPath: path,
      };
    }
  }

  // Dynamic Industry Pages (/industries/[slug])
  if (path.startsWith('/industries/')) {
    const slug = path.replace('/industries/', '');
    const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);
    if (industry) {
      return {
        title: `${industry.title} Solutions`,
        description: formatDescription(industry.shortSummary || industry.headline),
        canonicalPath: path,
      };
    }
  }

  // Dynamic Location Pages (/locations/[city])
  if (path.startsWith('/locations/')) {
    const citySlug = path.replace('/locations/', '');
    const location = LOCATIONS_DATA.find((l) => l.slug === citySlug);
    if (location) {
      return {
        title: `Digital Partner in ${location.city}`,
        description: formatDescription(location.localIntro || location.serviceEmphasis),
        canonicalPath: path,
      };
    }
  }

  // Dynamic Case Studies (/case-studies/[slug])
  if (path.startsWith('/case-studies/')) {
    const slug = path.replace('/case-studies/', '');
    const cs = CASE_STUDIES_DATA.find((c) => c.slug === slug);
    if (cs) {
      const shortTitle = cs.title.length > 40 ? cs.title.slice(0, 37) + '...' : cs.title;
      return {
        title: `${shortTitle}`,
        description: formatDescription(cs.summary || cs.challenge),
        canonicalPath: path,
      };
    }
  }

  // Fallback to 404
  return STATIC_ROUTE_METADATA['/404'];
}
