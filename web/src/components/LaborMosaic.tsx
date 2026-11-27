'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ARCHIVE_NOTE,
  PODCAST,
  PODCAST_SHOW,
  tileMeta,
  type LaborPost,
} from '@/data/labor'
import { laborArt } from '@/data/laborArt'
import { seedFrom } from '@/data/asciiCanvas'
import { Plate } from '@/components/ui'
import { AsciiArt } from '@/components/AsciiArt'

/* ═══ DAS MOSAIK MIT SEINEN FILTERN ════════════════════════════════════════
   Eine Komponente, kein Paar: der Filter und die Kacheln teilen sich einen
   Zustand, und eine Übersicht, die ihre eigene Liste nicht kennt, müsste ihn
   über die Seite reichen.

   Zwei Reihen Filter, Kategorie und Thema, beide mit Mehrfachauswahl. Nichts
   ausgewählt heißt alles — deshalb gibt es keinen „Alle"-Knopf, der nur ein
   zweiter Weg zum selben Zustand wäre. Ausgewählt ist ein Chip in der
   Füllung, die das System dafür führt (.chip-fill).

   Kein Zustand in der Adresse: beim statischen Export liest den niemand beim
   Ausliefern, und ein Filter, der erst nach dem Laden greift, ließe die Seite
   einmal falsch erscheinen.                                                */

type Props = {
  posts: LaborPost[]
  categories: string[]
  topics: string[]
}

function Tile({ p, wide }: { p: LaborPost; wide: boolean }) {
  return (
    <Link href={`/labor/${p.slug}`} className={wide ? 'tile tile-wide mosaic-wide' : 'tile'}>
      {p.image ? (
        <Plate src={p.image} alt={p.title} note={null} />
      ) : (
        <AsciiArt art={laborArt(p.format, seedFrom(p.title))} className="tile-art" />
      )}
      <div className="tile-body">
        <span className="data">
          {p.category} · {tileMeta(p)}
        </span>
        <h2 className="d4">{p.title}</h2>
        {wide && <p className="body">{p.intro}</p>}
        <span className="unit">{p.people}</span>
      </div>
    </Link>
  )
}

export function LaborMosaic({ posts, categories, topics }: Props) {
  const [pickedCats, setCats] = useState<string[]>([])
  const [pickedTopics, setTopics] = useState<string[]>([])

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])

  const shown = posts.filter(
    (p) =>
      (pickedCats.length === 0 || pickedCats.includes(p.category)) &&
      (pickedTopics.length === 0 ||
        p.topics.some((t) => pickedTopics.includes(t)))
  )

  const filtered = pickedCats.length > 0 || pickedTopics.length > 0

  return (
    <>
      <div className="labor-filter">
        <div className="labor-filter-row">
          <span className="eyebrow">Kategorie</span>
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={pickedCats.includes(c) ? 'chip chip-fill' : 'chip'}
                aria-pressed={pickedCats.includes(c)}
                onClick={() => toggle(pickedCats, setCats, c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="labor-filter-row">
          <span className="eyebrow">Thema</span>
          <div className="chips">
            {topics.map((t) => (
              <button
                key={t}
                type="button"
                className={pickedTopics.includes(t) ? 'chip chip-fill' : 'chip'}
                aria-pressed={pickedTopics.includes(t)}
                onClick={() => toggle(pickedTopics, setTopics, t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <p className="unit labor-filter-count" aria-live="polite">
          {filtered
            ? `${shown.length} von ${posts.length} Beiträgen`
            : `${posts.length} Beiträge`}
        </p>
      </div>

      <div className="hairgrid mosaic">
        {/* Der Podcast als Ganzes führt das Mosaik an. Er ist keine Folge und
            steht deshalb außerhalb des Filters — wer nach einem Thema sucht,
            sucht einen Beitrag, nicht die Show. */}
        {!filtered && (
          <Link href={PODCAST_SHOW.href} className="tile mosaic-xl">
            <AsciiArt
              art={laborArt('Podcast', seedFrom(PODCAST_SHOW.title))}
              className="tile-art"
            />
            <div className="tile-body">
              <span className="data">{PODCAST_SHOW.format} · seit 2020</span>
              <h2 className="d3">{PODCAST_SHOW.title}</h2>
              <p className="body">{PODCAST_SHOW.blurb}</p>
              <span className="unit">
                Human Nagafi, Mary-Jane Bolten, Patrick Breitenbach
              </span>
            </div>
          </Link>
        )}

        {/* Breit steht, was herausstechen soll, nicht alles mit Bild. Seit
            es für fast jeden Beitrag ein Bild gibt, wäre sonst jede Kachel
            breit und das Mosaik keines mehr. */}
        {shown.map((p) => (
          <Tile key={p.slug} p={p} wide={Boolean(p.feature)} />
        ))}

        {/* Der Schluss der Liste. Kein Link mehr ins Nichts: das vollständige
            Archiv liegt bei den Plattformen, nicht auf dieser Seite. */}
        {!filtered && (
          <div className="pad endcell">
            <span className="unit">Archiv</span>
            <div>
              <p className="body-sm" style={{ marginBottom: 'var(--u3)' }}>
                {ARCHIVE_NOTE}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--u2) var(--u4)' }}>
                <a href={PODCAST.spotify} className="link" target="_blank" rel="noopener noreferrer">
                  Spotify <span aria-hidden="true">→</span>
                </a>
                <a href={PODCAST.apple} className="link" target="_blank" rel="noopener noreferrer">
                  Apple Podcasts <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {filtered && shown.length === 0 && (
          <div className="pad endcell">
            <span className="unit">Nichts gefunden</span>
            <p className="body-sm">
              Zu dieser Auswahl steht noch kein Beitrag im Labor.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
