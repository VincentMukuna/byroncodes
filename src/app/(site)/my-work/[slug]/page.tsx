import { Metadata } from "next";
import { draftMode } from "next/headers";

import { LivePreviewListener } from "@/components/live-preview-listener";
import { PayloadRedirects } from "@/components/payload-redirects";
import RichText from "@/components/rich-text";
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
    <article className="pb-16 pt-16">
      <LivePreviewListener />
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
