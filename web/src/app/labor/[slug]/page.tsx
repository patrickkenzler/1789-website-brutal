import { Fragment } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { POSTS, getPostBySlug } from '@/content/labor'
import { bodyMark, postMeta, PODCAST, type LaborPost } from '@/data/labor'
import { SectionHead, Plate, ClosingCta } from '@/components/ui'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

/* ═══ BEITRAGSSEITE ════════════════════════════════════════════════════════
   Nach dem Muster der Lesefassungen unter /projekte/[slug]: Kopf mit Titel
   und Datenblatt nebeneinander, darunter der Haupttext unter seiner Marke,
   zum Schluss das Outro.

   Grundfolge hell, hell, Akzent. Die Platte sitzt deshalb im Kopfabschnitt
   und nicht in einem eigenen — als eigene Fläche wären es drei helle in
   Folge, und der Styleguide lässt zwei zu.                                 */

/** Alle Beitragsbilder stehen gleich hoch; die Breite folgt dem Verhältnis.
    `ratio` steht als „1440 / 1393" in den Daten, gemessen an der Datei. Ohne
    Angabe bleibt die volle Spalte. */
const PLATE_HEIGHT_REM = 34

function plateWidth(ratio?: string): string | undefined {
  if (!ratio) return undefined
  const [w, h] = ratio.split('/').map((n) => Number(n.trim()))
  if (!w || !h) return undefined
  return `${((w / h) * PLATE_HEIGHT_REM).toFixed(1)}rem`
}

/** Die Zeilen des Datenblatts. Jede erscheint nur, wo der Beitrag sie hat. */
function readoutRows(p: LaborPost): [string, React.ReactNode][] {
  const rows: [string, React.ReactNode][] = [
    ['Wer', p.people],
    ['Datum', p.duration ? `${p.date} · ${p.duration}` : p.date],
  ]
  if (p.place) rows.push(['Ort', p.place])
  if (p.language) rows.push(['Sprache', p.language])
  if (p.relatedCase)
    rows.push([
      'Bezug',
      <Link key="bezug" href={`/projekte/${p.relatedCase.slug}`} className="link">
        {p.relatedCase.label}
      </Link>,
    ])
  if (p.source)
    rows.push([
      'Quelle',
      <a
        key="quelle"
        href={p.source.href}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {p.source.label}
      </a>,
    ])
  if (p.access) rows.push(['Zugang', p.access])
  return rows
}

export default async function LaborPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = getPostBySlug(slug)

  if (!p) notFound()

  return (
    <main>
      {/* ═══ KOPF ═══════════════════════════════════════════════════════════ */}
      <header
        className="slab"
        style={{ paddingTop: 'calc(var(--nav-h) + var(--u6))' }}
      >
        <div className="shell">
          <Link href="/labor" className="link" style={{ marginBottom: 'var(--u8)' }}>
            <span aria-hidden="true">←</span> Labor
          </Link>

          <div
            className="g12"
            style={{ alignItems: 'start', rowGap: 'var(--u6)', marginTop: 'var(--u8)' }}
          >
            <div className="c8">
              <span className="data" style={{ display: 'block', marginBottom: 'var(--u4)' }}>
                {postMeta(p)}
              </span>

              <h1 className="d1" style={{ marginBottom: 'var(--u4)' }}>
                {p.title}
              </h1>

              <p className="body-lg">{p.intro}</p>
            </div>

            <div className="c4">
              <div className="box regmark" style={{ padding: 'var(--u3)' }}>
                <dl className="readout">
                  {readoutRows(p).map(([k, v]) => (
                    <Fragment key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </Fragment>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Das Bild im Seitenverhältnis, das es mitbringt: die Cover der
              Folgen sind quadratisch und tragen ihren Titel als Schrift an
              Ober- und Unterkante, ein fester Ausschnitt würde beide Zeilen
              abschneiden.

              Dafür bekommen alle Bilder dieselbe Höhe und die Breite folgt
              dem Verhältnis. Über die volle Spalte gesetzt wäre ein Quadrat
              1330px hoch — es stünde über dem Text statt vor ihm, und sein
              Schriftzug wiederholte die Schlagzeile in doppelter Größe. So
              steht jeder Beitrag auf derselben Zeile, ob Quadrat oder
              Querformat. */}
          {p.image && (
            <figure style={{ margin: 'var(--u10) 0 0', maxWidth: plateWidth(p.ratio) }}>
              <Plate src={p.image} alt={p.title} ratio={p.ratio} coarse note={null} />
              {p.credit && (
                <figcaption className="unit" style={{ marginTop: 'var(--u2)' }}>
                  Foto: {p.credit}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </header>

      {/* ═══ HAUPTTEXT UND OUTRO ════════════════════════════════════════════
          Die Marke über dem Haupttext hängt an der Kategorie: eine Folge gibt
          etwas aus der Folge wieder, ein Text sagt, worum es geht, ein
          Auftritt, worum es ging.                                          */}
      <section className="slab">
        <div className="shell">
          <SectionHead label={bodyMark(p)} />

          <div className="g12">
            <div className="c8">
              {p.body.map((para) => (
                <p key={para.slice(0, 40)} className="body-lg" style={{ marginBottom: 'var(--u5)' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--u10)' }}>
            <SectionHead label="Weiter" />
            <div className="g12">
              <div className="c8">
                <p className="body">{p.outro}</p>

                {p.links && p.links.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--u2) var(--u4)',
                      marginTop: 'var(--u5)',
                    }}
                  >
                    {p.links.map((l) =>
                      l.href.startsWith('/') ? (
                        <Link key={l.href} href={l.href} className="link">
                          {l.label} <span aria-hidden="true">→</span>
                        </Link>
                      ) : (
                        <a
                          key={l.href}
                          href={l.href}
                          className="link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label} <span aria-hidden="true">→</span>
                        </a>
                      )
                    )}
                  </div>
                )}

                {/* Unter jeder Folge dieselbe Zeile ins Archiv. */}
                {p.category === 'Podcast' && (
                  <p className="unit" style={{ marginTop: 'var(--u6)' }}>
                    Alle Folgen gibt es im Archiv:{' '}
                    <a href={PODCAST.spotify} target="_blank" rel="noopener noreferrer">
                      Spotify
                    </a>
                    ,{' '}
                    <a href={PODCAST.apple} target="_blank" rel="noopener noreferrer">
                      Apple Podcasts
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Ihr Anlass"
        line1="Welche Strukturfrage"
        line2="steht bei Ihnen an?"
        body="Ein erstes Gespräch ist zum Zuhören da. Was daraus folgt, entscheiden wir danach gemeinsam."
        cta="Gespräch anfragen"
      />
    </main>
  )
}
