import Link from 'next/link'
import {
  FEATURED,
  ITEMS,
  FORMATS,
  ARCHIVE_NOTE,
  itemMeta,
  byline,
  type LaborItem,
} from '@/data/labor'
import { laborArt } from '@/data/laborArt'
import { seedFrom } from '@/data/asciiCanvas'
import { PageHero, SectionHead, Plate, ClosingCta } from '@/components/ui'
import { AsciiArt } from '@/components/AsciiArt'

/* ── The mosaic ────────────────────────────────────────────────────────────
   Three tiers on one four-track grid: the featured piece 2×2, wide tiles
   2×1, the rest 1×1. Wide are the pieces that carry a cover and the two
   longest titles among the rest — the titles that need the width. With
   twelve pieces and the archive cell that fills five rows exactly; the
   grid packs densely, so a later small tile may sit before an earlier wide
   one — a mosaic, not a list.                                               */
type Size = 'xl' | 'wide' | 'small'

const textOnly = ITEMS.filter((i) => !i.image)
const longest = [...textOnly]
  .sort((a, b) => b.title.length - a.title.length)
  .slice(0, 2)
  .map((i) => i.title)

const sizeOf = (it: LaborItem): Size =>
  it.image || longest.includes(it.title) ? 'wide' : 'small'

function Tile({ it, size }: { it: LaborItem; size: Size }) {
  const cls =
    size === 'xl' ? 'tile mosaic-xl' : size === 'wide' ? 'tile tile-wide mosaic-wide' : 'tile'
  return (
    <Link href={it.href} className={cls}>
      {it.image ? (
        <Plate
          src={it.image}
          alt={it.title}
          coarse={size === 'xl'}
          ratio={size === 'xl' ? '16 / 9' : undefined}
        />
      ) : (
        <AsciiArt art={laborArt(it.type, seedFrom(it.title))} className="tile-art" />
      )}
      <div className="tile-body">
        <span className="data">
          {it.type} · {itemMeta(it)}
        </span>
        <h2 className={size === 'xl' ? 'd3' : 'd4'}>{it.title}</h2>
        {size === 'xl' && <p className="body">{it.excerpt}</p>}
        {size === 'wide' && <p className="body">{it.teaser ?? it.excerpt}</p>}
        <span className="unit">{byline(it)}</span>
      </div>
    </Link>
  )
}

export default function LaborPage() {
  return (
    <main>
      <PageHero
        line1="Wo Theorie"
        line2="auf Praxis trifft."
        body={
          'Im Labor veröffentlichen wir, was uns gerade beschäftigt: Whitepaper aus unserer Forschung, Prototypen aus laufenden Mandaten, Debatten­beiträge zu strukturellen Fragen und Podcast-Folgen mit Menschen, die uns herausfordern. Ein offenes Archiv unserer Auseinandersetzung mit Organisation.'
        }
      />

      {/* ═══ ARCHIV ═══════════════════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Archiv" />

          <div className="hairgrid mosaic">
            <Tile it={FEATURED} size="xl" />
            {ITEMS.map((it) => (
              <Tile key={it.title} it={it} size={sizeOf(it)} />
            ))}

            {/* The grid ends on its own exit. */}
            <Link href="#" className="pad endcell">
              <span className="unit">Archiv</span>
              <div>
                <p className="body-sm" style={{ marginBottom: 'var(--u3)' }}>
                  {ARCHIVE_NOTE}
                </p>
                <span className="d4">
                  Vollständiges Archiv <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FORMATE ══════════════════════════════════════════════════════════ */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Formate" />

          <h2 className="d2" style={{ marginBottom: 'var(--u8)', maxWidth: '20ch' }}>
            Wiederkehrende{' '}
            <span className="d-thin d-red">Auseinandersetzungen.</span>
          </h2>

          <div className="hairgrid hairgrid-3">
            {FORMATS.map((f) => (
              <article
                key={f.name}
                className="pad"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: 'var(--u2)',
                    marginBottom: 'var(--u4)',
                  }}
                >
                  <span className="eyebrow">{f.kind}</span>
                  <span className="unit">{f.cadence}</span>
                </div>

                <h3 className="d3" style={{ marginBottom: 'var(--u3)' }}>
                  {f.name}
                </h3>

                <p className="body" style={{ marginBottom: 'var(--u6)', flex: 1 }}>
                  {f.blurb}
                </p>

                <Link href={f.href} className="link" style={{ alignSelf: 'flex-start' }}>
                  {f.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCHLUSS ═════════════════════════════════════════════════════════
          Hier stand ein Newsletter-Formular. Es gibt keinen Newsletter, und
          die hinterlegte Mailchimp-Adresse war unvollständig — das Formular
          nahm eine Anmeldung entgegen, die nirgends ankam. Stattdessen die
          Schluss-CTA, die jede andere Seite trägt; /labor war die einzige
          ohne. Grundfolge damit L L D A, dieselbe Endung wie auf /projekte.
          Die beiden Schlagzeilenzeilen sind aus dem Bestand übernommen und
          von Mary nicht für diese Seite geschrieben. */}
      <ClosingCta
        eyebrow="Ihr Anlass"
        line1="Was wird bei Ihnen"
        line2="gerade neu verhandelt?"
        body="Ein erstes Gespräch ist zum Zuhören da. Was daraus folgt, entscheiden wir danach gemeinsam."
        cta="Gespräch anfragen"
      />
    </main>
  )
}
