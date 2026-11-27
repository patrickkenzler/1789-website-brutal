import type { LaborPost } from '@/data/labor'

const post: LaborPost = {
  slug: 'the-infermezzo',
  category: 'Text',
  format: 'Essay',
  title: 'The Infermezzo',
  date: 'März 2026',
  sort: '2026-03',
  people: 'Mary-Jane Bolten',
  language: 'Englisch',
  topics: ['KI und Arbeit', 'Führung'],
  source: { label: 'Substack ACOPALYPSE', href: 'https://acopalypse.substack.com/p/the-infermezzo' },
  access: 'frei',
  intro: 'Wie verändert sich unsere Arbeit, wenn KI einen Teil davon übernimmt? Mary-Jane Bolten beobachtet das an sich selbst, an einer unscheinbaren Stelle: der Pause, in der man wartet, bis die KI fertig ist. Der Essay erschien im März 2026 auf ihrem Substack ACOPALYPSE, auf Englisch.',
  body: [
    'Mary-Jane nennt diese Pause das Infermezzo, zusammengesetzt aus „Inference“ und „Intermezzo“: die Minuten, in denen eine KI an einer Aufgabe rechnet und noch nichts zurückgibt. An dieser Pause macht sie fest, was sich an der Arbeit selbst verschiebt. Früher hat sie sich als Beraterin Zeit für Recherche, Konzept und Präsentation geblockt und ihre Konzepte dabei mindestens zur Hälfte umgebaut. Aus dieser Arbeit am Gegenstand hat sie das meiste gelernt. Das Infermezzo unterbricht genau diese Arbeit, immer wieder für ein paar Minuten.',
    'Ihre Rolle wandert vom Machen zum Steuern und Prüfen. Wer mit KI arbeitet, arbeitet damit mehr wie eine Führungskraft, und Henry Mintzberg beschrieb Managementarbeit schon 1973 als zerstückelt, reaktiv und mündlich. Eine BCG-Studie in der Harvard Business Review (2026) nennt die Erschöpfung, die dabei entsteht, „AI brain fry“. Führungskräfte kommen damit besser zurecht als Fachleute. Wenn alle so arbeiten, fragt Mary-Jane, was wird dann aus dem Fachwissen?',
    'Sie prüft die Ergebnisse der KI an Frameworks. Wie Jerry Z. Muller für Kennzahlen gezeigt hat, ersetzen solche Raster leicht das eigentliche Urteil. Was sie neu lernt, betrifft vor allem die Methoden der Technik, kaum noch ihr Fach. Am Ende steht die Frage, ob sie sich gerade von ihrer eigenen Expertise entfernt, und ob ihre Frameworks das überhaupt anzeigen würden.',
  ],
  outro: 'Der Essay ist für alle, die mit KI arbeiten und genauer hinsehen wollen, was das mit ihrer eigenen Arbeit macht. Er steht frei auf acopalypse.substack.com.',
  mediaPending: 'Kachelbild, schickt Mary',
}

export default post
