# Shaw AgriVolt — Homepage narrative screenplay

> **Narrative arc:** Trust through evidence. Each section answers the next unspoken question a procurement manager or plant head has while evaluating a new industrial supplier. The page does not "tell a story" in the marketing sense — it builds a case, piece by piece, until the only logical next step is to start a conversation.

---
NOTE :All numerical values shown in this document are structural examples only unless supplied by Shaw AgriVolt's verified company data. During design, every placeholder metric must be replaced with approved figures or removed.
## Section 1 — Hero

**Section name:** The Infrastructure Statement

**Purpose:** Within 3 seconds, establish that Shaw AgriVolt is a real industrial operation with physical assets, not a startup with a slide deck. This is the single most important section of the entire site.

**User question being answered:** *"Is this a legitimate company with actual infrastructure?"*

**Business objective:** Capture the visitor's attention long enough to scroll. Reduce bounce rate below 40%.

**Emotional objective:** Quiet confidence. The visitor feels they've landed on something substantial.

**Key content:**
- Headline: A concise statement of what the company does — industrial, not aspirational. Example: *"Agricultural waste to industrial energy."* Not "transforming the future."
- Supporting line: One sentence on the value proposition — purity, scale, certification. Example: *"Bio-CNG at 97% purity. Certified organic fertiliser. One integrated process."*
- SATAT badge (government initiative) — visible immediately
- Plant capacity metric if available (e.g., "XX tonnes/day processing capacity")

**Visual direction:**
- Full-viewport or 80vh hero
- Background: original industrial photograph (aerial or wide-angle of the plant) or cinematic video loop — slow push-in, cool colour grade, no people
- No overlay gradients — the image stands at full opacity
- Navy may appear as a thin bottom border or a discreet top nav background
- Content: left-aligned (desktop) or centred (mobile), generously spaced from edges

**Motion:**
- Headline: fade up + subtle scale over 800ms, emphasized ease-out
- Supporting line: stagger +150ms
- Badge + CTA: stagger +300ms
- Video/image: static on load (no Ken Burns unless extremely subtle)
- All motion respects `prefers-reduced-motion`

**CTA:** Primary button — *"Explore our infrastructure"* — scrolls to Section 3 (Process/Scale). Deliberately not a sales CTA. The goal is to keep them exploring.

**Transition into the next section:**
- Sharp cut, no dissolve. The hero ends, and Section 2 enters on scroll.
- A thin navy line or the CTA arrow visually bridges the two sections.

---

## Section 2 — The Industrial Context

**Section name:** The Shift

**Purpose:** Define the market reality that makes Shaw AgriVolt relevant — without green rhetoric. Frame the opportunity in industrial terms: fuel security, waste economics, regulatory pressure.

**User question being answered:** *"Why does this exist? Is this solving a real problem or chasing subsidies?"*

**Business objective:** Align the company with macro-level industrial trends. Position them as essential infrastructure, not a niche alternative.

**Emotional objective:** Recognition. The visitor nods — "yes, that's the world I operate in."

**Key content:**
- Overline: *"The industrial case"* (uppercase, small)
- Headline: A factual statement about the energy / waste landscape. Example: *"Industry needs 200 MMT of natural gas annually. Agricultural waste produces 500 MMT of feedstock potential."*
- 2–3 supporting stat lines: regulatory mandates, diesel replacement economics, soil depletion data
- Data sources cited in small type (builds credibility)

**Visual direction:**
- Full-width, white background
- Content: centred or slightly left-biased, 8-column max width
- No imagery — this is a text-and-data section
- If data visualisation is available: a simple 2-colour chart (navy + muted) showing the opportunity gap
- If no data vis: a bold typographic treatment of the key numbers

**Motion:**
- Content fades up on scroll into view, 600ms
- Numbers count up if dynamic (2s duration)

**CTA:** None. This section's job is to build context, not drive action.

**Transition into the next section:**
- The final line of text sits above a subtle navy divider line
- The next section's off-white surface starts immediately below

---

## Section 3 — Process (How it works)

**Section name:** One feedstock, two outputs

**Purpose:** Explain the core process in clear, technical terms. This is where the visitor understands what Shaw AgriVolt actually *does* — transforming waste into Bio-CNG and organic fertiliser.

**User question being answered:** *"What exactly do they do, and do they have the technical capability to do it at scale?"*

**Business objective:** Demonstrate technical competence. Remove any doubt that this is a serious engineering operation.

**Emotional objective:** Clarity. The visitor understands the process well enough to assess whether it fits their supply chain.

**Key content:**
- Overline: *"Our process"*
- Headline: *"Agricultural waste → high-purity Bio-CNG + certified organic fertiliser"*
- 3–4 process steps in a horizontal sequence (desktop) or vertical stack (mobile):
  1. Feedstock collection — agricultural waste procurement
  2. Anaerobic digestion — biogas generation
  3. Purification — Bio-CNG at 97%+ purity (spec badge)
  4. Output — dual product: fuel + fertiliser
- Each step: short label + one-line technical description + small spec indicator (psi, purity %, NPK rating)

**Visual direction:**
- Background: off-white surface (`--color-surface`)
- Layout: horizontal step flow (desktop), vertical stack (mobile)
- Each step represented by a thin navy connector line between steps
- No icons. No illustrations. Numbers or letters serve as step markers (01, 02, 03, 04 — body face, 500 weight, muted)
- Optional background element: a subtle geometric line pattern or grid texture — structural, not decorative

**Motion:**
- Step cards reveal left-to-right (desktop) or bottom-to-top (mobile), 600ms, 150ms stagger
- Hover on step: border shifts to navy, no other animation

**CTA:** Text link at bottom — *"Explore our technology →"* (links to Products/Bio-CNG page). Intent to learn more, not to buy.

**Transition into the next section:**
- Process flows naturally into evidence — having explained *what* they do, the visitor now needs to know *how well* they do it.

---

## Section 4 — Scale & metrics (KPI row)

**Section name:** In operation

**Purpose:** Prove the company has real output. Hard numbers replace marketing language.

**User question being answered:** *"Do they actually produce at commercial scale, or is this a pilot project?"*

**Business objective:** Demonstrate production capacity and operational maturity. This is the section that converts skeptics.

**Emotional objective:** Reassurance. The numbers speak for themselves — this is not speculative.

**Key content:**
- 3–4 KPI metrics, each with:
  - Large number (display face, 48–64px)
  - Unit or label (uppercase, muted, small)
  - Optional one-line context
- Example metrics (replace with real data):
  - *"X,XXX tonnes"* — annual waste processed
  - *"XX tonnes/day"* — Bio-CNG production capacity
  - *"XX%"* — purity level (if 97%+)
  - *"X plants"* — operational facilities
- Real data only. If a metric doesn't exist, omit it — never fabricate.

**Visual direction:**
- Full-width section, white background
- 3 or 4 equal columns (desktop), 2×2 grid (tablet), single column (mobile)
- Numbers: display serif face, navy (`--color-fg`), generous tracking (-0.03em)
- Each KPI has a subtle top border line (navy, 2px, 40px wide) — acts as an anchor
- No badges, no fill backgrounds, no icon decorations

**Motion:**
- Numbers count up on scroll into view (2s duration, ease-out)
- Label fades in after the number settles
- Top border line animates width 0→40px on scroll into view

**CTA:** None. The numbers do the work.

**Transition into the next section:**
- From "what we do" + "at what scale" → "who validates that we do it right."

---

## Section 5 — Certifications & trust

**Section name:** Standards

**Purpose:** Display the institutional endorsements that procurement managers and government stakeholders need to see before they can proceed.

**User question being answered:** *"Are they approved by the relevant authorities? Are they certified?"*

**Business objective:** Remove procurement objections preemptively. A procurement manager seeing SATAT + ISO + FCO ticks the "compliance" box before they even contact you.

**Emotional objective:** Confidence. The certification marks are a shortcut to trust.

**Key content:**
- Overline: *"Certifications & compliance"*
- Headline: Brief statement on standards adherence
- Certification logos/badges in a row (or grid): SATAT, ISO (if held), FCO (fertiliser control), any other applicable body
- Each badge: logo + full name + registration number (if public)
- If certifications are extensive, show top 4 and a "View all →" link

**Visual direction:**
- Background: off-white surface (`--color-surface`)
- Badge grid: centred, 4–6 columns depending on count
- Each badge: white card (`--color-bg`), 1px border, 8px radius, centred content
- Badge presentation: the actual certification mark (small, consistent height), full name below in caption type
- No oversized logo treatments — these are credentials, not branding

**Motion:**
- Cards fade up on scroll, 600ms, 100ms stagger
- No hover effect on badge cards (they are static credentials)

**CTA:** Text link — *"Download our compliance documentation →"* (if PDFs exist) or simply none.

**Transition into the next section:**
- Trust established → "here's what you can actually buy from them."

---

## Section 6 — Product preview

**Section name:** Our products

**Purpose:** Introduce the two core product lines. This section is a gateway to the dedicated product pages — not the full sell, but enough to qualify interest.

**User question being answered:** *"What can they supply to me? Does it meet my spec?"*

**Business objective:** Generate clicks to product pages. Pre-qualify visitors by product interest.

**Emotional objective:** Anticipation. The visitor can see themselves sourcing from Shaw AgriVolt.

**Key content:**
- Overline: *"Products"*
- Headline: *"Industrial-grade outputs, certified to spec"*
- Two product cards (or three if additional products exist):
  - **Bio-CNG** — key specs: purity %, calorific value, delivery format (cascade / pipeline), application (industrial, transport)
  - **Organic fertiliser** — key specs: NPK ratio, form (granular/pelleted), packaging (bag/bulk), certification (FCO)
  - Each card: label + 3–4 spec bullets (no paragraphs) + CTA link
- If additional products exist (e.g., compressed biogas): third card

**Visual direction:**
- Background: white
- 2 or 3 product cards in a row (desktop), stack (mobile)
- Card: 1px border, 8px radius, 24px internal padding
- Spec bullets: left-aligned, 14px, muted, no icons — use an em dash or blank space as delimiter
- No product photography unless available and high-quality — specs replace imagery

**Motion:**
- Cards fade up on scroll, 600ms, 200ms stagger
- Hover on card: border shifts navy, subtle shadow (`--shadow-sm` → `--shadow-md`)

**CTA:** Per card — *"View Bio-CNG specs →"* / *"View fertiliser specs →"* (links to product detail pages). Bottom of section: *"Request a quote →"* (secondary button — second most important CTA on the page).

**Transition into the next section:**
- Product interest established → "who else trusts them?"

---

## Section 7 — Proof in practice (Featured case study or partnership)

**Section name:** In practice

**Purpose:** Show a real deployment. One specific example of Shaw AgriVolt's product in use — a client, a partnership, a plant supplying a known off-taker.

**User question being answered:** *"Has anyone actually bought/used this? What happened?"*

**Business objective:** Provide the social proof that closes the last gap between interest and inquiry.

**Emotional objective:** FOMO + believability. "If they're supplying X, they're clearly operational."

**Key content:**
- Overline: *"Case study"* or *"In partnership"*
- Headline: Result-oriented — *"Supplying Bio-CNG to [client name/type]"*
- 2–3 sentence summary: who the partner is, what Shaw AgriVolt supplies, what result was achieved
- Key stat from the engagement: e.g., "XX tonnes CO₂ displaced", "XX vehicles fuelled"
- Client logo if permission exists
- If no real case study exists yet: honest placeholder — *"First case study coming Q3 2025"*

**Visual direction:**
- Background: off-white surface
- 60/40 or 50/50 split: text left, image right (desktop), stacked (mobile)
- Right side: photograph of the plant, truck loading, or relevant infrastructure — not a generic stock photo
- Content layout mirrors the Design DNA's "content + media" section pattern

**Motion:**
- Content side: fade up 600ms
- Image side: reveal from slightly right (slide in, 700ms, emphasized ease-out)
- No parallax

**CTA:** *"Read the full case study →"* (if full version exists) or *"Start a similar project →"* (primary button, links to contact).

**Transition into the next section:**
- Proof seen → "how do I become part of this?" — CTA section.

---

## Section 8 — Partnerships & ecosystem (Optional — or merge into Section 7 if space is tight)

**Section name:** Partner with us

**Purpose:** Speak directly to the secondary audience — biomass suppliers, dealers, distributors. Give them an entry point.

**User question being answered:** *"Can I supply feedstock to them? Can I distribute their products?"*

**Business objective:** Generate partnership inquiries — biomass supply agreements and dealership applications.

**Emotional objective:** Opportunity. The visitor sees a business relationship, not just a transaction.

**Key content:**
- Overline: *"Partnerships"*
- Headline: *"Supply. Distribute. Grow with us."*
- Two columns:
  - **For biomass suppliers** — what we procure, volumes, quality standards, pricing model
  - **For dealers & distributors** — territories, product availability, support model
- Each: 2–3 bullet points + CTA

**Visual direction:**
- Background: white
- Two-column layout (desktop), stack (mobile)
- Minimal — text-driven, no imagery
- Thin vertical divider between columns (desktop)

**Motion:**
- Columns fade up, 600ms, 150ms stagger

**CTA:** *"Become a supplier →"* / *"Apply as a dealer →"* — both secondary buttons.

**Transition into the final section:**
- Interest established → final commitment step.

---

## Section 9 — Final CTA / Contact

**Section name:** Start the conversation

**Purpose:** Provide the final, unambiguous call to action. After eight sections of trust-building, the visitor should know exactly what to do next.

**User question being answered:** *"How do I actually get in touch with them?"*

**Business objective:** Convert remaining interest into a lead — form submission, phone call, or email.

**Emotional objective:** Clarity + low friction. The barrier to contact feels minimal.

**Key content:**
- Headline: Direct and simple — *"Ready to discuss your fuel or fertiliser requirements?"*
- Supporting line: *"Send us a message or reach out directly."*
- Contact options:
  - Primary CTA button: *"Send an inquiry"* — scrolls to or opens a form (inline form or modal)
  - Secondary: phone number + email displayed as text
  - Optional: office/plant address
- If an inline form is present: name, company, email, phone, interest (dropdown: Bio-CNG / fertiliser / partnership / other), message

**Visual direction:**
- Full-width section, navy background (`--color-accent`)
- White text
- Content centred, generous inner padding
- If form is inline: white card on navy background
- Simple, no imagery, no patterns — the navy colour signals finality and importance

**Motion:**
- Section fades up on scroll, 600ms
- CTA button: standard hover elevation
- Form fields: focus glow (2px white border)

**CTA:** Primary: *"Send an inquiry"* (triggers contact form). Secondary: *"Call us"* / *"Email us"* — displayed as text links.

**Transition into the footer:**
- The contact section is the end of the narrative. Footer follows as a utility.

---

## Section 10 — Footer

**Section name:** Footer

**Purpose:** Provide complete, organised access to all site content and company information. A procurement manager evaluating Shaw AgriVolt should find everything they need here — contact, certifications, plant locations, products.

**User question being answered:** *"Where is their plant? What else do they do? How do I find more?"*

**Business objective:** Reduce bounce by providing clear navigation paths. Serve as trust signal through completeness.

**Emotional objective:** Transparency. A thorough footer signals nothing to hide.

**Key content:**
- 4-column grid:
  - Column 1: Company — About, Infrastructure, Leadership, Careers
  - Column 2: Products — Bio-CNG, Organic fertiliser, Additional products (as they launch)
  - Column 3: Resources — Case studies, Certifications, ESG reports, Lab reports
  - Column 4: Contact — Address, Phone, Email, LinkedIn (if appropriate — no Instagram/Facebook for this brand)
- Bottom bar: copyright, SATAT badge, logo (small), language switcher (EN/BN)
- Trust signals in footer: certification badges in small format, SATAT logo

**Visual direction:**
- Background: near-black navy (`oklch(0.13 0.015 260)`)
- Text: white at various opacities (headings: 100%, links: 70%, copyright: 50%)
- 4-column grid, no borders between columns
- Bottom bar: 1px top border at white 15%

**Motion:**
- No motion in footer. This is utility, not narrative.

---

## Narrative arc summary

```
Section 1  Hero              → "We operate real infrastructure."
Section 2  The Shift         → "Here's why the market needs this."
Section 3  Process           → "Here's how it works, technically."
Section 4  Scale & metrics   → "Here's our production capacity."
Section 5  Certifications    → "Here's who validates us."
Section 6  Products          → "Here's what you can buy."
Section 7  Case study        → "Here's proof it works."
Section 8  Partnerships      → "Here's how we work together."
Section 9  Contact           → "Let's talk."
Section 10 Footer            → "Everything you need."
```

**Trust-building curve:** Low pressure → information → evidence → proof → invitation. The first CTA is "Explore our infrastructure" — not "Buy now." The last CTA is "Send an inquiry" — only after eight preceding sections have earned the right to ask.

---

## Editorial notes for the design phase

1. **Section 1 must NOT have a scroll-down chevron.** It's a cliché. The hero should naturally lead the eye downward through composition.
2. **Section 2 and 5 can be swapped** if certifications are more impressive than the process explanation — reorder based on which story is stronger.
3. **Section 8 (Partnerships)** can be omitted from the homepage if the primary audience is overwhelmingly buyers rather than suppliers; move it to a dedicated partnerships page.
4. **Section 7 (Case study)** can be omitted until a real case study with metrics exists. Replace with a "By the numbers" section if data is available but no narrative exists.
5. **Contact form (Section 9)** should not be hidden behind a modal — inline or immediately visible on click for maximum conversion. If legal requires a separate contact page, link to it.
6. **Every real number, logo, and certification is worth more than a paragraph of copy.** Prioritise data acquisition during content gathering.
7. **The Bengali version should maintain the same narrative arc.** No section reordering. Translation must adapt for script length — Bengali text may be more compact or expansive; adjust font-size and line-height accordingly.
