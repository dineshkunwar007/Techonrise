export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientCategory: string;
  industry: string;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { value: string; label: string; isPlaceholder: boolean }[];
  deliverables: string[];
  testimonialSnippet?: { quote: string; author: string; role: string };
  isPlaceholder: boolean;
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'greater-manchester-hvac',
    slug: 'greater-manchester-hvac-lead-gen',
    title: 'Commercial HVAC Contractor Quadruples Inbound Regional Enquiries',
    clientCategory: 'Commercial Trade Contractor',
    industry: 'Trades & Home Services',
    location: 'Greater Manchester & Cheshire',
    summary:
      'Engineered a high-speed service website, local GBP ranking system, and automated quoting pipeline that quadrupled monthly commercial service contracts.',
    challenge:
      'The contractor was spending upwards of £4,500/month on generic directory listings with diminishing returns. Their legacy website loaded in over 5.2 seconds on mobile, lacked clear call-to-actions, and lost dozens of commercial enquiries each week to faster regional competitors.',
    solution:
      'Techonrise engineered a bespoke, sub-second Next.js web application paired with deep territorial Google Business Profile optimisations. We introduced an interactive commercial boiler sizing tool and automated SMS/email enquiry triage that connects field estimators directly to facilities managers within 3 minutes of enquiry.',
    metrics: [
      { value: '+240%', label: 'Qualified Inbound Inquiries', isPlaceholder: true },
      { value: '0.7s', label: 'Mobile LCP Load Time', isPlaceholder: true },
      { value: '£38k', label: 'Annual Paid Directory Savings', isPlaceholder: true },
    ],
    deliverables: [
      'Bespoke Next.js Fast-Loading Architecture',
      'Local SEO & Territorial Landing Cluster',
      'Interactive Commercial Sizing Calculator',
      'Automated SMS & Webhook Dispatch Integration',
    ],
    testimonialSnippet: {
      quote:
        'Techonrise took us from throwing money away on directory ads to dominating commercial contract enquiries across Manchester and Cheshire. The automated quote flow alone saves our desk team 15 hours a week.',
      author: 'David Harrison',
      role: 'Managing Director, Apex Heating & Mechanical',
    },
    isPlaceholder: true,
  },
  {
    id: 'luxury-retail-conversion',
    slug: 'luxury-retail-ecommerce-transformation',
    title: 'Headless E-Commerce Migration & Speed Overhaul for British Artisan Brand',
    clientCategory: 'DTC Artisan Manufacturer',
    industry: 'Retail & E-Commerce',
    location: 'London & Nationwide',
    summary:
      'Migrated a legacy slow storefront to a bespoke headless commerce platform, cutting bounce rates and lifting checkout completion by 34%.',
    challenge:
      'A luxury British homewares brand with high average order values suffered severe performance degradation during seasonal marketing campaigns. Cart abandonment on mobile had reached 72% due to sluggish third-party script bloat and an awkward multi-step checkout sequence.',
    solution:
      'We replaced their legacy monolith with an ultra-lightweight headless architecture with instant client-side filtering and express Apple Pay / Google Pay one-click checkout. We coupled this with strict product Schema.org JSON-LD and category-level technical SEO.',
    metrics: [
      { value: '+34%', label: 'Mobile Checkout Completion', isPlaceholder: true },
      { value: '98/100', label: 'Google Lighthouse Performance', isPlaceholder: true },
      { value: '+118%', label: 'Organic Product Search Traffic', isPlaceholder: true },
    ],
    deliverables: [
      'Headless Storefront with Instant Filtering',
      'One-Click Express Checkout Integration',
      'Product Rich Snippet & Category Schema Tuning',
      'GA4 Enhanced E-Commerce Funnel Tracking',
    ],
    testimonialSnippet: {
      quote:
        'Our online store now feels like a high-end luxury showroom. The page transitions are instantaneous, and our mobile conversion rate jumped by a third within four weeks of launch.',
      author: 'Eleanor Vance',
      role: 'Head of Digital Commerce, St. James Heritage Ltd',
    },
    isPlaceholder: true,
  },
  {
    id: 'haulage-operations-portal',
    slug: 'haulage-logistics-digital-operations',
    title: 'Custom Logistics & Consignment Management Platform for Haulage Fleet',
    clientCategory: 'Midlands Freight Carrier',
    industry: 'Logistics & Transport',
    location: 'Birmingham & West Midlands',
    summary:
      'Built a centralised cloud operating system replacing paper manifests, manual rate calculations, and endless telephone "where is my driver" calls.',
    challenge:
      'Managing 45 HGVs and over 200 daily pallet shipments across the UK using Excel spreadsheets, whiteboards, and WhatsApp groups led to frequent billing disputes, delayed POD (proof of delivery) retrieval, and immense dispatcher stress.',
    solution:
      'Techonrise designed and deployed a bespoke cloud logistics portal paired with a cross-platform mobile driver app. Drivers capture electronic signatures and cargo photos offline, which instantly sync back to dispatch and trigger automated invoices in Xero upon delivery completion.',
    metrics: [
      { value: '4.5 hrs', label: 'Daily Dispatcher Time Saved', isPlaceholder: true },
      { value: '100%', label: 'Digital Proof of Delivery Compliance', isPlaceholder: true },
      { value: '< 2 min', label: 'Quote Generation Turnaround', isPlaceholder: true },
    ],
    deliverables: [
      'Custom React Cloud Operations Dashboard',
      'Cross-Platform Driver Mobile App (Offline GPS)',
      'Automated Rate Calculator & Xero Billing Sync',
      'Self-Service Consignment Tracking Portal',
    ],
    testimonialSnippet: {
      quote:
        'We eliminated paper job sheets entirely. Our dispatchers can see every vehicle in real time, and our corporate clients now track their freight directly instead of calling us constantly.',
      author: 'Marcus Bradley',
      role: 'Operations Director, Midland Freight Solutions',
    },
    isPlaceholder: true,
  },
  {
    id: 'healthcare-clinic-portal',
    slug: 'healthcare-clinic-booking-gdpr-portal',
    title: 'GDPR-Compliant Patient Intake & Direct Appointment Platform',
    clientCategory: 'Private Multi-Site Medical Group',
    industry: 'Healthcare & Wellness',
    location: 'Leeds & Yorkshire',
    summary:
      'Engineered an encrypted patient booking portal with automated triage that eliminated reception phone queues and drove a 160% surge in private consultations.',
    challenge:
      'A rapidly expanding private physiotherapy and diagnostic clinic was overwhelmed by telephone inquiries. Patients faced 15-minute wait times during peak morning hours, while clinic receptionists spent hours manually retyping medical history intake forms.',
    solution:
      'We built a HIPAA/UK GDPR-aligned digital intake and booking portal. Patients securely book appointments, complete medical history questionnaires online, and receive automated SMS reminders with clinic parking instructions and preparation advice.',
    metrics: [
      { value: '+160%', label: 'Direct Private Consultations', isPlaceholder: true },
      { value: '-65%', label: 'Inbound Administrative Calls', isPlaceholder: true },
      { value: 'Zero', label: 'Patient Intake Rekeying Required', isPlaceholder: true },
    ],
    deliverables: [
      'UK GDPR-Encrypted Patient Intake Architecture',
      'Automated Clinician Calendar Synchronization',
      'Dynamic SMS & Email Appointment Reminders',
      'Local Healthcare Search Authority Campaign',
    ],
    testimonialSnippet: {
      quote:
        'Patient satisfaction has reached an all-time high. The automated intake forms are encrypted and flow straight into our clinician notes before the patient even walks through the front door.',
      author: 'Dr. Sarah Jenkins',
      role: 'Clinical Director, Yorkshire Health Group',
    },
    isPlaceholder: true,
  },
  {
    id: 'property-construction-tender-hub',
    slug: 'commercial-property-tender-portal',
    title: 'Digital Tender Hub & Architectural Showcase Supporting £12M in Contract Wins',
    clientCategory: 'Commercial Main Contractor',
    industry: 'Property & Construction',
    location: 'Bristol & South West',
    summary:
      'Architected a high-impact digital project tender portal and subcontractor compliance hub that positioned the client to secure tier-1 commercial frameworks.',
    challenge:
      'The contractor competed against larger national firms for public sector and institutional commercial development tenders. Their outdated digital presence made them look like a small subcontractor rather than an institutional tier-1 delivery partner.',
    solution:
      'We designed an interactive project portfolio with high-resolution 3D walkthrough embeddings, case specification PDFs, and a secure subcontractor portal for uploading CSCS cards, insurance documents, and RAMS assessments.',
    metrics: [
      { value: '£12M', label: 'Tender Contracts Awarded', isPlaceholder: true },
      { value: '88%', label: 'Subcontractor Compliance Verification', isPlaceholder: true },
      { value: '4x', label: 'Architect & Surveyor Referral Inquiries', isPlaceholder: true },
    ],
    deliverables: [
      'Interactive Project Showcase & Case Library',
      'Subcontractor Compliance & RAMS Upload Portal',
      'Private Investor Tender Room with Watermarking',
      'Architectural Brand Design System in Figma',
    ],
    testimonialSnippet: {
      quote:
        'The tender portal was instrumental in winning our largest regional framework to date. Procurement directors specifically commented on how thorough and institutional our documentation was.',
      author: 'Alistair Campbell',
      role: 'Commercial Director, Apex Build & Civil Ltd',
    },
    isPlaceholder: true,
  },
  {
    id: 'b2b-compliance-saas-mvp',
    slug: 'enterprise-compliance-saas-mvp',
    title: 'Enterprise Compliance SaaS MVP Delivered in 7 Weeks from Specification',
    clientCategory: 'Venture-Backed RegTech Startup',
    industry: 'Startups & SaaS',
    location: 'Edinburgh & Scotland',
    summary:
      'Engineered a scalable multi-tenant compliance tracking SaaS MVP with Stripe billing, enabling the founding team to close 5 enterprise pilot contracts.',
    challenge:
      'Founders had secured early angel backing but were stalling on software engineering. Contracted developers were already 3 months behind schedule, and the founders risked losing their initial enterprise pilot commitments.',
    solution:
      'Techonrise stepped in as a technical execution team. We rewrote the core architecture using React, Node.js, and PostgreSQL, implemented multi-tenant workspace separation, integrated Stripe subscription billing, and launched the validated platform in under 7 weeks.',
    metrics: [
      { value: '7 Weeks', label: 'From Discovery to Production Launch', isPlaceholder: true },
      { value: '5/5', label: 'Closed Enterprise Pilot Commitments', isPlaceholder: true },
      { value: '100%', label: 'Source Code & Database IP Ownership', isPlaceholder: true },
    ],
    deliverables: [
      'Multi-Tenant PostgreSQL Architecture',
      'Stripe Billing & Tiered Subscription Engine',
      'Role-Based Access Control (RBAC) & Audit Logs',
      'Automated GitHub Actions CI/CD Pipeline',
    ],
    testimonialSnippet: {
      quote:
        'Techonrise saved our business. They delivered an institutional MVP in 7 weeks that passed stringent enterprise security reviews. We could not have asked for a better engineering partner.',
      author: 'Callum MacLeod',
      role: 'Co-Founder & CEO, CertifySafe Technologies',
    },
    isPlaceholder: true,
  },
];
