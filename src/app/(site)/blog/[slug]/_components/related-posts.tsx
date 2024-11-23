import Link from "next/link";

import { PostCard } from "@/components/post-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Post } from "@/payload-types";

const relatedPostsConfig = {
  title: "Blog",
  heading: "Explore Our Latest Insights",
  description: "Discover tips and trends in software development.",
  posts: [
    {
      image: "/img/web_inspo3.jpg",
      category: "Development",
      readTime: "5 min read",
      title: "Understanding APIs for Beginners",
      description: "A comprehensive guide to getting started with APIs.",
      link: "/blog/understanding-apis",
    },
    {
      image: "/img/blog.jpg",
      category: "Tutorial",
      readTime: "5 min read",
      title: "Top 5 Coding Practices",
      description:
        "Essential coding practices to enhance your development skills.",
      link: "/blog/top-coding-practices",
    },
    {
      image: "/img/blog/bot-connected.jpg",
      category: "Best Practices",
      readTime: "5 min read",
      title: "The Future of Web Development",
      description: "Exploring upcoming trends in web development for 2024.",
      link: "/blog/future-web-development",
    },
  ],
};

export function RelatedPosts({
  relatedPosts: relatedPostsRaw,
}: {
  relatedPosts: Post["relatedPosts"];
}) {
  const relatedPosts =
    relatedPostsRaw?.filter((post) => typeof post === "object") || [];

  return (
    <section className="bg-[#201b1b] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-2 font-roboto text-base font-semibold leading-normal text-white">
            {relatedPostsConfig.title}
          </h2>
          <h3 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
            {relatedPostsConfig.heading}
          </h3>
          <p className="font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
            {relatedPostsConfig.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16">
          <Link
            href={"/blog"}
            className={cn(buttonVariants({ variant: "outline" }), "")}
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
