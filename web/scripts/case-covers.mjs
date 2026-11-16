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

/* Gemeinsamer Teil des Briefings. Steht vor jedem einzelnen Motiv, damit die
   sechs als eine Familie lesen. */
const STIL = [
  'abstract macro photograph, no people, no text, no logos, no recognisable place',
  'very dark near-black ground, deep teal and petrol blue, sparse burnt orange and red accents',
  'strong grain, fine particles and specks suspended in the frame',
  'high micro-contrast, sharp detail against deep shadow, single directional light',
  'no studio look, no gradient backdrop, photographic not illustrated',
].join(', ')

/* Ein Motiv je Case. Die Motive sind Material und Phänomen, nicht Branche:
   keines bildet den Mandanten oder seine Arbeit ab. Die Zuordnung ist frei —
   sie sorgt nur dafür, dass die sechs Bilder sich voneinander unterscheiden. */
const COVERS = [
  {
    slug: 'steuerung-der-personalgewinnung',
    motiv: 'ink diffusing through cold water in slow heavy threads, dense black ground, one thin orange filament cutting across',
  },
  {
    slug: 'motivieren-und-entwickeln',
    motiv: 'cracked mineral surface in raking light, deep teal stone with rust-coloured veins, dust caught in the beam',
  },
  {
    slug: 'kohaerente-vision',
    motiv: 'condensation on dark glass at night, droplets scattering points of turquoise and amber light, depth falling off fast',
  },
  {
    slug: 'skalierung-und-qualitaet',
    motiv: 'spilled pigment powder on wet black asphalt, teal and vermilion granules clustering and dispersing',
  },
  {
    slug: 'verbindliche-entscheidungen',
    motiv: 'layered sediment in a cut section, dark banded strata with a thin oxidised orange seam running through',
  },
  {
    slug: 'entscheidungen-mit-strategischem-ausmass',
    motiv: 'oil film on dark water, interference colours in petrol and copper breaking into fine cells',
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

const prompt = (c) => `${c.motiv}. ${STIL}`

const vorhanden = async (p) => {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

/* ── Die API ────────────────────────────────────────────────────────────── */
async function erzeuge(key, text) {
  const start = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-key': key },
    body: JSON.stringify({
      prompt: text,
      width: WIDTH,
      height: HEIGHT,
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
  const ziel = join(OUT, `${c.slug}.jpg`)
  if (!FORCE && (await vorhanden(ziel))) {
    console.log(`übersprungen  ${c.slug} (vorhanden, --force überschreibt)`)
    continue
  }
  process.stdout.write(`erzeuge       ${c.slug} … `)
  try {
    const bild = await erzeuge(KEY, prompt(c))
    await writeFile(ziel, bild)
    console.log(`${Math.round(bild.length / 1024)} kB → public/projects/${c.slug}.jpg`)
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
