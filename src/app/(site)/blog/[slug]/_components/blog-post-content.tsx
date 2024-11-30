import RichText from "@/components/rich-text";
import { HierarchyBuilder } from "@/lib/hierarchy/hierarchy";
import { Post } from "@/payload-types";

import Overview from "./overview";

export function BlogPostContent({ blog }: { blog: Post }) {
  const hierarchyBuilder = new HierarchyBuilder();
  const headings = hierarchyBuilder.build(blog.content.root.children as any);
  return (
    <div className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
          <aside className="mb-8 overflow-hidden lg:mb-0">
            <Overview headings={headings} />
          </aside>
          <main className="dark">
            <RichText content={blog.content} enableGutter={true} />
          </main>
        </div>
      </div>
    </div>
  );
}
