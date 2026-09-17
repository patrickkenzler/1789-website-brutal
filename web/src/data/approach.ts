/* ═══ ANSATZ ════════════════════════════════════════════════════════════════
   Quelle: Kundenversion human826.github.io/1789-website (Deploy 15.09.2026),
   Startseite und /ansatz. Texte verbatim.                                   */

/* ── Der Arbeitsbogen: fünf Phasen ─────────────────────────────────────── */

export type Phase = {
  /** Sprungmarke auf /ansatz (#phase-01) — wird nie sichtbar gesetzt */
  num: string
  /** Label der Phase */
  meta: string
  /** Längeres Label auf /ansatz, wo es vom Label abweicht */
  metaLong?: string
  title: string
  /** Leitfrage (/ansatz) */
  question: string
  /** Leitfrage in der Fassung der Startseite, wo sie abweicht */
  questionShort?: string
  /** Einzeiler für die Startseite */
  tagline: string
  text: string
  /** Was dadurch möglich wird */
  outcome: string
  outputs: string[]
  /** Modellstand am Ende der Phase — die Kette im Index auf /ansatz */
  model: string
}

export const PHASES: Phase[] = [
  {
    num: '01',
    meta: 'Beobachtung',
    title: 'Sichtbar machen',
    question: 'Wie arbeitet und entscheidet unsere Organisation heute tatsächlich?',
    tagline: 'Aus einzelnen Symptomen werden konkrete Strukturfragen.',
    text: 'Wir untersuchen, wie Wertschöpfung, Entscheidungen und Verantwortung im Alltag zusammenspielen — formale Regeln ebenso wie die informellen Lösungen, die sie ergänzen. Aus einzelnen Symptomen werden konkrete Strukturfragen.',
    outcome:
      'Führung und Organisation teilen ein belastbares Bild der Ausgangslage — und die Maßstäbe, an denen ein Vorschlag sich messen lassen muss.',
    outputs: ['Ist-Modell', 'Strukturhypothesen', 'Kriterien und Gestaltungsfelder'],
    model: 'Ist-Modell',
  },
  {
    num: '02',
    meta: 'Zielmodell',
    title: 'Entscheidbar machen',
    question: 'Welche strukturelle Richtung ist unter unseren Bedingungen tragfähig?',
    tagline:
      'Alternativen werden konkret genug, dass die Führung verbindlich entscheidet.',
    text: 'Aus den Gestaltungsfeldern entsteht ein strategisches Zielmodell. Alternativen und ihre Konsequenzen werden so konkret, dass eine begründete Richtungsentscheidung möglich ist — und die Führung entscheidet verbindlich. Auch das Festhalten am Bestehenden ist eine Entscheidung.',
    outcome:
      'Die Führung hat eine strukturelle Richtung gewählt. Ihre Annahmen, Konsequenzen und Prioritäten tragen die weitere Ausarbeitung.',
    outputs: ['Strategische Designprinzipien', 'Zielmodell', 'Priorisierung und Roadmap'],
    model: 'Strategisches Zielmodell',
  },
  {
    num: '03',
    meta: 'Simulation',
    metaLong: 'Ausgestaltung & Simulation',
    title: 'Gestalt geben und durchspielen',
    question: 'Wie bewährt sich die gewählte Richtung, bevor sie real gilt?',
    questionShort: 'Wie bewährt sich die Richtung, bevor sie real gilt?',
    tagline: 'Scheitern kostet hier noch nichts — es verändert das Modell.',
    text: 'Das Zielmodell gewinnt Präzision: Rollen, Prozesse, Fähigkeiten, Schnittstellen, Entscheidungsrechte — gemeinsam mit den künftigen Verantwortlichen. Und es wird durchgespielt, an den Situationen, in denen es sich bewähren muss, mit den Menschen, die darin arbeiten werden. Scheitern kostet hier noch nichts — es verändert das Modell, bevor es die Organisation verändert.',
    outcome:
      'Eine testbare Detailkonzeption, geprüft an simulierten Ernstfällen. Geklärt ist, was zuerst in die reale Arbeit geht und welche Fragen nur dort zu beantworten sind.',
    outputs: ['Detailkonzeption', 'Simulationserkenntnisse', 'Erprobungsfragen'],
    model: 'Simulierte Detailkonzeption',
  },
  {
    num: '04',
    meta: 'Pilotierung',
    title: 'Unter realen Bedingungen erproben',
    question: 'Was bewährt sich unter realen Bedingungen?',
    questionShort: 'Was bewährt sich im operativen Vollzug?',
    tagline:
      'Ausgewählte Elemente gehen legitimiert und geschützt in die reale Arbeit.',
    text: 'Ausgewählte Elemente gehen in die reale Arbeit — legitimiert, geschützt und mit klaren Lernfragen. Die entscheidende Evidenz entsteht im operativen Vollzug: was trägt, welche neuen Spannungen auftreten, welche Annahmen revidiert werden müssen. Die Organisation entscheidet, was angepasst, ausgeweitet oder verworfen wird.',
    outcome: 'Die nächste Strukturentscheidung beruht auf operativer Erfahrung.',
    outputs: [
      'Pilotdesign',
      'Praxiserkenntnisse',
      'Revidiertes Modell',
      'Entscheidung zum weiteren Vorgehen',
    ],
    model: 'Revidiertes Modell',
  },
  {
    num: '05',
    meta: 'Eigenständigkeit',
    title: 'Eigenständig weiterentwickeln',
    question: 'Wie führt die Organisation die Entwicklung selbst fort?',
    tagline:
      'Mindestens ein vollständiger Zyklus läuft eigenständig — 1789 tritt zurück.',
    text: 'Eigenständigkeit wird von Beginn an aufgebaut — hier wird sie nachgewiesen. Interne Verantwortliche nutzen das Modell selbst, deuten Abweichungen und formulieren die nächsten Strukturentscheidungen. Mindestens ein vollständiger Zyklus läuft eigenständig; 1789 tritt in eine begleitende Rolle zurück.',
    outcome:
      'Die Organisation kann neue Spannungen selbst sichtbar und entscheidbar machen. Ihre weitere Entwicklung hängt nicht von 1789 ab.',
    outputs: [
      'Fortschreibbares Organisationsmodell',
      'Interne Konzeptverantwortung',
      'Eigenständiger Entwicklungszyklus',
    ],
    model: 'Fortschreibbares Modell',
  },
]

/** Der Arbeitsbogen — Einleitung (/ansatz) und Schlusssatz (Startseite). */
export const ARC = {
  intro:
    'Die Phasen ordnen die zentralen Fragen, Entscheidungen und Ergebnisse. Sie beschreiben wechselnde Schwerpunkte, keinen linearen Rollout. Modelling, Simulation und Continuation setzen sich in jeder Phase fort; Erkenntnisse können frühere Phasen wieder öffnen.',
  note: 'Fünf Phasen, in denen ein konkretes Modell entsteht, verhandelt, durchgespielt und übergeben wird. Die Entscheidungen trifft die Organisation.',
} as const

/* ═══ STARTSEITE — DER BLICK ═══════════════════════════════════════════════
   Drei Spannungen: jeweils ein Titelpaar, eine Beschreibung, ein Schlusssatz. */

export const BLICK = {
  intro: [
    'Ein gerettetes Projekt. Ein gesichertes Budget. Ein beendeter Konflikt.',
    'So entsteht Struktur. Und so bleibt sie — auch wenn ihr Anlass längst verschwunden ist.',
    'Wer sie verteidigt, hat Gründe. Wer sie umgeht, auch.',
  ],
  tensions: [
    {
      title: ['Neue Strategie.', 'Alte Verteilung.'],
      body: 'Die Strategie beansprucht die Zukunft. Die Verteilung besitzt die Gegenwart: Budgets, Besetzungen, Portfolien, Vetos.',
      close:
        'Solange die Verteilung nicht neu entschieden ist, setzt sich die Gegenwart durch.',
    },
    {
      title: ['Gemeinsame Aufgabe.', 'Getrenntes Interesse.'],
      body: 'Alignment verspricht Übereinstimmung. Organisation braucht Unterschiede. Wo Interessen aufeinandertreffen, halten Deals, Koalitionen und Mikropolitik die Organisation arbeitsfähig.',
      close: 'Einigkeit ist nicht der Normalzustand. Aushandlung ist es.',
    },
    {
      title: ['Neue Arbeit.', 'Alte Ordnung.'],
      body: 'AI stellt die bestehende Arbeitsteilung neu zur Disposition. Werkzeuge machen Arbeit leichter. Fähigkeiten verändern, wer sie macht — und damit, wer urteilt, wer prüft, wer einsteht.',
      close: 'Die neue Ordnung entsteht jetzt. Auch dort, wo niemand sie entwirft.',
    },
  ],
  close: [
    'Struktur verändern heißt,',
    'das Selbstverständliche wieder zur Entscheidung zu stellen.',
  ],
} as const

/* ═══ STARTSEITE — WORAN WIR ARBEITEN ══════════════════════════════════════
   Drei Perspektiven auf dieselbe Organisation, quer dazu AI-Human-Native.   */

export const WORK = {
  intro: [
    'Wie eine Organisation Arbeit teilt. Wie sie entscheidet. Wer einsteht.',
    'Jede Organisation beantwortet diese Fragen — meist, ohne sie zu stellen.',
    '1789 stellt sie. In drei Perspektiven auf dieselbe Organisation.',
  ],
  perspectives: [
    {
      title: 'Organizational Strategy',
      lead: 'Die Entwicklungsrichtung.',
      body: 'Welche Fähigkeiten die Organisation aufbaut, welche Prioritäten gelten, welche Zielkonflikte sie bewusst eingeht. Strategie formt Struktur — und Struktur entscheidet, welche Strategie möglich ist.',
      close: 'Richtung ist eine Strukturentscheidung.',
    },
    {
      title: 'Governance Design',
      lead: 'Die Architektur des Entscheidens.',
      body: 'Wer worüber entscheidet, wer beteiligt wird, wer Verantwortung trägt — und auf welchen Wegen Konflikte bearbeitet, Entscheidungen überprüft und Festlegungen wieder geöffnet werden.',
      close: 'Wer über das Entscheiden entscheidet, hat die Organisation in der Hand.',
    },
    {
      title: 'Target Operating Model',
      lead: 'Die operative Gestalt.',
      body: 'Leistungen und Fähigkeiten, Rollen, Arbeitsflüsse, Schnittstellen, Ressourcen — verbunden zu einer operativen Zielkonfiguration. An ihr wird entschieden, erprobt, korrigiert.',
      close: 'Konkret genug zum Entscheiden. Offen genug zum Lernen.',
    },
  ],
  conclusion: [
    // geschütztes Leerzeichen vor dem Gedankenstrich: keine Zeile beginnt mit „—"
    'Am Ende steht ein Strukturvorschlag — begründet, konkret, angreifbar.',
    'Denn nur was angreifbar ist, lässt sich entscheiden.',
  ],
  coda: 'Die Entscheidung trifft die Organisation.',
} as const

/* ═══ AI-HUMAN-NATIVE — Startseite und /ansatz ═════════════════════════════ */

export const AI_HUMAN_NATIVE = {
  home: {
    paragraphs: [
      'Quer zu allen drei Perspektiven: AI verändert Fähigkeiten, verschiebt Arbeitsteilung — und damit die Ordnung selbst. Menschliche und AI-basierte Beiträge entwerfen wir deshalb von Beginn an in derselben Struktur, mit klarem Ort für Urteil, Kontrolle und Verantwortung.',
    ],
    close: ['AI ist eine Ordnungsfrage.'],
  },
  ansatz: {
    paragraphs: [
      'Wo AI die Arbeitsteilung materiell verändert, gehört sie von Beginn an in den Strukturvorschlag. Im Modelling steht neben jeder Aufgabe, wer sie leistet — Mensch, AI oder beide — und wer urteilt, wer prüft, wer einsteht. In der Simulation wird diese Zusammenarbeit durchgespielt, bevor sie real gilt: Wer prüft wen? In der Continuation lernt die Organisation, die Arbeitsteilung selbst weiterzuentwickeln.',
      'Wir arbeiten dabei so, wie wir gestalten: AI-Agenten unterstützen Analyse, Modellarbeit und Auswertung — das Urteil bleibt besetzt.',
    ],
    close: ['AI ist eine Ordnungsfrage.', 'Auch in unserer eigenen Arbeit.'],
  },
} as const

/* ═══ /ANSATZ — Einleitung, Ausgangspunkt, Arbeitslogik ════════════════════ */

export const ANSATZ = {
  intro:
    'Wir entwickeln früh ein konkretes Modell der Organisation — als fachlich begründeten, angreifbaren Vorschlag. Er macht strukturelle Alternativen entscheidbar und gibt der gemeinsamen Arbeit einen Gegenstand. In kurzen Zyklen wird er geschärft, durchgespielt und revidiert, bis die Organisation die Entwicklung selbst weiterführt.',
  start: [
    'Am Anfang steht eine konkrete Problemstellung — so, wie die Organisation sie beschreibt. Diese Beschreibung wird im Projekt geprüft und geschärft: Welche strukturellen Bedingungen prägen das Problem? Welche Leistungen erbringt die bestehende Ordnung, und welche Spannungen erzeugt sie? Wer eine Struktur verteidigt, hat meist gute Gründe. Sie gehören zur Diagnose.',
    'Auf dieser Grundlage klären wir mit den zuständigen Entscheidungsinstanzen die Kriterien: Was soll sich verändern, was soll bestehen bleiben, welche Konsequenzen werden bewusst in Kauf genommen? Erst diese Kriterien machen einen Strukturvorschlag prüfbar.',
    'Gestaltet wird dabei immer dieselbe Organisation — ob der Anlass in Organizational Strategy, Governance Design oder Target Operating Model liegt. Je nach Anlass führt eine Perspektive; verbunden bleiben alle drei.',
  ],
  logic: {
    intro:
      '1789 bringt früh einen begründeten Entwurf ein; die Organisation prüft ihn, widerspricht und entscheidet. Modelling, Simulation und Continuation wechseln sich dabei nicht ab — sie setzen sich durch das ganze Mandat fort und verschieben nur ihr Gewicht.',
    functions: [
      {
        title: 'Modelling',
        lead: 'Struktur explizit und verhandelbar machen.',
        body: 'Wir entwickeln konkrete Modelle der Organisation: Rollen, Entscheidungsrechte, Arbeitszusammenhänge, Abhängigkeiten. Jedes Modell ist ein Strohmann-Modell — fachlich begründet und gebaut, um Kritik auszuhalten. An ihm werden Alternativen, Verteilungsfragen und Folgeprobleme konkret: Kritik führt zur Präzisierung, zum Gegenentwurf oder zur begründeten Verwerfung. Auch das ist ein Ergebnis.',
      },
      {
        title: 'Simulation',
        lead: 'Konsequenzen erfahrbar machen, bevor sie real sind.',
        body: 'Die Modelle werden an problemrelevanten Situationen durchgespielt. Beteiligte übernehmen Rollen, handeln und entscheiden unter den vorgeschlagenen Bedingungen. Sichtbar wird, was trägt, wo Konflikte entstehen und welche Annahmen das Handeln bestimmen — solange ein Scheitern noch nichts kostet. Die Auswertung liefert begrenzte, nachvollziehbare Erkenntnisse für die Überarbeitung der Modelle und die Vorbereitung der Entscheidung.',
      },
      {
        title: 'Continuation',
        lead: 'Die eigenständige Fortführung, von Beginn an.',
        body: 'Schon während der Arbeit bauen sich interne Verantwortung, Entscheidungsrechte und praktische Fähigkeiten auf. Die Organisation soll die Modelle selbst verwenden, beobachten und revidieren können. Der Maßstab ist nachweisbar: Die vereinbarten Aufgaben laufen zunehmend ohne 1789 als zentrale Instanz weiter.',
      },
    ],
    close: [
      'Am Modell wird verhandelt. Entschieden wird durch die Instanzen, die dafür legitimiert sind — über Prioritäten, Strukturen und akzeptierte Zielkonflikte. Abstimmung ersetzt keine Entscheidung.',
      '1789 vertritt begründete Positionen, hält Widersprüche sichtbar und bereitet die Entscheidung vor. Der Vorschlag wird dabei aufgebraucht — der Strohmann verschwindet. Was bleibt, ist eine Struktur, die ihre Verhandlung erinnert und wieder geöffnet werden kann. Auch die ausdrückliche Bestätigung des Bestehenden ist ein Ergebnis.',
    ],
  },
  cta: 'Ein Projekt beginnt selten mit einer fertig formulierten Strukturfrage. Im ersten Gespräch klären wir, welches Problem Ihre Organisation lösen will und ob unsere Arbeitsweise dafür passt.',
} as const
