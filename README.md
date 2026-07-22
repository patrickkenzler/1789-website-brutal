# 1789 — Brutalist Redesign (Dark Horse)

> **Internes Konzept. Nicht freigegeben.**
> Diese Seite ist ein Gestaltungsentwurf, kein Kundenauftritt. Sie ist
> `noindex` gesetzt und nicht für die Öffentlichkeit bestimmt.
> Enthält Kundennamen, Referenzen und Impressumsdaten, die nicht zur
> Veröffentlichung freigegeben sind.

Ein radikaler Redesign-Entwurf der 1789-Website: gleiche Inhalte, komplett neu
geschriebenes Design-System im brutalistischen Stil.

- **Archetyp:** Swiss Industrial Print (helles Substrat)
- **Typografie:** ausschließlich Monospace — Martian Mono (Makro), JetBrains Mono (Mikro)
- **Farbe:** ein Substrat (`#F4F4F0`), ein Akzent (`#E61919`)
- **Kein Tailwind.** Das gesamte CSS liegt in `web/src/app/globals.css`.

## Dokumentation

| Datei | Inhalt |
|---|---|
| [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) | Verbindliche Spezifikation des Design-Systems |
| [`CONTENT_INVENTORY.md`](CONTENT_INVENTORY.md) | Vollständige Verbatim-Extraktion aller Texte |
| [`web/CLAUDE.md`](web/CLAUDE.md) | Arbeitsanweisung für KI-Assistenten |
| `/styleguide` | Live-Spezifikation als auditierbares Dokument |

## Entwicklung

```bash
cd web
npm install
npm run dev
```

Lege eine `.env.local` an (Vorlage: `web/.env.example`) mit `NEXT_PUBLIC_BASE_PATH=/1789-website-brutal`, damit die
lokale Ansicht dem Pages-Deployment entspricht. Lokal läuft die Seite deshalb
unter **http://localhost:3000/1789-website-brutal/** — nicht unter `/`.

Für die Entwicklung ohne Sub-Pfad: `NEXT_PUBLIC_BASE_PATH` leeren, dann liegt
die Seite unter `http://localhost:3000/`.

## Deployment

Push auf `main` baut den statischen Export (`web/out`) und veröffentlicht ihn
über GitHub Pages — siehe [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

`NEXT_PUBLIC_BASE_PATH` im Workflow **muss dem Repository-Namen entsprechen**,
sonst laden CSS, JS und Schriften nicht.

## Herkunft

Eigenständiges Repository ohne Verbindung zum Kundenprojekt. Die vollständige
Original-Historie liegt als Git-Bundle außerhalb dieses Repos
(`1789_Website_ORIGINAL-history.bundle`).
