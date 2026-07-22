import Link from 'next/link'
import type { LegalSection } from '@/data/legal'

/**
 * LEGAL PAGE
 *
 * Statutory text set as what it actually is: a numbered, ruled document.
 * Each clause is a compartment with an index; the body keeps its original
 * line breaks via pre-line.
 */
export function LegalPage({
  title,
  sections,
}: {
  title: string
  sections: LegalSection[]
}) {
  return (
    <main>
      <header className="slab slab-dense" style={{ paddingTop: 'var(--u8)' }}>
        <div className="shell">
          <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u3)' }}>
            Legal
          </span>
          <h1 className="d1">{title}</h1>
          <p className="unit" style={{ marginTop: 'var(--u3)' }}>
            {sections.length} Abschnitte · REV 001 · 1789 Innovations GmbH
          </p>
        </div>
      </header>

      <section className="slab">
        <div className="shell">
          {sections.map((s, i) => (
            <article
              key={s.heading}
              className="g12"
              style={{
                paddingBlock: 'var(--u6)',
                borderBottom: 'var(--rule)',
                rowGap: 'var(--u3)',
              }}
            >
              <div className="c3">
                <span className="strip-num">{String(i + 1).padStart(2, '0')}</span>
                <h2
                  className="eyebrow"
                  style={{ marginTop: 'var(--u2)', color: 'var(--ink)' }}
                >
                  {s.heading}
                </h2>
              </div>
              <div className="c9">
                <p className="body" style={{ whiteSpace: 'pre-line' }}>
                  {s.body}
                </p>
              </div>
            </article>
          ))}

          <div style={{ marginTop: 'var(--u8)' }}>
            <Link href="/" className="link">
              <span aria-hidden="true">←</span> Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
