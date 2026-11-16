/* ═══ LEISTUNGEN ═══════════════════════════════════════════════════════════
   Verbatim aus dem Dokument „Website: Leistungen" (Draft, 09.11.2026).
   Die drei Leistungen tragen dieselben Namen wie die Kapitel der
   Case-Lesefassungen — Strukturdiagnose, Strukturentscheidung,
   Strukturtransformation.                                                 */

export const SERVICES_INTRO = {
  line1: 'Was nicht funktioniert, sieht jeder.',
  line2: 'Nachhaltig ändern lässt es sich nur über die Struktur.',
  lead: 'Entscheidungen bleiben liegen, und eine beschlossene Strategie kommt in der Arbeit nicht an. Dahinter steckt fast immer eine Ordnung, die einmal ein Problem gelöst hat und heute ein neues erzeugt. 1789 geht diese Ordnung in drei Leistungen an, die sich einzeln beauftragen lassen: Die Strukturdiagnose findet heraus, wo genau es hakt, die Strukturentscheidung führt zu einer verbindlichen Richtung, und die Transformation setzt diese Richtung um, bis die Organisation ohne Beratung weiterkommt.',
  mandate:
    'Beauftragt wird 1789 von Geschäftsführungen und Bereichsleitungen in Unternehmen und öffentlicher Verwaltung, in Organisationen von wenigen Dutzend bis zu mehreren tausend Mitarbeitenden. Typische Anlässe sind eine Neuordnung, die Integration zugekaufter Unternehmen, strategische Neuausrichtung oder AI, die die Arbeitsteilung verschiebt. Je nach Anlass führt eine von drei Perspektiven: Organizational Strategy, Governance Design oder Target Operating Model.',
} as const

export type Service = {
  /** Sprungmarke und React-Key */
  id: string
  /** Der Name steht im Dokument zweigeteilt: erste Hälfte dünn, zweite voll. */
  titleThin: string
  titleBold: string
  subtitle: string
  body: string
  /** Zeile „Ergebnis", am Mittelpunkt aufgetrennt */
  results: string[]
  endpoint: string
  fit: string
  frame: string
  /** Zeile „Aus der Praxis" — Label verbatim, Slug für den Verweis */
  cases: { slug: string; label: string }[]
}

export const SERVICES: readonly Service[] = [
  {
    id: 'strukturdiagnose',
    titleThin: 'Struktur',
    titleBold: 'diagnose',
    subtitle: 'Aus Symptomen werden Strukturfragen.',
    body: 'Projekte beginnen meist mit einer Problembeschreibung, die sich im Lauf der Arbeit jedoch noch verschieben kann. Die Strukturdiagnose untersucht, woher der Veränderungsdruck wirklich kommt und wie Entscheidungen und Verantwortung tatsächlich verteilt sind, im Organigramm und in der täglichen Praxis. Dabei zeigt sich auch, wer die heutige Struktur verteidigt und aus welchen Gründen. Mit der Führung werden die Kriterien festgelegt, an denen sich jeder spätere Vorschlag messen lassen muss.',
    results: [
      'Ist-Modell',
      'Strukturhypothesen',
      'Bewertungskriterien',
      'Gestaltungsfelder',
    ],
    endpoint: 'Entscheidung, ob und wo umgebaut wird.',
    fit: 'ein Anlass drängt und die Strukturfrage dahinter noch nicht benannt ist.',
    frame:
      '6 bis 10 Wochen · Führung und ausgewählte Schlüsselpersonen, punktuelle Beteiligung in der Organisation',
    cases: [{ slug: 'innovationskraft-durch-zusammenarbeit', label: 'WD-40' }],
  },
  {
    id: 'strukturentscheidung',
    titleThin: 'Struktur',
    titleBold: 'entscheidung',
    subtitle: 'Aus Optionen wird Klarheit.',
    body: '1789 legt früh einen begründeten Entwurf der künftigen Organisation vor, mit konkreten Rollen und Entscheidungsrechten. Der Entwurf ist zum Widersprechen gebaut. Die Organisation prüft ihn, und aus ihrer Kritik entstehen Gegenentwürfe, bis die Alternativen und ihre Folgen so konkret sind, dass verbindlich entschieden werden kann.',
    results: [
      'Strategische Designprinzipien',
      'Zielmodell',
      'Priorisierung',
      'Roadmap',
    ],
    endpoint:
      'Entscheidung der Führung über die Richtung, mit offengelegten Annahmen und Prioritäten.',
    fit: 'die Ausgangslage geklärt ist und die Führung zwischen strukturellen Alternativen wählen muss.',
    frame:
      '2 bis 7 Monate · Führungskreis und ausgewählte Schlüsselpersonen, punktuelle Beteiligung in der Organisation',
    cases: [
      { slug: 'integration', label: 'teccle group' },
      { slug: 'kohaerente-vision', label: 'METRO.digital' },
      {
        slug: 'entscheidungen-mit-strategischem-ausmass',
        label: 'Procter & Gamble, Stabsstelle der Geschäftsführung',
      },
    ],
  },
  {
    id: 'strukturtransformation',
    titleThin: 'Struktur',
    titleBold: 'transformation',
    subtitle: 'Aus Orientierung wird der gemeinsame Weg.',
    body: 'Die gewählte Richtung bekommt Gestalt. Rollen und Prozesse werden mit den Menschen ausgearbeitet, die sie später verantworten, und in Simulationen durchgespielt, in denen alle ihre künftige Rolle schon einnehmen. Danach gehen ausgewählte Teile mit dem Mandat der Führung in den echten Betrieb. Was sich bewährt, wird ausgeweitet. Was nicht trägt, wird angepasst oder verworfen. Verantwortung und Fähigkeiten wandern dabei von Anfang an in die Organisation.',
    results: [
      'Detailkonzeption',
      'Simulationserkenntnisse',
      'Pilotdesign',
      'Revidiertes Modell',
      'Interne Verantwortliche für die Weiterentwicklung',
    ],
    endpoint:
      'Die Organisation macht neue Spannungen selbst sichtbar und entscheidbar. 1789 zieht sich in eine begleitende Rolle zurück.',
    fit: 'die Richtung entschieden ist und in die reale Arbeit kommen soll.',
    frame:
      '6 bis 18 Monate · künftige Verantwortliche und breite Beteiligung der Organisation',
    cases: [
      {
        slug: 'effektivitaet-und-kundennaehe',
        label: 'Procter & Gamble, Customer Service Organization',
      },
      { slug: 'integration', label: 'teccle group' },
    ],
  },
]
