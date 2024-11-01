import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "@radix-ui/react-icons";

const blogHighlightConfig = {
  image: "/img/js.jpg",
  imageAlt: "JavaScript code on a computer screen",
  category: "Tech",
  readTime: "5 min read",
  title: "Understanding JavaScript: The Basics",
  description:
    "A beginner's guide to mastering JavaScript for web development.",
  link: "/blog/understanding-javascript-basics",
};

export function BlogHighlight() {
  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="relative aspect-[4/3] w-full lg:w-1/2">
            <Image
              src={blogHighlightConfig.image}
              alt={blogHighlightConfig.imageAlt}
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="flex flex-col justify-between p-6 lg:w-1/2 lg:p-12">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-[#003146] px-2 py-1 font-roboto text-sm font-semibold leading-[21px] text-primary">
                  {blogHighlightConfig.category}
                </span>
                <span className="font-roboto text-sm font-semibold leading-[21px]">
                  {blogHighlightConfig.readTime}
                </span>
              </div>
              <h2 className="font-poppins text-2xl font-semibold leading-tight sm:text-3xl md:text-[32px] md:leading-[1.3]">
                {blogHighlightConfig.title}
              </h2>
              <p className="font-poppins text-base font-normal leading-normal">
                {blogHighlightConfig.description}
              </p>
            </div>
            <Link
              href={blogHighlightConfig.link}
              className="mt-6 inline-flex items-center font-poppins text-base font-normal leading-normal transition-colors hover:text-primary"
            >
              Read more
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
