/* ═══ TEAM ═════════════════════════════════════════════════════════════════
   Alle Portraits fehlen noch (photo: null) → Initialen-Plate.              */

export type Person = {
  name: string
  role: string
  initials: string
  photo: string | null
  bio: string
}

export const TEAM: Person[] = [
  {
    name: 'Huma Nagafi',
    role: 'Founder & Partner',
    initials: 'HN',
    photo: null,
    bio: 'Gründerin von 1789. Begleitet Organisationen seit über zwei Jahrzehnten durch strukturelle Transformation — vom Mittelstand bis zum Konzern.',
  },
  {
    name: 'Mary Jane Bolton',
    role: 'Partner',
    initials: 'MB',
    photo: null,
    bio: 'Verantwortet Governance-Design und Target-Operating-Modelle. Übersetzt Komplexität in tragfähige Strukturen, die im Alltag halten.',
  },
  {
    name: 'Patrick Breitenbach',
    role: 'Partner',
    initials: 'PB',
    photo: null,
    bio: '[Kurzprofil folgt — Rollenbeschreibung wird ergänzt.]',
  },
  {
    name: '[Platzhalter]',
    role: 'Partner',
    initials: '??',
    photo: null,
    bio: '[Person und Kurzprofil folgen.]',
  },
]

/* ═══ STIMMEN ══════════════════════════════════════════════════════════════
   `quote` ist Markdown-frei; **…** markiert die Hervorhebungen des Originals
   und wird beim Rendern zu <strong> aufgelöst.                             */

export type Testimonial = {
  quote: string
  name: string
  title: string
  company: string
  photo: string
  linkedin: string
  caseHref: string | null
  caseLabel: string | null
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '1789 führt uns bei der Gestaltung eines **Target-Operating-Models**, das den Anforderungen unseres schnelllebigen, dynamischen Marktes gerecht wird. 1789 geht weit über die traditionelle Beratung hinaus: Es handelt sich um einen **gemeinsamen Entwicklungsprozess auf Augenhöhe** – sie sind **Innovatoren mit herausragender Expertise**.',
    name: 'Sven Kalisch',
    title: 'CEO',
    company: 'teccle group',
    photo: '/testimonials/sven-kalisch.jpeg',
    linkedin: 'https://www.linkedin.com/in/sven-kalisch-b4113610b/',
    caseHref: '/projekte/integration',
    caseLabel: 'Integration: 15 Firmen, eine Organisation',
  },
  {
    quote:
      'Es war sehr beeindruckend, **wie schnell uns 1789 bereits nach dem ersten Kennenlernen vollends durchdrungen hat**. 1789 hat uns **gechallenged** — immer anpackend, partnerschaftlich und stets **mit Blick auf klare Resultate und Actions**.',
    name: 'Daniel Kalisch',
    title: 'General Manager D.A.CH.',
    company: 'WD-40 Company',
    photo: '/testimonials/daniel-kalisch.jpeg',
    linkedin: 'https://www.linkedin.com/in/daniel-kalisch-3b21a651',
    caseHref: '/projekte/innovationskraft-durch-zusammenarbeit',
    caseLabel: 'Innovationskraft durch Zusammenarbeit',
  },
  {
    quote:
      'Mit einem **tiefen Verständnis für die Herausforderungen eines Konzerns** und für die Notwendigkeit, sich an neue Gegebenheiten anzupassen, wurde 1789 ausgewählt, um von **strategischer Planung über Konzeption bis hin zur Implementierung** als Partner zu fungieren.',
    name: 'Timo Salzsieder',
    title: 'Chief Information Officer',
    company: 'Müller Holding GmbH & Co. KG',
    photo: '/testimonials/timo-salzsieder.jpeg',
    linkedin: 'https://www.linkedin.com/in/timo-salzsieder-88993514',
    caseHref: null,
    caseLabel: null,
  },
  {
    quote:
      'Besonders wertvoll war für uns die Unterstützung seitens 1789 beim **Workshopdesign und der Moderation großer Gruppen**, einerseits im Managementteam aber auch mit ausgewählten Mitarbeitenden. So ist es uns gelungen, **unterschiedliche Zielgruppen aktiv in den Prozess einzubinden**. Außerdem war die Zusammenarbeit geprägt von **großem Vertrauen** und hat zu jedem Zeitpunkt Spaß gemacht.',
    name: 'Viola Krauss',
    title: 'Chief People and Culture Officer',
    company: 'WTS Deutschland',
    photo: '/testimonials/viola-krauss.jpg',
    linkedin: 'https://www.linkedin.com/in/viola-krauss-3a09254b',
    caseHref: '/projekte/motivieren-und-entwickeln',
    caseLabel: 'Motivieren und Entwickeln',
  },
  {
    quote:
      'Gemeinsam mit 1789 haben wir ein **Operating Model geschaffen**, angepasst an unsere junge Kultur und Leistungsorientiertheit — unbeeinflusst von leistungsbeschneidenden Strukturen anderer Unternehmen. Zentral war für uns, **die Verantwortungsfähigkeit der Mitarbeiter zu erhöhen**, um ihre Schaffenskräfte zu fördern, was 1789 in der **„Selbstorganisierenden Organisation"** realisieren konnte.',
    name: 'Henrik Ekstrand',
    title: 'Founder',
    company: 'greyt.',
    photo: '/testimonials/henrik-ekstrand.jpeg',
    linkedin: 'https://www.linkedin.com/in/henrikekstrand/',
    caseHref: '/projekte/skalierung-und-qualitaet',
    caseLabel: 'Skalierung und Qualität durch Struktur',
  },
]
