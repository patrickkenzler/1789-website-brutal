import type { ReactNode } from 'react'
import { Plate, Barcode } from '@/components/ui'
import { PhaseGlyph } from '@/components/PhaseGlyph'
import { Tension } from '@/components/Tension'
import { asset } from '@/data/site'
import {
  REVISION,
  SWATCHES,
  INKS,
  TYPE_SCALE,
  MICRO_SCALE,
  RULES,
  UNITS,
  MEASURES,
  MOTION,
  GROUNDS,
  GROUND_SEQUENCE,
} from '@/data/designTokens'

/**
 * STYLEGUIDE — das Designsystem als Spezifikation.
 *
 * Eine Quelle, zwei Ausgaben: Diese Seite ist die Spezifikation im Browser,
 * und `npm run styleguide:pdf` druckt sie zum PDF. Die Beispiele verwenden
 * durchweg die echten Klassen aus globals.css — der Styleguide bildet das
 * System nicht nach, er zeigt es. Was hier falsch aussieht, ist im System
 * falsch.
 *
 * Nicht in der Navigation verlinkt.
 */

export const metadata = {
  title: '1789 — Designsystem',
  description: 'Spezifikation des Designsystems: Grund, Typografie, Raster, Komponenten, Bewegung.',
}

/* Ein Kapitel = eine Druckseite (siehe .spec-ch im Druck-Stylesheet). */
function Chapter({
  num,
  title,
  lead,
  children,
  ground = 'slab',
}: {
  num: string
  title: string
  lead?: string
  children: ReactNode
  ground?: string
}) {
  return (
    <section className={`${ground} spec-ch`} id={`kap-${num}`}>
      <div className="shell">
        <div className="spec-ch-head">
          <span className="data spec-num">{num}</span>
          <h2 className="d2">{title}</h2>
          {lead && <p className="body-lg spec-lead">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

/* Beschriftung über einem Beispiel. */
function Demo({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="spec-demo">
      <span className="eyebrow">{label}</span>
      {children}
    </div>
  )
}

export default function Styleguide() {
  return (
    <main className="spec">
      {/* ── Titelblatt ───────────────────────────────────────────────────── */}
      <header className="slab spec-cover">
        <div className="shell">
          <span className="eyebrow eyebrow-br" style={{ marginBottom: 'var(--u4)' }}>
            Spezifikation
          </span>
          <h1 className="d1">
            Design<span className="d-thin d-wide">system</span>
          </h1>
          <p className="body-lg spec-standfirst">
            Swiss Industrial Print, ausschließlich Monospace. Ein Substrat, ein
            Akzent je Grund, keine Radien, keine Schatten, keine Verläufe.
            Kompartimente entstehen durch Linien.
          </p>

          <dl className="readout spec-meta">
            <dt>Revision</dt>
            <dd>{REVISION}</dd>
            <dt>Schriften</dt>
            <dd>Martian Mono · JetBrains Mono</dd>
            <dt>Umfang</dt>
            <dd>8 Kapitel</dd>
          </dl>

          <p className="spec-pdf">
            <a className="link" href={asset('/1789-designsystem.pdf')} download>
              Als PDF laden <span aria-hidden="true">↓</span>
            </a>
          </p>
        </div>
      </header>

      {/* ── 01 PRINZIP ───────────────────────────────────────────────────── */}
      <Chapter
        num="01"
        title="Prinzip"
        lead="Fünf Festlegungen tragen das System. Alles Weitere folgt aus ihnen — und was ihnen widerspricht, gehört nicht hinein."
      >
        <ol className="spec-rules">
          {[
            ['Ein Substrat', 'Alabaster Grey trägt jede Seite. Andere Flächen sind Ausnahmen mit Begründung, keine Alternativen.'],
            ['Ein Akzent je Grund', 'Aubergine auf hell, Molten Orange auf dunkel. Electric Aqua bleibt den Bildern vorbehalten. Nie zwei Akzente nebeneinander.'],
            ['Nur Monospace', 'Zwei Schnitte, Martian Mono und JetBrains Mono. Kontrast entsteht aus Größe, Gewicht und Breitenachse — nie aus einem Wechsel der Schriftklasse.'],
            ['Neunzig Grad', 'Keine Radien, keine Schatten, keine Verläufe, keine Transparenz als Effekt. Die Geometrie ist absolut.'],
            ['Linien statt Abstände', 'Was zusammengehört, steht in einem Fach. Die Trennung ist eine Linie, kein Weißraum.'],
          ].map(([t, b], i) => (
            <li key={t} className="spec-rule">
              <span className="data spec-rule-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="d4">{t}</h3>
                <p className="body">{b}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="d3 statement">
          Das Raster ist das Design.
          <br />
          <span className="d-thin">Jeder Wert darin ist eine harte Konstante.</span>
        </p>
      </Chapter>

      {/* ── 02 SUBSTRAT & AKZENT ─────────────────────────────────────────── */}
      <Chapter
        num="02"
        title="Substrat & Akzent"
        lead="Sechs Flächenwerte, vier Textwerte. Mehr hat das System nicht, und mehr braucht es nicht."
      >
        <div className="hairgrid hairgrid-3 spec-swatches">
          {SWATCHES.map((s) => (
            <div key={s.token} className="pad-sm spec-swatch">
              <div
                className="spec-chip"
                style={{ background: s.hex }}
                aria-hidden="true"
              />
              <span className="data spec-swatch-name">{s.name}</span>
              <span className="unit">
                {s.token} · {s.hex}
              </span>
              <p className="body-sm">{s.role}</p>
            </div>
          ))}
        </div>

        <Demo label="Ink — vier Stufen, kein Grau dazwischen">
          <div className="hairgrid hairgrid-4">
            {INKS.map((s) => (
              <div key={s.token} className="pad-sm spec-swatch">
                <div
                  className="spec-chip spec-chip-sm"
                  style={{ background: s.hex }}
                  aria-hidden="true"
                />
                <span className="data spec-swatch-name">{s.name}</span>
                <span className="unit">{s.hex}</span>
                <p className="body-sm">{s.role}</p>
              </div>
            ))}
          </div>
        </Demo>

        <p className="close-line spec-note">
          Der Akzent hängt am Grund, nicht am Element: Das Token <code>--red</code>{' '}
          wird je Fläche neu belegt, damit jede Referenz auf einmal umspringt.
        </p>
      </Chapter>

      {/* ── 03 GRÜNDE ────────────────────────────────────────────────────── */}
      <Chapter
        num="03"
        title="Gründe"
        lead="Dunkel eröffnet ein Kapitel, hell trägt das Lesen. Orange einmal je Seite, Aubergine nur am Schluss."
      >
        <div className="spec-grounds">
          {GROUNDS.map((g) => (
            <div key={g.cls} className={`${g.cls.slice(1)} spec-ground`}>
              <div className="spec-ground-body">
                <span className="eyebrow">{g.cls}</span>
                <h3 className="d3">{g.name}</h3>
                <p className="body">{g.rule}</p>
                <span className="unit">
                  Grund {g.bg} · Akzent {g.accent}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Demo label="Folge der Gründe auf der Startseite">
          <p className="d3 spec-sequence">{GROUND_SEQUENCE}</p>
          <p className="body">
            Nie zwei dunkle Flächen nebeneinander, nie mehr als zwei helle in
            Folge. So entsteht ein Schnitt etwa alle drei Sektionen — Rhythmus
            ohne mechanischen Wechsel.
          </p>
        </Demo>

        <p className="close-line spec-note">
          Eine dunkle Insel in einer anderen Fläche behält ihre eigenen Werte.
          Sonst färbt der Grund den Text der Insel ein, bis er unsichtbar wird.
        </p>
      </Chapter>

      {/* ── 04 TYPOGRAFIE ────────────────────────────────────────────────── */}
      <Chapter
        num="04"
        title="Typografie"
        lead="Makro fluid und aggressiv, Mikro fest und mechanisch. Dazwischen liegt nichts."
      >
        <div className="spec-type">
          {TYPE_SCALE.map((t) => (
            <div key={t.cls} className="spec-type-row">
              <div className="spec-type-meta">
                <span className="data spec-swatch-name">
                  .{t.cls} — {t.desktop}
                </span>
                <span className="unit">{t.role}</span>
                <span className="unit">
                  Desktop {t.desktop} · Phone {t.phone}
                </span>
                <span className="unit">
                  {t.weight} · Zeile {t.leading} · wdth {t.width} · {t.tracking}
                </span>
                <span className="unit">{t.size}</span>
              </div>
              <div className="spec-type-sample">
                {/* d0 trägt den Ziffernlauf, kein Wort — deshalb sein eigenes
                    Muster. */}
                <span className={t.cls}>{t.cls === 'd0' ? '1789' : 'Struktur'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Die Stufen im Zusammenspiel — so steht die Skala auf der Seite. */}
        <Demo label="Im Layout — die Stufen im Zusammenspiel">
          <div className="spec-specimen">
            <span className="eyebrow">Sektionsmarke · .eyebrow 11px</span>
            <h3 className="d2">
              Ordnung entsteht ohnehin.
              <br />
              <span className="d-thin d-wide">Wir machen sie entscheidbar.</span>
            </h3>
            <div className="g12 spec-specimen-grid">
              <p className="c7 body-lg">
                Der Vorspann steht in 15px neben der Überschrift, auf halbem
                Modul gesetzt, damit die Sätze als Block lesen. Er trägt das
                Argument, nicht die Aussage.
              </p>
            </div>
            <div className="hairgrid hairgrid-3">
              {[
                ['Organizational Strategy', 'Die Entwicklungsrichtung.', 'Richtung ist eine Strukturentscheidung.'],
                ['Governance Design', 'Die Architektur des Entscheidens.', 'Wer über das Entscheiden entscheidet, hat die Organisation in der Hand.'],
                ['Target Operating Model', 'Die operative Gestalt.', 'Konkret genug zum Entscheiden. Offen genug zum Lernen.'],
              ].map(([t, lead, close]) => (
                <article key={t} className="pad tension tension-4">
                  <h4 className="d4">{t}</h4>
                  <p className="d4 d-thin">{lead}</p>
                  <p className="body">
                    Der Fließtext trägt die Erklärung: 13px, offener
                    Zeilenabstand, harter Satzspiegel.
                  </p>
                  <p className="close-line">{close}</p>
                </article>
              ))}
            </div>
            <p className="body-sm spec-specimen-note">
              Kartentitel 20px, Unterzeile im dünnen Schnitt, Fließtext 13px,
              Schlusssatz fett über einer Haarlinie. Vier Stufen auf engem
              Raum — unterschieden durch Größe, Gewicht und Linie, nie durch
              eine zweite Schrift.
            </p>
          </div>
        </Demo>

        <div className="g2 spec-cols">
          <Demo label="Modifikatoren">
            <p className="d3 spec-mods">
              <span className="d-thin">.d-thin</span>
              <span className="d-wide">.d-wide</span>
              <span className="d-red">.d-red</span>
              <span className="d-strike">.d-strike</span>
            </p>
            <p className="body">
              Der dünne Schnitt ist die zweite Stimme im mono-only System, dort
              wo andere Systeme kursiv setzen. Die Breitenachse ist die dritte.
            </p>
          </Demo>

          <Demo label="Mikro-Skala">
            <dl className="readout">
              {MICRO_SCALE.map((m) => (
                <div key={m.token} style={{ display: 'contents' }}>
                  <dt>{m.px}</dt>
                  <dd>{m.use}</dd>
                </div>
              ))}
            </dl>
          </Demo>
        </div>

        <Demo label="Fließtext">
          <p className="body">
            Monospace bleibt bei 13px mit offenem Zeilenabstand und einem
            Satzspiegel von {MEASURES.bodyMeasure} lesbar, darüber nicht mehr.{' '}
            <strong>Hervorhebungen</strong> tragen eine Unterlegung aus einer
            Haarlinie im Akzent — kein Farbblock, der wie ein Textmarker wirkt.
          </p>
        </Demo>

        <div className="g2 spec-cols">
          <p className="close-line">
            Zeilenabstand im Makro nie unter 1.1: Ü, Ä und Ö setzen ihre Punkte
            über die Versalhöhe und stoßen sonst an die Zeile darüber.
          </p>
          <p className="close-line">
            Silbentrennung nur bei Komposita (ab 14 Zeichen, mindestens 6 je
            Seite). Sonst zerlegt der Zeilenausgleich auch kurze Wörter.
          </p>
        </div>
      </Chapter>

      {/* ── 05 RASTER & LINIEN ───────────────────────────────────────────── */}
      <Chapter
        num="05"
        title="Raster & Linien"
        lead="Zwölf Spalten, ein 8px-Modul, drei Linienstärken. Elemente rasten ein, sie schweben nicht."
      >
        <div className="g2 spec-cols">
          <Demo label=".hairgrid — das 1px-Raster">
            <div className="hairgrid hairgrid-3">
              <div className="pad-sm"><span className="unit">A</span></div>
              <div className="pad-sm"><span className="unit">B</span></div>
              <div className="pad-sm"><span className="unit">C</span></div>
            </div>
            <p className="body">
              Ein Abstand von 1px über einem Ink-Grund erzeugt haarfeine
              Trenner ohne eine einzige Rahmenangabe am Kind. Die Kinder tragen
              eine Kontur statt eines Rahmens, damit benachbarte Linien im
              selben Kanal liegen und nie doppeln.
            </p>
          </Demo>

          <Demo label="Linienstärken">
            <div className="spec-lines">
              {RULES.map((r) => (
                <div key={r.token} className="spec-line-row">
                  <div
                    className="spec-line"
                    style={{ height: r.px, background: 'var(--ink)' }}
                    aria-hidden="true"
                  />
                  <span className="unit">
                    {r.px} — {r.use}
                  </span>
                </div>
              ))}
            </div>
          </Demo>
        </div>

        <Demo label="8px-Modul">
          <div className="spec-units">
            {UNITS.map((u) => (
              <div key={u.token} className="spec-unit">
                <div
                  className="spec-unit-bar"
                  style={{ width: u.px }}
                  aria-hidden="true"
                />
                <span className="unit">{u.px}</span>
              </div>
            ))}
          </div>
        </Demo>

        <Demo label="Satzspiegel">
          <dl className="readout">
            <dt>Breite</dt>
            <dd>max. {MEASURES.shell}</dd>
            <dt>Rand</dt>
            <dd>{MEASURES.gutter}</dd>
            <dt>Kopfleiste</dt>
            <dd>{MEASURES.nav}</dd>
            <dt>Sektion</dt>
            <dd>
              {MEASURES.padDense} dicht · {MEASURES.padVast} weit
            </dd>
            <dt>Langtext</dt>
            <dd>{MEASURES.docColumns}</dd>
          </dl>
          <p className="body">
            Unter 1024px fällt jede Spalte unter halber Breite auf die Hälfte,
            jede darüber auf die volle. Unter 720px steht alles in einer
            Spalte. Das Raster reflowt nicht elegant, es kollabiert — und
            behält dabei alle Linien.
          </p>
          <p className="body">
            Langtext bekommt zwei Zonen: im Rand die Kapitelmarke und der
            Vorspann, daneben die Prosa in zwei Spalten im selben Lesemaß. Der
            Rand kostet keine Höhe, weil er neben dem Text steht. Unter 1180px
            stapelt sich der Rand über den Text, die zwei Spalten bleiben;
            unter 860px bleibt eine.
          </p>
          <p className="body">
            Ein Bild eröffnet den Rumpf seines Kapitels oder folgt direkt auf
            ein spaltenbrechendes Element — nur dort steht es auf derselben
            Linie wie der Text daneben. Seine Oberkante sitzt dabei auf der
            Versalhöhe dieses Textes, nicht auf dessen Zeilenkasten.
          </p>
        </Demo>
      </Chapter>

      {/* ── 06 KOMPONENTEN ───────────────────────────────────────────────── */}
      <Chapter
        num="06"
        title="Komponenten"
        lead="Jedes Element ist ein hartes Rechteck. Zustände springen um, sie blenden nicht über."
      >
        <div className="g2 spec-cols">
          <Demo label="Bedienelemente">
            <div className="spec-row-wrap">
              <span className="btn">.btn</span>
              <span className="btn btn-red">.btn-red</span>
              <span className="link">.link →</span>
            </div>
            <div className="chips" style={{ marginTop: 'var(--u3)' }}>
              <span className="chip">.chip</span>
              <span className="chip chip-red">.chip-red</span>
              <span className="chip chip-fill">.chip-fill</span>
            </div>
          </Demo>

          <Demo label=".readout — technische Anzeige">
            <div className="box regmark" style={{ padding: 'var(--u3)' }}>
              <dl className="readout">
                <dt>Unit</dt>
                <dd>1789 / FFM</dd>
                <dt>Rev</dt>
                <dd>002</dd>
                <dt>Status</dt>
                <dd style={{ color: 'var(--red)' }}>Aktiv</dd>
              </dl>
            </div>
          </Demo>
        </div>

        <Demo label=".ruled — Aufzählung als geruhte Zeilen">
          <ul className="ruled">
            <li>
              <span className="d4">Jede Zeile ein Kompartiment</span>
            </li>
            <li>
              <span className="body">
                Die Marke steht im Akzent. Der Eintrag steht im Register, das
                der Kontext verlangt — Makro in einer Liste von Ergebnissen,
                Fließtext in einem Bericht.
              </span>
            </li>
            <li>
              <span className="d4">.ruled-lg gibt jeder Zeile mehr Luft</span>
            </li>
          </ul>
        </Demo>

        <div className="g2 spec-cols">
          <Demo label=".plate — jedes Bild wird ein Raster">
            <Plate src="/projects/wd40.jpg" alt="Beispiel" ratio="16 / 10" />
            <p className="body">
              Zwei Punktraster liegen über dem Bild: das Ink-Raster und ein
              zweites im Akzent, um Bruchteile versetzt — der Druck, der nicht
              sauber steht. Ohne diesen Versatz wirkt das Raster wie ein Filter
              statt wie etwas Gedrucktes.
            </p>
          </Demo>

          <Demo label=".plate ohne Bild — der Name wird das Bild">
            <Plate label="Teccle Group" note={null} ratio="16 / 10" />
            <p className="body">
              Fehlt ein Foto, trägt die Fläche den Namen im Punktfeld. Kein
              Platzhalter, der auf ein Bild wartet.
            </p>
          </Demo>
        </div>

        <Demo label=".tension — Karte mit Rückseite">
          <div className="hairgrid hairgrid-2 tensions">
            <Tension
              title="Neue Strategie."
              pair="Alte Verteilung."
              body="Die Erklärung liegt hinter der Karte. Auf dem Desktop ist ihr Platz reserviert, damit beim Öffnen nichts springt."
              close="Geschlossen: Begriffspaar und Schlusssatz."
            />
            <article className="pad tension tension-flip is-open">
              <h3 className="d3">
                Neue Arbeit.
                <br />
                <span className="d-thin d-red">Alte Ordnung.</span>
              </h3>
              <p className="body tension-body">
                Geöffnet kippt die Karte auf Ink, der Akzent springt auf Orange,
                und die Erklärung fährt als Schwelle ein.
              </p>
              <div className="close-line tension-close">
                <span>Geöffnet: die Rückseite ist sichtbar.</span>
                <span className="tension-toggle">[ – ]</span>
              </div>
            </article>
          </div>
        </Demo>

        <div className="g2 spec-cols">
          <Demo label=".phase — Zelle mit Blaupause">
            <div className="hairgrid hairgrid-2">
              {[0, 1].map((i) => (
                <div key={i} className="phase">
                  <PhaseGlyph index={i} />
                  <div className="phase-body">
                    <span className="eyebrow">
                      {i === 0 ? 'Beobachtung' : 'Zielmodell'}
                      <span className="phase-next" aria-hidden="true">
                        {' '}
                        →
                      </span>
                    </span>
                    <h3 className="phase-title">
                      {i === 0 ? 'Sichtbar machen' : 'Entscheidbar machen'}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <p className="body">
              Die Zeichnungen entstehen prozedural auf einem Raster aus 44 × 16
              Zeichen, aus reinem ASCII. Das Feld steht in Ink, der Eingriff im
              Akzent.
            </p>
          </Demo>

          <Demo label="Texturen">
            <Barcode />
            <div style={{ height: 'var(--u3)' }} />
            <div
              className="graticule"
              style={{ height: 72, border: 'var(--rule)' }}
              aria-hidden="true"
            />
            <div style={{ height: 'var(--u3)' }} />
            <div
              className="dotfield"
              style={{ height: 72, border: 'var(--rule)' }}
              aria-hidden="true"
            />
            <p className="body">
              Barcode, Blaupausen-Gitter und Punktfeld sind reine Texturen. Sie
              tragen nie Bedeutung.
            </p>
          </Demo>
        </div>

        <p className="close-line spec-note">
          Weitere Bausteine folgen denselben Regeln: Kachel und Mosaik für
          Archive, die Leiste für seitliches Blättern, das Laufband als Trenner,
          das AI-Band als dunkle Insel im hellen Kapitel.
        </p>
      </Chapter>

      {/* ── 07 BEWEGUNG ──────────────────────────────────────────────────── */}
      <Chapter
        num="07"
        title="Bewegung"
        lead="Drei Arten von Bewegung, sonst keine. Jede ist mechanisch — in Stufen, nicht in Kurven."
      >
        <div className="hairgrid hairgrid-3">
          {[
            [
              'Ein Auftritt',
              `Der Hero ist der einzige choreografierte Moment: Vorzeile, dann die drei Sätze nacheinander, dann die Schaltflächen. Etwa ${MOTION.entrance} insgesamt, in ${MOTION.steps}, aus reinem CSS.`,
            ],
            [
              'Rückmeldung',
              `Was der Leser auslöst, springt in ${MOTION.snap}. Eine Fläche, die Inhalt freigibt, fährt in ${MOTION.shutter} als Schwelle ein. Gleiche Zeit für gleiche Sache.`,
            ],
            [
              'Atmosphäre',
              `Eine fortlaufende Bewegung zur Zeit: das ASCII-Feld im Hero, die Laufbänder (${MOTION.tape}) und das Logoband (${MOTION.logos}).`,
            ],
          ].map(([t, b]) => (
            <article key={t} className="pad">
              <h3 className="d4" style={{ marginBottom: 'var(--u2)' }}>
                {t}
              </h3>
              <p className="body">{b}</p>
            </article>
          ))}
        </div>

        <div className="g2 spec-cols">
          <p className="close-line">
            Keine Reveals beim Scrollen. Sie zünden am Rand des Sichtfelds, wo
            niemand hinsieht, verzögern das Lesen und wiederholen dieselbe Geste
            die ganze Seite hinunter. Inhalt ist da, wenn man ankommt.
          </p>
          <p className="close-line">
            Bei reduzierter Bewegung entfällt der Auftritt, die Laufbänder
            stehen still, und die Rückmeldung springt ohne Übergang.
          </p>
        </div>
      </Chapter>

      {/* ── 08 HARTE REGELN ──────────────────────────────────────────────── */}
      <Chapter
        num="08"
        title="Harte Regeln"
        lead="Was bei jeder Änderung gilt. Wer eine davon bricht, bricht das System."
        ground="slab slab-invert"
      >
        <ol className="spec-rules">
          {[
            ['Texte verbatim', 'Deutsche Texte werden übernommen, nie umgeschrieben, gekürzt oder übersetzt.'],
            ['Keine neuen Werte', 'Nur Klassen und Tokens, die es gibt. Keine neue Farbe, keine neue Schrift, kein px-Literal für Abstände.'],
            ['Ein Akzent je Grund', 'Aubergine auf hell, Orange auf dunkel, Aqua nur in den Bildern.'],
            ['Eine laute Fläche', 'Höchstens ein Orange je Seite. Aubergine bleibt dem Schluss vorbehalten.'],
            ['Bilder immer als Raster', 'Jedes Foto läuft durch die Platte. Kein Bild erscheint im vollen Halbton.'],
            ['Zeilenabstand im Makro ≥ 1.1', 'Sonst kollidieren die Umlaute mit der Zeile darüber.'],
          ].map(([t, b], i) => (
            <li key={t} className="spec-rule">
              <span className="data spec-rule-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="d4">{t}</h3>
                <p className="body">{b}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="d3 statement">
          Die Spezifikation ist die Seite.
          <br />
          <span className="d-thin">Was hier steht, steht im Code.</span>
        </p>
      </Chapter>
    </main>
  )
}
