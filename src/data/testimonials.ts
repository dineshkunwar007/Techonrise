export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  quote: string;
  outcomeMetric: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'David Harrison',
    role: 'Managing Director',
    company: 'Apex Heating & Mechanical Ltd',
    industry: 'Trades & Home Services',
    location: 'Manchester',
    quote:
      'Techonrise took us from throwing money away on directory ads to dominating commercial contract enquiries across Greater Manchester. The automated quote flow alone saves our desk team 15 hours every week.',
    outcomeMetric: '+240% Qualified Inbound Commercial Leads',
    isPlaceholder: true,
  },
  {
    id: 'test-2',
    author: 'Eleanor Vance',
    role: 'Head of Digital Commerce',
    company: 'St. James Heritage Ltd',
    industry: 'Retail & E-Commerce',
    location: 'London',
    quote:
      'Our online store now feels like a high-end luxury showroom. The page transitions are instantaneous, and our mobile conversion rate jumped by a third within four weeks of launch.',
    outcomeMetric: '+34% Mobile Checkout Uplift',
    isPlaceholder: true,
  },
  {
    id: 'test-3',
    author: 'Marcus Bradley',
    role: 'Operations Director',
    company: 'Midland Freight Solutions',
    industry: 'Logistics & Transport',
    location: 'Birmingham',
    quote:
      'We eliminated paper job sheets entirely. Our dispatchers can see every vehicle in real time, and our corporate clients now track their freight directly instead of calling us constantly.',
    outcomeMetric: '4.5 Hours Saved Daily in Dispatch Admin',
    isPlaceholder: true,
  },
  {
    id: 'test-4',
    author: 'Dr. Sarah Jenkins',
    role: 'Clinical Director',
    company: 'Yorkshire Health Diagnostics',
    industry: 'Healthcare & Wellness',
    location: 'Leeds',
    quote:
      'Patient satisfaction has reached an all-time high. The automated intake forms are encrypted and flow straight into our clinician notes before the patient even walks through the front door.',
    outcomeMetric: '+160% Direct Online Bookings',
    isPlaceholder: true,
  },
];
