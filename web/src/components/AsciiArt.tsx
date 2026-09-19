/**
 * A procedural ASCII drawing (see data/asciiCanvas). The art is a plain
 * string; the accent runs (`#`) are wrapped so CSS can colour them, the rest
 * stays in the ink of the field. Decorative — the text beside it carries the
 * meaning.
 *
 * The whole drawing sits in one <code> child: the art boxes centre their
 * content as a grid, and with the spans loose inside the <pre> each accent
 * run would become a grid item of its own and the rows would fall apart.
 */
export function AsciiArt({ art, className }: { art: string; className: string }) {
  const parts = art.split(/(#+)/g)
  return (
    <pre className={className} aria-hidden="true">
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
