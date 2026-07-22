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
**basePath:** `/1789-website` — lokal also `http://localhost:3000/1789-website/`

---

## 2. Design-System

**Die maßgebliche Spezifikation steht in `../DESIGN_SYSTEM.md`. Lies sie, bevor
du irgendetwas Visuelles änderst.** Kurzfassung:

- Archetyp: **Swiss Industrial Print** (helles Substrat), **ausschließlich Monospace**
- Ein Substrat (`--paper` #F4F4F0), ein Akzent (`--red` #E61919). Sonst nichts.
- Zwei Schriften: **Martian Mono** (Makro, `.d0`–`.d4`), **JetBrains Mono** (alles andere)
- Keine Radien (global per Reset erzwungen), keine Schatten, keine Verläufe
- Kompartimente entstehen durch **Linien**, nicht durch Abstände → `.hairgrid`, `.box`, `hr`

Das gesamte CSS liegt in **einer** Datei: `src/app/globals.css` (Tokens oben im
`:root`). Es gibt keine CSS-Module, keine zweite Stylesheet-Ebene.

### Live-Spezifikation
`/styleguide` rendert das System als auditierbares Dokument (nicht in der Nav verlinkt).

---

## 3. Struktur

```
src/app/         Routen (alle Server Components, statisch exportierbar)
src/components/  ui.tsx (Primitives), Wordmark, LegalPage, organisms/{Header,Footer}
src/data/        SÄMTLICHE Texte — site, approach, services, team, labor, legal, cases
```

**Seiten importieren Inhalte, sie enthalten keine.** Fehlt ein Text im Datenlayer,
kommt er zuerst dorthin.

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
- [ ] Zwei E-Mail-Adressen im Bestand: Footer `hello@1789consulting.de`,
      Kontaktseite `hello@1789.consulting` — bewusst so übernommen, mit dem
      Kunden zu klären.
