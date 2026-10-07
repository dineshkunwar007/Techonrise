/**
 * @file constants.ts
 * Single source of truth for business contact details, metrics, navigation and brand copy.
 * NOTE: Contact data and stats marked with isPlaceholder are dummy placeholders for demonstration.
 */

export const BUSINESS_INFO = {
  name: 'Techonrise',
  legalName: 'Techonrise Ltd',
  email: 'hello@techonrise.co.uk',
  phone: '+44 20 1234 5678',
  address: {
    street: '124 Innovation House, London Road',
    city: 'Manchester',
    region: 'Greater Manchester',
    postalCode: 'M1 4AB',
    country: 'United Kingdom',
    countryCode: 'GB',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  humanHours: 'Mon–Fri, 9:00 AM – 6:00 PM (UK Time)',
  socials: {
    linkedin: 'https://linkedin.com/company/techonrise',
    instagram: 'https://instagram.com/techonrise',
    twitter: 'https://x.com/techonrise',
    github: 'https://github.com/techonrise',
  },
  positioning:
    'Techonrise helps businesses grow, automate and modernise through SEO, websites, software, mobile apps, cloud infrastructure and practical AI automation.',
  siteUrl: 'https://techonrise.co.uk',
  isPlaceholder: true,
};

export const PLACEHOLDER_METRICS = [
  {
    value: '150+',
    label: 'Projects Delivered',
    detail: 'Across web, software, and AI automation',
    isPlaceholder: true,
  },
  {
    value: '10+',
    label: 'Industries Modernised',
    detail: 'From trades & logistics to healthcare & SaaS',
    isPlaceholder: true,
  },
  {
    value: '95%',
    label: 'Client Retention Rate',
    detail: 'On growth retainers & ongoing care',
    isPlaceholder: true,
  },
  {
    value: '24/7',
    label: 'Monitored Cloud Systems',
    detail: 'High-availability UK & European deployments',
    isPlaceholder: true,
  },
];

export const NAV_LINKS = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const TOP_UK_LOCATIONS = [
  { city: 'Manchester', slug: 'manchester', tag: 'HQ & Northern Hub' },
  { city: 'London', slug: 'london', tag: 'Capital & Fintech' },
  { city: 'Birmingham', slug: 'birmingham', tag: 'Midlands Enterprise' },
  { city: 'Leeds', slug: 'leeds', tag: 'Digital & Legal' },
  { city: 'Bristol', slug: 'bristol', tag: 'Tech & Creative' },
  { city: 'Liverpool', slug: 'liverpool', tag: 'Commerce & Logistics' },
  { city: 'Glasgow', slug: 'glasgow', tag: 'Engineering & Innovation' },
  { city: 'Edinburgh', slug: 'edinburgh', tag: 'Financial Services' },
  { city: 'Sheffield', slug: 'sheffield', tag: 'Advanced Systems' },
  { city: 'Cardiff', slug: 'cardiff', tag: 'Wales Digital Hub' },
];
