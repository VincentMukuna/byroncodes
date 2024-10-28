import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "@radix-ui/react-icons";

interface BlogPost {
  image: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
}

export const BlogPostCard: React.FC<BlogPost> = ({
  image,
  category,
  readTime,
  title,
  description,
  link,
}) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative z-20 h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 border-[.5px] border-t-0 border-black/60 p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="rounded bg-[#003146] px-2 py-1 font-roboto text-sm font-semibold leading-[21px] text-[#ff8328]">
              {category}
            </span>
            <span className="font-roboto text-sm font-semibold leading-[21px] text-gray-300">
              {readTime}
            </span>
          </div>
          <h2 className="font-poppins text-2xl font-semibold leading-tight text-white transition-colors duration-300 ease-in-out group-hover:text-[#ff8328]">
            {title}
          </h2>
          <p className="font-poppins text-base font-normal leading-normal text-gray-300">
            {description}
          </p>
        </div>
        <Link
          href={link}
          className="inline-flex items-center font-poppins text-base font-normal leading-normal text-white transition-colors duration-300 ease-in-out hover:text-[#ff8328]"
        >
          Read more
          <ChevronRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
