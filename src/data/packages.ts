export interface PackageItem {
  id: string;
  name: string;
  type: 'retainer' | 'project';
  targetAudience: string;
  priceNote: string;
  billingFrequency?: string;
  badge?: string;
  description: string;
  keyInclusions: string[];
  isPopular?: boolean;
  isPlaceholder: boolean;
}

export const PACKAGES_DATA: PackageItem[] = [
  // 7 Retainer Tiers
  {
    id: 'seo-growth-retainer',
    name: 'SEO & Search Authority Retainer',
    type: 'retainer',
    targetAudience: 'Growing firms seeking consistent, compounding inbound commercial search traffic',
    priceNote: 'From £1,850',
    billingFrequency: '/ month (ex VAT)',
    badge: 'Popular Growth Tier',
    description: 'Continuous technical SEO hygiene, topical authority content clusters, GBP map pack optimisation, and conversion rate testing.',
    keyInclusions: [
      'Ongoing technical crawl & Core Web Vitals maintenance',
      '4 bespoke entity-optimised commercial articles or landing pages per month',
      'Local citation sync & Google Business Profile updates',
      'Answer-engine optimisation (Perplexity / AI search readiness)',
      'Monthly GA4 attribution & executive progress review',
    ],
    isPopular: true,
    isPlaceholder: true,
  },
  {
    id: 'website-care-retainer',
    name: 'Website Care & Performance Retainer',
    type: 'retainer',
    targetAudience: 'Businesses requiring peace of mind, speed maintenance, and continuous enhancements',
    priceNote: 'From £650',
    billingFrequency: '/ month (ex VAT)',
    description: 'Proactive 24/7 uptime monitoring, security patching, dependency updates, and dedicated engineering hours for design tweaks.',
    keyInclusions: [
      '24/7 synthetic uptime & SSL certificate monitoring',
      'Daily automated offsite snapshot backups',
      'Continuous security patching & framework dependency updates',
      'Up to 5 hours dedicated monthly developer change requests',
      'Quarterly UX & speed performance review',
    ],
    isPlaceholder: true,
  },
  {
    id: 'software-maintenance-retainer',
    name: 'Software & Application Retainer',
    type: 'retainer',
    targetAudience: 'Companies operating custom client portals, internal tools, or SaaS platforms',
    priceNote: 'From £2,400',
    billingFrequency: '/ month (ex VAT)',
    description: 'Dedicated agile sprint allocation for continuous feature development, database tuning, and API maintenance.',
    keyInclusions: [
      'Dedicated bi-weekly agile development sprint cycles',
      'Database performance tuning & query optimisation',
      'Third-party API webhook monitoring (Xero, Stripe, CRMs)',
      'Priority bug triage with guaranteed SLA response times',
      'Staging environment maintenance & automated CI/CD checks',
    ],
    isPlaceholder: true,
  },
  {
    id: 'ai-automation-support',
    name: 'AI Automation & Workflow Care',
    type: 'retainer',
    targetAudience: 'Organisations scaling automated pipelines, chatbot agents, and document parsers',
    priceNote: 'From £1,200',
    billingFrequency: '/ month (ex VAT)',
    description: 'Continuous optimization of AI prompts, knowledge vector updates, triage guardrails, and new workflow automations.',
    keyInclusions: [
      'Continuous prompt tuning & knowledge base retraining',
      'Webhook error alerts and fallback queue resolution',
      'Up to 3 new automated workflow connections per month',
      'Data privacy & LLM API contract compliance auditing',
      'Monthly time-recovery and efficiency reporting',
    ],
    isPlaceholder: true,
  },
  {
    id: 'managed-hosting-tier',
    name: 'Managed Cloud & Security Tier',
    type: 'retainer',
    targetAudience: 'Mission-critical portals requiring hardened UK cloud infrastructure and DDoS mitigation',
    priceNote: 'From £450',
    billingFrequency: '/ month (ex VAT)',
    description: 'Enterprise cloud hosting in London/Manchester data centres with WAF firewalling and disaster recovery.',
    keyInclusions: [
      'UK data residency compliance (London/Manchester)',
      'Enterprise Web Application Firewall (WAF) & DDoS protection',
      'Isolated database backups with 30-day retention',
      'Cyber Essentials readiness technical support',
      '99.95% uptime SLA with on-call engineer escalations',
    ],
    isPlaceholder: true,
  },
  {
    id: 'paid-media-performance-retainer',
    name: 'Paid Media & High-Intent PPC Retainer',
    type: 'retainer',
    targetAudience: 'B2B and local service firms requiring immediate qualified inbound lead pipeline',
    priceNote: 'From £1,450',
    billingFrequency: '/ month (ex VAT)',
    description: 'Targeted Google Ads and LinkedIn lead generation campaigns engineered for positive return on ad spend (ROAS).',
    keyInclusions: [
      'Commercial keyword research and negative keyword curation',
      'A/B ad creative testing and conversion landing page tuning',
      'Click fraud mitigation and bid schedule automation',
      'Real-time CRM lead attribution tracking',
      'Bi-weekly performance calls with campaign directors',
    ],
    isPlaceholder: true,
  },
  {
    id: 'dedicated-digital-partner',
    name: 'Dedicated Digital Partner & Fractional CTO',
    type: 'retainer',
    targetAudience: 'Mid-market companies wanting an integrated technology department without multiple senior salaries',
    priceNote: 'From £4,500',
    billingFrequency: '/ month (ex VAT)',
    badge: 'Enterprise Partnership',
    description: 'Our most comprehensive retainer: Fractional CTO advisory, dedicated engineering sprints, technical SEO, and AI workflow support.',
    keyInclusions: [
      'Fractional CTO attendance at executive board & strategy reviews',
      '40 dedicated developer & design sprint hours per month',
      'Full technical SEO and AEO authority governance',
      'Direct priority Slack channel with senior UK engineering directors',
      'Annual technology roadmap and architectural security audits',
    ],
    isPopular: true,
    isPlaceholder: true,
  },

  // One-Off Scoped Projects
  {
    id: 'bespoke-website-build',
    name: 'Bespoke Business Digital Flagship',
    type: 'project',
    targetAudience: 'SMEs replacing slow legacy websites with modern, high-converting digital flagships',
    priceNote: 'From £4,800',
    billingFrequency: 'one-off scoped project',
    badge: 'Core Flagship',
    description: 'Complete strategic design and full-stack engineering of a custom website engineered for speed, conversions, and search.',
    keyInclusions: [
      'Comprehensive discovery & wireframe architecture',
      'Bespoke Figma design system matching brand positioning',
      'Ultra-fast Next.js / TypeScript custom build (no themes)',
      'Complete SEO migration & 301 redirect protection',
      'WCAG 2.2 AA accessibility and cross-device testing',
    ],
    isPlaceholder: true,
  },
  {
    id: 'technical-seo-audit',
    name: 'Comprehensive Technical SEO & AEO Audit',
    type: 'project',
    targetAudience: 'Companies with plateaued search traffic or preparing for a major market repositioning',
    priceNote: 'From £1,500',
    billingFrequency: 'one-off strategic deliverable',
    description: 'Deep diagnostic audit uncovering crawl bottlenecks, indexation leaks, Core Web Vitals issues, and answer-engine readiness.',
    keyInclusions: [
      'Full crawl analysis across every indexed and orphaned URL',
      'Core Web Vitals diagnostic with prioritised code remediation',
      'Schema.org structured data audit and JSON-LD blueprints',
      'AI answer-engine citation analysis (Perplexity, SearchGPT)',
      '60-minute executive presentation with implementation roadmap',
    ],
    isPlaceholder: true,
  },
  {
    id: 'custom-software-mvp',
    name: 'Custom Software / Portal MVP Sprint',
    type: 'project',
    targetAudience: 'Founders and enterprises needing a validated operational tool or customer portal fast',
    priceNote: 'From £8,500',
    billingFrequency: 'one-off milestone project',
    description: 'From technical specification to live production deployment in 6 to 8 weeks with complete IP ownership.',
    keyInclusions: [
      'Technical architecture blueprint & database entity modeling',
      'Interactive prototype & user testing validation',
      'Full-stack development with role-based security (RBAC)',
      'Stripe or third-party CRM/ERP API integrations',
      'Complete source code ownership & staff handover training',
    ],
    isPlaceholder: true,
  },
];
