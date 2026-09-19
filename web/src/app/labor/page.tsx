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
import { NEWSLETTER_ACTION } from '@/data/site'
import { laborArt } from '@/data/laborArt'
import { seedFrom } from '@/data/asciiCanvas'
import { PageHero, SectionHead, Plate, Barcode } from '@/components/ui'
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
        eyebrow="Denk Labor"
        line1="Wo Theorie"
        line2="auf Praxis trifft."
        body={
          'Im Denk Labor veröffentlichen wir, woran wir denken: Whitepaper aus unserer Forschung, Prototypen aus laufenden Mandaten, Debatten­beiträge zu strukturellen Fragen und Podcast-Folgen mit Menschen, die uns herausfordern. Ein offenes Archiv unserer Auseinandersetzung mit Organisation.'
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

      {/* ═══ NEWSLETTER ═══════════════════════════════════════════════════════ */}
      <section className="slab" id="newsletter">
        <div className="shell">
          <div className="g12" style={{ rowGap: 'var(--u6)', alignItems: 'start' }}>
            <div className="c6">
              <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u4)' }}>
                ✉ Newsletter
              </span>
              <h2 className="d2" style={{ marginBottom: 'var(--u4)' }}>
                Neue Beiträge
                <br />
                <span className="d-thin d-red">direkt im Postfach.</span>
              </h2>
              <p className="body">
                Etwa einmal im Monat — Whitepaper, Essays, neue Podcastfolgen.
                Nie Spam, immer ohne Pflichtfelder.
              </p>
            </div>

            <div className="c5 s8">
              <div className="box regmark pad">
                <form
                  action={NEWSLETTER_ACTION}
                  method="post"
                  target="_blank"
                  style={{ display: 'grid', gap: 'var(--u3)' }}
                >
                  <label className="field" htmlFor="newsletter-email" style={{ marginBottom: 0 }}>
                    <span className="field-label">E-Mail-Adresse</span>
                    <input
                      className="input"
                      id="newsletter-email"
                      name="EMAIL"
                      type="email"
                      required
                      placeholder="ihre@email.de"
                      aria-label="E-Mail-Adresse"
                    />
                  </label>

                  <button type="submit" className="btn btn-red btn-block">
                    Newsletter abonnieren <span aria-hidden="true">→</span>
                  </button>
                </form>

                <div style={{ marginTop: 'var(--u4)' }}>
                  <Barcode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
