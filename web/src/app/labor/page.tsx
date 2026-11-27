import { POSTS, activeCategories, activeTopics } from '@/content/labor'
import { LABOR_LEDE, TOPICS } from '@/data/labor'
import { PageHero, SectionHead, ClosingCta } from '@/components/ui'
import { LaborMosaic } from '@/components/LaborMosaic'

/* ═══ LABOR ════════════════════════════════════════════════════════════════
   Hier stand bis zum 27.11.2026 ein Mockup: dreizehn erfundene Beiträge,
   drei Formate, von denen zwei nicht existierten, und eine Archivnotiz mit
   erfundenen Zahlen. Ersetzt durch Marys achtzehn echte Beiträge, die als
   je eine Datei unter `src/content/labor/` liegen.

   Der Abschnitt „Formate" ist ersatzlos weg: außer Corporate Therapy gab es
   keines davon. Der Podcast steht jetzt als eigene Kachel im Mosaik und hat
   eine eigene Seite.

   Grundfolge hell, Akzent — der Filter braucht die helle Fläche, und eine
   zweite Fläche hätte das Mosaik geteilt, das als eines liest.             */

export default function LaborPage() {
  const categories = activeCategories()
  const topics = activeTopics(TOPICS)

  return (
    <main>
      <PageHero line1="Wo Theorie" line2="auf Praxis trifft." body={LABOR_LEDE} />

      <section className="slab">
        <div className="shell">
          <SectionHead label="Archiv" />
          <LaborMosaic posts={POSTS} categories={categories} topics={topics} />
        </div>
      </section>

      <ClosingCta
        eyebrow="Ihr Anlass"
        line1="Was wird bei Ihnen"
        line2="gerade neu verhandelt?"
        body="Ein erstes Gespräch ist zum Zuhören da. Was daraus folgt, entscheiden wir danach gemeinsam."
        cta="Gespräch anfragen"
      />
    </main>
  )
}
