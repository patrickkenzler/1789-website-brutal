import { SectionHead, Hazard, Barcode, Plate, Tape } from '@/components/ui'
import { CLIENTS } from '@/data/site'

/**
 * STYLEGUIDE — the design system, specified as a document.
 * Not linked from the navigation; it exists so the system can be audited.
 */

const SWATCHES = [
  { name: 'paper',  hex: '#F4F4F0', note: 'Substrat — einzige Seitenfarbe' },
  { name: 'sunk',   hex: '#EAE8E3', note: 'Vertiefte Felder, Inputs' },
  { name: 'stock',  hex: '#0A0A0A', note: 'Invertierte Einheit' },
  { name: 'ink-70', hex: '#55534E', note: 'Fließtext' },
  { name: 'ink-45', hex: '#8C8880', note: 'Marker, Koordinaten' },
  { name: 'ink-20', hex: '#C9C5BD', note: 'Rasterlinien, Punktfelder' },
  { name: 'red',    hex: '#E61919', note: 'Einziger Akzent' },
]

const TYPE = [
  { cls: 'd1', role: 'Seiten-H1',    sample: 'Struktur' },
  { cls: 'd2', role: 'Sektion-H2',   sample: 'Struktur' },
  { cls: 'd3', role: 'Block-H3',     sample: 'Struktur' },
  { cls: 'd4', role: 'Karten-H4',    sample: 'Struktur' },
]

export default function Styleguide() {
  return (
    <main>
      <Hazard red />

      <header className="slab slab-dense" style={{ paddingTop: 'var(--u8)' }}>
        <div className="shell">
          <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u3)' }}>
            Spezifikation
          </span>
          <h1 className="d1">
            Design<span className="d-thin d-red">system</span>
          </h1>
          <p className="body-lg" style={{ marginTop: 'var(--u4)' }}>
            REV 001 — Swiss Industrial Print. Ein Substrat, ein Akzent, zwei
            Monospace-Schnitte. Keine Radien, keine Schatten, keine Verläufe.
          </p>
        </div>
      </header>

      {/* ── Farbe ── */}
      <section className="slab">
        <div className="shell">
          <SectionHead num="01" label="Substrat & Akzent" />
          <div className="hairgrid hairgrid-4">
            {SWATCHES.map((s) => (
              <div key={s.name} className="pad-sm">
                <div
                  style={{
                    height: 88,
                    background: s.hex,
                    border: 'var(--rule)',
                    marginBottom: 'var(--u2)',
                  }}
                  aria-hidden="true"
                />
                <span className="data" style={{ color: 'var(--ink)', display: 'block' }}>
                  {s.name}
                </span>
                <span className="unit" style={{ display: 'block' }}>{s.hex}</span>
                <p className="body-sm" style={{ marginTop: 6 }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typografie ── */}
      <section className="slab">
        <div className="shell">
          <SectionHead
            num="02"
            label="Typografie"
            end={<span className="unit">Martian Mono / JetBrains Mono</span>}
          />
          {TYPE.map((t) => (
            <div
              key={t.cls}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--u4)',
                paddingBlock: 'var(--u3)',
                borderBottom: 'var(--rule)',
              }}
            >
              <span className="unit" style={{ minWidth: 96 }}>
                .{t.cls} — {t.role}
              </span>
              <span className={t.cls}>{t.sample}</span>
            </div>
          ))}

          <div style={{ marginTop: 'var(--u6)' }} className="g2">
            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                Modifikatoren
              </span>
              <p className="d3">
                <span className="d-thin">.d-thin</span> ·{' '}
                <span className="d-red">.d-red</span> ·{' '}
                <span className="d-strike">.d-strike</span>
              </p>
            </div>
            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                Fließtext
              </span>
              <p className="body">
                Monospace bleibt bei 13px mit offenem Zeilenabstand und
                begrenztem Satzspiegel lesbar. <strong>Hervorhebungen</strong>{' '}
                tragen eine rote Unterlegung statt einer zweiten Farbe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Struktur ── */}
      <section className="slab">
        <div className="shell">
          <SectionHead num="03" label="Struktur & Symbolik" />

          <div className="g2" style={{ rowGap: 'var(--u6)' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                .hairgrid — 1px-Raster
              </span>
              <div className="hairgrid hairgrid-3">
                <div className="pad-sm"><span className="unit">A</span></div>
                <div className="pad-sm"><span className="unit">B</span></div>
                <div className="pad-sm"><span className="unit">C</span></div>
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                .readout — technische Anzeige
              </span>
              <div className="box regmark" style={{ padding: 'var(--u3)' }}>
                <dl className="readout">
                  <dt>Unit</dt><dd>1789 / FFM</dd>
                  <dt>Rev</dt><dd>001</dd>
                  <dt>Status</dt><dd style={{ color: 'var(--red)' }}>Aktiv</dd>
                </dl>
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                .plate — Halbton-Raster
              </span>
              <Plate label="NO SIGNAL" ratio="16 / 9" />
            </div>

            <div>
              <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
                Texturen
              </span>
              <Barcode />
              <div style={{ height: 'var(--u2)' }} />
              <Hazard />
              <div style={{ height: 'var(--u2)' }} />
              <div className="graticule" style={{ height: 64, border: 'var(--rule)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Bedienelemente ── */}
      <section className="slab">
        <div className="shell">
          <SectionHead num="04" label="Bedienelemente" />
          <div style={{ display: 'flex', gap: 'var(--u2)', flexWrap: 'wrap', marginBottom: 'var(--u6)' }}>
            <span className="btn">.btn</span>
            <span className="btn btn-red">.btn-red</span>
            <span className="btn btn-lg">.btn-lg</span>
            <span className="link">.link →</span>
          </div>
          <div className="chips">
            <span className="chip">.chip</span>
            <span className="chip chip-red">.chip-red</span>
            <span className="chip chip-fill">.chip-fill</span>
          </div>
        </div>
      </section>

      <Tape items={CLIENTS} />

      <section className="slab slab-invert" style={{ borderBottom: 0 }}>
        <div className="shell">
          <SectionHead num="05" label="Invertierte Einheit" />
          <h2 className="d2" style={{ maxWidth: '20ch' }}>
            Dieselben Regeln, <span className="d-thin d-red">umgekehrtes Substrat.</span>
          </h2>
          <p className="body" style={{ marginTop: 'var(--u4)' }}>
            <code>.slab-invert</code> kehrt Vorder- und Hintergrund um, ohne ein
            zweites Theme einzuführen. Alle Komponenten passen sich automatisch an.
          </p>
        </div>
      </section>
    </main>
  )
}
