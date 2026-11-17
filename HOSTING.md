# Vom statischen Export zum gehosteten Betrieb

Anleitung für den Schritt weg von GitHub Pages. Geschrieben am 17.11.2026,
ausgelöst von der Frage, wie neue Podcast-Folgen automatisch ins Labor kommen.

---

## 0 · Zuerst: Brauchst du den Schritt überhaupt?

Die ehrliche Antwort für den Podcast-Fall lautet **nein**. Automatische
Aktualisierung bekommst du auch statisch — über einen zeitgesteuerten Neubau
(siehe Abschnitt 5). Der Unterschied ist nur die Verzögerung: statisch
„innerhalb weniger Stunden", dynamisch „sofort".

Den Schritt brauchst du, sobald eines davon ansteht:

| Vorhaben | Statisch möglich? |
|---|---|
| Neue Podcast-Folgen automatisch zeigen | **Ja**, zeitgesteuert |
| Kontaktformular, das wirklich etwas versendet | Nein |
| Suche über die Cases | Nur clientseitig, lädt alles mit |
| Inhalte aus einem CMS, die Redakteure sofort sehen | Nein |
| Vorschau unveröffentlichter Inhalte | Nein |
| Bildoptimierung durch Next.js | Nein, heute `unoptimized: true` |
| Webhook, wenn der Podcast-Hoster meldet | Nein |

Das Kontaktformular ist der stärkste Grund: Es steht heute auf `/kontakt`
und hat **kein Backend** — es sieht aus, als könnte man etwas senden, und
nichts passiert. Das ist als offener Punkt in `web/CLAUDE.md` vermerkt.

---

## 1 · Was heute gebaut wird

`web/next.config.ts`:

```ts
output: 'export',            // statischer HTML-Export
basePath,                    // '/1789-website-brutal' aus NEXT_PUBLIC_BASE_PATH
trailingSlash: true,         // out/ansatz/index.html statt out/ansatz.html
images: { unoptimized: true } // Bildoptimierung läuft serverseitig, geht hier nicht
```

`npm run build` erzeugt `web/out/`, ein Verzeichnis aus HTML, CSS, JS und
Bildern. `.github/workflows/deploy.yml` lädt das als Pages-Artefakt hoch.
Mehr passiert nicht — kein Node-Prozess, keine Datenbank, keine Laufzeit.

---

## 2 · Was sich am Code ändert

Erstaunlich wenig. Die vier Zeilen oben sind die ganze Kopplung an den
statischen Export.

**`output: 'export'` entfernen.** Danach baut Next.js für einen Node-Server.
Alle bisherigen Seiten bleiben statisch vorgerendert, solange sie keine
dynamischen Daten lesen — das ist der Normalfall bei App Router.

**`basePath` entfernen**, sobald die Seite auf einer eigenen Domain im Wurzelpfad
liegt. `NEXT_PUBLIC_BASE_PATH` wird dann nirgends mehr gesetzt, und die Logik in
`next.config.ts` liefert von allein `''`. Die Komponenten lesen dieselbe
Variable, es gibt also keine zweite Stelle.

**`images: { unoptimized: true }` entfernen**, wenn die Plattform
Bildoptimierung unterstützt. Achtung: Die Platte rastert jedes Bild per CSS.
Optimierung ändert daran nichts, spart aber Ladezeit — die Case-Cover liegen
heute bei 260 bis 740 kB.

**`trailingSlash: true` am besten lassen.** Die Einstellung bestimmt, ob URLs
auf `/` enden. Umstellen heißt, dass sich jede URL ändert; dann braucht es
Weiterleitungen, sonst laufen bestehende Links ins Leere.

**Was ohne Änderung weiterläuft:** sämtliche Seiten, das gesamte CSS, der
Datenlayer in `src/data/`, die Skripte in `scripts/`. Das Projekt ist eine
normale Next.js-Anwendung; der Export ist nur die Ausgabeform.

---

## 3 · Wo hosten

**Vercel** — dieselbe Firma, die Next.js baut. Verbindet sich mit dem
GitHub-Repo, baut bei jedem Push, kein Server zu administrieren. Inkrementelle
Regeneration und zeitgesteuerte Aufgaben sind eingebaut. Für dieses Projekt die
geradlinigste Wahl; `TECH_SPEC.md` nennt Vercel ohnehin noch als Ziel, das
Dokument stammt aus der Zeit vor GitHub Pages.

**Hostinger**, dein üblicher Host — hier ist eine Prüfung nötig. Dein bisheriger
Weg (GitHub Action lädt per FTP hoch) funktioniert nur für statische Dateien.
Ein Next.js-Server braucht einen dauerhaft laufenden Node-Prozess. Ob dein
Tarif das kann, musst du im Tarif nachsehen; klassisches Webhosting kann es
nicht, ein VPS schon — dann administrierst du den Server aber selbst, inklusive
Updates, Zertifikaten und Neustart nach Abstürzen.

**Eigener VPS** (Hetzner, DigitalOcean und andere) — volle Kontrolle, volle
Verantwortung. Node per systemd oder Docker, Nginx davor, Zertifikat über Let's
Encrypt. Lohnt sich, wenn ohnehin andere Dienste auf derselben Maschine laufen.

**Ein Zwischenweg:** Die Seite bleibt statisch, und nur die dynamischen Teile
ziehen auf eine kleine Funktion um — etwa der Formularversand. Das geht mit
Formspree, einer Vercel-Funktion oder einem eigenen kleinen Endpunkt, ohne das
Hosting der Seite anzufassen.

---

## 4 · Der Umzug, Schritt für Schritt

1. **Domain entscheiden.** Ohne eigene Domain bringt der Umzug wenig; der
   `basePath` bliebe und mit ihm die halbe Reibung.
2. **Auf einem Zweig umstellen**, nicht auf `main`. Die drei Zeilen aus
   Abschnitt 2 ändern, `npm run build` laufen lassen, `npm start` lokal prüfen.
   Jede Seite einmal aufrufen; besonders die Bildpfade, da hängt der `basePath`
   dran.
3. **Auf der neuen Plattform aufsetzen** und den Zweig dorthin deployen. Erst
   wenn die Vorschau steht, `main` anfassen.
4. **DNS umstellen.** Alte und neue Seite laufen in dieser Phase parallel.
5. **GitHub Pages abschalten** und `deploy.yml` entfernen oder stilllegen,
   damit nicht zwei Deployments gegeneinander laufen.
6. **README.md und TECH_SPEC.md nachziehen.** Beide beschreiben heute den
   GitHub-Pages-Weg beziehungsweise einen veralteten Vercel-Stand.

Rückweg: `output: 'export'` und `basePath` wieder setzen, Pages einschalten.
Der statische Export bleibt die ganze Zeit baubar, solange keine Seite
serverseitige Daten liest.

---

## 5 · Der Podcast, in beiden Welten

**Statisch, ohne Umzug.** Ein zweiter Workflow mit `schedule`-Cron läuft
täglich, liest den RSS-Feed, schreibt die neuen Folgen nach
`src/data/labor.ts`, lädt das Episodenbild nach `public/labor/` und committet,
falls sich etwas geändert hat. Der Push auf `main` löst den bestehenden Deploy
aus. Ein Skript nach dem Muster von `scripts/case-covers.mjs`.

Zwei Eigenheiten von GitHub-Cron: Er läuft nicht pünktlich, und er wird nach
60 Tagen ohne Repo-Aktivität abgeschaltet.

**Dynamisch, nach dem Umzug.** Zwei Wege, die sich ergänzen:

*Inkrementelle Regeneration* — die Labor-Seite bekommt
`export const revalidate = 3600` und liest den Feed direkt. Next.js baut die
Seite im Hintergrund neu, wenn sie älter als eine Stunde ist. Kein Cron, kein
Commit, keine Maschinen-Historie im Repo.

*Webhook* — ein Route Handler unter `app/api/podcast/route.ts`, den der Hoster
bei einer neuen Folge aufruft. Das ist der einzige Weg zu „sofort". Er braucht
ein gemeinsames Geheimnis, damit nicht jeder den Endpunkt auslösen kann.

Unabhängig davon gilt: **Prüfe, ob der Feed je Folge ein eigenes Bild liefert.**
Viele Feeds führen überall dasselbe Show-Artwork. Dann stünde im Labor-Mosaik
neunmal dasselbe Bild, und die Wellenform aus `src/data/laborArt.ts` ist die
bessere Antwort — sie wird aus dem Titel geseedet und sieht bei jeder Folge
anders aus.

---

## 6 · Was der Umzug kostet

**Geld.** GitHub Pages ist kostenlos. Vercel hat eine kostenlose Stufe, die für
diese Seite reicht, aber Nutzungsgrenzen hat. Ein VPS kostet ab etwa fünf Euro
im Monat.

**Angriffsfläche.** Eine statische Seite kann man kaum kompromittieren. Sobald
ein Server läuft, gibt es Endpunkte, Abhängigkeiten und Updates.

**Ein zweiter Ort für Geheimnisse.** Heute liegt nur `BFL_API_KEY` lokal in
`web/.env.local`. Nach dem Umzug brauchen Laufzeitvariablen einen Platz in der
Plattform — und dürfen weiterhin nicht ins Repo.

**Verlässlichkeit.** Statische Dateien fallen praktisch nie aus. Ein Node-Prozess
schon.

---

## 7 · Vorher aufräumen

Unabhängig vom Umzug, aber beim Anfassen der Konfiguration schnell erledigt:

- `TECH_SPEC.md` nennt Vercel als Deployment und Tailwind als Styling. Beides
  stimmt nicht mehr: deployt wird über GitHub Pages, und `web/CLAUDE.md` hält
  ausdrücklich fest, dass es kein Tailwind gibt. Die Pakete stehen trotzdem noch
  in `package.json`.
- `test.md` und `test2.md` liegen im Wurzelverzeichnis und enthalten vier
  beziehungsweise sechs Bytes.
- Das Kontaktformular hat kein Backend. Nach dem Umzug ist das in einer halben
  Stunde erledigt; vorher sollte es wenigstens nicht so aussehen, als ginge es.
