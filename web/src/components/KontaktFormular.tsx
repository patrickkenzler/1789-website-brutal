'use client'

import { useState, type FormEvent } from 'react'

/* ═══ ANFRAGE ══════════════════════════════════════════════════════════════
   Das Formular hatte kein `action`. Ein Formular ohne Ziel schickt beim
   Absenden ein GET an die eigene Adresse, und alle Felder stehen dann in der
   Adresszeile: Name, Organisation, E-Mail und der Freitext zur Lage des
   Absenders. Die Adresse steht danach im Browserverlauf, geht als Referrer
   an jede weitere Anfrage und steht in den Server-Logs des Hosters. Beim
   Absender kam nichts an außer einer leeren Seite, und bei 1789 kam gar
   nichts an (gemessen am 27.11.2026 auf der Live-Seite).

   Bis es ein Backend gibt, öffnet der Knopf deshalb eine vorbereitete
   E-Mail im Programm des Absenders. Nichts läuft dabei über einen Server,
   und die Nachricht kommt an. Wer kein Mailprogramm eingerichtet hat, sieht
   darunter die Adresse zum Kopieren.

   Wenn das Backend kommt, ersetzt es `onSubmit` — die Felder und ihre Namen
   bleiben, wie sie sind.                                                   */

export function KontaktFormular({ mail }: { mail: string }) {
  const [offen, setOffen] = useState(false)

  function senden(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const g = (k: string) => String(f.get(k) ?? '').trim()

    const name = [g('vorname'), g('nachname')].filter(Boolean).join(' ')
    const betreff = name ? `Anfrage von ${name}` : 'Anfrage über 1789innovations.com'
    const text = [
      name && `Name: ${name}`,
      g('organisation') && `Organisation: ${g('organisation')}`,
      g('email') && `E-Mail: ${g('email')}`,
      g('situation') && `\n${g('situation')}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${mail}?subject=${encodeURIComponent(
      betreff
    )}&body=${encodeURIComponent(text)}`
    setOffen(true)
  }

  return (
    <form onSubmit={senden}>
      <div className="g2">
        <div className="field">
          <label className="field-label" htmlFor="vorname">
            Vorname
          </label>
          <input className="input" id="vorname" name="vorname" type="text" placeholder="Max" />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="nachname">
            Nachname
          </label>
          <input
            className="input"
            id="nachname"
            name="nachname"
            type="text"
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div className="field">
        <label className="field-label" htmlFor="organisation">
          Organisation
        </label>
        <input
          className="input"
          id="organisation"
          name="organisation"
          type="text"
          placeholder="Ihr Unternehmen"
        />
      </div>

      <div className="field">
        <label className="field-label" htmlFor="email">
          E-Mail
        </label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          placeholder="max@organisation.de"
        />
      </div>

      <div className="field">
        <label className="field-label" htmlFor="situation">
          Ihre Situation
        </label>
        <textarea
          className="input"
          id="situation"
          name="situation"
          rows={5}
          placeholder="Beschreiben Sie kurz, womit Sie sich gerade beschäftigen – welche Spannung, welche Lücke, welches Thema."
        />
      </div>

      <button type="submit" className="btn btn-red btn-block">
        Nachricht verfassen <span aria-hidden="true">→</span>
      </button>

      <p className="unit" style={{ marginTop: 'var(--u3)' }} aria-live="polite">
        {offen
          ? `Ihr Mailprogramm sollte sich geöffnet haben. Falls nicht: ${mail}`
          : `Der Knopf öffnet eine vorbereitete E-Mail. Sie sehen sie, bevor Sie sie abschicken.`}
      </p>
    </form>
  )
}
