/* ═══ ANSATZ — 5 PHASEN ════════════════════════════════════════════════════
   Quelle: /ansatz + AnsatzSection. Texte verbatim.                         */

export type Phase = {
  num: string
  meta: string
  title: string
  question: string
  /** Kurzfassung für die Homepage-Sektion */
  tagline: string
  text: string
  doing: string[]
  outputs: string[]
  outcome: string
}

export const PHASES: Phase[] = [
  {
    num: '01',
    meta: 'Diagnose',
    title: 'Sichtbar machen',
    question: 'Was blockiert uns wirklich?',
    tagline: 'Reale Entscheidungen, Routinen und Reibungen sichtbar machen.',
    text: 'Wir machen sichtbar, wie die Organisation wirklich arbeitet. Nicht entlang offizieller Organigramme, sondern entlang tatsächlicher Entscheidungen, Routinen, Verantwortungen und Reibungen. So entsteht ein gemeinsames Bild der Ordnung, die heute wirkt.',
    doing: [
      'Interviews und Gespräche mit relevanten Akteur:innen',
      'Analyse von Entscheidungswegen, Rollen und Verantwortlichkeiten',
      'Beobachtung von Routinen, Meetings, Übergaben und Schnittstellen',
      'Verdichtung organisationaler Spannungen',
      'Entwicklung erster Hypothesen zur tatsächlichen Organisationslogik',
    ],
    outputs: [
      'Systembild',
      'Spannungslandkarte',
      'Entscheidungs- & Rollenlandkarte',
      'Hypothesen zur Organisationslogik',
      'Designprinzipien',
    ],
    outcome:
      'Die Organisation bekommt ein gemeinsames Vokabular für das, was bisher diffus war. Führung kann klarer sehen, welche Strukturfragen wirklich bearbeitet werden müssen.',
  },
  {
    num: '02',
    meta: 'Zielbild',
    title: 'Entscheidbar machen',
    question:
      'Wie müsste unsere Organisation arbeiten, damit Strategie wirksam wird?',
    tagline: 'Erkenntnis in ein entscheidbares Zielmodell übersetzen.',
    text: 'Wir übersetzen Erkenntnis in ein entscheidbares Zielmodell. Es zeigt, wie Arbeit künftig organisiert werden soll: welche Verantwortung wo liegt, wie Entscheidungen getroffen werden, welche Routinen tragen und welche Struktur Strategie wirksam macht.',
    doing: [
      'Entwicklung eines organisationalen Zielbilds',
      'Design von Operating Model, Governance und Entscheidungsarchitektur',
      'Klärung von Rollen, Verantwortlichkeiten und Schnittstellen',
      'Übersetzung strategischer Ambitionen in organisatorische Anforderungen',
      'Priorisierung von Veränderungsschritten & Operationalisierungsplan',
    ],
    outputs: [
      'Zielbild',
      'Target Operating Model',
      'Governance- & Entscheidungsarchitektur',
      'Rollen- & Verantwortungsmodell',
      'Operationalisierungsplan',
    ],
    outcome:
      'Führung kann entscheiden, was verändert wird, in welcher Reihenfolge und mit welchem Anspruch. Die Organisation erhält eine gemeinsame Orientierung für die nächste Entwicklungsbewegung.',
  },
  {
    num: '03',
    meta: 'Pilot',
    title: 'Gestaltbar machen',
    question: 'Wie kommt das Modell in echte Arbeit?',
    tagline: 'Zielbilder früh in reale Arbeitssituationen übersetzen.',
    text: 'Struktur entsteht im Arbeiten am Modell. Deshalb bringen wir Zielbilder früh in reale Situationen: in Piloten, Entscheidungen, Routinen und Arbeitsformate. So wird sichtbar, was trägt — und was weiterentwickelt werden muss.',
    doing: [
      'Entwicklung von Pilot- und Prototyping-Formaten',
      'Gestaltung von Workshops, Entscheidungsformaten und Arbeitsroutinen',
      'Simulation neuer Rollen, Schnittstellen oder Governance-Elemente',
      'Begleitung erster Anwendungssituationen',
      'Iteration des Zielmodells auf Basis realer Erfahrung',
    ],
    outputs: [
      'Pilotdesign',
      'Workshop-Architektur',
      'Rollenprototypen',
      'Meeting- & Entscheidungsformate',
      'Iterationslogik',
    ],
    outcome:
      'Veränderung wird praktisch erfahrbar, bevor sie groß ausgerollt wird. Die Organisation erkennt früh, was funktioniert, und was angepasst werden muss.',
  },
  {
    num: '04',
    meta: 'Praxis',
    title: 'Erprobbar machen',
    question: 'Was funktioniert wirklich — und was muss angepasst werden?',
    tagline: 'In der Praxis prüfen, anpassen und verankern.',
    text: 'Das Zielmodell wird erst belastbar, wenn es in realen Arbeitssituationen geprüft wird. Die Organisation prüft, widerspricht, passt an — und macht das Modell dadurch zu ihrer eigenen Struktur.',
    doing: [
      'Begleitung erster Anwendungssituationen im echten Betrieb',
      'Iteration und Weiterentwicklung des Zielmodells',
      'Übersetzung in konkrete Arbeitsartefakte',
      'Prüfung, Widerspruch und Anpassung durch die Organisation',
    ],
    outputs: ['Pilotdesign', 'Arbeitsartefakte', 'Mission Boards', 'Iterationslogik'],
    outcome:
      'Die Organisation erkennt früh, was funktioniert, was angepasst werden muss und welche neue Arbeitsweise tragfähig ist.',
  },
  {
    num: '05',
    meta: 'Transfer',
    title: 'Unabhängig machen',
    question: 'Wie bleibt es wirksam, wenn 1789 rausgeht?',
    tagline: 'Verantwortung und Rhythmus für eigenständige Weiterentwicklung.',
    text: 'Wir verankern neue Strukturen so, dass Organisationen sie selbst weiterentwickeln können. Dafür braucht es Verantwortung, Routinen, Messpunkte und einen Rhythmus, in dem Anpassung Teil der Arbeit wird.',
    doing: [
      'Entwicklung eines Operating Rhythm',
      'Aufbau interner Weiterentwicklungs- und Verantwortungsrollen',
      'Befähigung von Führung und internen Transformationsrollen',
      'Gestaltung von Reflexions-, Mess- und Anpassungsformaten',
      'Übergabe der Arbeitsarchitektur',
    ],
    outputs: [
      'Playbook',
      'Operating Rhythm',
      'Verantwortungslandkarte',
      'Enablement-Formate',
      'Übergabe- & Iterationsmodell',
    ],
    outcome:
      'Die Organisation kann die neue Struktur eigenständig weiterentwickeln. Veränderung wird nicht als Projekt verwaltet, sondern in die Arbeitsfähigkeit eingebettet.',
  },
]

/* ═══ DER 1789-BLICK — 3 SÄULEN (Homepage) ════════════════════════════════ */

export const PILLARS = [
  {
    num: '01',
    title: 'Modeling',
    body: 'Wir beginnen nicht mit Lösungen, sondern übersetzen Beobachtungen in Hypothesen. Welche Entscheidungen, Rollen, Erwartungen und informalen Routinen halten die Organisation zusammen? Daraus entsteht ein Zielmodell, nicht als Blueprint, sondern als Arbeitsgegenstand für Führung.',
    items: ['Research', 'Zielbild', 'Designprinzipien', 'Rollen & Rechenschaft'],
  },
  {
    num: '02',
    title: 'Structuration',
    body: 'Struktur entsteht nicht im Rollout. Die Organisation arbeitet sich am Modell ab, prüft, widerspricht, passt an — und macht es dadurch zu ihrer eigenen Struktur. Was trägt, wird verstetigt. Was nicht trägt, verändert das Modell.',
    items: ['Prototyp', 'Sparring', 'Simulation', 'Einpassung'],
  },
  {
    num: '03',
    title: 'AI-Human-Native',
    body: 'AI ist kein Add-on zur Organisation. Wenn Arbeit neu geordnet wird, denken wir AI als Medium mit: in Rollen, Workflows, Entscheidungen und im Zugriff auf organisationales Wissen.',
    items: [
      'AI Operating System',
      'AI enabled Structures',
      'AI Mediation bei Human to Human Erwartungsstrukturen',
      'AI Companions',
    ],
  },
] as const

/* ═══ AI UND ORGANISATION — 4 DIMENSIONEN (Homepage) ══════════════════════ */

export const AI_DIMENSIONS = [
  {
    num: '01',
    title: 'AI in Prozessen',
    body: 'Wie KI Abläufe neu strukturiert — Automatisierung, hybride Workflows, neue Geschwindigkeiten.',
  },
  {
    num: '02',
    title: 'AI und Mensch',
    body: 'Wie KI Zusammenarbeit verschiebt — Rollen, Erwartungen, Kompetenzbilder.',
  },
  {
    num: '03',
    title: 'AI in Entscheidungen',
    body: 'Wie KI Urteilsbildung verändert — Datenbasis, Vorschlagslogik, Verantwortung.',
  },
  {
    num: '04',
    title: 'AI und Strukturen',
    body: 'Wie KI Organisationsdesign herausfordert — Governance, Verantwortlichkeit, Architektur.',
  },
] as const
