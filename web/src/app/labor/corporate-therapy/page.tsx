import Link from 'next/link'
import { POSTS } from '@/content/labor'
import { PODCAST, PODCAST_SHOW, tileMeta } from '@/data/labor'
import { SectionHead, ClosingCta } from '@/components/ui'

/* ═══ CORPORATE THERAPY ════════════════════════════════════════════════════
   Der Podcast als Ganzes, nicht eine Folge. Eine eigene Seite, weil die
   Kachel im Mosaik irgendwohin führen muss und weil die Plattform-Links
   sonst unter jeder einzelnen Folge stünden und nirgends gesammelt
   (Patrick, Punkt 9, 27.11.2026).

   Hier dockt später der Buzzsprout-Feed an: die neueste Folge füllt dann die
   Kachel, und diese Liste kommt aus dem Feed statt aus den Beitragsdateien.
   Der Text ist von Mary freigegeben.

   Die Route liegt neben `[slug]` und gewinnt gegen sie, weil kein Beitrag
   den Slug `corporate-therapy` trägt.                                      */

export const metadata = {
  title: 'Corporate Therapy',
  description: PODCAST_SHOW.blurb,
}

export default function CorporateTherapyPage() {
  const episodes = POSTS.filter((p) => p.category === 'Podcast')

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
            <div className="c7">
              <span className="data" style={{ display: 'block', marginBottom: 'var(--u4)' }}>
                Podcast · seit 2020
              </span>

              <h1 className="d1">{PODCAST_SHOW.title}</h1>
            </div>

            <div className="c5">
              <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
                {PODCAST_SHOW.blurb}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--u2) var(--u4)' }}>
                <a href={PODCAST.spotify} className="link" target="_blank" rel="noopener noreferrer">
                  Spotify <span aria-hidden="true">→</span>
                </a>
                <a href={PODCAST.apple} className="link" target="_blank" rel="noopener noreferrer">
                  Apple Podcasts <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ FOLGEN IM LABOR ════════════════════════════════════════════════
          Die Folgen, die gerade im Labor stehen. Das vollständige Archiv
          liegt bei den Plattformen, nicht hier.                            */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Folgen im Labor" />

          <div className="lab-index">
            {episodes.map((p) => (
              <Link key={p.slug} href={`/labor/${p.slug}`} className="row">
                <div>
                  <span className="data">{tileMeta(p)}</span>
                  <h2 className="lab-row-title">{p.title}</h2>
                  <span className="unit">{p.people}</span>
                </div>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>

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
