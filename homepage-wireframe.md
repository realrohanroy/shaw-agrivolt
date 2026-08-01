# Shaw AgriVolt — Homepage wireframe specification

> **Source of truth:** homepage-story.md (narrative) + design-dna.md (system)  
> **Grid reference:** 12-col desktop / 8-col tablet / 4-col mobile  
> **Spacing base:** 8px unit  
> **Section padding:** 128px desktop · 96px tablet · 64px mobile  
> **Content max-width:** 1280px  
> **Edge padding:** 80px desktop · 32px tablet · 20px mobile  
> **Note:** All heights are approximate structural guides. Exact heights determined by content and viewport during visual design.

---
## Component Standards

Primary Button
56px height

Secondary Button
48px height

Input
56px height

Card Radius
8px

Content Card Padding
24px

Section Heading Width
720px max

Body Copy Width
640px max

Image Ratio
16:9
4:3
1:1

Container
1280px

Grid
12 / 8 / 4

---
## Navigation (persistent across all sections)

### Desktop layout
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------grid 12 cols-----------------------+  │
│  |                                                         |  │
│  |  [logo]    Nav 1  Nav 2  Nav 3  Nav 4  Nav 5    [CTA]  |  │
│  |                                                         |  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 12 columns spanning full width (content within max 1280px)
- **Height:** 72px
- **Position:** Fixed/sticky top. Transparent background over hero. Solid white (`--color-bg`) after first scroll threshold.
- **Logo:** Column 1–2, left-aligned
- **Navigation links:** Columns 4–9, centred within available space. 5–6 links.
- **CTA button:** Columns 11–12, right-aligned. Primary style (navy fill).
- **Transition:** Background swaps from transparent to solid white at a scroll distance of ~100px. No crossfade — instant swap on a `scroll` event via a class toggle.

### Tablet layout
```
┌────────────────────────────────────────────────┐
│  +--------------grid 8 cols------------------+  │
│  |  [logo]                         [hamburger] |  │
│  +--------------------------------------------+  │
└──────────────────────────────────────────────────┘
```
- **Height:** 64px
- **Logo:** Left-aligned
- **Hamburger icon:** Right-aligned, 44×44px touch target
- **CTA:** Moves into the mobile drawer (see below)

### Mobile layout
```
┌──────────────────────────────────┐
│  +---grid 4 cols---+            │
│  |  [logo]    [☰]  |            │
│  +------------------+            │
└──────────────────────────────────┘
```
- **Height:** 56px
- **Drawer:** Full-screen overlay, slides in from right edge. Navy background, white text. Large link type (~24px).
  - Navigation links stacked vertically
  - CTA button pinned to bottom of drawer (56px from bottom edge)
  - Close icon top-right, 44×44px touch target
  - `aria-expanded` toggled on hamburger + drawer

### Responsive behaviour
| Breakpoint | Nav type | Height | CTA location |
|------------|----------|--------|--------------|
| ≥1024px | Horizontal bar | 72px | In nav bar |
| 768–1023px | Hamburger + drawer | 64px | Inside drawer |
| 360–767px | Hamburger + drawer | 56px | Inside drawer |

### Accessibility
- Nav marked as `<nav>` with `aria-label="Main navigation"`
- Current page link: `aria-current="page"`
- Hamburger: `aria-expanded="false"` / `"true"`, `aria-controls="drawer-id"`
- Drawer: `role="dialog"`, `aria-modal="true"`
- Skip-to-content link as first focusable element
- Focus trap inside mobile drawer when open

---

## Section 1 — Hero

**Reference:** homepage-story.md Section 1 — "The Infrastructure Statement"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │           HERO AREA (100vh = ~900–1080px)              │  │
│  │                                                         │  │
│  │  Background: full-bleed video or photograph             │  │
│  │  (no overlay gradient — full opacity image)             │  │
│  │                                                         │  │
│  │             ┌─────────────────────────────────┐         │  │
│  │             │ col 1–6: Content block           │         │  │
│  │             │                                 │         │  │
│  │             │ [overline] "SATAT initiative"   │         │  │
│  │             │ (badge, not overline — top-left)│         │  │
│  │             │                                 │         │  │
│  │             │ Headline (max 8 words)          │         │  │
│  │             │  72–96px clamp                  │         │  │
│  │             │                                 │         │  │
│  │             │ Supporting line                 │         │  │
│  │             │  1 sentence, ~500px wide         │         │  │
│  │             │                                 │         │  │
│  │             │ [Primary CTA — "Explore our     │         │  │
│  │             │  infrastructure"]               │         │  │
│  │             │  56px height, large style       │         │  │
│  │             └─────────────────────────────────┘         │  │
│  │                                                         │  │
│  │  (No scroll chevron — composition leads eye down)       │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```

- **Grid:** Content in columns 1–6 (left-aligned). Columns 7–12 intentionally empty — the background imagery fills the full width.
- **Height:** 100vh (100% of viewport height). Fallback: 700px min-height.
- **Spacing:** 
  - Top padding: 120px from top edge (clears the ~72px nav)
  - Bottom padding: 80px from bottom edge
  - Content block max-width: 600px (within col 1–6)
  - Gap between headline and supporting line: `--space-lg` (40px)
  - Gap between supporting line and CTA: `--space-xl` (64px)
- **Content hierarchy:** SATAT badge (small, top-left) > Headline (dominant) > Supporting line (secondary) > CTA (tertiary in visual weight despite being a button)
- **Component placement:** Content is pinned to the lower-left third of the viewport — not centred vertically. This leaves the upper two-thirds for the background image to establish scale. Horizontal: 80px from left edge (within grid col 1–6).
- **Background:** Full-viewport behind the grid. The image/video fills the entire section and is not constrained by the content max-width.

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  +--------------------------------------------+ │
│  │          HERO AREA (80vh = ~768px)         │ │
│  │                                            │ │
│  │     ┌──────────────────────────┐           │ │
│  │     │ col 1–7: Content block    │           │ │
│  │     │                          │           │ │
│  │     │ Badge                    │           │ │
│  │     │                          │           │ │
│  │     │ Headline (48px clamp)    │           │ │
│  │     │                          │           │ │
│  │     │ Supporting line          │           │ │
│  │     │                          │           │ │
│  │     │ [Primary CTA]            │           │ │
│  │     └──────────────────────────┘           │ │
│  +--------------------------------------------+ │
└──────────────────────────────────────────────────┘
```
- **Grid:** Content in columns 1–7 (8-col grid)
- **Height:** 80vh
- **Content:** Same structure as desktop, scaled. Headline reduces via `clamp()`.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  +------------------------------+ │
│  │        HERO AREA (80vh)      │ │
│  │                              │ │
│  │  ┌────────────────────┐      │ │
│  │  │ col 1–4: Content    │      │ │
│  │  │                    │      │ │
│  │  │ Badge              │      │ │
│  │  │                    │      │ │
│  │  │ Headline           │      │ │
│  │  │ (40px clamp)       │      │ │
│  │  │                    │      │ │
│  │  │ Supporting line    │      │ │
│  │  │                    │      │ │
│  │  │ [Primary CTA]      │      │ │
│  │  │ full-width button  │      │ │
│  │  └────────────────────┘      │ │
│  +------------------------------+ │
└──────────────────────────────────┘
```
- **Grid:** Content spans full 4 columns
- **Height:** 80vh
- **CTA button:** Full-width (stretched across all 4 cols), 56px height. Touch target ≥ 48px.
- **Headline:** `clamp(40px, 10vw, 48px)`

### Responsive behaviour summary
| Element | Desktop (≥1024) | Tablet (768–1023) | Mobile (360–767) |
|---------|-----------------|-------------------|-------------------|
| Height | 100vh | 80vh | 80vh |
| Content columns | 1–6 (of 12) | 1–7 (of 8) | 1–4 (of 4) |
| Content alignment | Left | Left | Left |
| CTA width | Auto | Auto | Full-width |
| Top padding | 120px | 100px | 80px |
| Bottom padding | 80px | 64px | 48px |

### Accessibility
- Video: must have a "pause" button (visible on focus/keyboard), `aria-label="Pause hero video"`
- Video must not autoplay when `prefers-reduced-motion` is set
- Background image: empty `alt=""` (decorative)
- CTA: `<a>` or `<button>` with descriptive text, minimum 48px tap target
- Focus order: skip-link → nav → CTA
- No auto-playing audio on the video

---

## Section 2 — The Shift (Industrial Context)

**Reference:** homepage-story.md Section 2

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 2                            │  │
│  │  Background: white                                       │  │
│  │  Top padding: 64px (reduced — first section below hero)  │  │
│  │  Bottom padding: 128px                                   │  │
│  │                                                          │  │
│  │             ┌─────────────────────────────────┐          │  │
│  │             │ col 3–10: Content block (centred) │          │  │
│  │             │  max-width: 720px                │          │  │
│  │             │                                 │          │  │
│  │             │ [overline] "THE INDUSTRIAL CASE" │          │  │
│  │             │                                 │          │  │
│  │             │ Headline (H1 style)             │          │  │
│  │             │  48px clamp, centred            │          │  │
│  │             │  e.g., "Industry needs 200 MMT  │          │  │
│  │             │  of natural gas annually."     │          │  │
│  │             │                                 │          │  │
│  │             │ ─ ─ ─ 40px gap ─ ─ ─           │          │  │
│  │             │                                 │          │  │
│  │             │ Stat line 1 (body large, 18px)  │          │  │
│  │             │ Stat line 2 (body large)        │          │  │
│  │             │ Stat line 3 (body large)        │          │  │
│  │             │                                 │          │  │
│  │             │ [Data source citation]          │          │  │
│  │             │  caption, muted                │          │  │
│  │             └─────────────────────────────────┘          │  │
│  │                                                          │  │
│  │  (Optional: simple data vis chart — centred below text)  │  │
│  │  2-colour, no labels on bars. Height: ~240px            │  │
│  │                                                          │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** Content centered in columns 3–10 (8 col span). Text constrained to ~720px.
- **Height:** Content-determined. Approximate min-height: 300px without chart, ~540px with chart.
- **Spacing:**
  - Top padding: 64px (reduced — first section after hero)
  - Bottom padding: 128px
  - Overline to headline: `--space-md` (24px)
  - Headline to stat lines: `--space-lg` (40px)
  - Between stat lines: `--space-sm` (16px)
  - Stats to citation: `--space-md` (24px)
- **Content hierarchy:** Overline (small, muted) → Headline (dominant) → Body text (equal weight lines) → Citation (smallest)

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  +--------------------------------------------+ │
│  │  Top: 64px, Bottom: 96px                    │ │
│  │                                             │ │
│  │  ┌─────────────────────────────┐            │ │
│  │  │ col 1–8: Content (full width)│            │ │
│  │  │                             │            │ │
│  │  │ [overline]                  │            │ │
│  │  │ Headline (36px clamp)       │            │ │
│  │  │ Stat line x3                │            │ │
│  │  │ Citation                    │            │ │
│  │  └─────────────────────────────┘            │ │
│  +--------------------------------------------+ │
└──────────────────────────────────────────────────┘
```
- Content spans full 8 columns. Same structure, scaled.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  +------------------------------+ │
│  │  Top: 48px, Bottom: 64px     │ │
│  │                              │ │
│  │  ┌─────────────────┐         │ │
│  │  │ col 1–4: Content│         │ │
│  │  │                │         │ │
│  │  │ [overline]     │         │ │
│  │  │ Headline       │         │ │
│  │  │ (26px clamp)   │         │ │
│  │  │                │         │ │
│  │  │ Stat line      │         │ │
│  │  │ Stat line      │         │ │
│  │  │ Stat line      │         │ │
│  │  │ Citation       │         │ │
│  │  └─────────────────┘         │ │
│  +------------------------------+ │
└──────────────────────────────────┘
```
- Single column. Full-width text. No data vis on mobile (too small to read).

### Accessibility
- All text has ≥ 4.5:1 contrast vs. white background
- Data vis chart (if present): must have a text-based data table alternative accessible via screen reader
- `aria-labelledby` on chart pointing to the headline

---

## Section 3 — Process (How it works)

**Reference:** homepage-story.md Section 3 — "One feedstock, two outputs"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 3                            │  │
│  │  Background: off-white (--color-surface)                 │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 3–10: Heading block (centred)                    │ │  │
│  │  │  [overline] "OUR PROCESS"                            │ │  │
│  │  │  Headline (H1): "Agricultural waste → high-purity   │ │  │
│  │  │  Bio-CNG + certified organic fertiliser"            │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │                                                          │  │
│  │  ┌─── col 1 ──┐ ┌─── col 4 ──┐ ┌─── col 4 ──┐ ┌─── col 3 ──┐│
│  │  │             │ │             │ │             │ │             ││
│  │  │  [STEP 01]  │─│  [STEP 02]  │─│  [STEP 03]  │─│  [STEP 04]  ││
│  │  │             │ │             │ │             │ │             ││
│  │  │ "Feedstock" │ │ "Digestion" │ │Purification │ │  "Output"   ││
│  │  │  collection │ │             │ │             │ │             ││
│  │  │ description │ │ description │ │ description │ │ description ││
│  │  │             │ │             │ │             │ │             ││
│  │  │ [spec tag]  │ │ [spec tag]  │ │ [spec tag]  │ │ [spec tag]  ││
│  │  │             │ │             │ │             │ │             ││
│  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘│
│  │       col 1         col 4          col 4            col 3       │
│  │       (narrow)      (3-col span)   (3-col span)    (2-col span) │
│  │                                                          │
│  │  Connector lines: horizontal navy line connecting        │
│  │  step 01 → 02 → 03 → 04, running through gutter space   │
│  │                                                          │
│  │  ┌─────────────────────────────────────────────────────┐ │
│  │  │ col 5–8: [Text link CTA] "Explore our technology →" │ │
│  │  │            centred                                   │ │
│  │  └─────────────────────────────────────────────────────┘ │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:**
  Four equal process cards.
Each card spans 3 columns of the 12-column grid.


```
│  ┌────4 cols────┐ ┌────4 cols────┐ ┌────4 cols────┐ ┌────4 cols────┐│
│  │  [STEP 01]   │ │  [STEP 02]   │ │  [STEP 03]   │ │  [STEP 04]   ││
│  │              │ │              │ │              │ │              ││
│  │  "Feedstock" │ │  "Digestion" │ │"Purification"│ │  "Output"    ││
│  │  collection  │ │              │ │              │ │              ││
│  │  desc...     │ │  desc...     │ │  desc...     │ │  desc...     ││
│  │              │ │              │ │              │ │              ││
│  │  [spec tag]  │ │  [spec tag]  │ │  [spec tag]  │ │  [spec tag]  ││
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘│
│  (within 12-col grid, each card spans 3 cols = 4 cards total)      │
```

  That works. Each card spans 3 of 12 columns. 4 × 3 = 12.

- **Height:** Content-determined. Approximate: heading block ~140px + card row ~320px + CTA ~60px = ~520px content. With 128px padding top+bottom = ~776px total section height.
- **Spacing:**
  - Heading block bottom margin: `--space-xl` (64px)
  - Between step cards: equal spacing (gutters provide separation)
  - Within each card: step number → label (16px) → description (8px) → spec tag (16px)
  - Connector line: 1px navy line, 40px offset from card top edge
  - CTA link below cards: `--space-xl` (64px) gap
- **Content hierarchy:** Overline → Headline → Step cards (number = marker, label = subheading, description = detail, spec tag = metadata)

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  ┌────────────────────────────┐                 │
│  │ col 2–7: Heading block     │                 │
│  │ [overline] + Headline       │                 │
│  └────────────────────────────┘                 │
│                                                │
│  ┌─── col 1-4 ───┐ ┌─── col 5-8 ───┐          │
│  │  [STEP 01]    │ │  [STEP 02]    │           │
│  │  Feedstock    │ │  Digestion    │           │
│  │  ...          │ │  ...          │           │
│  └───────────────┘ └───────────────┘           │
│                                                │
│  ┌─── col 1-4 ───┐ ┌─── col 5-8 ───┐          │
│  │  [STEP 03]    │ │  [STEP 04]    │           │
│  │  Purification │ │  Output       │           │
│  │  ...          │ │  ...          │           │
│  └───────────────┘ └───────────────┘           │
│                                                │
│  ┌────────────────────────────┐                 │
│  │ [CTA] "Explore technology"│                 │
│  └────────────────────────────┘                 │
└──────────────────────────────────────────────────┘
```
- 2×2 grid: 4 step cards arranged in 2 rows of 2
- Cards span 4 cols each on 8-col grid

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  ┌──────────────────┐            │
│  │ col 1–4: Heading  │            │
│  └──────────────────┘            │
│                                  │
│  ┌──────────────────┐            │
│  │ [STEP 01]         │            │
│  │ Feedstock...      │            │
│  └──────────────────┘            │
│  ┌──────────────────┐            │
│  │ [STEP 02]         │            │
│  │ Digestion...      │            │
│  └──────────────────┘            │
│  ┌──────────────────┐            │
│  │ [STEP 03]         │            │
│  │ Purification...   │            │
│  └──────────────────┘            │
│  ┌──────────────────┐            │
│  │ [STEP 04]         │            │
│  │ Output...         │            │
│  └──────────────────┘            │
│                                  │
│  [CTA]                           │
└──────────────────────────────────┘
```
- Single column vertical stack. Step cards separated by `--space-md` (24px).
- No connector lines on mobile (too narrow to read).

### Accessibility
- Step cards are `<article>` or `<div>` with `aria-label="Step 1: Feedstock collection"`
- Connector lines: purely decorative, `aria-hidden="true"`
- CTA: descriptive link text ("Explore our Bio-CNG technology" not "Learn more")

---

## Section 4 — Scale & metrics (KPI row)

**Reference:** homepage-story.md Section 4 — "In operation"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 4                            │  │
│  │  Background: white                                       │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │  │
│  │  │ col 1-3 │ │ col 4-6 │ │ col 7-9 │ │ col 10-12│       │  │
│  │  │         │ │         │ │         │ │         │       │  │
│  │  │  [KPI]  │ │  [KPI]  │ │  [KPI]  │ │  [KPI]  │       │  │
│  │  │         │ │         │ │         │ │         │       │  │
│  │  │ ┌───┐   │ │ ┌───┐   │ │ ┌───┐   │ │ ┌───┐   │       │  │
│  │  │ │ N │   │ │ │ N │   │ │ │ N │   │ │ │ N │   │       │  │
│  │  │ └───┘   │ │ └───┘   │ │ └───┘   │ │ └───┘   │       │  │
│  │  │         │ │         │ │         │ │         │       │  │
│  │  │ Label    │ │ Label    │ │ Label    │ │ Label    │       │  │
│  │  │ Context  │ │ Context  │ │ Context  │ │ Context  │       │  │
│  │  │          │ │          │ │          │ │          │       │  │
│  │  │ ▔▔▔▔    │ │ ▔▔▔▔    │ │ ▔▔▔▔    │ │ ▔▔▔▔    │       │  │
│  │  │ (2px    │ │ (2px    │ │ (2px    │ │ (2px    │       │  │
│  │  │  navy   │ │  navy   │ │  navy   │ │  navy   │       │  │
│  │  │  line)  │ │  line)  │ │  line)  │ │  line)  │       │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘       │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 4 equal columns. Each KPI spans 3 of 12 columns.
- **Height:** Content-determined. Approximate: ~260px (number 80px + label 20px + context 16px + top line 40px + internal padding)
- **Spacing:**
  - Between KPIs: gutter (24px)
  - Within each KPI: number → label (`--space-sm`/16px) → context (8px)
  - Top border line: 40px wide, 2px thick, anchored 24px from card top
  - Each KPI centred within its column
- **Content hierarchy:** Top border line (visual anchor) → Number (dominant, display face) → Label (secondary, uppercase, muted) → Context (tertiary, body small)
- **Component placement:** No section heading or overline — the numbers speak for themselves. No section label needed.

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  ┌───────── col 1-4 ─────────┐ ┌───────── col 5-8 ─────────┐│
│  │  [KPI 1]                  │ │  [KPI 2]                  ││
│  │  Number                   │ │  Number                   ││
│  │  Label                    │ │  Label                    ││
│  │  Context                  │ │  Context                  ││
│  └───────────────────────────┘ └───────────────────────────┘│
│                                                             │
│  ┌───────── col 1-4 ─────────┐ ┌───────── col 5-8 ─────────┐│
│  │  [KPI 3]                  │ │  [KPI 4]                  ││
│  │  Number                   │ │  Number                   ││
│  │  Label                    │ │  Label                    ││
│  │  Context                  │ │  Context                  ││
│  └───────────────────────────┘ └───────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```
- 2×2 grid: 2 rows of 2 KPIs
- Each KPI spans 4 columns on 8-col grid

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  ┌────────────────────┐          │
│  │  [KPI 1]            │          │
│  │  Number             │          │
│  │  Label              │          │
│  │  Context            │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │  [KPI 2]            │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │  [KPI 3]            │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │  [KPI 4]            │          │
│  └────────────────────┘          │
└──────────────────────────────────┘
```
- Single column vertical stack. Each KPI full width.
- Numbers scaled down via `clamp()`.

### Accessibility
- KPI numbers: if animated (count-up), the final value must be immediately visible to screen readers. Use `aria-valuenow` or render the final number in HTML and animate only the visual display.
- Each KPI block: structured as `<dl>` (term = label, definition = value) or `<div>` with appropriate ARIA roles
- No auto-animation on `prefers-reduced-motion`

---

## Section 5 — Certifications & trust

**Reference:** homepage-story.md Section 5 — "Standards"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 5                            │  │
│  │  Background: off-white (--color-surface)                 │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 3–10: Heading block (centred)                    │ │  │
│  │  │  [overline] "CERTIFICATIONS & COMPLIANCE"            │ │  │
│  │  │  Headline (H2): Short statement on standards         │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │                                                          │  │
│  │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                   │  │
│  │  │col 2-3│ │col 4-5│ │col 6-7│ │col 8-9│               │  │
│  │  │       │ │       │ │       │ │       │               │  │
│  │  │Badge  │ │Badge  │ │Badge  │ │Badge  │               │  │
│  │  │card   │ │card   │ │card   │ │card   │               │  │
│  │  │       │ │       │ │       │ │       │               │  │
│  │  │[logo] │ │[logo] │ │[logo] │ │[logo] │               │  │
│  │  │       │ │       │ │       │ │       │               │  │
│  │  │Name   │ │Name   │ │Name   │ │Name   │               │  │
│  │  │Reg #  │ │Reg #  │ │Reg #  │ │Reg #  │               │  │
│  │  └──────┘ └──────┘ └──────┘ └──────┘                   │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 5–8: [Text link] "Download compliance docs →"   │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** Badge cards in a row of 4, each spanning 2 columns (col 2–3, 4–5, 6–7, 8–9). Results in 8 columns used, 2 empty on each side for centring.
- **Height:** ~400–500px (heading ~120px + card row ~240px + CTA ~40px + internal padding)
- **Spacing:** 
  - Heading to cards: `--space-xl` (64px)
  - Between badge cards: gutter (24px)
  - Within each card: logo (centred) → name (16px gap) → reg number (8px gap)
  - Card internal padding: `--space-md` (24px)
- **Content hierarchy:** Overline → Headline → Badge cards (equally weighted, no hierarchy between them)

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  ┌────────────────────────────┐                 │
│  │ Heading (col 1–8)          │                 │
│  └────────────────────────────┘                 │
│                                                │
│  ┌───── col 1-4 ─────┐ ┌───── col 5-8 ─────┐  │
│  │ Badge card 1       │ │ Badge card 2       │  │
│  └────────────────────┘ └────────────────────┘  │
│  ┌───── col 1-4 ─────┐ ┌───── col 5-8 ─────┐  │
│  │ Badge card 3       │ │ Badge card 4       │  │
│  └────────────────────┘ └────────────────────┘  │
│                                                │
│  [CTA] "Download compliance docs →"            │
└──────────────────────────────────────────────────┘
```
- 2×2 grid. Cards span 4 cols each.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  Heading block                    │
│                                  │
│  ┌────────────────────┐          │
│  │ Badge card 1        │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Badge card 2        │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Badge card 3        │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Badge card 4        │          │
│  └────────────────────┘          │
│                                  │
│  [CTA]                           │
└──────────────────────────────────┘
```
- Single column vertical stack.

### Accessibility
- Each badge card: `<figure>` with `<figcaption>` containing the certification name
- Badge images: `alt="SATAT certification logo"` (descriptive — these are content, not decoration)
- CTA: `aria-label="Download compliance documentation (PDF, X MB)"`

---

## Section 6 — Product preview

**Reference:** homepage-story.md Section 6 — "Our products"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 6                            │  │
│  │  Background: white                                       │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 3–10: Heading block (centred)                    │ │  │
│  │  │  [overline] "PRODUCTS"                              │ │  │
│  │  │  Headline (H1): "Industrial-grade outputs..."       │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │                                                          │  │
│  │  ┌─────────── col 2-6 ───────────┐ ┌─────────── col 7-11 ─┐│
│  │  │  ┌────────────────────────┐   │ │  ┌────────────────┐  ││
│  │  │  │  Product card:         │   │ │  │  Product card: │  ││
│  │  │  │  Bio-CNG               │   │ │  │  Fertilisers   │  ││
│  │  │  │                        │   │ │  │                │  ││
│  │  │  │  Spec 1 | Spec 2       │   │ │  │  Spec 1 | Spec │  ││
│  │  │  │  Spec 3 | Spec 4       │   │ │  │  Spec 3 | Spec │  ││
│  │  │  │                        │   │ │  │                │  ││
│  │  │  │  [View specs →]        │   │ │  │  [View specs→]│  ││
│  │  │  └────────────────────────┘   │ │  └────────────────┘  ││
│  │  └───────────────────────────────┘ └──────────────────────┘│
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 5–8: [Secondary button] "Request a quote →"     │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 2 product cards side by side. Card 1 spans col 2–6 (5 cols). Card 2 spans col 7–11 (5 cols). Col 1 and 12 act as balanced side margins.
- **Height:** Content-determined. ~160px heading + ~340px cards + ~80px CTA + internal padding = ~580px content. With 128px × 2 padding = ~836px total.
- **Card structure:**
  - 1px border (`--color-border`), 8px radius
  - Internal padding: `--space-md` (24px)
  - Product name: H3 (24px, 600 weight)
  - 4 spec lines: 14px body, left-aligned, separated by `--space-sm` (16px) between lines
  - CTA at card bottom: text link with arrow
  - No image block (specs replace imagery)
- **Spacing:**
  - Heading to cards: `--space-xl` (64px)
  - Cards to bottom CTA: `--space-xl` (64px)
  - Within each card: name → specs (24px) → CTA (auto bottom)

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  Heading block (col 1–8)                        │
│                                                │
│  ┌─────────── col 1-8 ───────────┐              │
│  │  Product card: Bio-CNG         │              │
│  │  Spec 1 | Spec 2 | Spec 3 ...  │              │
│  │  [View specs →]                │              │
│  └────────────────────────────────┘              │
│                                                │
│  ┌─────────── col 1-8 ───────────┐              │
│  │  Product card: Fertilisers     │              │
│  │  Spec 1 | Spec 2 | Spec 3 ...  │              │
│  │  [View specs →]                │              │
│  └────────────────────────────────┘              │
│                                                │
│  [CTA] "Request a quote →"                      │
└──────────────────────────────────────────────────┘
```
- Cards stack vertically, full width (8 cols).

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  Heading block (col 1–4)         │
│                                  │
│  ┌────────────────────┐          │
│  │ Bio-CNG card       │          │
│  │ Spec 1             │          │
│  │ Spec 2             │          │
│  │ Spec 3             │          │
│  │ [View specs →]     │          │
│  └────────────────────┘          │
│                                  │
│  ┌────────────────────┐          │
│  │ Fertilisers card   │          │
│  │ Spec 1             │          │
│  │ Spec 2             │          │
│  │ Spec 3             │          │
│  │ [View specs →]     │          │
│  └────────────────────┘          │
│                                  │
│  [CTA] "Request a quote"         │
│  (full-width secondary button)   │
└──────────────────────────────────┘
```
- Vertical stack. Full-width buttons for touch targets.

### Accessibility
- Product cards: `<article>` with `<h3>` heading, `aria-labelledby` on the heading
- Spec data: `<dl>` within each card, or a `<table>` with `role="presentation"` if layout-only
- CTA links: distinct descriptive text (e.g., "View Bio-CNG product specifications")

---

## Section 7 — Case study / Proof in practice

**Reference:** homepage-story.md Section 7 — "In practice"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 7                            │  │
│  │  Background: off-white (--color-surface)                 │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌───────────────────────────────────┐ ┌──────────────┐ │  │
│  │  │ col 1–6: Text block (left)       │ │ col 7–12:   │ │  │
│  │  │                                  │ │ Image block │ │  │
│  │  │ [overline] "CASE STUDY"          │ │             │ │  │
│  │  │                                  │ │  [PHOTO]    │ │  │
│  │  │ Headline: "Supplying Bio-CNG     │ │  plant or   │ │  │
│  │  │ to [client]"                     │ │  truck      │ │  │
│  │  │                                  │ │  loading    │ │  │
│  │  │ 2–3 sentence summary             │ │             │ │  │
│  │  │                                  │ │  100% width │ │  │
│  │  │ Key stat: "XX tonnes CO₂         │ │  full       │ │  │
│  │  │ displaced"                       │ │  height     │ │  │
│  │  │                                  │ │  object-fit │ │  │
│  │  │ [Client logo — if available]     │ │  cover      │ │  │
│  │  │                                  │ │             │ │  │
│  │  │ [Primary CTA] "Read the full     │ │             │ │  │
│  │  │ case study →"                    │ │             │ │  │
│  │  └───────────────────────────────────┘ └──────────────┘ │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 60/40 split. Text in col 1–6 (left half). Image in col 7–12 (right half).
- **Height:** Content-determined, but image forces a min-height. Let the image's aspect ratio (16:9 or 4:3) drive row height. Approximate: ~440px.
- **Spacing:**
  - Within text block: overline → headline (24px) → summary (16px) → stat (24px) → logo (24px) → CTA (32px)
  - Text content padding-right: 40px (gap between text and image)
  - Image: full-height, `object-fit: cover`, right-aligned
- **Content hierarchy:** Overline → Headline (H2) → Body text → Stat (emphasised) → Logo (lower visual weight) → CTA (action)
- **If no real case study exists:** Replace with "placeholder" copy. Same layout, same structural weight. The image column remains if a relevant photo exists.

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  ┌────────────────────────────┐                 │
│  │ col 1–8: Text block        │                 │
│  │ [overline]                 │                 │
│  │ Headline                   │                 │
│  │ Summary                    │                 │
│  │ Stat                       │                 │
│  │ [CTA]                      │                 │
│  └────────────────────────────┘                 │
│                                                │
│  ┌────────────────────────────┐                 │
│  │ col 1–8: Image (full width)│                 │
│  │ 16:9 aspect ratio box      │                 │
│  └────────────────────────────┘                 │
└──────────────────────────────────────────────────┘
```
- Text above image, stacked vertically. Both full 8 cols.
- Image: 16:9 aspect ratio container, `object-fit: cover`.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  Text block (col 1–4)            │
│  [overline]                      │
│  Headline (26px)                 │
│  Summary                         │
│  Stat                            │
│  [CTA — full-width]              │
│                                  │
│  Image (col 1–4)                 │
│  16:9 aspect ratio               │
│  [PHOTO]                         │
└──────────────────────────────────┘
```
- Text block stacked above image, same order as tablet.
- CTA: full-width primary button.

### Accessibility
- Image: descriptive `alt` text ("Shaw AgriVolt Bio-CNG storage spheres at [location] plant")
- Stat value: screen reader accessible (not dependent on animation)
- CTA: "Read the full case study: Supplying Bio-CNG to [client name]"

---

## Section 8 — Partnerships

**Reference:** homepage-story.md Section 8 — "Partner with us"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 8                            │  │
│  │  Background: white                                       │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 3–10: Heading block (centred)                    │ │  │
│  │  │  [overline] "PARTNERSHIPS"                          │ │  │
│  │  │  Headline: "Supply. Distribute. Grow with us."      │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  │                                                          │  │
│  │  ┌──────── col 2-6 ──────────┐ ┌──────── col 7-11 ────┐ │  │
│  │  │  ┌──────────────────────┐ │ │  ┌──────────────────┐ │ │  │
│  │  │  │ Supplier column       │ │ │  │ Dealer column   │ │ │  │
│  │  │  │                       │ │ │  │                 │ │ │  │
│  │  │  │ [icon placeholder]    │─│ │  │ [icon placehold]│─│ │  │
│  │  │  │                       │ │ │  │                 │ │ │  │
│  │  │  │ Sub-heading           │ │ │  │ Sub-heading     │ │ │  │
│  │  │  │ For biomass suppliers │ │ │  │ For dealers     │ │ │  │
│  │  │  │                       │ │ │  │                 │ │ │  │
│  │  │  │ • Bullet 1            │ │ │  │ • Bullet 1      │ │ │  │
│  │  │  │ • Bullet 2            │ │ │  │ • Bullet 2      │ │ │  │
│  │  │  │ • Bullet 3            │ │ │  │ • Bullet 3      │ │ │  │
│  │  │  │                       │ │ │  │                 │ │ │  │
│  │  │  │ [CTA] "Become a       │ │ │  │ [CTA] "Apply as│ │ │  │
│  │  │  │  supplier →"          │ │ │  │  a dealer →"   │ │ │  │
│  │  │  └──────────────────────┘ │ │  └──────────────────┘ │ │  │
│  │  └────────────────────────────┘ └───────────────────────┘ │  │
│  │                                                          │  │
│  │  Vertical divider line between col 6 and 7              │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 2 columns. Supplier in col 2–6 (5 cols). Dealer in col 7–11 (5 cols). Col 1 and 12 as balanced margins.
- **Height:** Content-determined. ~140px heading + ~320px columns = ~460px content. + padding = ~716px total.
- **Spacing:**
  - Heading to columns: `--space-xl` (64px)
  - Between columns: gutter (24px) + 1px divider
  - Within columns: sub-heading → bullet 1 (16px) → bullet 2 (8px) → bullet 3 (8px) → CTA (24px)
- **Divider:** 1px solid `--color-border`, full column height, centred in the gutter between col 6 and 7.
- **Content hierarchy:** Overline → Headline → Two columns of equal weight (sub-heading + bullet list + CTA)

### Tablet & mobile layout
Same pattern as tablet/mobile for other sections — 2-col → stack vertically. On mobile, remove the vertical divider.

### Accessibility
- Columns: marked as `<section>` or `<div>` with `aria-labelledby` pointing to the sub-heading
- Bullet lists: use `<ul>` / `<li>`
- CTAs: distinct text (not both "Learn more")

---

## Section 9 — Final CTA / Contact

**Reference:** homepage-story.md Section 9 — "Start the conversation"

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     SECTION 9                            │  │
│  │  Background: navy (--color-accent)                       │  │
│  │  Padding: 128px top + bottom                             │  │
│  │                                                          │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │ col 2–11: Content block (centred)                    │ │  │
│  │  │                                                      │ │  │
│  │  │  Headline (H1): "Ready to discuss your fuel or      │ │  │
│  │  │  fertiliser requirements?"                           │ │  │
│  │  │  White text. Centred.                                │ │  │
│  │  │                                                      │ │  │
│  │  │  Supporting line: "Send us a message or reach out   │ │  │
│  │  │  directly."                                          │ │  │
│  │  │  White text at 70% opacity. Centred.                 │ │  │
│  │  │                                                      │ │  │
│  │  │  ┌───────────────────────────────────────┐          │ │  │
│  │  │  │  col 4–9: Form card (white surface)      │          │ │  │
│  │  │  │                                       │          │ │  │
│  │  │  │  ┌──────────┐ ┌──────────┐            │          │ │  │
│  │  │  │  │ Name     │ │ Company  │            │          │ │  │
│  │  │  │  └──────────┘ └──────────┘            │          │ │  │
│  │  │  │  ┌──────────┐ ┌──────────┐            │          │ │  │
│  │  │  │  │ Email    │ │ Phone    │            │          │ │  │
│  │  │  │  └──────────┘ └──────────┘            │          │ │  │
│  │  │  │  ┌──────────────────────┐              │          │ │  │
│  │  │  │  │ Interest (dropdown)  │              │          │ │  │
│  │  │  │  └──────────────────────┘              │          │ │  │
│  │  │  │  ┌──────────────────────┐              │          │ │  │
│  │  │  │  │ Message (textarea)   │              │          │ │  │
│  │  │  │  └──────────────────────┘              │          │ │  │
│  │  │  │                                       │          │ │  │
│  │  │  │  [Primary CTA] "Send inquiry"         │          │ │  │
│  │  │  │  (full-width, navy on white)          │          │ │  │
│  │  │  └───────────────────────────────────────┘          │ │  │
│  │  │                                                      │ │  │
│  │  │  Contact options below form:                         │ │  │
│  │  │  Phone: +91 XXXXX XXXXXX  |  Email: info@...       │ │  │
│  │  │  Address: [plant location]                          │ │  │
│  │  │  White text, centred, caption size                  │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** Content centred in col 2–11. Form card in col 4–9 (6 cols).
- **Height:** Form-determined. ~580–680px total (headlines 180px + form card ~360px + contact info ~40px + internal padding)
- **Form layout:**
  - 2-column inline: Name + Company in one row, Email + Phone in next row (desktop only)
  - Dropdown spans full width
  - Textarea: 4 rows, 120px height
  - Submit button: full-width, navy background, white text, 56px height
- **Spacing:**
  - Headline to form: `--space-xl` (64px)
  - Form card internal padding: `--space-lg` (40px)
  - Between form fields: `--space-md` (24px)
  - Form to contact details: `--space-lg` (40px)
- **Content hierarchy:** Headline (dominant, white) → Supporting line (secondary) → Form (functional) → Contact details (tertiary)

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  Headline (col 1–8)                             │
│  Supporting line                                │
│                                                │
│  ┌────────────────────────────┐                 │
│  │ col 2–7: Form               │                 │
│  │ Name     Company            │                 │
│  │ Email    Phone              │                 │
│  │ Interest (dropdown)         │                 │
│  │ Message (textarea)          │                 │
│  │ [Submit]                    │                 │
│  └────────────────────────────┘                 │
│                                                │
│  Contact info (phone, email)                    │
└──────────────────────────────────────────────────┘
```
- Form narrows to col 2–7 (6 of 8 cols). 2-column fields retained.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  Headline (col 1–4)              │
│  Supporting line                 │
│                                  │
│  ┌────────────────────┐          │
│  │ col 1–4: Form      │          │
│  │                    │          │
│  │ Name               │          │
│  │ Company            │          │
│  │ Email              │          │
│  │ Phone              │          │
│  │ Interest           │          │
│  │ Message            │          │
│  │                    │          │
│  │ [Submit]           │          │
│  │ (full-width)       │          │
│  └────────────────────┘          │
│                                  │
│  Phone / Email                   │
└──────────────────────────────────┘
```
- Single-column form (each field full width). All fields stacked vertically.
- Form card: full width (4 cols), no side margins within section padding.

### Accessibility
- Form: `<form>` with `aria-label="Contact inquiry form"`
- Each input: associated `<label>` (visible), `aria-required="true"` on required fields
- Error messages: `aria-describedby` linking to error span, `aria-invalid="true"` on field
- Submit: `<button type="submit">` not an `<a>` or `<div>`
- Success/failure: live region (`aria-live="polite"`) for form feedback
- Contact phone: `<a href="tel:+91XXXXXXXXXX">` for click-to-call on mobile
- Colour contrast: white text on navy background — verify ≥ 4.5:1 for body text, ≥ 3:1 for large text

---

## Section 10 — Footer

**Reference:** homepage-story.md Section 10

### Desktop layout (1440–1920px)
```
┌──────────────────────────────────────────────────────────────┐
│  +---------------------------------------------------------+  │
│  │                     FOOTER                               │  │
│  │  Background: near-black navy (oklch 0.13)                │  │
│  │  Padding: 80px top + 48px bottom                         │  │
│  │                                                          │  │
│  │  ┌──── col 1-3 ────┐ ┌── col 4-6 ──┐ ┌── col 7-9 ──┐ ┌── col 10-12 ──┐│
│  │  │  Company         │ │  Products   │ │  Resources   │ │  Contact      ││
│  │  │                  │ │             │ │              │ │               ││
│  │  │  About           │ │  Bio-CNG    │ │  Case        │ │  Address      ││
│  │  │  Infrastructure  │ │  Fertiliser │ │  studies     │ │  Phone        ││
│  │  │  Leadership      │ │  (future)   │ │  Certif.     │ │  Email        ││
│  │  │  Careers         │ │             │ │  ESG reports │ │  [LinkedIn]   ││
│  │  │                  │ │             │ │  Lab reports │ │               ││
│  │  └──────────────────┘ └─────────────┘ └──────────────┘ └───────────────┘│
│  │                                                          │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │  Bottom bar:                                         │ │  │
│  │  │  [logo] [SATAT badge]   © 2025 Shaw AgriVolt        │ │  │
│  │  │                                     EN | বাংলা       │ │  │
│  │  │  1px top border at white 15%                        │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  +---------------------------------------------------------+  │
└──────────────────────────────────────────────────────────────┘
```
- **Grid:** 4 columns, each 3 cols wide. Content max-width: 1280px.
- **Height:** Content-determined. ~320px (links) + ~60px (bottom bar) = ~380px.
- **Spacing:**
  - Top padding: 80px. Bottom padding: 48px.
  - Column heading to links: `--space-md` (24px)
  - Between links in a column: `--space-sm` (16px)
  - Bottom bar: 16px vertical padding, 1px top border
- **Content hierarchy:** Column headings (captions, uppercase, white 100%) → Links (body small, white 70%)
- **Language switcher:** Right-aligned in bottom bar. Text links: "EN" / "বাংলা". Active language highlighted (white 100%). Inactive at 50%.

### Tablet layout (768–1023px)
```
┌────────────────────────────────────────────────┐
│  ┌─── col 1-4 ────┐ ┌─── col 5-8 ────┐        │
│  │  Company        │ │  Products      │        │
│  │  ...            │ │  ...           │        │
│  └─────────────────┘ └─────────────────┘        │
│  ┌─── col 1-4 ────┐ ┌─── col 5-8 ────┐        │
│  │  Resources      │ │  Contact       │        │
│  │  ...            │ │  ...           │        │
│  └─────────────────┘ └─────────────────┘        │
│                                                │
│  Bottom bar (full width)                       │
└──────────────────────────────────────────────────┘
```
- 2×2 grid on 8-col layout.

### Mobile layout (360–767px)
```
┌──────────────────────────────────┐
│  ┌────────────────────┐          │
│  │ Company             │          │
│  │ About, Infra, ...   │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Products            │          │
│  │ Bio-CNG, Fert...    │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Resources           │          │
│  └────────────────────┘          │
│  ┌────────────────────┐          │
│  │ Contact             │          │
│  └────────────────────┘          │
│                                  │
│  Bottom bar                      │
│  [logo] © 2025                   │
│  EN | বাংলা                      │
└──────────────────────────────────┘
```
- Single column vertical stack. Each section collapsed with heading only (expandable accordion optional — link list shown by default on mobile).

### Accessibility
- Footer: `<footer>` element, `aria-label="Site footer"`
- Link lists: `<ul>` with `<li>` and `<a>` elements
- Language switcher: `<a>` links with `hreflang` attributes, `lang` attribute on each
- Bottom bar logo: empty `alt=""` if decorative, or "Shaw AgriVolt" if needed
- SATAT badge: `alt="SATAT initiative"` — meaningful content

---

## Page-level responsive summary

| Feature | Desktop (≥1024) | Tablet (768–1023) | Mobile (360–767) |
|---------|-----------------|-------------------|-------------------|
| Grid | 12-col | 8-col | 4-col |
| Edge padding | 80px | 32px | 20px |
| Content max-width | 1280px | 100% | 100% |
| Section padding (vertical) | 128px | 96px | 64px |
| First section below hero | 64px top | 64px top | 48px top |
| Navigation | Horizontal bar | Hamburger drawer | Hamburger drawer |
| Multi-column layouts | As specified | 2-col or stack | Always single column |
| Hero image | Full-viewport | 80vh | 80vh |
| Forms | 2-col fields | 2-col fields | Single-col |
| Footer | 4 columns | 2×2 grid | Stacked |

## Page-level accessibility checklist
- Skip-to-content link as first focusable element
- `role="main"` on the `<main>` wrapper around all sections
- Sequential heading hierarchy: h1 → h2 → h3 (no gaps, no skips)
- Each section: semantic `<section>` with `aria-labelledby` pointing to its heading
- All interactive elements: visible focus indicator (2px navy + 2px offset)
- All images: meaningful `alt` text (content) or `alt=""` (decorative — decorative images should not exist)
- All forms: associated `<label>`, `aria-required`, inline error messages
- `lang="en"` on root — toggle to `lang="bn"` for Bengali version
- `prefers-reduced-motion`: collapse all animations to 200ms crossfade or disable
- Colour contrast: minimum 4.5:1 for body text, 3:1 for large text (≥24px / 19px bold)
- Zoom: page must work at 200% zoom without horizontal scroll or content loss
- Navigation: all links and controls reachable via keyboard in logical tab order

---

*This wireframe specification is the structural blueprint for visual design. Every layout decision here traces back to design-dna.md (grid, spacing, component philosophy) and homepage-story.md (narrative sequence, content priority). If a conflict emerges between this document and either source, the source documents win.*
