import { CLIENT_LOGOS } from '@/data/clientLogos'

/**
 * The client marks, running along the foot of the hero: white, dimmed, on
 * the transparent ground so the ASCII field shows through. A CSS marquee —
 * the same loop as the tapes (the set is doubled so the -50% keyframe
 * closes seamlessly), stopped under reduced motion. The names are the
 * accessible content; the marks themselves are decoration.
 */
export function LogoBand() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS]
  return (
    <div
      className="hero-logos"
      role="img"
      aria-label={`Kunden: ${CLIENT_LOGOS.map((l) => l.name).join(', ')}`}
    >
      <div className="hero-logos-track" aria-hidden="true">
        {doubled.map((l, i) => (
          <span
            key={i}
            className="hero-logo"
            dangerouslySetInnerHTML={{ __html: l.svg }}
          />
        ))}
      </div>
    </div>
  )
}
