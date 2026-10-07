export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  headline: string;
  shortSummary: string;
  industryPainPoints: string[];
  recommendedBundle: {
    category: string;
    services: string[];
    outcome: string;
  };
  sampleCaseSnippet: string;
  isPlaceholder: boolean;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'trades-home-services',
    slug: 'trades-home-services',
    title: 'Trades & Home Services',
    headline: 'High-intent local enquiries, instant quote booking, and automated engineer dispatch',
    shortSummary:
      'For plumbing, electrical, HVAC, roofing, and property maintenance contractors looking to dominate their local service territories without paying exorbitant lead aggregator fees.',
    industryPainPoints: [
      'Wasted hours spent manually fielding low-intent quote requests and tyre-kickers',
      'Over-reliance on lead brokers like Checkatrade that squeeze operating margins',
      'Engineers losing job sheets and forgetting to capture customer sign-offs',
    ],
    recommendedBundle: {
      category: 'Local Dominance & Dispatch',
      services: ['Local SEO & GBP Map Pack Optimisation', 'Instant Quote & Booking Funnel', 'Field-Service Mobile Job Sheet App'],
      outcome: 'Captures urgent, high-value local repairs directly while dispatching field teams with digital sign-offs.',
    },
    sampleCaseSnippet: 'Tripled monthly qualified heating boiler replacements in Greater Manchester while cutting dispatch paperwork by 75%.',
    isPlaceholder: true,
  },
  {
    id: 'professional-services',
    slug: 'professional-services',
    title: 'Professional Services',
    headline: 'Authority-led positioning, seamless onboarding, and confidential client portals',
    shortSummary:
      'For law firms, accountancy practices, management consultancies, and chartered surveyors requiring an institutional presence that turns referrals into high-fee retainers.',
    industryPainPoints: [
      'Outdated legacy websites that fail to reflect fee-earner prestige and partner calibre',
      'Clunky email threads for exchanging sensitive client onboarding documents',
      'Lack of qualified inbound search visibility outside of personal director networks',
    ],
    recommendedBundle: {
      category: 'Institutional Authority & Portal',
      services: ['Bespoke High-Trust Corporate Website', 'Secure Client Onboarding & Document Portal', 'Topical Authority Technical SEO'],
      outcome: 'Establishes clear market authority, ranks for high-intent advisory terms, and automates KYC/AML compliance.',
    },
    sampleCaseSnippet: 'Modernised a 40-person commercial law practice with a bespoke client portal and technical SEO overhaul.',
    isPlaceholder: true,
  },
  {
    id: 'healthcare-wellness',
    slug: 'healthcare-wellness',
    title: 'Healthcare & Wellness',
    headline: 'Patient trust, GDPR-compliant appointment scheduling, and local clinic visibility',
    shortSummary:
      'For private medical clinics, dental practices, physiotherapy studios, and mental health specialists where patient confidence and data privacy are paramount.',
    industryPainPoints: [
      'High administrative phone load for routine appointment bookings and rescheduling',
      'Friction in patient pre-consultation intake forms and medical questionnaires',
      'Strict UK GDPR and health confidentiality data handling requirements',
    ],
    recommendedBundle: {
      category: 'Patient Care & Clinic Growth',
      services: ['UK GDPR-Compliant Intake & Booking Portal', 'Local SEO & Healthcare Review Engine', 'Managed Secure Cloud Hosting'],
      outcome: 'Fills clinic appointment books automatically while maintaining rigorous patient data encryption standards.',
    },
    sampleCaseSnippet: 'Increased private cosmetic dental consultations by 140% across two clinic locations with online booking.',
    isPlaceholder: true,
  },
  {
    id: 'retail-ecommerce',
    slug: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    headline: 'Rapid load speeds, conversion-engineered checkouts, and automated inventory sync',
    shortSummary:
      'For direct-to-consumer lifestyle brands and B2B wholesale distributors demanding scalable e-commerce infrastructure free from platform limitations.',
    industryPainPoints: [
      'Cart abandonment caused by slow mobile checkout speeds and confusing steps',
      'Manual inventory reconciliation between digital storefronts and physical warehouses',
      'Rising Meta/Google ad costs requiring higher organic search traffic and retention',
    ],
    recommendedBundle: {
      category: 'Commerce Scale & Margin',
      services: ['Headless / Custom Shopify Architecture', 'Conversion Rate Optimisation & Speed Tuning', 'Automated Warehouse ERP Webhooks'],
      outcome: 'Sub-second mobile loading, increased average order value (AOV), and real-time inventory management.',
    },
    sampleCaseSnippet: 'Reduced page load time from 4.2s to 0.8s for a luxury home retailer, lifting checkout completion by 32%.',
    isPlaceholder: true,
  },
  {
    id: 'property-construction',
    slug: 'property-construction',
    title: 'Property & Construction',
    headline: 'Project showcase portfolios, investor pitch hubs, and subcontractor management',
    shortSummary:
      'For commercial developers, main contractors, estate agencies, and architectural studios looking to attract institutional investment and high-value tender awards.',
    industryPainPoints: [
      'Stale project portfolios that fail to communicate architectural scale and engineering rigour',
      'Subcontractor compliance and health & safety documentation trapped in paper folders',
      'Slow response times to commercial development enquiries and tender invitations',
    ],
    recommendedBundle: {
      category: 'Showcase & Contractor Workflow',
      services: ['Interactive Project Showcase Website', 'Subcontractor Health & Safety Portal', 'High-Impact Tender Landing Hubs'],
      outcome: 'Positions the contractor as an elite tier partner for major institutional framework bids.',
    },
    sampleCaseSnippet: 'Architected a digital project tender portal that supported winning £12M in regional commercial development contracts.',
    isPlaceholder: true,
  },
  {
    id: 'logistics-transport',
    slug: 'logistics-transport',
    title: 'Logistics & Transport',
    headline: 'Fleet management interfaces, automated quote calculations, and tracking portals',
    shortSummary:
      'For haulage firms, courier networks, freight forwarders, and warehouse logistics providers needing real-time operational transparency.',
    industryPainPoints: [
      'Dispatchers buried in phone calls asking "where is my delivery driver?"',
      'Complex manual calculations for mileage, pallet rates, and customs surcharge pricing',
      'Disconnected driver apps failing in low-coverage rural distribution routes',
    ],
    recommendedBundle: {
      category: 'Fleet Transparency & Pricing',
      services: ['Dynamic Freight Quoting Engine', 'Driver Mobile App with Offline GPS Sync', 'Real-Time Consignment Tracking Portal'],
      outcome: 'Delivers instant commercial haulage quotes and provides customers with live consignment status.',
    },
    sampleCaseSnippet: 'Automated haulage quote calculations, reducing quote turnaround from 4 hours to 90 seconds for a regional carrier.',
    isPlaceholder: true,
  },
  {
    id: 'education-training',
    slug: 'education-training',
    title: 'Education & Training',
    headline: 'Course booking engines, LMS portals, and high-conversion student acquisition',
    shortSummary:
      'For professional training academies, vocational colleges, certification bodies, and executive education providers.',
    industryPainPoints: [
      'Clunky student registration workflows causing high dropout rates before payment',
      'Manual issuing and tracking of CPD certificates and student assessments',
      'Low search ranking for competitive vocational and corporate training terms',
    ],
    recommendedBundle: {
      category: 'Student Growth & LMS',
      services: ['Course Catalog & Checkout Engine', 'Bespoke Student Learning Portal', 'National & Regional Education SEO'],
      outcome: 'Attracts both individual learners and corporate B2B bulk training cohorts effortlessly.',
    },
    sampleCaseSnippet: 'Increased student enrollment for a commercial safety training provider by 85% in their first quarter.',
    isPlaceholder: true,
  },
  {
    id: 'hospitality',
    slug: 'hospitality',
    title: 'Hospitality & Venues',
    headline: 'Direct table and private event bookings, zero OTA commissions, and local foodie SEO',
    shortSummary:
      'For boutique hotel collections, fine dining restaurants, wedding venues, and multi-site leisure operators looking to cut online travel agency (OTA) fees.',
    industryPainPoints: [
      'Paying up to 20% in booking commissions to OpenTable, Booking.com, and third-party aggregators',
      'Slow mobile websites that frustrate customers browsing menus on their phones',
      'Private hire and wedding leads sitting uncontacted over busy weekend service hours',
    ],
    recommendedBundle: {
      category: 'Direct Bookings & Event Funnels',
      services: ['Direct Commission-Free Booking Engine', 'Event Hire Lead Qualification Funnel', 'Local Foodie SEO & Map Pack Domination'],
      outcome: 'Recovers thousands in third-party booking commissions while accelerating private event sales.',
    },
    sampleCaseSnippet: 'Shifted 44% of restaurant table reservations to direct online channels, saving over £1,800/month in commission fees.',
    isPlaceholder: true,
  },
  {
    id: 'startups-saas',
    slug: 'startups-saas',
    title: 'Startups & SaaS',
    headline: 'Fast MVP delivery, product-led growth infrastructure, and investor-ready systems',
    shortSummary:
      'For ambitious founders and technical entrepreneurs needing rapid software development, scalable multi-tenant architecture, and high-conversion landing funnels.',
    industryPainPoints: [
      'Months lost searching for full-time engineers before writing the first line of code',
      'Unstructured architectures that require complete rewrites after the seed round',
      'Low conversion rates on complex technical SaaS value propositions',
    ],
    recommendedBundle: {
      category: 'Velocity & Venture Architecture',
      services: ['Rapid Full-Stack MVP Engineering', 'Stripe Multi-Tenant Subscription Engine', 'High-Converting Technical Product Showcase'],
      outcome: 'Takes founders from validated specification to live customer billing in weeks, not quarters.',
    },
    sampleCaseSnippet: 'Delivered an enterprise compliance SaaS MVP in 7 weeks, enabling the client to close their first 5 pilot contracts.',
    isPlaceholder: true,
  },
];
