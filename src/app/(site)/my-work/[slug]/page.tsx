import { Metadata } from "next";
import { draftMode } from "next/headers";

import { PayloadRedirects } from "@/components/payload-redirects";
import { buildPayloadHMR } from "@/utilities/buildPayloadHMR";
import { generateMeta } from "@/utilities/generateMeta";

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
  return <div>Project: {slug}</div>;
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
