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
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <aside className="mb-8 lg:mb-0 lg:w-80">
            <Overview headings={headings} />
          </aside>
          <main className="dark lg:flex-1">
            <RichText content={blog.content} />
          </main>
        </div>
      </div>
    </div>
  );
}
