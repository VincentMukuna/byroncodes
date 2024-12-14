import { Media } from "@/components/Media";
import { Project, Solution } from "@/payload-types";

export function PostHeader({ doc }: { doc: Project | Solution }) {
  const { meta } = doc;
  const { image: metaImage, description, title } = meta || {};

  return (
    <header className="relative bg-black">
      <div className="relative h-[85dvh] w-full overflow-hidden">
        {metaImage && typeof metaImage !== "string" ? (
          <Media
            className="absolute inset-0 h-full w-full"
            imgClassName="object-cover w-full h-full"
            priority
            resource={metaImage}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <span className="text-white">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/0" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
          <div className="z-10 mx-auto max-w-5xl px-4 text-center">
            <h1 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mb-8 font-poppins text-base font-normal leading-relaxed text-white sm:text-xl">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {doc?.categories
                ?.filter(
                  (category) =>
                    typeof category === "object" && category !== null
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
      </div>
    </header>
  );
}
