import { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { BlogPostContent } from "./_components/blog-post-content";
import { BlogPostCta } from "./_components/blog-post-cta";
import { BlogPostHeader } from "./_components/blog-post-header";
import { RelatedPosts } from "./_components/related-posts";

export default function BlogPostPage() {
  return (
    <main>
      <BlogPostHeader />
      <BlogPostContent />
      <BlogPostCta />
      <RelatedPosts />
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
