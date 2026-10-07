# Techonrise — Premium Digital Transformation, SEO & AI Automation Platform

Techonrise is an institutional, high-performance website engineered for a UK digital transformation, SEO, custom software development, and AI automation company based in Manchester.

Built with React 19, TypeScript, Tailwind CSS, Three.js, and Motion.

---

## 1. Quick Start & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or bun

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Starts the local development server at `http://localhost:3000`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 2. Environment Variables (`.env.example`)

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Public canonical base URL | `https://techonrise.co.uk` |
| `APP_URL` | Cloud Run service URL | Injected at runtime |

---

## 3. Architecture & Data Model

All content is fully decoupled into typed data files in `src/data/`. Content editors and developers can update copy, case studies, and services without altering UI components:

- **`src/lib/constants.ts`**: Single source of truth for dummy business phone, email, Manchester office address, hours, and navigation links.
- **`src/data/services.ts`**: 5 core practices (SEO & Growth, Websites & E-Commerce, Custom Software & Apps, AI & Workflow Automation, Hosting & Cloud Infrastructure) with sub-services, deliverables, outcomes, and FAQs.
- **`src/data/industries.ts`**: 9 tailored vertical blueprints (Trades, Professional Services, Healthcare, E-Commerce, Construction, Logistics, Education, Hospitality, SaaS) with specific sector pain points and recommended tech bundles.
- **`src/data/locations.ts`**: 10 UK regional hubs (Manchester HQ, London, Birmingham, Leeds, Liverpool, Bristol, Glasgow, Edinburgh, Sheffield, Cardiff) with genuinely unique local market narratives and FAQs.
- **`src/data/caseStudies.ts`**: Real-world style transformation narratives (Challenge → Solution → Quantifiable Results).
- **`src/data/testimonials.ts`**: Attributable client reviews with outcome metrics.
- **`src/data/faqs.ts`**: 12 categorized commercial and technical FAQs matching Schema.org `FAQPage`.
- **`src/data/packages.ts`**: Retainers vs scoped milestone projects.

---

## 4. 3D Spatial Visuals & Performance

- **Hero Scene (`src/components/three/HeroScene.tsx`)**:
  - Procedural 3D architectural lattice and particle field built with Three.js.
  - Zero heavy 3D asset downloads (pure procedural WebGL geometry).
  - Capped DPR (`Math.min(window.devicePixelRatio, 1.5)`).
  - Particle budgeting: 450 particles on mobile, 1,200 on desktop.
  - `prefers-reduced-motion` & low-power detection with instant SVG/gradient fallback.
  - Pauses render loop when scrolled off-screen via `IntersectionObserver`.
  - Decorated with `aria-hidden="true"` so text remains 100% accessible and readable.
- **AI Automation Flow (`src/components/three/AutomationFlowVisual.tsx`)**:
  - Real-time 3D pipeline visualization demonstrating multi-channel ingestion, RAG vector retrieval, and automated webhooks.

---

## 5. Replace Before Launch (Mandatory Audit List)

The following items are placeholders flagged with `isPlaceholder: true` in the data layer and must be swapped with live company credentials prior to production deployment:

1. **Business Contact Details** (`src/lib/constants.ts`):
   - Replace phone number (`+44 20 1234 5678`), registered office address (`124 Innovation House, London Road, Manchester, M1 4AB`), and email (`hello@techonrise.co.uk`).
2. **Metrics & Social Proof** (`src/lib/constants.ts`):
   - Replace placeholder statistics (150+ Projects, 10+ Industries, 95% Retention Rate, 24/7 Monitored Systems).
3. **Client Testimonials & Case Studies** (`src/data/testimonials.ts`, `src/data/caseStudies.ts`):
   - Replace sample quotes from David Harrison, Eleanor Vance, Marcus Bradley, Dr. Sarah Jenkins with signed client feedback.
4. **Indicative Pricing** (`src/data/packages.ts`):
   - Update or verify retainer starting rates and one-off project budgets.
5. **Legal & Governance Copy** (`src/views/LegalViews.tsx`):
   - Have a qualified UK solicitor review the Privacy Policy, Terms of Business, and Cookie Policy.
6. **Email Webhook Provider** (`vite.config.ts` or production server):
   - Connect `/api/contact` and `/api/audit` to Resend, Postmark, or SendGrid with validated domain DNS SPF/DKIM records.

---

## 6. Technical SEO & Schema Verification

- **Schema.org Structured Data**:
  - `Organization` & `WebSite`
  - `ProfessionalService` / `LocalBusiness` (Manchester coordinates: 53.4808° N, 2.2426° W)
  - `Service` schema on each practice page
  - `OfferCatalog` schema on `/services`
  - `BreadcrumbList` on all inner views
  - `FAQPage` schema on `/faq` and homepage
- **Crawlability**:
  - `public/robots.txt`
  - `public/sitemap.xml`
  - `public/llms.txt` (AI-search citation summary for Perplexity, SearchGPT, Claude)
  - Answer-first 40–60 word editorial intros across key sections.

---

## 7. Deployment (e.g. Vercel / Cloud Run)

To deploy to Vercel:
```bash
npm run build
# Deploy dist folder or connect GitHub repository
```
Configure `VITE_SITE_URL=https://techonrise.co.uk` in production environment settings.
