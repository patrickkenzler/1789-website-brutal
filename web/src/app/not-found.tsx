import Link from 'next/link'
import { Hazard } from '@/components/ui'

export default function NotFound() {
  return (
    <main>
      <Hazard red />
      <section className="slab" style={{ paddingBlock: 'var(--u12)' }}>
        <div className="shell">
          <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u4)' }}>
            Error / Signal verloren
          </span>

          <span
            className="d0"
            aria-hidden="true"
            style={{ display: 'block', color: 'var(--red)' }}
          >
            404
          </span>

          <h1
            className="d2"
            style={{ marginBlock: 'var(--u6) var(--u4)', maxWidth: '20ch' }}
          >
            Diese Seite hat den <span className="d-thin">Shift</span> noch nicht
            gemacht.
          </h1>

          <p className="body-lg" style={{ marginBottom: 'var(--u6)' }}>
            Der Gap zwischen Absicht und Realität ist manchmal größer als gedacht.
          </p>

          <Link href="/" className="btn btn-lg">
            <span aria-hidden="true">←</span> Zur Startseite
          </Link>
        </div>
      </section>
    </main>
  )
}
