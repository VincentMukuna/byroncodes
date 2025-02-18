import { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { Fragment, Suspense } from "react";

import { TestimonialsBlock } from "@/components/Testimonials/testimonials.server";
import { TestimonialsSkeleton } from "@/components/Testimonials/testimonials.skeleton";
import { ContentHeader } from "@/components/content-header";
import { CtaBlock } from "@/components/cta-block";
import { LivePreviewListener } from "@/components/live-preview-listener";
import { PayloadRedirects } from "@/components/payload-redirects";
import RichText from "@/components/rich-text";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";
import { generateMeta } from "@/utils/generateMeta";

export const dynamic = "force-static";
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const payload = await buildPayloadHMR();
  const projects = await payload.find({
    collection: "projects",
    draft: false,
    limit: 1000,
    overrideAccess: false,
  });
  return projects.docs?.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const url = `/my-work/${slug}`;
  const project = await queryProjectBySlug({ slug });
  if (!project) {
    return <PayloadRedirects url={url} />;
  }
  return (
    <Fragment>
      <LivePreviewListener />
      <article className="pb-16">
        <PayloadRedirects disableNotFound url={url} />
        <ContentHeader
          doc={project}
          breadcrumbs={[
            {
              label: "My Work",
              href: "/my-work",
              active: false,
            },
            {
              label: project.title,
              href: url,
              active: true,
            },
          ]}
        />
        <div className="px-4 pt-8 sm:px-6 md:px-8 lg:px-16">
          <div className="container grid-rows-[1fr] lg:grid lg:grid-cols-[1fr_48rem_1fr]">
            <RichText
              className="col-span-3 col-start-1 mx-auto grid-rows-[1fr] lg:grid lg:grid-cols-subgrid"
              content={project.content}
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
              href={"/my-work"}
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
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await queryProjectBySlug({ slug });

  return generateMeta({ doc: project });
}

const queryProjectBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await buildPayloadHMR();

  const result = await payload.find({
    collection: "projects",
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result?.docs?.[0] || null;
};
