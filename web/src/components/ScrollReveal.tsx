'use client'

import { useEffect } from 'react'

/**
 * Hard-wipe reveal for headings marked `data-reveal`, driven by an
 * IntersectionObserver.
 *
 * Safe by construction: every heading is fully visible by default. Only after
 * this component mounts does it "arm" the headings that are still below the
 * fold (clipping them), and each one wipes in — in mechanical steps, see the
 * CSS — when it scrolls into view. If the script never runs, nothing is ever
 * hidden. Under prefers-reduced-motion nothing is armed at all.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('reveal-on')
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    const fold = window.innerHeight
    for (const el of targets) {
      // leave anything already on screen alone — never hide painted content
      if (el.getBoundingClientRect().top < fold) continue
      el.classList.add('reveal-armed')
      io.observe(el)
    }

    return () => io.disconnect()
  }, [])

  return null
}
