/**
 * @file sitemap.ts
 * Next.js / TypeScript compatible sitemap generator covering every static and dynamic route.
 * Total: 43 crawlable routes with lastModified, changeFrequency, and priority.
 */

import { SITE_URL } from '../lib/seo';
import { SERVICES_DATA } from '../data/services';
import { INDUSTRIES_DATA } from '../data/industries';
import { LOCATIONS_DATA } from '../data/locations';
import { CASE_STUDIES_DATA } from '../data/caseStudies';

export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): SitemapEntry[] {
  const currentDate = new Date('2026-10-07');
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

  // 1. Static Pages
  const staticRoutes: { path: string; priority: number; freq: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/services', priority: 0.9, freq: 'weekly' },
    { path: '/free-audit', priority: 0.9, freq: 'weekly' },
    { path: '/contact', priority: 0.8, freq: 'weekly' },
    { path: '/case-studies', priority: 0.8, freq: 'weekly' },
    { path: '/industries', priority: 0.8, freq: 'weekly' },
    { path: '/locations', priority: 0.8, freq: 'weekly' },
    { path: '/packages', priority: 0.7, freq: 'monthly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
    { path: '/faq', priority: 0.6, freq: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'monthly' },
    { path: '/terms', priority: 0.3, freq: 'monthly' },
    { path: '/cookie-policy', priority: 0.3, freq: 'monthly' },
  ];

  const staticEntries: SitemapEntry[] = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // 2. Service Pages (5 Categories)
  const serviceEntries: SitemapEntry[] = SERVICES_DATA.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. Industry Pages (9 Verticals)
  const industryEntries: SitemapEntry[] = INDUSTRIES_DATA.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. Location Pages (10 UK Cities)
  const locationEntries: SitemapEntry[] = LOCATIONS_DATA.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: loc.isHeadquarters ? 0.85 : 0.75,
  }));

  // 5. Case Study Pages (6 Stories)
  const caseStudyEntries: SitemapEntry[] = CASE_STUDIES_DATA.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...caseStudyEntries,
  ];
}

/**
 * Generate standard XML string for crawlers
 */
export function generateSitemapXml(): string {
  const entries = sitemap();
  const urlNodes = entries
    .map((e) => {
      const dateStr =
        e.lastModified instanceof Date
          ? e.lastModified.toISOString().split('T')[0]
          : e.lastModified || '2026-10-07';
      return `  <url>
    <loc>${e.url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${e.changeFrequency || 'weekly'}</changefreq>
    <priority>${(e.priority || 0.5).toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;
}
