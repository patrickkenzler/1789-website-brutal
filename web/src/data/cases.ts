/* ── Case-Daten ─────────────────────────────────────────────────────────────
   Zwei Cases (WD-40, teccle) liegen als ausgearbeitete Lesefassung vor und
   füllen `sections`: Kapitel aus Blöcken, in der Reihenfolge des Dokuments.
   Die übrigen tragen weiter die kurze Trias gap/shift/result. Die Case-Seite
   rendert, was da ist — beides, nicht eines von beiden.                    */

export type CaseBlock =
  | { kind: 'text'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'quote'; text: string; author: string; role: string; photo?: string }
  | { kind: 'link'; label: string; href: string; intro?: string }

export type CaseSection = {
  /** Kapitelmarke — 'Der Gap', 'Der Shift', 'Das Ergebnis' … */
  label: string
  /** Unterzeile des Kapitels, wo das Dokument eine setzt */
  lead?: string
  /** Dunkler Grund: eröffnet ein Kapitel im Leseverlauf */
  ground?: 'dark'
  blocks: CaseBlock[]
}

export type CaseStudy = {
  slug: string
  client: string
  sector: string
  /** Kurzes Label für Kacheln und Listen */
  title: string
  tagline: string
  /** Short punchy teaser shown on homepage cards — challenge/result framing */
  teaser?: string
  tags: string[]
  duration: string
  scale: string
  lead: string
  // ── Kurzfassung (Bestand) ──
  gap?: string        // Der Gap — was war das eigentliche strukturelle Problem?
  shift?: string      // Was haben wir getan?
  result?: string     // Was hat sich verändert?
  quote?: { text: string; author: string; role: string }
  // ── Lesefassung ──
  /** H1 der Case-Seite, wo sie vom Kachel-Label abweicht */
  headline?: string
  /** Untertitel unter der H1 */
  subline?: string
  summary?: { label: string; text: string }
  /** Zusätzliche Zeilen des Datenblatts, verbatim aus der Lesefassung */
  meta?: { mandant?: string; structure?: string; scope?: string; field?: string }
  sections?: CaseSection[]
  transfer?: string[]
  faq?: { q: string; a: string }[]
  /** Slugs für „Weitere Shifts“ — sonst die drei nächsten Cases */
  related?: string[]
  /** Schlusssatz vor der CTA */
  close?: string
  color: 'terra' | 'sage' | 'ink' | 'neutral'
  featured?: boolean
  /** Path relative to /public — e.g. '/projects/wd40.jpg'. Omit to show placeholder. */
  image?: string
}

export const cases: CaseStudy[] = [
  {
    slug: 'innovationskraft-durch-zusammenarbeit',
    client: 'WD-40 Company',
    sector: 'Markenartikel, Wartungsprodukte für Handwerk und Heimwerk',
    title: 'Innovationskraft durch Zusammenarbeit',
    headline: 'Ein Innovationsrahmen, der aus Ideen Entscheidungen macht',
    tagline:
      'Wie die DACH-Organisation eines globalen Konzerns lernte, Innovation neben dem Tagesgeschäft zu steuern.',
    tags: ['Governance Design', 'Organizational Strategy'],
    duration: 'acht Monate',
    scale: 'rund 50 Mitarbeitende',
    lead: 'Serap Yılmaz-Dreger, Mary-Jane Bolten',
    meta: {
      mandant: 'WD-40 Company, DACH-Organisation (Deutschland, Österreich, Schweiz)',
      structure: 'DACH-Organisation eines global aufgestellten Konzerns',
      scope:
        'gesamte DACH-Organisation; zehn Interviews, ein Pilot, zwei Projekte im ersten regulären Zyklus',
    },
    summary: {
      label: 'Auf einen Blick',
      text: 'Die DACH-Organisation der global aufgestellten WD-40 Company sitzt in Bad Homburg und hat rund 50 Mitarbeitende. Dort versandeten viele Ideen neben dem Tagesgeschäft, weil Rollen und Entscheidungswege für Innovationsprojekte fehlten. 1789 Innovations hat mit WD-40 in acht Monaten das Strategic Impact Framework entwickelt, einen Jahreszyklus mit festen Entscheidungspunkten, und es in einem Pilot erprobt. Seitdem läuft das Framework im regulären Betrieb, und 1789 begleitete die ersten Projekte darin.',
    },
    sections: [
      {
        label: 'Der Gap',
        blocks: [
          {
            kind: 'text',
            text: 'Die DACH-Organisation von WD-40 war über Jahre mit eingespielten, effizienten Abläufen erfolgreich. Dann setzte der Konzern ehrgeizige Wachstumsziele für einen Markt, der bereits gesättigt war. WD-40 brauchte Innovation, im Produkt und in der Zusammenarbeit über Abteilungsgrenzen hinweg. Beides musste neben den Abläufen entstehen, die den Erfolg gebracht hatten.',
          },
          {
            kind: 'text',
            text: 'Ideen gab es viele. In Interviews beschrieben Mitarbeitende zahlreiche parallele Initiativen, von denen manche im Sande verliefen. Wie Entscheidungen fielen und umgesetzt wurden, hing stark von einzelnen Personen ab. Projektgruppen, die die Strategie ins Team tragen sollten, kamen vor allem mit Gründen zurück, warum etwas nicht geht.',
          },
          {
            kind: 'quote',
            text: 'Ich habe immer gedacht, das kriegen wir doch auch ein bisschen schneller hin. Innovation ist ein großes Wort, aber am Ende ging es darum, wie wir größere Entscheidungen schneller treffen.',
            author: 'Daniel Kalisch',
            role: 'General Manager DACH, WD-40 Company',
          },
        ],
      },
      {
        label: 'Der Shift',
        blocks: [
          {
            kind: 'text',
            text: '1789 führte zunächst zehn leitfadengestützte Interviews in Vertrieb, Marketing und den zentralen Diensten. Dabei zeigte sich, dass für Vorhaben außerhalb des Tagesgeschäfts feste Projektrollen und nachvollziehbare Entscheidungswege fehlten. Mit 1789 baute das Leadership-Team um General Manager Daniel Kalisch dafür das Strategic Impact Framework auf. Es ist ein Jahreszyklus aus Planung, Projektphase und Auswertung, in dem das Leadership-Team an festen Punkten entscheidet.',
          },
          {
            kind: 'text',
            text: 'Bevor das Framework für alle galt, musste es an einem echten Geschäftsfall bestehen. Ein cross-funktionales Team testete es in einem Design Thinking Sprint an einem Produkt, dessen Wachstum stagnierte. Die Erfahrungen des Pilotteams flossen in einer Retrospektive zurück in das Framework. Analyse, Framework-Entwicklung und Pilot dauerten zusammen acht Monate.',
          },
          {
            kind: 'text',
            text: 'Den ersten regulären Zyklus begleitete 1789 von der Ideensession mit der ganzen Belegschaft bis zur Scoping-Runde. Dort priorisierte das Leadership-Team die Vorschläge entlang der Strategie und gab zwei Projekte frei. Die Moderation übernimmt WD-40 dabei schrittweise selbst.',
          },
        ],
      },
      {
        label: 'Im Detail: Der Pilot',
        lead: 'Ein Design Thinking Sprint als Belastungsprobe für das Framework',
        ground: 'dark',
        blocks: [
          {
            kind: 'text',
            text: 'Ein Produkt von WD-40 war über Jahre gut gewachsen und stagnierte nun. Das Leadership-Team machte die nächste Wachstumsphase dieses Produkts zur ersten Aufgabe im Strategic Impact Framework. Es wählte bewusst ein Thema, für das es noch keine fertige Lösung gab.',
          },
          {
            kind: 'text',
            text: 'Ein Team aus verschiedenen Abteilungen arbeitete eine Woche in einem Design Thinking Sprint, einem Format vom Problem bis zum getesteten Prototyp. 1789 moderierte und hielt den Fokus auf dem Problem, bevor über Lösungen gesprochen wurde. Anderthalb Tage prüfte das Team seine Hypothesen in einem Baumarkt, mit vorbereiteten Fragebögen und im Gespräch mit Kundschaft und Handelspartnern.',
          },
          {
            kind: 'text',
            text: 'Beide Ausgangshypothesen, ein zu hoher Preis und ein unklarer Nutzen, erwiesen sich als falsch. Auf dieser Grundlage entschied WD-40, wie es Produkt und Präsentation am Point of Sale weiterentwickelt. Nach dem Pilot führte das Leadership-Team das Framework als festen Jahreszyklus ein.',
          },
          {
            kind: 'quote',
            text: 'Wir hätten natürlich auch eine Marktforschungsagentur beauftragen können. Aber wenn man live vor Ort sieht, wie der Kunde Entscheidungen trifft und Feedback gibt, verändert das nochmal extrem.',
            author: 'Daniel Kalisch',
            role: 'General Manager DACH, WD-40 Company',
          },
          {
            kind: 'link',
            intro: 'Mehr zum Pilot im Gespräch mit Daniel Kalisch:',
            label: 'Corporate Therapy #146: Wie WD-40 Ideen in Wirkung übersetzt',
            href: 'https://open.spotify.com/episode/0MUqY882T8YJAmc3hfNEGX',
          },
        ],
      },
      {
        label: 'Das Ergebnis',
        blocks: [
          {
            kind: 'text',
            text: 'Heute steuert die DACH-Organisation von WD-40 ihre Innovationsprojekte über das Strategic Impact Framework.',
          },
          {
            kind: 'list',
            items: [
              'Jedes Jahr beginnt mit einem Strategie-Update des Leadership-Teams für alle Abteilungen, aus dem die Belegschaft Projektideen entwickelt.',
              'Das Leadership-Team entscheidet an drei festen Punkten. Es wählt die Projekte aus, vereinbart mit jedem Projektteam vor dem Start verbindlich Ziel, Umfang und Ressourcen und schließt jedes Projekt formal ab.',
              'Jedes Projekt hat einen Sponsor, eine Koordination und ein cross-funktionales Team und dauert höchstens acht Monate. Größere Vorhaben laufen in Etappen.',
              'Innerhalb des vereinbarten Rahmens arbeiten die Teams eigenständig. In Reviews binden sie die betroffenen Bereiche ein, damit Entscheidungen rechtzeitig dort ankommen, wo sie umgesetzt werden.',
              'Abgeschlossene Projekte übernimmt eine verantwortliche Person in der Linie. Einmal im Jahr prüft das Leadership-Team auch das Framework selbst.',
            ],
          },
          {
            kind: 'text',
            text: 'Im ersten regulären Zyklus entstanden zwei Projekte, die an strategischen Prioritäten arbeiten. Mehr als die Hälfte der rund 50 Mitarbeitenden war inzwischen an einem Projekt beteiligt. Offen ist, wie WD-40 künftig Produktideen von internen Veränderungsthemen trennt und wie viele Projekte die Organisation gleichzeitig trägt.',
          },
          {
            kind: 'text',
            text: 'WD-40 ist in der DACH-Region trotz intensiven Wettbewerbs Marktführer. Das Strategic Impact Framework soll helfen, diese Position in einem gesättigten Markt zu halten.',
          },
          {
            kind: 'quote',
            text: 'Wir hatten ein Projekt aus der Supply Chain, und da waren auch zwei, drei Vertriebsleute dabei, weil wir das alles cross-funktional aufstellen wollten. Auf einmal haben sich Leute mit dem Supply-Chain-Prozess beschäftigt, die früher gar kein Teil davon waren oder nur minimalen Input geliefert haben. Und auf einmal haben wir ein ganz anderes gemeinsames Verständnis.',
            author: 'Daniel Kalisch',
            role: 'General Manager DACH, WD-40 Company',
            photo: '/testimonials/daniel-kalisch.jpeg',
          },
        ],
      },
    ],
    transfer: [
      'Landesorganisationen internationaler Konzerne, die aus einer globalen Strategie eigene Innovationsprojekte ableiten.',
      'Erfolgreiche Unternehmen mit effizienter Linienorganisation, die Innovation übergreifend steuern wollen.',
      'Geschäftsführungen, deren Projektgruppen viel diskutieren und wenig entscheiden.',
    ],
    faq: [
      {
        q: 'Wie verankert die Landesorganisation eines Konzerns Innovation neben dem Tagesgeschäft?',
        a: 'Die DACH-Organisation von WD-40 nutzt dafür das Strategic Impact Framework, einen Jahreszyklus aus Planung, Projektphase und Auswertung. Das Leadership-Team wählt die Projekte aus und legt mit jedem Projektteam Ziel, Umfang und Ressourcen verbindlich fest. Abgeschlossene Projekte übergibt es formal an die Linie.',
      },
      {
        q: 'Wer entscheidet in einem solchen Innovationsprozess?',
        a: 'Bei WD-40 entscheidet das Leadership-Team an festen Punkten über Auswahl, verbindliche Vereinbarung und Abschluss der Projekte. Innerhalb des vereinbarten Rahmens arbeiten die Projektteams mit Sponsor und Koordination eigenständig. Für jede Entscheidung ist vorab geklärt, ob das Team, eine Rolle oder eine externe Stelle sie trifft.',
      },
      {
        q: 'Wie lange dauert der Aufbau eines solchen Rahmens?',
        a: 'Bei WD-40 dauerten Analyse, Framework-Entwicklung und Pilot acht Monate. Danach lief das Framework im regulären Jahreszyklus, und 1789 Innovations begleitete die ersten Projekte darin.',
      },
    ],
    close:
      'Jeder Innovationsprozess beginnt mit dem Gap zwischen vorhandenen Ideen und getroffenen Entscheidungen.',
    color: 'terra',
    featured: true,
    image: '/projects/wd40.jpg',
  },
  {
    slug: 'effektivitaet-und-kundennaehe',
    client: 'Procter & Gamble',
    sector: 'Consumer Goods',
    title: 'Effektivität und Kundennähe durch Dezentralität',
    tagline: 'Wenn Effizienz-Logik der Kundennähe im Weg steht.',
    teaser: 'Jeder Fall ein Standardfall, jede Antwort zentral geregelt — bis Kunden andere Fragen stellten. Die Führung verteilte neu, wer entscheidet: Teams, die ihre Kunden kennen.',
    tags: ['Transformation', 'Dezentralisierung', 'Operating Model'],
    duration: '9 Monate',
    scale: '200 Mitarbeitende',
    lead: 'Patrick Breitenbach',
    gap: 'Die Customer Service Organisation war auf Masseneffizienz ausgerichtet — in einer Welt, die individuelle Reaktionsfähigkeit verlangt. Das erzeugte strukturellen Reibungsverlust: Kunden warteten, Mitarbeitende fühlten sich handlungsunfähig.',
    shift: 'Partizipative Entwicklung eines neuen Operating Models: Leadership Workshops, Intensivanalysen, ein freiwilliges Projektteam das gemeinsam mit 1789 das Konzept entwickelte — pilotiert, bevor es unternehmensweit ausgerollt wurde.',
    result: 'Autonome, kundennahe Teams mit echter Entscheidungskraft. Schnellere Reaktionsfähigkeit auf individuelle Anforderungen. Dezentralisierung nicht als Kontrollverlust — sondern als Wertschöpfungsgewinn.',
    color: 'ink',
    featured: true,
    image: '/projects/pg.jpg',
  },
  {
    slug: 'integration',
    client: 'teccle Group',
    sector: 'IT-Dienstleistungen für den Mittelstand',
    title: '15 Firmen, ein Operating Model',
    tagline:
      'Wie eine Private-Equity-Plattform ihren eigenen Weg zwischen Konzernstruktur und losem Netzwerk fand.',
    tags: ['Private Equity', 'Post-Merger-Integration', 'Governance Design'],
    duration: 'rund drei Jahre',
    scale: 'rund 500 Mitarbeitende, 15 Firmen',
    lead: 'Human Nagafi, Mary-Jane Bolten',
    meta: {
      structure: 'Buy-and-Build-Plattform, finanziert von Private Equity',
      scope:
        'Holding-Geschäftsführung, Geschäftsführer der Tochterfirmen, Change Agents, Mitarbeitende an vielen Standorten',
      field: 'Governance Design, Organizational Strategy, Target Operating Model',
    },
    summary: {
      label: 'Der Shift auf einen Blick',
      text: 'Die von Private Equity finanzierte teccle Group bündelt 15 IT-Dienstleister für den Mittelstand. Mit 1789 Innovations setzte sie zuerst die Governance der Geschäftsführung auf und band die Geschäftsführer der übernommenen Firmen in die Steuerung ein. Gemeinsam legten die Geschäftsführer Designprinzipien fest, aus denen das teccle Operating Model entstand. Vier Tochterfirmen testeten es im Alltag, bevor es auf die ganze Gruppe überging.',
    },
    sections: [
      {
        label: 'Der Gap',
        blocks: [
          {
            kind: 'quote',
            text: 'Aktuell sind wir viele gute Unternehmen, aber noch keine gute Gruppe.',
            author: 'Sven Kalisch',
            role: 'Gründer und Geschäftsführer, teccle Group',
            photo: '/testimonials/sven-kalisch.jpeg',
          },
          {
            kind: 'text',
            text: 'Die teccle Group war eine Neugründung, eine von Private Equity finanzierte Buy-and-Build-Plattform. Am Anfang stand nur eine Vision: dem Mittelstand alles aus einer Hand zu liefern. Mit jedem Zukauf kam eine Firma mit eigener Geschichte, eigenen Prozessen, eigenen Abrechnungsmodellen und eigenem Kundenstamm dazu. Die Mitarbeitenden saßen verstreut in ganz Deutschland, und oft wusste ein Team nicht, was das andere kann.',
          },
          {
            kind: 'text',
            text: 'Unterschiedliche Prozesse sorgten für Qualitätsunterschiede, unklare Zuständigkeiten für Reibung. Für ihre Kunden mussten die Teams das Angebot erweitern, konnten das Angebot der Gruppe aber kaum überblicken.',
          },
          {
            kind: 'text',
            text: 'In Buy-and-Build-Modellen steigert oft schon die Größe den Wert einer Gruppe. An Qualitätsunterschieden und Reibung hätte die gesellschaftsrechtliche Zusammenführung aber nichts geändert. teccle brauchte die Größe der großen Konkurrenten und die Kundennähe der kleinen Häuser.',
          },
        ],
      },
      {
        label: 'Der Shift',
        blocks: [
          {
            kind: 'text',
            text: 'Zuerst musste teccle entscheiden, nach welchem Vorbild sich die Gruppe organisiert. Der Markt kannte zwei Antworten. Große Konkurrenten integrieren voll in Matrix- oder Linienorganisationen und stellen damit Standardisierung vor das individuelle Kundenproblem. Lose Netzwerke kleiner Systemhäuser bleiben nah am Kunden, skalieren aber nicht.',
          },
          {
            kind: 'text',
            text: 'teccle verwarf beide Modelle und begann den Umbau an der Spitze. 1789 setzte mit der Holding-Geschäftsführung deren Governance auf: welche Entscheidungen sie gemeinsam trifft, nach welchen Regeln vom Konsens bis zur Delegation und mit welchen Vorlagen. Danach band teccle die Geschäftsführer der übernommenen Firmen in die Steuerung der Gruppe ein. Ein Gremium aus Holding und Tochterfirmen entschied über gruppenübergreifende Projekte, und ein Programm-Forum stand alle vier Wochen allen Geschäftsführern offen.',
          },
          {
            kind: 'text',
            text: 'Auf dieser Grundlage legten die Geschäftsführer Designprinzipien fest, deren Kern lautet: Was der Markt braucht, entsteht lokal. Was Zusammenarbeit braucht, wird zentral geregelt. Nach rund drei Monaten Analyse stand ein erstes Referenzmodell, das teccle Operating Model. In weiteren rund vier Monaten stimmte die Geschäftsführung es mit allen Geschäftsführern und freiwilligen Change Agents ab und plante den Pilot.',
          },
          {
            kind: 'text',
            text: 'Vier Tochterfirmen mit rund 80 Mitarbeitenden testeten das Modell als „Public Cloud Powerhouse“ rund sechs Monate im Alltag. Die Detailprozesse entwickelten die Mitarbeitenden selbst. Ein zentrales Order-to-Cash-Team für den ganzen Pilotbereich klang sinnvoll, doch die Vertragslogiken waren unterschiedlicher als gedacht. Erst die Arbeit mit Order-to-Cash, Vertrieb und Delivery zeigte, was gebraucht wurde, und teccle überarbeitete daraufhin seine Portfoliostruktur.',
          },
          {
            kind: 'text',
            text: 'Ein geplanter Marktplatz für Projekte wurde aus technischen Gründen zurückgestellt. Seine Aufgabe übernahmen Dispatcher, die Kunden zu den passenden Teams führten und Teams auf dem internen Markt miteinander verbanden.',
          },
          {
            kind: 'text',
            text: 'Viele Geschäftsführer der übernommenen Firmen waren zuvor Gründer und fanden sich in einer neuen Rolle wieder. 1789 coachte sie beim Übergang und übernahm teilweise das Interim Management, wenn jemand eine neue Rolle antrat oder in Rente ging.',
          },
          {
            kind: 'text',
            text: 'Über die gesamte Zeit blieb 1789 eng an der Geschäftsführung. Beide entwarfen gemeinsam Konzepte, stimmten sie ab, arbeiteten sie in Workshops durch und passten sie an. 1789 achtete dabei darauf, dass alle Teile des Modells zusammenpassten.',
          },
        ],
      },
      {
        label: 'Das Ergebnis',
        blocks: [
          {
            kind: 'text',
            text: 'Heute arbeiten die 15 Firmen als eine Organisation, über alle früheren Firmengrenzen und Standorte hinweg. Nach innen funktioniert teccle wie ein Markt, nach außen spricht die Gruppe mit einer Stimme.',
          },
          {
            kind: 'list',
            items: [
              'Standortübergreifende Beratungsteams arbeiten nah am Kunden und tragen die Verantwortung für ihn.',
              'Über den internen Markt greifen sie auf Expertenteams zurück, die Themen in die Tiefe bearbeiten, und auf Teams für Run und Support.',
              'Klassische Führungsrollen sind in Teamrollen übersetzt, Teams entscheiden innerhalb gemeinsamer Regeln selbst.',
              'Die Führung ist mitgewachsen. Geschäftsbereiche und geregelte Verantwortlichkeiten halten die Gruppe steuerbar und entlasten das Top-Management.',
            ],
          },
          {
            kind: 'text',
            text: 'teccle hat seitdem weitere Firmen übernommen und integriert. Die Leserinnen und Leser der Fachzeitschrift IT-BUSINESS wählten Gründer und Geschäftsführer Sven Kalisch unter die „Top 100 Channel VIPs“. In derselben Zeit zeichnete Quest die teccle Group als „MSP Partner of the Year“ aus.',
          },
          {
            kind: 'quote',
            text: 'Alle von uns sind zur teccle Group gekommen, weil wir an die Grenzen unserer eigenen Unternehmen gestoßen sind, aber nicht als irgendeine Nummer in einem Konzern aufgehen wollten. Das teccle Operating Model gibt uns die Struktur, die wir brauchen, und die Flexibilität, die wir wollen.',
            author: 'Stefan Schröter',
            role: 'Geschäftsführer der etomer, teccle Group',
          },
        ],
      },
    ],
    transfer: [
      'Buy-and-Build-Plattformen von Private-Equity-Investoren, die aus Zukäufen ein Unternehmen machen wollen',
      'Holdings, deren Geschäftsführer aus übernommenen Firmen kommen und die Gruppe gemeinsam steuern sollen',
      'Firmenverbünde, die unter einer Marke auftreten und lokal verkaufen',
      'Professional-Services-Firmen mit vielen einzelnen Teams',
    ],
    faq: [
      {
        q: 'Wie wird aus einer Buy-and-Build-Plattform eines Private-Equity-Investors ein integriertes Unternehmen?',
        a: 'teccle setzte zuerst die Governance der Geschäftsführung auf und band die Geschäftsführer der übernommenen Firmen in die Steuerung ein. Aus gemeinsamen Designprinzipien entstand ein Referenzmodell, das vier Tochterfirmen im Alltag testeten, bevor es auf die Gruppe überging. Bis 15 Firmen als eine Organisation arbeiteten, vergingen rund drei Jahre.',
      },
      {
        q: 'Wie steuert eine Holding eine Gruppe aus vielen übernommenen Firmen?',
        a: 'Bei teccle legte die Holding-Geschäftsführung fest, welche Entscheidungen sie gemeinsam trifft und nach welchen Regeln, vom Konsens bis zur Delegation. Ein Gremium aus Holding und Tochterfirmen entschied über gruppenübergreifende Projekte, ein Programm-Forum stand allen Geschäftsführern offen.',
      },
      {
        q: 'Vollintegration oder Netzwerk: Was passt zu einer Gruppe von IT-Dienstleistern?',
        a: 'teccle hat beides verworfen. Eine Vollintegration stellt Standardisierung vor das individuelle Kundenproblem, ein loses Netzwerk kleiner Systemhäuser skaliert nicht. Im Operating Model von teccle arbeiten Beratungsteams nah am Kunden und greifen über einen internen Markt auf Expertenteams zurück. Nach außen spricht die Gruppe mit einer Stimme.',
      },
    ],
    related: ['verbindliche-entscheidungen', 'kohaerente-vision', 'skalierung-und-qualitaet'],
    close:
      'Jede Integration beginnt mit dem Gap zwischen der Vision einer Gruppe und der Arbeitsweise ihrer Firmen. Ein Erstgespräch klärt, wo dieser Gap liegt.',
    color: 'sage',
    featured: true,
    image: '/projects/teccle.jpg',
  },
  {
    slug: 'motivieren-und-entwickeln',
    client: 'WTS',
    sector: 'Steuerberatung / Professional Services',
    title: 'Motivieren und Entwickeln',
    tagline: 'Performance & Compensation als Organisationsfrage — nicht als HR-Thema.',
    tags: ['Performance', 'Compensation', 'Governance'],
    duration: '~12 Monate',
    scale: '1.700 Berater:innen, 13 Standorte',
    lead: 'Mary-Jane Bolten',
    gap: 'Mangelnde Transparenz bei Bewertungs- und Gehaltsregelungen erodierte Vertrauen. Führungskräfte kämpften mit Administrationsaufwand, HR mit Excel-Chaos — während das Unternehmen wuchs und die Systeme stagnierten.',
    shift: 'Über ein Jahr intensive Zusammenarbeit mit der HR-Leitung: Workshopdesign und Moderation auf Management- und Mitarbeitendenebene. Vorbereitung und begleitete Implementierung eines neuen Performance and Compensation Models.',
    result: 'Partnerschaftliche Beziehungen zwischen Führungskraft und Mitarbeitenden. Klare Karrierestufen, Gremienentscheidungen, schnellere Kommunikation. Überarbeitete Gesprächszyklen und Überstundenregelungen.',
    quote: {
      text: 'Besonders wertvoll war die Unterstützung beim Workshopdesign und der Moderation großer Gruppen.',
      author: 'Viola Krauss',
      role: 'Head of HR, WTS Deutschland',
    },
    color: 'neutral',
  },
  {
    slug: 'kohaerente-vision',
    client: 'METRO.digital',
    sector: 'Digital / Corporate',
    title: 'Kohärente Vision',
    tagline: 'Target Operating Model für eine Organisation im Übergang.',
    tags: ['Target Operating Model', 'Strategie', 'Selbstorganisation'],
    duration: '7 Monate',
    scale: '~2.000 Mitarbeitende',
    lead: 'Mary-Jane Bolten',
    gap: 'Trotz positiver Kulturveränderung stagnierten Produktivitätssteigerungen. Viele Initiativen zielten in unterschiedliche, teils widersprüchliche Richtungen. Führungsverantwortung war unklar — eine Organisation, die sich selbst im Weg stand.',
    shift: 'Entwicklung eines "Far Future Model" als zukunftsweisende Vision: kohärente Strukturen für Führung, Entscheidungsfindung, Budgetierung und Personalmanagement. Organisationsübergreifendes Team, evidenzbasiert durch Pilotphasen.',
    result: 'Ein integriertes Target Operating Model mit selbstorganisierten, kundenorientierten Teams und agilen Arbeitsweisen. Richtung gewonnen — ohne die Energie der laufenden Transformation zu bremsen.',
    color: 'terra',
  },
  {
    slug: 'skalierung-und-qualitaet',
    client: 'greyt',
    sector: 'Kreativagentur',
    title: 'Skalierung und Qualität durch Struktur',
    tagline: 'Wie eine Kreativagentur Wachstum und Eigenständigkeit zusammendachte.',
    tags: ['Wachstum', 'Operating Model', 'Selbstorganisation'],
    duration: '13 Monate',
    scale: '~40 Mitarbeitende',
    lead: 'Mary-Jane Bolten',
    gap: 'Schnelles Wachstum verschob den Fokus auf kurzfristige Aufgaben. Informelle Prozesse und breite Führungsspannen verhinderten Qualitätssicherung und Kompetenzentwicklung — die Organisation drohte, hinter ihren eigenen Ambitionen zurückzubleiben.',
    shift: '7 Monate Strategieentwicklung mit der Geschäftsführung, 6 Monate Implementierung mit den Mitarbeitenden. Einsatz des 1789 Board Games zur praktischen Erprobung neuer Arbeitsweisen — lernen durch Tun statt durch Folie.',
    result: 'Klare Organisationsstrategie mit Kunden- und Specialist-Teams. Organisches Wachstum nach dem "Zellteilung"-Prinzip. Gestärkte Selbstorganisation und echtes Mitarbeiter-Ownership.',
    color: 'sage',
  },
  {
    slug: 'verbindliche-entscheidungen',
    client: 'Medizin Gruppe',
    sector: 'Gesundheitswesen',
    title: 'Verbindliche Entscheidungen',
    tagline: 'Governance für einen Konzern mit 40 Tochterunternehmen.',
    tags: ['Governance', 'Top-Level', 'Dezentralität'],
    duration: '9 Monate',
    scale: '40+ Tochterunternehmen, ~8.000 Beschäftigte',
    lead: 'Mary-Jane Bolten',
    gap: 'Dezentrale Autonomie ermöglichte Agilität — verhinderte aber strategische Gesamtmaßnahmen. Die Balance zwischen unternehmerischer Freiheit und zentralen Entscheidungen war nicht strukturell gelöst, sondern wurde täglich neu ausgehandelt.',
    shift: 'Interviews und Workshops mit Geschäftsführern und Tochterunternehmen-Repräsentanten. Koordination verschiedener Perspektiven zu einem strukturierten Governance-Modell mit klassifizierten Verbindlichkeitsstufen.',
    result: 'Governance-Struktur mit klar klassifizierten Verbindlichkeitsstufen: bindend, gemeinsam, freiwillig. Implementierungsmechanismen wie Verrechnungspreise und Anreize für Early Adopter. Verbindlichkeit ohne Autonomieverlust.',
    color: 'ink',
  },
  {
    slug: 'entscheidungen-mit-strategischem-ausmass',
    client: 'Procter & Gamble',
    sector: 'Consumer Goods',
    title: 'Entscheidungen mit strategischem Ausmaß',
    tagline: 'Operating Model für eine Stabstelle, die alles koordiniert — aber sich selbst nicht.',
    tags: ['Operating Model', 'Führung', 'Governance'],
    duration: '2 Monate',
    scale: '7-köpfiges Führungsteam',
    lead: 'Patrick Breitenbach',
    gap: 'Nach einem Führungswechsel herrschten in der zentralen Stabstelle unklare Verantwortlichkeiten und Kompetenzen. Das Ergebnis: Zurückhaltung, Unsicherheit, Lähmung — ausgerechnet dort, wo strategische Impulse entstehen sollten.',
    shift: 'Zweimonatige intensive Zusammenarbeit mit dem siebenköpfigen Team. Interviews, Sparrings und der Einsatz des 1789 Board Games zur Visualisierung von Entscheidungen und Abhängigkeiten. Abschluss durch Transformations-Workshop.',
    result: 'Klar definierte individuelle und gemeinsame Verantwortlichkeiten. Transparente Kommunikationswege. Neuer operativer Führungspunkt für Entscheidungssicherheit — ein kleines Team, das wieder weiß, was es zu entscheiden hat.',
    color: 'neutral',
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export const featuredCases = cases.filter((c) => c.featured)
