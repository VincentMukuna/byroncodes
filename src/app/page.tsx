import { CtaBlock } from "../components/cta-block";
import { TestimonialsBlock } from "../components/testimonials-block";
import { HeroSection } from "./_components/hero-section";
import { ProjectShowcaseBlock } from "./_components/project-showcase-block";
import { SolutionsBlock } from "./_components/solutions-block";

export default function Home() {
  return (
    <main className="grid">
      <HeroSection />
      <ProjectShowcaseBlock />
      <SolutionsBlock />
      <TestimonialsBlock />
      <CtaBlock />
    </main>
  );
}
