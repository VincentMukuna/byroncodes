import Link from "next/link";
import { Suspense } from "react";

import { TestimonialsBlock } from "@/components/Testimonials/testimonials.server";
import { TestimonialsSkeleton } from "@/components/Testimonials/testimonials.skeleton";
import { CtaBlock } from "@/components/cta-block";
import { SolutionsBlockSkeleton } from "@/components/skeletons/solutions-block-skeleton";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { HeroSection } from "./_components/hero-section";
import { ProjectShowcaseBlock } from "./_components/project-showcase/project-showcase-block.server";
import { SolutionsBlock } from "./_components/solutions-block/solutions-block.server";

export default function Home() {
  return (
    <main className="grid">
      <div className="-mt-[74px]">
        <HeroSection />
      </div>
      <ProjectShowcaseBlock />
      <Suspense fallback={<SolutionsBlockSkeleton />}>
        <SolutionsBlock />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <TestimonialsBlock />
      </Suspense>
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
