import Link from 'next/link'
import { SERVICES, SERVICES_INTRO } from '@/data/services'
import { SectionHead, PageHero, ClosingCta, Barcode } from '@/components/ui'

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        eyebrow="Leistungen"
        line1={SERVICES_INTRO.line1}
        line2={SERVICES_INTRO.line2}
        body={SERVICES_INTRO.lead}
      />

      {/* ═══ MANDAT ═══════════════════════════════════════════════════════════
          Der zweite Absatz des Dokuments: wer beauftragt, mit welchem Anlass,
          unter welcher Perspektive. Er trägt kein eigenes Register — dasselbe
          body-lg wie der Vorspann, nur eine Fläche weiter.                 */}
      <section className="slab slab-dense">
        <div className="shell">
          <div className="g12">
            <p className="body-lg c8">{SERVICES_INTRO.mandate}</p>
          </div>
        </div>
      </section>

      {/* ═══ DIE DREI LEISTUNGEN ══════════════════════════════════════════════
          Je ein Datenblatt: Kopfstreifen mit dem Rahmen, links der Name und
          die Erklärung, rechts das Ergebnis und die beiden Zeilen, die sagen,
          wo die Leistung endet und wann sie passt. Der Fuß nennt die Cases.
          Der Name steht zweigeteilt — dünn und voll —, wie im Dokument; das
          ist die zweite Stimme des Mono-Systems, nicht ein zweiter Grad.  */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Drei Leistungen, einzeln zu beauftragen" />

          <div style={{ display: 'grid', gap: 'var(--u8)' }}>
            {SERVICES.map((s) => (
              <article key={s.id} id={s.id} className="box-bar">
                {/* ── Kopfstreifen: der Rahmen ── */}
                <div
                  style={{
                    padding: 'var(--u2) var(--pad-dense)',
                    borderBottom: 'var(--rule)',
                    background: 'var(--sunk)',
                  }}
                >
                  <span className="data" style={{ color: 'var(--ink)' }}>
                    {s.frame}
                  </span>
                </div>

                <div className="hairgrid hairgrid-2" style={{ border: 0 }}>
                  {/* ── Links: Name, Unterzeile, Erklärung ── */}
                  <div className="pad">
                    {/* Beide Hälften stehen als eigene Zeile. Inline brach der
                        Browser „Strukturentscheidung" mitten in der Silbe: die
                        Trennung endet an der Span-Grenze, und was übrig bleibt,
                        passt nicht in die halbe Breite. Gestapelt bricht der
                        Name dort, wo das Dokument ihn ohnehin teilt. */}
                    <h2 className="d2">
                      <span className="d-thin" style={{ display: 'block' }}>
                        {s.titleThin}
                      </span>
                      <span style={{ display: 'block' }}>{s.titleBold}</span>
                    </h2>

                    <p className="d4 d-thin" style={{ marginTop: 'var(--u3)' }}>
                      {s.subtitle}
                    </p>

                    <p className="body" style={{ marginTop: 'var(--u4)' }}>
                      {s.body}
                    </p>
                  </div>

                  {/* ── Rechts: Ergebnis, Endpunkt, Passung ── */}
                  <div className="pad">
                    <span className="eyebrow" style={{ marginBottom: 'var(--u3)' }}>
                      Ergebnis
                    </span>

                    <ul className="ruled">
                      {s.results.map((r) => (
                        <li key={r}>
                          <span className="d4">{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'var(--u6)' }}>
                      <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                        Endpunkt
                      </span>
                      <p className="body">{s.endpoint}</p>
                    </div>

                    <div style={{ marginTop: 'var(--u4)' }}>
                      <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                        Passt, wenn
                      </span>
                      <p className="body">{s.fit}</p>
                    </div>
                  </div>
                </div>

                {/* ── Fuß: aus der Praxis ── */}
                <div
                  style={{
                    padding: 'var(--u3) var(--pad-dense)',
                    borderTop: 'var(--rule)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: 'var(--u2) var(--u4)',
                  }}
                >
                  <span className="eyebrow">Aus der Praxis</span>
                  {s.cases.map((c) => (
                    <Link key={c.slug + c.label} href={`/projekte/${c.slug}`} className="link">
                      {c.label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                  <span style={{ marginLeft: 'auto' }}>
                    <Barcode />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
