'use client'

/**
 * Animated ASCII flow field — the hero background, and the page's signature.
 *
 * A domain-warped interference of sine systems, sampled on a character grid
 * and mapped to a density ramp: deep valleys fall to spaces (the black
 * substrate shows through), rising slopes become a diagonal weave that follows
 * the flow, peaks pack into #/@ glints. A time term drifts the sine phases, so
 * the folds move organically.
 *
 * The field also answers the pointer: a ring of ripples spreads from the
 * cursor and fades with distance, so the structure visibly bends around an
 * intervention — the consultancy's own thesis, made tactile. The pointer is
 * eased, so the ripple trails rather than snaps.
 *
 * Frame 0 is rendered on the server and on the first client paint (identical,
 * so hydration matches and there is content with no JS). After mount an
 * animation loop writes each frame straight to the node's textContent —
 * bypassing React reconciliation of 15k characters. The loop is throttled,
 * pauses when the hero scrolls out of view or the tab is hidden, and does not
 * run at all under prefers-reduced-motion (the static frame stays).
 */

import { useEffect, useRef, useState } from 'react'

const COLS = 160
const ROWS = 96
const STREAKS = ['-', '\\', '|', '/'] as const
/** Glyphs are ~0.6em wide on a 1.02em line, so one row spans ~1.7 columns. */
const ROW_ASPECT = 1.7

/** Signed flow field, roughly -1..1, drifting with time t. */
function field(x: number, y: number, t: number): number {
  const wx = 3.0 * Math.sin(y * 0.075 + x * 0.012 + t * 0.7)
  const wy = 3.0 * Math.cos(x * 0.06 - y * 0.02 + t * 0.5)
  let f = Math.sin((x + wx) * 0.14 + (y + wy) * 0.2 + t)
  f += 0.6 * Math.sin((x - y) * 0.055 + wx * 0.6)
  f += 0.3 * Math.sin((x + y) * 0.035 + wy * 0.5)
  return f / 1.9
}

/** One full frame at time t, with the pointer at grid position (px, py).
 *  Samples the field into a bordered grid once, then derives each glyph (and
 *  its streak orientation) from array neighbours — no extra field() calls. */
function frame(t: number, px: number, py: number): string {
  const W = COLS + 2
  const H = ROWS + 2
  const g = new Float32Array(W * H)
  const hasPointer = px > -500
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      let v = field(x - 1, y - 1, t)
      if (hasPointer) {
        const dx = x - 1 - px
        const dy = (y - 1 - py) * ROW_ASPECT
        const d = Math.hypot(dx, dy)
        // ripples radiating from the pointer, fading over ~16 columns
        v += 0.85 * Math.sin(d * 0.38 - t * 2.6) * Math.exp(-d / 16)
      }
      g[y * W + x] = v
    }
  }

  let out = ''
  for (let y = 1; y <= ROWS; y++) {
    let line = ''
    for (let x = 1; x <= COLS; x++) {
      const b = Math.max(0, Math.min(1, (g[y * W + x] + 1) / 2))
      if (b < 0.34) {
        line += ' '
      } else if (b < 0.7) {
        const gx = g[y * W + x + 1] - g[y * W + x - 1]
        const gy = g[(y + 1) * W + x] - g[(y - 1) * W + x]
        const a = (Math.atan2(gy, gx) + Math.PI) / Math.PI // 0..2
        line += STREAKS[Math.floor(a * 2) % 4]
      } else if (b < 0.8) {
        line += '*'
      } else if (b < 0.9) {
        line += '#'
      } else {
        line += '@'
      }
    }
    out += y > 1 ? '\n' + line : line
  }
  return out
}

export function AsciiWaves() {
  // Frame 0 for SSR and the first client render — identical, so hydration is
  // clean and the field is present before (or without) JS.
  const [initial] = useState(() => frame(0, -999, -999))
  const ref = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let last = 0
    const start = performance.now()
    let visible = true
    // pointer in grid coordinates; the eased pair trails the target
    const target = { x: -999, y: -999 }
    const eased = { x: -999, y: -999 }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 },
    )
    io.observe(node)

    const onMove = (e: PointerEvent) => {
      const r = node.getBoundingClientRect()
      target.x = ((e.clientX - r.left) / r.width) * COLS
      target.y = ((e.clientY - r.top) / r.height) * ROWS
      if (eased.x < -500) {
        eased.x = target.x
        eased.y = target.y
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      if (now - last < 45) return // throttle to ~22fps
      if (!visible || document.hidden) return
      last = now
      if (eased.x > -500) {
        eased.x += (target.x - eased.x) * 0.18
        eased.y += (target.y - eased.y) * 0.18
      }
      node.textContent = frame((now - start) * 0.00045, eased.x, eased.y)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      io.disconnect()
    }
  }, [])

  return (
    <pre ref={ref} className="ascii-waves" aria-hidden="true">
      {initial}
    </pre>
  )
}
