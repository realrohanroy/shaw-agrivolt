# Shaw AgriVolt — Design DNA

> **Creative Director:** You  
> **Philosophy:** *Precision infrastructure, human scale.*  
> Every pixel earns its place. Nothing decorative. The website feels like walking through a well-run plant — clean, purposeful, engineered, quietly impressive.

---

## 1. Design Reference Framework

Primary References

- Siemens — engineering precision, information hierarchy
- Air Liquide — industrial systems, technical presentation
- Ørsted — sustainability communication without clichés
- Linde — enterprise B2B credibility
- Apple — restraint, whitespace, craftsmanship

Secondary References

- IBM
- ABB
- Schneider Electric
- Caterpillar

Explicitly Avoid

- Vercel
- Linear
- Framer
- Arc Browser
- Modern SaaS landing pages
- Green-tech startup aesthetics

Reason

Shaw AgriVolt sells industrial infrastructure and commodities. Buyers expect engineering credibility, not startup energy.

---

## 2. Visual hierarchy principles

1. **Information first, decoration never.** Every visual decision starts with "what does the user need to know here?" Hierarchy is driven by content priority, not aesthetic whim.
2. **One primary action per viewport.** Each screen has exactly one thing the user should do. That thing gets the highest contrast, the most whitespace around it, and the only accent-coloured control.
3. **Scale communicates importance.** Headlines are large not for drama but for information architecture — the biggest text on screen is always the most important signal.
4. **Trust lives in the details.** Alignment tolerances, consistent spacing, precise vertical rhythm — these micro-signals communicate institutional competence.
5. **Motion follows function.** Animation exists to orient, connect, or confirm — never to impress.
6. **Restraint is the luxury signal.** White space, muted secondary elements, subdued neutral tones — the design whispers so the content speaks.

---
## 3. Homepage Narrative

The homepage answers questions in this order:

1. Who are you?
2. Why should I trust you?
3. What do you produce?
4. How does your technology work?
5. Why is your solution better?
6. What proof do you have?
7. Who do you work with?
8. How do I engage with you?

Section Flow

Hero
↓

Infrastructure Metrics
↓

Circular Economy Process
↓

Solutions

↓

Plant Infrastructure

↓

Technical Specifications

↓

ESG Impact

↓

Partnership Models

↓

CTA

↓

Footer

---

## 4. Grid system

### Desktop (1440–1920px)
- 12-column grid, 80px columns, 24px gutters
- Content max-width: 1280px (1600px for full-bleed sections)
- Horizontal padding: 80px (edges)

### Laptop (1024–1439px)
- 12-column grid, 60px columns, 20px gutters
- Content max-width: 1040px
- Horizontal padding: 48px

### Tablet (768–1023px)
- 8-column grid, flexible columns, 20px gutters
- Horizontal padding: 32px
- Collapse to single-column layouts for content sections

### Mobile (360–767px)
- 4-column grid, flexible columns, 16px gutters
- Horizontal padding: 20px
- Single-column layout throughout
- Stack all multi-column content vertically

### Grid rules
- No element breaks the grid without a strategic reason (hero bleed, full-bleed video, background colour panels)
- Text never spans more than 8 columns on desktop (readability cap)
- KPI numbers may break the grid rightward for emphasis

---

## 5. Spacing system

### Base unit: 8px grid

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Inner padding (tight), icon gaps |
| `--space-sm` | 16px | Component internal padding, button padding |
| `--space-md` | 24px | Card padding, stacked form elements |
| `--space-lg` | 40px | Between related sections, CTA + description |
| `--space-xl` | 64px | Section padding top/bottom (mobile) |
| `--space-2xl` | 96px | Section padding top/bottom (tablet) |
| `--space-3xl` | 128px | Section padding top/bottom (desktop) |

### Section spacing
- Desktop sections: 128px vertical padding (top + bottom)
- Tablet sections: 96px
- Mobile sections: 64px
- First section below hero: always reduced (64px desktop)

### Whitespace philosophy
- Whitespace is not empty — it is visual punctuation. It tells the user where one idea ends and the next begins.
- Dense information (specs, tables, KPIs) gets more breathing room around it.
- Text-heavy sections get generous line-height (1.5–1.6) and generous margins.
- Never cram. When content doesn't fill the space, leave it empty — don't add decorative filler.

---

## 6. Typography system

### Stacks
- **Display:** `"Neue Haas Grotesk"` or
`"Söhne"` or `"Geist"` or `"IBM Plex Sans"` or
`"Inter Tight"`
- **Body:** `"IBM Plex Sans"` / `"Inter"` — a clean, highly legible sans-serif for all body copy, navigation, and UI.
- **Mono:** `"IBM Plex Mono"` / `"JetBrains Mono"` — for data, specs, metrics, lab results.

**Fallback chain:** `system-ui, -apple-system, sans-serif`

### Scale

| Role | Desktop | Mobile | Weight | Letter-spacing | Line-height |
|------|---------|--------|--------|----------------|-------------|
| Display hero | 72–96px `clamp()` | 40–48px `clamp()` | 400 (regular) | -0.02em | 1.0 |
| Heading 1 | 48px `clamp()` | 32px | 500 (medium) | -0.015em | 1.1 |
| Heading 2 | 36px `clamp()` | 26px | 500 | -0.01em | 1.15 |
| Heading 3 | 24px | 20px | 600 (semibold) | 0 | 1.25 |
| Body large | 18px | 16px | 400 | 0 | 1.5 |
| Body | 16px | 15px | 400 | 0 | 1.6 |
| Body small | 14px | 13px | 400 | 0 | 1.5 |
| Caption / label | 12px | 12px | 500 | +0.04em | 1.3 |
| Numeric data | 24–64px `clamp()` | 20–40px | 400 (display face) | -0.03em | 1.0 |
| Overline | 11px | 11px | 600 | +0.08em | 1.0 |

### Typography rules
- Body text never exceeds 75 characters per line (cap column width to ~660px)
- Display headlines may track loose at large sizes (-0.02em), never tight
- All caps only for overline labels, nav items, and CTAs (set in uppercase)
- Numeric data always uses the display face (serif) for premium feel — never a mono face for large display numbers
- Only use mono for tables, lab specs, technical data sheets

---

## 7. Color system

### Palette source
Derived from the existing logo: Navy Blue, White, Green. Transformed into OKLch for perceptual consistency.

### Light theme (default)

| Token | OKLch value | Role |
|-------|-------------|------|
| `--color-bg` | `oklch(0.99 0 0)` | Page background (white) |
| `--color-surface` | `oklch(0.97 0.003 260)` | Card / section background (off-white) |
| `--color-fg` | `oklch(0.13 0.015 260)` | Primary text (near-black navy) |
| `--color-muted` | `oklch(0.55 0.02 260)` | Secondary text, captions |
| `--color-border` | `oklch(0.88 0.008 260)` | Dividers, input borders |
| `--color-accent` | `oklch(0.35 0.04 260)` | Navy accent — CTAs, links, active states |
| `--color-green` | `oklch(0.45 0.12 160)` | Green accent — sustainability signals, positive metrics |
| `--color-success` | `oklch(0.55 0.14 150)` | Success states, verified badges |
| `--color-warning` | `oklch(0.7 0.15 80)` | Warning, attention |
| `--color-error` | `oklch(0.55 0.18 30)` | Error, critical |

### Dark theme (optional future)
- `--color-bg`: `oklch(0.13 0.015 260)` — deep navy
- `--color-fg`: `oklch(0.95 0.005 260)` — off-white
- All other tokens adjust for dark contrast ratios (minimum 7:1 for text)

### Color usage rules
- **One accent per viewport.** Use navy _or_ green on a screen, never both as accents. Green only appears in sustainability / ESG contexts.
- **Navy is the primary brand colour.** Use for primary CTAs, navigation, headings, key UI elements.
- **White is the dominant surface.** The site breathes on white. Off-white surfaces differentiate content regions without introducing colour.
- **Green is earned, not default.** Green only appears alongside real sustainability metrics or certifications — never as a decorative accent.
- **Grey-scale hierarchy.** Six neutral steps: `98%` / `95%` / `88%` / `70%` / `55%` / `13%` lightness. No warm tints.

---
## Hero Principles

- Left aligned only
- Maximum 8-word headline
- One supporting paragraph
- Maximum two CTAs
- One dominant visual
- No floating UI cards
- No feature cards in hero
- No KPI overload
- Video establishes industrial scale before messaging

---
## 8. Component philosophy

### Buttons
| Type | Style | Use |
|------|-------|-----|
| Primary | Navy fill, white text, 48px height, 16px h-padding | Main CTAs (one per viewport) |
| Secondary | Transparent, navy border, navy text | Secondary actions, alongside primary |
| Tertiary | Transparent, navy text only | Subtle actions, links styled as buttons |
| Ghost | Transparent, muted text | Dismiss, cancel, table actions |
| Large | 56px height | Hero CTAs |
| Small | 36px height | Inline / table actions |

- All buttons: 2px border-radius, 500 weight, uppercase label, 0.08em letter-spacing
- Hover: elevate 2px (`translateY(-1px)` + subtle shadow), navy fills darken 10%
- Active: `translateY(0)`, no shadow
- Disabled: opacity 0.35, no interaction

### Cards
- White surface (`--color-surface`), 1px border (`--color-border`), 8px border-radius
- Internal padding: `--space-md` (24px)
- No icon decorations. No left-colour accents. No illustrations.
- Hover: border shifts to navy at 30% opacity, subtle top shadow
- Image cards: full-bleed top image, content below, no overlay gradients

### Forms
- Input height: 48px (44px minimum for touch)
- Border: 1px solid `--color-border`, 4px border-radius
- Focus: navy border (2px), no ring
- Label: 14px, 500 weight, 8px gap below
- Error: `--color-error` border + inline error message below input
- Placeholder: `--color-muted` at 60% opacity

### Tables
- Full-width, no alternating row colours
- Header: 13px overline style, uppercase, `--color-muted`, 500 weight, 12px bottom border
- Cells: 15px body, `--color-fg`, 16px vertical padding
- Numeric columns: right-aligned, display face
- Hover row: `--color-surface` background
- Responsive: horizontal scroll on mobile (no table squeeze)

### KPI blocks
- Large number: 48–64px display face, `--color-fg`
- Label: 14px, `--color-muted`, uppercase, 0.06em tracking
- Unit: same size as number, `--color-muted`, 300 weight
- Optional trend indicator: green or navy small badge

### CTAs (hero / section)
- Full-width CTA strips at section bottom: large headline + primary button + supporting text
- Inline CTAs: text link with right arrow →, navy colour, 500 weight

---

## 9. Photography direction

**Real. Industrial. Unstyled.**

- Primary subject matter: processing plants, gas storage spheres, pipeline infrastructure, trucks at loading bays, farmland with biogas units, lab technicians, machinery close-ups
- Lighting: natural or industrial (overhead fluorescent, morning sun on metal structures)
- Colour grading: cool-leaning (blue shadows, neutral midtones) — never warm/amber — never desaturated to greyscale
- Composition: wide shots for scale, tight crops for texture (welds, gauges, valves)
- People: present but secondary — operators in uniform, engineers pointing at equipment, lab technicians. No staged smiles. No stock-model poses.
- **Never:** sun flare through trees, wind turbine meadows, hand-holding wheat fields, children, stock-family-in-field shots, anything that reads as an NGO brochure

### Hero video specifications
- Cinematic, 16:9 or 2.35:1 crop, 30fps minimum
- Camera movement: slow push-in or dolly, no handheld, no whip pans
- Content: plant overview → detail on equipment → operator interaction → wide establishment shot
- Length: 12–20 seconds loop
- Audio: industrial ambient + low drone (optional — muted by default)

### Imagery Ratio
Homepage :

- 60% photography

- 20% typography

- 15% data visualization

- 5% UI

---
## 10. Photography Hierarchy

Priority 1
Drone shots of facilities

Priority 2
Processing plant exterior

Priority 3
Industrial interiors

Priority 4
Machinery

Priority 5
Laboratories

Priority 6
Transportation fleet

Priority 7
Engineers and operators

Priority 8
Agricultural application

---
## 11. UI Density

Hero
Very spacious

Infrastructure
Comfortable

Technical Specifications
Dense

Process
Comfortable

Tables
Very dense

Forms
Comfortable

Footer
Dense

---
## 12. Design Anti-Patterns

Never use

- Glassmorphism
- Neumorphism
- Gradient-heavy backgrounds
- SaaS dashboards on homepage
- Floating cards
- Blurred blobs
- Decorative lines
- Cartoon illustrations
- Leaf icons
- Green gradients
- AI-generated smiling workers
- Fake factories
- Fake partner logos
- Fake ESG numbers
- Random stock photos
- Auto-playing counters
- Oversized shadows
- Excessive rounded corners
- Split-screen startup heroes

If a design resembles a startup landing page more than an industrial manufacturer, reject it.

---
## 13. Motion language

### Principles
1. **Motion reveals structure.** Elements enter in order of importance, not all at once.
2. **Short and precise.** No animation lasts longer than 600ms.
3. **Natural easing.** Everything uses a custom cubic-bezier: `cubic-bezier(0.22, 1, 0.36, 1)` — "emphasized ease-out."
4. **One thing moves at a time.** Avoid parallel animations on unrelated elements.
5. **No gratuitous motion.** If removing an animation makes the experience better, remove it.

### Timing & easing

| Context | Duration | Easing |
|---------|----------|--------|
| Page load — hero reveal | 800ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Scroll reveal (section enters viewport) | 600ms | Same as above |
| Hover state (button, card, link) | 200ms | `ease-out` |
| Focus ring / active state | 150ms | `ease-out` |
| Page transition (if implemented) | 400ms | `cubic-bezier(0.22, 1, 0.36, 1)` |

### Specific patterns

| Element | Behaviour |
|---------|-----------|
| Hero headline | Fade up + slight scale (1.02 → 1) over 800ms |
| Hero subtext | Stagger 150ms after headline |
| Hero CTA | Stagger 300ms after headline |
| Section content (text) | Fade up 600ms, 100ms stagger per element |
| KPI numbers | Count-up animation on scroll into view (2s duration) |
| Cards | Fade up 600ms, 150ms stagger per card in row |
| Navigation (mobile) | Slide from right, 300ms, overlay |
| Video (hero) | No motion on load — plays muted automatically |

### Interaction principles
- Hover states are immediate (150ms), not delayed
- Click/tap feedback within 50ms (visual compression or colour shift)
- Scroll-triggered reveals use Intersection Observer, not scroll event listeners
- Respect `prefers-reduced-motion` — collapse all animations to 200ms crossfades or disable

---

## 14. Iconography

**No decorative icons.** Icons serve one of three purposes only:

1. **Navigation** — menu hamburger, close, chevron, arrow
2. **Data visualization** — up/down trend indicators, status dots, certification badges
3. **UI action** — download, share, expand/collapse, external link, phone, email, map pin

**Style:**
- 2px stroke, rounded caps, rounded joins
- 24px default size
- `--color-muted` default, `--color-accent` for active/hover
- Single colour — no multi-colour icons
- No filled icons
- No custom illustration-style icons

All icons from a single consistent set (Feather or custom-drawn matching its line weights).

---

## 15. Illustration policy

**No illustrations.**

This is a hard rule. Every visual on the site is either:
- A photograph (real infrastructure)
- A data visualization (chart, graph, diagram)
- A schematic / technical drawing (plant layout, process flow)
- A geometric divider or pattern (subtle, single-colour, structural)

If a section feels "empty" without an illustration, add a photograph, a data point, or leave it empty. Whitespace is preferred over decorative art.

**Exceptions** (require Creative Director sign-off):
- Infographics explaining the Bio-CNG production process (strictly technical, 2-colour, line-art style)
- Site map / plant location diagram (geometric, no illustrations)

---

## 16. Border radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Structural edges, full-width panels, tables |
| `--radius-sm` | 2px | Buttons |
| `--radius-md` | 4px | Inputs, form elements |
| `--radius-lg` | 8px | Cards, dialogs, KPI blocks |
| `--radius-xl` | 12px | Containers, large grouped elements |
| `--radius-full` | 999px | Badges, pills, tags |

**Rationale:** Minimal radius. Every curve is small enough to feel precise, not soft. Industrial, not friendly.

---

## 17. Shadow system

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-none` | `none` | Default |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Card resting state |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` | Card hover, dropdown |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.08)` | Modal, dialog |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.1)` | Hero overlay, floating elements |

- All shadows use `--color-accent` with alpha, not generic black — shadows feel navy-toned, not grey
- No coloured shadows, no blur-heavy soft glows
- Shadows are subtle enough that the average user doesn't notice them — they feel structural, not decorative

---

## 18. Layout rhythm

### Vertical rhythm
- Base leading: 8px
- Text blocks: `font-size * line-height` always rounds to nearest 8px multiple
- Between paragraphs: `--space-md` (24px)
- Between sections: `--space-3xl` (128px desktop)

### Section patterns
1. **Hero** — 80–100vh, left-aligned content only, background = full-bleed cinematic video or industrial photography. Never center hero content.
2. **Content + media** — 50/50 or 60/40 split, alternating left/right on scroll
3. **Full-width statement** — Single headline, centred, large type, generous whitespace above and below
4. **Card grid** — 3-column (desktop) / 2-column (tablet) / 1-column (mobile), same-card-height constraints
5. **KPI row** — 3–4 metrics in a row, centred, always with real numbers
6. **Full-bleed CTA** — Background colour panel, centred content, primary button
7. **Footer** — 4-column grid, dense but organized, no decoration

### Rhythm rules
- Every section starts with a consistent element order: overline label (optional) → heading → body → CTA
- The first section below hero has reduced top padding (64px vs 128px)
- Alternating section backgrounds (white / off-white) create rhythm without colour

---

## 19. Responsive philosophy

**Mobile-first, desktop-refined.**

- Every layout starts at 360px and scales up
- Content priority is re-evaluated at each breakpoint — mobile is not "squeezed desktop"
- Navigation: desktop = horizontal bar, mobile = hamburger + slide-over drawer
- Tables: scroll horizontally on mobile, never squeeze columns
- Images: always `width: 100%; height: auto; object-fit: cover` — never fixed aspect ratio that clips on mobile
- Touch targets: minimum 44×44px (48px preferred) — applies to all interactive elements
- Font sizes: use `clamp()` for all display and heading sizes — `clamp(40px, 5vw, 72px)` for hero, etc.
- No horizontal scroll at any breakpoint (360, 390, 430, 600, 768, 820, 1024, 1366, 1440, 1920)

### Breakpoints
| Name | Width | Target |
|------|-------|--------|
| Mobile | 360–767px | Phones |
| Tablet | 768–1023px | Portrait tablets |
| Laptop | 1024–1439px | Small screens, landscape tablets |
| Desktop | 1440–1919px | Standard desktop |
| Wide | 1920px+ | Large monitors |

---
## 20. Navigation System

Desktop

- Sticky
- Transparent over hero
- Solid white after scroll
- Maximum 7 primary links
- One primary CTA
- No mega menu initially

Mobile

- Full-screen drawer
- Large typography
- Maximum two levels
- CTA fixed at bottom

---

## 21. Accessibility principles

### Compliance target: WCAG AA (AAA where practical)

| Principle | Implementation |
|-----------|---------------|
| Colour contrast | All text: ≥ 4.5:1 (AA normal), 3:1 for large text ≥24px. Non-text elements: 3:1. |
| Focus indicators | 2px navy outline with 2px offset on all interactive elements. Never `outline: none`. |
| Keyboard navigation | Every interactive element reachable and operable via keyboard. Tab order matches visual order. |
| Screen reader support | Semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`), ARIA labels on all icons and controls, `aria-current` for active nav, `aria-expanded` for menus |
| Motion | `@media (prefers-reduced-motion: reduce)` — disable all non-essential motion, collapse to crossfade |
| Zoom | Up to 200% zoom without horizontal scroll or content loss |
| Forms | `<label>` elements associated with every input, clear error messages, `aria-describedby` for hints |
| Images | `alt` text on every `<img>` (meaningful for photos, `alt=""` for decorative — but decorative images should not exist) |
| Language | `lang` attribute on `<html>` — toggled between `en` and `bn` based on page |

---

## 22. What makes this feel like a premium global industrial company

| Trait | How we achieve it |
|-------|-------------------|
| **Physical evidence** | Real photography of plants, machinery, trucks, infrastructure. No abstract vectors, no stock silhouettes. |
| **Precision** | Alignment within 1px. Consistent spacing. No orphaned text. No uneven margins. |
| **Restraint** | One accent colour per page. One CTA per viewport. No popups. No cookie banners that cover content. No chat widget flying in. |
| **Typography hierarchy** | Clear information scent from headline → subhead → body → CTA. Users never wonder "what am I supposed to look at?" |
| **Data as design** | KPIs, capacity figures, purity percentages are the primary decorative element. Numbers replace imagery wherever possible. |
| **No startup tropes** | No testimonials carousel. No "Our Mission" banner with a stock photo of a farmer smiling. No animated counters that count to arbitrary numbers. No "We're hiring!" in the hero. |
| **Industrial grade UI** | 2px button radii, not 12px. Tight tracking on labels. Navy, not teal. Structured grids, not organic layouts. |
| **Speed** | The site loads fast because we ship minimal JS, no heavy frameworks in production, optimized images, and no autoplay video above the fold on mobile. Speed signals competence. |
| **Bilingual without compromise** | Both English and Bengali get the same design rigour. Bengali text is not an afterthought — line-height, font-size, and alignment are tuned for the script. |
| **No fake social proof** | Every metric, logo, certification, and testimonial is real. Missing data is an honest placeholder ("Case study coming Q3 2025"), never a fabricated statistic. |
| **The footer is a utility, not a dumping ground** | Organized section links, real contact details, plant address, certification badges. No "Follow us on Instagram." |

---

*This document is the source of truth for all design decisions. Every screen ships against these principles. If a design choice conflicts with this DNA, the DNA wins — unless the user explicitly overrides.*
