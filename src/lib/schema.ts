import { BUSINESS_INFO } from './constants';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.siteUrl,
    logo: `${BUSINESS_INFO.siteUrl}/logo.png`,
    description: BUSINESS_INFO.positioning,
    email: BUSINESS_INFO.email,
    telephone: BUSINESS_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.countryCode,
    },
    sameAs: [
      BUSINESS_INFO.socials.linkedin,
      BUSINESS_INFO.socials.instagram,
      BUSINESS_INFO.socials.twitter,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: ['en-GB'],
      },
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BUSINESS_INFO.siteUrl}/#localbusiness`,
    name: `${BUSINESS_INFO.name} Manchester`,
    url: BUSINESS_INFO.siteUrl,
    image: `${BUSINESS_INFO.siteUrl}/og-image.png`,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: '££ - £££',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.4808,
      longitude: -2.2426,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'London' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'Leeds' },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.siteUrl}/#website`,
    url: BUSINESS_INFO.siteUrl,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.positioning,
    publisher: {
      '@id': `${BUSINESS_INFO.siteUrl}/#organization`,
    },
    inLanguage: 'en-GB',
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BUSINESS_INFO.siteUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  url: string;
  providerName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: service.url.startsWith('http') ? service.url : `${BUSINESS_INFO.siteUrl}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: service.providerName || BUSINESS_INFO.name,
      url: BUSINESS_INFO.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };
}

export function generateOfferCatalogSchema(servicesList: { title: string; description: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Techonrise Digital Services & Solutions Catalog',
    itemListElement: servicesList.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: s.url.startsWith('http') ? s.url : `${BUSINESS_INFO.siteUrl}${s.url}`,
      },
    })),
  };
}

export function generateVisibleReviewsSchema(
  reviews: Array<{
    author: string;
    role?: string;
    company?: string;
    quote: string;
    ratingValue?: number;
    isPlaceholder?: boolean;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
      description: 'Representative client feedback (sample data flagged)',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
        jobTitle: r.role,
      },
      reviewBody: r.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: (r.ratingValue || 5).toString(),
        bestRating: '5',
      },
      publisher: {
        '@type': 'Organization',
        name: r.company || BUSINESS_INFO.name,
      },
      disambiguatingDescription: r.isPlaceholder
        ? 'Sample demonstration case study feedback'
        : undefined,
    })),
  };
}

