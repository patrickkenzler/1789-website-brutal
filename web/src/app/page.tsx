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

export default function Home() {
  return (
    <main>
      {/* ═══ 00 · HERO ══════════════════════════════════════════════════════
          Vast negative space against one viewport-bleeding numeral. The
          headline carries the only three hazard-red words on the page.    */}
      <section className="slab" style={{ paddingBlock: 'var(--u12) var(--u8)' }}>
        <div className="shell">
          <div
            className="g12"
            style={{ alignItems: 'start', rowGap: 'var(--u6)' }}
          >
            <div className="c9">
              <span
                className="eyebrow eyebrow-br"
                style={{ marginBottom: 'var(--u6)' }}
              >
                Organizational Strategy // Governance Design // Target Operating
                Model
              </span>

              <h1 className="d1">
                Strategie <span className="d-thin d-red">scheitert an</span>{' '}
                Struktur.
                <br />
                Struktur <span className="d-thin d-red">überholt</span> Strategie.
                <br />
                Dazwischen <span className="d-thin d-red">entscheidet</span>{' '}
                Organisation.
              </h1>
            </div>

            {/* ── Telemetry block ── */}
            <div className="c3">
              <div className="box regmark" style={{ padding: 'var(--u3)' }}>
                <dl className="readout">
                  <dt>Unit</dt>
                  <dd>1789 / FFM</dd>
                  <dt>Domain</dt>
                  <dd>Organisation</dd>
                  <dt>Phasen</dt>
                  <dd>05</dd>
                  <dt>Cases</dt>
                  <dd>08</dd>
                  <dt>Status</dt>
                  <dd style={{ color: 'var(--red)' }}>Aktiv</dd>
                </dl>
              </div>
            </div>
          </div>

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

      {/* Letterform run, cut off by both viewport edges. */}
      <div className="bleed" aria-hidden="true">
        <span className="d0">1789—1789—1789—1789</span>
      </div>

      <Tape items={CLIENTS} />

      {/* ═══ 01 · DER 1789-BLICK ════════════════════════════════════════════ */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="01"
            label="Der 1789-Blick"
            end={<span className="unit">03 Säulen</span>}
          />

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
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 'var(--u4)',
                  }}
                >
                  <span className="strip-num">{p.num}</span>
                  <span className="unit">Säule</span>
                </div>

                <h3 className="d3" style={{ marginBottom: 'var(--u3)' }}>
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
            num="02"
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
            {featuredCases.map((c, i) => (
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
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--u3)',
                    }}
                  >
                    <span className="strip-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="unit">{c.tags[0]}</span>
                  </div>
                  <h3 className="d4" style={{ marginBottom: 'var(--u3)' }}>
                    {c.teaser ?? c.title}
                  </h3>
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
          <SectionHead
            num="03"
            label="Stimmen"
            end={<span className="unit">{TESTIMONIALS.length} Einträge</span>}
          />

          <div className="hairgrid hairgrid-2">
            {TESTIMONIALS.map((t, i) => (
              <figure key={t.name} className="pad">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 'var(--u3)',
                  }}
                >
                  <span className="strip-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="unit">{t.company}</span>
                </div>

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
          </div>
        </div>
      </section>

      {/* ═══ 04 · UNSER ANSATZ ══════════════════════════════════════════════
          Five phases as a numbered index — the process is a table, not a
          carousel.                                                        */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="04"
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
                <span className="row-num">{p.num}</span>
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
          <SectionHead num="05" label="AI und Organisation" />

          <h2 className="d2" style={{ marginBottom: 'var(--u8)', maxWidth: '22ch' }}>
            Vier Dimensionen, in denen{' '}
            <span className="d-thin d-red">KI Organisation neu denkt.</span>
          </h2>

          <div className="hairgrid hairgrid-4">
            {AI_DIMENSIONS.map((d) => (
              <article key={d.num} className="pad">
                <span
                  className="d0"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                    color: '#2A2825',
                    display: 'block',
                    marginBottom: 'var(--u3)',
                  }}
                >
                  {d.num}
                </span>
                <h3 className="d4" style={{ marginBottom: 'var(--u2)' }}>
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
            num="06"
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
                {ITEMS.slice(0, 5).map((it, i) => (
                  <Link key={it.title} href="/labor" className="row">
                    <span className="row-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
