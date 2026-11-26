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
   Datenschutz: unverändert aus dem Bestand übernommen.                     */

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
    heading: 'Datenschutz',
    body: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.\n\nDie Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.',
  },
  {
    heading: 'Teildienste',
    body: 'Beim Zugriff auf manche Teildienste unserer Website (z.B. um den Podcast Corporate Therapy zu hören) werden zusätzliche personenbezogene Daten verarbeitet.\n\nDabei verarbeitete Datenkategorien: technische Verbindungsdaten des Serverzugriffs (IP-Adresse, Datum, Uhrzeit, abgefragte Seite, Browser-Informationen).\n\nZweck der Verarbeitung: Auslieferung von Inhalten, die von Dritten bereitgestellt werden und die Übermittlung von Audio-Inhalten.',
  },
  {
    heading: 'Datenerfassung',
    body: 'Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.\n\nWir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',
  },
  {
    heading: 'Cookies',
    body: 'Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.\n\nDie meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.\n\nSie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.',
  },
  {
    heading: 'Google Analytics',
    body: 'Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway Mountain View, CA 94043, USA.\n\nGoogle Analytics verwendet so genannte „Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.\n\nMehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google.\n\nSie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren.',
  },
  {
    heading: 'LinkedIn',
    body: 'Unsere Website nutzt Funktionen des Netzwerks LinkedIn. Anbieter ist die LinkedIn Corporation, 2029 Stierlin Court, Mountain View, CA 94043, USA. Bei jedem Abruf einer unserer Seiten, die Funktionen von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn aufgebaut. LinkedIn wird darüber informiert, dass Sie unsere Internetseiten mit Ihrer IP-Adresse besucht haben. Wenn Sie den „Recommend-Button" von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren Besuch auf unserer Internetseite Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.',
  },
  {
    heading: 'YouTube',
    body: 'Unsere Webseite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.\n\nWenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.',
  },
  {
    heading: 'Spotify',
    body: 'Auf unserer Seite verwenden wir Social Plugins des Anbieters Spotify AB, Regeringsgatan 19, SE-111 53 Stockholm, Schweden. Durch das Benutzen von Spotify werden die von Ihnen besuchten Webseiten mit Ihrem evtl. vorhandenen Spotify Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Spotify übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung erhalten.',
  },
  {
    heading: 'Buzzsprout',
    body: 'Einige Teilbereiche unserer Website nutzen Plugins des Anbieters Buzzsprout. Buzzsprout gehört und wird betrieben von Higher Pixels, Inc., 5133 San Jose Blvd, Jacksonville, Florida 32207, US. Bei der Nutzung der Website durch Klick auf Buzzsprout Apps werden die von Ihnen besuchten Webseiten mit Ihrem evtl. vorhandenen Buzzsprout Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Buzzsprout und Higher Pixels, Inc. übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung erhalten.',
  },
  {
    heading: 'Apple Podcast',
    body: 'Auf unseren Seiten sind Funktionen des Anbieters Apple Podcast eingebunden.\n\nDiese Funktionen werden angeboten durch Apple Distribution International Limited, mit Sitz in Hollyhill Industrial Estate, Hollyhill, Cork, Republik Irland (für alle Nutzende aus der EU). Durch das Benutzen von Apple Podcast werden die von Ihnen besuchten Webseiten mit Ihrer Apple ID verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Apple übertragen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Apple erhalten.',
  },
  {
    heading: 'Amazon Music',
    body: 'Unsere Website nutzt Funktionen des Dienstes Amazon Music. Diese Funktionen werden angeboten durch die Amazon, 525 Market St, San Francisco, California 94105, US. Wenn Sie in Ihrem Amazon-Account eingeloggt sind, können Sie durch Anklicken des Buttons die Inhalte unserer Seiten mit Ihrem Amazon-Profil verlinken. Dadurch kann Amazon Music den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Amazon oder Amazon Music erhalten.',
  },
  {
    heading: 'Widerspruch Werbe-Mails',
    body: 'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',
  },
]
