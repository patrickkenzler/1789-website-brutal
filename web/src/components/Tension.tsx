'use client'

import { useId, useState } from 'react'

/**
 * A card whose argument sits behind it. The front shows the title — either
 * a term pair (`pair`: the old half, thin, in the accent) or a title with a
 * `lead` line beneath — and the verdict; the explanation is the back. On
 * pointer devices three-across the back shutters in on hover, its space
 * reserved so nothing shifts, and the toggle pins it open. Stacked or on
 * touch the toggle is the way in. All state is one class; the CSS under
 * .tension-flip does the rest.
 */
export function Tension({
  title,
  pair,
  lead,
  body,
  close,
}: {
  title: string
  /** Second half of a term pair, set thin in the accent on its own line. */
  pair?: string
  /** A lead line under the title, set in the thin d4. */
  lead?: string
  body: string
  close: string
}) {
  const [open, setOpen] = useState(false)
  const bodyId = useId()
  const toggle = () => setOpen((o) => !o)

  return (
    <article
      className={`pad tension tension-flip${lead ? ' tension-4' : ''}${open ? ' is-open' : ''}`}
      onClick={toggle}
    >
      <h3 className="d3">
        {title}
        {pair && (
          <>
            <br />
            <span className="d-thin d-red">{pair}</span>
          </>
        )}
      </h3>

      {lead && <p className="d4 d-thin">{lead}</p>}

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
