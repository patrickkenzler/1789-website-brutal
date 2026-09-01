import Link from 'next/link'
import { PHASES } from '@/data/approach'
import { SectionHead, PageHero, ClosingCta, Hazard } from '@/components/ui'

/* Substrate rhythm: phases 02 and 04 are inverted units inside the document. */
const INVERTED = ['02', '04']

export default function AnsatzPage() {
  return (
    <main>
      <PageHero
        eyebrow="Unser Ansatz"
        line1="Von Diagnose"
        line2="zur Eigenständigkeit."
        body="Fünf Phasen, fünf Leitfragen. Jeder Schritt baut auf der Erkenntnis des vorigen auf — von der Diagnose bestehender Strukturen über das gestaltbare Zielmodell bis zur Übergabe einer Organisation, die sich selbst weiterentwickeln kann."
      />

      {/* ═══ INDEX ════════════════════════════════════════════════════════════
          The five phases as a table of contents. Order is the reading order —
          the phase titles carry it.                                         */}
      <section className="slab slab-dense">
        <div className="shell">
          <SectionHead label="Index" />

          {/* Three tracks, not four: five phases plus the trailing cell make
              six, which fills 3x2 exactly. On four tracks the same six items
              left two holes in the second row. */}
          <div className="hairgrid hairgrid-3">
            {PHASES.map((p) => (
              <Link key={p.num} href={`#phase-${p.num}`} className="pad">
                <span className="eyebrow" style={{ marginBottom: 'var(--u3)' }}>
                  {p.meta}
                </span>
                <h2 className="d4" style={{ marginBottom: 'var(--u2)' }}>
                  {p.title}
                </h2>
                <span className="unit" style={{ color: 'var(--red)' }}>
                  ↓ Zur Phase
                </span>
              </Link>
            ))}
            {/* Trailing cell closes the 3-track grid at six. */}
            <div className="pad dotfield" aria-hidden="true">
              <span className="unit">Systemshift Cycle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PHASEN ═══════════════════════════════════════════════════════════ */}
      {PHASES.map((p) => {
        const invert = INVERTED.includes(p.num)
        return (
          <section
            key={p.num}
            id={`phase-${p.num}`}
            className={invert ? 'slab slab-invert' : 'slab'}
          >
            <div className="shell">
              <SectionHead
                label={p.meta}
                end={<span className="unit">{p.title}</span>}
              />

              <div className="g12" style={{ rowGap: 'var(--u6)' }}>
                {/* ── Title + Leitfrage ── */}
                <div className="c7">
                  <h2 className="d2" style={{ marginBottom: 'var(--u4)' }}>
                    {p.title}
                  </h2>

                  <div
                    style={{
                      borderTop: 'var(--rule-red)',
                      paddingTop: 'var(--u3)',
                    }}
                  >
                    <span
                      className="eyebrow eyebrow-red"
                      style={{ marginBottom: 'var(--u2)', color: 'var(--red)' }}
                    >
                      Leitfrage
                    </span>
                    <p className="d3">{p.question}</p>
                  </div>
                </div>

                {/* ── Text + Outcome ── */}
                <div className="c5">
                  <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
                    {p.text}
                  </p>

                  <div
                    className="box"
                    style={{
                      padding: 'var(--u3)',
                      borderColor: invert ? '#33312E' : 'var(--ink)',
                    }}
                  >
                    <span
                      className="eyebrow"
                      style={{ marginBottom: 'var(--u2)' }}
                    >
                      Outcome
                    </span>
                    <p className="body">{p.outcome}</p>
                  </div>
                </div>
              </div>

              {/* ── Was wir tun / Typische Outputs ── */}
              <div
                className="hairgrid hairgrid-2"
                style={{ marginTop: 'var(--u8)' }}
              >
                <div className="pad">
                  <span className="eyebrow" style={{ marginBottom: 'var(--u4)' }}>
                    Was wir tun
                  </span>
                  <ul style={{ borderTop: 'var(--rule-faint)' }}>
                    {p.doing.map((d) => (
                      <li
                        key={d}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '20px 1fr',
                          gap: 'var(--u2)',
                          paddingBlock: 'var(--u2)',
                          borderBottom: 'var(--rule-faint)',
                        }}
                      >
                        <span style={{ color: 'var(--red)' }}>›</span>
                        <span className="body">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pad">
                  <span className="eyebrow" style={{ marginBottom: 'var(--u4)' }}>
                    Typische Outputs
                  </span>
                  <div className="chips">
                    {p.outputs.map((o) => (
                      <span key={o} className="chip">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <Hazard />

      <ClosingCta
        eyebrow="Bereit zur Diagnose?"
        line1="Sprechen wir"
        line2="über Ihren Gap."
        cta="Erstgespräch vereinbaren"
      />
    </main>
  )
}
