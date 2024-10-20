import { CtaBlock } from "./_components/cta-block";
import { HeroSection } from "./_components/hero-section";
import { ProjectShowcaseBlock } from "./_components/project-showcase-block";
import { SolutionsBlock } from "./_components/solutions-block";

export default function Home() {
  return (
    <main className="grid">
      <HeroSection />
      <ProjectShowcaseBlock />
      <SolutionsBlock />
      <CtaBlock />
    </main>
  );
}
