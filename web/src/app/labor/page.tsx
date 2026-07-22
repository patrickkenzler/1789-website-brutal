import Link from 'next/link'
import {
  FEATURED,
  ITEMS,
  TYPES,
  FORMATS,
  ARCHIVE_NOTE,
  itemMeta,
  byline,
} from '@/data/labor'
import { NEWSLETTER_ACTION } from '@/data/site'
import { PageHero, SectionHead, Plate, Hazard, Barcode } from '@/components/ui'

/* The two items carrying a plate open the archive as full units; the
   remaining nine are dense index lines. */
const PLATED = ITEMS.filter((i) => i.image)
const DENSE = ITEMS.filter((i) => !i.image)

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
        index="04"
      />

      {/* ═══ 01 · FEATURED ══════════════════════════════════════════════════
          One oversized plate against a dossier column. The only item on the
          page that is allowed to breathe.                                  */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="01"
            label="★ Featured · diese Woche"
            end={<span className="unit">{FEATURED.type}</span>}
          />

          <div className="g12" style={{ rowGap: 'var(--u6)', alignItems: 'start' }}>
            <div className="c7">
              <Plate
                src={FEATURED.image}
                alt={FEATURED.title}
                label={FEATURED.type}
                coarse
                ratio="16 / 9"
              />
            </div>

            <div className="c5">
              <span
                className="data"
                style={{ display: 'block', marginBottom: 'var(--u3)' }}
              >
                {FEATURED.type} · {itemMeta(FEATURED)}
              </span>

              <h2 className="d2" style={{ marginBottom: 'var(--u3)' }}>
                {FEATURED.title}
              </h2>

              <span
                className="unit"
                style={{ display: 'block', marginBottom: 'var(--u4)' }}
              >
                {byline(FEATURED)}
              </span>

              <p className="body" style={{ marginBottom: 'var(--u6)' }}>
                {FEATURED.excerpt}
              </p>

              <Link href="#" className="link">
                Weiterlesen <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 02 · FILTER STRIP ══════════════════════════════════════════════
          Presentational only — this page is a server component. The chips
          declare the taxonomy, they do not operate it.                     */}
      <section className="slab slab-dense">
        <div className="shell">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 'var(--u3)',
              flexWrap: 'wrap',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              Filter:
            </span>
            <div className="chips" style={{ flex: 1 }}>
              <span className="chip chip-fill">Alle · {ITEMS.length + 1}</span>
              {TYPES.map((t) => (
                <span key={t} className="chip">
                  {t} · {ITEMS.filter((i) => i.type === t).length}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 03 · ARCHIV ════════════════════════════════════════════════════
          Two plated units, then the index. The rhythm is deliberate: the
          archive thins out as it goes back in time.                        */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="02"
            label="Archiv"
            end={<span className="unit">{ITEMS.length} Einträge</span>}
          />

          <div className="hairgrid hairgrid-2" style={{ marginBottom: 'var(--u8)' }}>
            {PLATED.map((it, i) => (
              <article key={it.title}>
                <Plate
                  src={it.image}
                  alt={it.title}
                  label={it.type}
                  ratio="16 / 9"
                />
                <div className="pad">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: 'var(--u2)',
                      marginBottom: 'var(--u3)',
                    }}
                  >
                    <span className="strip-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="data">
                      {it.type} · {itemMeta(it)}
                    </span>
                  </div>

                  <h3 className="d3" style={{ marginBottom: 'var(--u2)' }}>
                    {it.title}
                  </h3>

                  <span
                    className="unit"
                    style={{ display: 'block', marginBottom: 'var(--u3)' }}
                  >
                    {byline(it)}
                  </span>

                  <p className="body">{it.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ borderTop: 'var(--rule-bar)' }}>
            {DENSE.map((it, i) => (
              <Link key={it.title} href={it.href} className="row">
                <span className="row-num">
                  {String(i + PLATED.length + 1).padStart(2, '0')}
                </span>
                <div>
                  <span className="data" style={{ display: 'block', marginBottom: 6 }}>
                    {it.type} · {itemMeta(it)}
                  </span>
                  <h3 className="d3" style={{ marginBottom: 6 }}>
                    {it.title}
                  </h3>
                  <p className="body" style={{ marginBottom: 8 }}>
                    {it.excerpt}
                  </p>
                  <span className="unit">{byline(it)}</span>
                </div>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 · FORMATE ═══════════════════════════════════════════════════ */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead
            num="03"
            label="Formate"
            end={<span className="unit">{FORMATS.length} Reihen</span>}
          />

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

      <Hazard />

      {/* ═══ 05 · NEWSLETTER ════════════════════════════════════════════════ */}
      <section className="slab">
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

      {/* ═══ 06 · ARCHIV-FOOTER ═════════════════════════════════════════════ */}
      <section className="slab slab-dense">
        <div className="shell">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: 'var(--u4)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                Archiv
              </span>
              <p className="body">{ARCHIVE_NOTE}</p>
            </div>

            <Link href="#" className="link">
              Vollständiges Archiv <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
