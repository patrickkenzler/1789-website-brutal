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
        index="02"
      />

      {/* ═══ 01 · OFFERINGS ═══════════════════════════════════════════════════
          Three spec sheets. Each is a full-width bordered block: oversized
          index numeral, meta line, title, body, deliverables compartment.  */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="01"
            label="Offerings"
            end={<span className="unit">{SERVICES.length} Module</span>}
          />

          <div style={{ display: 'grid', gap: 'var(--u8)' }}>
            {SERVICES.map((s) => (
              <article key={s.num} className="box-bar">
                {/* ── Head strip ── */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 'var(--u2)',
                    flexWrap: 'wrap',
                    padding: 'var(--u2) var(--pad-dense)',
                    borderBottom: 'var(--rule)',
                    background: 'var(--sunk)',
                  }}
                >
                  <span className="data" style={{ color: 'var(--ink)' }}>
                    {s.num} · {s.category} · {s.duration}
                  </span>
                  <span className="unit">1789 / Leistung {s.num}</span>
                </div>

                <div className="hairgrid hairgrid-2" style={{ border: 0 }}>
                  {/* ── Left: numeral, title, body ── */}
                  <div className="pad">
                    <span
                      className="d0"
                      aria-hidden="true"
                      style={{
                        display: 'block',
                        color: 'var(--ink-20)',
                        fontSize: 'clamp(4rem, 12vw, 11rem)',
                        marginBottom: 'var(--u4)',
                      }}
                    >
                      {s.num}
                    </span>

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
                      {s.deliverables.map((d, i) => (
                        <li
                          key={d}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '40px 1fr',
                            gap: 'var(--u2)',
                            alignItems: 'baseline',
                            paddingBlock: 'var(--u2)',
                            borderBottom: 'var(--rule-faint)',
                          }}
                        >
                          <span className="unit" style={{ color: 'var(--red)' }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="d4">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <dl className="readout" style={{ marginTop: 'var(--u6)' }}>
                      <dt>Modul</dt>
                      <dd>{s.num} / 03</dd>
                      <dt>Kategorie</dt>
                      <dd>{s.category}</dd>
                      <dt>Dauer</dt>
                      <dd>{s.duration}</dd>
                      <dt>Umfang</dt>
                      <dd>
                        {String(s.deliverables.length).padStart(2, '0')}{' '}
                        Deliverables
                      </dd>
                    </dl>

                    <div style={{ marginTop: 'var(--u4)' }}>
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
