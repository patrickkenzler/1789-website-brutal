/* ═══ ASCII CANVAS ═════════════════════════════════════════════════════════
   A 44×16 character grid the procedural drawings are made on (the phase
   diagrams, the Labor type glyphs). Pure ASCII only: box-drawing and
   geometric glyphs fall back to a wider font and break the grid. By
   convention `#` is the accent run — AsciiArt colours it — and everything
   else is the field.                                                      */

export const W = 44
export const H = 16

/** Seeded generator — the same drawing on every build. */
export function rng(seed: number): () => number {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 4294967296
  }
}

/** A small, stable hash so a drawing can be seeded from a title. */
export function seedFrom(text: string): number {
  let h = 2166136261
  for (let i = 0; i < text.length; i++) {
    h = Math.imul(h ^ text.charCodeAt(i), 16777619)
  }
  return h >>> 0
}

export class Canvas {
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
  /** Straight line between two cells; the glyph follows the slope, so a
   *  connection reads as one stroke. A row is about two columns tall. */
  line(x1: number, y1: number, x2: number, y2: number) {
    const dx = x2 - x1
    const dy = y2 - y1
    const n = Math.max(Math.abs(dx), Math.abs(dy) * 2, 1)
    const ch =
      dy === 0 ? '-' : Math.abs(dx) < Math.abs(dy) ? '|' : (dx > 0) === (dy > 0) ? '\\' : '/'
    for (let i = 1; i < n; i++) {
      this.set(Math.round(x1 + (dx * i) / n), Math.round(y1 + (dy * i) / n), ch)
    }
  }
  /** Scatter `chars` over a region at `density`, seeded. */
  noise(seed: number, density: number, chars: string, x1 = 0, y1 = 0, x2 = W - 1, y2 = H - 1) {
    const r = rng(seed)
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
