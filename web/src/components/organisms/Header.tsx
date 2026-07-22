'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Wordmark } from '@/components/Wordmark'
import { NAV } from '@/data/site'

/**
 * HEADER
 *
 * A fixed instrument strip, not a floating navbar. Opaque paper, hard 2px
 * bottom rule, no blur, no shadow, no transparency. Nav items are indexed
 * telemetry — the active route is marked with a hazard-red underscore.
 */
export function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const isActive = (href: string) =>
    href === '/' ? path === '/' : path.startsWith(href)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 'var(--nav-h)',
          background: 'var(--paper)',
          borderBottom: 'var(--rule-bar)',
        }}
      >
        <div
          className="shell"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--u3)',
          }}
        >
          <Link href="/" aria-label="1789 — zur Startseite">
            <Wordmark size={20} />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="nav-desk" aria-label="Hauptnavigation">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href) || undefined}
              >
                <span className="unit nav-idx">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ── Mobile toggle ── */}
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? '[ X ]' : '[ ≡ ]'}
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          className="nav-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <nav
            className="shell"
            style={{ paddingTop: 'calc(var(--nav-h) + var(--u6))' }}
          >
            {NAV.map((item, i) => (
              <Link key={item.href} href={item.href} className="nav-overlay-link">
                <span className="strip-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="d3">{item.label}</span>
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="btn btn-red btn-block"
              style={{ marginTop: 'var(--u6)' }}
            >
              Erstgespräch vereinbaren <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Spacer so page content clears the fixed strip. */}
      <div style={{ height: 'var(--nav-h)' }} aria-hidden="true" />

      <style>{`
        .nav-desk { display: flex; align-items: center; gap: var(--u3); }
        .nav-link {
          display: inline-flex; align-items: baseline; gap: 6px;
          font-family: var(--font-micro); font-size: var(--t-11);
          font-weight: 500; letter-spacing: var(--track-micro);
          text-transform: uppercase; color: var(--ink);
          padding-bottom: 3px; border-bottom: var(--bar) solid transparent;
          transition: border-color var(--snap), color var(--snap);
        }
        .nav-link:hover { border-bottom-color: var(--ink); }
        .nav-link[data-active] { border-bottom-color: var(--red); }
        .nav-link[data-active] .nav-idx { color: var(--red); }
        .nav-idx { font-size: var(--t-10); }

        .nav-toggle {
          display: none;
          font-family: var(--font-micro); font-size: var(--t-12);
          letter-spacing: var(--track-micro); color: var(--ink);
        }

        .nav-overlay {
          position: fixed; inset: 0; z-index: 99;
          background: var(--paper);
          overflow-y: auto;
        }
        .nav-overlay-link {
          display: flex; align-items: baseline; gap: var(--u2);
          padding-block: var(--u3);
          border-bottom: var(--rule);
        }
        .nav-overlay-link:hover .d3 { color: var(--red); }

        @media (max-width: 860px) {
          .nav-desk { display: none; }
          .nav-toggle { display: block; }
        }
      `}</style>
    </>
  )
}
