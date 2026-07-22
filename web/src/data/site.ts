/* ═══ SITE-KONSTANTEN ══════════════════════════════════════════════════════
   Navigation, Kontakt, Kunden. Alle Texte verbatim aus dem Bestand.        */

export const NAV = [
  { label: 'Ansatz',     href: '/ansatz'     },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Cases',      href: '/projekte'   },
  { label: 'Labor',      href: '/labor'      },
  { label: 'Wir',        href: '/wir'        },
  { label: 'Kontakt',    href: '/kontakt'    },
] as const

export const CONTACT = {
  /** Kontaktseite */
  mail:       'hello@1789.consulting',
  /** Footer — historisch abweichend, bewusst beibehalten */
  mailFooter: 'hello@1789consulting.de',
  city:       'Frankfurt am Main',
  country:    'Deutschland',
  instagram:  'https://instagram.com',
  linkedin:   'https://de.linkedin.com/company/1789-consulting',
} as const

export const FOOTER_CLAIM =
  'Zwischen Strategie und Wirklichkeit liegt eine Lücke. Wir arbeiten in ihr.'

export const FOOTER_PAGES = [
  { label: 'Ansatz',     href: '/ansatz'     },
  { label: 'Cases',      href: '/projekte'   },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Labor',      href: '/labor'      },
  { label: 'Wir',        href: '/wir'        },
] as const

export const LEGAL = [
  { label: 'Impressum',  href: '/impressum'  },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const

/** Kunden & Partner — Wortmarken, im Tape als reine Typo gesetzt. */
export const CLIENTS = [
  'Procter & Gamble',
  'Schwäbisch Hall',
  'Deutsche Bank',
  'Commerzbank',
  'Stadt Freiburg',
  'WTS',
  'Metro Digital',
  'Gelsenwasser',
  'PwC',
  'Mercedes-Benz Group',
  'WD-40',
  'greyt',
  'teccle group',
] as const

/** Fragen, die Kunden stellen — Lauftext im Ticker. */
export const QUESTIONS = [
  'Warum greifen unsere Strategien nicht mehr?',
  'Wie bauen wir Eigenverantwortung wirklich in die Struktur ein?',
  'Was hält uns davon ab, das zu sein, was wir wollen?',
  'Wie schaffen wir Transformation ohne die Organisation zu lähmen?',
  'Weshalb entscheiden wir noch wie vor 10 Jahren?',
  'Wo beginnt eigentlich unsere Veränderung?',
  'Was ist unser tatsächliches Operating Model?',
  'Wie machen wir den Gap endlich besprechbar?',
] as const

export const NEWSLETTER_ACTION =
  'https://1789.us-east-1.list-manage.com/subscribe/post'

/** Bildpfad-Präfix für statischen Export (GitHub Pages / Unterverzeichnis). */
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${p}`
