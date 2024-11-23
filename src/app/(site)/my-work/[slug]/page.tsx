import { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";

import { CtaBlock } from "@/components/cta-block";
import { LivePreviewListener } from "@/components/live-preview-listener";
import { PayloadRedirects } from "@/components/payload-redirects";
import RichText from "@/components/rich-text";
import { TestimonialsBlock } from "@/components/testimonials-block";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildPayloadHMR } from "@/utilities/buildPayloadHMR";
import { generateMeta } from "@/utilities/generateMeta";

import { PortfolioHeader } from "./_components/portfolio-header";

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
  return projects.docs.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
}
export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const url = `/my-work/${slug}`;
  const project = await queryProjectBySlug({ slug });
  console.log({ project });
  if (!project) {
    return <PayloadRedirects url={url} />;
  }
  return (
    <Fragment>
      <LivePreviewListener />
      <article className="pb-16">
        <PayloadRedirects disableNotFound url={url} />
        <PortfolioHeader project={project} />
        <div className="pt-8">
          <div className="container grid-rows-[1fr] lg:grid lg:grid-cols-[1fr_48rem_1fr]">
            <RichText
              className="col-span-3 col-start-1 grid-rows-[1fr] lg:grid lg:grid-cols-subgrid"
              content={project.content}
              enableGutter={true}
            />
          </div>
          {/* <RelatedPosts
          className="mt-12"
          docs={post.relatedPosts.filter((post) => typeof post === 'object')}
        /> */}
        </div>
      </article>
      <TestimonialsBlock />
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
