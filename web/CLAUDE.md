# CLAUDE.md — 1789 Website Projekt

Dieses Dokument ist die verbindliche Referenz für alle KI-Assistenten, die an diesem Projekt arbeiten.
Lies es vollständig, bevor du irgendetwas änderst.

---

## 1. Projekt-Überblick

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, inline React styles
**Deploy:** GitHub Pages via `NEXT_PUBLIC_BASE_PATH=/1789-website`
**Dev:** `cd web && npm run dev`
**Build:** `cd web && npm run build`
**Pfad:** `/Users/patrickkenzler/Documents/1_Projekte/1789_Website_Proto/web/`

---

## 2. Design System

### Farb-Tokens (`src/styles/tokens.css`)

```css
--color-background:  #F2F2F2   /* Cream — Standardhintergrund aller Light-Sections */
--color-surface:     #E8E8E8   /* Leicht dunkler — NUR für UI-Elemente, NIE für Section-BG */
--color-border:      #2E2B28   /* Dunkel — Divider auf hellem Grund */
--color-ink:         #1A1714   /* Fast Schwarz — Dark Section BG + Primärtext */
--color-ink-muted:   #6B6560
--color-ink-subtle:  #A39E99
--color-terra:       #F44D0B   /* Orange-Rot — primäre Akzentfarbe */
--color-terra-dark:  #C13A06
--color-sage:        #B8CC8A   /* Gedämpftes Grün */
--color-sage-dark:   #8FA66A
--color-sand:        #E3DDD5
--color-white:       #FFFFFF
--color-black:       #0D0B0A
```

**Regel:** Section-Hintergründe sind immer `--color-background` (hell) oder `--color-ink` (dunkel) oder `--color-terra` (Akzent). `--color-surface` NIEMALS als Section-BG verwenden.

### Schriften

```css
--font-display: Cormorant Garamond (serif, light 300, italic für Akzente)
--font-heading:  Cormorant Garamond
--font-body:     Inter
--font-mono:     Courier New
```

### Typografie-Größen

```css
--text-xxl: 7.5rem   --text-xl: 5rem    --text-lg: 3.5rem
--text-md:  3rem     --text-sm: 2rem    --text-base: 1.25rem
--text-sub: 1.0625rem --text-xs: 0.8125rem --text-xxs: 0.6875rem
```

### CSS-Klassen (globals.css)

**Card-System:**
- `.card` — heller Hintergrund (`--color-background`), Box-Shadow-Ring
- `.card-dark` — dunkler Hintergrund, subtiler weißer Ring
- `.card-terra` / `.card-sage` / `.card-ink` — 2px farbiger Top-Border (nur Akzent, ändert NICHT den BG)

**Card-Content-Klassen** (konsistent auf ALLEN Karten verwenden):
- `.c-eyebrow` — Mono, xxs, uppercase, `--color-ink-subtle`
- `.c-eyebrow--terra` — wie eyebrow, aber `--color-terra`
- `.c-title` — Display, 300, sm, `--color-ink`
- `.c-body` — Body, sub, 1.65 line-height, `--color-ink-muted`
- `.c-meta` — Mono, xxs, `--color-ink-subtle`

**Reveal/Hover:**
- `.reveal` / `.reveal.is-visible` — Scroll-Fade-In (IntersectionObserver)
- `.hover-line` — Underline-Hover via `::after` Pseudo-Element

---

## 3. Seitenarchitektur — Homepage (`src/app/page.tsx`)

Die Homepage ist eine **scroll-card Sequenz**: jede Section klebt beim Scrollen oben an der Viewport-Oberkante fest, und die nächste Section schiebt sie von unten weg (card-stacking Effekt).

### Section-Reihenfolge und BG-Farben

| # | Section | BG | Klasse / Wrapper |
|---|---------|-----|-----------------|
| 1 | **Hero** | `--color-background` | `scroll-card`, `height: 100svh` |
| 2 | **1789-Blick** (Pillars) | `--color-background` | `StickyScrollSection` (eigene Logik) |
| 3 | **Cases** | `--color-ink` | `scroll-card`, `top: 5rem`, `height: calc(100svh - 5rem)` |
| 4 | **Testimonials** | `--color-terra` | `TestimonialsSection` (eigene scroll-card-Logik) |
| 5 | **Denk Labor** | `--color-background` | `scroll-card` |
| 6 | **Unser Ansatz** | `--color-ink` | `scroll-card`, `top: 5rem`, `height: calc(100svh - 5rem)` |
| 7 | **Was wir erreichen** | `--color-background` | `scroll-card` |
| 8 | **Big Statement** | `--color-background` | `scroll-card` (kein borderTop!) |
| 9 | **CTA** | `--color-terra` | `scroll-card` |

### scroll-card CSS-Regeln

```css
.scroll-card {
  position: sticky;
  top: 0;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-bottom: 6vh;
  will-change: transform;
}
/* Auf Mobile: position static, kein border-radius, kein margin */
@media (max-width: 767px) {
  .scroll-card { position: static; border-radius: 0; ... }
}
```

Dark/Akzent-Sections (Cases, Ansatz, CTA) haben `top: 5rem` inline überschrieben (Nav-Höhe), damit sie bündig unter der Nav kleben.

---

## 4. Komponenten

### Header (`src/components/organisms/Header.tsx`)

Drei-Tier-Responsive-Nav:
- **Desktop (≥1024px):** Split-Nav — Links links, Logo mittig, Links rechts. CSS-Grid `1fr auto 1fr`
- **Tablet (768–1023px):** Logo links, alle Links rechts (flex)
- **Mobile (<768px):** Logo links, Hamburger rechts — Hamburger öffnet Fullscreen-Overlay

Nav-BG wird bei Scroll transparent → `rgba(242,242,242,0.92)` mit `backdropFilter: blur(12px)`.
Logo ist IMMER sichtbar (kein Scroll-Fade).

Nav-Links: `LEFT_ITEMS = [Ansatz, Leistungen, Cases]`, `RIGHT_ITEMS = [Labor, Podcast, Kontakt]`

### HeroLogo (`src/components/organisms/HeroLogo.tsx`)

Full-bleed animierter SVG-Hintergrund (GapGraphic: Topografische Konturlinien in terra/sage).
Zentrierung: Eyebrow-Label + 3-zeiliger Headline-Block + CTAs + Logo-Marquee unten.

**Eyebrow:** `"Organizational Strategy • Governance Design • Target Operating Model"`
**Headline:**
```
Strategie scheitert an Struktur.
Struktur überholt Strategie.
Dazwischen entscheidet Organisation.
```

### AnsatzSection (`src/components/organisms/AnsatzSection.tsx`) ← KOMPLEX

Die wichtigste und zuletzt intensiv bearbeitete Komponente.

**Gesamtlayout:** `display: flex; flex-direction: column; height: 100%; background: var(--color-ink)`

**Row A — Header-Strip (flexShrink: 0):**
- Grid `1fr 2fr`
- ALLE vertikalen Abstände in `svh`-Einheiten (NICHT rem), damit der Header bei jedem Viewport proportional schrumpft
- `paddingTop: '1.8svh'`, cells `paddingBottom: '1.8svh'`
- h2: `fontSize: 'clamp(1rem, 2.4svh, 2.25rem)'`, `margin: '0.8svh 0 0'`
- Beschreibungstext im rechten Header: `fontSize: 'clamp(0.75rem, 1.4svh, 0.9375rem)'`, `lineHeight: 1.55` — KLEIN halten, damit der Header nicht mehr als ~100px braucht!
- Ziel: Header ≤ 110px, damit alle 5 Accordion-Items in den Rest passen

**Row B — Body (flex: 1, Grid `1fr 2fr`):**
- Links: Accordion mit `gap: '1px'`
- Rechts: `gridTemplateRows: '2fr 1fr'` → oben DetailCard, unten CollagePanel-Illustration

**AccordionItem — kritisch:**
```
flex: 1
minHeight: 0          ← PFLICHT, sonst schieben Items über den Container hinaus
overflow: hidden       ← PFLICHT
paddingBlock: '2svh'   ← reine svh-Einheit, KEIN rem-Clamp-Floor
```

Leitfrage (aktiv/inaktiv):
```jsx
maxHeight: isActive ? '5svh' : 0,   // ← Nimmt KEINEN Platz bei inaktiven Items
overflow: 'hidden',
opacity: isActive ? 1 : 0,
marginTop: isActive ? '0.8svh' : 0,
transition: 'max-height 0.4s, opacity 0.35s, margin-top 0.35s',
```
**Wichtig:** `opacity: 0` (alter Ansatz) reserviert Höhe. `maxHeight: 0` (aktuell) eliminiert die Höhe bei inaktiven Items → alle 5 Items passen in den Viewport.

**DetailCard (rechtes Panel):**
- Hat KEINEN Header mehr (kein Step-Num + Leitfrage oben) — wurde entfernt, weil die Leitfrage bereits links im Accordion erscheint
- Besteht nur noch aus scrollbarem Body mit: blockquote (text), "Was wir tun" Liste, "Typische Outputs" Tags, "Outcome"
- `const pad = 'clamp(1.5rem, 2.5vw, 2.75rem)'`

**5 Steps mit Akzentfarben:**

| Num | Titel | Leitfrage | Farbe |
|-----|-------|-----------|-------|
| 01 | Sichtbar machen | Was blockiert uns wirklich? | TERRA |
| 02 | Entscheidbar machen | Wie müsste unsere Org. arbeiten...? | SAGE |
| 03 | Gestaltbar machen | Wie kommt das Modell in echte Arbeit? | SAND |
| 04 | Erprobbar machen | Was funktioniert wirklich...? | TERRA |
| 05 | Unabhängig machen | Wie bleibt es wirksam, wenn 1789 rausgeht? | SAGE |

Farb-Helper: `wa(hex, alpha)` konvertiert 6-stelligen Hex + Alpha in `rgba(…)` String.

### CollagePanel (`src/components/molecules/CollagePanel.tsx`)

FVS-Primitive-Grid (600×600px, 4×4 Zellen à 150px). 5 Varianten:
- `analyse` → TERRA: Eck-Quartale + innere 2×2 Kreise (Viewfinder)
- `change` → SAGE+INK: Diagonale Transformation Quadrat→Kreis
- `responsibility` → INK+TERRA: Zwei Außenspalten + verbindende Kreise
- `iterate` → TERRA: Zwei konzentrische Ringe aus Quartalen
- `overall` → Alle 4 in je einem Quadranten (Miniatur-Montage)

Hintergrundfarbe: `BG = '#EDEAE6'` (Hardcoded, nicht CSS-Var, weil SVG-Fill CSS-Vars nicht unterstützt)

### TestimonialsSection (`src/components/organisms/TestimonialsSection.tsx`)

Eigene sticky scroll-card-Logik. BG: `--color-terra`. User-approved, nicht anfassen.

### StickyScrollSection (`src/components/layout/StickyScrollSection.tsx`)

Wrapper für 1789-Blick-Section. Überschreibt das simple `scroll-card` Verhalten durch JavaScript-gesteuerte `translateY`-Animation, um überlanges Content-Overflow scrollbar zu machen.

---

## 5. Atome

### Tag (`src/components/atoms/Tag.tsx`)
```tsx
<Tag>Standard</Tag>           // border + ink-muted text
<Tag variant="accent">Text</Tag>  // terra BG + white text
```

### Button (`src/components/atoms/Button.tsx`)
```tsx
<Button variant="terra">CTA</Button>    // terra BG
<Button variant="ghost">Link →</Button>  // border + ink, hover: ink BG
<Button variant="primary">Text</Button>  // ink BG, hover: terra
<Button size="sm|md|lg">Text</Button>
```

---

## 6. Daten

### `src/data/cases.ts`
8 Case Studies, 3 davon `featured: true` → werden auf der Homepage gezeigt.
Featured: WD-40 (terra), P&G (ink), teccle (sage)
Jede Case hat optional `image?: string` — Pfad relativ zu `/public`.

---

## 7. Responsive-Strategie

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768–1023px
- Desktop: ≥ 1024px

**Key Mobile-Overrides (globals.css):**
```css
/* AnsatzSection auf Mobile */
.ansatz-grid   { display: block !important; height: auto !important; }
.ansatz-left   { height: auto !important; overflow-y: visible !important; }
.ansatz-right  { display: block !important; height: auto !important; }
.ansatz-detail { position: static !important; min-height: 60svh !important; }
.ansatz-image  { height: 45svh !important; }

/* scroll-card auf Mobile deaktivieren */
.scroll-card { position: static; border-radius: 0; ... }
```

---

## 8. Wichtige Design-Entscheidungen (nicht rückgängig machen)

1. **Kein `--color-surface` als Section-BG** — nur `--color-background` für helle Sections
2. **Kein `borderTop` am Big Statement** — wurde entfernt, fließt jetzt sauber
3. **AnsatzSection Header-Beschreibung klein** — `clamp(0.75rem, 1.4svh, 0.9375rem)`, damit alle 5 Accordion-Items sichtbar sind
4. **Kein Leitfrage-Duplikat im DetailCard** — nur im Accordion links, nicht rechts
5. **svh-Einheiten im AnsatzSection** — KEIN rem-Boden in Clamps, weil der rem-Mindestwert das svh-Scaling überschreibt und Items nicht passen
6. **Gap zwischen Accordion-Items: 1px** (war mal 2px)

---

## 9. Offene Punkte / Bekannte Issues

- [ ] AnsatzSection: Prüfen ob alle 5 Phasen bei Viewport < 800px sichtbar sind
- [ ] CollagePanel `minHeight: '100svh'` in AnsatzSection-Kontext (war für Systemshift-Seite, hier irrelevant)
- [ ] Subseiten (`/ansatz`, `/projekte`, `/labor`) haben vereinzelt `--color-surface` als Section-BG — ggf. angleichen

---

## 10. Häufige Fehlerquellen

- **Edit schlägt fehl wegen falschem Whitespace:** Immer erst `Read` mit exaktem Offset, dann Edit mit Copy-paste aus dem Read-Output
- **Build-Lock:** `.next/lock` entfernen wenn Build hängt: `rm -f .next/lock`
- **svh-Units:** Wenn etwas nicht skaliert, prüfen ob ein rem-Clamp-Minimum den svh-Wert überschreibt
- **`flex: 1` ohne `minHeight: 0`:** Flex-Items schrumpfen NICHT unter ihre Content-Höhe, es sei denn `minHeight: 0` ist gesetzt
