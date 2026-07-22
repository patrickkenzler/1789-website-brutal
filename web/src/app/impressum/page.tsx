import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import { IMPRESSUM } from '@/data/legal'

export const metadata: Metadata = {
  title: 'Impressum — 1789',
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return <LegalPage title="Impressum" sections={IMPRESSUM} />
}
