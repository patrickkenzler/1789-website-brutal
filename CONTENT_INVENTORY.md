# 1789 — Vollständiges Content-Inventar

Verbatim-Extraktion aller nutzersichtbaren Texte aus dem bestehenden Next.js-App-Router-Projekt
(`/Users/patrickkenzler/Documents/2_Areas/04_Ai_Workspace/1789_Website_Brutal/web`).
Alle deutschen Texte sind zeichengetreu übernommen (Umlaute, typografische Anführungszeichen,
Geviertstriche, Sonderzeichen). Styling, CSS, SVG-Pfaddaten und Animationslogik sind bewusst
ausgelassen.

Stand: Extraktion vom 2026-07-22.

---

## Globale Metadaten (`src/app/layout.tsx`)

- `<html lang="de">`
- **title:** `1789 Management Consulting — Wie verändern Systeme für die Zukunft`
- **description:** `Structure · Strategy · Gap Consulting. Wir begleiten Organisationen durch Wandel — strukturell, strategisch, wirksam.`
- Layout rendert: `<Header />` → `{children}` → `<Footer />`

---

## Header (`src/components/organisms/Header.tsx`)

Drei Layout-Varianten (Desktop-Split-Nav mit zentriertem Logo, Tablet, Mobile mit Hamburger-Overlay).
Die Nav-Items sind in allen Varianten identisch (Mobile/Tablet nutzen `ALL_ITEMS = [...LEFT, ...RIGHT]`).

### LEFT_ITEMS (Desktop links)

| Label | href |
|---|---|
| Ansatz | `/ansatz` |
| Leistungen | `/leistungen` |
| Cases | `/projekte` |

### RIGHT_ITEMS (Desktop rechts)

| Label | href |
|---|---|
| Labor | `/labor` |
| Wir | `/wir` |
| Kontakt | `/kontakt` |

### Logo / Links

- Logo-Link: `href="/"`, `aria-label="1789 Innovation — zur Startseite"`
  (Komponente `Logo1789`, Desktop `height={38}`, Tablet `height={34}`, Mobile `height={32}`, jeweils `showSub={false}`)

### Hamburger-Button (Mobile)

- `aria-label` (geöffnet): `Menü schließen`
- `aria-label` (geschlossen): `Menü öffnen`

### Mobile-Overlay

- Nav-Links: alle 6 Items aus `ALL_ITEMS` (Ansatz, Leistungen, Cases, Labor, Wir, Kontakt) in derselben Reihenfolge
- Abschluss-CTA: **`Erstgespräch vereinbaren →`** → `/kontakt`

---

## Footer (`src/components/organisms/Footer.tsx`)

### 1. Wordmark-Block

- Wortmarke: `1789`
- Eyebrow darunter: `Innovation · Consulting`

### 2. Hauptspalten

**Spalte A — Claim + CTA**

- Claim (Display, italic): `Zwischen Strategie und Wirklichkeit liegt eine Lücke. Wir arbeiten in ihr.`
- CTA-Link: **`Erstgespräch vereinbaren →`** → `/kontakt`

**Spalte B — Navigation**

- Spaltenlabel: `Seiten`

| Label | href |
|---|---|
| Ansatz | `/ansatz` |
| Cases | `/projekte` |
| Leistungen | `/leistungen` |
| Labor | `/labor` |
| Wir | `/wir` |

**Spalte C — Kontakt**

- Spaltenlabel: `Kontakt`

| Label | href | Ziel |
|---|---|---|
| `hello@1789consulting.de` | `mailto:hello@1789consulting.de` | — |
| `Instagram` | `https://instagram.com` | `target="_blank" rel="noreferrer"` |
| `LinkedIn` | `https://de.linkedin.com/company/1789-consulting` | `target="_blank" rel="noreferrer"` |

### 3. Bottom-Bar

- Copyright (Jahr dynamisch via `new Date().getFullYear()`):
  `© {Jahr} 1789 Consulting GmbH — Alle Rechte vorbehalten.`
- Legal-Links (Label wird lowercased zum href):

| Label | href |
|---|---|
| Impressum | `/impressum` |
| Datenschutz | `/datenschutz` |

> **Hinweis auf Inkonsistenz:** Footer nutzt `hello@1789consulting.de`, die Kontaktseite nutzt `hello@1789.consulting`. Beide Varianten hier dokumentiert.

---

## HeroLogo (`src/components/organisms/HeroLogo.tsx`) — Homepage-Hero

Animierter Full-Bleed-SVG-Hintergrund (`GapGraphic`, dekorativ, `aria-hidden`) + zentrierter Textblock.

### Eyebrow / Topline

```
Organizational Strategy • Governance Design • Target Operating Model
```

### Headline (fest auf drei Zeilen, jede `whiteSpace: nowrap`)

Zeile 1: `Strategie ` + *`scheitert an`* (italic, terra) + ` Struktur.`
→ Klartext: `Strategie scheitert an Struktur.`

Zeile 2: `Struktur ` + *`überholt`* (italic, terra) + ` Strategie.`
→ Klartext: `Struktur überholt Strategie.`

Zeile 3: `Dazwischen ` + *`entscheidet`* (italic, terra) + ` Organisation.`
→ Klartext: `Dazwischen entscheidet Organisation.`

### CTAs

| Label | href | Variante |
|---|---|---|
| `Unser Ansatz →` | `/ansatz` | ghost |
| `Erstgespräch vereinbaren` | `/kontakt` | terra |

### Logo-Marquee (unten angepinnt)

Nutzt `clientLogos` aus `ClientLogoCarousel` (verdoppelt für nahtlosen Loop).
Jedes Logo bekommt `aria-label` und `title` = Logo-Name (siehe Abschnitt ClientLogoCarousel).

---

## Route `/ansatz` (`src/app/ansatz/page.tsx`)

Keine `export const metadata` vorhanden — erbt globalen Title.

Seitenaufbau: `HeroSection` → `OverviewStrip` → 5× `PhaseSection` → `ClosingCTA`

### Section 1 — Hero

- **Tag / Eyebrow:** `Unser Ansatz`
- **H1 (zweizeilig):**
  Zeile 1: `Von Diagnose`
  Zeile 2 (italic, terra): `zur Eigenständigkeit.`
- **Body:**
  `Fünf Phasen, fünf Leitfragen. Jeder Schritt baut auf der Erkenntnis des vorigen auf — von der Diagnose bestehender Strukturen über das gestaltbare Zielmodell bis zur Übergabe einer Organisation, die sich selbst weiterentwickeln kann.`

### Section 2 — Overview-Strip (5 Anker-Links)

Jeder Eintrag: `{num} — {meta}` als Eyebrow + `{title}` als Überschrift, Link auf `#phase-{num}`.

| href | Eyebrow | Titel |
|---|---|---|
| `#phase-01` | `01 — Diagnose` | Sichtbar machen |
| `#phase-02` | `02 — Zielbild` | Entscheidbar machen |
| `#phase-03` | `03 — Pilot` | Gestaltbar machen |
| `#phase-04` | `04 — Praxis` | Erprobbar machen |
| `#phase-05` | `05 — Transfer` | Unabhängig machen |

### Sections 3–7 — Phasen-Detailsektionen

Wiederkehrende Sub-Labels in jeder Phase:
- `Phase {num} — {meta}` (Eyebrow oben links)
- `Was wir tun` (Listen-Label)
- `Typische Outputs` (Tag-Chips-Label)
- `Outcome` (Abschluss-Label)

#### Phase 01 — Diagnose · `Sichtbar machen` (Anker `#phase-01`)

- **Eyebrow:** `Phase 01 — Diagnose`
- **Nummer (dekorativ):** `01`
- **Titel:** `Sichtbar machen`
- **Leitfrage:** `Was blockiert uns wirklich?`
- **Text:** `Wir machen sichtbar, wie die Organisation wirklich arbeitet. Nicht entlang offizieller Organigramme, sondern entlang tatsächlicher Entscheidungen, Routinen, Verantwortungen und Reibungen. So entsteht ein gemeinsames Bild der Ordnung, die heute wirkt.`
- **Was wir tun:**
  1. `Interviews und Gespräche mit relevanten Akteur:innen`
  2. `Analyse von Entscheidungswegen, Rollen und Verantwortlichkeiten`
  3. `Beobachtung von Routinen, Meetings, Übergaben und Schnittstellen`
  4. `Verdichtung organisationaler Spannungen`
  5. `Entwicklung erster Hypothesen zur tatsächlichen Organisationslogik`
- **Typische Outputs:** `Systembild` · `Spannungslandkarte` · `Entscheidungs- & Rollenlandkarte` · `Hypothesen zur Organisationslogik` · `Designprinzipien`
- **Outcome:** `Die Organisation bekommt ein gemeinsames Vokabular für das, was bisher diffus war. Führung kann klarer sehen, welche Strukturfragen wirklich bearbeitet werden müssen.`
- Farbe: TERRA (`#F44D0B`) · Glyph: `GlyphSee`

#### Phase 02 — Zielbild · `Entscheidbar machen` (Anker `#phase-02`)

- **Eyebrow:** `Phase 02 — Zielbild`
- **Nummer:** `02`
- **Titel:** `Entscheidbar machen`
- **Leitfrage:** `Wie müsste unsere Organisation arbeiten, damit Strategie wirksam wird?`
- **Text:** `Wir übersetzen Erkenntnis in ein entscheidbares Zielmodell. Es zeigt, wie Arbeit künftig organisiert werden soll: welche Verantwortung wo liegt, wie Entscheidungen getroffen werden, welche Routinen tragen und welche Struktur Strategie wirksam macht.`
- **Was wir tun:**
  1. `Entwicklung eines organisationalen Zielbilds`
  2. `Design von Operating Model, Governance und Entscheidungsarchitektur`
  3. `Klärung von Rollen, Verantwortlichkeiten und Schnittstellen`
  4. `Übersetzung strategischer Ambitionen in organisatorische Anforderungen`
  5. `Priorisierung von Veränderungsschritten & Operationalisierungsplan`
- **Typische Outputs:** `Zielbild` · `Target Operating Model` · `Governance- & Entscheidungsarchitektur` · `Rollen- & Verantwortungsmodell` · `Operationalisierungsplan`
- **Outcome:** `Führung kann entscheiden, was verändert wird, in welcher Reihenfolge und mit welchem Anspruch. Die Organisation erhält eine gemeinsame Orientierung für die nächste Entwicklungsbewegung.`
- Farbe: SAGE (`#4A6655`) · Glyph: `GlyphTarget`

#### Phase 03 — Pilot · `Gestaltbar machen` (Anker `#phase-03`)

- **Eyebrow:** `Phase 03 — Pilot`
- **Nummer:** `03`
- **Titel:** `Gestaltbar machen`
- **Leitfrage:** `Wie kommt das Modell in echte Arbeit?`
- **Text:** `Struktur entsteht im Arbeiten am Modell. Deshalb bringen wir Zielbilder früh in reale Situationen: in Piloten, Entscheidungen, Routinen und Arbeitsformate. So wird sichtbar, was trägt — und was weiterentwickelt werden muss.`
- **Was wir tun:**
  1. `Entwicklung von Pilot- und Prototyping-Formaten`
  2. `Gestaltung von Workshops, Entscheidungsformaten und Arbeitsroutinen`
  3. `Simulation neuer Rollen, Schnittstellen oder Governance-Elemente`
  4. `Begleitung erster Anwendungssituationen`
  5. `Iteration des Zielmodells auf Basis realer Erfahrung`
- **Typische Outputs:** `Pilotdesign` · `Workshop-Architektur` · `Rollenprototypen` · `Meeting- & Entscheidungsformate` · `Iterationslogik`
- **Outcome:** `Veränderung wird praktisch erfahrbar, bevor sie groß ausgerollt wird. Die Organisation erkennt früh, was funktioniert, und was angepasst werden muss.`
- Farbe: SAND (`#8B7355`) · Glyph: `GlyphFrame`

#### Phase 04 — Praxis · `Erprobbar machen` (Anker `#phase-04`)

- **Eyebrow:** `Phase 04 — Praxis`
- **Nummer:** `04`
- **Titel:** `Erprobbar machen`
- **Leitfrage:** `Was funktioniert wirklich — und was muss angepasst werden?`
- **Text:** `Das Zielmodell wird erst belastbar, wenn es in realen Arbeitssituationen geprüft wird. Die Organisation prüft, widerspricht, passt an — und macht das Modell dadurch zu ihrer eigenen Struktur.`
- **Was wir tun:**
  1. `Begleitung erster Anwendungssituationen im echten Betrieb`
  2. `Iteration und Weiterentwicklung des Zielmodells`
  3. `Übersetzung in konkrete Arbeitsartefakte`
  4. `Prüfung, Widerspruch und Anpassung durch die Organisation`
- **Typische Outputs:** `Pilotdesign` · `Arbeitsartefakte` · `Mission Boards` · `Iterationslogik`
- **Outcome:** `Die Organisation erkennt früh, was funktioniert, was angepasst werden muss und welche neue Arbeitsweise tragfähig ist.`
- Farbe: TERRA · Glyph: `GlyphLoop`

#### Phase 05 — Transfer · `Unabhängig machen` (Anker `#phase-05`)

- **Eyebrow:** `Phase 05 — Transfer`
- **Nummer:** `05`
- **Titel:** `Unabhängig machen`
- **Leitfrage:** `Wie bleibt es wirksam, wenn 1789 rausgeht?`
- **Text:** `Wir verankern neue Strukturen so, dass Organisationen sie selbst weiterentwickeln können. Dafür braucht es Verantwortung, Routinen, Messpunkte und einen Rhythmus, in dem Anpassung Teil der Arbeit wird.`
- **Was wir tun:**
  1. `Entwicklung eines Operating Rhythm`
  2. `Aufbau interner Weiterentwicklungs- und Verantwortungsrollen`
  3. `Befähigung von Führung und internen Transformationsrollen`
  4. `Gestaltung von Reflexions-, Mess- und Anpassungsformaten`
  5. `Übergabe der Arbeitsarchitektur`
- **Typische Outputs:** `Playbook` · `Operating Rhythm` · `Verantwortungslandkarte` · `Enablement-Formate` · `Übergabe- & Iterationsmodell`
- **Outcome:** `Die Organisation kann die neue Struktur eigenständig weiterentwickeln. Veränderung wird nicht als Projekt verwaltet, sondern in die Arbeitsfähigkeit eingebettet.`
- Farbe: SAGE · Glyph: `GlyphHandover`

### Section 8 — Closing CTA (terra)

- **Eyebrow:** `Bereit zur Diagnose?`
- **H2 (zweizeilig):**
  Zeile 1: `Sprechen wir`
  Zeile 2 (italic): `über Ihren Gap.`
- **CTA-Button:** `Erstgespräch vereinbaren` → `/kontakt` (ghost, lg)

---

## Route `/leistungen` (`src/app/leistungen/page.tsx`)

Keine eigene `metadata`.

### Section 1 — Hero

- **Eyebrow:** `Leistungen`
- **H1:** `Structure · Strategy · ` + *`Gap.`* (italic, terra)
  → Klartext: `Structure · Strategy · Gap.`
- **Body:**
  `Unsere Leistungen sind keine Produkte. Sie sind Antworten auf den Gap, den jede erfolgreiche Organisation kennt — aber selten benennen kann.`

### Section 2 — Offerings (3 Blöcke)

Jeder Block: Meta-Zeile `{num} · {category} · {duration}`, H2 = `{title}`, geometrische SVG-Marke,
Body-Text, Deliverables-Box mit Label `Deliverables`.

#### 01 · Benchmark · 6–10 Wochen

- **Meta-Zeile:** `01 · Benchmark · 6–10 Wochen`
- **Titel:** `Benchmark & Defining the Gap`
- **Body:** `Wir analysieren die Spannung zwischen dem, was eine Organisation heute ist, und dem, was sie morgen sein will. Systematisch, präzise, mit neuem Vokabular.`
- **Deliverables:**
  - `Gap-Analyse`
  - `Benchmark-Bericht`
  - `Organisations-Diagnose`
  - `Maßnahmenrahmen`

#### 02 · Workshop · 3–6 Monate

- **Meta-Zeile:** `02 · Workshop · 3–6 Monate`
- **Titel:** `Workshop & Strategy Structure`
- **Body:** `Wir transformieren Erkenntnisse in konkrete Strukturen. Partizipativ, artefaktgetrieben und sofort wirksam — nicht erst nach dem Prozess.`
- **Deliverables:**
  - `Operating Model Entwurf`
  - `Mission Board`
  - `Responsibility Framework`
  - `Pilotdesign`

#### 03 · Transformation · 6–18 Monate

- **Meta-Zeile:** `03 · Transformation · 6–18 Monate`
- **Titel:** `Transformation Begleitung`
- **Body:** `Wir begleiten Organisationen durch den vollständigen Systemshift Cycle. Von der Erkenntnis bis zur eigenständig iterierenden Organisation.`
- **Deliverables:**
  - `Vollständiger Systemshift Cycle`
  - `Organisationales Mindset`
  - `Verbindlichkeitsstrukturen`
  - `Übergabe & Verselbstständigung`

### Section 3 — Closing CTA (terra)

- **Eyebrow:** `Nicht sicher, wo der Gap liegt?`
- **H2 (zweizeilig):**
  Zeile 1: `Das Erstgespräch`
  Zeile 2 (italic): `klärt das.`
- **Subtext:** `Kein Pitch. Kein Sales-Deck. Wir prüfen gemeinsam, ob ein Systemshift der richtige Schritt ist.`
- **CTA-Button:** `Erstgespräch anfragen` → `/kontakt` (ghost, lg)

---

## Route `/wir` (`src/app/wir/page.tsx`)

Keine eigene `metadata`.

### Section 1 — Hero

- **Tag:** `Wir`
- **H1 (zweizeilig):**
  Zeile 1: `Vier Köpfe,`
  Zeile 2 (italic, terra): `eine Haltung.`
- **Body:**
  `1789 ist klein und bewusst klein gehalten. Wir arbeiten als Partner, nicht als Lieferant — und stehen jedem Mandat persönlich gegenüber. Hier sind die vier Ansprechpartner, mit denen Sie es zu tun haben.`

### Section 2 — Team-Grid

- **Section-Eyebrow:** `Partner & Ansprechpartner — 04`

Team-Daten (`TEAM`), alle `photo: null` → Platzhalter-Gradient mit Initialen:

| # | Name | Rolle | Initialen | Foto | Akzent | Bio |
|---|---|---|---|---|---|---|
| 1 | `Huma Nagafi` | `Founder & Partner` | `HN` | `null` | terra | `Gründerin von 1789. Begleitet Organisationen seit über zwei Jahrzehnten durch strukturelle Transformation — vom Mittelstand bis zum Konzern.` |
| 2 | `Mary Jane Bolton` | `Partner` | `MB` | `null` | sage | `Verantwortet Governance-Design und Target-Operating-Modelle. Übersetzt Komplexität in tragfähige Strukturen, die im Alltag halten.` |
| 3 | `Patrick Breitenbach` | `Partner` | `PB` | `null` | terra | `[Kurzprofil folgt — Rollenbeschreibung wird ergänzt.]` |
| 4 | `[Platzhalter]` | `Partner` | `??` | `null` | sage | `[Person und Kurzprofil folgen.]` |

- Portrait-`alt` (falls Foto vorhanden): = `person.name`
- Bildpfad-Präfix: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${person.photo}`

### Section 3 — Office + Über 1789

**Links — Foto-Platzhalter (dekorativ, `aria-hidden`):**
- Label oben: `Foto folgt`
- Label unten (italic): `Unser Büro.`

**Rechts — Textblock:**
- **Tag:** `Über 1789`
- **H2:** `Strategie und Struktur, ` + *`aus einem Stück.`* (italic, terra)
  → Klartext: `Strategie und Struktur, aus einem Stück.`
- **Absatz 1:** `1789 begleitet Organisationen durch strukturelle Transformation — von der Diagnose über die Gestaltung des Operating Models bis zur Erprobung im Alltag und zur Übergabe in die eigene Hand.`
- **Absatz 2:** `Wir arbeiten ` + *`auf Augenhöhe`* (italic) + `, in kleinen Mandaten, mit klarer Verantwortung. Was wir aufbauen, muss ohne uns weitertragen — sonst war es nicht gut genug.`
  → Klartext: `Wir arbeiten auf Augenhöhe, in kleinen Mandaten, mit klarer Verantwortung. Was wir aufbauen, muss ohne uns weitertragen — sonst war es nicht gut genug.`
- **CTA-Button:** `Erstgespräch vereinbaren →` → `/kontakt` (ghost)

---

## Route `/projekte` (`src/app/projekte/page.tsx`)

Keine eigene `metadata`. Datenquelle: `cases` aus `@/data/cases`.
Aufteilung: `featured = cases.slice(0, 2)`, `list = cases.slice(2)`.
Filter-Tags: `allTags` = alle unterschiedlichen `tags` aller Cases in Vorkommensreihenfolge.

### Section 1 — Hero

- **Tag:** `Shift Cases`
- **H1:** `Organisationen, ` + *`die den Shift gewagt haben.`* (italic, terra)
  → Klartext: `Organisationen, die den Shift gewagt haben.`
- **Body:**
  `Jedes Engagement beginnt mit einer ehrlichen Diagnose des Gaps. Was hier folgt, sind keine Erfolgsgeschichten — sondern Erkenntnisse aus echter Transformation.`

### Section 2 — Highlight Cases (dunkel, ink)

- **Eyebrow:** `★ Highlight Cases`
- Zeigt die ersten zwei Cases: **WD-40 Company** und **Procter & Gamble** (siehe `cases.ts`)
- Karten-Link: `/projekte/{slug}`
- Pro Karte sichtbar:
  - erste 2 Tags (`c.tags.slice(0, 2)`)
  - Meta-Zeile: `{client} · {sector}`
  - H2: `{title}`
  - Tagline (italic): `{tagline}`
  - Metriken-Labels: `Dauer` → `{duration}` und `Scope` → `{scale}`

### Section 3 — Filterleiste

- Label: `Filter:`
- Buttons: `Alle` (aktiv) + alle Tags in dieser Reihenfolge:
  `Innovation`, `Operating Model`, `Cross-funktional`, `Transformation`, `Dezentralisierung`,
  `M&A`, `Post-Merger-Integration`, `Selbstwirksamkeit`, `Performance`, `Compensation`,
  `Governance`, `Target Operating Model`, `Strategie`, `Selbstorganisation`, `Wachstum`,
  `Top-Level`, `Dezentralität`, `Führung`

### Section 4 — Alle Cases (Editorial-Liste)

- **H2:** `Alle Cases`
- **Zähler rechts:** `{cases.length} Engagements` → aktuell: `8 Engagements`
- Listenzeilen (Cases 3–8), je Zeile:
  - erste 2 Tags
  - H3: `{title}`
  - Tagline (italic): `{tagline}`
  - Meta: `{client} · {sector} · {duration}`
  - Hover-Pfeil: `→`
  - Link: `/projekte/{slug}`

### Section 5 — Closing CTA (terra)

- **Eyebrow:** `Bereit zur Diagnose?`
- **H2 (zweizeilig):**
  Zeile 1: `Jede Transformation`
  Zeile 2 (italic): `beginnt mit dem Gap.`
- **Subtext:** `Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch. Kein Sales-Deck.`
- **CTA-Button:** `Erstgespräch anfragen` → `/kontakt` (ghost, lg)

---

## Route `/projekte/[slug]` (`src/app/projekte/[slug]/page.tsx`)

Dynamische Case-Detailseite, `generateStaticParams()` über alle 8 Case-Slugs.
Keine eigene `metadata`. Bei unbekanntem Slug → `notFound()`.

### Section 1 — Hero (Hintergrund = Case-Farbe)

- **Back-Link:** `← Shift Cases` → `/projekte`
- Alle Tags des Cases als Chips
- **H1:** `{title}`
- **Tagline (italic):** `{tagline}`
- **Meta-Spalte (Label → Wert):**

| Label | Feld |
|---|---|
| `Mandant` | `client` |
| `Sektor` | `sector` |
| `Dauer` | `duration` |
| `Scope` | `scale` |
| `Lead` | `lead` |

### Section 2 — Narrative

Drei Blöcke mit festen Labels:

| Label | Inhalt |
|---|---|
| `Der Gap` | `{gap}` |
| `Der Shift` | `{shift}` |
| `Das Ergebnis` | `{result}` |

Optionales Zitat (nur wenn `quote` gesetzt):
- Text in typografischen Anführungszeichen: `&ldquo;{quote.text}&rdquo;` → `„…"` bzw. `“{text}”`
- Autor: `{quote.author}`
- Rolle: `{quote.role}`

### Section 3 — Weitere Cases

- **Eyebrow:** `Weitere Shifts`
- Zeigt bis zu 3 andere Cases (`cases.filter(x => x.slug !== c.slug).slice(0, 3)`)
- Pro Karte: `{client}` (Mono-Eyebrow), H3 `{title}`, Hover-Label `Mehr →`
- Link: `/projekte/{other.slug}`

---

## Route `/kontakt` (`src/app/kontakt/page.tsx`)

Keine eigene `metadata`.

### Section 1 — Hero

- **Tag:** `Kontakt`
- **H1 (zweizeilig):**
  Zeile 1: `Erstgespräch`
  Zeile 2 (italic, terra): `vereinbaren.`

### Section 2 — Kontakt-Split

**Links — Intro + Kontaktdaten**

- **Body:** `Das Erstgespräch dient der gegenseitigen Erkenntnis. Kein Pitch. Kein Sales-Deck. Wir hören zu — und prüfen gemeinsam, ob ein Systemshift der richtige Schritt ist.`
- **Label:** `E-Mail`
  - Link-Text: `hello@1789.consulting`
  - href: `mailto:hello@1789.consulting`
- **Label:** `Standort`
  - Wert (zweizeilig): `Frankfurt am Main` / `Deutschland`

**Rechts — Kontaktformular**

| Feld | Label | Placeholder | Typ |
|---|---|---|---|
| 1 | `Vorname` | `Max` | text |
| 2 | `Nachname` | `Mustermann` | text |
| 3 | `Organisation` | `Ihr Unternehmen` | text |
| 4 | `E-Mail` | `max@organisation.de` | email |
| 5 | `Ihre Situation` | `Beschreiben Sie kurz, womit Sie sich gerade beschäftigen — welche Spannung, welche Lücke, welches Thema.` | textarea (rows=5) |

- **Submit-Button:** `Nachricht senden →` (Variante terra, Größe lg, volle Breite)
- Formular hat aktuell keine `action` / kein Backend.

---

## Route `/labor` (`src/app/labor/page.tsx`)

Keine eigene `metadata`.
Seitenaufbau: `HeroSection` → `FeaturedSection` → `FilterStrip` → `ContentGrid` → `FormatsSection` → `NewsletterCTA` → `ArchiveFooter`

### Section 1 — Hero

- **Tag:** `Denk Labor`
- **H1 (zweizeilig):**
  Zeile 1: `Wo Theorie`
  Zeile 2 (italic, terra): `auf Praxis trifft.`
- **Body:**
  `Im Denk Labor veröffentlichen wir, woran wir denken: Whitepaper aus unserer Forschung, Prototypen aus laufenden Mandaten, Debattenbeiträge zu strukturellen Fragen und Podcast-Folgen mit Menschen, die uns herausfordern. Ein offenes Archiv unserer Auseinandersetzung mit Organisation.`
  > Im Quelltext steht `Debatten­beiträge` mit einem weichen Trennzeichen (`&shy;`, U+00AD) zwischen „Debatten" und „beiträge".

### Section 2 — Featured

- **Eyebrow:** `★ Featured · diese Woche`
- **Meta-Zeile:** `{type} · {meta}` → `Essay · 8 Min · April 2024`
- **H2 / Titel:** `Nähe als Organisationsprinzip — warum wir Corporate Therapy auf die Bühne bringen`
- **Autor:** `Huma Nagafi`
- **Excerpt:** `Eine Reflexion über Distanz, Vertrauen und die Frage, wieso Organisationen den Mut zur Nähe oft erst auf der Bühne finden — und was das für moderne Operating Models bedeutet.`
- **Bild:** `/labor/Artikel_Cover_1.jpg` (alt = Titel)
- **CTA:** `Weiterlesen →` → `href: '#'`

FEATURED-Datensatz vollständig:

```ts
{
  type:     'Essay',
  title:    'Nähe als Organisationsprinzip — warum wir Corporate Therapy auf die Bühne bringen',
  author:   'Huma Nagafi',
  date:     'April 2024',
  readTime: '8 Min',
  excerpt:  'Eine Reflexion über Distanz, Vertrauen und die Frage, wieso Organisationen den Mut zur Nähe oft erst auf der Bühne finden — und was das für moderne Operating Models bedeutet.',
  image:    '/labor/Artikel_Cover_1.jpg',
  href:     '#',
}
```

### Section 3 — Filter-Strip

Buttons mit Zähler. `Alle` = `ITEMS.length + 1` = **12**.
Reihenfolge: `Alle`, dann `TYPES`:

| Label | Zähler (berechnet) |
|---|---|
| `Alle` | 12 |
| `Podcast` | 3 |
| `Essay` | 2 |
| `Whitepaper` | 1 |
| `Experiment` | 2 |
| `Prototyp` | 1 |
| `Debatte` | 2 |
| `Theorie` | 1 |

### Section 4 — Content-Grid (Bento, 11 Items)

Meta-Zeile jeder Karte: `{type} · {itemMeta}` — `itemMeta` setzt zusammen aus
`#{episode}` · `duration` · `pages` · `readTime` · `date` (nur vorhandene Felder, mit ` · ` verbunden).
Byline: `author` oder `mit {guest}`.

Alle 11 `ITEMS` verbatim:

```ts
[
  {
    type:     'Podcast',
    title:    'Das Internet: Utopie, Infrastruktur, Schlachtfeld',
    guest:    'Marie Kilg',
    date:     'März 2024',
    duration: '47 Min',
    episode:  142,
    excerpt:  'Wie das Netz unsere Vorstellung von Öffentlichkeit, Macht und Selbstorganisation verändert hat — und welche Strukturen es heute braucht.',
    image:    '/labor/Artikel_Cover_2.webp',
    href:     '#',
  },
  {
    type:    'Whitepaper',
    title:   'Target Operating Models in regulierten Märkten',
    author:  '1789 Research',
    date:    'März 2024',
    pages:   '24 Seiten',
    excerpt: 'Wie Banken, Versicherer und Energieunternehmen Operating Models entwickeln, die Compliance-Anforderungen und Wertschöpfung gleichzeitig tragen.',
    image:   '/labor/Artikel_Cover_3.jpg',
    href:    '#',
  },
  {
    type:    'Experiment',
    title:   'Mission Boards als Entscheidungsformat',
    author:  'Pilot bei greyt.',
    date:    'Februar 2024',
    excerpt: 'Ein Format, das wöchentliche Entscheidungsroutinen so verankert, dass Verantwortung sichtbar wird — und Strategie nicht im Statusmeeting verschwindet.',
    href:    '#',
  },
  {
    type:     'Debatte',
    title:    'Selbstorganisation ist kein Selbstläufer',
    author:   'Mary Jane Bolton',
    date:     'Februar 2024',
    readTime: '6 Min',
    excerpt:  'Warum sich Selbstorganisation nicht installieren lässt — und welche Voraussetzungen Führung schaffen muss, damit sie überhaupt tragen kann.',
    href:     '#',
  },
  {
    type:    'Prototyp',
    title:   'Verantwortungslandkarte als Onboarding-Tool',
    author:  '1789 Research',
    date:    'Januar 2024',
    excerpt: 'Ein visueller Prototyp, der neue Mitarbeitende durch die ungeschriebenen Entscheidungswege ihrer Organisation führt.',
    href:    '#',
  },
  {
    type:     'Theorie',
    title:    'Strukturkopplung in komplexen Organisationen',
    author:   'Patrick Breitenbach',
    date:     'Januar 2024',
    readTime: '12 Min',
    // Hinweis: 'Transformations­begleitung' enthält ein Soft-Hyphen (&shy;)
    excerpt:  'Eine Auseinandersetzung mit Luhmanns Begriff der Strukturkopplung und seiner Anwendbarkeit auf moderne Transformationsbegleitung.',
    href:     '#',
  },
  {
    type:     'Podcast',
    title:    'Strategie und Struktur — was zuerst?',
    guest:    'Patrick Breitenbach',
    date:     'Januar 2024',
    duration: '52 Min',
    episode:  141,
    // Hinweis: 'Organisations­entwicklung' enthält ein Soft-Hyphen (&shy;)
    excerpt:  'Eine Debatte über die Henne-Ei-Frage der Organisationsentwicklung — und warum beide Antworten meistens unvollständig sind.',
    href:     '#',
  },
  {
    type:     'Essay',
    title:    'Operating Models sind keine Org-Charts',
    author:   'Huma Nagafi',
    date:     'Dezember 2023',
    readTime: '10 Min',
    // Hinweis: 'Aufbau­organisation' enthält ein Soft-Hyphen (&shy;)
    excerpt:  'Warum der häufigste Reflex — "wir brauchen eine neue Aufbauorganisation" — meist die falsche Antwort auf das richtige Problem ist.',
    href:     '#',
  },
  {
    type:    'Experiment',
    // Hinweis: 'Entscheidungs­tagebücher' enthält ein Soft-Hyphen (&shy;)
    title:   'Entscheidungstagebücher für Führungsteams',
    author:  '1789 Research',
    date:    'Dezember 2023',
    // Hinweis: 'Entscheidungs­tagebuch' enthält ein Soft-Hyphen (&shy;)
    excerpt: 'Wir haben drei Führungsteams 90 Tage lang ein gemeinsames Entscheidungstagebuch führen lassen. Das sind die Befunde.',
    href:    '#',
  },
  {
    type:     'Podcast',
    title:    'Social Entrepreneurship ohne Illusionen',
    guest:    'Agnesa Kolica',
    date:     'Dezember 2023',
    duration: '51 Min',
    episode:  140,
    excerpt:  'Was es wirklich braucht, wenn Wirkung das Geschäftsmodell ist — und wie sich Strukturen anders verhalten müssen.',
    href:     '#',
  },
  {
    type:     'Debatte',
    title:    'KI ist kein Add-on zur Organisation',
    author:   'Mary Jane Bolton',
    date:     'November 2023',
    readTime: '7 Min',
    excerpt:  'Warum die meisten KI-Initiativen scheitern, weil sie als Tool-Einführung behandelt werden — und nicht als organisationaler Eingriff.',
    href:    '#',
  },
]
```

Grid-Anordnung (Kartentypen): Row 1 `LargeCard(a)` + `LargeCard(b)` · Row 2 `CompactCard(c)` + `QuoteCard(d)` ·
Row 3 `CompactCard(e)` + `QuoteCard(f)` + `CompactCard(g)` · Row 4 `CompactCard(h)` + `LargeCard(i)` ·
Row 5 `LargeCard(j)` + `QuoteCard(k)`

### Section 5 — Formate (dunkel, ink)

- **Eyebrow:** `Formate`
- **H2 (zweizeilig):**
  Zeile 1: `Wiederkehrende`
  Zeile 2 (italic, terra): `Auseinandersetzungen.`

Drei Format-Karten (`FORMATS`):

| Kind (Eyebrow) | Cadence (rechts) | Name (H3) | Blurb | CTA | href |
|---|---|---|---|---|---|
| `Podcast` | `wöchentlich` | `Corporate Therapy` | `Gespräche über das Innere von Organisationen — Strukturen, Routinen, Wachstumsschmerzen.` | `Alle Folgen →` | `#` |
| `Whitepaper` | `quartalsweise` | `1789 Research Letter` | `Tiefere Analysen aus aktuellen Mandaten und unserer Auseinandersetzung mit Organisationstheorie.` (im Code `Organisations­theorie` mit Soft-Hyphen) | `Alle Folgen →` | `#` |
| `Experiment` | `unregelmäßig` | `Experimente aus dem Feld` | `Was wir in Piloten ausprobieren, dokumentieren und mit unseren Mandanten weiterentwickeln.` | `Alle Folgen →` | `#` |

### Section 6 — Newsletter-CTA

- **Eyebrow:** `✉ Newsletter`
- **H2 (zweizeilig):**
  Zeile 1: `Neue Beiträge`
  Zeile 2 (italic, terra): `direkt im Postfach.`
- **Body:** `Etwa einmal im Monat — Whitepaper, Essays, neue Podcastfolgen. Nie Spam, immer ohne Pflichtfelder.`
- **Formular:**
  - `action="https://1789.us-east-1.list-manage.com/subscribe/post"`, `method="post"`, `target="_blank"`
  - Input `name="EMAIL"`, `type="email"`, `required`, Placeholder `ihre@email.de`, `aria-label="E-Mail-Adresse"`
  - Submit-Button: `Newsletter abonnieren →`

### Section 7 — Archiv-Footer

- **Eyebrow:** `Archiv`
- **Text (italic):** `Über 140 Podcast-Folgen, 30+ Essays und Whitepaper aus zwei Jahrzehnten Auseinandersetzung mit Organisation.`
- **Link:** `Vollständiges Archiv →` → `#`

---

## Route `/impressum` (`src/app/impressum/page.tsx`)

### Metadata

```ts
export const metadata: Metadata = {
  title: 'Impressum — 1789 Innovation',
  robots: { index: false, follow: false },
}
```

### Hero

- **Tag:** `Legal`
- **H1:** `Impressum`

### Abschnitte (Heading → Body, `\n` = Zeilenumbruch, `whiteSpace: pre-line`)

**Angaben gemäß § 5 TMG**

```
1789 Innovations GmbH
Elbestraße 17
60329 Frankfurt am Main
```

**Geschäftsführung**

```
Human Nagafi und Mary-Jane Bolten
```

**Registereintrag**

```
Eintragung im Handelsregister
Registergericht: Amtsgericht Frankfurt
Registernummer: 143364
Berufsbezeichnung: Management Consulting
```

**Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV**

```
Postadresse:
1789 Innovations GmbH
Coventrystr. 31
65934 Frankfurt am Main
```

**Online-Streitbeilegung**

```
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.

Unsere E-Mail-Adresse finden Sie oben im Impressum.

Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
```

**Haftung für Inhalte**

```
Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
```

**Haftung für Links**

```
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.

Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
```

**Urheberrecht**

```
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
```

### Abschluss-Link

- `← Zurück zur Startseite` → `/`

---

## Route `/datenschutz` (`src/app/datenschutz/page.tsx`)

### Metadata

```ts
export const metadata: Metadata = {
  title: 'Datenschutzerklärung — 1789 Innovation',
  robots: { index: false, follow: false },
}
```

### Hero

- **Tag:** `Legal`
- **H1:** `Datenschutz&shy;erklärung` (Soft-Hyphen zwischen „Datenschutz" und „erklärung"; angezeigt: `Datenschutzerklärung`)

### Abschnitte

**Datenschutz**

```
Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
```

**Teildienste**

```
Beim Zugriff auf manche Teildienste unserer Website (z.B. um den Podcast Corporate Therapy zu hören) werden zusätzliche personenbezogene Daten verarbeitet.

Dabei verarbeitete Datenkategorien: technische Verbindungsdaten des Serverzugriffs (IP-Adresse, Datum, Uhrzeit, abgefragte Seite, Browser-Informationen).

Zweck der Verarbeitung: Auslieferung von Inhalten, die von Dritten bereitgestellt werden und die Übermittlung von Audio-Inhalten.
```

**Datenerfassung**

```
Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.

Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
```

**Cookies**

```
Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.

Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.

Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
```

**Google Analytics**

```
Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.

Google Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.

Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google.

Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren.
```

**LinkedIn**

```
Unsere Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA. Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Recommend-Button" von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.
```

**YouTube**

```
Unsere Webseite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.

Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
```

**Spotify**

```
Auf unserer Seite verwenden wir Social Plugins des Anbieters Spotify AB, Regeringsgatan 19, SE-111 53 Stockholm, Schweden. Durch das Benutzen von Spotify werden die von Ihnen besuchten Webseiten mit Ihrem evtl. vorhandenen Spotify Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Spotify übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung erhalten.
```

**Buzzsprout**

```
Einige Teilbereiche unserer Website nutzen Plugins des Anbieters Buzzsprout. Buzzsprout gehört und wird betrieben von Higher Pixels, Inc., 5133 San Jose Blvd, Jacksonville, Florida 32207, US. Bei der Nutzung der Website durch Klick auf Buzzsprout Apps werden die von Ihnen besuchten Webseiten mit Ihrem evtl. vorhandenen Buzzsprout Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Buzzsprout und Higher Pixels, Inc. übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung erhalten.
```

**Apple Podcast**

```
Auf unseren Seiten sind Funktionen des Anbieters Apple Podcast eingebunden.

Diese Funktionen werden angeboten durch Apple Distribution International Limited, mit Sitz in Hollyhill Industrial Estate, Hollyhill, Cork, Republik Irland (für alle Nutzende aus der EU). Durch das Benutzen von Apple Podcast werden die von Ihnen besuchten Webseiten mit Ihrer Apple ID verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Apple übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Apple erhalten.
```

**Amazon Music**

```
Unsere Website nutzt Funktionen des Dienstes Amazon Music. Diese Funktionen werden angeboten durch die Amazon, 525 Market St, San Francisco, California 94105, US. Wenn Sie in Ihrem Amazon-Account eingeloggt sind, können Sie durch Anklicken des Buttons die Inhalte unserer Seiten mit Ihrem Amazon-Profil verlinken. Dadurch kann Amazon Music den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Amazon oder Amazon Music erhalten.
```

**Widerspruch Werbe-Mails**

```
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
```

### Abschluss-Link

- `← Zurück zur Startseite` → `/`

---

## 404-Seite (`src/app/not-found.tsx`)

- **Große Zahl:** `404`
- **H1:** `Diese Seite hat den Shift noch nicht gemacht.`
- **Body:** `Der Gap zwischen Absicht und Realität ist manchmal größer als gedacht.`
- **CTA-Button:** `← Zur Startseite` → `/` (Variante primary)

---

## AnsatzSection (`src/components/organisms/AnsatzSection.tsx`) — Homepage-Modul

Dunkle Section (ink) mit 5 vertikalen Phasen-„Tabs".

### Header

- **Tag:** `Unser Ansatz`
- **H2 (zweizeilig):**
  Zeile 1: `Von Diagnose`
  Zeile 2 (italic, terra): `zur Eigenständigkeit.`

### Fünf Steps

| Num | Meta | Titel | Leitfrage | Tagline | Farbe | Glyph |
|---|---|---|---|---|---|---|
| `01` | `Diagnose` | `Sichtbar machen` | `Was blockiert uns wirklich?` | `Reale Entscheidungen, Routinen und Reibungen sichtbar machen.` | TERRA | GlyphSee |
| `02` | `Zielbild` | `Entscheidbar machen` | `Wie müsste unsere Organisation arbeiten?` | `Erkenntnis in ein entscheidbares Zielmodell übersetzen.` | SAGE | GlyphTarget |
| `03` | `Pilot` | `Gestaltbar machen` | `Wie kommt das Modell in echte Arbeit?` | `Zielbilder früh in reale Arbeitssituationen übersetzen.` | SAND | GlyphFrame |
| `04` | `Praxis` | `Erprobbar machen` | `Was funktioniert wirklich?` | `In der Praxis prüfen, anpassen und verankern.` | TERRA | GlyphLoop |
| `05` | `Transfer` | `Unabhängig machen` | `Wie bleibt es wirksam, wenn 1789 rausgeht?` | `Verantwortung und Rhythmus für eigenständige Weiterentwicklung.` | SAGE | GlyphHandover |

### Footer

- **Lead-in-Text:** `Fünf Phasen, in denen wir Organisationen von der ersten Diagnose bis zur selbstständigen Weiterentwicklung begleiten.`
- **Link:** `Den vollständigen Ansatz lesen →` → `/ansatz`

---

## LaborSection (`src/components/organisms/LaborSection.tsx`) — Homepage-Modul

Drei-Tier-Editorial-Spread. Alle Item-Links zeigen auf `/labor`.

### Header

- **Tag:** `Denk Labor`
- **H2 (zweizeilig):**
  Zeile 1: `Wo Organisationstheorie`
  Zeile 2 (italic, terra): `auf Praxis trifft.`

### Tier 1 — Featured

- **Eyebrow:** `Essay · 8 Min · 2024`
- **Titel:** `Nähe als Organisationsprinzip — warum wir Corporate Therapy auf die Bühne bringen`
- **Autor:** `Huma Nagafi`
- **Intro:** `Eine Reflexion über Distanz, Vertrauen und die Frage, wieso Organisationen den Mut zur Nähe oft erst auf der Bühne finden.`
- **Bild:** `/labor/Artikel_Cover_1.jpg` (alt = Titel) · Ornament `E` · href `/labor`

### Tier 2 — Medium (2 Karten)

| Eyebrow | Titel | Autor | Bild | Ornament | href |
|---|---|---|---|---|---|
| `Podcast · #142 · 47 Min` | `Das Internet: Utopie, Infrastruktur, Schlachtfeld` | `mit Marie Kilg` | `/labor/Artikel_Cover_2.webp` | `#142` | `/labor` |
| `Whitepaper · 24 Seiten · 2024` | `Target Operating Models in regulierten Märkten` | `1789 Research` | `/labor/Artikel_Cover_3.jpg` | `WP` | `/labor` |

### Tier 3 — Liste (3 Zeilen, ohne Bild)

| Eyebrow | Titel | Autor | href |
|---|---|---|---|
| `Experiment · 2023` | `Mission Boards als Entscheidungsformat` | `Pilot bei greyt.` | `/labor` |
| `Podcast · #141 · 52 Min` | `Strategie und Struktur — was zuerst?` | `mit Patrick Breitenbach` | `/labor` |
| `Essay · 6 Min · 2024` | `Selbstorganisation ist kein Selbstläufer` | `Mary Jane Bolton` | `/labor` |

### Bottom-Cluster

- **Text:** `Podcasts, Essays, Whitepaper und Experimente — was im Hintergrund unserer Arbeit entsteht.`
- **Link:** `Alle Inhalte →` → `/labor`

### Newsletter-Karte

- **Eyebrow:** `✉ Newsletter`
- **H4:** `Was im Labor entsteht — direkt im Postfach.`
- **Formular:** `action="https://1789.us-east-1.list-manage.com/subscribe/post"`, `method="post"`, `target="_blank"`
  - Input `name="EMAIL"`, `type="email"`, `required`, Placeholder `E-Mail`, `aria-label="E-Mail-Adresse"`
  - Submit-Button: Beschriftung `→`, `aria-label="Newsletter abonnieren"`

---

## TestimonialsSection (`src/components/organisms/TestimonialsSection.tsx`)

Terra-Section, 4 Karten sichtbar (Desktop) / 1 (Mobile), Pfeil-Navigation.

### Header

- **Tag / Pill:** `Stimmen`
- **H2:** `Was Kunden sagen.`
- Pfeil-Buttons: `aria-label="Vorherige"` / `aria-label="Nächste"`

### Testimonials (5, in Reihenfolge)

Fettungen im Original sind mit `**…**` markiert (`em()`-Helper).

**1 — Sven Kalisch**

> 1789 führt uns bei der Gestaltung eines **Target-Operating-Models**, das den Anforderungen unseres schnelllebigen, dynamischen Marktes gerecht wird. 1789 geht weit über die traditionelle Beratung hinaus: Es handelt sich um einen **gemeinsamen Entwicklungsprozess auf Augenhöhe** – sie sind **Innovatoren mit herausragender Expertise**.

- Name: `Sven Kalisch`
- Titel: `CEO`
- Unternehmen: `teccle group`
- Foto: `/testimonials/sven-kalisch.jpeg`
- LinkedIn: `https://www.linkedin.com/in/sven-kalisch-b4113610b/`
- Case-Link: `/projekte/integration` · Case-Label: `Integration: 15 Firmen, eine Organisation`

**2 — Daniel Kalisch**

> Es war sehr beeindruckend, **wie schnell uns 1789 bereits nach dem ersten Kennenlernen vollends durchdrungen hat**. 1789 hat uns **gechallenged** — immer anpackend, partnerschaftlich und stets **mit Blick auf klare Resultate und Actions**.

- Name: `Daniel Kalisch`
- Titel: `General Manager D.A.CH.`
- Unternehmen: `WD-40 Company`
- Foto: `/testimonials/daniel-kalisch.jpeg`
- LinkedIn: `https://www.linkedin.com/in/daniel-kalisch-3b21a651`
- Case-Link: `/projekte/innovationskraft-durch-zusammenarbeit` · Case-Label: `Innovationskraft durch Zusammenarbeit`

**3 — Timo Salzsieder**

> Mit einem **tiefen Verständnis für die Herausforderungen eines Konzerns** und für die Notwendigkeit, sich an neue Gegebenheiten anzupassen, wurde 1789 ausgewählt, um von **strategischer Planung über Konzeption bis hin zur Implementierung** als Partner zu fungieren.

- Name: `Timo Salzsieder`
- Titel: `Chief Information Officer`
- Unternehmen: `Müller Holding GmbH & Co. KG`
- Foto: `/testimonials/timo-salzsieder.jpeg`
- LinkedIn: `https://www.linkedin.com/in/timo-salzsieder-88993514`
- Case-Link: `null` · Case-Label: `null`

**4 — Viola Krauss**

> Besonders wertvoll war für uns die Unterstützung seitens 1789 beim **Workshopdesign und der Moderation großer Gruppen**, einerseits im Managementteam aber auch mit ausgewählten Mitarbeitenden. So ist es uns gelungen, **unterschiedliche Zielgruppen aktiv in den Prozess einzubinden**. Außerdem war die Zusammenarbeit geprägt von **großem Vertrauen** und hat zu jedem Zeitpunkt Spaß gemacht.

- Name: `Viola Krauss`
- Titel: `Chief People and Culture Officer`
- Unternehmen: `WTS Deutschland`
- Foto: `/testimonials/viola-krauss.jpg`
- LinkedIn: `https://www.linkedin.com/in/viola-krauss-3a09254b`
- Case-Link: `/projekte/motivieren-und-entwickeln` · Case-Label: `Motivieren und Entwickeln`

**5 — Henrik Ekstrand**

> Gemeinsam mit 1789 haben wir ein **Operating Model geschaffen**, angepasst an unsere junge Kultur und Leistungsorientiertheit — unbeeinflusst von leistungsbeschneidenden Strukturen anderer Unternehmen. Zentral war für uns, **die Verantwortungsfähigkeit der Mitarbeiter zu erhöhen**, um ihre Schaffenskräfte zu fördern, was 1789 in der **„Selbstorganisierenden Organisation"** realisieren konnte.

- Name: `Henrik Ekstrand`
- Titel: `Founder`
- Unternehmen: `greyt.`
- Foto: `/testimonials/henrik-ekstrand.jpeg`
- LinkedIn: `https://www.linkedin.com/in/henrikekstrand/`
- Case-Link: `/projekte/skalierung-und-qualitaet` · Case-Label: `Skalierung und Qualität durch Struktur`

### Weitere Labels in der Karte

- Case-Link-Beschriftung: `Case ↗` (title-Attribut = Case-Label)
- LinkedIn-Link `aria-label`: `{name} auf LinkedIn`
- Firmen-Pill unten links im Portrait: `{company}`

---

## SystemshiftAccordion (`src/components/organisms/SystemshiftAccordion.tsx`)

Vier-Phasen-Akkordeon (Systemshift Cycle) mit Collage-Panel links.
Alle Items verlinken auf `/ansatz`.

| Num | Titel | Subtitle (italic, terra) | Body | Variant |
|---|---|---|---|---|
| `01` | `Analyse & Erkenntnis` | `Sehen, was ist.` | `Eine Organisation kann nur Dinge erkennen und ändern, um die sie weiß. Wir setzen sie in die Lage, sich in ihrem System zu erkennen — schonungslos, präzise, ohne Vorannahmen.` | `analyse` |
| `02` | `Change by Action` | `Verändern, während es passiert.` | `Veränderung wird sofort Teil des Vorgehens. Die Transformation beginnt während — nicht nach — unserem Prozess. Handlung erzeugt Erkenntnis, Erkenntnis treibt Handlung.` | `change` |
| `03` | `Responsibility` | `Verbindlichkeit gestalten.` | `Wir gestalten verantwortungsgetriebene Operating Modelle. Verbindlichkeitsstrukturen als Basis nachhaltiger Wirkung — jede Rolle weiß, wofür sie steht.` | `responsibility` |
| `04` | `Iterate` | `Kontinuierlich wachsen.` | `Artefaktgetrieben, pragmatisch, partizipativ. Wir strapazieren Organisationen und fordern ihre Fähigkeit zur Veränderung — immer wieder, immer tiefer.` | `iterate` |

### Weitere Labels

- Inline-CTA in jeder aufgeklappten Zeile: `Mehr erfahren` → `/ansatz`
- Akkordeon-Pfeil (dekorativ): `→`
- Abschluss-CTA-Button unter der Liste: `Ansatz im Detail →` → `/ansatz` (ghost)

---

## ClientLogoCarousel (`src/components/molecules/ClientLogoCarousel.tsx`)

- **Section-Label:** `Kunden & Partner` (im Code `Kunden &amp; Partner`)
- Logos sind Inline-SVGs; jedes bekommt `aria-label` und `title` = Name.
- Der exportierte Array `clientLogos` wird auch vom HeroLogo-Marquee genutzt.

### Logo-Namen in Reihenfolge (sichtbarer Wortmarken-Text in Klammern)

| # | `name` (aria-label / title) | Im SVG gesetzter Text |
|---|---|---|
| 1 | `Procter & Gamble` | `P&G`, `PROCTER`, `&`, `GAMBLE` |
| 2 | `Schwäbisch Hall` | `Schwäbisch Hall` |
| 3 | `Deutsche Bank` | (reines Pfad-Logo, kein Text) |
| 4 | `Commerzbank` | (reines Pfad-Logo, kein Text) |
| 5 | `Stadt Freiburg` | `STADT`, `Freiburg` |
| 6 | `WTS` | `WTS` |
| 7 | `Metro Digital` | `METRO`, `digital` |
| 8 | `Gelsenwasser` | `Gelsenwasser` |
| 9 | `PwC` | `PwC` |
| 10 | `Mercedes-Benz Group` | `MERCEDES-BENZ`, `GROUP` |
| 11 | `WD-40` | `WD-40` |
| 12 | `greyt` | `greyt` |
| 13 | `teccle group` | `teccle group` |

---

## QuestionsTicker (`src/components/molecules/QuestionsTicker.tsx`)

- **Section-Label:** `Was unsere Kunden fragen`
- Trenner-Ornament zwischen den Fragen: `◆`

### Fragen (Reihenfolge im Marquee, für den Loop verdoppelt)

1. `Warum greifen unsere Strategien nicht mehr?`
2. `Wie bauen wir Eigenverantwortung wirklich in die Struktur ein?`
3. `Was hält uns davon ab, das zu sein, was wir wollen?`
4. `Wie schaffen wir Transformation ohne die Organisation zu lähmen?`
5. `Weshalb entscheiden wir noch wie vor 10 Jahren?`
6. `Wo beginnt eigentlich unsere Veränderung?`
7. `Was ist unser tatsächliches Operating Model?`
8. `Wie machen wir den Gap endlich besprechbar?`

---

## Datenquelle: `src/data/cases.ts`

### Typ

```ts
export type CaseStudy = {
  slug: string
  client: string
  sector: string
  title: string
  tagline: string
  /** Short punchy teaser shown on homepage cards — challenge/result framing */
  teaser?: string
  tags: string[]
  duration: string
  scale: string
  lead: string
  gap: string        // Der Gap — was war das eigentliche strukturelle Problem?
  shift: string      // Was haben wir getan?
  result: string     // Was hat sich verändert?
  quote?: { text: string; author: string; role: string }
  color: 'terra' | 'sage' | 'ink' | 'neutral'
  featured?: boolean
  /** Path relative to /public — e.g. '/projects/wd40.jpg'. Omit to show placeholder. */
  image?: string
}
```

Hilfsfunktionen: `getCaseBySlug(slug)`, `featuredCases = cases.filter(c => c.featured)`.

### Case 1 — WD-40 Company

```ts
{
  slug: 'innovationskraft-durch-zusammenarbeit',
  client: 'WD-40 Company',
  sector: 'Consumer Goods',
  title: 'Innovationskraft durch Zusammenarbeit',
  tagline: 'Wie ein Marktführer lernte, seinen eigenen Erfolg zu hinterfragen.',
  teaser: 'Wie wir einem Weltmarktführer halfen, die eigenen Silos zu durchbrechen — und aus internem Konkurrenzdenken echte Innovationskraft zu machen.',
  tags: ['Innovation', 'Operating Model', 'Cross-funktional'],
  duration: '8 Monate',
  scale: 'DACH-Organisation',
  lead: 'Mary-Jane Bolten',
  gap: 'Kommerzielle und organisatorische Innovationen kollidierten mit etablierten Praktiken. Silodenken verhinderte, dass neue Ideen die Abteilungsgrenze überwanden — obwohl die Marktführerschaft es erlaubt hätte, mutig zu sein.',
  shift: 'Entwicklung und Implementierung eines passgenauen Innovations-Frameworks: von der Tiefenanalyse der Prozesslandschaft bis zum pilotierten Praxisprojekt mit Design-Thinking-Methoden. Wir haben nicht die Mindsets der Menschen verändert — sondern die Strukturen, die ihre Zusammenarbeit verhinderten.',
  result: 'Ein Framework, das innovative Zusammenarbeitsformen in praktikable Prozessstrukturen überführt. Silos wurden durchbrochen, eine angepasste Fehlerkultur etabliert und die Fähigkeit geschaffen, künftigen Herausforderungen proaktiv zu begegnen.',
  quote: {
    text: 'Es war sehr beeindruckend, wie schnell uns 1789 bereits nach dem ersten Kennenlernen vollends durchdrungen hat.',
    author: 'Daniel Kalisch',
    role: 'General Manager WD-40 D.A.CH.',
  },
  color: 'terra',
  featured: true,
  image: '/projects/wd40.jpg',
}
```

### Case 2 — Procter & Gamble (Dezentralität)

```ts
{
  slug: 'effektivitaet-und-kundennaehe',
  client: 'Procter & Gamble',
  sector: 'Consumer Goods',
  title: 'Effektivität und Kundennähe durch Dezentralität',
  tagline: 'Wenn Effizienz-Logik der Kundennähe im Weg steht.',
  teaser: 'Wie wir 200 Mitarbeitende aus der Logik der Masseneffizienz befreit haben — und autonome Teams entstanden, die Kunden wieder wirklich kennen.',
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
}
```

### Case 3 — teccle Group

```ts
{
  slug: 'integration',
  client: 'teccle Group',
  sector: 'IT-Services / Mittelstand',
  title: 'Integration: 15 Firmen, eine Organisation',
  tagline: 'Target Operating Model für ein Netzwerk, das zusammenwachsen wollte.',
  teaser: 'Wie 15 eigenständige IT-Unternehmen lernten, als eine Organisation zu denken — ohne dabei ihre lokale Stärke und Eigenständigkeit zu verlieren.',
  tags: ['M&A', 'Post-Merger-Integration', 'Selbstwirksamkeit'],
  duration: '~2 Jahre',
  scale: '500 Mitarbeitende, 15+ Unternehmen',
  lead: 'Patrick Breitenbach & Mary-Jane Bolten',
  gap: 'Die Konsolidierung über 15 IT-Service-Unternehmen erzeugte ein strukturelles Dilemma: End-to-End-Betreuung anbieten, ohne lokale Kundenbeziehungen zu opfern. Wachstum und Selbstbestimmung schienen sich gegenseitig auszuschließen.',
  shift: 'Zweiphasiger Prozess: Entwicklung eines Referenzmodells mit Geschäftsführung und Führungskräften (4 Monate), dann Integration der Mitarbeiterstimmen durch Workshops, Interviews und Arbeitsgruppen über 1,5 Jahre. Die Einheit "Professional Services" als Pilot.',
  result: 'Ein dezentrales Operating Model, in dem Teams eigenständig und kompetenzbasiert entscheiden — im Rahmen klarer Strukturen. Enge Kundenbeziehungen erhalten. Selbstbestimmung der Mitarbeitenden gestärkt statt geschwächt.',
  color: 'sage',
  featured: true,
  image: '/projects/teccle.jpg',
}
```

### Case 4 — WTS

```ts
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
  // kein featured, kein image
}
```

### Case 5 — METRO.digital

```ts
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
  // kein quote, kein featured, kein image
}
```

### Case 6 — greyt

```ts
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
  // kein quote, kein featured, kein image
}
```

### Case 7 — Medizin Gruppe

```ts
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
  // kein quote, kein featured, kein image
}
```

### Case 8 — Procter & Gamble (Stabstelle)

```ts
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
  // kein quote, kein featured, kein image
}
```

---

## Anhang: Alle Bildpfade

Bilder werden mit dem Präfix `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}` ausgeliefert.

| Pfad (relativ zu `/public`) | Verwendung |
|---|---|
| `/projects/wd40.jpg` | Case WD-40 Company |
| `/projects/pg.jpg` | Case Procter & Gamble |
| `/projects/teccle.jpg` | Case teccle Group |
| `/labor/Artikel_Cover_1.jpg` | Labor Featured (Essay „Nähe als Organisationsprinzip …") |
| `/labor/Artikel_Cover_2.webp` | Labor Podcast #142 |
| `/labor/Artikel_Cover_3.jpg` | Labor Whitepaper „Target Operating Models …" |
| `/testimonials/sven-kalisch.jpeg` | Testimonial Sven Kalisch |
| `/testimonials/daniel-kalisch.jpeg` | Testimonial Daniel Kalisch |
| `/testimonials/timo-salzsieder.jpeg` | Testimonial Timo Salzsieder |
| `/testimonials/viola-krauss.jpg` | Testimonial Viola Krauss |
| `/testimonials/henrik-ekstrand.jpeg` | Testimonial Henrik Ekstrand |

Fehlende / noch nicht vorhandene Bilder:
- Alle vier Team-Portraits auf `/wir` (`photo: null` → Initialen-Platzhalter)
- Büro-Foto auf `/wir` (Platzhalter mit den Labels `Foto folgt` / `Unser Büro.`)
- Cases 4–8 haben kein `image`

---

## Anhang: Alle CTA-Beschriftungen im Überblick

| Beschriftung | Ziel | Ort |
|---|---|---|
| `Unser Ansatz →` | `/ansatz` | HeroLogo |
| `Erstgespräch vereinbaren` | `/kontakt` | HeroLogo, /ansatz Closing-CTA |
| `Erstgespräch vereinbaren →` | `/kontakt` | Header Mobile-Overlay, Footer, /wir |
| `Erstgespräch anfragen` | `/kontakt` | /leistungen Closing-CTA, /projekte Closing-CTA |
| `Nachricht senden →` | (Formular-Submit) | /kontakt |
| `Den vollständigen Ansatz lesen →` | `/ansatz` | AnsatzSection |
| `Ansatz im Detail →` | `/ansatz` | SystemshiftAccordion |
| `Mehr erfahren` | `/ansatz` | SystemshiftAccordion (je Zeile) |
| `Alle Inhalte →` | `/labor` | LaborSection |
| `Weiterlesen →` | `#` | /labor Featured |
| `Alle Folgen →` | `#` | /labor Formate (3×) |
| `Newsletter abonnieren →` | (Formular-Submit) | /labor |
| `→` (aria-label `Newsletter abonnieren`) | (Formular-Submit) | LaborSection Newsletter-Karte |
| `Vollständiges Archiv →` | `#` | /labor Archiv-Footer |
| `← Shift Cases` | `/projekte` | /projekte/[slug] |
| `Mehr →` | `/projekte/{slug}` | /projekte/[slug] Weitere Cases |
| `Case ↗` | `/projekte/{slug}` | TestimonialsSection |
| `← Zurück zur Startseite` | `/` | /impressum, /datenschutz |
| `← Zur Startseite` | `/` | 404 |
