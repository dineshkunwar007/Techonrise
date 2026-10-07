import React from 'react';

export const alt = 'Techonrise | Digital Transformation, Technical SEO & AI Automation UK';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Dynamic OpenGraph Social Image Component (ImageResponse compatible)
 */
export default function OpenGraphImage() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#0C0F12',
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(45, 212, 191, 0.15) 0%, transparent 60%)',
        padding: '60px 80px',
        color: '#EEF2F1',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#151A1E',
              border: '1px solid #2DD4BF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2DD4BF',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            T
          </div>
          <span style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Techonrise<span style={{ color: '#2DD4BF' }}>.</span>
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#151A1E',
            padding: '8px 18px',
            borderRadius: '9999px',
            border: '1px solid #232A31',
            color: '#2DD4BF',
            fontSize: '14px',
            fontFamily: 'monospace',
          }}
        >
          <span>MANCHESTER HQ & NATIONWIDE UK</span>
        </div>
      </div>

      {/* Main Headline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
        <span style={{ fontSize: '16px', fontFamily: 'monospace', color: '#2DD4BF', letterSpacing: '0.1em' }}>
          GROW · AUTOMATE · MODERNISE
        </span>
        <h1
          style={{
            fontSize: '56px',
            fontWeight: '800',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            margin: 0,
            color: '#FFFFFF',
          }}
        >
          Grow, Automate & Modernise Your Business.
        </h1>
        <p style={{ fontSize: '22px', color: '#8E9B97', margin: 0, lineHeight: 1.4 }}>
          Technical SEO, bespoke web flagships, mobile applications, and practical AI automation engineered under one UK roof.
        </p>
      </div>

      {/* Footer Proof Points */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          borderTop: '1px solid #232A31',
          paddingTop: '24px',
          color: '#8E9B97',
          fontSize: '14px',
        }}
      >
        <div style={{ display: 'flex', gap: '32px' }}>
          <span>✓ 100% Client Code Ownership</span>
          <span>✓ Zero Offshore Subcontracting</span>
          <span>✓ UK GDPR Sovereign Data</span>
        </div>
        <span style={{ color: '#2DD4BF', fontFamily: 'monospace' }}>techonrise.co.uk</span>
      </div>
    </div>
  );
}
