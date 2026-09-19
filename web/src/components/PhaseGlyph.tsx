import { PHASE_ART } from '@/data/phaseArt'
import { AsciiArt } from '@/components/AsciiArt'

/** The blueprint diagram on top of a phase cell. */
export function PhaseGlyph({ index }: { index: number }) {
  return <AsciiArt art={PHASE_ART[index]} className="phase-art" />
}
