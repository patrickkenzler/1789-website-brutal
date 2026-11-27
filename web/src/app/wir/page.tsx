import { Fragment } from 'react'
import Link from 'next/link'
import { TEAM } from '@/data/team'
import { PODCAST_SHOW } from '@/data/labor'
import { PageHero, SectionHead, Plate, Barcode } from '@/components/ui'

/* „Co-Host von Corporate Therapy" steht als Fließtext in drei Kurzprofilen.
   Der Podcast hat seit dem 27.11.2026 eine eigene Seite, also führt sein Name
   dorthin. Der Satz bleibt vollständig in `team.ts` — von hier kommt nur das
   Ziel, und Name wie Adresse stehen in `labor.ts`, damit es sie nicht zweimal
   gibt. Kommt der Name im Profil nicht vor, steht der Text unverändert: ein
   umformuliertes Profil verliert höchstens den Link, nie seinen Text.
   Der Stil ist der des Systems für Links im Fließtext (.body a:not(.link)),
   eine Haarlinie im Akzent — nicht die Versalien-Marke der Seitenlinks.    */
function Bio({ text }: { text: string }) {
  const parts = text.split(PODCAST_SHOW.title)
  if (parts.length === 1) return <>{text}</>

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <Link href={PODCAST_SHOW.href}>{PODCAST_SHOW.title}</Link>
          )}
        </Fragment>
      ))}
    </>
  )
}

export default function WirPage() {
  return (
    <main>
      <PageHero
        line1="Verschiedene Köpfe,"
        line2="eine Haltung."
        body="1789 besteht aus einem kleinen, interdisziplinären Team. Wir arbeiten als Partner, nicht als Lieferant – und stehen jedem Mandat persönlich gegenüber. Unser Büro in Frankfurt am Main dient als Ort der Begegnung, als Werkstatt und als Studio."
      />

      {/* ═══ TEAM ═══════════════════════════════════════════════════════════
          One sitting, one table, one wall: the four portraits come from the
          same set, so the row reads as one picture cut in four. The crop to
          4:5 happens here, not in the file — `frame` sets where each head
          sits in the plate.                                                */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Partner & Ansprechpartner" />

          <div className="g4">
            {TEAM.map((p) => (
              <article key={p.name} className="card">
                <Plate
                  src={p.photo}
                  alt={p.name}
                  label={p.photo ? undefined : p.initials}
                  frame={p.frame}
                  note={null}
                  coarse
                  ratio="4 / 5"
                />
                <div className="card-body">
                  <h2 className="d4" style={{ marginBottom: 'var(--u2)' }}>
                    {p.name}
                  </h2>
                  <p className="body">
                    <Bio text={p.bio} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OFFICE + ÜBER 1789 ═════════════════════════════════════════════ */}
      {/* Dunkler Grund: die Seite lief sonst über drei helle Sektionen, und
          der Styleguide setzt den Schnitt spätestens nach zweien. Dieser
          Abschnitt trägt das Büro-Foto — ein Halbton auf Ink ist die
          stärkste Fläche, die das System kennt, und die Platte bringt ihre
          Dunkelvariante mit. */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Über 1789" />

          <div className="g12" style={{ rowGap: 'var(--u6)', alignItems: 'start' }}>
            <div className="c5">
              {/* Der Raum, nicht die Leute darin — die Köpfe stehen eine
                  Sektion höher. 16:9 wie aufgenommen. Die Oberkante sitzt
                  auf der Versalhöhe der Zeile daneben. */}
              <div className="cap-d2">
                <Plate
                  src="/team/buero.jpg"
                  alt="Das Büro von 1789: Parkett, Bücherregal, Arbeitsplätze, im Vordergrund ein Tisch mit Blumen"
                  note={null}
                  coarse
                  ratio="16 / 9"
                />
              </div>
              {/* .rule-faint statt einer gesetzten Linie: der dunkle Grund
                  belegt diese Klasse mit seinem eigenen Wert, eine inline
                  gesetzte Ink-Linie wäre hier unsichtbar. */}
              <div
                className="rule-faint"
                style={{
                  marginTop: 'var(--u2)',
                  paddingTop: 'var(--u2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 'var(--u2)',
                }}
              >
                <span className="data">Unser Büro.</span>
                <span className="unit">FFM</span>
              </div>
            </div>

            <div className="c6 s7">
              <h2 className="d2" style={{ marginBottom: 'var(--u6)' }}>
                Strategie und Struktur,
                <br />
                <span className="d-thin d-red">aus einem Stück.</span>
              </h2>

              <p className="body" style={{ marginBottom: 'var(--u4)' }}>
                1789 begleitet Organisationen durch strukturelle Transformation
                – von der Diagnose über die Gestaltung des Operating Models bis
                zur Erprobung im Alltag und zur Übergabe in die eigene Hand.
              </p>

              <p className="body" style={{ marginBottom: 'var(--u6)' }}>
                Wir arbeiten auf Augenhöhe, in kleinen Mandaten, mit klarer
                Verantwortung. Was wir aufbauen, muss ohne uns weitertragen –
                sonst war es nicht gut genug.
              </p>

              <Barcode />

              <div style={{ marginTop: 'var(--u6)' }}>
                <Link href="/kontakt" className="link">
                  Gespräch anfragen <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
