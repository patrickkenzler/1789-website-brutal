'use client'

/* Internes Werkzeug, von keiner Seite verlinkt. Lag bis 26.11.2026 unter
   /labor/svg-morph und stand damit zwischen den redaktionellen Beiträgen;
   auf Marys Hinweis nach /intern geholt. Noch auf Alt-Tokens (terra/sage)
   und Klassennamen, die es im System nicht gibt — die Umstellung steht aus. */

import dynamic from 'next/dynamic'

const SvgMorphTool = dynamic(() => import('./SvgMorphTool'), { ssr: false })

export default function SvgMorphPage() {
  return (
    <main className="pt-32 pb-24" style={{ minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p
            className="font-mono uppercase"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: 'var(--color-terra)', marginBottom: '0.75rem' }}
          >
            Intern / SVG Morph
          </p>
          <h1
            className="font-display font-light"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--color-ink)' }}
          >
            Path Animation Tool
          </h1>
        </div>
        <SvgMorphTool />
      </div>
    </main>
  )
}
