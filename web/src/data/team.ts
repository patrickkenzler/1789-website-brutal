/* ═══ TEAM ══════════════════════════════════════════════════════════════ */

export type Person = {
  name: string
  initials: string
  photo: string | null
  /** Ausschnitt im Kartenformat 4:5 — die Aufnahmen sind 9:16.
   *  Die Werte sind gerechnet, nicht nach Augenmaß gesetzt. Gemessen wurden
   *  je Datei die Kopfoberkante und die Tischkante; daraus die Spanne Kopf →
   *  Tisch: 662 / 643 / 640 / 858 px. Serap sitzt am nächsten an der Kamera,
   *  also gibt ihre Spanne den Maßstab vor — ein Bild lässt sich hineinzoomen,
   *  aber nicht heraus, ohne dass unter der Deckung Lücken entstehen. Die drei
   *  anderen zoomen auf ihren Maßstab, jeweils um die Tischkante herum
   *  (origin 89 %), damit beide Linien stehen: Tischkante auf 89 %,
   *  Kopfoberkante auf 20,4 % der Platte. */
  frame?: { position?: string; zoom?: number; origin?: string }
  bio: string
}

export const TEAM: Person[] = [
  {
    name: 'Human Nagafi',
    initials: 'HN',
    photo: '/team/human-nagafi.jpg',
    frame: { position: '50% 36%', zoom: 1.296, origin: '50% 89%' },
    bio: 'Human schaut genau hin: Er prüft und entwickelt Operating Models, die im Alltag tragen, und wendet Theorie so an, dass sie erlebbar wird. Schwerpunkte: Konzerne und öffentliche Verwaltung. Co-Host von Corporate Therapy.',
  },
  {
    name: 'Mary-Jane Bolten',
    initials: 'MB',
    photo: '/team/mary-jane-bolten.jpg',
    frame: { position: '50% 0%', zoom: 1.334, origin: '50% 89%' },
    bio: 'Mary-Jane gestaltet Governance und Zielbilder, die Orientierung geben, und entwirft die Formate, mit denen die Organisation selbst daran mitarbeitet. Schwerpunkte: großer Mittelstand und Konzerne. Co-Host von Corporate Therapy.',
  },
  {
    name: 'Patrick Breitenbach',
    initials: 'PB',
    photo: '/team/patrick-breitenbach.jpg',
    frame: { position: '50% 44%', zoom: 1.341, origin: '50% 89%' },
    bio: 'Patrick denkt Organisationen von ihren Kopplungen her: wie Rollen, Tools und Entscheidungen ineinandergreifen. Seine Erfahrung aus verschiedenen Medienunternehmen nutzt er, um Veränderung so zu gestalten, dass sie bei ihren Zielgruppen ankommt. Schwerpunkt: öffentliche Verwaltung. Co-Host von Corporate Therapy.',
  },
  {
    /* Name und Schreibweise aus der WD-40-Lesefassung („Serap Yılmaz-Dreger,
       Mary-Jane Bolten" als Lead). */
    name: 'Serap Yılmaz-Dreger',
    initials: 'SY',
    photo: '/team/serap-yilmaz-dreger.jpg',
    frame: { position: '50% 32%' },
    bio: 'Serap begleitet Organisationen von der Diagnose bis in die Erprobung und hat einen scharfen Blick für Nuancen. Schwerpunkte: öffentliche Verwaltung und Mittelstand.',
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
  /** Crop override for the landscape band on the card: CSS object-position,
   *  and an optional zoom about `origin` to push lettering in the source out
   *  of the frame. Unset: centred, anchored high (where the faces are). */
  frame?: { position?: string; zoom?: number; origin?: string }
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
      'Es war sehr beeindruckend, **wie schnell uns 1789 bereits nach dem ersten Kennenlernen vollends durchdrungen hat**. 1789 hat uns **gechallenged** – immer anpackend, partnerschaftlich und stets **mit Blick auf klare Resultate und Actions**.',
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
      'Gemeinsam mit 1789 haben wir ein **Operating Model geschaffen**, angepasst an unsere junge Kultur und Leistungsorientiertheit – unbeeinflusst von leistungsbeschneidenden Strukturen anderer Unternehmen. Zentral war für uns, **die Verantwortungsfähigkeit der Mitarbeiter zu erhöhen**, um ihre Schaffenskräfte zu fördern, was 1789 in der **„Selbstorganisierenden Organisation"** realisieren konnte.',
    name: 'Henrik Ekstrand',
    title: 'Founder',
    company: 'greyt.',
    photo: '/testimonials/henrik-ekstrand.jpeg',
    linkedin: 'https://www.linkedin.com/in/henrikekstrand/',
    caseHref: '/projekte/skalierung-und-qualitaet',
    caseLabel: 'Skalierung und Qualität durch Struktur',
  },
]
