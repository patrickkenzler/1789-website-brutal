'use client'

import { useId, useState } from 'react'

/**
 * One of the three tensions in "Der Blick". The term pair and its verdict
 * are the front of the card; the explanation is its back. On pointer devices
 * the back shutters in on hover — its space is reserved, so nothing shifts —
 * and the toggle pins it open. On touch and keyboard the toggle is the way
 * in. All state is one class; the CSS under .tension-flip does the rest.
 */
export function Tension({
  title,
  body,
  close,
}: {
  title: readonly [string, string]
  body: string
  close: string
}) {
  const [open, setOpen] = useState(false)
  const bodyId = useId()
  const toggle = () => setOpen((o) => !o)

  return (
    <article
      className={`pad tension tension-flip${open ? ' is-open' : ''}`}
      onClick={toggle}
    >
      <h3 className="d3">
        {title[0]}
        <br />
        <span className="d-thin d-red">{title[1]}</span>
      </h3>

      <p id={bodyId} className="body tension-body" aria-hidden={!open}>
        {body}
      </p>

      <div className="close-line tension-close">
        <span>{close}</span>
        <button
          type="button"
          className="tension-toggle"
          aria-expanded={open}
          aria-controls={bodyId}
          aria-label={open ? 'Erklärung einklappen' : 'Erklärung ausklappen'}
          onClick={(e) => {
            e.stopPropagation()
            toggle()
          }}
        >
          [ {open ? '–' : '+'} ]
        </button>
      </div>
    </article>
  )
}
