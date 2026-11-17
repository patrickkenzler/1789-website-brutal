#!/usr/bin/env node
/**
 * Cover-Bilder für die Cases über die Flux-API von Black Forest Labs.
 *
 *   npm run covers -- --dry           nur die Prompts zeigen, nichts aufrufen
 *   npm run covers                    alle fehlenden Cover erzeugen
 *   npm run covers -- --only greyt    ein einzelnes neu erzeugen
 *   npm run covers -- --force         auch vorhandene überschreiben
 *
 * Der Schlüssel steht in web/.env.local als BFL_API_KEY und wird über
 * --env-file-if-exists geladen. Die Datei ist gitignoriert; der Schlüssel
 * gehört nicht ins Repo und wird hier auch nirgends ausgegeben.
 *
 * ── Briefing ──────────────────────────────────────────────────────────────
 * Abgeleitet aus den drei vorhandenen Covern (teccle, WD-40, P&G): abstrakte
 * Makroaufnahmen, dunkler Grund, Petrol und Türkis mit orange-roten Akzenten,
 * starkes Korn und Partikel. Keine Menschen, keine Büros, keine Schrift, kein
 * Logo — die Cover sind keine Dokumentation der Projekte, sondern Flächen.
 * Das ist nicht nur Geschmack: ein generiertes Foto von Menschen unter einem
 * echten Kundennamen läse sich als Beleg für etwas, das nie stattgefunden hat.
 *
 * Jedes Bild läuft auf der Seite durch die Halbtonplatte, deshalb braucht die
 * Vorlage Kontrast und Struktur — ein weiches Bild wird im Raster zu Matsch.
 */

import { writeFile, access, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'projects')

/* Die Endpunkte von BFL. flux-pro-1.1 ist der Standard; ein anderes Modell
   lässt sich über BFL_MODEL setzen, ohne das Skript anzufassen. */
const MODEL = process.env.BFL_MODEL ?? 'flux-pro-1.1'
const ENDPOINT = `https://api.bfl.ai/v1/${MODEL}`

/* Die vorhandenen Cover messen 1440×960 — dasselbe Maß, damit die neuen sich
   nicht von den echten unterscheiden. Beide Kanten sind durch 32 teilbar, wie
   die API es verlangt. */
const WIDTH = 1440
const HEIGHT = 960

/* Gemeinsam ist den Bildern nur die Welt, nicht die Machart: dunkler Grund,
   eine enge Palette, ein leuchtendes Ereignis in der Dunkelheit. Genau das
   verbindet auch die drei vorhandenen Cover — teccle ist Malerei, P&G eine
   Flüssigkeit mit Tiefe, WD-40 ein gefundener urbaner Moment. Drei
   verschiedene Bildarten, eine Farbwelt.

   Im ersten Anlauf stand hier zusätzlich "abstract macro photograph",
   dieselbe Lichtführung und dasselbe Korn für alle sechs. Das Ergebnis sah
   aus wie ein einziges Shooting: die Behandlung schlägt das Motiv. Deshalb
   trägt der gemeinsame Teil jetzt nur noch Palette, Dunkelheit und die
   Verbote — jede Machart steht im Motiv selbst. */
const WELT = [
  'very dark, near-black ground',
  'restricted palette: deep teal and petrol blue, burnt orange and vermilion, nothing else',
  'one luminous event against darkness',
  'no people, no text, no logos, no brand marks',
].join(', ')

/* Der Schriftzug steht mittig auf dem Bild. Die Mitte muss deshalb der
   dunkelste Teil sein — eine Anforderung an die Lesbarkeit, keine an den
   Stil, und sie legt die Komposition nicht fest. */
const SATZ = 'the middle of the frame is the darkest area, uncluttered'

/* Das Labor hat eine eigene Welt, und zwar die der drei vorhandenen
   Beitragsbilder: helles Tageslicht, ein gefundener Ort, dokumentarisch und
   trocken beobachtet — ein Affe auf einer Mauer, ein Gewächshaus voller
   Tomatenreihen. Nichts Dunkles, nichts Abstraktes, keine Metapher mit
   erhobenem Zeigefinger. Quadratisch wie die vorhandenen. */
const LABOR_WELT = [
  'bright daylight documentary photograph of a real place',
  'natural light, plain and observational, no studio setup',
  'ordinary subject seen straight on, dry and matter-of-fact',
  'no people in the foreground',
  /* Flux schreibt sonst Pseudo-Buchstaben auf jede Fläche, die nach
     Beschriftung aussieht — Bootsrümpfe, Schilder, Verpackungen. */
  'absolutely no lettering, no numbers, no signage, no writing on any surface, unmarked',
].join(', ')

/* Je Case eine eigene Bildart: Malerei, Langzeitbelichtung, Architektur,
   Textil, Luftbild, Optik. Keine zwei teilen Medium, Maßstab oder
   Lichtführung. Keine bildet den Mandanten oder seine Arbeit ab — die
   Zuordnung ist frei und sorgt nur dafür, dass die sechs unterscheidbar
   bleiben. */
const COVERS = [
  {
    slug: 'steuerung-der-personalgewinnung',
    motiv:
      'long-exposure photograph in a dark empty industrial hall at night, continuous light trails drawn by a moving source, thin orange and teal streaks crossing the black space, motion blur, visible sensor noise',
  },
  {
    slug: 'motivieren-und-entwickeln',
    motiv:
      'thick oil paint dragged across a dark panel with a palette knife, impasto ridges catching light, teal and rust pigment smeared into near-black, painterly, visible brush and knife texture, canvas weave showing through',
  },
  {
    slug: 'kohaerente-vision',
    motiv:
      'brutalist concrete structure photographed from below at dusk, hard geometric edges and deep shadow, a single cold teal skylight above, warm sodium reflections on the concrete, architectural photography, sharp',
  },
  {
    slug: 'skalierung-und-qualitaet',
    motiv:
      'extreme close-up of dark woven fabric, frayed threads of teal and vermilion crossing the weave, fibres lifting from the surface, shallow depth of field, textile macro',
  },
  {
    slug: 'verbindliche-entscheidungen',
    motiv:
      'aerial view of a dark river delta at night, branching channels splitting across black terrain, thin oxidised orange light along the water edges, high altitude, graphic and flat',
  },
  {
    slug: 'entscheidungen-mit-strategischem-ausmass',
    motiv:
      'layered broken glass over a black surface, petrol-coloured caustics and thin vermilion refractions thrown across the shards, sharp fracture lines, optical, studio-lit from one side',
  },
  {
    slug: 'zoe-flottenverband',
    ordner: 'labor',
    quadrat: true,
    welt: LABOR_WELT,
    motiv:
      'small wooden boats moored side by side in a quiet harbour on a clear morning, seen from above at a distance, each boat slightly different, calm green water, plain unmarked hulls',
  },
]

/* ── Argumente ──────────────────────────────────────────────────────────── */
const argv = process.argv.slice(2)
const has = (f) => argv.includes(f)
const val = (f) => {
  const i = argv.indexOf(f)
  return i >= 0 ? argv[i + 1] : undefined
}
const DRY = has('--dry')
const FORCE = has('--force')
const ONLY = val('--only')

const prompt = (c) =>
  c.welt ? `${c.motiv}. ${c.welt}` : `${c.motiv}. ${WELT}. ${SATZ}`
const zielOrdner = (c) => (c.ordner ? join(ROOT, 'public', c.ordner) : OUT)
/* Die API deckelt beide Kanten bei 1440. */
const masse = (c) => (c.quadrat ? [1440, 1440] : [WIDTH, HEIGHT])

const vorhanden = async (p) => {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

/* ── Die API ────────────────────────────────────────────────────────────── */
async function erzeuge(key, text, w = WIDTH, h = HEIGHT) {
  const start = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-key': key },
    body: JSON.stringify({
      prompt: text,
      width: w,
      height: h,
      output_format: 'jpeg',
      safety_tolerance: 2,
      prompt_upsampling: false,
    }),
  })

  if (!start.ok) {
    throw new Error(`Anfrage abgelehnt (${start.status}): ${await start.text()}`)
  }

  const { polling_url: url, id } = await start.json()
  if (!url) throw new Error(`Keine polling_url in der Antwort (id ${id ?? '?'})`)

  /* BFL antwortet asynchron. Alle zwei Sekunden nachfragen, höchstens fünf
     Minuten — danach stimmt etwas nicht und Weiterwarten hilft nicht. */
  const frist = Date.now() + 5 * 60 * 1000
  while (Date.now() < frist) {
    await new Promise((r) => setTimeout(r, 2000))
    const res = await fetch(url, { headers: { 'x-key': key, Accept: 'application/json' } })
    if (!res.ok) throw new Error(`Abfrage fehlgeschlagen (${res.status})`)
    const daten = await res.json()

    if (daten.status === 'Ready') {
      const bild = daten.result?.sample
      if (!bild) throw new Error('Fertig gemeldet, aber kein Bild in der Antwort')
      const datei = await fetch(bild)
      if (!datei.ok) throw new Error(`Bild nicht ladbar (${datei.status})`)
      return Buffer.from(await datei.arrayBuffer())
    }
    if (daten.status && !['Pending', 'Queued', 'Processing'].includes(daten.status)) {
      throw new Error(`Abgebrochen: ${daten.status}${daten.details ? ' — ' + JSON.stringify(daten.details) : ''}`)
    }
  }
  throw new Error('Zeitüberschreitung nach fünf Minuten')
}

/* ── Lauf ───────────────────────────────────────────────────────────────── */
const liste = ONLY ? COVERS.filter((c) => c.slug.includes(ONLY)) : COVERS

if (liste.length === 0) {
  console.error(`Kein Case passt auf "${ONLY}". Bekannt sind:`)
  for (const c of COVERS) console.error('  ' + c.slug)
  process.exit(1)
}

if (DRY) {
  console.log(`Modell ${MODEL} · ${WIDTH}×${HEIGHT} · ${liste.length} Bild(er)\n`)
  for (const c of liste) console.log(`── ${c.slug}\n${prompt(c)}\n`)
  console.log('Trockenlauf — nichts aufgerufen, nichts geschrieben.')
  process.exit(0)
}

const KEY = process.env.BFL_API_KEY
if (!KEY) {
  console.error('BFL_API_KEY fehlt.')
  console.error('Lege web/.env.local an (gitignoriert) mit der Zeile:')
  console.error('  BFL_API_KEY=dein-schluessel')
  process.exit(1)
}

await mkdir(OUT, { recursive: true })

let erzeugt = 0
for (const c of liste) {
  const ziel = join(zielOrdner(c), `${c.slug}.jpg`)
  if (!FORCE && (await vorhanden(ziel))) {
    console.log(`übersprungen  ${c.slug} (vorhanden, --force überschreibt)`)
    continue
  }
  process.stdout.write(`erzeuge       ${c.slug} … `)
  try {
    const [w, h] = masse(c)
    await mkdir(zielOrdner(c), { recursive: true })
    const bild = await erzeuge(KEY, prompt(c), w, h)
    await writeFile(ziel, bild)
    console.log(
      `${Math.round(bild.length / 1024)} kB → public/${c.ordner ?? 'projects'}/${c.slug}.jpg`
    )
    erzeugt++
  } catch (e) {
    console.log('fehlgeschlagen')
    console.error(`              ${e.message}`)
  }
}

console.log(`\n${erzeugt} von ${liste.length} erzeugt.`)
if (erzeugt > 0) {
  console.log('Noch einzutragen: image: \'/projects/<slug>.jpg\' im jeweiligen Case in src/data/cases.ts.')
}
