/**
 * Tonal ASCII images for the four "AI und Organisation" cards — one photo each,
 * converted to a density ramp so the shading carries the depth:
 *   0 Prozesse      a building apex receding into perspective
 *   1 Mensch        a classical marble head
 *   2 Entscheidungen a handshake
 *   3 Strukturen    the Centre Pompidou facade
 *
 * The strings are generated from web/art-src/ by scripts/img2ascii.mjs and
 * baked into src/data/aiArt.ts — static text, no client work, all ASCII so the
 * grid never breaks on a font fallback.
 */

import { AI_ART } from '@/data/aiArt'

export function AiGlyph({ index }: { index: number }) {
  return (
    <pre className="ai-ascii" aria-hidden="true">
      {AI_ART[index] ?? ''}
    </pre>
  )
}
