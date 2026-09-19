import { AiGlyph } from '@/components/AiGlyph'

/**
 * AI-HUMAN-NATIVE — statement on the left, a tonal ASCII image in Electric
 * Aqua on the right, on the dark ground. Always an inset: it runs straight
 * under a light chapter's three-column grid, because the position cuts
 * across all three columns — never a slab of its own.
 */
export function AiBand({
  label,
  paragraphs,
  close,
  art,
}: {
  label?: string
  paragraphs: readonly string[]
  /** One or two sentences; the second is set in the thin cut. */
  close: readonly string[]
  /** Index into AI_ART. */
  art: number
}) {
  return (
    <div className="ai-band slab-invert">
      <div className="ai-band-text">
        {label && <span className="eyebrow">{label}</span>}
        {paragraphs.map((p) => (
          <p key={p} className="body-lg">
            {p}
          </p>
        ))}
        <p className="d3">
          {close[0]}
          {close[1] && (
            <>
              <br />
              <span className="d-thin">{close[1]}</span>
            </>
          )}
        </p>
      </div>
      <div className="ai-band-art">
        <AiGlyph index={art} />
      </div>
    </div>
  )
}
