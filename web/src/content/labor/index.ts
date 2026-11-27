/* ═══ LABOR — die Beiträge ═════════════════════════════════════════════════
   Ein Beitrag ist eine Datei in diesem Ordner. Wer einen neuen anlegt, kopiert
   die nächstbeste Datei, ändert sie und trägt sie hier in beiden Listen ein:
   einmal als Import, einmal in POSTS. Die Imports stehen ausdrücklich da und
   nicht über einen Glob, weil nur so der Compiler jede Datei prüft — ein
   fehlendes Pflichtfeld bricht dann den Build, statt still eine kaputte
   Kachel auszuliefern.

   Die Reihenfolge hier ist egal, sortiert wird nach Datum.                 */

import { byDateDesc, PODCAST_IN_LABOR, type LaborPost } from '@/data/labor'

import corporateTherapy142 from './corporate-therapy-142-marie-kilg'
import corporateTherapy143 from './corporate-therapy-143-markus-scholz'
import corporateTherapy144 from './corporate-therapy-144-marie-kilg'
import corporateTherapy145 from './corporate-therapy-145-wolfgang-m-schmitt'
import corporateTherapy146 from './corporate-therapy-146-wd-40'
import corporateTherapy147 from './corporate-therapy-147-philippe-merz'
import corporateTherapy148 from './corporate-therapy-148-marina-schakarian'
import corporateTherapy149 from './corporate-therapy-149-hans-rusinek'
import eoDay2026 from './eo-day-2026-panel'
import freiburg2025 from './freiburger-mittelstandskongress-2025'
import governance from './governance-fuer-dezentrale-strukturen'
import hingehoert from './hingehoert-human-resources-manager'
import iKnowSlop from './i-know-slop-when-i-see-it'
import igMetall from './ig-metall-keynote-2025'
import improvedManagement from './improved-management-does-not-equal-agility'
import sinn2025 from './sinn-kongress-2025'
import theInfermezzo from './the-infermezzo'
import zerog from './zerog-hub-and-spoke'

const ALL: LaborPost[] = [
  corporateTherapy142,
  corporateTherapy143,
  corporateTherapy144,
  corporateTherapy145,
  corporateTherapy146,
  corporateTherapy147,
  corporateTherapy148,
  corporateTherapy149,
  eoDay2026,
  freiburg2025,
  governance,
  hingehoert,
  iKnowSlop,
  igMetall,
  improvedManagement,
  sinn2025,
  theInfermezzo,
  zerog,
]

/* Im Labor stehen die acht neuesten Folgen. Kommt eine neue dazu, fällt die
   älteste heraus — außer sie ist festgepinnt wie #146, die zum WD-40-Case
   gehört. Alles außer Podcast steht vollständig. Heute gibt es genau acht
   Folgen, die Regel schneidet also noch nichts weg; sie steht hier, damit die
   neunte nicht von Hand entfernt werden muss.                              */
function withPodcastWindow(posts: LaborPost[]): LaborPost[] {
  const episodes = posts.filter((p) => p.category === 'Podcast').sort(byDateDesc)
  const kept = new Set(
    [
      ...episodes.filter((p) => p.pinned),
      ...episodes.filter((p) => !p.pinned).slice(0, PODCAST_IN_LABOR),
    ].map((p) => p.slug)
  )
  return posts.filter((p) => p.category !== 'Podcast' || kept.has(p.slug))
}

/** Alle sichtbaren Beiträge, neueste zuerst. */
export const POSTS: LaborPost[] = withPodcastWindow(ALL).sort(byDateDesc)

export function getPostBySlug(slug: string): LaborPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}

/** Kategorien, in denen mindestens ein Beitrag steht. „Werkstatt" hat noch
    keinen und erscheint deshalb nicht im Filter. */
export function activeCategories(): string[] {
  return [...new Set(POSTS.map((p) => p.category))]
}

/** Themen, die mindestens ein Beitrag trägt — in der Reihenfolge von TOPICS,
    nicht in der, in der sie zufällig vorkommen. */
export function activeTopics(order: readonly string[]): string[] {
  const used = new Set(POSTS.flatMap((p) => p.topics as readonly string[]))
  return order.filter((t) => used.has(t))
}
