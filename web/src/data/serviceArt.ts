/* ═══ LEISTUNGEN — EINE EIGENE ZEICHNUNG ═══════════════════════════════════
   Die Startseite führt das laufende Wellenfeld, der Ansatz die Phasenbilder
   (Raster mit gesetzter Zelle, Zielscheibe), das Labor die Formatglyphen
   (Wellenform, Satzspiegel, Netz). Diese Seite bekommt eine eigene Figur:
   einen Schnitt — waagerechte Schichten unterschiedlicher Dichte, durch die
   eine Bohrung senkrecht hindurchgeht. Wo sie eine Schicht trifft, steht der
   Akzent.

   Wie Barcode, Punktfeld und Blaupausen-Gitter ist das eine Textur und trägt
   keine Bedeutung — sie bildet weder die drei Leistungen ab noch eine
   Reihenfolge. Gezeichnet wird auf demselben 44×16-Raster wie alles andere,
   in reinem ASCII.                                                        */

import { Canvas, rng, seedFrom, W, H } from './asciiCanvas'

/** Die Zeichen der Schichten. Dichte und lockere wechseln sich ab, damit die
 *  Lagerung liest und nicht ein gleichmäßiges Raster. */
const STRATA = ['=', ':', '-', '.', '=', '-', ':', '=']

export function sectionPlate(seed: number): string {
  const c = new Canvas()
  const r = rng(seed)

  /* Die Schichten. Jede läuft über die volle Breite, mit einer Oberkante,
     die leicht wandert — ein Schnitt, kein Lineal. */
  let y = 1
  let s = 0
  while (y < H - 1) {
    const ch = STRATA[s % STRATA.length]
    const dense = ch === '=' || ch === '-'
    const thickness = dense ? 2 + Math.floor(r() * 2) : 1
    const drift = Math.floor(r() * 3) - 1
    for (let t = 0; t < thickness && y + t < H - 1; t++) {
      const x0 = Math.max(1, 1 + drift)
      const x1 = Math.min(W - 2, W - 2 + drift)
      c.hline(x0, x1, y + t, ch, dense ? 1 : 2)
    }
    y += thickness + (dense ? 1 : 0)
    s++
  }

  /* Die Bohrung: eine senkrechte Spur, die alle Schichten durchschlägt. */
  const bore = 9 + Math.floor(r() * (W - 20))
  c.vline(bore, 0, H - 1, '|')
  c.set(bore, 0, '+')
  c.set(bore, H - 1, '+')
  /* Wo die Bohrung eine Schichtgrenze kreuzt, steht ein Kreuz — sonst
     verschwindet die Spur zwischen den Lagen. */
  for (let yy = 1; yy < H - 1; yy++) {
    if (c.get(bore - 1, yy) !== c.get(bore - 1, yy - 1)) c.set(bore, yy, '+')
  }

  /* Der Akzent sitzt dort, wo die Bohrung auf eine dichte Schicht trifft —
     drei kurze Läufe, damit die Figur einen Blickpunkt hat. */
  let marks = 0
  for (let yy = 2; yy < H - 2 && marks < 3; yy++) {
    const here = c.get(bore - 1, yy)
    if (here === '=' || here === '-') {
      c.hline(bore - 3, bore + 3, yy, '#')
      marks++
      yy += 2
    }
  }

  /* Oben eine Messleiste, damit die Fläche als Platte liest und nicht als
     Muster: Teilstriche alle vier Spalten. */
  c.hline(1, W - 2, 0, '-')
  for (let x = 1; x < W - 1; x += 4) c.set(x, 0, '+')

  return c.toString()
}

/** Die Zeichnung der Leistungsseite — fest geseedet, damit jeder Build
 *  dieselbe Platte druckt. */
export const SERVICE_PLATE = sectionPlate(seedFrom('Strukturdiagnose · Strukturentscheidung · Strukturtransformation'))
