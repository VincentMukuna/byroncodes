import { Metadata } from "next";
import { draftMode } from "next/headers";
import { cache } from "react";

import BuyMeCoffeeButton from "@/components/buy-me-a-coffee";
import { PayloadRedirects } from "@/components/payload-redirects";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";
import { generateMeta } from "@/utils/generateMeta";

import { BlogPostContent } from "./_components/blog-post-content";
import { BlogPostCta } from "./_components/blog-post-cta";
import { BlogPostHeader } from "./_components/blog-post-header";
import { RelatedPosts } from "./_components/related-posts";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const payload = await buildPayloadHMR();
  const posts = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
  });
  return posts.docs?.map(({ slug }) => ({ slug }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const url = `/blog/${slug}`;
  const blog = await queryPostBySlug({ slug });
  const relatedPosts = blog?.relatedPosts || [];
  if (!blog) return <PayloadRedirects url={url} />;
  return (
    <main>
      <PayloadRedirects url={url} disableNotFound={true} />
      <BlogPostHeader blog={blog} />
      <BlogPostContent blog={blog} />
      <div className="flex flex-row-reverse">
        <BuyMeCoffeeButton />
      </div>
      <BlogPostCta />
      <RelatedPosts relatedPosts={relatedPosts} />
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await buildPayloadHMR();

  const result = await payload.find({
    collection: "posts",
    draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  return result.docs?.[0] || null;
});
