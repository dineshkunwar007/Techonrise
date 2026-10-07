export interface LocationData {
  city: string;
  slug: string;
  region: string;
  heroHeadline: string;
  localIntro: string;
  serviceEmphasis: string;
  keySectorsServed: string[];
  nearbyAreasCovered: string[];
  localFaqs: { question: string; answer: string }[];
  addressSnippet: string;
  isHeadquarters?: boolean;
  isPlaceholder: boolean;
}

export const LOCATIONS_DATA: LocationData[] = [
  {
    city: 'Manchester',
    slug: 'manchester',
    region: 'North West & Greater Manchester',
    heroHeadline: 'Manchester’s Leading Digital Transformation, SEO & Software Partner',
    localIntro:
      'Headquartered on London Road in Manchester, Techonrise powers growth for the North West’s most ambitious businesses. From Oxford Road tech corridor scale-ups to industrial operators across Trafford Park and MediaCityUK creative firms, we engineer bespoke websites, software systems, and search authority that deliver tangible commercial revenue.',
    serviceEmphasis:
      'Strategic full-service digital transformation, technical SEO audits, custom cloud portals, and automated back-office workflows for northern enterprise leaders.',
    keySectorsServed: ['Media & Digital Agencies', 'Commercial Property & Logistics', 'Fintech & eCommerce', 'Advanced Manufacturing'],
    nearbyAreasCovered: ['Salford & MediaCityUK', 'Stockport', 'Trafford & Altrincham', 'Bolton', 'Rochdale', 'Oldham', 'Wilmslow & Cheshire'],
    localFaqs: [
      {
        question: 'Where is your Manchester office located?',
        answer: 'Our main office is situated at 124 Innovation House, London Road, Manchester, M1 4AB. We regularly host discovery meetings and strategy sessions with clients across the city centre.',
      },
      {
        question: 'Do you offer in-person workshops for Greater Manchester businesses?',
        answer: 'Yes. For Manchester and North West clients, our technical leads and directors conduct in-person digital discovery, architecture planning, and quarterly review workshops.',
      },
    ],
    addressSnippet: '124 Innovation House, London Road, Manchester, M1 4AB',
    isHeadquarters: true,
    isPlaceholder: true,
  },
  {
    city: 'London',
    slug: 'london',
    region: 'Greater London & South East',
    heroHeadline: 'Enterprise Software, High-Value SEO & AI Systems for London Businesses',
    localIntro:
      'In Europe’s most competitive commercial landscape, London businesses require digital systems that operate at peak velocity. From City financial services and Chancery Lane legal practices to Shoreditch tech startups and Mayfair luxury retailers, Techonrise delivers institutional-grade web engineering and search visibility that cuts through capital market noise.',
    serviceEmphasis:
      'High-intent organic search dominance in hyper-competitive markets, secure client portals, Cyber Essentials readiness, and automated workflow orchestrations.',
    keySectorsServed: ['Corporate Legal & Financial Services', 'Luxury & High-AOV Retail', 'Tech Startups & Venture Studios', 'B2B Professional Advisory'],
    nearbyAreasCovered: ['City of London', 'Canary Wharf', 'Westminster & Mayfair', 'Shoreditch & Old Street', 'King’s Cross', 'Richmond', 'Croydon'],
    localFaqs: [
      {
        question: 'How do you compete in London’s ultra-competitive SEO landscape?',
        answer: 'We bypass generic keyword stuffing by building deep topical authority clusters, strict entity schema, and speed-optimised digital flagships that outperform sluggish legacy corporate sites.',
      },
      {
        question: 'Can you work with London-based enterprise procurement teams?',
        answer: 'Yes. We support formal procurement evaluations, including NDA execution, vendor security questionnaires, and Cyber Essentials readiness documentation.',
      },
    ],
    addressSnippet: 'Covering Central London, the City, Canary Wharf, and greater boroughs via our UK-wide engineering team.',
    isPlaceholder: true,
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    heroHeadline: 'Modernising Birmingham’s Industrial, Logistics & Service Economy',
    localIntro:
      'At the beating heart of the West Midlands, Birmingham blends deep industrial manufacturing heritage with a booming digital and professional services economy. Techonrise helps West Midlands businesses replace legacy paper-based operations with custom cloud software, mobile field applications, and targeted regional SEO.',
    serviceEmphasis:
      'Field-service mobile apps for engineering crews, manufacturing operational dashboards, regional search dominance across the West Midlands, and custom CRM systems.',
    keySectorsServed: ['Precision Engineering & Manufacturing', 'Supply Chain & Freight Logistics', 'Automotive Supply Networks', 'Commercial Property Services'],
    nearbyAreasCovered: ['Solihull', 'Wolverhampton', 'Coventry', 'Sutton Coldfield', 'Dudley', 'Walsall', 'West Bromwich'],
    localFaqs: [
      {
        question: 'How do you help traditional West Midlands manufacturers modernise?',
        answer: 'We digitise job tracking, inventory auditing, and supplier quoting through tailored cloud applications that work seamlessly alongside existing ERPs without halting factory floor operations.',
      },
      {
        question: 'Can you improve our visibility for regional West Midlands commercial contracts?',
        answer: 'Yes. Our local and regional B2B SEO campaigns target procurement terms across Birmingham, Solihull, and the Black Country to capture high-value contract tenders.',
      },
    ],
    addressSnippet: 'Serving Birmingham City Centre, Colmore Row, and West Midlands industrial hubs.',
    isPlaceholder: true,
  },
  {
    city: 'Leeds',
    slug: 'leeds',
    region: 'Yorkshire & the Humber',
    heroHeadline: 'Digital Growth, Cloud Engineering & SEO for Leeds & Yorkshire Enterprises',
    localIntro:
      'As Yorkshire’s financial and legal powerhouse, Leeds represents one of the UK’s fastest-growing digital hubs. Techonrise partners with Leeds advisory firms, healthcare providers, and regional commercial leaders to craft frictionless client portals, rapid-loading web platforms, and authoritative organic search presence.',
    serviceEmphasis:
      'Legal & financial advisory client onboarding portals, conversion rate optimisation for Leeds service firms, and cloud infrastructure management.',
    keySectorsServed: ['Legal, Accountancy & Banking', 'Healthcare & Medical Tech', 'Digital Retail & eCommerce', 'Building & Construction Materials'],
    nearbyAreasCovered: ['Bradford', 'Harrogate', 'Wakefield', 'York', 'Huddersfield', 'Halifax', 'Wetherby'],
    localFaqs: [
      {
        question: 'Why choose Techonrise over generic Leeds marketing agencies?',
        answer: 'Unlike creative agencies that outsource technical development, we are full-stack software engineers and technical SEO specialists who build custom systems under one roof.',
      },
      {
        question: 'Do you build platforms compliant with UK financial and legal confidentiality?',
        answer: 'Yes. We architect secure data environments with encrypted storage, multi-factor authentication, and strict UK GDPR data retention policies.',
      },
    ],
    addressSnippet: 'Supporting businesses across Wellington Place, Leeds Dock, and West Yorkshire.',
    isPlaceholder: true,
  },
  {
    city: 'Liverpool',
    slug: 'liverpool',
    region: 'Merseyside & North West',
    heroHeadline: 'Empowering Liverpool’s Maritime, Commercial & Creative Growth',
    localIntro:
      'From the world-renowned maritime trade corridors of the Mersey to the vibrant Baltic Triangle creative and tech sector, Liverpool businesses are pioneering regional innovation. Techonrise delivers custom software, e-commerce stores, and high-ranking local SEO that drives measurable trade.',
    serviceEmphasis:
      'Logistics and maritime tracking platforms, direct-to-consumer e-commerce engineering, and local business map pack domination across Merseyside.',
    keySectorsServed: ['Maritime & Freight Forwarding', 'Hospitality, Leisure & Tourism', 'Creative & Baltic Triangle Tech', 'Life Sciences & Healthcare'],
    nearbyAreasCovered: ['Wirral & Birkenhead', 'Bootle & Crosby', 'St Helens', 'Southport', 'Speke', 'Chester'],
    localFaqs: [
      {
        question: 'Can you help Liverpool leisure and hospitality venues boost direct bookings?',
        answer: 'Yes. We build commission-free direct booking systems that bypass high third-party aggregator percentages and capture local searchers on Google Maps.',
      },
      {
        question: 'How quickly can your Manchester team meet with us in Liverpool?',
        answer: 'Our senior directors are less than 45 minutes away via the M62 and frequently meet clients across the Royal Albert Dock, Commercial District, and Baltic Triangle.',
      },
    ],
    addressSnippet: 'Serving Liverpool Commercial District, Baltic Triangle, and Merseyside.',
    isPlaceholder: true,
  },
  {
    city: 'Bristol',
    slug: 'bristol',
    region: 'South West',
    heroHeadline: 'Cutting-Edge Web Engineering & Search Authority for Bristol & the South West',
    localIntro:
      'Bristol is celebrated for its independent creative spirit, aerospace heritage, and booming green-tech cluster. Techonrise provides South West businesses with cutting-edge web design, sustainable cloud hosting, and data-driven marketing systems that align with forward-thinking values.',
    serviceEmphasis:
      'Modern Jamstack and Next.js web applications, high-performance clean-tech marketing landing pages, and AI-driven automation for busy regional teams.',
    keySectorsServed: ['Aerospace & Advanced Engineering', 'Clean Energy & Environmental Tech', 'Creative Media & Animation', 'South West Independent Retail'],
    nearbyAreasCovered: ['Bath', 'Clifton & Harbourside', 'Filton & North Bristol', 'Gloucester', 'Cheltenham', 'Weston-super-Mare'],
    localFaqs: [
      {
        question: 'Do you offer carbon-efficient and sustainable web engineering?',
        answer: 'Yes. By producing ultra-lightweight custom code and using renewable-powered UK cloud servers, our websites require significantly less CPU cycles and network data per pageview.',
      },
      {
        question: 'Can you automate customer support for our fast-growing South West brand?',
        answer: 'We build grounded, custom AI customer triage workflows that resolve repetitive enquiries instantly without compromising your brand’s tone of voice.',
      },
    ],
    addressSnippet: 'Partnering with businesses across Harbourside, Temple Meads, Clifton, and the South West.',
    isPlaceholder: true,
  },
  {
    city: 'Glasgow',
    slug: 'glasgow',
    region: 'Scotland & Strathclyde',
    heroHeadline: 'Powering Glasgow’s Engineering, Tech & Service Enterprises',
    localIntro:
      'Scotland’s largest city is an energetic hub of engineering ingenuity, digital health innovation, and thriving service enterprises. Techonrise builds resilient web platforms and operational software that help Scottish companies expand both locally and across international markets.',
    serviceEmphasis:
      'Heavy-duty web applications, Scottish regional SEO targeting, and back-office automation pipelines that streamline operational overhead.',
    keySectorsServed: ['Marine & Industrial Engineering', 'Digital Health & Life Sciences', 'Renewable Energy Contractors', 'Commercial Trade Services'],
    nearbyAreasCovered: ['Paisley', 'East Kilbride', 'Clydebank', 'Hamilton', 'Stirling', 'Kilmarnock'],
    localFaqs: [
      {
        question: 'Do you support Scottish businesses targeting customers across the entire UK?',
        answer: 'Yes. Our technical SEO and national content strategies allow Scottish enterprises to rank in prime search positions across England, Wales, and Northern Ireland.',
      },
      {
        question: 'Can you build custom field apps for off-grid operations in Scotland?',
        answer: 'Yes. We specialise in offline-first mobile apps that cache data locally on device and automatically sync records as soon as cellular or satellite connectivity returns.',
      },
    ],
    addressSnippet: 'Serving Glasgow City Centre, Merchant City, and Strathclyde enterprise corridors.',
    isPlaceholder: true,
  },
  {
    city: 'Edinburgh',
    slug: 'edinburgh',
    region: 'Scotland & Lothian',
    heroHeadline: 'Institutional Web Portals & High-Precision SEO for Edinburgh',
    localIntro:
      'As Europe’s second-largest financial hub and a prestigious international capital, Edinburgh demands digital solutions of the highest calibre. Techonrise engineers institutional websites, fintech-ready architectures, and search strategies that reflect the Scottish capital’s global prestige.',
    serviceEmphasis:
      'Fintech and wealth management client portals, high-trust branding and UI/UX design, and rigorous Cyber Essentials readiness support.',
    keySectorsServed: ['Asset Management & Fintech', 'Higher Education & Research Spinouts', 'Tourism & Luxury Hospitality', 'Corporate Law & Notaries'],
    nearbyAreasCovered: ['Leith', 'Livingston', 'Fife & Dunfermline', 'Musselburgh', 'Dalkeith', 'Queensferry'],
    localFaqs: [
      {
        question: 'Can you deliver platforms that meet Edinburgh financial institution standards?',
        answer: 'Yes. Our engineering follows rigorous security principles, complete data encryption, RBAC permissions, and comprehensive automated test suites.',
      },
      {
        question: 'How do you handle multi-currency or international visitors?',
        answer: 'We configure automatic geo-detection, international hreflang SEO tags, and multi-currency payment rails to serve global clients seamlessly.',
      },
    ],
    addressSnippet: 'Covering Edinburgh New Town, Charlotte Square, Leith, and Lothian hubs.',
    isPlaceholder: true,
  },
  {
    city: 'Sheffield',
    slug: 'sheffield',
    region: 'South Yorkshire',
    heroHeadline: 'Digital Systems & Commercial Visibility for Sheffield & South Yorkshire',
    localIntro:
      'Sheffield’s world-renowned steel and metallurgical excellence has evolved into an advanced manufacturing and engineering powerhouse. Techonrise provides South Yorkshire businesses with internal operational tools, ERP integrations, and B2B lead generation engines that drive commercial contracts.',
    serviceEmphasis:
      'B2B manufacturing lead capture, custom internal operational software, and regional search ranking across Yorkshire and the East Midlands.',
    keySectorsServed: ['Advanced Manufacturing & Forging', 'Machinery & Equipment Supply', 'Construction & Groundworks', 'Regional Specialist Healthcare'],
    nearbyAreasCovered: ['Rotherham', 'Chesterfield', 'Barnsley', 'Doncaster', 'Dronfield', 'Worksop'],
    localFaqs: [
      {
        question: 'Can you build custom quoting tools for complex manufacturing tolerances?',
        answer: 'Yes. We construct custom web-based specification calculators that allow prospective clients to submit dimensions and material specs for rapid price estimating.',
      },
      {
        question: 'How does your local SEO help Sheffield trade contractors win more jobs?',
        answer: 'We optimise your local Google presence so homeowners and commercial project managers find your company first when searching for trusted regional specialists.',
      },
    ],
    addressSnippet: 'Supporting businesses across Sheffield City Centre, Don Valley, and Advanced Manufacturing Park.',
    isPlaceholder: true,
  },
  {
    city: 'Cardiff',
    slug: 'cardiff',
    region: 'South Wales & Severn',
    heroHeadline: 'Digital Transformation & Scalable Web Platforms for Cardiff & South Wales',
    localIntro:
      'As the capital of Wales and a focal point for media, fintech, and government innovation, Cardiff businesses are expanding at a rapid pace. Techonrise equips Welsh enterprises with custom web platforms, bilingual considerations, and automated lead capture pipelines.',
    serviceEmphasis:
      'Bespoke digital platforms, Welsh & UK-wide technical SEO, and automated administrative workflows for service firms across the Severn estuary.',
    keySectorsServed: ['Creative Industries & Media', 'Fintech & Insurance', 'Cardiff Bay Professional Services', 'Tourism & Event Venues'],
    nearbyAreasCovered: ['Newport', 'Cardiff Bay', 'Penarth', 'Barry', 'Bridgend', 'Pontypridd', 'Swansea'],
    localFaqs: [
      {
        question: 'Can you support bilingual Welsh and English websites?',
        answer: 'Yes. We build clean internationalised architectures that seamlessly support English and Cymraeg (Welsh) languages with proper hreflang and metadata tags.',
      },
      {
        question: 'Do you help South Wales service companies automate booking workflows?',
        answer: 'Yes. We integrate automated calendar reservations, text reminder sequences, and digital payment receipts into your existing systems.',
      },
    ],
    addressSnippet: 'Serving Cardiff City Centre, Central Square, Cardiff Bay, and South Wales.',
    isPlaceholder: true,
  },
];
