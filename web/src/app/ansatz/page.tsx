import Link from 'next/link'
import { PHASES, ARC, ANSATZ, AI_HUMAN_NATIVE } from '@/data/approach'
import { SectionHead, PageHero, ClosingCta } from '@/components/ui'
import { AiBand } from '@/components/AiBand'
import { ScrollReveal } from '@/components/ScrollReveal'

/* Grounds as on the homepage: dark opens a chapter, light carries the
   reading. Three chapters here — where we begin (dark), how we work (light,
   with the AI band as its dark inset), the arc (dark index, then the five
   phases as one light document). Aubergine once, at the end.
   Sequence: L(hero) · D · L · D · L L L L L · A                            */

export default function AnsatzPage() {
  return (
    <main>
      <ScrollReveal />

      <PageHero
        eyebrow="Unser Ansatz"
        line1="Modelle verändern Praxis."
        line2="Praxis verändert Modelle."
        body={ANSATZ.intro}
      />

      {/* ═══ WO WIR BEGINNEN ════════════════════════════════════════════════
          The argument in three steps — problem, criteria, one organisation —
          set as three ruled columns under the headline.                    */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Wo wir beginnen" />

          <h2 className="d2" data-reveal style={{ marginBottom: 'var(--u8)' }}>
            <span className="reveal-wipe">
              Jede Struktur hat einmal ein Problem gelöst.
              <br />
              <span className="d-thin d-wide d-red">
                Wir beginnen bei dem, das sie heute stellt.
              </span>
            </span>
          </h2>

          <div className="g3 cols-ruled">
            {ANSATZ.start.map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UNSERE ARBEITSLOGIK ════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead label="Unsere Arbeitslogik" />

          <div className="g12" style={{ rowGap: 'var(--u6)' }}>
            <div className="c7">
              <h2 className="d2" data-reveal>
                <span className="reveal-wipe">
                  Drei Funktionen tragen jedes Mandat.
                  <br />
                  <span className="d-thin d-wide d-red">
                    Die Entscheidung gehört nicht dazu.
                  </span>
                </span>
              </h2>
            </div>
            <div className="c5">
              <p className="body-lg">{ANSATZ.logic.intro}</p>
            </div>
          </div>

          <div className="hairgrid hairgrid-3" style={{ marginTop: 'var(--u8)' }}>
            {ANSATZ.logic.functions.map((f) => (
              <article key={f.title} className="pad tension">
                <h3 className="d3">{f.title}</h3>
                <p className="d4 d-thin">{f.lead}</p>
                <p className="body">{f.body}</p>
              </article>
            ))}
          </div>

          {/* The position inside the chapter: a dark inset under the three
              functions, as on the homepage. */}
          <AiBand
            label="AI-Human-Native"
            paragraphs={AI_HUMAN_NATIVE.ansatz.paragraphs}
            close={AI_HUMAN_NATIVE.ansatz.close}
            art={1}
          />

          <div className="g2 statement">
            {ANSATZ.logic.close.map((p) => (
              <p key={p} className="body-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DER ARBEITSBOGEN ═══════════════════════════════════════════════
          The five phases as a table of contents. Order is the reading order —
          the phase titles carry it. The sixth cell closes the 3×2 grid with
          the chain of model states the phases leave behind. Dark: the index
          opens the third chapter; the phases read on light after it.      */}
      <section className="slab slab-invert">
        <div className="shell">
          <SectionHead label="Der Arbeitsbogen" />

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
              <p className="body-lg">{ARC.intro}</p>
            </div>
          </div>

          <div className="hairgrid hairgrid-3">
            {PHASES.map((p) => (
              <Link key={p.num} href={`#phase-${p.num}`} className="pad arc-cell">
                <span className="eyebrow">{p.metaLong ?? p.meta}</span>
                <h3 className="d4">{p.title}</h3>
                <span className="unit arc-jump">↓ Zur Phase</span>
              </Link>
            ))}
            <div className="pad arc-chain">
              {PHASES.map((p, i) => (
                <span key={p.model} className="data">
                  {i > 0 && (
                    <span className="arc-arrow" aria-hidden="true">
                      →{' '}
                    </span>
                  )}
                  {p.model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PHASEN ═══════════════════════════════════════════════════════════ */}
      {PHASES.map((p) => {
        return (
          <section key={p.num} id={`phase-${p.num}`} className="slab">
            <div className="shell">
              <SectionHead
                label={p.metaLong ?? p.meta}
                end={<span className="unit">{p.title}</span>}
              />

              <div className="g12" style={{ rowGap: 'var(--u6)' }}>
                {/* ── Title + Leitfrage ── */}
                <div className="c7">
                  <h2 className="d2" style={{ marginBottom: 'var(--u4)' }}>
                    {p.title}
                  </h2>

                  <div
                    style={{
                      borderTop: 'var(--rule-red)',
                      paddingTop: 'var(--u3)',
                    }}
                  >
                    <p className="d3">{p.question}</p>
                  </div>
                </div>

                {/* ── Text, what it makes possible, outputs ── */}
                <div className="c5">
                  <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
                    {p.text}
                  </p>

                  <div className="box" style={{ padding: 'var(--u3)' }}>
                    <span
                      className="eyebrow"
                      style={{ marginBottom: 'var(--u2)' }}
                    >
                      Was dadurch möglich wird
                    </span>
                    <p className="body">{p.outcome}</p>
                  </div>

                  <div className="chips" style={{ marginTop: 'var(--u3)' }}>
                    {p.outputs.map((o) => (
                      <span key={o} className="chip">
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <ClosingCta
        eyebrow="Ihr Anlass"
        line1="Welche Strukturfrage"
        line2="steht bei Ihnen an?"
        body={ANSATZ.cta}
        cta="Erstgespräch vereinbaren"
      />
    </main>
  )
}
