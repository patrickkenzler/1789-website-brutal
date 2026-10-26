/* ═══ DESIGN-TOKENS — die Werte, die der Styleguide benennt ════════════════
   Spiegel der Konstanten aus globals.css. Alles, was die Spezifikation als
   Zahl oder Hex zeigt, steht hier — damit die Seite nicht abgetippte Werte
   zeigt, die vom CSS abweichen. Ändert sich ein Token im CSS, ändert es sich
   hier mit.                                                                */

export const REVISION = 'REV 002'

export type Swatch = {
  token: string
  hex: string
  name: string
  role: string
  /** Auf welchem Grund steht die Fläche im Styleguide gut? */
  on?: 'light' | 'dark'
}

/** Substrate und Akzente. Reihenfolge = Lesereihenfolge im Kapitel. */
export const SWATCHES: readonly Swatch[] = [
  { token: '--paper', hex: '#DDE5E3', name: 'Alabaster Grey', role: 'Das einzige Substrat der Seite' },
  { token: '--sunk', hex: '#CFD9D6', name: 'Alabaster vertieft', role: 'Vertiefte Felder: Eingaben, Wannen' },
  { token: '--stock', hex: '#11151C', name: 'Ink Black', role: 'Dunkler Grund der invertierten Einheiten', on: 'dark' },
  { token: '--red', hex: '#5D2A42', name: 'Aubergine', role: 'Akzent auf hellem Grund, Schluss-CTA' },
  { token: '--orange', hex: '#F14800', name: 'Molten Orange', role: 'Akzent auf dunklem Grund, einmal als Fläche' },
  { token: '--accent-blue', hex: '#00E5FF', name: 'Electric Aqua', role: 'Sparsamer Dritter: nur die AI-Grafiken', on: 'dark' },
]

/** Die Ink-Treppe — vier Werte, kein Grau dazwischen. */
export const INKS: readonly Swatch[] = [
  { token: '--ink', hex: '#11151C', name: 'Ink', role: 'Überschriften, Linien, alles Tragende' },
  { token: '--ink-70', hex: '#465059', name: 'Ink 70', role: 'Fließtext' },
  { token: '--ink-45', hex: '#7E878E', name: 'Ink 45', role: 'Marker, Koordinaten, Deaktiviertes' },
  { token: '--ink-20', hex: '#B7C1BE', name: 'Ink 20', role: 'Rasterlinien, Punktfelder' },
]

export type TypeStep = {
  cls: string
  role: string
  size: string
  /** Gerechnet aus der clamp()-Formel — was tatsächlich auf dem Schirm steht. */
  desktop: string
  phone: string
  weight: number
  leading: string
  width: number
  tracking: string
}

/** Makro-Skala: fluid, nur über clamp(). Desktop = 1440px, Phone = 375px. */
export const TYPE_SCALE: readonly TypeStep[] = [
  { cls: 'd0', role: 'Ziffernlauf, randsprengend', size: 'clamp(4rem, 18vw, 20rem)', desktop: '259px', phone: '68px', weight: 800, leading: '0.78', width: 75, tracking: '−0.06em' },
  { cls: 'd1', role: 'Seitentitel', size: 'clamp(1.75rem, 4.1vw, 4.25rem)', desktop: '59px', phone: '28px', weight: 800, leading: '1.12', width: 87.5, tracking: '−0.045em' },
  { cls: 'd2', role: 'Sektionstitel', size: 'clamp(1.5rem, 3.8vw, 3.25rem)', desktop: '52px', phone: '24px', weight: 700, leading: '1.1', width: 87.5, tracking: '−0.045em' },
  { cls: 'd3', role: 'Blocktitel', size: 'clamp(1.25rem, 2.6vw, 2.25rem)', desktop: '36px', phone: '20px', weight: 700, leading: '1.12', width: 100, tracking: '−0.03em' },
  { cls: 'd4', role: 'Kartentitel', size: 'clamp(1rem, 1.5vw, 1.25rem)', desktop: '20px', phone: '16px', weight: 600, leading: '1.15', width: 100, tracking: '−0.03em' },
]

/** Mikro-Skala: feste Werte, nie fluid. */
export const MICRO_SCALE: readonly { token: string; px: string; use: string }[] = [
  { token: '--t-10', px: '10px', use: 'Registermarken, Koordinaten · .unit' },
  { token: '--t-11', px: '11px', use: 'Telemetrie, Tabellendaten · .eyebrow .data' },
  { token: '--t-12', px: '12px', use: 'Navigation, Beschriftungen' },
  { token: '--t-13', px: '13px', use: 'Fließtext · .body' },
  { token: '--t-15', px: '15px', use: 'Vorspann · .body-lg' },
  { token: '--t-18', px: '18px', use: 'Standfirst' },
]

/** Linienstärken — Kompartimente entstehen durch Linien, nicht durch Abstände. */
export const RULES: readonly { token: string; px: string; use: string }[] = [
  { token: '--hair', px: '1px', use: 'Rasterlinie, Standardtrennung' },
  { token: '--bar', px: '2px', use: 'Sektionskopf, Buttons, aktive Navigation' },
  { token: '--slab', px: '4px', use: 'Schwerste Trennung, sparsam' },
]

/** 8px-Modul. Das Layout rastet darauf ein, nichts schwebt dazwischen. */
export const UNITS: readonly { token: string; px: number }[] = [
  { token: '--u', px: 8 },
  { token: '--u2', px: 16 },
  { token: '--u3', px: 24 },
  { token: '--u4', px: 32 },
  { token: '--u6', px: 48 },
  { token: '--u8', px: 64 },
  { token: '--u12', px: 96 },
  { token: '--u16', px: 128 },
]

export const MEASURES = {
  shell: '1680px',
  gutter: 'clamp(16px, 4vw, 56px)',
  nav: '56px',
  padDense: 'clamp(24px, 4vw, 40px)',
  padVast: 'clamp(56px, 10vh, 140px)',
  bodyMeasure: '68 Zeichen',
} as const

export const MOTION = {
  snap: '80 ms',
  shutter: '360 ms',
  slip: '160 ms',
  entrance: '2 s',
  steps: 'steps(4, end)',
  tape: '48 s',
  logos: '70 s',
} as const

/** Die Gründe und ihre Reihenfolge auf der Startseite. */
export const GROUNDS: readonly {
  cls: string
  name: string
  bg: string
  accent: string
  rule: string
}[] = [
  {
    cls: '.slab',
    name: 'Hell',
    bg: '#DDE5E3',
    accent: 'Aubergine',
    rule: 'Trägt das Lesen. Der Standardgrund jeder Seite.',
  },
  {
    cls: '.slab-invert',
    name: 'Dunkel',
    bg: '#11151C',
    accent: 'Molten Orange',
    rule: 'Eröffnet ein Kapitel mit einer Aussage über die volle Breite.',
  },
  {
    cls: '.slab-orange',
    name: 'Orange',
    bg: '#F14800',
    accent: 'Ink (keine zweite Farbe)',
    rule: 'Die lauteste Fläche. Einmal je Seite, für den stärksten Anspruch.',
  },
  {
    cls: '.slab-red',
    name: 'Aubergine',
    bg: '#5D2A42',
    accent: 'Alabaster',
    rule: 'Nur der Schluss: die Aufforderung am Ende der Seite.',
  },
]

export const GROUND_SEQUENCE = 'D · L O · D L · D L · A'
