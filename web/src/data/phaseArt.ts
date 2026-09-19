/* ═══ UNSER ANSATZ — one blueprint diagram per phase ═══════════════════════
   Five schematic drawings on the 44×16 canvas, generated at module load —
   plain strings by the time a page renders, no client code. `#` is the
   accent run (AsciiArt colours it); everything else is the field, in ink.

   The motif is the same throughout the site: the organisation is a field or
   a frame, the intervention is the solid block.
     Beobachtung      — a structure surfaces out of noise; the blocker is found
     Zielmodell       — a target: rings around one decided centre
     Simulation       — a solid block in one corner, played out along dashed lines
     Pilotierung      — a loop with arrows, the model cycling inside it
     Eigenständigkeit — the frame keeps its lattice; the block leaves to the right */

import { Canvas, W, H } from './asciiCanvas'

/* Beobachtung — a 3×3 structure surfaces out of the noise, one cell solid. */
function beobachtung(): string {
  const c = new Canvas()
  c.noise(11, 0.2, '..:')
  const gx = 12
  const gy = 3
  c.fill(gx, gy, 19, 10, ' ')
  for (let i = 0; i <= 3; i++) c.hline(gx, gx + 18, gy + i * 3, '-')
  for (let j = 0; j <= 3; j++) c.vline(gx + j * 6, gy, gy + 9, '|')
  for (let i = 0; i <= 3; i++) for (let j = 0; j <= 3; j++) c.set(gx + j * 6, gy + i * 3, '+')
  c.fill(gx + 7, gy + 4, 5, 2, '#')
  return c.toString()
}

/* Zielmodell — rings around one decided centre, a crosshair through them. */
function zielmodell(): string {
  const c = new Canvas()
  const cx = 21.5
  const cy = 7.5
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // a row is about two columns tall, so the rings come out round
      const d = Math.hypot(x - cx, (y - cy) * 2.05)
      if (Math.abs(d - 15) < 0.7) c.set(x, y, '.')
      else if (Math.abs(d - 10) < 0.7) c.set(x, y, ':')
      else if (Math.abs(d - 5) < 0.7) c.set(x, y, 'o')
    }
  }
  for (let x = 3; x < W - 3; x++) if (c.get(x, 7) === ' ') c.set(x, 7, '-')
  for (let y = 0; y < H; y++) if (c.get(21, y) === ' ') c.set(21, y, '|')
  c.fill(20, 7, 4, 2, '#')
  return c.toString()
}

/* Simulation — the frame is the organisation; a solid block in one corner is
   played out along dashed lines towards a place drawn only in outline. */
function simulation(): string {
  const c = new Canvas()
  c.rect(2, 1, 40, 14)
  c.noise(23, 0.1, '.', 3, 2, 40, 13)
  c.fill(6, 9, 6, 3, '#')
  c.hline(13, 33, 10, '-', 2)
  c.set(34, 10, '>')
  c.vline(8, 3, 8, '|', 2)
  c.set(8, 2, '^')
  c.rect(30, 3, 9, 4, '.', '.')
  return c.toString()
}

/* Pilotierung — a loop with arrows; the model sits inside and is cycled. */
function pilotierung(): string {
  const c = new Canvas()
  c.rect(6, 2, 32, 12, '=', '|')
  c.set(22, 2, '>')
  c.set(37, 8, 'v')
  c.set(22, 13, '<')
  c.set(6, 7, '^')
  c.noise(37, 0.08, ':', 8, 4, 35, 11)
  c.fill(18, 6, 8, 3, '#')
  return c.toString()
}

/* Eigenständigkeit — the frame keeps its own lattice; the right side is open
   and the block has left through it. */
function eigenstaendigkeit(): string {
  const c = new Canvas()
  c.rect(2, 1, 30, 14)
  c.vline(31, 5, 10, ' ')
  for (const y of [4, 7, 10]) {
    c.hline(5, 29, y, '-')
    for (let x = 5; x <= 29; x += 4) c.set(x, y, '+')
  }
  for (let x = 5; x <= 29; x += 4) {
    c.vline(x, 5, 6, '|')
    c.vline(x, 8, 9, '|')
  }
  c.hline(32, 36, 7, '-')
  c.set(37, 7, '>')
  c.fill(39, 6, 4, 3, '#')
  return c.toString()
}

/** In phase order — matches PHASES in ./approach. */
export const PHASE_ART: readonly string[] = [
  beobachtung(),
  zielmodell(),
  simulation(),
  pilotierung(),
  eigenstaendigkeit(),
]
