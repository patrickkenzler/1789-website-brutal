import Link from 'next/link'
import { SERVICES, SERVICES_INTRO } from '@/data/services'
import { SectionHead, ClosingCta, Barcode } from '@/components/ui'

export default function LeistungenPage() {
  return (
    <main>
      {/* ═══ KOPF ═════════════════════════════════════════════════════════════
          Das Kopfpaar der Startseite: links die Aussage und der Vorspann,
          rechts eine Fläche. Der gemeinsame PageHero trägt nur Text über die
          halbe Breite — hier steht neben ihm die Zeichnung, und der Kopf ist
          keine leere helle Fläche mehr.                                   */}
      <header
        className="slab"
        style={{ paddingTop: 'calc(var(--nav-h) + var(--u8))' }}
      >
        <div className="shell">
          <div className="g12" style={{ alignItems: 'start', rowGap: 'var(--u8)' }}>
            <div className="c7">
              <h1 className="d1">
                {SERVICES_INTRO.line1}
                <br />
                <span className="d-thin d-red">{SERVICES_INTRO.line2}</span>
              </h1>
            </div>

            {/* Der Vorspann steht neben der Aussage, nicht darunter — das
                Kopfpaar der Startseite. Die Zeichnungen sitzen bei den
                Leistungen, wo sie etwas zu begleiten haben. */}
            <div className="c4 s9 lede">
              <p className="body-lg">{SERVICES_INTRO.lead}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ DIE DREI LEISTUNGEN ══════════════════════════════════════════════
          Die laute Fläche der Seite, einmal: die drei Datenblätter stehen auf
          Orange, in Ink gezeichnet. Auf diesem Grund gibt es keine zweite
          Farbe — der Rahmen trägt den Kontrast, nicht ein Fülltön.
          Je ein Datenblatt: Kopfstreifen mit dem Rahmen, links der Name und
          die Erklärung, rechts das Ergebnis und die beiden Zeilen, die sagen,
          wo die Leistung endet und wann sie passt. Der Fuß nennt die Cases. */}
      <section className="slab slab-orange">
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

      {/* ═══ MANDAT ═══════════════════════════════════════════════════════════
          Stand bis zum 26.11.2026 vor den Leistungen. Mary wollte es ans
          Ende: die Seite führt dann mit dem, was 1789 anbietet, und sagt
          danach, wer so etwas beauftragt. Dunkel bleibt es, weil es sonst
          zwischen Orange und der Schluss-CTA keinen Schnitt gäbe; die
          Grundfolge der Seite ist damit hell, orange, dunkel, Akzent.
          Wer beauftragt, mit welchem Anlass, unter welcher Perspektive —
          ein Absatz, der für sich steht.                                  */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Wer beauftragt" />
          <div className="g12">
            <p className="body-lg c8">{SERVICES_INTRO.mandate}</p>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Nicht sicher, wo der Gap liegt?"
        line1="Das Erstgespräch"
        line2="klärt das."
        body="Ein erstes Gespräch ist zum Zuhören da. Was daraus folgt, entscheiden wir danach gemeinsam."
        cta="Gespräch anfragen"
      />
    </main>
  )
}
