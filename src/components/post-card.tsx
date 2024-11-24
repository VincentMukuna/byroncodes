import Link from "next/link";

import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Post } from "@/payload-types";

import { Media } from "./Media";

interface BlogPost {
  post: Post;
}

export const PostCard: React.FC<BlogPost> = ({ post }) => {
  if (!post) return null;
  const { meta, categories: rawCategories, slug, title } = post;
  const { description, image: metaImage } = meta || {};

  const categories = rawCategories
    ? rawCategories
        .filter((c) => typeof c === "object")
        .map((c) => {
          return c.title;
        })
    : [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative h-[20rem] transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== "string" && (
          <Media resource={metaImage} fill className="object-cover" />
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 border-[.5px] border-t-0 border-black/60 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {categories.map((category, index) => (
              <span
                key={index}
                className="rounded bg-[#003146] px-2 py-1 font-roboto text-sm font-semibold leading-[21px] text-[#ff8328]"
              >
                {category}
              </span>
            ))}
            <span className="font-roboto text-sm font-semibold leading-[21px] text-gray-300">
              2 Min Read
            </span>
          </div>
          <h2 className="font-poppins text-2xl font-semibold leading-tight text-white transition-colors duration-300 ease-in-out group-hover:text-[#ff8328]">
            {title}
          </h2>
          <p className="line-clamp-3 font-poppins text-base font-normal leading-normal text-gray-300">
            {description}
          </p>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center font-poppins text-base font-normal leading-normal text-white transition-colors duration-300 ease-in-out hover:text-[#ff8328]"
        >
          Read more
          <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
