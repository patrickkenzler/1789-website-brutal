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
  Hazard,
  Barcode,
  Emphasis,
  ClosingCta,
} from '@/components/ui'
import { AsciiWaves } from '@/components/AsciiWaves'

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══════════════════════════════════════════════════════════
          A viewport-tall inverted panel: the ASCII flow field is the full
          background, dimmed to a texture; the statement and actions sit in
          front. The hero fills the screen so the 1789 run below it stays off
          the first view and reads as a divider only once you scroll.       */}
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
          <h1 className="d1">
            Strategie <span className="d-thin d-red">scheitert</span> an
            Struktur.
            <br />
            Struktur <span className="d-thin d-red">überholt</span> Strategie.
            <br />
            Dazwischen <span className="d-thin d-red">entscheidet</span>{' '}
            Organisation.
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
              <h2 className="d2">
                Was heute blockiert,
                <br />
                <span className="d-thin">
                  hat gestern <span className="d-strike">getragen</span>.
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

          <h2 className="d2" style={{ marginBottom: 'var(--u8)', maxWidth: '18ch' }}>
            Organisationen, die den{' '}
            <span className="d-thin d-red">Shift</span> gewagt haben.
          </h2>

          <div className="g3">
            {featuredCases.map((c) => (
              <Link
                key={c.slug}
                href={`/projekte/${c.slug}`}
                className="card"
                style={{ borderColor: '#33312E', background: 'var(--stock)' }}
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
                <div className="card-foot" style={{ borderTopColor: '#33312E' }}>
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

      {/* ═══ 03 · STIMMEN ═══════════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Stimmen" />

          <div className="hairgrid hairgrid-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="pad">
                <span
                  className="unit"
                  style={{ display: 'block', marginBottom: 'var(--u3)' }}
                >
                  {t.company}
                </span>

                <blockquote className="body" style={{ marginBottom: 'var(--u4)' }}>
                  <Emphasis text={t.quote} />
                </blockquote>

                <figcaption
                  style={{
                    borderTop: 'var(--rule)',
                    paddingTop: 'var(--u2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 'var(--u2)',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="data" style={{ color: 'var(--ink)' }}>
                    {t.name} — {t.title}
                  </span>
                  {t.caseHref && (
                    <Link href={t.caseHref} className="unit" title={t.caseLabel ?? ''}>
                      <span style={{ color: 'var(--red)' }}>Case ↗</span>
                    </Link>
                  )}
                </figcaption>
              </figure>
            ))}

            {/* Five entries in two columns leave the sixth cell empty. Rather
                than an unexplained gap, the grid ends on its own exit. */}
            <Link href="/projekte" className="pad endcell">
              <span className="unit">Weiterlesen</span>
              <span className="d3">
                Alle Cases <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ UNSER ANSATZ ═══════════════════════════════════════════════════
          Five phases as an index. The sequence reads top to bottom; the phase
          titles carry it, no leading number.                               */}
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
              <h2 className="d2">
                Von Diagnose
                <br />
                <span className="d-thin d-red">zur Eigenständigkeit.</span>
              </h2>
            </div>
            <div className="c5">
              <p className="body">
                Fünf Phasen, in denen wir Organisationen von der ersten Diagnose
                bis zur selbstständigen Weiterentwicklung begleiten.
              </p>
            </div>
          </div>

          <div style={{ borderTop: 'var(--rule-bar)' }}>
            {PHASES.map((p) => (
              <Link key={p.num} href={`/ansatz#phase-${p.num}`} className="row">
                <div>
                  <h3 className="d3" style={{ marginBottom: 6 }}>
                    {p.title}
                  </h3>
                  <p className="data" style={{ marginBottom: 8 }}>
                    {p.meta} — {p.question}
                  </p>
                  <p className="body">{p.tagline}</p>
                </div>
                <span className="row-arrow" aria-hidden="true">
                  →
                </span>
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
          <h2 className="d2" style={{ marginBottom: 'var(--u8)' }}>
            Vier Dimensionen, in denen
            <br />
            <span className="d-thin d-red">KI Organisation neu denkt.</span>
          </h2>

          <div className="hairgrid hairgrid-4">
            {AI_DIMENSIONS.map((d) => (
              <article key={d.num} className="pad">
                <h3 className="d4 h-2l" style={{ marginBottom: 'var(--u3)' }}>
                  {d.title}
                </h3>
                <p className="body">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 06 · DENK LABOR ════════════════════════════════════════════════ */}
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

          <div className="g12" style={{ rowGap: 'var(--u6)' }}>
            {/* ── Featured ── */}
            <article className="c7">
              <Link href="/labor" className="card">
                <Plate
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  label="ESSAY"
                  coarse
                  ratio="16 / 9"
                />
                <div className="card-body">
                  <span className="data" style={{ display: 'block', marginBottom: 'var(--u2)' }}>
                    {FEATURED.type} · {FEATURED.readTime} · {FEATURED.date}
                  </span>
                  <h3 className="d3" style={{ marginBottom: 'var(--u3)' }}>
                    {FEATURED.title}
                  </h3>
                  <p className="body">{FEATURED.excerpt}</p>
                </div>
                <div className="card-foot">
                  <span className="unit">{FEATURED.author}</span>
                </div>
              </Link>
            </article>

            {/* ── Index of the rest ── */}
            <div className="c5">
              <div style={{ borderTop: 'var(--rule-bar)' }}>
                {ITEMS.slice(0, 5).map((it) => (
                  <Link key={it.title} href="/labor" className="row">
                    <div>
                      <span className="data" style={{ display: 'block', marginBottom: 4 }}>
                        {it.type} · {itemMeta(it)}
                      </span>
                      <h4 className="d4" style={{ marginBottom: 4 }}>
                        {it.title}
                      </h4>
                      <span className="unit">{byline(it)}</span>
                    </div>
                    <span className="row-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div style={{ marginTop: 'var(--u4)' }}>
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

      <Hazard />

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
