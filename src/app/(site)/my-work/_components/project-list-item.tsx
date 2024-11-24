"use client";

import Link from "next/link";

import { Media } from "@/components/Media";
import useClickableCard from "@/hooks/useClickableCard";
import { Project } from "@/payload-types";

export const ProjectItem = ({ project }: { project: Project }) => {
  const { title, slug, meta, categories: rawCategories = [] } = project;
  const { description, image: metaImage } = meta || {};

  const categories = rawCategories
    ? rawCategories
        .filter((c) => typeof c === "object")
        .map((category) => category.title)
    : [];

  const { card, link } = useClickableCard({});
  return (
    <div className="group cursor-pointer space-y-6" ref={card.ref as any}>
      <div className="relative aspect-video rounded-[30px] transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-[1.05]">
        {typeof metaImage === "object" && (
          <Media
            resource={metaImage!}
            fill
            className="rounded-[30px] object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="space-y-4">
          <Link
            ref={link.ref}
            href={`/my-work/${slug}`}
            className="font-poppins text-2xl font-semibold leading-tight text-white"
          >
            {title}
          </Link>
          <div className="flex flex-wrap gap-2">
            {categories.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-[#003146] px-2 py-1 font-roboto text-sm font-semibold leading-[21px] text-[#ff8328]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="font-poppins text-base font-normal leading-normal text-white lg:max-w-xl">
          {description}
        </p>
      </div>
    </div>
  );
};
