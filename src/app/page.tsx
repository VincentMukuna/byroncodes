import { Button } from "@/components/ui/button";

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
      <CtaBlock>
        <CtaBlock.Header>
          <CtaBlock.Title>Let&apos;s Connect and Collaborate!</CtaBlock.Title>
          <CtaBlock.Description>
            Follow me on social media or reach out directly.
          </CtaBlock.Description>
        </CtaBlock.Header>
        <CtaBlock.Actions>
          <Button variant="default">Contact Us</Button>
          <Button variant="outline">Follow</Button>
        </CtaBlock.Actions>
      </CtaBlock>
    </main>
  );
}
