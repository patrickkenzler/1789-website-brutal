'use client'

import { useEffect, useState } from 'react'

/**
 * Live UTC readout for the hero system line — the page's single moving element.
 *
 * Renders a static "--:--:--" placeholder on the server and on the first client
 * paint, so hydration matches exactly, then ticks once a second from an effect.
 * If the script never runs (JS disabled, hydration fails) the placeholder is a
 * legitimate resting state, not a broken one. The pulsing indicator beside it
 * is pure CSS and is switched off under prefers-reduced-motion.
 */
export function SystemClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const pad = (n: number) => String(n).padStart(2, '0')
    const tick = () => {
      const d = new Date()
      setTime(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`)
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span>
      <span className="sysdot" aria-hidden="true" />
      Online · <b>{time ?? '--:--:--'}</b> UTC
    </span>
  )
}
