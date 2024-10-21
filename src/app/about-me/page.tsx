import { CtaBlock } from "@/components/cta-block";
import { TestimonialsBlock } from "@/components/testimonials-block";

import { HeaderSection } from "./_components/header-section";
import { HeroSection } from "./_components/hero-section";
import { SkillsSection } from "./_components/skills-section";

export default function AboutMePage() {
  return (
    <main className="grid">
      <HeaderSection />
      <HeroSection />
      <SkillsSection />
      <TestimonialsBlock />
      <CtaBlock />
    </main>
  );
}
