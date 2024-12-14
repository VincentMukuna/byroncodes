import { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { Fragment, Suspense } from "react";

import { TestimonialsBlock } from "@/components/Testimonials/testimonials.server";
import { TestimonialsSkeleton } from "@/components/Testimonials/testimonials.skeleton";
import { CtaBlock } from "@/components/cta-block";
import { LivePreviewListener } from "@/components/live-preview-listener";
import { PayloadRedirects } from "@/components/payload-redirects";
import RichText from "@/components/rich-text";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";
import { generateMeta } from "@/utils/generateMeta";

import { PostHeader } from "../../../../components/post-header";

export const dynamic = "force-static";

interface SkillPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const payload = await buildPayloadHMR();

  const { docs: skills } = await payload.find({
    collection: "skills",
    draft: false,
    limit: 1000,
  });

  return skills.map((skill) => ({
    params: {
      slug: skill.slug,
    },
  }));
}

export default async function SkillPage(props: SkillPageProps) {
  const { slug } = await props.params;

  const url = `/skills/${slug}`;

  const skill = await querySkillBySlug({ slug });

  if (!skill) {
    return <PayloadRedirects url={url} />;
  }

  return (
    <Fragment>
      <LivePreviewListener />
      <article className="pb-16">
        <PayloadRedirects disableNotFound url={url} />
        <PostHeader doc={skill} />
        <div className="px-4 pt-8 sm:px-6 md:px-8 lg:px-16">
          <div className="container grid-rows-[1fr] lg:grid lg:grid-cols-[1fr_48rem_1fr]">
            <RichText
              className="col-span-3 col-start-1 grid-rows-[1fr] lg:grid lg:grid-cols-subgrid"
              content={skill.content}
              enableGutter={false}
            />
          </div>
        </div>
      </article>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <TestimonialsBlock />
      </Suspense>
      <CtaBlock className="grid">
        <CtaBlock.Header>
          <CtaBlock.Title>Explore My Project Portfolio</CtaBlock.Title>
          <CtaBlock.Description>
            Discover my work and get in touch for similar projects tailored to
            your needs.
          </CtaBlock.Description>
        </CtaBlock.Header>
        <div className="flex gap-4">
          <CtaBlock.Actions>
            <Link
              href={siteConfig.links.upwork}
              target={"_blank"}
              className={cn(buttonVariants(), "inline-flex gap-1")}
            >
              View
            </Link>
          </CtaBlock.Actions>
          <CtaBlock.Actions>
            <Link
              href={siteConfig.links.upwork}
              target={"_blank"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "inline-flex gap-1"
              )}
            >
              Contact
            </Link>
          </CtaBlock.Actions>
        </div>
      </CtaBlock>
    </Fragment>
  );
}

export async function generateMetadata({
  params,
}: SkillPageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = await querySkillBySlug({ slug });

  return generateMeta({ doc: skill });
}

const querySkillBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await buildPayloadHMR();

  const { docs } = await payload.find({
    collection: "skills",
    draft,
    limit: 1,
    depth: 10,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return docs[0] || null;
};
