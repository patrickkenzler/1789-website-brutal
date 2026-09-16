/**
 * WORDMARK
 *
 * In a monospace-only system the wordmark is not an illustration — it is
 * typeset in the same matrix as every other glyph on the page. "1789" at
 * weight 800 on a narrowed width axis, with the registration mark carrying
 * the single accent.
 */
export function Wordmark({
  size = 22,
  sub = false,
  consulting = false,
}: {
  size?: number
  /** Render the "Innovation · Consulting" sub-line beneath the numerals. */
  sub?: boolean
  /** Set the numerals in a lockup with "CONSULTING" — the full name. */
  consulting?: boolean
}) {
  return (
    <span style={{ display: 'inline-block', lineHeight: 1 }}>
      <span
        className="d3"
        style={{
          fontSize: size,
          fontWeight: 800,
          letterSpacing: '-0.02em',
          fontVariationSettings: '"wdth" 80',
          lineHeight: 1,
        }}
      >
        1789
        {!consulting && (
          <span className="marker" style={{ fontSize: size * 0.36 }}>
            ®
          </span>
        )}
      </span>
      {consulting && (
        <>
          <span
            className="unit"
            style={{
              fontSize: size * 0.46,
              letterSpacing: '0.16em',
              marginLeft: size * 0.36,
            }}
          >
            Consulting
          </span>
          <span className="marker" style={{ fontSize: size * 0.36 }}>
            ®
          </span>
        </>
      )}
      {sub && (
        <span
          className="unit"
          style={{ display: 'block', marginTop: 6, letterSpacing: '0.2em' }}
        >
          Innovation · Consulting
        </span>
      )}
    </span>
  )
}
