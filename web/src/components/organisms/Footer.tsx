import Link from 'next/link'
import { Wordmark } from '@/components/Wordmark'
import { Hazard } from '@/components/ui'
import { CONTACT, FOOTER_CLAIM, FOOTER_PAGES, LEGAL } from '@/data/site'

/**
 * FOOTER
 *
 * The colophon of the document. Inverted stock, hairline-gridded columns,
 * a hazard strip at the top edge, and a bottom bar carrying the revision
 * and build markers.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="slab-invert">
      <Hazard red />

      <div className="shell" style={{ paddingBlock: 'var(--u8)' }}>
        {/* ── Wordmark ── */}
        <div style={{ marginBottom: 'var(--u8)' }}>
          <Wordmark size={64} sub />
        </div>

        <div className="g12" style={{ rowGap: 'var(--u8)' }}>
          {/* ── Claim + CTA ── */}
          <div className="c6">
            <span className="eyebrow" style={{ marginBottom: 'var(--u2)' }}>
              Claim
            </span>
            <p className="d3" style={{ maxWidth: '20ch', marginBottom: 'var(--u4)' }}>
              {FOOTER_CLAIM}
            </p>
            <Link href="/kontakt" className="link">
              Erstgespräch vereinbaren <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* ── Seiten ── */}
          <nav className="c3" aria-label="Fußzeilen-Navigation">
            <span className="eyebrow" style={{ marginBottom: 'var(--u3)' }}>
              Seiten
            </span>
            <ul>
              {FOOTER_PAGES.map((p, i) => (
                <li key={p.href} style={{ borderTop: '1px solid #33312E' }}>
                  <Link href={p.href} className="foot-link">
                    <span className="unit">{String(i + 1).padStart(2, '0')}</span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Kontakt ── */}
          <div className="c3">
            <span className="eyebrow" style={{ marginBottom: 'var(--u3)' }}>
              Kontakt
            </span>
            <ul>
              <li style={{ borderTop: '1px solid #33312E' }}>
                <a href={`mailto:${CONTACT.mailFooter}`} className="foot-link">
                  <span className="unit">@</span>
                  {CONTACT.mailFooter}
                </a>
              </li>
              <li style={{ borderTop: '1px solid #33312E' }}>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="foot-link"
                >
                  <span className="unit">↗</span>
                  Instagram
                </a>
              </li>
              <li style={{ borderTop: '1px solid #33312E' }}>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="foot-link"
                >
                  <span className="unit">↗</span>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid #33312E' }}>
        <div
          className="shell"
          style={{
            paddingBlock: 'var(--u2)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--u3)',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span className="unit">
            © {year} 1789 Consulting GmbH — Alle Rechte vorbehalten.
          </span>
          <span style={{ display: 'flex', gap: 'var(--u3)' }}>
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="unit foot-legal">
                {l.label}
              </Link>
            ))}
            <span className="unit" style={{ color: 'var(--red)' }}>
              REV 001 / FFM
            </span>
          </span>
        </div>
      </div>

      <style>{`
        .foot-link {
          display: flex; align-items: baseline; gap: var(--u2);
          padding-block: 10px;
          font-family: var(--font-micro); font-size: var(--t-12);
          letter-spacing: var(--track-data); color: #D8D5CF;
          transition: color var(--snap), padding-left var(--snap);
        }
        .foot-link:hover { color: var(--red); padding-left: 6px; }
        .foot-legal:hover { color: var(--red); }
      `}</style>
    </footer>
  )
}
