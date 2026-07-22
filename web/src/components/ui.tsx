/**
 * UI PRIMITIVES
 *
 * Small, unopinionated pieces the pages assemble from. Everything visual
 * lives in globals.css — these only supply structure and semantics.
 */
import Link from 'next/link'
import type { ReactNode, CSSProperties } from 'react'
import { asset } from '@/data/site'

/* ── SECTION HEAD ─────────────────────────────────────────────────────────
   The spine of every page: index number, label, rule, optional end slot.  */

export function SectionHead({
  num,
  label,
  end,
}: {
  num: string
  label: string
  end?: ReactNode
}) {
  /* The annotation exposes the unit's own address in the document — the
     structure is not hidden behind the surface, it is printed on it. */
  const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  return (
    <>
      <span className="annot" aria-hidden="true">
        unit.{num} · {slug} · grid.12
      </span>
      <div className="strip">
        <span className="strip-num">{num}</span>
        <span className="eyebrow">{label}</span>
        {end && <span className="strip-end">{end}</span>}
      </div>
    </>
  )
}

/* ── HAZARD TAPE + BARCODE ────────────────────────────────────────────────  */

export function Hazard({ red = false }: { red?: boolean }) {
  return <div className={red ? 'hazard hazard-red' : 'hazard'} aria-hidden="true" />
}

export function Barcode() {
  return <div className="barcode" aria-hidden="true" />
}

/* ── TICKER TAPE ──────────────────────────────────────────────────────────
   Items are duplicated once so the -50% keyframe loops seamlessly.        */

export function Tape({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="tape" aria-label={items.join(' · ')}>
      <div className="tape-track" aria-hidden="true">
        {doubled.map((t, i) => (
          <span className="tape-item" key={i}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── PLATE ────────────────────────────────────────────────────────────────
   Every image is degraded to a halftone dot matrix. No photograph is ever
   shown at full continuous tone. When there is no source, the plate falls
   back to a dot field carrying a unit id.                                 */

export function Plate({
  src,
  alt,
  label,
  coarse = false,
  ratio,
}: {
  src?: string | null
  alt?: string
  label?: string
  coarse?: boolean
  ratio?: string
}) {
  const style: CSSProperties = ratio ? { aspectRatio: ratio } : {}

  /* No source: the plate becomes a typographic slug rather than a blank dot
     field. A missing portrait was reading as four large empty textures with
     the initials set at 10px in the corner — the placeholder has to carry the
     identity at plate scale, or the grid looks broken rather than pending. */
  if (!src) {
    return (
      <div
        className={`plate dotfield${coarse ? ' plate-coarse' : ''}`}
        style={style}
        aria-hidden="true"
      >
        <span className="plate-slug">{label ?? 'NO SIGNAL'}</span>
        <span
          className="unit"
          style={{ position: 'absolute', left: 12, bottom: 10 }}
        >
          Foto folgt
        </span>
      </div>
    )
  }

  return (
    <div className={`plate${coarse ? ' plate-coarse' : ''}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(src)} alt={alt ?? ''} loading="lazy" />
      {label && (
        <span
          className="unit"
          style={{
            position: 'absolute',
            left: 10,
            bottom: 8,
            background: 'var(--paper)',
            padding: '2px 6px',
            color: 'var(--red)',
            zIndex: 2,
          }}
        >
          {label}
        </span>
      )}
    </div>
  )
}

/* ── EMPHASIS ─────────────────────────────────────────────────────────────
   Resolves the **…** markers carried in the testimonial source strings.   */

export function Emphasis({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i}>{p.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  )
}

/* ── CLOSING CTA ──────────────────────────────────────────────────────────
   The single hazard-red slab each page is allowed.                        */

export function ClosingCta({
  eyebrow,
  line1,
  line2,
  body,
  cta,
  href = '/kontakt',
}: {
  eyebrow: string
  line1: string
  line2: string
  body?: string
  cta: string
  href?: string
}) {
  return (
    /* Two columns: the statement holds the left, the supporting copy and the
       action hold the right and sit on the baseline of the headline block.
       Stacked in one column, the body's 62ch measure left half the red field
       empty and the button stranded at the bottom-left corner. */
    <section className="slab slab-red" style={{ borderBottom: 0 }}>
      <div className="shell">
        <div className="g12" style={{ rowGap: 'var(--u6)', alignItems: 'end' }}>
          <div className="c7">
            <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u4)' }}>
              {eyebrow}
            </span>
            <h2 className="d1">
              {line1}
              <br />
              <span className="d-thin">{line2}</span>
            </h2>
          </div>

          <div className="c5">
            {body && (
              <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
                {body}
              </p>
            )}
            <Link href={href} className="btn btn-lg">
              {cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE HERO ────────────────────────────────────────────────────────────
   Vast negative space, one oversized headline, a hard rule underneath.    */

export function PageHero({
  eyebrow,
  line1,
  line2,
  body,
  index,
}: {
  eyebrow: string
  line1: string
  line2?: string
  body?: string
  /** Viewport-bleeding index numeral, e.g. "03" */
  index?: string
}) {
  return (
    <header className="slab" style={{ paddingTop: 'calc(var(--nav-h) + var(--u8))' }}>
      <div className="shell">
        <div className="g12" style={{ alignItems: 'end' }}>
          <div className="c8">
            <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u4)' }}>
              {eyebrow}
            </span>
            <h1 className="d1">
              {line1}
              {line2 && (
                <>
                  <br />
                  <span className="d-thin d-red">{line2}</span>
                </>
              )}
            </h1>
          </div>
          {index && (
            <div className="c4" style={{ textAlign: 'right' }}>
              <span
                className="d0"
                aria-hidden="true"
                style={{ color: 'var(--ink-20)', fontSize: 'clamp(4rem, 10vw, 9rem)' }}
              >
                {index}
              </span>
            </div>
          )}
        </div>
        {body && (
          <p className="body-lg" style={{ marginTop: 'var(--u6)' }}>
            {body}
          </p>
        )}
      </div>
    </header>
  )
}
