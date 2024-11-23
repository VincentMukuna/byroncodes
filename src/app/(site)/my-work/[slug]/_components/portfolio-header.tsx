import { Media } from "@/components/Media";
import { Project } from "@/payload-types";

export function PortfolioHeader({ project }: { project: Project }) {
  const { meta } = project;
  const { image: metaImage, description, title } = meta || {};

  return (
    <header className="bg-black">
      <div className="">
        {!metaImage && (
          <div className="mb-8 text-center text-white">No image available</div>
        )}
        {metaImage && typeof metaImage !== "string" && (
          <div className="relative">
            <Media
              className="aspect-video max-h-[65dvh] w-full overflow-hidden rounded-lg object-cover"
              resource={metaImage}
            />
          </div>
        )}
        <div className="mx-auto max-w-3xl px-4 py-8 text-center">
          <h1 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 font-poppins text-base font-normal leading-relaxed text-white sm:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {project?.categories
              ?.filter(
                (category) => typeof category === "object" && category !== null
              )
              .map((category) => (
                <span
                  key={category.id}
                  className="bg-[#003146] px-2 py-1 font-roboto text-sm font-semibold leading-[21px] text-[#ff8328]"
                >
                  {category.title}
                </span>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
}
