# CLAUDE.md — 1789 Website (Brutalist / Dark Horse)

Verbindliche Referenz für alle KI-Assistenten in diesem Repo.

---

## 1. Was das hier ist

Ein **Dark-Horse-Redesign**: dieselben Inhalte wie die Kundenversion, aber ein
komplett neu geschriebenes Design-System im brutalistischen Stil.
Das Repo ist eigenständig — **kein Remote**, keine Verbindung zum Kundenprojekt.
Die vollständige Original-Historie liegt als Bundle unter
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
Link) in der Reihenfolge des Quelldokuments, dazu `summary`, `transfer`, `faq`,
`related` und `close`. `src/app/projekte/[slug]/page.tsx` rendert, was ein Case
hat. Eine Lesefassung wird **verbatim** übertragen, auch wenn sie Angaben im
Bestand korrigiert — sie ist die neuere, abgestimmte Fassung.

Die Kapitel stehen als `.doc-ch`: im Rand (4 Spalten, mitlaufend) die
Kapitelmarke und der Vorspann, daneben (8 Spalten) die Prosa zweispaltig im
Lesemaß. Zitate mit Porträt brechen beide Spalten, Stimmen ohne Bild stehen in
ihrer Spalte.

---

## 4. Harte Regeln

1. Deutsche Texte sind **verbatim** zu übernehmen — nie umschreiben, kürzen oder übersetzen.
   Referenz: `../CONTENT_INVENTORY.md`.
2. Nur Klassen verwenden, die in `globals.css` existieren. Keine neuen Farben, keine
   neuen Schriften, kein Tailwind.
3. Abstände ausschließlich über `var(--u)`…`var(--u16)`. Keine px-Literale.
4. Bilder **immer** durch `<Plate>` — jedes Foto wird zum Halbtonraster.
5. Höchstens **ein** `slab-red` pro Seite (in der Regel die Schluss-CTA).
6. Makro-Zeilenabstand nie unter ~1.1: deutsche Umlaute (Ü/Ä/Ö) kollidieren sonst
   mit der Zeile darüber.

---

## 5. Offene Punkte

- [ ] `/labor/svg-morph` ist ein Alt-Werkzeug und noch **nicht** auf das neue System
      umgestellt — einzige Stelle mit Alt-Tokens (terra/sage).
- [ ] Team-Portraits und Büro-Foto fehlen (`photo: null` → Initialen-Plate).
- [ ] Alle Labor-Links zeigen auf `#`; Kontaktformular hat kein Backend.
- [ ] Das Bild zum WD-40-Pilot aus der Lesefassung fehlt — die Stelle bleibt
      leer, statt einen Platzhalter zu zeigen.
- [ ] Die Schluss-CTA wiederholt auf den Lesefassungs-Cases die Aussage des
      Schlusssatzes („beginnt mit dem Gap“). Entweder die stehende Zeile auf
      diesen Seiten ändern oder den Schlusssatz streichen — Textentscheidung.
- [ ] Zwei E-Mail-Adressen im Bestand: Footer `hello@1789consulting.de`,
      Kontaktseite `hello@1789.consulting` — bewusst so übernommen, mit dem
      Kunden zu klären.
