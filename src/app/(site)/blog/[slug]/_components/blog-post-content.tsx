import RichText from "@/components/rich-text";
import { HierarchyBuilder } from "@/lib/hierarchy/hierarchy";
import { Post } from "@/payload-types";

import Overview from "./overview";

export function BlogPostContent({ blog }: { blog: Post }) {
  const hierarchyBuilder = new HierarchyBuilder();
  const headings = hierarchyBuilder.build(blog.content.root.children as any);

  return (
    <div className="bg-black px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-[minmax(250px,1fr)_3fr] lg:gap-8">
          <aside className="mb-8 lg:hidden">
            <Overview headings={headings} />
          </aside>
          <aside className="hidden lg:block">
            <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto pr-4">
              <Overview headings={headings} />
            </div>
          </aside>
          <main className="dark overflow-x-hidden">
            <div className="prose prose-invert max-w-none">
              <RichText content={blog.content} enableGutter={true} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
