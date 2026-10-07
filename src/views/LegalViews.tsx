import React from 'react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button } from '../components/ui/Button';
import { BUSINESS_INFO } from '../lib/constants';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { JsonLd } from '../components/seo/JsonLd';
import { generateBreadcrumbSchema } from '../lib/schema';

interface LegalViewProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyView: React.FC<LegalViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Privacy Policy', url: '/privacy-policy' }])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy-policy' }]} onNavigate={onNavigate} />

        <div className="space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>GOVERNANCE & PRIVACY</span>
            <span aria-hidden="true">·</span>
            <span>UK GDPR COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-main tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted font-mono">
            Last Updated: March 2026 · Registered in England & Wales
          </p>
        </div>

        {/* Notice of Template Text */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3 my-6">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <p>
            <strong>Template: review by a qualified professional before launch.</strong> This privacy notice represents baseline template documentation for demonstration purposes and must be reviewed and verified by a qualified UK legal professional prior to live commercial launch.
          </p>
        </div>

        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-muted leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">1. Overview & Data Controller</h2>
            <p>
              Techonrise Ltd (referred to as "we", "us", or "our") is the data controller responsible for personal information collected via our website and client onboarding portals. Our registered office is located at {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.postalCode}, United Kingdom.
            </p>
            <p>
              For any privacy inquiries or to exercise your statutory rights under UK GDPR and the Data Protection Act 2018, please contact our Data Protection Lead at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-accent hover:underline">{BUSINESS_INFO.email}</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">2. Information We Collect</h2>
            <p>We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identity & Contact Data: Full name, work email address, telephone number, and company name.</li>
              <li>Project Brief & Commercial Data: Budget estimates, target timelines, technical stack details, and current URLs.</li>
              <li>Technical Telemetry: IP addresses, browser types, referral paths, and device viewports (collected anonymously via privacy-respecting analytics only after explicit consent).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">3. Lawful Basis for Processing</h2>
            <p>We process personal information under the following lawful bases under UK GDPR:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Legitimate Interests:</strong> To respond to pre-sales inquiries, evaluate technical feasibility, and manage client commercial relationships.</li>
              <li><strong>Contractual Necessity:</strong> To draft project specifications, master service agreements, and deliver commissioned software code.</li>
              <li><strong>Consent:</strong> To deploy non-essential analytical cookies via our cookie consent banner.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">4. Data Storage & UK/EU Residency</h2>
            <p>
              All personal data submitted to Techonrise is stored within encrypted database environments located in the United Kingdom or the European Economic Area (EEA). We enforce strict least-privilege role-based access control (RBAC) and AES-256 encryption at rest.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">5. Your Statutory Rights</h2>
            <p>
              Under UK data protection laws, you possess the right to request access to your personal information, request rectification of inaccurate records, request erasure ("right to be forgotten"), or object to processing. To exercise these rights, please email us directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const TermsView: React.FC<LegalViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Terms of Business', url: '/terms' }])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Terms of Business', url: '/terms' }]} onNavigate={onNavigate} />

        <div className="space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>COMMERCIAL FRAMEWORK</span>
            <span aria-hidden="true">·</span>
            <span>TERMS OF ENGAGEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-main tracking-tight">
            Terms of Business
          </h1>
          <p className="text-xs text-muted font-mono">
            Last Updated: March 2026 · Governing Law: England & Wales
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3 my-6">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <p>
            <strong>Template: review by a qualified professional before launch.</strong> These terms are placeholder template guidelines. Final commercial client engagements are executed via formal Statement of Work (SOW) agreements.
          </p>
        </div>

        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-muted leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">1. Scope of Engagement</h2>
            <p>
              Techonrise Ltd provides professional digital transformation services including technical SEO, website development, custom software engineering, mobile applications, and AI workflow automation. Specific project milestones, deliverables, and acceptance criteria are documented in written Statements of Work.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">2. Intellectual Property & Code Ownership</h2>
            <p>
              Upon receipt of full payment for scoped deliverables, Techonrise transfers 100% of the custom source code, bespoke schemas, and client-specific design tokens to the client. Techonrise retains ownership only of general pre-existing utility libraries and development toolings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">3. Retainers & SLA Terms</h2>
            <p>
              Ongoing growth retainers and maintenance tiers are billed monthly in advance on a rolling 30-day notice period unless otherwise specified in an enterprise agreement. Unused sprint hours do not roll over to subsequent months unless mutually agreed in writing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">4. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of England and Wales, and subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const CookiePolicyView: React.FC<LegalViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20">
      <JsonLd schema={generateBreadcrumbSchema([{ name: 'Cookie Policy', url: '/cookie-policy' }])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Cookie Policy', url: '/cookie-policy' }]} onNavigate={onNavigate} />

        <div className="space-y-4 my-8">
          <div className="flex items-center gap-2 text-xs font-mono text-accent">
            <span>CONSENT & COOKIES</span>
            <span aria-hidden="true">·</span>
            <span>CONSENT MODE V2 COMPLIANT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-main tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-muted font-mono">
            Last Updated: March 2026 · Consent-First Architecture
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-3 my-6">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
          <p>
            <strong>Template: review by a qualified professional before launch.</strong> This cookie and telemetry schedule is template copy. Specific tracking technologies and vendors must be validated against actual telemetry deployments.
          </p>
        </div>

        <div className="bg-[var(--surface-1)] border border-subtle rounded-3xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-muted leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">1. How We Use Cookies</h2>
            <p>
              Techonrise operates a consent-first policy. We do not load non-essential performance or advertising cookies onto your device until you have provided active consent via our banner.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">2. Categories of Cookies</h2>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-1">
                <span className="font-semibold text-main">Strictly Necessary Cookies</span>
                <p>Required for technical operation (e.g. maintaining your dark/light theme preference and recording cookie consent selections). These cannot be disabled.</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-1">
                <span className="font-semibold text-main">Performance & Analytics Cookies</span>
                <p>Anonymously monitor user engagement and Core Web Vitals to help us identify site speed bottlenecks. Deployed only upon consent.</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-subtle space-y-1">
                <span className="font-semibold text-main">Marketing & Attribution Cookies</span>
                <p>Track the effectiveness of marketing campaigns and referral channels. Deployed only upon consent.</p>
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-main">3. Managing Your Preferences</h2>
            <p>
              You can adjust or revoke your cookie choices at any time by clearing your browser cache or re-opening the preferences modal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export const NotFoundView: React.FC<LegalViewProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center space-y-6">
        <span className="font-mono text-5xl sm:text-6xl font-bold text-accent">404</span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-main">Page Not Found</h1>
        <p className="text-sm text-muted leading-relaxed">
          The requested URL does not exist or may have been relocated. Use the navigation links below to explore our core capabilities, request a technical audit, or contact our team.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button variant="primary" onClick={() => onNavigate('/')}>
            Back to Home
          </Button>
          <Button variant="outline" onClick={() => onNavigate('/services')}>
            Explore Services
          </Button>
          <Button variant="ghost" onClick={() => onNavigate('/free-audit')}>
            Free Technical Audit
          </Button>
          <Button variant="ghost" onClick={() => onNavigate('/contact')}>
            Contact Team
          </Button>
        </div>
      </div>
    </div>
  );
};
