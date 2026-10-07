/**
 * @file manifest.ts
 * Web App Manifest configuration for Techonrise.
 */

import { BUSINESS_INFO } from '../lib/constants';

export interface WebAppManifest {
  name: string;
  short_name: string;
  description: string;
  start_url: string;
  display: 'standalone' | 'minimal-ui' | 'fullscreen' | 'browser';
  background_color: string;
  theme_color: string;
  icons: Array<{
    src: string;
    sizes: string;
    type: string;
    purpose?: string;
  }>;
}

export default function manifest(): WebAppManifest {
  return {
    name: 'Techonrise | Digital Transformation & SEO UK',
    short_name: 'Techonrise',
    description: BUSINESS_INFO.positioning,
    start_url: '/',
    display: 'standalone',
    background_color: '#0C0F12',
    theme_color: '#0C0F12',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
  };
}
