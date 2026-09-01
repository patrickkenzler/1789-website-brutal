import { SERVICES } from '@/data/services'
import { SectionHead, PageHero, ClosingCta, Barcode, Hazard } from '@/components/ui'

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        line1="Structure · Strategy ·"
        line2="Gap."
        body="Unsere Leistungen sind keine Produkte. Sie sind Antworten auf den Gap, den jede erfolgreiche Organisation kennt — aber selten benennen kann."
      />

      {/* ═══ OFFERINGS ════════════════════════════════════════════════════════
          Three spec sheets. Each is a full-width bordered block: meta line,
          title, body, deliverables compartment. The title leads — no index
          numeral.                                                          */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Offerings" />

          <div style={{ display: 'grid', gap: 'var(--u8)' }}>
            {SERVICES.map((s) => (
              <article key={s.num} className="box-bar">
                {/* ── Head strip ── */}
                <div
                  style={{
                    padding: 'var(--u2) var(--pad-dense)',
                    borderBottom: 'var(--rule)',
                    background: 'var(--sunk)',
                  }}
                >
                  <span className="data" style={{ color: 'var(--ink)' }}>
                    {s.category} · {s.duration}
                  </span>
                </div>

                <div className="hairgrid hairgrid-2" style={{ border: 0 }}>
                  {/* ── Left: title, body ── */}
                  <div className="pad">
                    <h2 className="d2" style={{ marginBottom: 'var(--u4)' }}>
                      {s.title}
                    </h2>

                    <p className="body-lg">{s.body}</p>
                  </div>

                  {/* ── Right: deliverables compartment ── */}
                  <div
                    className="pad"
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <span
                      className="eyebrow"
                      style={{ marginBottom: 'var(--u4)' }}
                    >
                      Deliverables
                    </span>

                    <ul style={{ borderTop: 'var(--rule)', flex: 1 }}>
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '20px 1fr',
                            gap: 'var(--u2)',
                            alignItems: 'baseline',
                            paddingBlock: 'var(--u2)',
                            borderBottom: 'var(--rule-faint)',
                          }}
                        >
                          <span style={{ color: 'var(--red)' }}>›</span>
                          <span className="d4">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'var(--u6)' }}>
                      <Barcode />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Hazard />

      <ClosingCta
        eyebrow="Nicht sicher, wo der Gap liegt?"
        line1="Das Erstgespräch"
        line2="klärt das."
        body="Kein Pitch. Kein Sales-Deck. Wir prüfen gemeinsam, ob ein Systemshift der richtige Schritt ist."
        cta="Erstgespräch anfragen"
      />
    </main>
  )
}
