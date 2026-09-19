/* ═══ DENK LABOR — one glyph per kind of piece ═════════════════════════════
   Most pieces in the archive have no cover. Each kind gets a drawing on the
   44×16 canvas instead — the picture of the format, not of the piece:
     Podcast     — a waveform, the loudest bars in the accent
     Essay       — a typeset page: a drop cap and lines of running text
     Whitepaper  — a document with its title block
     Experiment  — a probe over a field of samples; the finding, marked
     Prototyp    — wireframes in dotted outline, one element already solid
     Debatte     — two blocks, thesis and antithesis, arrows between them
     Theorie     — a net of nodes; one node the argument hangs on
   Seeded from the title, so two podcasts never share a waveform.         */

import { Canvas, rng, W } from './asciiCanvas'

function podcast(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  const phase = r() * Math.PI * 2
  for (let i = 0; i < 36; i++) {
    const x = 4 + i
    const wave = Math.abs(Math.sin(i * 0.42 + phase) * Math.cos(i * 0.11 + phase))
    const h = Math.max(1, Math.min(8, Math.round(1 + 6.5 * wave + r() * 1.2)))
    c.vline(x, 8 - h, 7 + h, h >= 7 ? '#' : '|')
  }
  return c.toString()
}

function essay(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  c.fill(3, 1, 4, 2, '#')
  for (let y = 1; y <= 14; y++) {
    if (y === 5 || y === 10) continue // paragraph breaks
    const x0 = y <= 2 ? 8 : 3
    const last = y === 4 || y === 9 || y === 14
    const len = last ? 10 + Math.round(r() * 12) : 30 + Math.round(r() * 8)
    c.hline(x0, Math.min(41, x0 + len), y, y === 6 ? '=' : '-')
  }
  return c.toString()
}

function whitepaper(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  c.rect(9, 0, 26, 16)
  c.fill(12, 2, 11, 2, '#')
  for (let y = 6; y <= 13; y++) {
    const len = y === 9 || y === 13 ? 8 + Math.round(r() * 6) : 18 + Math.round(r() * 2)
    c.hline(12, 12 + len, y, '-')
  }
  c.vline(38, 2, 13, ':')
  return c.toString()
}

function experiment(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  c.noise(seed, 0.14, '.:', 1, 0, 42, 15)
  c.hline(2, 41, 8, '-')
  c.vline(21, 0, 15, '|')
  c.set(21, 8, '+')
  const fx = 24 + Math.floor(r() * 10)
  const fy = 2 + Math.floor(r() * 4)
  c.fill(fx, fy, 4, 2, '#')
  for (let i = 0; i < 5; i++) c.set(3 + Math.floor(r() * 38), Math.floor(r() * 16), 'x')
  return c.toString()
}

function prototyp(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  c.rect(3, 1, 18, 8, '.', '.')
  c.rect(24, 5, 17, 10, '.', '.')
  c.rect(6, 11, 12, 4, '.', '.')
  c.fill(6, 3, 5 + Math.floor(r() * 3), 3, '#')
  c.hline(13, 22, 4, '-', 2)
  c.set(23, 4, '>')
  return c.toString()
}

function debatte(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  const h = 5 + Math.floor(r() * 2)
  c.fill(4, 8 - Math.ceil(h / 2), 8, h, '#')
  c.fill(32, 8 - Math.ceil(h / 2), 8, h, '@')
  c.hline(13, 18, 6, '-')
  c.set(19, 6, '>')
  c.hline(25, 30, 9, '-')
  c.set(24, 9, '<')
  c.hline(13, 30, 15, '.', 2)
  return c.toString()
}

function theorie(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)
  const nodes: [number, number][] = [
    [6, 2], [20, 1], [36, 3], [10, 8], [26, 7], [40, 10], [14, 13], [30, 13], [4, 12],
  ]
  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [4, 5], [3, 6], [4, 7], [6, 7], [3, 8], [8, 6],
  ]
  for (const [a, b] of edges) c.line(nodes[a][0], nodes[a][1], nodes[b][0], nodes[b][1])
  for (const [x, y] of nodes) c.set(x, y, 'o')
  const k = 3 + Math.floor(r() * 2) // the argument hangs on one of the inner nodes
  c.fill(nodes[k][0] - 1, nodes[k][1], 3, 1, '#')
  return c.toString()
}

const BY_TYPE: Record<string, (seed: number) => string> = {
  Podcast: podcast,
  Essay: essay,
  Whitepaper: whitepaper,
  Experiment: experiment,
  Prototyp: prototyp,
  Debatte: debatte,
  Theorie: theorie,
}

/** The glyph for a piece: by its kind, seeded so repeats differ. Unknown
 *  kinds read as text — the essay page. */
export function laborArt(type: string, seed: number): string {
  return (BY_TYPE[type] ?? essay)(seed)
}

export const CANVAS_COLS = W
