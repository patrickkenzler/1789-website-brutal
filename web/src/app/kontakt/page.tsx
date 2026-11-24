import { CONTACT } from '@/data/site'
import { PageHero, SectionHead } from '@/components/ui'

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        line1="Was wird bei Ihnen"
        line2="gerade neu verhandelt?"
      />

      {/* ═══ 01 · KONTAKT-SPLIT ═════════════════════════════════════════════
          Left: the premise plus a technical readout. Right: the form as a
          bordered compartment. No backend — the form declares intent.     */}
      {/* Prämisse und Daten auf dunklem Grund, die Form hell darunter. Beides
          stand vorher in einer hellen Sektion nebeneinander, und die Seite
          hatte damit über ihre ganze Länge keinen Schnitt. Die Form bleibt
          hell: ihre Felder sind auf den vertieften Grund gebaut, und für den
          dunklen gibt es dafür keine Variante. */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead
            label="Erstgespräch"
            end={<span className="unit">{CONTACT.city}</span>}
          />

          <div className="g12" style={{ rowGap: 'var(--u8)', alignItems: 'start' }}>
            <div className="c7">
              <p className="body-lg">
                Ein erstes Gespräch ist zum Zuhören da. Wir wollen verstehen, was
                bei Ihnen in Bewegung ist und wer darüber verhandelt. Was daraus
                folgt, entscheiden wir danach gemeinsam.
              </p>
            </div>

            <div className="c4 s9">
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
            </div>
          </div>
        </div>
      </section>

      <section className="slab" style={{ borderBottom: 0 }}>
        <div className="shell">
          <div className="g12">
            <div className="c7 s4">
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
                      placeholder="Beschreiben Sie kurz, womit Sie sich gerade beschäftigen – welche Spannung, welche Lücke, welches Thema."
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
