import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

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
            I’m always eager to connect with like-minded professionals and
            explore new opportunities. Whether you have a project in mind or
            simply want to discuss ideas, I&apos;m here to collaborate and bring
            your vision to life. Let’s harness our skills to create innovative
            solutions together!
          </CtaBlock.Description>
        </CtaBlock.Header>
        <CtaBlock.Actions>
          <Link
            href={siteConfig.links.upwork}
            target={"_blank"}
            className={cn(buttonVariants(), "inline-flex gap-1")}
          >
            Hire Me!
          </Link>
        </CtaBlock.Actions>
      </CtaBlock>
    </main>
  );
}
