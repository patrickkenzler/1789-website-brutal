# 1789 Website — Technical Specification

> Branch: `v4-editorial-design` · Deployed via Vercel

---

## Stack Overview

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| CSS Processing | @tailwindcss/postcss | ^4 |
| Linting | ESLint + eslint-config-next | ^9 / 16.1.6 |
| Bundler | Turbopack (via Next.js dev) | built-in |
| Deployment | Vercel | — |

---

## Project Structure

```
web/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout — fonts, Header, Footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles, utilities, keyframes
│   │   ├── ansatz/page.tsx
│   │   ├── leistungen/page.tsx
│   │   ├── labor/page.tsx
│   │   ├── podcast/page.tsx
│   │   ├── projekte/
│   │   │   ├── page.tsx        # Cases index
│   │   │   └── [slug]/page.tsx # Dynamic case detail
│   │   └── styleguide/         # Internal design reference
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Logo1789.tsx
│   │   │   └── Tag.tsx
│   │   ├── layout/
│   │   │   └── Grid.tsx        # 12-col grid system (Container / Col)
│   │   ├── molecules/
│   │   │   ├── ClientLogoCarousel.tsx
│   │   │   ├── CollagePanel.tsx
│   │   │   └── QuestionsTicker.tsx
│   │   └── organisms/
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       ├── HeroLogo.tsx
│   │       ├── SystemshiftAccordion.tsx
│   │       └── TestimonialsSection.tsx
│   ├── data/
│   │   └── cases.ts            # All case study content + types
│   ├── hooks/
│   │   └── useScrollProgress.ts
│   └── styles/
│       ├── tokens.css          # CSS custom properties (design tokens)
│       └── typography.css      # Type scale utility classes
└── public/
    └── projects/               # Case cover images (wd40.jpg, pg.jpg, teccle.jpg)
```

---

## Typography

### Fonts (Google Fonts via `next/font`)

| Variable | Font | Weights | Usage |
|---|---|---|---|
| `--font-display` / `--font-heading` | Cormorant Garamond | 300, 400, 600, 700 (+ italic) | Display headings, editorial serif |
| `--font-body` | Inter | 300, 400, 500, 600 | Body copy, labels, nav |
| `--font-mono` | Courier New (system) | 400 | Eyebrows, meta, tags |
| `--font-variable` | Roboto Flex | wdth + opsz axes | Hero "1789" variable animation only |

### Type Scale

| Token | Value | Usage |
|---|---|---|
| `--text-xxl` | 7.5rem (120px) | Hero stat / display |
| `--text-xl` | 5rem (80px) | Large display |
| `--text-lg` | 3.5rem (56px) | H1 |
| `--text-md` | 3rem (48px) | Section H2 |
| `--text-sm` | 2rem (32px) | Card / list H3 |
| `--text-base` | 1.25rem (20px) | Body |
| `--text-sub` | 1.0625rem (17px) | Secondary body |
| `--text-xs` | 0.8125rem (13px) | Labels, nav |
| `--text-xxs` | 0.6875rem (11px) | Eyebrows, meta |

Scale bumps at `≥1921px` and collapses at `≤640px` via `@media` overrides.

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-background` | `#F2F2F2` | Page background |
| `--color-surface` | `#E8E8E8` | Raised surfaces, cards |
| `--color-ink` | `#1A1714` | Primary text |
| `--color-ink-muted` | `#6B6560` | Secondary text |
| `--color-ink-subtle` | `#A39E99` | Tertiary / disabled |
| `--color-terra` | `#F44D0B` | Brand accent (orange-red) |
| `--color-terra-dark` | `#C13A06` | Terra hover/active |
| `--color-sage` | `#B8CC8A` | Secondary accent (green) |
| `--color-sage-dark` | `#8FA66A` | Sage hover/active |
| `--color-sand` | `#E3DDD5` | Warm neutral |
| `--color-white` | `#FFFFFF` | Pure white |
| `--color-black` | `#0D0B0A` | Near-black (card dark BG) |

---

## Grid System

- **Columns:** 12
- **Gutter:** 1.5rem
- **Margin:** 5rem (fluid clamp above 1440px → max 10rem; collapses to 2rem at ≤1024px, 1.25rem at ≤640px)
- **Max-width:** 1920px (`container-grid`)
- **Implementation:** `<Container>` / `<Grid>` / `<Col span={n} start={n}>` via `Grid.tsx`

---

## Motion System

### Durations

| Token | Value |
|---|---|
| `--duration-fast` | 150ms |
| `--duration-base` | 300ms |
| `--duration-slow` | 600ms |
| `--duration-enter` | 900ms |

### Easing Curves

| Token | Curve | Use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default UI transitions |
| `--ease-expressive` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring / overshoot effects |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-entry` | `cubic-bezier(0.0, 0, 0.2, 1)` | Entrance animations |

### Named Keyframes (globals.css)

| Keyframe | Purpose |
|---|---|
| `morph1/7/8/9` | Variable font animation for hero "1789" digits |
| `morphGap` | Inter-character gap breathing on "1789" |
| `marqueeSlide` | Infinite horizontal scroll for QuestionsTicker |
| `heroFadeIn` | Simple opacity fade for hero elements |
| `fadeUp` | Opacity + translateY(16px) entrance |
| `slideInBottom` | Opacity + translateY(20px) entrance |
| `lineReveal` | Per-line editorial wipe-up for hero H1 |
| `growLine` | Terra accent line expands from 0 → 3rem |
| `heroLogoReveal` | Scale + fade in for logo |
| `floatLogo` | Slow vertical breathing drift after logo lands |
| `scroll-card-recede` | Scale(0.94) shrink as sticky card exits |

---

## Scroll-Stack Pattern

Sections use `position: sticky; top: 0` (`.scroll-card`) to create an app-switcher / card-deck stacking effect. Each card:

- Sticks at the top while the next slides over it from below
- Has `border-radius: 1.5rem 1.5rem 0 0` (top corners only)
- Uses `@supports (animation-timeline: scroll())` for a progressive enhancement scale-down exit animation
- Disabled on mobile (reverts to `position: static`)

> **Compositor note:** Children of `.scroll-card` must not use `transform` on hover — it conflicts with the scroll-driven animation and causes layer flicker. Hover feedback is box-shadow only.

---

## CSS Utility Classes

### Card System

| Class | Context | Hover |
|---|---|---|
| `.card` | Light backgrounds | Deeper box-shadow |
| `.card-dark` | Dark / ink backgrounds | Deeper box-shadow |
| `.card-terra` | 2px terra top border | — |
| `.card-sage` | 2px sage top border | — |
| `.card-ink` | 2px ink top border | — |

### Content System (card internals)

| Class | Style | Purpose |
|---|---|---|
| `.c-eyebrow` | Mono, 11px, 0.14em tracking, uppercase | Category label above title |
| `.c-eyebrow--terra` | Terra colour override | Featured / live indicator |
| `.c-title` | Cormorant, weight 300, 32px, -0.02em | Card primary heading |
| `.c-body` | Inter, 17px, line-height 1.65 | Supporting body text |
| `.c-meta` | Mono, 11px, 0.08em tracking | Date / duration / location footer |

### Layout Utilities

| Class | Behaviour |
|---|---|
| `.container-grid` | Max 1920px, fluid horizontal padding |
| `.hide-mobile` / `.show-mobile` | Responsive visibility toggle at 768px |
| `.stack-cols` | Collapses 12-col grid to 1-col on mobile |
| `.section-pad` | `padding-block: 4rem` on mobile |
| `.reveal` / `.is-visible` | JS-triggered scroll entrance (opacity + translateY) |
| `.hover-line` | Animated underline pseudo-element on hover |

---

## Rendering Model

- **App Router** — all pages server components by default
- **`'use client'`** used only where interactivity is required: `Header.tsx`, `SystemshiftAccordion.tsx`, `TestimonialsSection.tsx`, `QuestionsTicker.tsx`, `ClientLogoCarousel.tsx`
- **Fonts** loaded via `next/font/google` with `display: swap` — no FOUT
- **Images** served from `/public/projects/` — referenced via CSS `background-image` on card containers

---

## TypeScript Config

- **Target:** ES2017
- **Module:** ESNext / Bundler resolution
- **Strict mode:** enabled
- **Path alias:** `@/*` → `./src/*`
- **JSX:** `react-jsx`

---

## Data Layer

All content is defined as TypeScript objects in `src/data/cases.ts`:

```typescript
type CaseStudy = {
  slug: string
  client: string
  sector: string
  title: string
  tagline: string
  tags: string[]
  duration: string
  scale: string
  lead: string
  gap: string
  shift: string
  result: string
  quote?: { text: string; author: string; role: string }
  color: 'terra' | 'sage' | 'ink' | 'neutral'
  featured?: boolean
  image?: string   // path relative to /public
}
```

No CMS or database — content is co-located with code and deployed with the build.

---

## Browser Support

- **Modern browsers** (Chrome 115+, Edge 115+, Safari 17+, Firefox 120+)
- Scroll-driven animations (`animation-timeline: view()`) are progressive enhancement — wrapped in `@supports`
- Variable fonts require modern rendering — Roboto Flex used only in the hero where fallback is acceptable

---

## Development

```bash
cd web
npm install
npm run dev      # Turbopack dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```
