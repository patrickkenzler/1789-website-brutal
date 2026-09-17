import { AiGlyph } from '@/components/AiGlyph'

/**
 * AI-HUMAN-NATIVE — statement on the left, a tonal ASCII image in Electric
 * Aqua on the right, always on the dark ground. On the homepage it runs
 * straight under the three perspectives, because it cuts across all three;
 * on /ansatz it fills its own dark section, `flush`, without a frame.
 */
export function AiBand({
  label,
  paragraphs,
  close,
  art,
  flush = false,
}: {
  label?: string
  paragraphs: readonly string[]
  /** One or two sentences; the second is set in the thin cut. */
  close: readonly string[]
  /** Index into AI_ART. */
  art: number
  flush?: boolean
}) {
  return (
    <div className={`ai-band slab-invert${flush ? ' ai-band-flush' : ''}`}>
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
