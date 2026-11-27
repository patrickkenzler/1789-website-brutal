/* ═══ RECHTLICHES ══════════════════════════════════════════════════════════
   \n bleibt erhalten und wird mit whiteSpace: 'pre-line' gerendert.

   Impressum: am 23.11.2026 auf die Pflichtangaben nach § 5 DDG und
   § 18 Abs. 2 MStV gebracht. Gestrichen, weil nicht vorgeschrieben oder
   überholt: Berufsbezeichnung, Online-Streitbeilegung (EU-Plattform seit
   Juli 2025 abgeschaltet), Haftung für Inhalte, Haftung für Links,
   Urheberrecht.
   Im Kontaktblock steht bewusst keine Telefonnummer: Marys Entwurf trug
   vorläufig ihre private Mobilnummer, und welche Nummer dort hingehört,
   ist nicht entschieden (Patrick, 26.11.2026). § 5 DDG verlangt sie nicht,
   die E-Mail-Adresse erfüllt die schnelle Kontaktaufnahme.
   Datenschutz: am 27.11.2026 neu geschrieben (Marys Punkt 14). Der Bestand
   beschrieb Google Analytics, LinkedIn-, YouTube-, Spotify-, Buzzsprout-,
   Apple- und Amazon-Plugins — nichts davon ist eingebunden, und eine
   Erklärung, die Dienste nennt, die es nicht gibt, ist schlechter als keine.
   Was jetzt dasteht, ist am 27.11.2026 an der Live-Seite nachgemessen:
   sämtliche Anfragen gehen an eine Adresse, keine Cookies, kein
   localStorage, die Schriften kommen aus `_next/static/media` statt von
   Google.
   Zwei Dinge fehlen noch und hängen nicht an mir: der Hoster ist bewusst
   nicht benannt, weil der Entwurf auf GitHub Pages liegt und später
   umzieht — vor dem Launch gehört dort der echte Name hin, und bei einem
   Anbieter außerhalb der EU auch die Grundlage der Übermittlung. Und der
   Text ist nicht juristisch geprüft.                                       */

import { CONTACT } from './site'

export type LegalSection = { heading: string; body: string }

export const IMPRESSUM: LegalSection[] = [
  {
    heading: 'Angaben gemäß § 5 DDG',
    body: '1789 Innovations GmbH\nCoventrystr. 31\n65934 Frankfurt am Main',
  },
  {
    heading: 'Büro',
    body: '1789 Innovations GmbH\nElbestraße 17\n60329 Frankfurt am Main',
  },
  {
    heading: 'Vertreten durch die Geschäftsführung',
    body: 'Human Nagafi, Mary-Jane Bolten',
  },
  {
    heading: 'Kontakt',
    body: `E-Mail: ${CONTACT.mail}`,
  },
  {
    heading: 'Registereintrag',
    body: 'Handelsregister: HRB 143364\nRegistergericht: Amtsgericht Frankfurt am Main',
  },
  {
    heading: 'Umsatzsteuer-Identifikationsnummer',
    body: 'gemäß § 27a Umsatzsteuergesetz:\nDE313886154',
  },
  {
    heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    body: 'Mary-Jane Bolten\n1789 Innovations GmbH\nCoventrystr. 31\n65934 Frankfurt am Main',
  },
]

export const DATENSCHUTZ: LegalSection[] = [
  {
    heading: 'Verantwortlicher',
    body: `1789 Innovations GmbH\nCoventrystr. 31\n65934 Frankfurt am Main\nVertreten durch: Human Nagafi, Mary-Jane Bolten\nE-Mail: ${CONTACT.mail}`,
  },
  {
    heading: 'Was diese Seite tut',
    body: 'Diese Seite ist statisch. Sie wird einmal erzeugt und dann als fertige Dateien ausgeliefert. Es gibt keine Benutzerkonten, keine Datenbank und keine Auswertung Ihres Verhaltens.\n\nSie setzt keine Cookies und legt nichts in Ihrem Browser ab. Sie bindet keine Analyse- und keine Werbedienste ein. Alle Dateien, die Ihr Browser beim Besuch lädt, kommen von derselben Adresse wie die Seite selbst, auch die Schriften. Beim bloßen Aufruf geht keine Anfrage an Dritte.',
  },
  {
    heading: 'Hosting und Server-Logfiles',
    body: 'Die Seite liegt bei einem Hoster. Wie jeder Webserver verarbeitet dieser beim Abruf technische Verbindungsdaten: Ihre IP-Adresse, Datum und Uhrzeit, die abgerufene Datei, die übertragene Datenmenge, die verweisende Seite sowie Angaben zu Browser und Betriebssystem.\n\nDiese Verarbeitung ist technisch nötig, damit die Seite bei Ihnen ankommt, und sie dient der Sicherheit des Betriebs. Rechtsgrundlage ist unser berechtigtes Interesse an einem funktionierenden und sicheren Angebot, Art. 6 Abs. 1 lit. f DSGVO.\n\nWir führen diese Daten nicht mit anderen Daten zusammen und ziehen daraus keine Rückschlüsse auf einzelne Personen.',
  },
  {
    heading: 'Schriften',
    body: 'Die Seite verwendet die Schriften Martian Mono und JetBrains Mono. Beide liegen auf unserem eigenen Server und werden von dort ausgeliefert. Ihr Browser stellt dafür keine Verbindung zu Google Fonts oder einem anderen Anbieter her, und es wird dabei keine IP-Adresse an Dritte übertragen.',
  },
  {
    heading: 'Kontakt per E-Mail',
    body: 'Wenn Sie uns schreiben, verarbeiten wir Ihre Angaben, um Ihre Anfrage zu beantworten. Dazu gehören Ihre E-Mail-Adresse, Ihr Name und alles, was Sie uns mitteilen.\n\nRechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, sonst unser berechtigtes Interesse an der Beantwortung, Art. 6 Abs. 1 lit. f DSGVO.\n\nWir behalten Ihre Nachricht, solange wir sie für die Bearbeitung und für Rückfragen brauchen, und löschen sie, sobald der Anlass entfällt. Zwingende Aufbewahrungsfristen bleiben davon unberührt.',
  },
  {
    heading: 'Anfrage über das Formular',
    body: 'Das Formular auf der Kontaktseite überträgt nichts an uns, während Sie es ausfüllen. Der Knopf öffnet eine vorbereitete E-Mail in Ihrem eigenen Mailprogramm. Sie sehen sie vollständig, bevor Sie entscheiden, ob Sie sie abschicken. Was Sie eingeben, bleibt bis dahin auf Ihrem Gerät.\n\nSchicken Sie die Mail ab, gilt der vorige Abschnitt.',
  },
  {
    heading: 'Links auf andere Seiten',
    body: 'Wir verlinken auf Seiten Dritter, etwa auf Spotify und Apple Podcasts, auf YouTube, LinkedIn, Substack sowie auf Seiten von Verlagen und Veranstaltern.\n\nDiese Seiten laden erst, wenn Sie den Link anklicken. Erst dann erfährt der jeweilige Anbieter Ihre IP-Adresse und was er sonst erhebt. Darauf haben wir keinen Einfluss; es gilt die Datenschutzerklärung der jeweiligen Seite.',
  },
  {
    heading: 'Eingebettete Inhalte',
    body: 'Diese Seite bindet derzeit keine fremden Inhalte ein. Es laufen keine Videos, keine Podcast-Player und keine Karten auf unseren Seiten, wir verlinken dorthin.\n\nSollten wir das ändern, holen wir vorher Ihre Einwilligung ein, und dieser Abschnitt beschreibt dann, worum es geht.',
  },
  {
    heading: 'Ihre Rechte',
    body: 'Sie haben uns gegenüber das Recht auf Auskunft über Ihre gespeicherten Daten, auf deren Berichtigung, auf Löschung und auf Einschränkung der Verarbeitung. Sie haben das Recht auf Datenübertragbarkeit.\n\nSoweit wir Daten auf Grundlage unseres berechtigten Interesses verarbeiten, haben Sie das Recht, dieser Verarbeitung aus Gründen zu widersprechen, die sich aus Ihrer besonderen Situation ergeben, Art. 21 DSGVO.\n\nEine erteilte Einwilligung können Sie jederzeit für die Zukunft widerrufen.',
  },
  {
    heading: 'Beschwerderecht',
    body: 'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Behörde Ihres Aufenthaltsorts oder die unseres Sitzes; für uns ist das der Hessische Beauftragte für Datenschutz und Informationsfreiheit.',
  },
  {
    heading: 'Widerspruch gegen Werbe-Mails',
    body: 'Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Wir behalten uns rechtliche Schritte im Fall unverlangter Werbesendungen vor.',
  },
]
