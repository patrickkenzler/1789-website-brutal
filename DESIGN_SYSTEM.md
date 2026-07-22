# 1789 — BRUTALIST DESIGN SYSTEM · REV 001

**Archetype:** Swiss Industrial Print (light substrate) · **Type:** monospace only.

Everything visual lives in `web/src/app/globals.css`. Pages compose classes.
No Tailwind. No CSS modules. No new colours. No new fonts.

---

## HARD RULES — never violate

1. **One substrate.** `--paper` (#F4F4F0) is the page. `--sunk` for recessed wells only.
   `slab-invert` (near-black) and `slab-red` are *units inside* the document, not themes.
2. **One accent.** `--red` (#E61919). Nothing else is coloured, ever. No sage, no terra, no sand.
3. **No radii.** Enforced globally by `border-radius: 0 !important` in the reset.
4. **No shadows, no gradients, no blur, no translucent panels.**
5. **Monospace only.** `.d0–.d4` = Martian Mono (macro). Everything else = JetBrains Mono (micro).
   Never introduce a serif or a proportional sans.
6. **Uppercase for all macro type and all micro labels.** Body copy stays sentence case.
7. **Compartmentalise with rules, not spacing.** Reach for `.hairgrid`, `.box`, `hr` before padding.
8. **At most one `slab-red` per page** — normally the closing CTA.
9. **German copy is verbatim.** Never rewrite, translate, shorten, or fix it. Umlauts and
   em-dashes exactly as in `CONTENT_INVENTORY.md`.

---

## TYPE

| Class | Role | Notes |
|---|---|---|
| `.d0` | viewport-bleeding numeral | decorative only, always `aria-hidden` |
| `.d1` | page H1 | one per page |
| `.d2` | section H2 | |
| `.d3` | block H3 | |
| `.d4` | card H4 | |
| `.eyebrow` | section/label micro | add `.eyebrow-br` for `[ BRACKETS ]` |
| `.data` | telemetry line | uppercase, tabular |
| `.unit` | smallest marker — ids, coordinates | |
| `.body` / `.body-lg` / `.body-sm` | German copy | capped measure, `hyphens: auto` |

Modifiers on macro type: `.d-thin` (weight 200 counterpoint — this replaces the old
italics), `.d-red`, `.d-strike` (hazard-red strike-through).

**Emphasis inside body copy** is `<strong>`, which already carries a red underlay.

---

## LAYOUT

- `.shell` — page gutter + max width. Every section's direct child.
- `.slab` — a section: vast vertical padding + bottom rule. `.slab-dense` for tight ones.
- `.slab-invert` — near-black unit. `.slab-red` — hazard unit.
- `.g12` + `.c1…c12` / `.s2…s9` — 12-column grid.
- `.g2 .g3 .g4` — simple equal grids.
- `.hairgrid` + `.hairgrid-2|3|4` — **the signature device.** `gap:1px` over an ink parent
  makes razor-thin dividers. Children need no borders; give them `.pad`.
- `.row` — editorial index line (num / content / arrow). Hover floods it black.
- `.card` + `.card-head` / `.card-body` / `.card-foot`.
- `.readout` — `<dl>` as a technical readout (dt = label, dd = value).

Spacing uses the `--u`…`--u16` 8px scale via inline `style`, e.g.
`style={{ marginBottom: 'var(--u6)' }}`. Never hardcode px.

---

## COMPONENTS (`@/components/ui`)

```tsx
<SectionHead num="03" label="Stimmen" end={<span className="unit">05</span>} />
<PageHero eyebrow="…" line1="…" line2="…" body="…" index="03" />
<ClosingCta eyebrow="…" line1="…" line2="…" body="…" cta="…" href="/kontakt" />
<Plate src="/x.jpg" alt="…" label="WD-40" coarse ratio="16 / 9" />   // halftone image
<Tape items={CLIENTS} />        // marquee
<Hazard red />  <Barcode />     // texture strips
<Emphasis text={t.quote} />     // resolves **…** markers
```

`<Plate>` is the **only** way to show an image — every photo is degraded to a
halftone dot matrix. Passing no `src` yields a dot-field placeholder with a unit id.

Symbology helpers: `.crosshair`, `.regmark` (corner `+` marks), `.chev`, `.marker` (®/©/™),
`.dotfield`, `.graticule`.

---

## DATA

All copy lives in `web/src/data/` — `site.ts`, `approach.ts`, `services.ts`,
`team.ts`, `labor.ts`, `cases.ts`. **Pages import data; they never inline copy.**
If a page needs copy that isn't in a data file yet, add it there first.

---

## PAGE SKELETON

```tsx
export default function Page() {
  return (
    <main>
      <PageHero eyebrow="Leistungen" line1="Structure · Strategy ·" line2="Gap." index="02" />

      <section className="slab">
        <div className="shell">
          <SectionHead num="01" label="…" />
          {/* content */}
        </div>
      </section>

      <ClosingCta … />
    </main>
  )
}
```

Header and Footer are supplied by the root layout — pages never render them.
