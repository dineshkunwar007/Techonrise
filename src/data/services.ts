export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  categoryNumber: string;
  tagline: string;
  overview: string;
  businessImpact: string;
  outcomes: string[];
  subServices: SubService[];
  idealClients: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  relatedIndustries: string[];
  metaTitle: string;
  metaDescription: string;
  isPlaceholder: boolean;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'seo-growth',
    slug: 'seo-growth',
    title: 'SEO & Growth Marketing',
    categoryNumber: '01',
    tagline: 'Technical visibility, high-intent organic traffic, and conversion-engineered acquisition',
    overview:
      'We turn organic search and targeted performance marketing into predictable commercial engines. By pairing rigorous technical audits with entity-based content architecture, programmatic indexation, and answer-engine optimisation, we ensure your business ranks prominently across Google search, local map packs, and emerging AI query systems.',
    businessImpact:
      'Increases qualified inbound commercial deal flow, lowers customer acquisition costs (CAC), and establishes compounding digital equity that reduces over-reliance on paid advertising.',
    outcomes: [
      'Up to 3x increase in qualified commercial inbound enquiries within 6 months',
      'Top 3 Google Map Pack rankings across primary local service territories',
      'Entity citation visibility across Perplexity, SearchGPT, Claude, and Google AI Overviews',
      'Core Web Vitals scores guaranteed 95+ on Google Lighthouse mobile audits',
    ],
    subServices: [
      {
        id: 'technical-seo',
        slug: 'technical-seo',
        title: 'Technical & Architecture SEO',
        shortDesc: 'Core Web Vitals optimisation, crawl budget hygiene, indexation architecture, and structured data.',
        deliverables: ['Full technical crawl audit & remediation', 'Schema.org JSON-LD graph architecture', 'Lighthouse 95+ performance tuning', 'Sitemap & canonical consolidation'],
      },
      {
        id: 'on-page-content',
        slug: 'on-page-content',
        title: 'On-Page SEO & Content Strategy',
        shortDesc: 'Topical authority clusters, entity optimisation, and high-conversion commercial landing pages.',
        deliverables: ['Topical keyword entity maps', 'Commercial landing page copywriting', 'Internal link graph optimisation', 'Heading & metadata hierarchy models'],
      },
      {
        id: 'local-seo-gbp',
        slug: 'local-seo-gbp',
        title: 'Local SEO & Google Business Profile',
        shortDesc: 'Dominate regional searches, map pack rankings, and local service intent across UK territories.',
        deliverables: ['GBP profile audit & listing synchronization', 'Local citation network synchronization', 'Automated review generation workflows', 'Territory-targeted commercial pages'],
      },
      {
        id: 'ppc-lead-gen',
        slug: 'ppc-lead-gen',
        title: 'PPC & Targeted Lead Generation',
        shortDesc: 'High-intent Google Ads and LinkedIn campaigns configured for maximum commercial return.',
        deliverables: ['High-intent search campaign configuration', 'Negative keyword management lists', 'Ad copy testing & conversion tracking', 'Click fraud prevention & automated bidding rules'],
      },
      {
        id: 'cro-analytics',
        slug: 'cro-analytics',
        title: 'Conversion Rate Optimisation & GA4',
        shortDesc: 'Turn existing traffic into paying enquiries through user journey testing and analytics audit.',
        deliverables: ['Google Analytics 4 event attribution audit', 'Drop-off funnel & journey diagnostics', 'Friction-reducing form design', 'A/B landing page conversion testing'],
      },
      {
        id: 'ai-search-aeo',
        slug: 'ai-search-aeo',
        title: 'AI Search & Answer-Engine Optimisation (AEO)',
        shortDesc: 'Position your brand to be cited by Perplexity, SearchGPT, Claude, and Google AI Overviews.',
        deliverables: ['Entity citation audits & brand authority graph', 'llms.txt manifest configuration', 'Direct answer paragraph structuring', 'Knowledge graph synchronization'],
      },
      {
        id: 'programmatic-seo',
        slug: 'programmatic-seo',
        title: 'Programmatic SEO & Catalog Scaling',
        shortDesc: 'Scale thousands of high-intent, unique programmatic landing pages driven by structured database records.',
        deliverables: ['Database-driven template design', 'Unique entity content generation logic', 'Automated internal linking graphs', 'Indexation monitoring & cannibalisation guards'],
      },
    ],
    idealClients: [
      'UK service firms seeking high-intent local and regional commercial enquiries',
      'B2B professional practices transitioning from word-of-mouth to predictable inbound',
      'E-commerce brands with declining return on ad spend requiring organic compounding',
    ],
    processSteps: [
      { title: 'Baseline Audit', description: 'Comprehensive audit of current indexation, search console performance, and competitor gaps.' },
      { title: 'Technical Remediation', description: 'Immediate fixing of crawl bottlenecks, schema issues, and Core Web Vitals performance.' },
      { title: 'Content & Authority Sprint', description: 'Publishing entity-mapped landing pages and targeted regional content.' },
      { title: 'Measurement & Scaling', description: 'Weekly ranking tracking, lead attribution reporting, and ongoing conversion tuning.' },
    ],
    faqs: [
      {
        question: 'How quickly can we expect to see results from SEO?',
        answer: 'Technical remediation and local Google Business Profile improvements often yield measurable rank improvements within 4 to 8 weeks. Compounding organic authority across competitive national terms typically matures over 3 to 6 months.',
      },
      {
        question: 'Do you guarantee number 1 rankings on Google?',
        answer: 'No reputable technical agency guarantees arbitrary rank positions due to Google algorithm dynamics. Instead, we guarantee rigorous adherence to search guidelines, measurable traffic quality, and commercial enquiry growth.',
      },
    ],
    relatedServices: ['websites-ecommerce', 'ai-automation'],
    relatedIndustries: ['trades-home-services', 'professional-services', 'healthcare-wellness'],
    metaTitle: 'Technical SEO Agency UK | Answer-Engine Optimisation & Search Authority',
    metaDescription: 'Techonrise delivers technical SEO, Core Web Vitals tuning, answer-engine optimisation (AEO), and local search domination for ambitious UK companies.',
    isPlaceholder: true,
  },
  {
    id: 'websites-ecommerce',
    slug: 'websites-ecommerce',
    title: 'Websites & E-Commerce',
    categoryNumber: '02',
    tagline: 'High-performance digital flagships engineered for speed, conversions, and brand authority',
    overview:
      'We design and build bespoke web experiences that look exceptional and perform effortlessly. Free from bloated themes and generic templates, our websites are custom-coded with modern frameworks to achieve sub-second load times, flawless responsiveness, and frictionless enquiry paths.',
    businessImpact:
      'Elevates market perception, dramatically improves lead conversion rates, and ensures accessibility across every device viewport.',
    outcomes: [
      'Sub-second Largest Contentful Paint (LCP < 0.8s) on mobile devices',
      '30% to 50% increase in lead form completion and checkout conversions',
      'Full WCAG 2.2 AA accessibility and cross-device testing compliance',
      'Zero bloated plugins or vulnerability-prone third-party theme builders',
    ],
    subServices: [
      {
        id: 'bespoke-business-websites',
        slug: 'bespoke-business-websites',
        title: 'Bespoke Business Websites',
        shortDesc: 'Custom-coded corporate and service websites tailored to your unique commercial positioning.',
        deliverables: ['Modular component architecture', 'Fluid responsive layout (320px to 4K)', 'WCAG 2.2 AA accessibility compliance', 'SEO-first static delivery & instant routing'],
      },
      {
        id: 'high-converting-landing-pages',
        slug: 'high-converting-landing-pages',
        title: 'High-Converting Landing Pages',
        shortDesc: 'Ultra-fast campaign pages engineered for paid traffic and product launches.',
        deliverables: ['Single-focus conversion layouts', 'Sub-second LCP performance', 'Interactive quote calculators & wizards', 'Real-time CRM webhook routing'],
      },
      {
        id: 'ecommerce-platforms',
        slug: 'ecommerce-platforms',
        title: 'E-Commerce Platforms & Stores',
        shortDesc: 'Shopify Plus and headless commerce stores with custom filtering and express checkout.',
        deliverables: ['Catalog architecture & variants schema', 'One-click express checkout integrations', 'Real-time warehouse inventory sync hooks', 'Custom merchandising blocks & bundles'],
      },
      {
        id: 'ui-ux-design-redesigns',
        slug: 'ui-ux-design-redesigns',
        title: 'UI/UX Design Systems & Redesigns',
        shortDesc: 'Comprehensive Figma design systems, interactive prototypes, and modern interface overhauls.',
        deliverables: ['Tokenised Figma component library', 'Interactive motion prototypes', 'User journey wireframes & drop-off analysis', 'Engineering handoff specifications'],
      },
      {
        id: 'website-maintenance-retainers',
        slug: 'website-maintenance-retainers',
        title: 'Proactive Maintenance & Retainers',
        shortDesc: 'Continuous security patching, uptime verification, performance reviews, and monthly enhancements.',
        deliverables: ['24/7 synthetic uptime monitoring', 'Dependency & security patching', 'Dedicated monthly engineering sprint hours', 'Quarterly roadmap reviews'],
      },
    ],
    idealClients: [
      'Established businesses suffering from slow, outdated WordPress or legacy templates',
      'Fast-growing ventures ready to step up to an institutional, design-led digital presence',
      'Direct-to-consumer and B2B sellers demanding custom cart and payment flows',
    ],
    processSteps: [
      { title: 'Discovery & UX Architecture', description: 'Mapping information hierarchy, user journeys, and technical scope.' },
      { title: 'Design System & Prototyping', description: 'Crafting responsive layouts, typographic rhythm, and design tokens.' },
      { title: 'Production Engineering', description: 'Clean TypeScript component development with automated builds.' },
      { title: 'Deployment & Launch Testing', description: 'DNS cutover, SSL verification, 301 redirect validation, and analytics testing.' },
    ],
    faqs: [
      {
        question: 'Will we be able to edit page content ourselves?',
        answer: 'Yes. We integrate clean headless CMS architectures or provide typed structured data files with intuitive content controls so non-technical staff can update copy, case studies, and team profiles easily.',
      },
      {
        question: 'How do you ensure our existing SEO is protected during a redesign?',
        answer: 'We map every existing URL to its exact replacement, implement verified 301 redirects, replicate critical meta tags, and test sitemaps before DNS cutover to preserve search equity.',
      },
    ],
    relatedServices: ['seo-growth', 'software-apps'],
    relatedIndustries: ['retail-ecommerce', 'hospitality', 'professional-services'],
    metaTitle: 'Web Development Company UK | Bespoke High-Speed Digital Flagships',
    metaDescription: 'Techonrise crafts bespoke, sub-second business websites, headless e-commerce stores, and high-converting landing pages built with React and TypeScript.',
    isPlaceholder: true,
  },
  {
    id: 'software-apps',
    slug: 'software-apps',
    title: 'Custom Software & Mobile Apps',
    categoryNumber: '03',
    tagline: 'Internal operational platforms, custom SaaS portals, and cross-platform mobile tools',
    overview:
      'When off-the-shelf software falls short of your operational requirements, we engineer bespoke digital platforms. From customer portals and operational dashboards to field-service mobile applications, we build durable tools that streamline complex processes.',
    businessImpact:
      'Eliminates manual spreadsheets, automates operational handoffs, unifies disparate databases, and creates proprietary digital assets.',
    outcomes: [
      'Elimination of manual spreadsheets and paper-based tracking across operations',
      '100% intellectual property ownership of bespoke codebases with zero license fees',
      'Offline-first mobile synchronization allowing teams to work in remote coverage zones',
      'Role-based security controls protecting sensitive commercial and customer records',
    ],
    subServices: [
      {
        id: 'custom-web-applications',
        slug: 'custom-web-applications',
        title: 'Custom Web Applications',
        shortDesc: 'Bespoke web platforms engineered with React, Next.js, Node, and secure SQL databases.',
        deliverables: ['Full-stack modular codebases', 'Role-based access control (RBAC)', 'Relational database schema design', 'Comprehensive REST/GraphQL APIs'],
      },
      {
        id: 'saas-platforms',
        slug: 'saas-platforms',
        title: 'SaaS Platforms & Customer Portals',
        shortDesc: 'Multi-tenant subscription software, self-serve client portals, and recurring billing systems.',
        deliverables: ['Stripe billing & subscription tiers', 'Multi-tenant data isolation', 'Team management & invites', 'Usage telemetry & analytics'],
      },
      {
        id: 'crm-internal-systems',
        slug: 'crm-internal-systems',
        title: 'CRM & Internal Operating Tools',
        shortDesc: 'Custom pipeline management, inventory trackers, and staff scheduling software.',
        deliverables: ['Automated pipeline views', 'Document generation & signing', 'Custom audit log histories', 'Two-factor authentication (2FA)'],
      },
      {
        id: 'mobile-apps-ios-android',
        slug: 'mobile-apps-ios-android',
        title: 'iOS & Android Mobile Applications',
        shortDesc: 'Cross-platform mobile applications with offline storage and push notifications.',
        deliverables: ['Native iOS & Android builds', 'Offline-first sync engine', 'Push notification pipelines', 'App Store & Google Play compliance'],
      },
      {
        id: 'field-service-operations',
        slug: 'field-service-operations',
        title: 'Field-Service & Operations Apps',
        shortDesc: 'Digital job sheets, barcode scanning, signature capture, and fleet dispatch apps.',
        deliverables: ['GPS dispatch tracking', 'Digital signature capture', 'Camera photo proof attachments', 'Instant PDF quote generation'],
      },
      {
        id: 'fractional-cto-consulting',
        slug: 'fractional-cto-consulting',
        title: 'Digital Transformation & Fractional CTO',
        shortDesc: 'Strategic architectural audits, legacy project rescue, vendor evaluations, and technical roadmapping.',
        deliverables: ['Codebase health audit & rescue roadmap', 'Database entity modeling & architecture plan', 'Procurement & vendor evaluation', 'Executive board technical representation'],
      },
    ],
    idealClients: [
      'Operations-heavy enterprises bottlenecked by disjointed SaaS subscriptions and spreadsheets',
      'Founders building Minimum Viable Products (MVPs) or enterprise-grade software products',
      'Field-service companies managing on-site engineers, drivers, or inspectors',
    ],
    processSteps: [
      { title: 'Technical Specification', description: 'Database entity modeling, API design, user roles, and security compliance.' },
      { title: 'Sprint Architecture', description: 'Two-week agile development sprints with interactive staging environments.' },
      { title: 'Quality Assurance & Testing', description: 'Automated end-to-end tests, edge-case validation, and load simulations.' },
      { title: 'Production Rollout', description: 'Zero-downtime database migrations, staff onboarding guides, and monitoring.' },
    ],
    faqs: [
      {
        question: 'Do we own the intellectual property (IP) and source code?',
        answer: 'Absolutely. Upon project completion and account settlement, 100% of the custom source code, architecture, and associated assets belong entirely to your company.',
      },
      {
        question: 'Can your software integrate with our existing accounting or ERP package?',
        answer: 'Yes. We frequently connect custom platforms into Xero, QuickBooks, Sage, Microsoft Dynamics, Salesforce, and bespoke legacy internal databases via secure APIs.',
      },
    ],
    relatedServices: ['hosting-infrastructure', 'ai-automation'],
    relatedIndustries: ['logistics-transport', 'startups-saas', 'property-construction'],
    metaTitle: 'Custom Software Development & Mobile Apps UK | Techonrise',
    metaDescription: 'Techonrise engineers custom web applications, SaaS platforms, client portals, and iOS/Android mobile apps tailored for UK businesses.',
    isPlaceholder: true,
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & Workflow Automation',
    categoryNumber: '04',
    tagline: 'Practical automation pipelines, intelligent enquiry triage, and document processing',
    overview:
      'We cut through the AI hype to implement practical automations that save hundreds of staff hours every month. We connect your inbound leads, customer support, and administrative pipelines into reliable, automated workflows that run 24 hours a day.',
    businessImpact:
      'Reduces lead response times from hours to seconds, eliminates repetitive administrative data entry, and accelerates operational velocity.',
    outcomes: [
      'Over 20 hours of administrative rekeying recovered per week for desk teams',
      'Inbound lead response times cut from hours to under 60 seconds',
      'Deterministic document extraction accuracy of 99%+ with human-in-the-loop review queues',
      'Zero sensitive customer data leaked to public LLM training datasets',
    ],
    subServices: [
      {
        id: 'lead-qualification-automation',
        slug: 'lead-qualification-automation',
        title: 'Lead Qualification & Instant Triage',
        shortDesc: 'Intelligent multi-channel routing that qualifies inbound leads and books discovery calls instantly.',
        deliverables: ['Instant SMS & email triage', 'Lead scoring algorithms', 'Automated calendar booking', 'CRM record enrichment'],
      },
      {
        id: 'ai-chatbots-assistants',
        slug: 'ai-chatbots-assistants',
        title: 'Custom AI Chatbots & Support Agents',
        shortDesc: 'Grounded virtual assistants trained exclusively on your business documentation and policies.',
        deliverables: ['Custom knowledge retrieval (RAG)', 'Hallucination guardrails', 'Seamless human escalation triggers', 'Live chat widget integration'],
      },
      {
        id: 'document-processing-extraction',
        slug: 'document-processing-extraction',
        title: 'Document Processing & Data Extraction',
        shortDesc: 'Automated parsing of PDF invoices, technical specifications, receipts, and client intake forms.',
        deliverables: ['Structured JSON extraction', 'Verification review queues', 'Automatic accounting entry sync', 'Secure encrypted storage'],
      },
      {
        id: 'crm-workflow-automation',
        slug: 'crm-workflow-automation',
        title: 'End-to-End CRM Workflow Automation',
        shortDesc: 'Automate post-sales onboarding, contract dispatch, notification pings, and renewal reminders.',
        deliverables: ['Make / Zapier / n8n orchestrations', 'Slack & Teams notification bots', 'E-signature dispatch triggers', 'Customer health alerts'],
      },
      {
        id: 'internal-operations-assistants',
        slug: 'internal-operations-assistants',
        title: 'Internal Staff AI Assistants',
        shortDesc: 'Internal Slack/Teams assistants that answer team questions from company handbooks and SOPs.',
        deliverables: ['Company SOP semantic index', 'Private role-based permissions', 'Staff search console', 'Usage & query analytics'],
      },
    ],
    idealClients: [
      'Service businesses overwhelmed by repetitive pre-sales enquiries and qualification emails',
      'Finance and operations teams spending valuable hours manually rekeying document data',
      'Growing companies seeking to double capacity without multiplying administrative headcount',
    ],
    processSteps: [
      { title: 'Process Mapping', description: 'Identifying high-friction repetitive touchpoints and calculating time-recovery potential.' },
      { title: 'Pipeline Prototyping', description: 'Configuring sandbox webhooks, data transformation logic, and verification checkpoints.' },
      { title: 'Guardrail Enforcement', description: 'Implementing strict validation filters to prevent hallucinated or erroneous outputs.' },
      { title: 'Live Integration', description: 'Deploying into live communication channels with real-time error alerts.' },
    ],
    faqs: [
      {
        question: 'Will AI send inaccurate information to our clients?',
        answer: 'We enforce deterministic guardrails and strict temperature parameters. The AI operates solely on your vetted knowledge repository, and flags any ambiguous inquiry for human review rather than guessing.',
      },
      {
        question: 'Is our sensitive company data used to train public AI models?',
        answer: 'No. We only use enterprise API contracts where provider policies explicitly prohibit training public models on your private data, fully adhering to UK GDPR principles.',
      },
    ],
    relatedServices: ['software-apps', 'seo-growth'],
    relatedIndustries: ['trades-home-services', 'healthcare-wellness', 'logistics-transport'],
    metaTitle: 'AI Automation Services UK | Intelligent Workflow & Triage Pipelines',
    metaDescription: 'Eliminate repetitive administrative tasks. Techonrise builds practical AI lead qualification, document extraction, and CRM automation pipelines for UK firms.',
    isPlaceholder: true,
  },
  {
    id: 'hosting-infrastructure',
    slug: 'hosting-infrastructure',
    title: 'Hosting & Cloud Infrastructure',
    categoryNumber: '05',
    tagline: 'High-availability UK & European deployments, hardened security, and DevOps management',
    overview:
      'A great digital platform requires resilient, fast, and secure infrastructure. We architect, deploy, and manage dedicated cloud environments that deliver maximum uptime, automated offsite backups, and strict compliance with UK data security best practices.',
    businessImpact:
      'Eliminates unexpected downtime, safeguards proprietary data against ransomware and breaches, and ensures lightning-fast delivery.',
    outcomes: [
      '99.95% uptime service level agreement backed by synthetic 60-second monitoring',
      'Guaranteed UK data residency in enterprise London and Manchester facilities',
      'Automated daily snapshot backups stored in air-gapped, encrypted offsite vaults',
      'Technical support and infrastructure hardening aligned with Cyber Essentials readiness',
    ],
    subServices: [
      {
        id: 'managed-cloud-hosting',
        slug: 'managed-cloud-hosting',
        title: 'Managed Cloud Hosting & Deployment',
        shortDesc: 'High-speed cloud servers hosted in London and European enterprise data centres.',
        deliverables: ['UK/EU data residency compliance', 'Automated horizontal server scaling', 'Global edge CDN asset caching', 'Zero-downtime deployment pipelines'],
      },
      {
        id: 'security-hardening-compliance',
        slug: 'security-hardening-compliance',
        title: 'Security Hardening & Cyber Readiness',
        shortDesc: 'Web application firewalls (WAF), DDoS protection, and Cyber Essentials readiness support.',
        deliverables: ['Cyber Essentials readiness assessment', 'Cloudflare enterprise WAF rules', 'Automated vulnerability scanning', 'Continuous SSL/TLS cipher rotation'],
      },
      {
        id: 'devops-ci-cd-pipelines',
        slug: 'devops-ci-cd-pipelines',
        title: 'DevOps & Automated CI/CD Pipelines',
        shortDesc: 'Automated GitHub Actions deployment workflows with staging environments.',
        deliverables: ['Automated test execution on push', 'Branch preview environments for QA', 'Automated rollback mechanisms', 'Infrastructure-as-code scripts'],
      },
      {
        id: 'monitoring-backups-disaster-recovery',
        slug: 'monitoring-backups-disaster-recovery',
        title: '24/7 Monitoring & Disaster Recovery',
        shortDesc: 'Round-the-clock uptime telemetry with automated snapshot backups to isolated vaults.',
        deliverables: ['Real-time synthetic endpoint monitoring', 'Daily encrypted snapshot backups', 'Documented Disaster Recovery (RPO/RTO)', 'On-call engineer incident alerting'],
      },
      {
        id: 'gdpr-privacy-implementation',
        slug: 'gdpr-privacy-implementation',
        title: 'GDPR-Focused Privacy Support',
        shortDesc: 'Cookie consent implementation, data retention scripts, and secure audit logging support.',
        deliverables: ['Google Consent Mode v2 banner setup', 'Data subject access & deletion scripts', 'AES-256 database encryption at rest', 'Privacy architecture documentation'],
      },
    ],
    idealClients: [
      'Companies handling sensitive client data requiring UK/EU data residency guarantees',
      'E-commerce stores and mission-critical portals where downtime directly translates into lost revenue',
      'Businesses preparing for enterprise vendor procurement and security questionnaire reviews',
    ],
    processSteps: [
      { title: 'Infrastructure Audit', description: 'Reviewing current server response times, security postures, and single points of failure.' },
      { title: 'Architecture Blueprints', description: 'Designing containerised, resilient cloud topologies with isolated databases.' },
      { title: 'Migration & Hardening', description: 'Migrating data without service disruption and applying enterprise firewall policies.' },
      { title: 'Continuous Care', description: 'Active 24/7 monitoring, patch management, and quarterly disaster drill testing.' },
    ],
    faqs: [
      {
        question: 'Where will our data and servers be physically located?',
        answer: 'By default, we provision all cloud instances in enterprise UK facilities (London / Manchester) or European regions (Dublin / Frankfurt) to ensure full compliance with UK GDPR and low network latency.',
      },
      {
        question: 'What happens if our site or platform experiences a server outage?',
        answer: 'Our synthetic monitoring monitors endpoints every 60 seconds. In the rare event of an anomaly, automated health checks trigger server restarts or failovers to hot standby instances, immediately notifying our on-call engineers.',
      },
    ],
    relatedServices: ['software-apps', 'websites-ecommerce'],
    relatedIndustries: ['professional-services', 'healthcare-wellness', 'retail-ecommerce'],
    metaTitle: 'Managed UK Cloud Hosting & DevOps | Enterprise Uptime & Security',
    metaDescription: 'Resilient cloud hosting with UK data residency, automated offsite backups, Cyber Essentials readiness, and 24/7 infrastructure monitoring from Techonrise.',
    isPlaceholder: true,
  },
];
