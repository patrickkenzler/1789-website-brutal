/**
 * ASCII flow field — a monospace stand-in for an image.
 *
 * A domain-warped interference of sine systems, sampled on a character grid
 * and mapped to a density ramp: dark valleys fall to spaces (the black
 * substrate shows through), mid-tones become direction-following streaks
 * (/ \ | -) that read as flowing folds, peaks pack into # and @. The result
 * evokes liquid/marbled ridges without a single pixel of raster.
 *
 * Pure and deterministic — computed once at module load, identical on server
 * and client, so it ships as static text with no hydration cost.
 */

const COLS = 104
const ROWS = 62

/** Signed flow field, roughly -1..1. Low frequencies + strong domain warp
 *  give a few broad diagonal folds rather than many tight ripples. */
function field(x: number, y: number): number {
  const wx = 3.0 * Math.sin(y * 0.075 + x * 0.012)
  const wy = 3.0 * Math.cos(x * 0.06 - y * 0.02)
  let f = Math.sin((x + wx) * 0.14 + (y + wy) * 0.2)
  f += 0.6 * Math.sin((x - y) * 0.055 + wx * 0.6)
  f += 0.3 * Math.sin((x + y) * 0.035 + wy * 0.5)
  return f / 1.9
}

const STREAKS = ['-', '\\', '|', '/'] as const

function glyph(x: number, y: number): string {
  const b = (field(x, y) + 1) / 2 // 0..1 brightness
  // Deep valleys fall to black; the substrate is the darkest tone.
  if (b < 0.34) return ' '
  // Rising slopes are a diagonal weave that follows the flow direction; the
  // brightest peaks pack into solid glyphs, the fold glints.
  if (b < 0.7) {
    const gx = field(x + 1, y) - field(x - 1, y)
    const gy = field(x, y + 1) - field(x, y - 1)
    const a = (Math.atan2(gy, gx) + Math.PI) / Math.PI // 0..2
    return STREAKS[Math.floor(a * 2) % 4]
  }
  if (b < 0.8) return '*'
  if (b < 0.9) return '#'
  return '@'
}

function build(): string {
  const lines: string[] = []
  for (let y = 0; y < ROWS; y++) {
    let line = ''
    for (let x = 0; x < COLS; x++) line += glyph(x, y)
    lines.push(line)
  }
  return lines.join('\n')
}

const ART = build()

export function AsciiWaves() {
  return (
    <pre className="ascii-waves" aria-hidden="true">
      {ART}
    </pre>
  )
}
