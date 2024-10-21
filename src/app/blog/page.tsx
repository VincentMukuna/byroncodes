import { Metadata } from "next";

import { BlogCta } from "./_components/blog-cta";
import { BlogHighlight } from "./_components/blog-highlight";
import { BlogListSection } from "./_components/blog-list-section";
import { HeaderSection } from "./_components/header-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Incididunt cupidatat id nulla eu est dolor occaecat est sit tempor eu.",
};

export default function BlogPage() {
  return (
    <main className="grid">
      <HeaderSection />
      <div className="grid gap-12 bg-background-secondary">
        <BlogHighlight />
        <BlogListSection />
      </div>
      <BlogCta />
    </main>
  );
}
