/* ═══ DENK LABOR ═══════════════════════════════════════════════════════════ */

export type LaborItem = {
  type: string
  title: string
  author?: string
  guest?: string
  date: string
  duration?: string
  pages?: string
  readTime?: string
  episode?: number
  excerpt: string
  image?: string
  href: string
}

export const FEATURED: LaborItem = {
  type: 'Essay',
  title:
    'Nähe als Organisationsprinzip — warum wir Corporate Therapy auf die Bühne bringen',
  author: 'Huma Nagafi',
  date: 'April 2024',
  readTime: '8 Min',
  excerpt:
    'Eine Reflexion über Distanz, Vertrauen und die Frage, wieso Organisationen den Mut zur Nähe oft erst auf der Bühne finden — und was das für moderne Operating Models bedeutet.',
  image: '/labor/Artikel_Cover_1.jpg',
  href: '#',
}

export const ITEMS: LaborItem[] = [
  {
    type: 'Podcast',
    title: 'Das Internet: Utopie, Infrastruktur, Schlachtfeld',
    guest: 'Marie Kilg',
    date: 'März 2024',
    duration: '47 Min',
    episode: 142,
    excerpt:
      'Wie das Netz unsere Vorstellung von Öffentlichkeit, Macht und Selbstorganisation verändert hat — und welche Strukturen es heute braucht.',
    image: '/labor/Artikel_Cover_2.webp',
    href: '#',
  },
  {
    type: 'Whitepaper',
    title: 'Target Operating Models in regulierten Märkten',
    author: '1789 Research',
    date: 'März 2024',
    pages: '24 Seiten',
    excerpt:
      'Wie Banken, Versicherer und Energieunternehmen Operating Models entwickeln, die Compliance-Anforderungen und Wertschöpfung gleichzeitig tragen.',
    image: '/labor/Artikel_Cover_3.jpg',
    href: '#',
  },
  {
    type: 'Experiment',
    title: 'Mission Boards als Entscheidungsformat',
    author: 'Pilot bei greyt.',
    date: 'Februar 2024',
    excerpt:
      'Ein Format, das wöchentliche Entscheidungsroutinen so verankert, dass Verantwortung sichtbar wird — und Strategie nicht im Statusmeeting verschwindet.',
    href: '#',
  },
  {
    type: 'Debatte',
    title: 'Selbstorganisation ist kein Selbstläufer',
    author: 'Mary Jane Bolton',
    date: 'Februar 2024',
    readTime: '6 Min',
    excerpt:
      'Warum sich Selbstorganisation nicht installieren lässt — und welche Voraussetzungen Führung schaffen muss, damit sie überhaupt tragen kann.',
    href: '#',
  },
  {
    type: 'Prototyp',
    title: 'Verantwortungslandkarte als Onboarding-Tool',
    author: '1789 Research',
    date: 'Januar 2024',
    excerpt:
      'Ein visueller Prototyp, der neue Mitarbeitende durch die ungeschriebenen Entscheidungswege ihrer Organisation führt.',
    href: '#',
  },
  {
    type: 'Theorie',
    title: 'Strukturkopplung in komplexen Organisationen',
    author: 'Patrick Breitenbach',
    date: 'Januar 2024',
    readTime: '12 Min',
    excerpt:
      'Eine Auseinandersetzung mit Luhmanns Begriff der Strukturkopplung und seiner Anwendbarkeit auf moderne Transformationsbegleitung.',
    href: '#',
  },
  {
    type: 'Podcast',
    title: 'Strategie und Struktur — was zuerst?',
    guest: 'Patrick Breitenbach',
    date: 'Januar 2024',
    duration: '52 Min',
    episode: 141,
    excerpt:
      'Eine Debatte über die Henne-Ei-Frage der Organisationsentwicklung — und warum beide Antworten meistens unvollständig sind.',
    href: '#',
  },
  {
    type: 'Essay',
    title: 'Operating Models sind keine Org-Charts',
    author: 'Huma Nagafi',
    date: 'Dezember 2023',
    readTime: '10 Min',
    excerpt:
      'Warum der häufigste Reflex — "wir brauchen eine neue Aufbauorganisation" — meist die falsche Antwort auf das richtige Problem ist.',
    href: '#',
  },
  {
    type: 'Experiment',
    title: 'Entscheidungstagebücher für Führungsteams',
    author: '1789 Research',
    date: 'Dezember 2023',
    excerpt:
      'Wir haben drei Führungsteams 90 Tage lang ein gemeinsames Entscheidungstagebuch führen lassen. Das sind die Befunde.',
    href: '#',
  },
  {
    type: 'Podcast',
    title: 'Social Entrepreneurship ohne Illusionen',
    guest: 'Agnesa Kolica',
    date: 'Dezember 2023',
    duration: '51 Min',
    episode: 140,
    excerpt:
      'Was es wirklich braucht, wenn Wirkung das Geschäftsmodell ist — und wie sich Strukturen anders verhalten müssen.',
    href: '#',
  },
  {
    type: 'Debatte',
    title: 'KI ist kein Add-on zur Organisation',
    author: 'Mary Jane Bolton',
    date: 'November 2023',
    readTime: '7 Min',
    excerpt:
      'Warum die meisten KI-Initiativen scheitern, weil sie als Tool-Einführung behandelt werden — und nicht als organisationaler Eingriff.',
    href: '#',
  },
]

export const TYPES = [
  'Podcast',
  'Essay',
  'Whitepaper',
  'Experiment',
  'Prototyp',
  'Debatte',
  'Theorie',
] as const

export const FORMATS = [
  {
    kind: 'Podcast',
    cadence: 'wöchentlich',
    name: 'Corporate Therapy',
    blurb:
      'Gespräche über das Innere von Organisationen — Strukturen, Routinen, Wachstumsschmerzen.',
    cta: 'Alle Folgen →',
    href: '#',
  },
  {
    kind: 'Whitepaper',
    cadence: 'quartalsweise',
    name: '1789 Research Letter',
    blurb:
      'Tiefere Analysen aus aktuellen Mandaten und unserer Auseinandersetzung mit Organisationstheorie.',
    cta: 'Alle Folgen →',
    href: '#',
  },
  {
    kind: 'Experiment',
    cadence: 'unregelmäßig',
    name: 'Experimente aus dem Feld',
    blurb:
      'Was wir in Piloten ausprobieren, dokumentieren und mit unseren Mandanten weiterentwickeln.',
    cta: 'Alle Folgen →',
    href: '#',
  },
] as const

export const ARCHIVE_NOTE =
  'Über 140 Podcast-Folgen, 30+ Essays und Whitepaper aus zwei Jahrzehnten Auseinandersetzung mit Organisation.'

/** Meta-Zeile einer Karte: "Podcast · #142 · 47 Min · März 2024" */
export function itemMeta(i: LaborItem): string {
  return [
    i.episode ? `#${i.episode}` : null,
    i.duration,
    i.pages,
    i.readTime,
    i.date,
  ]
    .filter(Boolean)
    .join(' · ')
}

export function byline(i: LaborItem): string {
  return i.author ?? (i.guest ? `mit ${i.guest}` : '')
}
