import Link from 'next/link'
import { cases } from '@/data/cases'
import { PageHero, SectionHead, Plate, ClosingCta, Hazard } from '@/components/ui'

/* Distinct tags across all cases, in order of first occurrence. */
const allTags = Array.from(new Set(cases.flatMap((c) => c.tags)))

const featured = cases.slice(0, 2)
const list = cases.slice(2)

export default function ProjektePage() {
  return (
    <main>
      <PageHero
        eyebrow="Shift Cases"
        line1="Organisationen,"
        line2="die den Shift gewagt haben."
        body="Jedes Engagement beginnt mit einer ehrlichen Diagnose des Gaps. Was hier folgt, sind keine Erfolgsgeschichten — sondern Erkenntnisse aus echter Transformation."
        index="03"
      />

      {/* ═══ 01 · HIGHLIGHT CASES ═══════════════════════════════════════════
          Two full-width units. Plate on one side, dossier on the other —
          the alternation is done by the grid start column, not by margins. */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead
            num="01"
            label="★ Highlight Cases"
            end={<span className="unit">02 / {cases.length}</span>}
          />

          {featured.map((c, i) => (
            <article
              key={c.slug}
              className="g12"
              style={{
                rowGap: 'var(--u6)',
                alignItems: 'start',
                paddingTop: i === 0 ? 0 : 'var(--u8)',
                marginTop: i === 0 ? 0 : 'var(--u8)',
                borderTop: i === 0 ? undefined : '1px solid #33312E',
              }}
            >
              <div className="c5">
                <Link href={`/projekte/${c.slug}`}>
                  <Plate
                    src={c.image}
                    alt={c.title}
                    label={c.client}
                    coarse
                    ratio="4 / 3"
                  />
                </Link>
              </div>

              <div className="c7">
                <div
                  className="chips"
                  style={{ marginBottom: 'var(--u3)' }}
                >
                  {c.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <span
                  className="data"
                  style={{ display: 'block', marginBottom: 'var(--u2)' }}
                >
                  {c.client} · {c.sector}
                </span>

                <h2 className="d2" style={{ marginBottom: 'var(--u3)' }}>
                  {c.title}
                </h2>

                <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
                  {c.tagline}
                </p>

                <dl className="readout" style={{ marginBottom: 'var(--u6)' }}>
                  <dt>Dauer</dt>
                  <dd>{c.duration}</dd>
                  <dt>Scope</dt>
                  <dd>{c.scale}</dd>
                </dl>

                <Link href={`/projekte/${c.slug}`} className="link">
                  Case lesen <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ 02 · FILTER STRIP ══════════════════════════════════════════════
          Presentational only — this page is a server component. The chips
          declare the taxonomy, they do not operate it.                     */}
      <section className="slab slab-dense">
        <div className="shell">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--u3)',
              flexWrap: 'wrap',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Filter:
            </span>
            <div className="chips" style={{ flex: 1 }}>
              <span className="chip chip-fill">Alle</span>
              {allTags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 03 · ALLE CASES ════════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="02"
            label="Alle Cases"
            end={<span className="unit">{cases.length} Engagements</span>}
          />

          <div style={{ borderTop: 'var(--rule-bar)' }}>
            {list.map((c, i) => (
              <Link key={c.slug} href={`/projekte/${c.slug}`} className="row">
                <span className="row-num">
                  {String(i + 3).padStart(2, '0')}
                </span>
                <div>
                  <div className="chips" style={{ marginBottom: 'var(--u2)' }}>
                    {c.tags.slice(0, 2).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="d3" style={{ marginBottom: 6 }}>
                    {c.title}
                  </h3>
                  <p className="body" style={{ marginBottom: 8 }}>
                    {c.tagline}
                  </p>
                  <span className="data">
                    {c.client} · {c.sector} · {c.duration}
                  </span>
                </div>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
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
