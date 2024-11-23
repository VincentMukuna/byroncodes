import RichText from "@/components/rich-text";
import { Post } from "@/payload-types";

import Overview, { Heading } from "./overview";

export function BlogPostContent({ blog }: { blog: Post }) {
  const headings: Heading[] = [
    {
      title: "Section Title",
      level: 1,
      id: "section-title",
      children: [
        { title: "Subheading One", id: "heading-2", level: 2 },
        { title: "Subheading Two", id: "heading-3", level: 2 },
        { title: "Subheading Three", id: "heading-4", level: 2 },
        { title: "Final Thoughts", id: "heading-5", level: 2 },
      ],
    },
  ];

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
