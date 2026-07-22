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
