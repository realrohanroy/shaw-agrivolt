# Shaw AgriVolt — Brand + Website Plan

> **Status:** Brief locked · ready for design  
> **Intent:** Premium enterprise B2B website from scratch, including visual brand system, content architecture, and responsive bilingual web experience.  
> **Budget tier:** ~$50K (brand + site combined)  
> **Brand voice:** Siemens (engineering rigour) + Apple (restrained optimism)

---

## 1. Company & domain

| Field | Value |
|-------|-------|
| Company name | Shaw AgriVolt |
| Industry | Bio-energy / Bio-CNG / Organic fertiliser |
| One-line positioning | Transforms agricultural and organic waste into high-purity Bio-CNG and certified organic fertilisers, helping industries transition to clean fuel while restoring soil health. |
| Headquarters | India (city TBD) |
| Stage | Operational — plant(s) running |
| Key stakeholders | Procurement managers, plant heads, logistics operators, fertiliser distributors, biomass suppliers, government bodies |

---

## 2. Brand strategy

### 2.1 Positioning
- **Positioning sentence:** *"Shaw AgriVolt transforms agricultural and organic waste into high-purity Bio-CNG and certified organic fertilisers, helping industries transition to clean fuel while restoring soil health."*
- **Voice spectrum:** Siemens (engineering rigour) + Apple (restrained optimism)
- **Personality:** Industrial authority — precise, confident, unflashy. Position as a premium infrastructure brand, *not* an environmental NGO.
- **Non-negotiables:**
  - Existing logo: unchanged
  - Primary colours: Navy Blue · White · Green (a deep, technical green — no lime/neon)
  - No generic "green eco startup" aesthetics — no leaf motifs, no gradients, no warm beige/cream backgrounds

### 2.2 Naming & logo
- Name: Shaw AgriVolt — final
- Logo: existing mark preserved (`image.png` in workspace)
- Tagline/descriptor: optional — propose in design phase

### 2.3 Visual direction
- **Direction:** `modern-minimal` (Linear/Vercel) as the foundation, overlaid with industrial/Siemens rigour — structured grids, dark navy surfaces, technical typography
- **Avoid:** anything that reads as "cleantech startup" — no leafy greens, rounded friendly cards, illustration-heavy hero sections, or gradient accents

### 2.4 Brand deliverables
- [x] Company name & positioning locked
- [x] Logo preserved (needs extraction/placement)
- [ ] Brand-spec.md (OKLch tokens, type stacks, posture rules)
- [ ] Colour palette (navy · white · green in OKLch)
- [ ] Typography (display face + body face + mono)

---

## 3. Website architecture

### 3.1 Site structure

```
Home
├── About
│   ├── Company overview
│   ├── Infrastructure & plants
│   ├── Leadership
│   └── Careers
├── Products
│   ├── Bio-CNG
│   ├── Organic fertilisers
│   └── Other products (future)
├── Sustainability & Impact
│   ├── ESG metrics
│   ├── SATAT alignment
│   └── Laboratory reports
├── Resources / Insights
│   ├── Case studies
│   ├── White papers
│   └── News & press
├── Partnerships
│   ├── Biomass suppliers
│   └── Dealership opportunities
└── Contact
    └── Inquiry / proposal form
```

### 3.2 Page plan

| Page | Goal | Key content | Primary CTA |
|------|------|-------------|-------------|
| Home | Instant credibility. Visitor must immediately perceive industrial scale & technical capability | Cinematic hero video + plant capacity stat + SATAT badge + 3 infrastructure proof points + featured case study + partner logos | "Explore our infrastructure" |
| About | Prove institutional weight | Plant photography + timeline + leadership portraits + certification grid | "Schedule a plant visit" |
| Products (Bio-CNG) | Convert procurement managers | Specs sheet (purity, psi, delivery model) + certification logos + comparison vs. fossil fuels + plant location map | "Request a quote" |
| Products (Fertiliser) | Convert distributors | NPK analysis + packaging options + certification (FCO) + distribution map | "Become a distributor" |
| Sustainability | ESG buyers & government stakeholders | Carbon offset metrics + SATAT documentation + lab report preview + soil health studies | "Download ESG report" |
| Partnerships | Recruit suppliers & dealers | Partnership model + minimum requirements + apply form + existing partner map | "Apply as a dealer" |
| Contact | Low-friction conversion | Form + office + plant visit booking | — |

### 3.3 Trust signals (lead with these)

- **SATAT initiative alignment** (government badge — hero/footer)
- **Plant capacity & infrastructure photography** (home hero + about)
- **Technical certifications** (ISO, FCO, etc. — about + products)
- **ESG metrics with real numbers** (sustainability page)
- **Laboratory reports** (downloadable PDFs — sustainability)
- **Client / partner logos** by tier (footer + partnerships)

### 3.4 Content readiness

| Asset | Status |
|-------|--------|
| Product descriptions (Bio-CNG, fertiliser) | **Needed — client to provide** |
| Plant photography / infrastructure imagery | **Needed — client to provide or commission** |
| Leadership headshots + bios | **Needed — client to provide** |
| Case studies with metrics | **Needed — client to provide** |
| ESG metrics / SATAT documentation | **Needed — client to provide** |
| Lab reports (PDF) | **Needed — client to provide** |
| Bengali translations | **Needed — client to provide** |

---

## 4. Photography & motion

### 4.1 Photography
- **Approach:** Original industrial photography wherever possible
- **Subjects:** Processing plants, biogas infrastructure, trucks, farmland, machinery, lab equipment
- **No:** illustrations, cartoons, stock photos of generic solar panels/wind turbines, hand-drawn anything

### 4.2 Motion
| Type | Decision |
|------|----------|
| Cinematic hero video | **Yes** — full-width, muted, looping, large scale |
| Scroll-triggered reveals | **Yes** — subtle, premium |
| Micro-interactions | **Yes** — hover states on CTAs, nav links, cards |
| Page transitions | Consider — if it doesn't hurt performance |
| Loading states | If needed — skeleton screens preferred |
| Flashy animations | **No** — explicitly avoided |

**Philosophy:** Functional motion that directs attention. Atmospheric only for hero video. Never decorative.

---

## 5. Technical & SEO

### 5.1 Platform
- **Delivery:** Responsive web (mobile-first, desktop-refined)
- **Output:** Static HTML + CSS + vanilla JS (prototype phase)
- **CMS:** TBD — recommend headless (Contentful / Sanity) for future scalability
- **Languages:** English (primary) + Bengali (launch)
- **Page-speed target:** LCP ≤ 2.5s, Lighthouse ≥ 90

### 5.2 SEO foundations
- [ ] Keyword strategy per page (Bio-CNG, CBG, organic fertiliser, biomass supplier, SATAT)
- [ ] Schema.org: Organization, Product, Article, FAQ, LocalBusiness
- [ ] `<meta>` strategy: title, description, OG per page type
- [ ] Sitemap.xml + robots.txt
- [ ] Bilingual URL structure (`/en/`, `/bn/` or subdomain)
- [ ] hreflang tags for English + Bengali

### 5.3 Technical constraints
- **Accessibility:** WCAG AA minimum
- **Security:** TBD — standard HTTPS + form validation
- **Compliance:** India IT Act / GDPR if EU visitors expected
- **Integrations:** Contact form backend (Web3Forms / Formspree or self-hosted), Google Analytics / Plausible, chatbot (optional future)

---

## 6. Success metrics

| Metric | Baseline | Target | Tool |
|--------|----------|--------|------|
| Monthly unique visitors | TBD | +X% | GA4 / Plausible |
| Quote requests / contact forms | TBD | +Y% | CRM |
| Dealer/distributor applications | TBD | +Z | CRM |
| Bounce rate (home) | TBD | < 40% | GA4 |
| Page speed (LCP) | — | ≤ 2.5s | Lighthouse |
| Organic impressions (top 3 pages) | TBD | +W% | GSC |

---

## 7. Future scalability (18-month horizon)

- [x] **Client portal** — logged-in area for order tracking, delivery schedules
- [x] **Investor section** — financial reports, plant performance, growth roadmap
- [x] **Knowledge hub** — 100+ articles on Bio-CNG, soil health, policy updates
- [x] **Additional products** — modular product page templates
- [x] **Multi-plant pages** — per-location microsites with maps, capacity stats, local contacts

**Architecture decision:** Recommend headless CMS (Contentful / Sanity) + static site generator to support all the above without a rebuild.

---

## 8. Timeline (draft)

| Phase | Duration | Output |
|-------|----------|--------|
| Visual identity & brand-spec | 1 week | Palette, type, posture rules, brand-spec.md |
| Site architecture & wireframes | 1 week | Sitemap, layout wireframes, content inventory |
| High-fidelity design | 3 weeks | Home + 5 template pages, responsive, design system |
| Front-end build | 3–4 weeks | Functional HTML/CSS/JS, bilingual support |
| Content populate & QA | 1–2 weeks | Review cycle + fixes |
| SEO, schema, launch prep | 1 week | Meta + schema + sitemap + deploy |
| **Total** | **10–13 weeks** | |

---

## Next step

This plan is locked from your brief. **If you're satisfied, confirm and I'll hand off to Design mode to begin.** I'll start by pulling the visual direction, establishing the brand-spec, and building the full responsive website prototype.

**One open question:** Do you have the logo file (`image.png`) and any hero video / photography assets ready, or should we source placeholder industrial imagery and a cinematic hero background for the prototype?
