import { Fragment } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cases, getCaseBySlug, type CaseBlock, type CaseSection } from '@/data/cases'
import { SectionHead, Plate, ClosingCta } from '@/components/ui'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

/* Two depths of case. The short ones carry three fields, the reading versions
   carry chapters in the order of their document. The page renders whichever a
   case has — nothing is normalised away.                                   */
const LEGACY = [
  { label: 'Der Gap', field: 'gap' },
  { label: 'Der Shift', field: 'shift' },
  { label: 'Das Ergebnis', field: 'result' },
] as const

type QuoteBlock = Extract<CaseBlock, { kind: 'quote' }>

/* Testimony is its own compartment: a heavy frame, and a portrait where one
   exists. Colours come from classes, never inline — an inline colour beats
   every ground rule and would paint ink on ink inside a dark chapter.      */
function Testimony({ q }: { q: QuoteBlock }) {
  return (
    <figure
      className={q.photo ? 'box-bar pad regmark doc-span' : 'box-bar pad regmark'}
      style={{ marginBlock: 'var(--u4)' }}
    >
      <div className="g12" style={{ rowGap: 'var(--u4)' }}>
        {q.photo && (
          <div className="c3">
            <Plate src={q.photo} alt={q.author} ratio="1 / 1" note={null} />
          </div>
        )}
        <div className={q.photo ? 'c8 s4' : 'c11'}>
          <blockquote
            className={q.text.length > 140 ? 'quote-long' : 'd3'}
            style={{ marginBottom: 'var(--u4)' }}
          >
            &bdquo;{q.text}&ldquo;
          </blockquote>
          <figcaption className="rule-faint" style={{ paddingTop: 'var(--u2)' }}>
            <span className="data data-strong" style={{ display: 'block' }}>
              {q.author}
            </span>
            <span className="unit">{q.role}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

function Blocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.kind === 'quote') return <Testimony key={i} q={b} />

        /* A photograph is a plate like any other: the halftone screen is what
           makes it belong to the page. Wide formats break both columns, tall
           ones stand in theirs and the text runs beside them. */
        if (b.kind === 'image')
          return (
            <div key={i} className={b.span ? 'doc-fig doc-span' : 'doc-fig'}>
              <Plate src={b.src} alt={b.alt} ratio={b.ratio} note={null} coarse={b.span} />
            </div>
          )

        if (b.kind === 'list')
          return (
            <ul key={i} className="ruled cols-2" style={{ marginBlock: 'var(--u4)' }}>
              {b.items.map((it) => (
                <li key={it}>
                  <span className="body">{it}</span>
                </li>
              ))}
            </ul>
          )

        if (b.kind === 'link')
          return (
            <p key={i} className="body" style={{ marginBottom: 'var(--u3)' }}>
              {b.intro && (
                <>
                  {b.intro}
                  <br />
                </>
              )}
              <a className="link" href={b.href} target="_blank" rel="noopener noreferrer">
                {b.label} <span aria-hidden="true">↗</span>
              </a>
            </p>
          )

        return (
          <p key={i} className="body" style={{ marginBottom: 'var(--u3)' }}>
            {b.text}
          </p>
        )
      })}
    </>
  )
}

/* Consecutive light chapters share one ground, so the reading runs on; a dark
   chapter always opens its own. "Dunkel eröffnet ein Kapitel, hell trägt das
   Lesen."                                                                  */
function groupByGround(sections: CaseSection[]) {
  const groups: { ground: 'light' | 'dark'; items: CaseSection[] }[] = []
  for (const s of sections) {
    const ground = s.ground === 'dark' ? 'dark' : 'light'
    const last = groups[groups.length - 1]
    if (ground === 'light' && last?.ground === 'light') last.items.push(s)
    else groups.push({ ground, items: [s] })
  }
  return groups
}

/* A chapter in two zones: its mark in the margin, its prose in two columns
   beside it. Every paragraph keeps the same register — the reading version
   gives the first one no more weight than the rest, and a standfirst would
   claim a hierarchy the document does not make. Only where the document
   itself sets a line apart does the margin carry a second element. */
function Chapter({ s, solo }: { s: CaseSection; solo?: boolean }) {
  return (
    <div className={solo ? 'doc-ch doc-ch-solo' : 'doc-ch'}>
      <div className="doc-side">
        <h2 className="d3">{s.label}</h2>
        {/* Die Lesefassung setzt diese Zeile fett unter die Kapitelüberschrift,
            also eine Stufe unter ihr. Als d2 stand sie größer da als die
            Marke darüber und drehte die Hierarchie des Dokuments um. */}
        {s.lead && <p className="d4">{s.lead}</p>}
      </div>

      <div className="doc-body">
        <Blocks blocks={s.blocks} />
      </div>
    </div>
  )
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const c = getCaseBySlug(slug)

  if (!c) notFound()

  const related = c.related
    ? c.related.map(getCaseBySlug).filter((x): x is NonNullable<typeof x> => Boolean(x))
    : cases.filter((x) => x.slug !== c.slug).slice(0, 3)

  const groups = groupByGround(c.sections ?? [])

  /* The data sheet in the order of the reading version. A short case has no
     Struktur, no separate Größe and no Leistungsfeld — those rows simply do
     not appear, and its five rows stay in the order they always had. */
  const readout: [string, string][] = [
    ['Mandant', c.meta?.mandant ?? c.client],
    ...(c.meta?.structure ? ([['Struktur', c.meta.structure]] as [string, string][]) : []),
    ['Sektor', c.sector],
    ...(c.meta?.scope ? ([['Größe', c.scale]] as [string, string][]) : []),
    ['Dauer', c.duration],
    ['Scope', c.meta?.scope ?? c.scale],
    ['Lead', c.lead],
    ...(c.meta?.field ? ([['Leistungsfeld', c.meta.field]] as [string, string][]) : []),
  ]

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
                {c.headline ?? c.title}
              </h1>

              <p className="body-lg">{c.tagline}</p>
            </div>

            {/* The data sheet. The reading versions deliver more rows than the
                short cases — each one appears only where it has a value. */}
            <div className="c4">
              <div className="box regmark" style={{ padding: 'var(--u3)' }}>
                <dl className="readout">
                  {readout.map(([k, v]) => (
                    <Fragment key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ 01 · PLATE ═════════════════════════════════════════════════════ */}
      <section className="slab slab-dense">
        <div className="shell">
          <Plate src={c.image} alt={c.title} label={c.client} note={null} coarse ratio="21 / 9"/>
        </div>
      </section>

      {/* ═══ 02 · AUF EINEN BLICK ═══════════════════════════════════════════
          One paragraph on the dark ground: the whole case before the reader
          decides whether to read the whole case.                          */}
      {c.summary && (
        <section className="slab slab-invert">
          <div className="shell">
            <SectionHead label={c.summary.label} />
            <div className="g12">
              <p className="body c8">{c.summary.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 03 · KAPITEL ═══════════════════════════════════════════════════ */}
      {groups.map((g, gi) =>
        g.ground === 'dark' ? (
          g.items.map((s) => (
            <section key={s.label} className="slab slab-invert">
              <div className="shell">
                <Chapter s={s} solo />
              </div>
            </section>
          ))
        ) : (
          <section key={gi} className="slab">
            <div className="shell">
              <div className="doc">
                {g.items.map((s) => (
                  <Chapter key={s.label} s={s} />
                ))}
              </div>
            </div>
          </section>
        )
      )}

      {/* ═══ 03b · KURZFASSUNG ══════════════════════════════════════════════
          Cases without a reading version keep the three ruled rows.       */}
      {!c.sections && (
        <section className="slab">
          <div className="shell">
            <SectionHead label="Befund" />

            <div style={{ borderTop: 'var(--rule-bar)' }}>
              {LEGACY.map((n) => (
                <div
                  key={n.label}
                  className="g12"
                  style={{
                    rowGap: 'var(--u3)',
                    paddingBlock: 'var(--u6)',
                    borderBottom: 'var(--rule)',
                  }}
                >
                  <div className="c4">
                    <h2 className="d3">{n.label}</h2>
                  </div>
                  <div className="c7 s5">
                    <p className="body">{c[n.field]}</p>
                  </div>
                </div>
              ))}
            </div>

            {c.quote && (
              <Testimony
                q={{ kind: 'quote', ...c.quote }}
              />
            )}
          </div>
        </section>
      )}

      {/* ═══ 04 · ÜBERTRAGBAR AUF ═══════════════════════════════════════════
          The one loud ground of the page, and the one place that speaks to
          the reader's own situation rather than the client's.             */}
      {c.transfer && (
        <section className="slab slab-orange">
          <div className="shell">
            <SectionHead label="Übertragbar auf" />
            <div className="g12">
              <ul className="ruled cols-2 c12">
                {c.transfer.map((t) => (
                  <li key={t}>
                    <span className="body">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 05 · HÄUFIGE FRAGEN ════════════════════════════════════════════ */}
      {c.faq && (
        <section className="slab">
          <div className="shell">
            <SectionHead label="Häufige Fragen" />

            <div className="cols-2">
              {c.faq.map((f) => (
                <div
                  key={f.q}
                  style={{
                    borderTop: 'var(--rule)',
                    paddingBlock: 'var(--u3) var(--u6)',
                  }}
                >
                  <h3 className="d4" style={{ marginBottom: 'var(--u3)' }}>
                    {f.q}
                  </h3>
                  <p className="body">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ WEITERE SHIFTS ═══════════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            label="Weitere Shifts"
            end={
              <Link href="/projekte" className="link">
                Alle Cases <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <div className="g3">
            {related.map((o) => (
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


      <ClosingCta
        eyebrow="Bereit zur Diagnose?"
        line1="Jede Transformation"
        line2="beginnt mit dem Gap."
        body={
          c.close ??
          'Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch. Kein Sales-Deck.'
        }
        cta="Erstgespräch anfragen"
      />
    </main>
  )
}
