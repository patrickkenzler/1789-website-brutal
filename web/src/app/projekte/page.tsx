import Link from 'next/link'
import { cases } from '@/data/cases'
import { PageHero, SectionHead, Plate, ClosingCta } from '@/components/ui'

export default function ProjektePage() {
  return (
    <main>
      <PageHero
        eyebrow="Shift Cases"
        line1="Organisationen,"
        line2="die den Shift gewagt haben."
        body="Jedes Engagement beginnt mit einer ehrlichen Diagnose des Gaps. Was hier folgt, sind keine Erfolgsgeschichten — sondern Erkenntnisse aus echter Transformation."
      />

      {/* ═══ ALLE CASES ═══════════════════════════════════════════════════════
          One grid of equal tiles, no highlight/list split: the archive stays
          short by design — a dozen cases at most, so they stay current — and
          every case gets the same picture-first tile. Where there is no
          photograph, the client's name is the plate. Dark: the grid opens
          the page's one chapter.                                           */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Alle Cases" />

          <div className="hairgrid hairgrid-4 tiles">
            {cases.map((c) => (
              <Link key={c.slug} href={`/projekte/${c.slug}`} className="tile">
                <Plate src={c.image} alt={c.title} label={c.client} note={null} ratio="4 / 3" />
                <div className="tile-body">
                  <span className="unit">
                    {c.client} · {c.sector}
                  </span>
                  <h2 className="d4 h-2l">{c.title}</h2>
                  <p className="body">{c.tagline}</p>
                  <span className="data">{c.tags.slice(0, 2).join(' · ')}</span>
                </div>
                <div className="tile-foot">
                  <span className="unit">
                    {c.duration} · {c.scale}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        eyebrow="Bereit zur Diagnose?"
        line1="Jede Transformation"
        line2="beginnt mit dem Gap."
        body="Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch. Kein Sales-Deck."
        cta="Erstgespräch anfragen"
      />
    </main>
  )
}
