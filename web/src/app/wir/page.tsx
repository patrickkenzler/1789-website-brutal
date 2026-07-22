import Link from 'next/link'
import { TEAM } from '@/data/team'
import { PageHero, SectionHead, Plate, Barcode } from '@/components/ui'

export default function WirPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wir"
        line1="Vier Köpfe,"
        line2="eine Haltung."
        body="1789 ist klein und bewusst klein gehalten. Wir arbeiten als Partner, nicht als Lieferant — und stehen jedem Mandat persönlich gegenüber. Hier sind die vier Ansprechpartner, mit denen Sie es zu tun haben."
        index="05"
      />

      {/* ═══ 01 · TEAM ══════════════════════════════════════════════════════
          No portraits exist yet — every plate is a dot field carrying the
          person's initials as its unit id.                                */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="01"
            label="Partner & Ansprechpartner — 04"
            end={<span className="unit">{TEAM.length} Personen</span>}
          />

          <div className="g4">
            {TEAM.map((p, i) => (
              <article key={p.name} className="card">
                <Plate label={p.initials} coarse ratio="4 / 5" />
                <div className="card-head">
                  <span className="strip-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="unit">{p.role}</span>
                </div>
                <div className="card-body">
                  <h2 className="d4" style={{ marginBottom: 'var(--u2)' }}>
                    {p.name}
                  </h2>
                  <p className="body">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 02 · OFFICE + ÜBER 1789 ════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead num="02" label="Über 1789" />

          <div className="g12" style={{ rowGap: 'var(--u6)', alignItems: 'start' }}>
            <div className="c5">
              <Plate label="FOTO FOLGT" coarse ratio="4 / 3" />
              <div
                style={{
                  borderTop: 'var(--rule)',
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
                Strategie und Struktur,{' '}
                <span className="d-thin d-red">aus einem Stück.</span>
              </h2>

              <p className="body" style={{ marginBottom: 'var(--u4)' }}>
                1789 begleitet Organisationen durch strukturelle Transformation
                — von der Diagnose über die Gestaltung des Operating Models bis
                zur Erprobung im Alltag und zur Übergabe in die eigene Hand.
              </p>

              <p className="body" style={{ marginBottom: 'var(--u6)' }}>
                Wir arbeiten auf Augenhöhe, in kleinen Mandaten, mit klarer
                Verantwortung. Was wir aufbauen, muss ohne uns weitertragen —
                sonst war es nicht gut genug.
              </p>

              <Barcode />

              <div style={{ marginTop: 'var(--u6)' }}>
                <Link href="/kontakt" className="link">
                  Erstgespräch vereinbaren <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
