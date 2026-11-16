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
  | {
      kind: 'image'
      src: string
      alt: string
      /** Zuschnitt auf der Seite — '3 / 4', '16 / 9', '21 / 9' … */
      ratio: string
      /** true: bricht beide Spalten als Band; sonst steht es in seiner Spalte */
      span?: boolean
    }

export type CaseSection = {
  /** Oberzeile über der Kapitelmarke, wo das Dokument eine zweite Ebene setzt
      ('Der Weg' über Strukturdiagnose, -entscheidung, -transformation) */
  over?: string
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
  meta?: {
    mandant?: string
    structure?: string
    scope?: string
    /** Wer beteiligt war — Zeile „Beteiligt" der Lesefassung */
    participants?: string
    /** Zeile „Leistungen" der Lesefassung */
    services?: string
    field?: string
  }
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
            kind: 'image',
            src: '/projects/wd40-matrix.jpg',
            alt: 'Eine Workshop-Wand aus Packpapier mit Karten auf den Achsen Impact und Effort; davor erläutert eine Teilnehmerin eine Karte.',
            ratio: '3 / 4',
          },
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
            kind: 'image',
            src: '/projects/wd40-pilot.jpg',
            alt: 'Das Pilotteam im Baumarkt vor einem Verkaufsdisplay mit WD-40-Dosen.',
            ratio: '21 / 9',
            span: true,
          },
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
            kind: 'image',
            src: '/projects/wd40-framework.jpg',
            alt: 'Präsentation im Besprechungsraum, auf zwei Bildschirmen die Folie „From Innovation Framework to Learning Identity“.',
            ratio: '16 / 9',
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
            kind: 'image',
            src: '/projects/teccle-vision.jpg',
            alt: 'Werkstattraum mit Zuhörenden; an der Wand das Plakat „Konkret: Die Vision.“, davor zwei Geschäftsführer im Gespräch.',
            ratio: '16 / 9',
            span: true,
          },
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
            kind: 'image',
            src: '/projects/teccle-potenziale.jpg',
            alt: 'Beschriftete Haftnotizen an einer Fensterscheibe, dahinter eine Baustelle mit Kränen.',
            ratio: '3 / 4',
          },
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
            kind: 'image',
            src: '/projects/teccle-team.jpg',
            alt: 'Drei Personen im Workshop, daneben eine Wand voller Haftnotizen.',
            ratio: '3 / 2',
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
    slug: 'steuerung-der-personalgewinnung',
    client: 'Branddirektion Frankfurt am Main',
    sector: 'Öffentliche Verwaltung, Gefahrenabwehr',
    title: 'Eine Steuerung für die Personalgewinnung',
    tagline:
      'Wie eine Berufsfeuerwehr herausfand, dass ihr Nachwuchsproblem am Weg zur Einstellung liegt.',
    tags: ['Governance Design', 'Target Operating Model'],
    duration: 'rund vier Monate',
    scale: 'rund 1.200 hauptamtlich Beschäftigte',
    lead: 'Mary-Jane Bolten, Serap Yılmaz-Dreger, Human Nagafi',
    meta: {
      mandant: 'Branddirektion Frankfurt am Main',
      scope:
        'Steuerung der Personalgewinnung · Einsatzdienst, von der Bewerbung bis zum Antritt der Ausbildung',
      participants:
        'Kernteam mit sechs Personen, Steuerungsgruppe Personal, betroffene Abteilungen wie Personal, Einsatzmittel und Ausbildung',
      services: 'Strukturdiagnose, Strukturentscheidung',
      field: 'Governance Design, Target Operating Model',
    },
    summary: {
      label: 'Auf einen Blick',
      text: 'Die Branddirektion Frankfurt am Main muss in den kommenden Jahren deutlich mehr Einsatzkräfte einstellen, und Bewerbungen gehen genug ein. In rund vier Monaten untersuchte 1789 Innovations mit der Berufsfeuerwehr, wo Bewerbende auf dem Weg zur Ausbildung verloren gehen. Die Branddirektion entschied sich für eine Zielarchitektur. Ein Prozesseigner steuert die Personalgewinnung über alle Abteilungen, Vereinbarungen regeln die Schnittstellen zu städtischen Diensten, und Daten zeigen, wo der Prozess hakt.',
    },
    sections: [
      {
        label: 'Die Strukturfrage',
        blocks: [
          {
            kind: 'text',
            text: 'Die Branddirektion Frankfurt am Main bekam genug Bewerbungen für den Einsatzdienst, und trotzdem blieben Ausbildungsplätze leer. Gleichzeitig sieht der Bedarfsentwicklungsplan deutlich mehr Einsatzkräfte vor, dazu kommen Ruhestand und Kündigungen. Die Verantwortung für den Weg von der Bewerbung bis zur Ausbildung lag verteilt auf mehrere Abteilungen und städtische Stellen. Im Strategieworkshop ließ sich das Ziel nicht in Jahresziele übersetzen, und auf die Frage nach der Gesamtverantwortung gab es keine eindeutige Antwort.',
          },
          {
            kind: 'text',
            text: 'Die Rechnung dahinter war unbequem. Bei gleicher Erfolgsquote hätten Personalverwaltung, Auswahlverfahren und medizinische Untersuchung rund das Dreifache leisten müssen, mit zehn bis zwölf Testrunden im Jahr statt drei bis vier. Mit den vorhandenen Kapazitäten war das nicht aufzufangen.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturdiagnose',
        blocks: [
          {
            kind: 'text',
            text: 'Der Groschen fiel im Gespräch mit der Kraft, die die Kommunikation mit Bewerbenden führt, und bei der Auswertung der Daten. Ändern sich Anforderungen, bekommt das niemand mit. Jede Stelle in der Kette ist überlastet, aber nirgends taucht das als Verantwortung auf. Die Anforderungen werden nicht neu kommuniziert, und der Prozess passt sich nicht an.',
          },
          {
            kind: 'text',
            text: 'Die Strukturdiagnose begann mit einem eintägigen Strategieworkshop der Führung. Danach prüfte 1789 mit der Branddirektion 29 Hypothesen zu Struktur, Prozess und Sicht der Bewerbenden. Grundlage waren zwölf Interviews mit Bewerbenden, Auszubildenden, internen Stellen und der medizinischen Untersuchung. Dazu kamen die Beobachtung eines laufenden Auswahlverfahrens mit acht Kurzinterviews und erstmals vollständige Daten einer Ausschreibung von der Bewerbung bis zur Einstellung.',
          },
          {
            kind: 'text',
            text: 'Im Auswahlverfahren zeigte sich, dass Bewerbende Anforderungen zustimmen, ohne sich ihren Alltag vorstellen zu können. Eine Dysfunktionslandkarte bündelte die Befunde an drei Stellen. Sie liegen beim Eingang der Bewerbungen, in der Auswahl und an den Schnittstellen zu städtischen Diensten wie dem Amtsärztlichen Dienst. Das System funktionierte, weil Einzelne informell koordinierten und ausglichen. Mehr Bewerbungen hätten genau diese Menschen weiter belastet.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturentscheidung',
        blocks: [
          {
            kind: 'text',
            text: 'Aus der Diagnose folgte ein Grundsatz: erst die Struktur, dann der Prozess. Die Zielarchitektur legt keine neuen Prozessschritte fest. Sie schafft die Bedingungen, unter denen sich Abläufe ändern können. Die Branddirektion entschied sich für einen Prozesseigner als Einzelperson und verwarf ein Gremium, weil es die Zurechenbarkeit verwässert hätte.',
          },
          {
            kind: 'text',
            text: 'Früh stand die Frage im Raum, was es für die Weisung bedeutet, wenn eine Person den ganzen Prozess verantwortet. Die Antwort trennt Ablauf und Aufbau. Der Prozesseigner entscheidet fachlich über den Prozess, die disziplinarische Führung bleibt in den Abteilungen. Ein neues Gremium entstand dabei nicht, die bestehende Steuerungsgruppe Personal übernimmt Beauftragung und Rechenschaft.',
          },
          {
            kind: 'text',
            text: 'Die Architektur entstand in Sparrings und Entscheidungsrunden mit der Führung. Im Validierungsworkshop prüfte das Kernteam jede Ebene und zeichnete gemeinsam die Roadmap, mit einem Träger für jeden Schritt.',
          },
        ],
      },
      {
        label: 'Die neue Ordnung',
        blocks: [
          {
            kind: 'text',
            text: 'Die Branddirektion Frankfurt am Main steuert ihre Personalgewinnung über eine Zielarchitektur in drei Ebenen.',
          },
          {
            kind: 'list',
            items: [
              'Ein Prozesseigner verantwortet die Personalgewinnung von der Bewerbung bis zum Antritt der Ausbildung, mit fachlichem Mandat und ohne disziplinarische Weisung.',
              'In der Regelkommunikation entscheidet der Prozesseigner, Akademie, Personalverwaltung und weitere Stellen beraten.',
              'Die Steuerungsgruppe Personal beauftragt den Prozesseigner, nimmt Rechenschaft ab und entscheidet auf seine Vorlage über Änderungen an der Struktur.',
              'Vereinbarungen zu Durchlaufzeiten und feste Abstimmungsrunden verbinden die Branddirektion mit Amtsärztlichem Dienst, Arbeitsmedizin und Personalverwaltung.',
              'Kennzahlen zu Ergebnissen und Rückmeldungen aus der Ausbildung zeigen, ob die Auswahl die Richtigen findet.',
            ],
          },
          {
            kind: 'text',
            text: 'Die Governance-Struktur hat die Branddirektion mit einem Team von Beteiligten vereinbart. Schon die Ankündigung der Rolle wirkte: Informationen laufen gebündelt zusammen, und Entscheidungen werden mit Blick auf die ganze Kette getroffen.',
          },
        ],
      },
    ],
    transfer: [
      'Behörden und Berufsfeuerwehren, die Nachwuchs für Ausbildungsberufe im öffentlichen Dienst gewinnen müssen',
      'Organisationen, deren Personalgewinnung über mehrere Abteilungen und externe Stellen läuft, ohne dass jemand den ganzen Prozess verantwortet',
      'Verwaltungen, die eine politische Zielvorgabe in steuerbare Jahresziele übersetzen müssen',
    ],
    faq: [
      {
        q: 'Warum bleiben Ausbildungsplätze unbesetzt, obwohl genug Bewerbungen eingehen?',
        a: 'Bei der Branddirektion Frankfurt am Main gingen Bewerbende an mehreren Stellen zwischen Bewerbung und Ausbildung verloren, und niemand verantwortete den Prozess als Ganzes. Die Strukturdiagnose zeigte, dass sich die Verluste beim Eingang der Bewerbungen, in der Auswahl und an den Schnittstellen zu städtischen Diensten bündeln.',
      },
      {
        q: 'Reicht es, mehr Bewerbungen zu gewinnen?',
        a: 'Bei gleicher Erfolgsquote hätte die Branddirektion Frankfurt am Main rund dreimal so viele Bewerbungen bearbeiten müssen. Personalverwaltung, Auswahlverfahren und medizinische Untersuchung hätten diese Menge mit den vorhandenen Kapazitäten nicht bewältigt.',
      },
      {
        q: 'Was lässt sich steuern, wenn Tests und Untersuchungen vorgeschrieben sind?',
        a: 'Zahl und Art der Tests und ärztlichen Untersuchungen sind bei der Branddirektion Frankfurt am Main vorgegeben, das Verfahren bleibt lang. Die Zielarchitektur setzt deshalb bei Verantwortung, Schnittstellen und Daten an. Ein Prozesseigner steuert den ganzen Prozess, und Vereinbarungen mit städtischen Diensten regeln Durchlaufzeiten.',
      },
    ],
    related: [
      'verbindliche-entscheidungen',
      'innovationskraft-durch-zusammenarbeit',
      'motivieren-und-entwickeln',
    ],
    close:
      'Wo Bewerbungen eingehen und Stellen trotzdem leer bleiben, klärt eine Strukturdiagnose, an welcher Stelle der Weg abreißt.',
    color: 'neutral',
  },
  {
    slug: 'motivieren-und-entwickeln',
    client: 'WTS',
    sector: 'Steuerberatung und Financial Advisory',
    title: 'Motivieren und Entwickeln',
    headline: 'Ein Vergütungsmodell zwischen individueller Leistung und kollektivem Erfolg',
    tagline:
      'Wie eine Partnerorganisation herausfand, welche Regeln für Karriere und Vergütung wirklich gelten müssen.',
    tags: ['Governance Design', 'Target Operating Model'],
    duration: 'rund ein Jahr bis zur Verabschiedung durch den Partnerkreis',
    scale: 'rund 1.300 Mitarbeitende in Deutschland',
    lead: 'Mary-Jane Bolten',
    meta: {
      mandant: 'WTS, Deutschland',
      structure: 'Partnerorganisation mit den Bereichen Tax, Digital und Advisory',
      scope: 'Bewertung und Vergütung · alle Mitarbeitenden außer Partnern',
      participants:
        'Projektteam, Führungskreis, Partnerkreis, Mitarbeitende in Interviews und User Tests',
      services: 'Strukturdiagnose, Strukturentscheidung',
      field: 'Governance Design, Target Operating Model',
    },
    summary: {
      label: 'Auf einen Blick',
      text: 'WTS ist eine Steuerberatung und Financial Advisory mit Hauptsitz in München. Für die rund 1.300 Mitarbeitenden in Deutschland wurden Ziele und Bewertung häufig informell gehandhabt, Beförderungen und Gehaltserhöhungen waren nicht für alle nachvollziehbar - und gleichzeitig für die Spitze schwer steuerbar. Die Umstellung auf Workday löste den Schritt zum Umdenken aus. In einer Strukturdiagnose klärte 1789 Innovations mit WTS, wo der Umbau ansetzen musste. Daraus entstand in der Strukturentscheidung ein Performance & Compensation Framework für alle Karrierestufen unterhalb des Partners, das der Partnerkreis nach rund einem Jahr verabschiedete. Seitdem entscheiden Gremien über Beförderungen und Gehaltserhöhungen, und die erste Welle für die drei unteren Karrierestufen hat WTS selbst umgesetzt.',
    },
    sections: [
      {
        label: 'Die Strukturfrage',
        blocks: [
          {
            kind: 'text',
            text: 'In der Partnerorganisation WTS wurden Ziele und Bewertung informell gehandhabt. Ziele wurden zwar gesetzt, änderten sich aber unterjährig häufig, und viele Mitarbeitende sahen sie nach dem Bewertungsgespräch nicht mehr an. Wie Beförderungen und Gehaltserhöhungen zustande kamen, war für Mitarbeitende kaum nachvollziehbar. Für HR war der Prozess sehr aufwändig, die Verwaltung arbeitete mit vielen einzelnen Excel-Tabellen.',
          },
          {
            kind: 'quote',
            text: 'So ein Framework kann nie perfekt sein und wird nie allen gerecht. Aber unser bisheriges Framework hatte so gravierende Lücken, dass es sich gelohnt hat, genau an diesen Schmerzpunkten anzusetzen.',
            author: 'Viola Krauss',
            role: 'Head of HR, WTS Deutschland',
            photo: '/testimonials/viola-krauss.jpg',
          },
          {
            kind: 'text',
            text: 'Die Einführung des HR-Systems Workday gab WTS den Anlass, Bewertung, Karriere und Vergütung für alle Bereiche neu aufzusetzen. Tax, Digital und Advisory arbeiten mit unterschiedlichen Geschäftsmodellen und Teamgrößen. Unter den vielen Partnerinnen und Partnern gab es viele Vorstellungen davon, was gelten muss.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturdiagnose',
        blocks: [
          {
            kind: 'text',
            text: 'Zuerst klärte WTS mit 1789, wie die einzelnen Bereiche Wert schaffen. In Interviews beschrieben Vorstand, Partnerinnen und Partner sowie von ihnen nominierte Mitarbeitende ihre Geschäftsmodelle, vom Projektgeschäft bis zum Business Partnering. Ein Fragebogen an die Partner ergänzte das Bild.',
          },
          {
            kind: 'text',
            text: 'Mit dem Projektteam benannte WTS daraus das Kernproblem. Mitarbeitende sind der wichtigste Wachstumsfaktor von WTS, deshalb entscheiden Motivation, Anerkennung und Entwicklung über Gewinnung und Bindung. Ob Mitarbeitende ihren Beitrag und ihre Entwicklung erkennen, hängt vor allem an der Bewertung.',
          },
          {
            kind: 'text',
            text: 'Die Bewertung entstand bei WTS bisher rückblickend und von oben, und Motivation wuchs eher trotz des Systems. Mit diesem Befund legte der Führungskreis fest, das Vergütungssystem insgesamt auf den Prüfstand zu stellen. WTS musste dabei viele Entscheider zu einem Konsens führen, ohne das Ergebnis in Kompromissen zu verwässern. Gleichzeitig war Arbeitskraft im akuten Fachkräftemangel der knappste Faktor für das Wachstum von WTS und das Thema entsprechend dringend.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturentscheidung',
        blocks: [
          {
            kind: 'text',
            text: 'Um zu klären, was in der Partnerschaft wirklich gelten muss, legte 1789 dem Führungskreis ein Radikalmodell vor. Es war zum Widersprechen gebaut und sollte ausloten, wo harte Grenzen liegen.',
          },
          {
            kind: 'text',
            text: 'An dem Modell benannte der Führungskreis seine Grenzen, daraus entstanden die Leitplanken des Frameworks. Die Rolle der Führungskraft sollte als Coach und Bewerter stark bleiben. Für die drei unteren Karrierestufen sollte der zielgebundene Bonus entfallen, um mehr auf Entwicklung zu setzen, ab Manager sollten Mitarbeitende stärker am Erfolg beteiligt werden.',
          },
          {
            kind: 'text',
            text: 'Das Konzept durchlief drei Iterationen mit einem Projektteam aus Vorstand, Partnern und HR. Zwischen den Iterationen prüften 18 Mitarbeitende den Entwurf in User Tests.',
          },
          {
            kind: 'text',
            text: 'Ein Expert Track für Fachleute mit weniger Personalverantwortung klang im Projektteam sinnvoll. Die Teilnehmenden der User Tests sahen darin ein Abstellgleis und befürchteten Verwirrung bei Mandanten. Die Debatte machte sichtbar, was bei WTS Status bedeutet und wo sich Status innerhalb der Organisation in Anerkennung außerhalb übersetzt.',
          },
          {
            kind: 'text',
            text: 'Im Leadership Workshop gingen Vorstand und Managing Partner das Framework an fünf Stationen durch, danach verabschiedete es der Partnerkreis. 1789 moderierte die Workshops mit Führungskreis und Mitarbeitenden und bereitete mit einem Umsetzungsplan die Bedingungen für die Umsetzung mit vor. Umgesetzt hat WTS das Framework danach in Wellen selbst.',
          },
        ],
      },
      {
        label: 'Die neue Ordnung',
        blocks: [
          {
            kind: 'text',
            text: 'Das Framework gilt für alle Karrierestufen unterhalb der Partner und unterscheidet Young Professionals und Experienced. Die erste Welle für Professional, Consultant und Senior Consultant hat das WTS-Team selbst umgesetzt.',
          },
          {
            kind: 'list',
            items: [
              'Für Young Professionals verschiebt sich der Schwerpunkt von individuellen Zielen hin zu Entwicklung und gemeinsamem Erfolg.',
              'Die Gehaltsfindung folgt einer transparenten, marktorientierten Logik.',
              'Über Beförderungen und Gehaltsentwicklung wird gemeinsam statt einzeln entschieden. Das macht Entscheidungen nachvollziehbarer und schneller.',
              'Karriereentwicklung ist ein laufender Dialog zwischen Führungskraft und Mitarbeitenden, entlang klar beschriebener Stufen.',
              'Für erfahrene Mitarbeitende eröffnet das Framework unterschiedliche Karriere-Schwerpunkte mit klaren Erwartungen.',
            ],
          },
          {
            kind: 'quote',
            text: 'Besonders wertvoll war für uns die Unterstützung seitens 1789 beim Workshopdesign und der Moderation großer Gruppen, einerseits im Managementteam aber auch mit ausgewählten Mitarbeitenden. So ist es uns gelungen, unterschiedliche Zielgruppen aktiv in den Prozess einzubinden. Außerdem war die Zusammenarbeit geprägt von großem Vertrauen und hat zu jedem Zeitpunkt Spaß gemacht.',
            author: 'Viola Krauss',
            role: 'Head of HR, WTS Deutschland',
          },
        ],
      },
    ],
    transfer: [
      'Partnerschaftlich geführte Beratungs-, Steuerberatungs- und Prüfungsgesellschaften, in denen viele Partner unterschiedliche Geschäftsmodelle verantworten.',
      'Organisationen, die ein neues HR-System einführen und Bewertung, Karriere und Vergütung vorher neu ordnen wollen.',
      'Unternehmen, die verstehen, wie die Supportprozesse auf die Kernwertschöpfung wirken.',
    ],
    faq: [
      {
        q: 'Wie findet eine Partnerorganisation heraus, welche Regeln für die Vergütung wirklich gelten müssen?',
        a: 'WTS arbeitete dafür in der Strukturentscheidung mit einem Radikalmodell, das 1789 vorlegte, um auszuloten, wo harte Grenzen liegen. An diesem Prüfstein benannte der Führungskreis seine Grenzen, aus denen die Leitplanken des Frameworks entstanden. Das Framework durchlief danach drei Iterationen und wurde vom Partnerkreis verabschiedet.',
      },
      {
        q: 'Wie richtet man Vergütung stärker auf Entwicklung als auf Zielerreichung aus?',
        a: 'Indem man zuerst klärt, woran Mitarbeitende ihren Beitrag und ihre Entwicklung erkennen. Bei WTS hing das vor allem an der Bewertung. Deshalb setzt das Framework in den frühen Karrierestufen weniger auf individuelle Ziele und mehr auf Entwicklungsgespräche, Feedback und Erfolgsbeteiligung.',
      },
      {
        q: 'Wie bindet man Mitarbeitende in die Gestaltung eines Vergütungssystems ein?',
        a: 'Bei WTS prüften 18 Mitarbeitende den Entwurf zwischen den Iterationen in User Tests. Dabei kippten Annahmen, die im Projektteam schlüssig wirkten: Ein eigener Karrierepfad für Fachleute galt den Teilnehmenden als Abstellgleis. Die Debatte machte sichtbar, was Status in der Organisation bedeutet.',
      },
    ],
    related: ['integration', 'innovationskraft-durch-zusammenarbeit'],
    close:
      'Wo viele Partner mitentscheiden, klärt die Strukturentscheidung, was für alle gelten muss.',
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
    sector: 'Kreativagentur und Produktentwicklung',
    title: 'Skalierung und Qualität durch unternehmerische Teams',
    tagline:
      'Wie eine junge Kreativagentur lernte, in Teams zu wachsen, ohne dass Geschäft und Qualität an den Gründern hängen.',
    tags: ['Organizational Strategy', 'Governance Design', 'Target Operating Model'],
    duration: '12 Monate',
    scale: 'rund 40 Mitarbeitende, Standorte Trier und Köln',
    lead: 'Mary-Jane Bolten',
    meta: {
      mandant: 'greyt',
      scope: 'Operating Model · gesamte Agentur',
      participants: 'Gründer und Geschäftsführung, alle Mitarbeitenden',
      services: 'Strukturdiagnose, Strukturentscheidung, Strukturtransformation',
      field: 'Organizational Strategy, Governance Design, Target Operating Model',
    },
    summary: {
      label: 'Auf einen Blick',
      text: 'greyt, Kreativagentur und Produktentwickler mit Offices in Trier und Köln, hatte rund 40 Mitarbeitende. Die Agentur wuchs schnell, doch Kundenverantwortung und Qualität hingen an den Gründern. Innerhalb eines Jahres klärte greyt mit 1789 Innovations, wofür die Agentur stehen will, und baute ein Operating Model aus unternehmerischen Teams auf. Heute verantworten Business Teams ihre Kunden selbst, Specialist Teams bündeln Expertise, und die Gründer steuern als Regie die Strategie.',
    },
    sections: [
      {
        label: 'Die Strukturfrage',
        blocks: [
          {
            kind: 'text',
            text: 'Die Agentur war schnell gewachsen, doch Kundenbeziehungen, Prioritäten und der letzte Blick auf die Qualität lagen bei den Gründern. Aufgaben wurden über alle verteilt, Prozesse liefen informell, und die Führungsspanne der Geschäftsführung war breit - und wuchs täglich. Die Aufmerksamkeit galt eher kurzfristigen Aufgaben als langfristigen Zielen.',
          },
          {
            kind: 'text',
            text: 'Die Gründer wollten weiter wachsen und ihren Anspruch an Exzellenz halten. Wachstum bedeutete für greyt vor allem viele junge Kolleginnen und Kollegen, die gut eingebunden und ausgebildet werden müssen. Damit stellte sich die Frage, wie die Agentur Nähe im Alltag schafft und trotzdem skaliert. Ohne neue Ordnung blieben Wachstum und Kompetenzaufbau gebremst, und die Gründer blieben im operativen Geschäft gebunden.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturdiagnose',
        blocks: [
          {
            kind: 'text',
            text: 'Zuerst ging es darum, wofür greyt stehen will. 1789 führte Gespräche mit den Gesellschaftern, analysierte Markt, Wettbewerb und Arbeitsmarkt und holte im Kick-off-Workshop alle Mitarbeitenden dazu. Dort beschrieben sie, wie die Arbeit heute läuft und wo sie hakt: kurzfristige Planung, unklare Briefings, ständige Umpriorisierung. Der Austausch sollte auch zeigen, welche Stärken greyt schon hatte und weiterentwickeln konnte.',
          },
          {
            kind: 'text',
            text: 'Hieraus verhandelten 1789 und die Gründer daraus drei Säulen für greyt: Skalierung, Kundenorientierung und Exzellenz. Als Befund hielten Gründer und 1789 fest, dass greyt Strukturen braucht, die Nähe innerhalb eines Teams und zu Kunden schaffen und über die Zahl der Teams skalieren. Ein neues Target Operating Model und eine angepasste Governance sollte zeigen, wie Zusammenarbeit organisiert wird.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturentscheidung',
        blocks: [
          {
            kind: 'text',
            text: 'Das Pool-Modell mit festen Themen-Teams ist in Agenturen verbreitet und bietet Abwechslung, bringt aber mit jeder neuen Stelle mehr Hierarchie und Koordinationsaufwand. 1789 entwickelte mit greyt eine Alternative: Im Team-Modell betreut ein festes Business Team seine Kunden selbst, und die Agentur wächst über neue Teams. Den Ausschlag gab die Nähe zum Auftrag für alle Erfahrungsstufen. Kapazitätssteuerung, die Entwicklung der Mitarbeitenden und der Unternehmergeist ließen sich in festen Teams besser verbinden. Tiefe Expertise bündeln eigene Specialist Teams.',
          },
          {
            kind: 'text',
            text: 'Vor der Transformation spielten freiwillige Mitarbeitende in einem Early-Adopter-Workshop typische Arbeitsabläufe auf einem Spielbrett durch, dem 1789 Board Game. Damit konnten Herausforderungen frühzeitig antizipiert werden - und gleichzeitig konnten die Workshopteilnehmer:innen das Modell früh kennenlernen und weiterentwickeln. Strukturdiagnose und Strukturentscheidung dauerten zusammen gut sieben Monate.',
          },
        ],
      },
      {
        over: 'Der Weg',
        label: 'Strukturtransformation',
        blocks: [
          {
            kind: 'text',
            text: 'In den folgenden sechs Monaten brachte greyt das Modell mit den Mitarbeitenden in den Alltag. Die Gründer ordneten zuerst ihre eigene Rolle und legten als Regie Aufgaben, Entscheidungsbefugnisse und den Strategieprozess fest. Danach klärten Regie und 1789 das Staffing: wer welche Rolle übernimmt, welche Stellen fehlen und wie neue Kolleginnen und Kollegen ankommen.',
          },
          {
            kind: 'text',
            text: 'In einem Team-Workshop in Trier lernten alle Mitarbeitenden das Modell und ihre Teams kennen. Projekte und Kundenbeziehungen gingen schrittweise an die Teams über. In Onboardings vor Ort erarbeitete jedes Team sein eigenes Geschäftsmodell, vom Leistungsversprechen bis zu den Kunden, und legte seinen Meeting-Rhythmus fest. Die Onboardings bereiteten vor allem die Team Leads darauf vor, ihre Teams danach eigenständig zu führen, mit Coaching durch die Geschäftsführung.',
          },
        ],
      },
      {
        label: 'Die neue Ordnung',
        blocks: [
          {
            kind: 'text',
            text: 'Heute arbeitet greyt in unternehmerischen Teams, die wie kleine Agenturen funktionieren.',
          },
          {
            kind: 'list',
            items: [
              'Business Teams verantworten ihre Kunden vom Briefing bis zur Wiederbeauftragung: Impact für Kampagnen und Kanäle, Ideas für Beratung und Geschäftsfeldentwicklung, Tech für digitale Lösungen. Zum Start arbeiteten drei Impact Teams und ein Ideas Team.',
              'Drei Specialist Teams bündeln tiefe Expertise und arbeiten den Business Teams auf Absprache zu.',
              'Jede Person gehört zu genau einem Team mit vier bis neun, höchstens zwölf Personen. Jedes Business Team betreut mehr als einen Kunden, und große Kunden werden von zwei Teams gemeinsam als Cluster unter einem Account Lead betreut.',
              'In den Teams sind die Rollen geklärt. Team Leads koordinieren Planung und Auslastung, Project Leads verantworten ein Projekt samt Kundenkontakt, Account Leads die Kundenbeziehung.',
              'Die Regie aus Gründern und COO verantwortet Strategie und Governance. Einmal pro Woche planen Team Leads und Regie gemeinsam die Kapazität.',
            ],
          },
          {
            kind: 'text',
            text: 'Neue Mitarbeitende finden über ihr Team schnell ihre Rolle, und der operative Kundenkontakt ist gestärkt. Nach den Onboardings liefen die Teams eigenständig, begleitet durch Coaching der Geschäftsführung. greyt ist seitdem in diesen Strukturen weitergewachsen, und neue Teams entstehen nach dem Prinzip der Zellteilung.',
          },
          {
            kind: 'quote',
            text: 'Gemeinsam mit 1789 haben wir, angepasst an unsere junge Kultur und Leistungsorientierung, ein Operating Model geschaffen, unbeeinflusst von Erfahrungen in leistungsbeschneidenden Strukturen anderer Unternehmen. Zentral war für uns, die Verantwortungsfähigkeit der Mitarbeiter zu erhöhen, um ihre Schaffenskräfte zu fördern, was 1789 in der ‚Selbstorganisierenden Organisation‘ realisieren konnte.',
            author: 'Henrik Ekstrand',
            role: 'Gründer und Geschäftsführer, greyt',
            photo: '/testimonials/henrik-ekstrand.jpeg',
          },
        ],
      },
    ],
    transfer: [
      'Gründergeführte Agenturen und Beratungen, deren Qualität und Kundenbeziehungen an wenigen Köpfen hängen.',
      'Dienstleister, die mit vielen Berufseinsteigern wachsen und Ausbildung mit Kundennähe verbinden müssen.',
      'Agenturen, die zwischen Pool-Organisation und festen Kundenteams entscheiden.',
    ],
    faq: [
      {
        q: 'Wie wächst eine Agentur, ohne dass die Qualität an den Gründern hängt?',
        a: 'greyt hat dafür unternehmerische Teams gebildet, die ihre Kunden vom Briefing bis zur Wiederbeauftragung selbst verantworten. Rollen wie Team Lead, Project Lead und Account Lead regeln, wer plant, wer ein Projekt führt und wer die Kundenbeziehung hält. Die Gründer steuern als Regie Strategie und Governance.',
      },
      {
        q: 'Pool-Modell oder feste Kundenteams: Was passt zu einer wachsenden Agentur?',
        a: 'Das Pool-Modell mit festen Themen-Teams ist in Agenturen verbreitet, bringt aber mit jeder neuen Stelle mehr Koordination und Hierarchie. greyt entschied sich für feste Kundenteams, weil sie allen Erfahrungsstufen Nähe zum Auftrag geben und die Agentur über neue Teams wachsen kann. Tiefe Expertise bündeln bei greyt eigene Specialist Teams.',
      },
      {
        q: 'Wie lange dauert ein neues Operating Model für eine Agentur mit rund 40 Mitarbeitenden?',
        a: 'Bei greyt dauerten Strukturdiagnose und Strukturentscheidung zusammen gut sieben Monate mit der Geschäftsführung. Die Strukturtransformation mit allen Mitarbeitenden brauchte weitere sechs Monate. Danach liefen die Teams eigenständig, begleitet durch Coaching der Geschäftsführung.',
      },
    ],
    related: ['integration'],
    close:
      'Wo Wachstum an den Gründern hängt, klärt eine Strukturdiagnose, welche Ordnung trägt.',
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
