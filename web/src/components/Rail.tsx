'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { SectionHead } from '@/components/ui'

/**
 * A horizontal index: the section head with a pair of arrow controls, and a
 * scroll-snapping track underneath. The track is a real scroll container —
 * wheel, trackpad, touch and keyboard (it is focusable) all work without the
 * script; the arrows only add a button for the desktop mouse. Their disabled
 * state follows the scroll position so the ends read as ends.
 */
export function Rail({
  label,
  ariaLabel,
  heading,
  children,
}: {
  label: string
  /** Name of the scrollable region for assistive technology. */
  ariaLabel: string
  /** Section heading, set between the head strip and the track. */
  heading?: ReactNode
  children: ReactNode
}) {
  const track = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      setAtStart(el.scrollLeft <= 1)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [])

  const step = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const by = first ? first.getBoundingClientRect().width + 1 : el.clientWidth * 0.8
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * by, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <>
      <SectionHead
        label={label}
        end={
          <span className="rail-nav">
            <button
              type="button"
              className="rail-btn"
              onClick={() => step(-1)}
              disabled={atStart}
              aria-label="Zurück"
            >
              ←
            </button>
            <button
              type="button"
              className="rail-btn"
              onClick={() => step(1)}
              disabled={atEnd}
              aria-label="Weiter"
            >
              →
            </button>
          </span>
        }
      />
      {heading}
      <div className="rail" ref={track} tabIndex={0} role="region" aria-label={ariaLabel}>
        {children}
      </div>
    </>
  )
}
