import Link from 'next/link'
import { featuredCases } from '@/data/cases'
import { PHASES, PILLARS, AI_DIMENSIONS } from '@/data/approach'
import { TESTIMONIALS } from '@/data/team'
import { FEATURED, ITEMS, itemMeta, byline } from '@/data/labor'
import { CLIENTS, QUESTIONS } from '@/data/site'
import {
  SectionHead,
  Tape,
  Plate,
  Barcode,
  Emphasis,
  ClosingCta,
} from '@/components/ui'
import { AsciiWaves } from '@/components/AsciiWaves'
import { AiGlyph } from '@/components/AiGlyph'
import { PhaseGlyph } from '@/components/PhaseGlyph'
import { Rail } from '@/components/Rail'
import { ScrollReveal } from '@/components/ScrollReveal'

/* Denk Labor in three tiers: the lead piece, the pieces that carry a cover,
   then the index of the ones that don't. */
const LAB_PLATED = ITEMS.filter((i) => i.image).slice(0, 2)
const LAB_INDEX = ITEMS.filter((i) => !i.image).slice(0, 3)

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════════════════════
          A viewport-tall inverted panel: the ASCII flow field is the full
          background, dimmed to a texture; the statement and actions sit in
          front. The hero fills the screen so the 1789 run below it stays off
          the first view and reads as a divider only once you scroll.       */}
      <ScrollReveal />

      <section className="slab-invert hero-sec">
        <div className="hero-bg" aria-hidden="true">
          <AsciiWaves />
        </div>

        <div className="shell hero-fg">
          <span
            className="eyebrow eyebrow-br"
            style={{ marginBottom: 'var(--u6)' }}
          >
            Organizational Strategy // Governance Design // Target Operating
            Model
          </span>

          {/* Each sentence holds one line at this measure. The copy is three
              parallel clauses and the red carries the three verbs —
              scheitert / überholt / entscheidet — so the accent marks what the
              sentence turns on rather than falling wherever it breaks. */}
          {/* The verbs stay at the headline's own bold weight (not the thin
              cut used elsewhere) so the red reads over the ASCII texture. */}
          {/* Each sentence is its own block so it can shutter in on its own
              beat (see .hero-line). */}
          <h1 className="d1">
            <span className="hero-line">
              Strategie <span className="d-red">scheitert</span> an Struktur.
            </span>
            <span className="hero-line">
              Struktur <span className="d-red">überholt</span> Strategie.
            </span>
            <span className="hero-line">
              Dazwischen <span className="d-red">entscheidet</span> Organisation.
            </span>
          </h1>

          <div
            style={{
              marginTop: 'var(--u8)',
              display: 'flex',
              gap: 'var(--u2)',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/kontakt" className="btn btn-red btn-lg">
              Erstgespräch vereinbaren <span aria-hidden="true">→</span>
            </Link>
            <Link href="/ansatz" className="btn btn-lg">
              Unser Ansatz <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Letterform run, cut off by both viewport edges — the divider between
          the hero and the first section. Below the fold on load. */}
      <div className="bleed" aria-hidden="true">
        <span className="d0">1789—1789—1789—1789</span>
      </div>

      <Tape items={CLIENTS} />

      {/* ═══ 01 · DER 1789-BLICK ════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Der 1789-Blick" />

          <div className="g12" style={{ rowGap: 'var(--u6)' }}>
            <div className="c7">
              <h2 className="d2" data-reveal>
                <span className="reveal-wipe">
                  Was heute blockiert,
                  <br />
                  <span className="d-thin d-wide">
                    hat gestern <span className="d-strike">getragen</span>.
                  </span>
                </span>
              </h2>
            </div>
            <div className="c5">
              <p className="body">
                Jede Organisation lebt von Entscheidungen, Routinen und informalen
                Lösungen, die einmal funktioniert haben. Wir legen frei, welche
                Ordnung heute noch trägt, wo sie blockiert und was neu entschieden
                werden muss damit Verantwortung greift, Veränderung tragfähig wird
                und Wertschöpfung &amp; Wirkung entstehen.
              </p>
            </div>
          </div>

          {/* ── Three pillars, razor-ruled ── */}
          <div className="hairgrid hairgrid-3" style={{ marginTop: 'var(--u8)' }}>
            {PILLARS.map((p) => (
              <article key={p.title} className="pad" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* "AI-Human-Native" runs to two lines where the other two
                    pillars run to one; reserving both keeps all three bodies
                    starting on the same line. The title itself is the marker —
                    left-to-right order carries the sequence. */}
                <h3 className="d3 h-2l" style={{ marginBottom: 'var(--u3)' }}>
                  {p.title}
                </h3>

                <p className="body" style={{ marginBottom: 'var(--u4)', flex: 1 }}>
                  {p.body}
                </p>

                <ul style={{ borderTop: 'var(--rule)' }}>
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="data"
                      style={{
                        display: 'flex',
                        gap: 'var(--u2)',
                        paddingBlock: 8,
                        borderBottom: 'var(--rule-faint)',
                      }}
                    >
                      <span style={{ color: 'var(--red)' }}>›</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 02 · SHIFT CASES ═══════════════════════════════════════════════ */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead
            label="Shift Cases"
            end={
              <Link href="/projekte" className="link">
                Alle Cases <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)', maxWidth: '18ch' }}>
            <span className="reveal-wipe">
              Organisationen, die den{' '}
              <span className="d-thin d-wide d-red">Shift</span> gewagt haben.
            </span>
          </h2>

          <div className="g3">
            {featuredCases.map((c) => (
              <Link
                key={c.slug}
                href={`/projekte/${c.slug}`}
                className="card"
                style={{ borderColor: '#2C333B', background: 'var(--stock)' }}
              >
                <Plate
                  src={c.image}
                  alt={c.title}
                  label={c.client}
                  ratio="16 / 10"
                />
                <div className="card-body">
                  <span
                    className="unit"
                    style={{ display: 'block', marginBottom: 'var(--u3)' }}
                  >
                    {c.tags[0]}
                  </span>
                  {/* title is the short label, teaser the full sentence.
                      Setting the teaser as the macro heading put a 25-word
                      sentence in uppercase display type — legible as a shout,
                      not as prose. Each field now sits in its own register. */}
                  <h3 className="d4 h-2l" style={{ marginBottom: 'var(--u3)' }}>
                    {c.title}
                  </h3>
                  {c.teaser && <p className="body">{c.teaser}</p>}
                </div>
                <div className="card-foot" style={{ borderTopColor: '#2C333B' }}>
                  <span className="unit">
                    {c.duration} · {c.scale}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Questions ticker ═══════════════════════════════════════════════ */}
      <Tape items={QUESTIONS} />

      {/* ═══ 03 · STIMMEN ═══════════════════════════════════════════════════
          A rail, not a grid: the cards run past the right edge of the shell
          and scroll sideways. Each card leads with the portrait as a
          landscape band, the quote underneath in the macro face.          */}
      <section className="slab">
        <div className="shell">
          <Rail label="Stimmen" ariaLabel="Stimmen unserer Kunden">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="stimme">
                <Plate src={t.photo} alt={t.name} ratio="16 / 10" frame={t.frame} />

                <div className="stimme-body">
                  <span className="unit" style={{ display: 'block' }}>
                    {t.company}
                  </span>

                  <blockquote className="stimme-quote">
                    <Emphasis text={t.quote} />
                  </blockquote>

                  <figcaption className="stimme-cap">
                    <span className="data" style={{ color: 'var(--ink)' }}>
                      {t.name} — {t.title}
                    </span>
                    {t.caseHref && (
                      <Link href={t.caseHref} className="unit" title={t.caseLabel ?? ''}>
                        <span style={{ color: 'var(--red)' }}>Case ↗</span>
                      </Link>
                    )}
                  </figcaption>
                </div>
              </figure>
            ))}

            {/* The rail ends on its own exit. */}
            <Link href="/projekte" className="pad endcell stimme-end">
              <span className="unit">Weiterlesen</span>
              <span className="d3">
                Alle Cases <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Rail>
        </div>
      </section>

      {/* ═══ UNSER ANSATZ ═══════════════════════════════════════════════════
          Five phases as a strip, left to right. The arrow after each phase
          label carries the sequence — no leading number — and a blueprint
          diagram on top of each cell gives the phase a picture before its
          words.                                                            */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            label="Unser Ansatz"
            end={
              <Link href="/ansatz" className="link">
                Vollständig lesen <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <div className="g12" style={{ rowGap: 'var(--u6)', marginBottom: 'var(--u8)' }}>
            <div className="c7">
              <h2 className="d2" data-reveal>
                <span className="reveal-wipe">
                  Von Diagnose
                  <br />
                  <span className="d-thin d-wide d-red">zur Eigenständigkeit.</span>
                </span>
              </h2>
            </div>
            <div className="c5">
              <p className="body">
                Fünf Phasen, in denen wir Organisationen von der ersten Diagnose
                bis zur selbstständigen Weiterentwicklung begleiten.
              </p>
            </div>
          </div>

          <div className="hairgrid hairgrid-5">
            {PHASES.map((p, i) => (
              <Link key={p.num} href={`/ansatz#phase-${p.num}`} className="phase">
                <PhaseGlyph index={i} />
                <div className="phase-body">
                  <span className="eyebrow">
                    {p.meta}
                    {i < PHASES.length - 1 && (
                      <span className="phase-next" aria-hidden="true">
                        {' '}
                        →
                      </span>
                    )}
                  </span>
                  {/* Every title is "<verb-able> machen": breaking after the
                      first word sets all five on two lines, so the repeated
                      "machen" runs along the strip as one line. */}
                  <h3 className="phase-title">
                    {p.title.split(' ')[0]}
                    <br />
                    {p.title.split(' ').slice(1).join(' ')}
                  </h3>
                  <p className="body">{p.tagline}</p>
                  <p className="data phase-q">{p.question}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05 · AI UND ORGANISATION ═══════════════════════════════════════ */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="AI und Organisation" />

          {/* Break at the accent boundary. Wrapped to a measure instead, the
              red span opened mid-line and ran over the break, so the colour
              looked like it had landed where the text happened to fold. */}
          <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)' }}>
            <span className="reveal-wipe">
              Vier Dimensionen, in denen
              <br />
              <span className="d-thin d-wide d-red">KI Organisation neu denkt.</span>
            </span>
          </h2>

          <div className="hairgrid hairgrid-4">
            {AI_DIMENSIONS.map((d, i) => (
              <article key={d.num} className="pad ai-card">
                <h3 className="d4 h-2l" style={{ marginBottom: 'var(--u3)' }}>
                  {d.title}
                </h3>
                <p className="body">{d.body}</p>
                <AiGlyph index={i} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 · DENK LABOR ════════════════════════════════════════════════
          Three tiers, each a step quieter: the lead piece on a large plate,
          the two that carry a cover on small plates, the index of the rest
          in type only. Open rather than boxed — the plates are framed
          objects, the index is ruled, the gutter between them is air.     */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            label="Denk Labor"
            end={
              <Link href="/labor" className="link">
                Alle Inhalte <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <div className="lab">
            {/* ── Lead ── */}
            <Link href="/labor" className="lab-item lab-lead">
              <Plate src={FEATURED.image} alt={FEATURED.title} coarse />
              <div className="lab-text">
                <span className="data">
                  {FEATURED.type} · {itemMeta(FEATURED)}
                </span>
                <h3 className="d3">{FEATURED.title}</h3>
                <p className="body">{FEATURED.excerpt}</p>
                <span className="unit">{byline(FEATURED)}</span>
              </div>
            </Link>

            <div className="lab-side">
              {/* ── Pair ── */}
              <div className="lab-pair">
                {LAB_PLATED.map((it) => (
                  <Link key={it.title} href="/labor" className="lab-item">
                    <Plate src={it.image} alt={it.title} />
                    <div className="lab-text">
                      <span className="data">
                        {it.type} · {itemMeta(it)}
                      </span>
                      <h3 className="lab-title">{it.title}</h3>
                      <span className="unit">{byline(it)}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ── Index ── */}
              <div className="lab-index">
                {LAB_INDEX.map((it) => (
                  <Link key={it.title} href="/labor" className="row">
                    <div>
                      <span className="data">
                        {it.type} · {itemMeta(it)}
                      </span>
                      <h4 className="lab-row-title">{it.title}</h4>
                      <span className="unit">{byline(it)}</span>
                    </div>
                    <span className="row-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="lab-colophon">
                <Barcode />
                <p className="unit" style={{ marginTop: 'var(--u2)' }}>
                  Podcasts, Essays, Whitepaper und Experimente — was im
                  Hintergrund unserer Arbeit entsteht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══ 07 · CTA ═══════════════════════════════════════════════════════ */}
      <ClosingCta
        eyebrow="Bereit für den Shift?"
        line1="Let's shift"
        line2="your system."
        body="Wir haben es uns zum Anspruch gemacht, unseren Kunden ein neues Verständnis ihrer Organisation aufzuzeigen und gemeinsam wirksame Veränderungen zu entwerfen."
        cta="Erstgespräch vereinbaren"
      />
    </main>
  )
}
