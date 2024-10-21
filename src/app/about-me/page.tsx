import { CtaBlock } from "@/components/cta-block";
import { TestimonialsBlock } from "@/components/testimonials-block";
import { Button } from "@/components/ui/button";

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
      <CtaBlock>
        <CtaBlock.Header>
          <CtaBlock.Title>Let&apos;s Connect and Collaborate!</CtaBlock.Title>
          <CtaBlock.Description>
            Follow me on social media or reach out directly.
          </CtaBlock.Description>
        </CtaBlock.Header>
        <CtaBlock.Actions>
          <Button variant="default">Download</Button>
          <Button variant="outline">Contact</Button>
        </CtaBlock.Actions>
      </CtaBlock>
    </main>
  );
}
