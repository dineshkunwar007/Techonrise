/**
 * @file robots.ts
 * Next.js / TypeScript compatible robots configuration.
 * Allows all search engines to crawl content, references the canonical sitemap,
 * and disallows internal API stubs and developer UI review routes.
 */

import { SITE_URL } from '../lib/seo';

export interface RobotsConfig {
  rules: {
    userAgent: string;
    allow?: string | string[];
    disallow?: string | string[];
  };
  sitemap: string;
  host?: string;
}

export default function robots(): RobotsConfig {
  const baseUrl = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dev/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
