export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'technology' | 'pricing-governance';
  isPlaceholder: boolean;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What exact services does Techonrise provide under one roof?',
    answer:
      'Techonrise is an integrated digital transformation and growth partner. We combine technical SEO & growth marketing, custom websites & e-commerce engineering, bespoke software & cross-platform mobile apps, practical AI & workflow automations, and managed UK cloud infrastructure. Rather than managing five disconnected vendors, our clients benefit from marketing, engineering, and operations working seamlessly together.',
    isPlaceholder: true,
  },
  {
    id: 'faq-2',
    category: 'services',
    question: 'How do you build websites differently from typical WordPress design agencies?',
    answer:
      'We do not use bloated multi-purpose themes or sluggish page builders that degrade Core Web Vitals. We engineer bespoke, component-driven web platforms using modern TypeScript and frameworks such as Next.js and React. This guarantees sub-second load times, institutional UI/UX design, strict WCAG 2.2 AA accessibility, and clean search indexation.',
    isPlaceholder: true,
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'What happens to our SEO when our new website launches?',
    answer:
      'We treat migration and launch with clinical precision. Prior to DNS cutover, we conduct complete 301 URL mapping to safeguard existing organic rankings, replicate critical metadata, and test Google Search Console sitemaps. Following launch, we submit updated XML sitemaps, monitor Core Web Vitals in real time, and execute ongoing topical authority sprints.',
    isPlaceholder: true,
  },
  {
    id: 'faq-4',
    category: 'technology',
    question: 'How does AI automation actually help an existing, non-tech business?',
    answer:
      'We implement practical, revenue-generating automations rather than speculative experiments. Common implementations include instant multi-channel lead qualification (responding to customer requests within seconds), automated document and invoice extraction into accounting software, and internal AI assistants that answer staff queries from company handbooks and SOPs.',
    isPlaceholder: true,
  },
  {
    id: 'faq-5',
    category: 'technology',
    question: 'Can you integrate custom software with our existing accounting or ERP packages?',
    answer:
      'Yes. Our full-stack engineering team builds robust API integrations connecting custom client portals and field apps with Xero, QuickBooks, Sage, Microsoft Dynamics, Salesforce, Stripe, and legacy internal SQL databases without disrupting your daily operations.',
    isPlaceholder: true,
  },
  {
    id: 'faq-6',
    category: 'technology',
    question: 'Where will our data and hosting infrastructure be physically located?',
    answer:
      'All our cloud deployments run on enterprise tier infrastructure hosted within the United Kingdom (London / Manchester) or European Union (Dublin / Frankfurt) facilities. This ensures ultra-fast local latency for UK users and strict compliance with UK GDPR residency mandates.',
    isPlaceholder: true,
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'Do you work with startups, or only established enterprise companies?',
    answer:
      'We partner with ambitious organizations across both stages: growth-stage founders and startups looking to rapidly engineer and launch validated MVPs, as well as established SMEs and enterprise firms seeking to modernise outdated manual systems, redesign legacy digital flagships, and scale organic inbound leads.',
    isPlaceholder: true,
  },
  {
    id: 'faq-8',
    category: 'general',
    question: 'How does a typical project start and what is the discovery process?',
    answer:
      'Every project begins with a structured technical discovery session. We review your current technology stack, map commercial conversion bottlenecks, define user personas, and produce a clear architectural specification. Once scope and milestones are agreed, we deliver in transparent two-week agile development sprints with private staging links.',
    isPlaceholder: true,
  },
  {
    id: 'faq-9',
    category: 'pricing-governance',
    question: 'What is your pricing approach: fixed-price quotes or monthly retainers?',
    answer:
      'We provide transparent fixed-price quotes for scoped standalone projects (e.g., bespoke websites, MVPs, technical audits) with milestone deliverables. For continuous growth, SEO authority, ongoing software engineering, and infrastructure care, we offer dedicated monthly retainer tiers tailored to your required sprint capacity.',
    isPlaceholder: true,
  },
  {
    id: 'faq-10',
    category: 'pricing-governance',
    question: 'Do we own the source code, design assets, and intellectual property (IP)?',
    answer:
      'Yes. Upon project completion and payment settlement, 100% of the custom source code, design libraries, schemas, and intellectual property belong entirely to your company. We believe in building proprietary value for our clients, not locking you into proprietary agency silos.',
    isPlaceholder: true,
  },
];
