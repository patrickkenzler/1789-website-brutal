import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cases, getCaseBySlug } from '@/data/cases'
import { SectionHead, Plate, Hazard, ClosingCta } from '@/components/ui'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

const NARRATIVE = [
  { num: '01', label: 'Der Gap', field: 'gap' },
  { num: '02', label: 'Der Shift', field: 'shift' },
  { num: '03', label: 'Das Ergebnis', field: 'result' },
] as const

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCaseBySlug(slug)

  if (!c) notFound()

  const others = cases.filter((x) => x.slug !== c.slug).slice(0, 3)

  return (
    <main>
      {/* ═══ 00 · HERO ══════════════════════════════════════════════════════ */}
      <header
        className="slab"
        style={{ paddingTop: 'calc(var(--nav-h) + var(--u6))' }}
      >
        <div className="shell">
          <Link
            href="/projekte"
            className="link"
            style={{ marginBottom: 'var(--u8)' }}
          >
            <span aria-hidden="true">←</span> Shift Cases
          </Link>

          <div
            className="g12"
            style={{ alignItems: 'start', rowGap: 'var(--u6)', marginTop: 'var(--u8)' }}
          >
            <div className="c8">
              <div className="chips" style={{ marginBottom: 'var(--u4)' }}>
                {c.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="d1" style={{ marginBottom: 'var(--u4)' }}>
                {c.title}
              </h1>

              <p className="body-lg">{c.tagline}</p>
            </div>

            <div className="c4">
              <div className="box regmark" style={{ padding: 'var(--u3)' }}>
                <dl className="readout">
                  <dt>Mandant</dt>
                  <dd>{c.client}</dd>
                  <dt>Sektor</dt>
                  <dd>{c.sector}</dd>
                  <dt>Dauer</dt>
                  <dd>{c.duration}</dd>
                  <dt>Scope</dt>
                  <dd>{c.scale}</dd>
                  <dt>Lead</dt>
                  <dd>{c.lead}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ 01 · PLATE ═════════════════════════════════════════════════════ */}
      <section className="slab slab-dense">
        <div className="shell">
          <Plate src={c.image} alt={c.title} label={c.client} coarse ratio="21 / 9" />
        </div>
      </section>

      {/* ═══ 02 · NARRATIVE ═════════════════════════════════════════════════
          A technical report: numbered, ruled, label left, body right.      */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="01"
            label="Befund"
            end={<span className="unit">03 Blöcke</span>}
          />

          <div style={{ borderTop: 'var(--rule-bar)' }}>
            {NARRATIVE.map((n) => (
              <div
                key={n.num}
                className="g12"
                style={{
                  rowGap: 'var(--u3)',
                  paddingBlock: 'var(--u6)',
                  borderBottom: 'var(--rule)',
                }}
              >
                <div className="c4">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 'var(--u2)',
                      marginBottom: 'var(--u2)',
                    }}
                  >
                    <span className="strip-num">{n.num}</span>
                    <span className="unit">Abschnitt</span>
                  </div>
                  <h2 className="d3">{n.label}</h2>
                </div>
                <div className="c7 s5">
                  <p className="body">{c[n.field]}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Optional testimony ── */}
          {c.quote && (
            <figure
              className="box-bar pad regmark"
              style={{ marginTop: 'var(--u8)' }}
            >
              <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u3)' }}>
                Zitat
              </span>
              <blockquote className="d3" style={{ marginBottom: 'var(--u4)' }}>
                &ldquo;{c.quote.text}&rdquo;
              </blockquote>
              <figcaption style={{ borderTop: 'var(--rule)', paddingTop: 'var(--u2)' }}>
                <span className="data" style={{ color: 'var(--ink)', display: 'block' }}>
                  {c.quote.author}
                </span>
                <span className="unit">{c.quote.role}</span>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* ═══ 03 · WEITERE SHIFTS ════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="02"
            label="Weitere Shifts"
            end={
              <Link href="/projekte" className="link">
                Alle Cases <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <div className="g3">
            {others.map((o) => (
              <Link key={o.slug} href={`/projekte/${o.slug}`} className="card">
                <div className="card-head">
                  <span className="unit">{o.client}</span>
                  <span className="unit" style={{ color: 'var(--red)' }}>
                    {o.duration}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="d4" style={{ marginBottom: 'var(--u2)' }}>
                    {o.title}
                  </h3>
                  <p className="body">{o.tagline}</p>
                </div>
                <div className="card-foot">
                  <span className="unit">
                    Mehr <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Hazard />

      <ClosingCta
        eyebrow="Bereit zur Diagnose?"
        line1="Jede Transformation"
        line2="beginnt mit dem Gap."
        body="Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch. Kein Sales-Deck."
        cta="Erstgespräch anfragen"
      />
    </main>
  )
}
