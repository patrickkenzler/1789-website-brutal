import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { DATENSCHUTZ } from '@/data/legal'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — 1789',
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return <LegalPage title="Datenschutz­erklärung" sections={DATENSCHUTZ} />
}
