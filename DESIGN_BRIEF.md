# 1789 Website — Design Brief & Claude Working Rules

This document gives Claude full context to work on the 1789 website codebase without re-discovering things from scratch. Read it before touching any component. Follow every rule literally.

---

## 1. Project overview

**Client:** 1789 — a gap-consulting firm that helps organisations close the structural gap between strategy and execution ("der Gap").

**Services offered:** Operating Model design, Strukturation, AI-Human-Native integration.

**Tagline concept:** Organisations don't fail because of bad strategy — they fail at the gap between strategy and structure. 1789 closes that gap.

**Tech stack:**
- Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- Inline styles are preferred over Tailwind classes for layout and positioning — Tailwind is used for utilities (gap, flex, padding shorthands)
- CSS custom properties for all design tokens (no hardcoded values in components)
- All components in `/web/src/components/` — atoms / molecules / organisms / layout
- Data in `/web/src/data/`
- Public assets in `/web/public/`

---

## 2. Visual identity

### Design language
Swiss editorial meets Bauhaus geometry. The aesthetic has four qualities:
1. **Precision** — hairlines, mono labels, exact spacing. Nothing soft or casual.
2. **Weight** — large display type, strong contrast ratios. Headlines dominate.
3. **Restraint** — few colours, lots of whitespace. Every element earns its place.
4. **Motion** — animations are purposeful, not decorative. They carry meaning.

### References / mood
- foreverday.one — type scale, heading weight, section rhythm
- Swiss/Bauhaus poster design — geometric compositions, grid discipline
- High-end management consultancy, not a startup agency

### Brand mark
The `Logo1789` component renders "1789" in a variable-font animation where each character morphs independently (width + weight axes). The characters have symbolic roles:
- `1` — The Anchor (compressed↔expanded)
- `7` — The Opposite (mirrors `1`)
- `8` — The Transformer (extreme width swings)
- `9` — The Wanderer (slow independent arc)

The word "1789" should never be rendered as static text in a headline — always use the `<Logo1789>` component.

---

## 3. Colour palette

All colours are defined as CSS custom properties. In component JSX, **always use the token names** — not the hex values — except inside SVG `fill` and `stroke` attributes where CSS variables are unreliable (use hardcoded hex there).

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#F2F2F2` | Page background, light cards |
| `--color-surface` | `#E8E8E8` | Slightly darker surfaces |
| `--color-border` | `#2E2B28` | Borders and dividers |
| `--color-ink` | `#1A1714` | Primary text, dark UI |
| `--color-ink-muted` | `#6B6560` | Secondary text |
| `--color-ink-subtle` | `#A39E99` | Captions, meta, disabled |
| `--color-terra` | `#F44D0B` | Primary accent — action, emphasis, focal points |
| `--color-terra-dark` | `#C13A06` | Terra hover state |
| `--color-sage` | `#B8CC8A` | Secondary accent — calm, growth, contrast to terra |
| `--color-sage-dark` | `#8FA66A` | Sage hover state |
| `--color-white` | `#FFFFFF` | Pure white |
| `--color-black` | `#0D0B0A` | Pure black (almost never used) |
| `--color-sand` | `#E3DDD5` | Warm neutral, illustration backgrounds |

**Hardcoded SVG hex equivalents** (use only inside SVG attributes):
```
BG    = '#EDEAE6'   // slightly warmer than --color-background; used in CollagePanel
INK   = '#1A1714'
TERRA = '#F44D0B'
SAGE  = '#B8CC8A'
```

### Colour rules
- Terra is the primary call-to-action and focal-point colour. Use it sparingly — one or two touches per section maximum.
- Sage is used for secondary emphasis, left-side contours in the hero graphic, and growth-related concepts.
- Never use terra and sage in the same element. They contrast but don't harmonise at close range.
- Dark contexts (ink background): text and borders shift to rgba whites. Never use `--color-ink` text on `--color-ink` backgrounds.

---

## 4. Typography

### Fonts
| Role | Variable | Family |
|---|---|---|
| Display / Headings | `--font-display` / `--font-heading` | Cormorant (variable), Georgia fallback |
| Body | `--font-body` | Inter (variable), Helvetica Neue fallback |
| Mono / Labels | `--font-mono` | Courier New (system) |

### Type scale
| Token | rem | px | Typical use |
|---|---|---|---|
| `--text-xxl` | 7.5rem | 120px | Hero display, single-word statements |
| `--text-xl` | 5rem | 80px | Section display anchors |
| `--text-lg` | 3.5rem | 56px | Page H1s |
| `--text-md` | 3rem | 48px | Section H2s |
| `--text-sm` | 2rem | 32px | Card/list H3s |
| `--text-base` | 1.25rem | 20px | Body copy |
| `--text-sub` | 1.0625rem | 17px | Secondary body |
| `--text-xs` | 0.8125rem | 13px | Small labels |
| `--text-xxs` | 0.6875rem | 11px | Mono eyebrows, captions |

### Type rules
- **Display type** (`--font-display`) is always `fontWeight: 300` (light) unless italic, in which case weight stays 300–400. Never bold display type.
- **Italic display** is the emotional voice — used for brand moments, quotes, the terra headline. Never italic body copy.
- **Mono** is the functional voice — categories, dates, durations, breadcrumbs, labels. Always uppercase with `letterSpacing: '0.12em'` or wider.
- `clamp()` is the preferred sizing method for responsive type: `clamp(2rem, 4vw, var(--text-lg))`. Never use `vw` alone.
- Line height for display/heading: `0.9`–`1.1`. Line height for body: `1.65`–`1.75`. Never use unitless values below 0.9.
- Letter spacing for display: `–0.02em` to `–0.03em`. Tight. Mono labels: `+0.12em` to `+0.2em`. Wide.

### Utility classes (defined in globals.css)
```
.c-eyebrow     mono label above a title (category, type, number)
.c-eyebrow--terra   terra-coloured variant
.c-title       display light heading — the card's primary statement
.c-body        body supporting text
.c-meta        small mono footer line (date, duration, location)
.text-display  full display class (xxl, weight 300, tight leading)
.text-editorial  italic serif, weight 300 — for quotes and emotional moments
```

---

## 5. Layout system

### Grid
- 12-column grid, `1.5rem` gutter (`--grid-gutter`)
- Container: `max-width: 1920px`, `padding-inline: var(--grid-margin)`
- Margin: `5rem` desktop → `2rem` tablet → `1.25rem` mobile

```tsx
import { Container, Grid, Col } from '@/components/layout/Grid'

<Container>
  <Grid>              {/* 12-col grid, gap-6 */}
    <Col span={4}>…</Col>
    <Col span={4}>…</Col>
    <Col span={4}>…</Col>
  </Grid>
</Container>
```

`Col` accepts `span` (default 12) and `start` for placement. Add `.stack-cols` to a Grid to collapse it to single-column on mobile — no manual media queries needed.

### Scroll-stack card system
Sections that "stack" on scroll use the `.scroll-card` class. Each card sticks at the top of the viewport while the next card slides over it. Rules:
- `position: sticky; top: 0` — automatically applied by `.scroll-card`
- Set `top` override when the card should sit below the nav: `style={{ top: '5rem' }}`
- Set explicit `height`: `height: 'calc(100svh - 5rem)'` for below-nav cards
- Add `overflow: 'hidden'` when the card contains a clipped illustration or animated element
- `margin-bottom: 6vh` is set globally — do not override it

Cards stack in this order (homepage):
1. Hero (cream background)
2. Dafür stehen wir + Pillars (cream)
3. Shift Cases (ink background)
4. Testimonials (terra background)
5. Denk Labor (surface background)

### Spacing
Use `--space-*` tokens or rem values directly. Do not invent ad-hoc pixel values. Preferred section padding: `paddingBlock: '3rem 4rem'` or `'7rem'` for spacious sections.

---

## 6. Component architecture

```
components/
  atoms/       Button, Tag, Logo1789                    — no state, pure display
  molecules/   CollagePanel, ClientLogoCarousel         — self-contained UI units
  organisms/   HeroLogo, SystemshiftAccordion,
               TestimonialsSection                      — full sections with state
  layout/      Grid (Container/Grid/Col),
               StickyScrollSection                      — structural wrappers
```

### Button
```tsx
<Button variant="terra">Primary CTA</Button>
<Button variant="ghost">Secondary</Button>
<Button variant="primary">Ink filled</Button>
<Button variant="text">Text link</Button>
// Sizes: 'sm' | 'md' (default) | 'lg'
```

### Tag
```tsx
<Tag>Category label</Tag>          // default: bordered
<Tag variant="accent">Featured</Tag>  // terra filled
```

### CollagePanel
A full-bleed SVG illustration panel for the Systemshift accordion. Five variants:

| Variant | Concept | Key form | Primary colour |
|---|---|---|---|
| `analyse` | The Lens | Concentric rings → focal dot + hairlines | terra |
| `change` | The Motion | Diagonal lines, sparse → dense | sage + terra |
| `responsibility` | The Knot | Two overlapping circles, terra intersection | terra |
| `iterate` | The Spiral | Archimedean spiral, 3.5 revolutions | terra |
| `overall` | Quadrant montage | 2×2 grid of all four motifs | mixed |

```tsx
<CollagePanel variant="analyse" />
```

The SVG viewBox is always `0 0 600 600`. Never use CSS variables inside SVG `fill` or `stroke` — hardcode the hex values from the SVG palette constants (`BG`, `INK`, `TERRA`, `SAGE`). All path data is precomputed at module level (no `Math.random()` — no hydration mismatches).

---

## 7. Animation system

### CSS custom properties
```
--ease-standard:   cubic-bezier(0.4, 0, 0.2, 1)    — most transitions
--ease-expressive: cubic-bezier(0.34, 1.56, 0.64, 1) — hover lifts, appearing elements
--ease-exit:       cubic-bezier(0.4, 0, 1, 1)        — elements leaving
--ease-entry:      cubic-bezier(0.0, 0, 0.2, 1)      — elements entering

--duration-fast:   150ms   — micro interactions
--duration-base:   300ms   — most hover transitions
--duration-slow:   600ms   — entering elements
--duration-enter:  900ms   — hero / first-paint reveals
```

### Named keyframes (globals.css)
| Keyframe | Purpose |
|---|---|
| `fadeUp` | `opacity 0→1 + translateY(16px→0)` — standard element entrance |
| `heroLogoReveal` | `scale(0.92)+translateY(20px) → normal` — brand mark landing |
| `floatLogo` | Slow `translateY` drift — breathing after reveal |
| `lineReveal` | Per-line wipe-up from below a clip boundary |
| `growLine` | Terra accent line expands `0 → 3rem` |
| `marqueeSlide` | Infinite horizontal scroll (`translateX 0 → -50%`) |
| `morph1/7/8/9` | Variable font axis animation per character of "1789" |
| `morphGap` | Gap between logo characters opens and closes |
| `scroll-card-recede` | Card shrinks + recedes as next card slides over it |

### Animation shorthand pattern
The HeroLogo uses a helper:
```tsx
const a = (name, duration, delay, easing = 'var(--ease-entry)') =>
  `${name} ${duration} ${easing} ${delay} both`

style={{ animation: a('fadeUp', '700ms', '200ms') }}
```
Use `animation-fill-mode: both` (`both` keyword) on all entrance animations so elements start invisible and end in their final state regardless of delay.

### Transition rules
- Hover transitions: `--duration-base` (`300ms`) with `--ease-standard`
- Crossfades (e.g. CollagePanel opacity swap): `0.55s var(--ease-entry)`
- Accordion expand (`grid-template-rows: 0fr → 1fr`): `0.45s var(--ease-standard)`
- Arrow rotations: `0.4s var(--ease-expressive)`
- Never animate `width`, `height`, `top`, `left` — animate `transform` and `opacity` only
- `will-change: transform` on elements that animate; remove it when animation is done

---

## 8. SVG and illustration rules

### Inline SVG
All SVGs are rendered inline as JSX (no external `.svg` files imported). This keeps them styleable and avoids build complexity.

### viewBox convention
All illustration panels: `viewBox="0 0 600 600"`, `width="100%" height="100%"`, `aria-hidden="true"`, `style={{ position: 'absolute', inset: 0 }}`.

Icon SVGs (pillar icons, arrows, LinkedIn): small viewBox matching the design (e.g. `0 0 125 125`), explicit `width` and `height` in pixels.

### SVG colour rules
- **Never** use `fill="var(--color-terra)"` or any CSS variable inside SVG attributes — they are unreliable in SVG context
- Use the palette constants defined at the top of the file:
  ```ts
  const BG    = '#EDEAE6'
  const INK   = '#1A1714'
  const TERRA = '#F44D0B'
  const SAGE  = '#B8CC8A'
  ```
- Opacity adjustments via the SVG `opacity` attribute (not CSS opacity) for SVG elements

### Path data
- Precompute all path data at module level — not inside render functions
- Never use `Math.random()` in SVG path generation — causes SSR/hydration mismatch
- For spiral or curve calculations, precompute as a module-level constant string

### clipPath IDs
If an SVG uses `<clipPath id="...">`, ensure IDs are unique per page. Use descriptive prefixes (e.g. `cp-tl`, `cp-tr`). Multiple instances of the same component on one page would conflict — design accordingly.

---

## 9. Data layer

### Case studies (`/src/data/cases.ts`)
```ts
type CaseStudy = {
  slug: string
  client: string
  sector: string
  title: string
  tagline: string
  teaser?: string          // short punchy card text (challenge/result framing)
  tags: string[]
  duration: string
  scale: string
  lead: string
  gap: string              // Das eigentliche strukturelle Problem
  shift: string            // Was haben wir getan?
  result: string           // Was hat sich verändert?
  quote?: { text: string; author: string; role: string }
  color: 'terra' | 'sage' | 'ink' | 'neutral'
  featured?: boolean
  image?: string           // path relative to /public, e.g. '/projects/wd40.jpg'
}
```

`featuredCases` — filtered export of cases with `featured: true`. Used on the homepage. Currently: WD-40, P&G, teccle.

### Testimonials
Defined inline in `TestimonialsSection.tsx`. Five testimonials from real clients. The carousel shows 3 at a time with prev/next arrow navigation.

---

## 10. Key component patterns

### Image + colour overlay (project cards, testimonials)
Both the project case cards and testimonial cards use the same image treatment:
1. `<img>` or `background-image` in a fixed-height container
2. An absolutely-positioned `<div>` overlay with `backgroundColor` + low `opacity`
3. On `.testimonial-card`: also apply `mix-blend-mode: multiply` with the sage duotone
4. Hover: overlay opacity fades from `0.55` → `0.18` (or `grayscale(100%) → 0%` for testimonial photos)

Project card placeholder (no image):
```js
`linear-gradient(135deg, ${accent} 0%, transparent 65%),
 repeating-linear-gradient(135deg, transparent 0px, transparent 20px, ${lines} 20px, ${lines} 21px),
 #0D0B0A`
```

### Accordion expand pattern
Use `grid-template-rows: 0fr → 1fr` for smooth height animation without knowing the content height. Always wrap the content in a `div style={{ overflow: 'hidden' }}` as the direct child of the grid container.

```tsx
<div style={{ display: 'grid', gridTemplateRows: isActive ? '1fr' : '0fr', transition: '...' }}>
  <div style={{ overflow: 'hidden' }}>
    {/* content */}
  </div>
</div>
```

### Sticky left panel + scrollable right
Used in `SystemshiftAccordion` and on case study pages:
```tsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
  <div style={{ position: 'sticky', top: 0, height: '100svh' }}>
    {/* Visual panel — crossfades between states */}
  </div>
  <div>{/* Scrollable content */}</div>
</div>
```
The visual panel stacks all states absolutely and controls visibility via `opacity: 0/1` crossfade — not `display: none`.

### Mobile: systemshift panel hidden
`.systemshift-panel { display: none !important }` on mobile (`max-width: 767px`). The right-side accordion collapses to full width.

---

## 11. Responsive breakpoints

| Breakpoint | Width | What changes |
|---|---|---|
| Mobile | ≤ 767px | Grid stacks to 1 col (`.stack-cols`), scroll-cards become static, hero stacks, systemshift panel hidden |
| Tablet | 768px – 1024px | Grid margin drops to `2rem`, most layouts still multi-column |
| Desktop | 1025px – 1440px | Full layout, `--grid-margin: 5rem` |
| Large | 1441px – 1920px | Margin scales proportionally with viewport |
| 4K / 5K | > 1920px | Type scale bumps; margin caps at `10rem` |

Use `svh` (small viewport height) instead of `vh` for all height-related calculations — avoids mobile browser chrome jumping.

---

## 12. What to never do

1. **Never hardcode hex values in component JSX** (only in SVG fill/stroke attributes, and only using the approved palette constants).
2. **Never animate `height`, `width`, `top`, or `left`** — use `transform` and `opacity`.
3. **Never use `Math.random()` in render or module-level SVG computation** — causes hydration mismatches in Next.js.
4. **Never import SVG files** — render them inline as JSX functions.
5. **Never use bold (`fontWeight: 700+`) for display or heading type** — weight stays at 300–400 for serif, 400–600 for body/mono.
6. **Never use `vh` for height in sticky/scroll sections** — use `svh`.
7. **Never write `style={{ color: '#F44D0B' }}`** in JSX — write `style={{ color: 'var(--color-terra)' }}`.
8. **Never add `margin` to `.scroll-card` sections** — the global `margin-bottom: 6vh` is already set and overriding it breaks the card-stack effect.
9. **Never use `display: none` to hide crossfade panels** — use `opacity: 0` + `zIndex: 0` so the transition can animate.
10. **Never use external image tags for logos or icons** — inline them as JSX or use `dangerouslySetInnerHTML` only for pre-sanitised SVG strings from the data layer.

---

## 13. What Claude should do

- **Read the relevant component and its imports first** before proposing any change.
- **Prefer editing existing components** over creating new ones — extend the established patterns.
- **Respect the file structure** — atoms stay small and stateless, organisms hold state and data, molecules bridge them.
- **Precompute heavy SVG paths at module level** — not inside render.
- **Use `clamp()` for font sizes that scale** — don't hardcode px values.
- **When adding a new section or card**, check whether `.c-eyebrow`, `.c-title`, `.c-body`, `.c-meta` cover the typography — they usually do.
- **When writing inline styles for position/layout** and Tailwind utilities for flex/gap/padding — keep this split consistent with the rest of the codebase.
- **Comment structural decisions** — explain why, not what. The JSX already shows what; comments explain the constraint (e.g. "mask-image creates a compositing surface — use gradient overlay divs instead").
- **Test TypeScript** with `npx tsc --noEmit` from `/web` before reporting work done.

---

## 14. Project file map (key files)

```
web/
  src/
    app/
      page.tsx                          — Homepage (Hero, Pillars, Cases, Testimonials, Lab)
      projekte/[slug]/page.tsx          — Case study detail page
      ansatz/page.tsx                   — Approach/method page
      kontakt/page.tsx                  — Contact page
    components/
      atoms/
        Button.tsx                      — 4 variants: primary, terra, ghost, text
        Tag.tsx                         — 2 variants: default (bordered), accent (terra)
        Logo1789.tsx                    — Animated variable-font brand mark
      molecules/
        CollagePanel.tsx                — Phase illustrations for Systemshift accordion
        ClientLogoCarousel.tsx          — Infinite marquee of client logos
      organisms/
        HeroLogo.tsx                    — Hero section (animated GapGraphic + headline)
        SystemshiftAccordion.tsx        — Systemshift Cycle interactive accordion
        TestimonialsSection.tsx         — Testimonial carousel (5 cards, 3 visible)
      layout/
        Grid.tsx                        — Container / Grid / Col
        StickyScrollSection.tsx         — Wrapper for sticky-card sections
    data/
      cases.ts                          — All 8 case studies + CaseStudy type
    styles/
      tokens.css                        — All CSS custom properties (colours, type, spacing)
      typography.css                    — Utility classes (.text-display, .text-body, etc.)
    app/
      globals.css                       — Reset, card system, scroll-stack, keyframes
  public/
    projects/                           — Case study photos (wd40.jpg, pg.jpg, teccle.jpg)
    testimonials/                       — Testimonial portrait photos
    icons/                              — PNG icons (icon_2.png)
```

---

## 15. Systemshift Cycle — concept reference

The four phases are 1789's consulting methodology:

| # | Phase | German subtitle | Core concept |
|---|---|---|---|
| 01 | Analyse & Erkenntnis | "Sehen, was ist." | Ruthless clarity — understand the system without preconceptions |
| 02 | Change by Action | "Verändern, während es passiert." | Transformation begins during the process, not after it |
| 03 | Responsibility | "Verbindlichkeit gestalten." | Design accountability structures — every role knows what it owns |
| 04 | Iterate | "Kontinuierlich wachsen." | Artefact-driven, participatory, pragmatic repetition |

These phases are the conceptual backbone. When writing copy, naming things, or designing new sections related to methodology, use this vocabulary.

---

*Last updated: April 2026. Reflects codebase state after CollagePanel v5, HeroLogo v7, and project card image system.*
