# CLAUDE.md — 1789 Website (Brutalist / Dark Horse)

Verbindliche Referenz für alle KI-Assistenten in diesem Repo.

---

## 1. Was das hier ist

Ein **Dark-Horse-Redesign**: dieselben Inhalte wie die Kundenversion, aber ein
komplett neu geschriebenes Design-System im brutalistischen Stil.
Das Repo ist eigenständig: eigenes Remote
(`github.com/patrickkenzler/1789-website-brutal`), keine Verbindung zum
Kundenprojekt. Die vollständige Original-Historie liegt als Bundle unter
`../../1789_Website_ORIGINAL-history.bundle`.

**Stack:** Next.js 16 (App Router), React 19, TypeScript. **Kein Tailwind.**
**Dev:** `npm run dev` · **Build:** `npm run build` (statischer Export nach `out/`)
**basePath:** aus `NEXT_PUBLIC_BASE_PATH`, in Betrieb `/1789-website-brutal` —
lokal also `http://localhost:3000/1789-website-brutal/`
**Live:** https://patrickkenzler.github.io/1789-website-brutal/ (Branch `main`,
Deploy per GitHub Action; `design/elevate` ist der Arbeitsbranch)

---

## 2. Design-System

**Die maßgebliche Spezifikation ist die Seite `/styleguide`** — acht Kapitel,
die die Bausteine live aus dem echten CSS zeigen. `npm run styleguide:pdf`
druckt sie nach `public/1789-designsystem.pdf`. Kurzfassung:

- Archetyp: **Swiss Industrial Print** (helles Substrat), **ausschließlich Monospace**
- Ein Substrat (`--paper` #DDE5E3). Ein Akzent **je Grund**: Aubergine
  (`--red` #5D2A42) auf hell, Molten Orange (`--orange` #F14800) auf dunkel,
  Electric Aqua (`--accent-blue` #00E5FF) nur für die AI-Grafiken.
- Vier Gründe: `.slab` hell, `.slab-invert` dunkel, `.slab-orange` (einmal je
  Seite), `.slab-red` (nur die Schluss-CTA). Dunkel eröffnet ein Kapitel,
  hell trägt das Lesen.
- Zwei Schriften: **Martian Mono** (Makro, `.d0`–`.d4`), **JetBrains Mono** (alles andere)
- Keine Radien (global per Reset erzwungen), keine Schatten, keine Verläufe
- Kompartimente entstehen durch **Linien**, nicht durch Abstände → `.hairgrid`, `.box`, `hr`
- Eine Linie zeichnet in der Farbe, die ihr Grund führt. `--ink` und `--stock`
  sind derselbe Wert (#11151C), eine Ink-Linie auf dunklem Grund misst also
  1.00:1. Gliedernde Linien (`.strip`, `.statement`, `hr`) nehmen auf dunkel
  `--paper`, auf Aubergine `--red-ink`; Kompartimentkanten (`.box`, `.ruled`,
  `.plate` ohne Bild) bleiben bei den gedämpften Werten #2C333B / #3A424B.
- Bewegung: ein Auftritt (Hero), Rückmeldung in 80 ms, eine Atmosphäre.
  **Keine Scroll-Reveals.**

Das gesamte CSS liegt in **einer** Datei: `src/app/globals.css` (Tokens oben im
`:root`). Es gibt keine CSS-Module, keine zweite Stylesheet-Ebene.

### Live-Spezifikation
`/styleguide` rendert das System als auditierbares Dokument (nicht in der Nav
verlinkt). Dieselbe Seite ist die Quelle des PDFs:

```
npm run build          # Export nach out/
npm run styleguide:pdf # druckt /styleguide nach public/1789-designsystem.pdf
npm run build          # damit das PDF mit ausgeliefert wird
```

Das Skript steuert Chrome über dessen Debug-Protokoll und wartet auf
`document.fonts.ready` — ohne das druckt Chrome in Ersatzschriften.

---

## 3. Struktur

```
src/app/         Routen (alle Server Components, statisch exportierbar)
src/components/  ui.tsx (Primitives), Wordmark, LegalPage, organisms/{Header,Footer}
src/data/        SÄMTLICHE Texte — site, approach, services, team, labor, legal, cases
```

**Seiten importieren Inhalte, sie enthalten keine.** Fehlt ein Text im Datenlayer,
kommt er zuerst dorthin.

Cases haben zwei Tiefen. Die kurze Fassung trägt `gap` / `shift` / `result`,
die Lesefassung trägt `sections` — Kapitel aus Blöcken (Text, Liste, Zitat,
Link, Bild) in der Reihenfolge des Quelldokuments, dazu `summary`, `transfer`, `faq`,
`related` und `close`. `src/app/projekte/[slug]/page.tsx` rendert, was ein Case
hat. Eine Lesefassung wird **verbatim** übertragen, auch wenn sie Angaben im
Bestand korrigiert — sie ist die neuere, abgestimmte Fassung.

Die Grundfolge je Seite (Stand nach dem Durchgang): Start `D L O D L D L A`,
Ansatz `L D L D L L | L L | L A` (`|` = Warnband), Case-Lesefassung
`L L D L D L O L L A`, Labor `L L D A`, Leistungen `L D O A`, Cases `L D A`,
Wir `L L D`, Kontakt `L D L`. Nie mehr als zwei helle in Folge, nie zwei
dunkle nebeneinander, höchstens ein Orange je Seite.

Wo eine Folge gleichrangiger Kapitel den Schnitt braucht (die fünf Phasen im
Ansatz), trägt ihn ein Trenner, nicht ein Grundwechsel: eine Phase dunkel zu
setzen würde behaupten, sie wiege schwerer. `Hazard` ist dafür da.

Der Mandantenname steht groß auf dem Cover, nicht als Schildchen in der Ecke
— derselbe Schriftzug wie auf der Platte ohne Bild (`.plate-slug`), über dem
Bild in `--paper` (`.plate-slug-over`), demselben Wert wie der Kacheltitel
darunter. Reines Weiß wäre kontrastreicher, wäre aber der einzige Wert
außerhalb der Palette und stünde eine Stufe über dem Titel, der die Kachel
führt.

Texturen sind in Ink gezeichnet und brauchen auf dunklem Grund ihren eigenen
Wert — `.barcode` und `.hazard` haben ihn jetzt (#AEB8B5, wie die
ASCII-Zeichnungen). Dasselbe gilt für Haarlinien je Grund: hell `--ink-20`,
dunkel `#2C333B`, orange `#C13D06`, alle bei rund 1.44:1.

Die Leistungsseite trägt die Gründe hell · dunkel · orange · aubergine: Kopf
als Kopfpaar (Aussage links, Vorspann rechts), dann das Mandat auf dunklem
Grund, dann die drei Datenblätter auf der einen lauten Fläche der Seite. Die Seite trägt
bewusst keine Zeichnung: zwei Anläufe (eine Platte im Kopf, dann je eine im
Datenblatt) hat Patrick verworfen, sie fügten nichts hinzu. Wer es erneut
versucht, findet den Generator im Commit 9949d29.

Falls doch wieder eine ASCII-Zeichnung gebraucht wird: `.phase-art` ist für
kleine Phasenzellen gemacht (5/4 bei einem 44×16-Raster, Decke bei 12px).
Darin steht eine größere Platte auf 44% ihrer Fläche und wirkt schwach — sie
braucht eine eigene Klasse mit Container und ohne diese Decke.

`src/data/services.ts` trägt die Leistungen als `SERVICES_INTRO` (Seitenkopf und
Mandatsabsatz) und `SERVICES`. Jede Leistung führt den Namen zweigeteilt
(`titleThin` dünn, `titleBold` voll, gestapelt gesetzt), dazu Unterzeile, Text,
`results`, `endpoint`, `fit`, `frame` und `cases` — Case-Slugs mit dem Label aus
dem Dokument. Das Datenblatt der Cases kennt zusätzlich `meta.group` für die
Zeile „Konzern".

Der Spaltensatz hängt an der Menge Prosa: ein Kapitel mit höchstens zwei
Absätzen läuft einspaltig im Lesemaß (`.doc-body-flow`), ab drei Absätzen
zweispaltig. Bild, Aufzählung und Stimme zählen nicht mit — sie brechen ohnehin
beide Spalten. Ein Bildblock ohne `src` ist ein gehaltener Platz: die Platte
fällt auf vertieften Grund mit „Foto folgt" zurück, nicht auf den Aqua-Grund
der Slug-Platte. Liegt das Foto vor, kommen `src` und `alt` dazu, sonst nichts.
Dunkel eröffnet „Der Weg": das Kapitel Strukturdiagnose trägt `ground: 'dark'`,
damit die Kapitelstrecke überhaupt einen Schnitt hat.

Wo ein Dokument eine Ebene über die Kapitel setzt („Der Weg" über
Strukturdiagnose, -entscheidung und -transformation), trägt das Kapitel sie als
`over` — eine Mikrozeile über der Marke, kein zweiter Schriftgrad. Das
Datenblatt kennt neben `scope` und `field` auch `participants` („Beteiligt")
und `services` („Leistungen"); jede Zeile erscheint nur, wo der Case sie hat.
Nennt ein Case unter `related` weniger als drei Nachbarn, füllen die nächsten
Cases das Dreierraster auf.

Die Kapitel stehen als `.doc-ch`: im Rand (4 Spalten, mitlaufend) die
Kapitelmarke, daneben (8 Spalten) die Prosa zweispaltig im Lesemaß. Zitate mit Porträt brechen beide Spalten, Stimmen ohne Bild stehen in
ihrer Spalte. Ein Bildblock nennt sein Seitenverhältnis und ob es die Spalten
bricht; gerendert wird es wie jedes Bild durch `<Plate>`. Bilder stehen am
Anfang eines Kapitels oder direkt hinter einem spaltenbrechenden Element —
mitten im Spaltenfluss stehen sie neben nichts. Figuren tragen ihren Abstand
nur unten; oben sitzt eine Korrektur auf die Versalhöhe des Nachbartextes.

---

## 4. Harte Regeln

1. Deutsche Texte sind **verbatim** zu übernehmen — nie umschreiben, kürzen oder übersetzen.
   Referenz: `../CONTENT_INVENTORY.md`.
   Das gilt auch für die Auszeichnung: was im Quelldokument gleich ausgezeichnet
   ist, wird auf der Seite gleich gesetzt. Alle Absätze eines Kapitels tragen
   dasselbe Register, alle Aufzählungen dasselbe. Gliederung entsteht über
   Gründe, Marken und Raster — nie über einen Schriftgrad, den das Dokument
   nicht hergibt. Kein Vorspann, kein Hervorheben „des wichtigen Absatzes".
2. Nur Klassen verwenden, die in `globals.css` existieren. Keine neuen Farben, keine
   neuen Schriften, kein Tailwind.
3. Abstände ausschließlich über `var(--u)`…`var(--u16)`. Keine px-Literale.
4. Bilder **immer** durch `<Plate>` — jedes Foto wird zum Halbtonraster.
5. Höchstens **ein** `slab-red` pro Seite (in der Regel die Schluss-CTA).
6. Makro-Zeilenabstand nie unter ~1.1: deutsche Umlaute (Ü/Ä/Ö) kollidieren sonst
   mit der Zeile darüber.

---

## 5. Offene Punkte

- [ ] `/intern/svg-morph` ist ein Alt-Werkzeug und noch **nicht** auf das neue
      System umgestellt — einzige Stelle mit Alt-Tokens (terra/sage) und mit
      Klassennamen, die es in `globals.css` nicht gibt. Lag bis 26.11.2026
      unter `/labor/` und stand damit zwischen den redaktionellen Beiträgen.
      Es ist von keiner Seite verlinkt, wird aber statisch mit exportiert und
      bleibt damit öffentlich erreichbar.
- [x] Kurzprofile aller vier stehen (Redaktion Mary, 24.11.2026). Die
      Teamkarten auf /wir tragen bewusst keine Rollen mehr, auch keine
      Titel wie Gründer oder Geschäftsführung. „Co-Host von Corporate
      Therapy“ steht jeweils am Ende des Profils.
- [x] Schreibweise der Namen von Mary bestätigt (23.11.2026): Human Nagafi,
      Patrick Breitenbach, Mary-Jane Bolten, Serap Yılmaz-Dreger. Überall so
      zu schreiben, auch im `CONTENT_INVENTORY.md`.
- [ ] Alle Labor-Links zeigen auf `#`; Kontaktformular hat kein Backend.
- [x] Marys Handy-Befunde (Punkt 13) im iOS-Simulator geprüft, Safari auf
      iOS 26, iPhone 17 (26.11.2026). Bilder bei Cases und Stimmen: laden,
      Halbton trägt. Navigation: Menü → Cases führt auf /projekte/. Pfeil im
      Button: innerhalb des Kastens, auch bei 320px in Chromium. Keiner der
      drei Punkte ist reproduzierbar; Marys Beobachtung stammt vom
      24.11.2026, dazwischen liegen mehrere Commits.
- [x] Dabei gefunden und behoben: die dritte Hero-Zeile stand auf dem iPhone
      dauerhaft bei 74.7 % ihrer Box, „Dazwischen entscheidet Organ|isation."
      Ursache war `animation-fill-mode: both` auf dem `hero-wipe`: Safari
      pinnt damit den letzten Schritt von steps(4, end) fest. Jetzt
      `backwards`. **Der Simulator gehört ab sofort zur Prüfung jeder
      Bewegung und jeder Schlagzeile** — Chromium zeigt diese Klasse Fehler
      nicht.
- [x] Der Nachtrag „Die Entscheidung trifft die Organisation." steht links
      an seiner Spaltenkante statt rechtsbündig am Außenrand (Mary,
      Punkt 13). Die eckigen Klammern bleiben als mögliche Restursache für
      den Knopf-Eindruck.
- [ ] Offen aus Punkt 13, Geschmacks- und Textentscheidungen für Patrick und
      Mary: ASCII-Kontrast im Hero, Breite der Wortmarke „1789", ob die
      Einführungstexte rechts bleiben (hängt an Punkt 2), ob „Unser Ansatz"
      auf der Startseite bleibt, Aubergine für die Schluss-CTA, Umbruch in
      den Überschriften, Darstellung der fünf Phasen auf /ansatz, das
      Warnband als Trenner, „Wer beauftragt" ans Ende von /leistungen, die
      Case-Zuordnung unter „Aus der Praxis", Abstand zwischen den
      Labor-Beiträgen (hängt an Punkt 15), Länge von /ansatz auf dem Handy.
- [ ] Geprüft und **kein** Fehler: die Schluss-CTA ist unten bündig, beide
      Spalten enden exakt auf derselben Linie; der Versatz, den Mary sieht,
      ist die ragged Oberkante (27px). Auf den Lesefassungs-Cases steht die
      Kapitelmarke bewusst im linken Rand und die Prosa bei Spalte 6 — das
      ist die Randspalten-Figur, keine verrutschte Ausrichtung. Die AI-Box
      ist bei 1440×900 genau 400px hoch und passt auf einen Bildschirm;
      Marys „zu hoch" ist nicht reproduzierbar. Ihr zweiter Einwand dazu
      trägt: die ASCII-Grafik darin ist schwach zu erkennen, auf dem Handy
      noch weniger.
- [x] Die Linie unter der Abschnittsmarke ist auf dunklem Grund wieder da
      (Mary Punkt 3, 26.11.2026). Sie war vollständig verschwunden: `.strip`
      zeichnete sie in Ink, und Ink ist derselbe Wert wie der dunkle Grund,
      also 1.00:1. Zehn Stellen auf sieben Seiten. Auf dunkel nimmt sie jetzt
      `--paper` (14.28:1, derselbe Wert wie Ink auf hell), auf Aubergine
      `--red-ink`, bevor dort die erste Marke steht. Mitgenommen: `.statement`,
      `hr`/`.rule`/`.rule-bar` und die bildlose Platte auf dunkel. Die Regel
      steht in Kapitel 05 des Styleguides.
- [x] Newsletter gestrichen (Patrick, 26.11.2026). Es gibt keinen, und das
      Formular auf /labor schickte an eine unvollständige Mailchimp-Adresse
      ohne Listen-Kennung — es nahm Anmeldungen entgegen, die nirgends
      ankamen. Entfernt sind der Abschnitt auf /labor, der Hinweis im
      Labor-Kolophon der Startseite, `NEWSLETTER_ACTION` in `site.ts` und
      die Regel `.lab-newsletter`. An die Stelle auf /labor tritt die
      Schluss-CTA; die Seite war die einzige ohne.
- [ ] Die Schluss-CTA auf /labor trägt „Was wird bei Ihnen / gerade neu
      verhandelt?" — dieselbe Frage wie die H1 der Kontaktseite, und die
      Startseite fragt fast gleich („gerade neu verteilt?"). Dreimal
      dieselbe Konstruktion. /labor braucht von Mary eine eigene Zeile.
- [ ] Die Schluss-CTA wiederholt auf den Lesefassungs-Cases die Aussage des
      Schlusssatzes („beginnt mit dem Gap“). Entweder die stehende Zeile auf
      diesen Seiten ändern oder den Schlusssatz streichen — Textentscheidung.
- [ ] Das Leistungen-Dokument nennt unter „Aus der Praxis" der
      Strukturentscheidung drei Cases: teccle group, METRO.digital und
      Procter & Gamble, Stabsstelle der Geschäftsführung. Der dritte ist auf
      Wunsch von der Seite genommen, der Verweis darum entfernt. Das Dokument
      sagt an dieser Stelle also mehr als die Seite.
- [ ] Fünf der acht Case-Cover sind **generiert**, nicht fotografiert:
      steuerung-der-personalgewinnung, motivieren-und-entwickeln,
      kohaerente-vision, skalierung-und-qualitaet und
      verbindliche-entscheidungen. Arbeitsmaterial, bis echte
      Fotos da sind. Erzeugt mit `npm run covers` (Flux, Black Forest Labs).
      Echt sind nur wd40.jpg, teccle.jpg und pg.jpg sowie alle Bilder in den
      Kapiteln. Wer sie ersetzt, tauscht nur die Datei.
- [ ] Die Lesefassung der Branddirektion Frankfurt am Main ist ein Arbeitsstand.
      Das Zitat von Markus Röck steht dort als Vorschlag mit ausstehender
      Freigabe und ist deshalb **nicht** übernommen. Offen außerdem: ob die
      Informationsebene (Kennzahlen, Rückmeldung aus der Ausbildung) beschlossen
      ist — sonst fällt der letzte Punkt der neuen Ordnung weg — und ob die
      Szene aus dem Strategieworkshop öffentlich stehen darf.
- [ ] WTS und greyt tragen die Kurz-Labels des Bestands weiter
      („Motivieren und Entwickeln"), weil die Lesefassungen keine Kachel-Titel
      liefern. Bei greyt ist der Titel auf die Lesefassung gezogen, bei
      Procter & Gamble ebenfalls („Kundennähe durch cross-funktionale Teams"
      statt „Effektivität und Kundennähe durch Dezentralität"). Die Lesefassung
      korrigiert dort außerdem drei Angaben des Bestands: Lead Human Nagafi
      statt Patrick Breitenbach, Dauer zwölf statt neun Monate, Sektor
      Konsumgüter statt Consumer Goods.
- [x] Vier Fehler aus den Lesefassungen sind auf der Seite korrigiert
      (Redaktion Mary, 24.11.2026): greyt „Hieraus verhandelten 1789 und die
      Gründer drei Säulen", Bindestrich als Gedankenstrich durch „–" ersetzt,
      Procter & Gamble „Er verantwortet …" und „in jedem Squad". Die
      Quelldokumente tragen die Fehler noch.
- Gedankenstriche im sichtbaren Text sind Halbgeviertstriche (–), nicht
  Geviertstriche (—). Gilt für alle neuen Texte.
- [x] Kontakt-E-Mail entschieden (Patrick, 26.11.2026): Footer, Kontaktseite
      und Impressum tragen `mary-jane@1789innovations.com`, die Arbeitsadresse.
      Sie ersetzt die beiden abweichenden Altadressen `hello@1789consulting.de`
      und `hello@1789.consulting`.
- [ ] Das Impressum führt **keine** Telefonnummer. Marys Redaktion trug dort
      vorläufig ihre private Mobilnummer; welche Nummer öffentlich stehen soll,
      ist offen (Patrick, 26.11.2026). § 5 DDG verlangt keine, die E-Mail
      genügt für die schnelle Kontaktaufnahme — eine Nummer wäre trotzdem
      üblich.
