/* ═══ UNSER ANSATZ — one blueprint diagram per phase ═══════════════════════
   Five schematic ASCII drawings on a 44×16 character canvas, generated at
   module load — plain strings by the time a page renders, no client code.
   Pure ASCII only: box-drawing and geometric glyphs fall back to a wider
   font and break the grid. `#` is the accent run (PhaseGlyph colours it);
   everything else is the field, set in ink.

   The motif is the same throughout the site: the organisation is a field or
   a frame, the intervention is the solid block.
     Diagnose   — a structure surfaces out of noise; the blocker is found
     Zielbild   — a target: rings around one decided centre
     Pilot      — a solid block in one corner, spreading along dashed lines
     Praxis     — a loop with arrows, the model cycling inside it
     Transfer   — the frame keeps its lattice; the block leaves to the right */

const W = 44
const H = 16

class Canvas {
  private g: string[][] = Array.from({ length: H }, () => Array<string>(W).fill(' '))

  set(x: number, y: number, ch: string) {
    if (x >= 0 && x < W && y >= 0 && y < H) this.g[y][x] = ch
  }
  get(x: number, y: number): string {
    return x >= 0 && x < W && y >= 0 && y < H ? this.g[y][x] : ' '
  }
  hline(x1: number, x2: number, y: number, ch: string, step = 1) {
    for (let x = x1; x <= x2; x += step) this.set(x, y, ch)
  }
  vline(x: number, y1: number, y2: number, ch: string, step = 1) {
    for (let y = y1; y <= y2; y += step) this.set(x, y, ch)
  }
  fill(x: number, y: number, w: number, h: number, ch: string) {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) this.set(i, j, ch)
  }
  /** Outlined box with `+` corners. */
  rect(x: number, y: number, w: number, h: number, hz = '-', vt = '|') {
    this.hline(x, x + w - 1, y, hz)
    this.hline(x, x + w - 1, y + h - 1, hz)
    this.vline(x, y, y + h - 1, vt)
    this.vline(x + w - 1, y, y + h - 1, vt)
    for (const [cx, cy] of [[x, y], [x + w - 1, y], [x, y + h - 1], [x + w - 1, y + h - 1]]) {
      this.set(cx, cy, '+')
    }
  }
  /** Scatter `chars` over a region at `density` — seeded, so every build
   *  draws the same field. */
  noise(seed: number, density: number, chars: string, x1 = 0, y1 = 0, x2 = W - 1, y2 = H - 1) {
    let s = seed >>> 0
    const r = () => {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0
      return s / 4294967296
    }
    for (let y = y1; y <= y2; y++) {
      for (let x = x1; x <= x2; x++) {
        if (r() < density) this.set(x, y, chars[Math.floor(r() * chars.length)])
      }
    }
  }
  toString() {
    return this.g.map((row) => row.join('')).join('\n')
  }
}

/* Diagnose — a 3×3 structure surfaces out of the noise, one cell solid. */
function diagnose(): string {
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

/* Zielbild — rings around one decided centre, a crosshair through them. */
function zielbild(): string {
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

/* Pilot — the frame is the organisation; a solid block in one corner spreads
   along dashed lines towards a place drawn only in outline, so far. */
function pilot(): string {
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

/* Praxis — a loop with arrows; the model sits inside and is cycled. */
function praxis(): string {
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

/* Transfer — the frame keeps its own lattice; the right side is open and the
   block has left through it. */
function transfer(): string {
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
export const PHASE_ART: readonly string[] = [diagnose(), zielbild(), pilot(), praxis(), transfer()]
