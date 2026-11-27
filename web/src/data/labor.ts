/* ═══ LABOR — das Modell ═══════════════════════════════════════════════════
   Diese Datei trägt keine Inhalte mehr. Jeder Beitrag steht in einer eigenen
   Datei unter `src/content/labor/` und wird in `src/content/labor/index.ts`
   eingetragen. Hier stehen nur der Typ, die Filterwerte und die Helfer.

   Der Typ ist die Qualitätsprüfung: Fehlt einem Beitrag ein Pflichtfeld oder
   steht dort ein Thema, das es nicht gibt, bricht der Build ab. Deshalb sind
   CATEGORIES und TOPICS `as const` und die Felder darüber typisiert — eine
   Liste aus Strings würde jeden Tippfehler durchlassen.

   Struktur eines Beitrags nach Marys Redaktionsdokument, Abschnitt 2:
   Kopf (Kategorie, Format, Datum), Datenblatt (Wer, Ort, Sprache, Quelle,
   Zugang), Intro, Haupttext unter einer Marke, Outro mit Links.            */

/* ── Kategorien ───────────────────────────────────────────────────────────
   Die erste Filterreihe. „Werkstatt" hat noch keinen Beitrag; die Übersicht
   blendet leere Kategorien aus, statt den Wert hier zu entfernen.          */
export const CATEGORIES = ['Podcast', 'Text', 'Werkstatt', 'Resonanz'] as const
export type Category = (typeof CATEGORIES)[number]

/* ── Themen ───────────────────────────────────────────────────────────────
   Die zweite Filterreihe, quer zu den Kategorien. Die ersten fünf sind
   dieselben Wörter wie bei den Cases, damit Labor und Cases sich gegenseitig
   finden.                                                                  */
export const TOPICS = [
  'Governance Design',
  'Target Operating Model',
  'Organizational Strategy',
  'Post-Merger-Integration',
  'Private Equity',
  'Organisationskultur',
  'Führung',
  'Agilität',
  'KI und Arbeit',
  'Wirtschaftsethik',
  'Transformation',
] as const
export type Topic = (typeof TOPICS)[number]

export type LaborLink = { label: string; href: string }

export type LaborPost = {
  slug: string
  category: Category
  /** Fachartikel, Essay, Folge, Keynote, Panel … — freier als die Kategorie */
  format: string
  title: string
  /** Sichtbar, immer Monat und Jahr, nie ein Tag: „Juni 2026" */
  date: string
  /** Nur zum Sortieren: „2026-06". Das sichtbare Datum sortiert alphabetisch. */
  sort: string
  /** Nur bei Folgen und Videos */
  duration?: string
  /** Volle Namen, immer mit dabei, wer von 1789 beteiligt war */
  people: string
  /** Nur bei Auftritten */
  place?: string
  /** Nur, wenn nicht Deutsch */
  language?: string
  topics: readonly Topic[]
  /** Nur, wenn es einen Case dazu gibt */
  relatedCase?: { label: string; slug: string }
  source?: LaborLink
  /** „frei", „Leseprobe frei, Volltext hinter Paywall" … */
  access?: string
  /** 2–3 Sätze. Vorspann auf der Beitragsseite und Teaser auf der Kachel. */
  intro: string
  /** Absätze des Haupttextes */
  body: readonly string[]
  /** 1–2 Sätze unter der Marke [ Weiter ] */
  outro: string
  links?: readonly LaborLink[]
  /** Bild des Beitrags: oben auf seiner Seite und auf seiner Kachel.
      Fehlt es, trägt die Kachel die ASCII-Zeichnung seines Formats. */
  image?: string
  /** Seitenverhältnis des Bildes, gemessen an der Datei. Die Platte zeigt
      es damit auf der Beitragsseite ungeschnitten — die Cover der Folgen
      sind quadratisch und tragen ihren Titel als Schrift an Ober- und
      Unterkante, ein fester Ausschnitt würde beide Zeilen abschneiden.
      Auf der Kachel gilt es nicht: dort hält das Mosaik ein gleiches Maß,
      und der Titel steht ohnehin als Text darunter. */
  ratio?: string
  /** Urheber des Bildes, wo einer genannt werden muss. Steht klein unter
      dem Bild. */
  credit?: string
  /** „Ein Bild bekommt nur, was herausstechen soll" (Marys Redaktion,
      Abschnitt 3). Diese Beiträge bekommen die breite Kachel; alle anderen
      stehen schmal, auch wenn sie ein Bild tragen. Ohne diese Trennung
      wäre jede Kachel breit, seit es für fast jeden Beitrag ein Bild gibt,
      und das Mosaik wäre keines mehr. */
  feature?: boolean
  /** Was als Medium vorgesehen ist, aber noch nicht da — sichtbar nirgends,
      hier nur, damit es nicht vergessen wird. */
  mediaPending?: string
  /** Bleibt im Labor, auch wenn die Folge aus den acht neuesten fällt */
  pinned?: boolean
}

/* ── Marke über dem Haupttext, je Kategorie ───────────────────────────────
   Gesetzt wie „[ Auf einen Blick ]" auf den Case-Seiten.                   */
export const BODY_MARK: Record<Category, string> = {
  Podcast: 'Aus der Folge',
  Text: 'Worum es geht',
  Werkstatt: 'So gehen wir vor',
  Resonanz: 'Worum es ging',
}

/* ── Corporate Therapy ────────────────────────────────────────────────────
   Die Show-Seiten, nicht die einzelnen Folgen. Unter jeder Folge steht die
   Zeile „Alle Folgen gibt es im Archiv".                                   */
export const PODCAST = {
  spotify: 'https://open.spotify.com/show/4YJAFJozpGByyV6F5IX7o6',
  apple: 'https://podcasts.apple.com/us/podcast/corporate-therapy/id1499611321',
  /** Die eigene Seite des Podcasts im Labor */
  slug: 'corporate-therapy',
} as const

/** Wie viele Folgen im Labor stehen. Kommt eine neue dazu, fällt die älteste
    heraus — außer sie ist `pinned`. */
export const PODCAST_IN_LABOR = 8

/* ── Der Podcast als Ganzes ───────────────────────────────────────────────
   Kein Beitrag, sondern die Show: eine eigene Kachel im Mosaik und eine
   eigene Seite unter `/labor/corporate-therapy`. Der Text ist von Mary
   freigegeben. Hier dockt später der Buzzsprout-Feed an, der die Kachel mit
   der jeweils neuesten Folge füllt (Patrick, 27.11.2026).                  */
export const PODCAST_SHOW = {
  title: 'Corporate Therapy',
  format: 'Podcast',
  blurb:
    'Corporate Therapy ist ein kritischer Management Podcast. Human Nagafi, Mary-Jane Bolten und Patrick Breitenbach sprechen darin mit Gästen aus Wissenschaft und Wirtschaft darüber, wie Organisationen funktionieren, wie sich Arbeit verändert und welche Ideologien unseren Arbeitsalltag prägen. Über 150 Folgen seit 2020.',
  href: '/labor/corporate-therapy',
} as const

/* ── Seitentexte ──────────────────────────────────────────────────────────  */
export const LABOR_LEDE =
  'Im Labor steht, was uns aktuell beschäftigt: Folgen unseres Podcasts Corporate Therapy, Texte, Notizen aus der Werkstatt und Begegnungen.'

export const ARCHIVE_NOTE =
  'Alle Folgen von Corporate Therapy stehen auf Spotify und Apple Podcasts, im Labor stehen die acht neuesten. Texte, Notizen aus der Werkstatt und Begegnungen kommen dazu, sobald sie erscheinen.'

/* ── Helfer ───────────────────────────────────────────────────────────────  */

/** Mikrozeile über dem Titel: Kategorie · Format · Datum, dazu die Dauer. */
export function postMeta(p: LaborPost): string {
  return [p.category, p.format, p.date, p.duration].filter(Boolean).join(' · ')
}

/** Kurzform für die Kachel: Format und Datum reichen dort, die Kategorie
    trägt der Filter. */
export function tileMeta(p: LaborPost): string {
  return [p.format, p.date, p.duration].filter(Boolean).join(' · ')
}

export function bodyMark(p: LaborPost): string {
  return BODY_MARK[p.category]
}

/** Neueste zuerst. Bei gleichem Monat entscheidet der Titel, damit die
    Reihenfolge zwischen zwei Builds nicht springt. */
export function byDateDesc(a: LaborPost, b: LaborPost): number {
  return b.sort.localeCompare(a.sort) || a.title.localeCompare(b.title)
}
