import { CONTACT } from '@/data/site'
import { PageHero, SectionHead, Hazard } from '@/components/ui'

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        line1="Erstgespräch"
        line2="vereinbaren."
        index="06"
      />

      {/* ═══ 01 · KONTAKT-SPLIT ═════════════════════════════════════════════
          Left: the premise plus a technical readout. Right: the form as a
          bordered compartment. No backend — the form declares intent.     */}
      <section className="slab" style={{ borderBottom: 0 }}>
        <div className="shell">
          <SectionHead
            num="01"
            label="Erstgespräch"
            end={<span className="unit">{CONTACT.city}</span>}
          />

          <div className="g12" style={{ rowGap: 'var(--u8)', alignItems: 'start' }}>
            {/* ── Links ── */}
            <div className="c5">
              <p className="body-lg" style={{ marginBottom: 'var(--u8)' }}>
                Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch.
                Kein Sales-Deck. Wir hören zu — und prüfen gemeinsam, ob ein
                Systemshift der richtige Schritt ist.
              </p>

              <dl className="readout">
                <dt>E-Mail</dt>
                <dd>
                  <a href={`mailto:${CONTACT.mail}`}>{CONTACT.mail}</a>
                </dd>
                <dt>Standort</dt>
                <dd>
                  {CONTACT.city}
                  <br />
                  {CONTACT.country}
                </dd>
              </dl>

              <div style={{ marginTop: 'var(--u8)' }}>
                <Hazard red />
              </div>
            </div>

            {/* ── Rechts ── */}
            <div className="c6 s7">
              <div className="box regmark pad">
                <span className="eyebrow" style={{ marginBottom: 'var(--u6)' }}>
                  Anfrage
                </span>

                <form>
                  <div className="g2">
                    <div className="field">
                      <label className="field-label" htmlFor="vorname">
                        Vorname
                      </label>
                      <input
                        className="input"
                        id="vorname"
                        name="vorname"
                        type="text"
                        placeholder="Max"
                      />
                    </div>

                    <div className="field">
                      <label className="field-label" htmlFor="nachname">
                        Nachname
                      </label>
                      <input
                        className="input"
                        id="nachname"
                        name="nachname"
                        type="text"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="organisation">
                      Organisation
                    </label>
                    <input
                      className="input"
                      id="organisation"
                      name="organisation"
                      type="text"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      className="input"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="max@organisation.de"
                    />
                  </div>

                  <div className="field">
                    <label className="field-label" htmlFor="situation">
                      Ihre Situation
                    </label>
                    <textarea
                      className="input"
                      id="situation"
                      name="situation"
                      rows={5}
                      placeholder="Beschreiben Sie kurz, womit Sie sich gerade beschäftigen — welche Spannung, welche Lücke, welches Thema."
                    />
                  </div>

                  <button type="submit" className="btn btn-red btn-block">
                    Nachricht senden <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
