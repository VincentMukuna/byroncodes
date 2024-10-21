import { Metadata } from "next";

import { CtaBlock } from "@/components/cta-block";
import { TestimonialsBlock } from "@/components/testimonials-block";
import { Button } from "@/components/ui/button";

import { HeaderSection } from "./_components/header-section";
import { ProjectListBlock } from "./_components/projects-list-block";

export const metadata: Metadata = {
  title: "My Work",
  description: "View projects I've worked on so far.",
};
export default function MyWorkPage() {
  return (
    <main className="grid">
      <HeaderSection />
      <ProjectListBlock />
      <TestimonialsBlock />
      <CtaBlock>
        <CtaBlock.Header>
          <CtaBlock.Title>Explore My Work and Collaborate!</CtaBlock.Title>
          <CtaBlock.Description>
            Discover detailed case studies and reach out today!
          </CtaBlock.Description>
        </CtaBlock.Header>
        <CtaBlock.Actions>
          <Button variant="default">View</Button>
          <Button variant="outline">Contact</Button>
        </CtaBlock.Actions>
      </CtaBlock>
    </main>
  );
}
