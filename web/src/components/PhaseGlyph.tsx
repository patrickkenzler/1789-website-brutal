import { PHASE_ART } from '@/data/phaseArt'

/**
 * The blueprint diagram on top of a phase cell. The art is a plain string;
 * the accent runs (`#`) are wrapped so CSS can colour them, everything else
 * stays in the ink of the field. Decorative — the phase title carries the
 * meaning.
 *
 * The whole drawing sits in one <code> child: .phase-art centres its content
 * as a grid, and with the spans loose inside the <pre> each accent run became
 * a grid item of its own and the rows fell apart.
 */
export function PhaseGlyph({ index }: { index: number }) {
  const parts = PHASE_ART[index].split(/(#+)/g)
  return (
    <pre className="phase-art" aria-hidden="true">
      <code>
        {parts.map((p, i) =>
          p.startsWith('#') ? (
            <span key={i} className="hi">
              {p}
            </span>
          ) : (
            p
          ),
        )}
      </code>
    </pre>
  )
}
