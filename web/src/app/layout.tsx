import type { Metadata } from 'next'
import { Martian_Mono, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

/**
 * MACRO — Martian Mono.
 * Variable wght (100–800) + wdth (75–112.5). The width axis is what makes a
 * monospace usable at display scale: narrowed to 75–87.5 the glyphs fuse into
 * solid architectural blocks instead of sprawling across the measure.
 */
const martian = Martian_Mono({
  variable: '--font-martian',
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
})

/**
 * MICRO — JetBrains Mono. Everything else: body, telemetry, labels, data.
 */
const jet = JetBrains_Mono({
  variable: '--font-jet',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '1789 — STRUCTURE / STRATEGY / GAP',
  description:
    'Structure · Strategy · Gap Consulting. Wir begleiten Organisationen durch Wandel — strukturell, strategisch, wirksam.',

  /**
   * Site-wide noindex.
   *
   * This is an internal dark-horse concept published to a public GitHub Pages
   * URL. It carries named client cases, attributed testimonials and Impressum
   * data that have not been signed off for publication, so it must stay out of
   * search results.
   *
   * NOTE: this reduces discoverability, it is NOT access control — anyone with
   * the URL can still read the site. Remove only when the client has approved
   * the redesign for public release.
   */
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${martian.variable} ${jet.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
