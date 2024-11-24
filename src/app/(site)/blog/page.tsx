import { Metadata } from "next";
import { Suspense } from "react";

import { siteConfig } from "@/config/site";
import { getHighlightedPost } from "@/data/posts";

import { BlogCta } from "./_components/blog-cta";
import { BlogHighlight } from "./_components/blog-highlight";
import { BlogListSection } from "./_components/blog-list-section";
import { HeaderSection } from "./_components/header-section";

export default async function BlogPage() {
  const highlightedPost = await getHighlightedPost();
  return (
    <main className="grid">
      <HeaderSection />
      <div className="grid gap-12 bg-background-secondary">
        {highlightedPost && <BlogHighlight highlight={highlightedPost} />}
        <Suspense fallback={null}>
          <BlogListSection />
        </Suspense>
      </div>
      <BlogCta />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest blog posts on fullstack development, coding tutorials, and insights on software development.",
  openGraph: {
    title: "Blog",
    siteName: siteConfig.name,
    url: `${siteConfig.url}/blog`,
    description:
      "Read my latest blog posts on fullstack development, coding tutorials, and insights on software development.",
    images: [
      {
        url: new URL("/img/blog.jpg", siteConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: "Blog",
      },
    ],
  },
  twitter: {
    site: "@mandela_byron",
    title: "Blog",
    card: "summary_large_image",
    description:
      "Read my latest blog posts on fullstack development, coding tutorials, and insights on software development.",
    images: [
      {
        url: new URL("/img/blog.jpg", siteConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: "Blog",
      },
    ],
  },
};
