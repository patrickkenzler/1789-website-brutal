import Link from 'next/link'
import { featuredCases } from '@/data/cases'
import { PHASES, ARC, BLICK, WORK, AI_HUMAN_NATIVE } from '@/data/approach'
import { TESTIMONIALS } from '@/data/team'
import { FEATURED, ITEMS, itemMeta, byline, type LaborItem } from '@/data/labor'
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
import { AiBand } from '@/components/AiBand'
import { PhaseGlyph } from '@/components/PhaseGlyph'
import { Rail } from '@/components/Rail'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Tension } from '@/components/Tension'

/* Denk Labor in three tiers: the lead piece, the pieces that carry a cover,
   then an index of three more. */
const LAB_PLATED = ITEMS.filter((i) => i.image).slice(0, 2)
const LAB_INDEX = [
  'Mission Boards als Entscheidungsformat',
  'Strategie und Struktur — was zuerst?',
  'Selbstorganisation ist kein Selbstläufer',
]
  .map((title) => ITEMS.find((i) => i.title === title))
  .filter((i): i is LaborItem => i !== undefined)

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
          <span className="eyebrow hero-kicker">Managementberatung für</span>
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

      {/* ═══ DER BLICK ══════════════════════════════════════════════════════
          No label strip: the client tape above already closes off the hero,
          and the headline opens the argument on its own. One text axis:
          headline, then the lede beneath it. Three tensions as cards that
          show only the term pair and its verdict — the explanation is behind
          them (see Tension) — and a closing thesis whose three questions
          run on in the ticker.                                              */}
      <section className="slab">
        <div className="shell">
          <h2 className="d2" data-reveal>
            <span className="reveal-wipe">
              Was heute blockiert,
              <br />
              <span className="d-thin d-wide">
                hat gestern <span className="d-strike">getragen</span>.
              </span>
            </span>
          </h2>
          <div className="lede standfirst">
            {BLICK.intro.map((p) => (
              <p key={p} className="body-lg">
                {p}
              </p>
            ))}
          </div>

          <div className="hairgrid hairgrid-3 tensions" style={{ marginTop: 'var(--u8)' }}>
            {BLICK.tensions.map((t) => (
              <Tension key={t.title[0]} title={t.title} body={t.body} close={t.close} />
            ))}
          </div>

          <p className="d3 statement">
            {BLICK.close[0]}
            <br />
            <span className="d-thin">{BLICK.close[1]}</span>
          </p>
        </div>
      </section>

      <Tape items={QUESTIONS} repeat={4} />

      {/* ═══ WORAN WIR ARBEITEN ═════════════════════════════════════════════
          Three perspectives on the same organisation; the AI-Human-Native band
          runs straight under them, across all three.                       */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Woran wir arbeiten" />

          <div className="g12" style={{ rowGap: 'var(--u6)' }}>
            <div className="c7">
              <h2 className="d2" data-reveal>
                <span className="reveal-wipe">
                  Ordnung entsteht ohnehin.
                  <br />
                  <span className="d-thin d-wide d-red">
                    Wir machen sie entscheidbar.
                  </span>
                </span>
              </h2>
            </div>
            <div className="c5 lede">
              {WORK.intro.map((p) => (
                <p key={p} className="body-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="hairgrid hairgrid-3" style={{ marginTop: 'var(--u8)' }}>
            {WORK.perspectives.map((p) => (
              <article key={p.title} className="pad tension tension-4">
                <h3 className="d3">{p.title}</h3>
                <p className="d4 d-thin">{p.lead}</p>
                <p className="body">{p.body}</p>
                <p className="close-line">{p.close}</p>
              </article>
            ))}
          </div>

          <AiBand
            label="AI-Human-Native"
            paragraphs={AI_HUMAN_NATIVE.home.paragraphs}
            close={AI_HUMAN_NATIVE.home.close}
            art={2}
          />

          <div className="g12 statement">
            <p className="d3 c8">
              {WORK.conclusion[0]}
              <br />
              <span className="d-thin">{WORK.conclusion[1]}</span>
            </p>
            <p className="c4 eyebrow eyebrow-br statement-coda">{WORK.coda}</p>
          </div>
        </div>
      </section>

      {/* ═══ CASES ══════════════════════════════════════════════════════════ */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead
            label="Cases"
            end={
              <Link href="/projekte" className="link">
                Alle Cases <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)' }}>
            <span className="reveal-wipe">
              Organisationen,
              <br />
              die <span className="d-thin d-wide d-red">entschieden</span> haben.
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

      {/* ═══ STIMMEN ════════════════════════════════════════════════════════
          A rail, not a grid: the cards run past the right edge of the shell
          and scroll sideways. Each card leads with the portrait as a
          landscape band, the quote underneath in the macro face.          */}
      <section className="slab">
        <div className="shell">
          <Rail
            label="Stimmen"
            ariaLabel="Stimmen unserer Kunden"
            heading={
              <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)' }}>
                <span className="reveal-wipe">
                  Was Kunden <span className="d-thin d-wide d-red">sagen.</span>
                </span>
              </h2>
            }
          >
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
                Den vollständigen Ansatz lesen <span aria-hidden="true">→</span>
              </Link>
            }
          />

          <div className="g12" style={{ rowGap: 'var(--u6)', marginBottom: 'var(--u8)' }}>
            <div className="c7">
              <h2 className="d2" data-reveal>
                <span className="reveal-wipe">
                  Fünf Phasen geben Orientierung,
                  <br />
                  <span className="d-thin d-wide d-red">
                    ohne die Antwort vorwegzunehmen.
                  </span>
                </span>
              </h2>
            </div>
            <div className="c5">
              <p className="body">{ARC.note}</p>
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
                  <h3 className="phase-title">{p.title}</h3>
                  <p className="body">{p.tagline}</p>
                  <p className="data phase-q">{p.questionShort ?? p.question}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DENK LABOR ═════════════════════════════════════════════════════
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

          <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)' }}>
            <span className="reveal-wipe">
              Wo Organisationstheorie
              <br />
              <span className="d-thin d-wide d-red">auf Praxis trifft.</span>
            </span>
          </h2>

          <div className="lab">
            {/* ── Lead ── */}
            <Link href="/labor" className="lab-item lab-lead">
              <Plate src={FEATURED.image} alt={FEATURED.title} coarse />
              <div className="lab-text">
                <span className="data">
                  {FEATURED.type} · {itemMeta(FEATURED)}
                </span>
                <h3 className="d3">{FEATURED.title}</h3>
                <p className="body">{FEATURED.teaser ?? FEATURED.excerpt}</p>
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
                <div className="lab-newsletter">
                  <span className="eyebrow">✉ Newsletter</span>
                  <Link href="/labor#newsletter" className="link">
                    Was im Labor entsteht — direkt im Postfach.{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════════ */}
      <ClosingCta
        eyebrow="Ihr Anlass"
        line1="Was wird bei Ihnen"
        line2="gerade neu verteilt?"
        body="Ein Erstgespräch beginnt selten mit einer fertig formulierten Strukturfrage. Es reicht der Anlass: eine Neuordnung, eine Integration, ein neues Operating Model, AI in der täglichen Arbeit. Wir klären gemeinsam, welches Problem Ihre Organisation lösen will — und ob unsere Arbeitsweise dafür passt."
        cta="Erstgespräch vereinbaren"
      />
    </main>
  )
}
