import Image from "next/image";

import { ChevronRightIcon } from "@radix-ui/react-icons";

const solutionsConfig = {
  title:
    "Unlock Your Potential with Expert Software Development Services Tailored for You",
  description:
    "As a freelance software developer, I specialize in creating custom applications that meet your unique needs. My focus is on delivering high-quality code and exceptional user experiences. Let's collaborate to bring your ideas to life!",
  solutions: [
    {
      image: "/img/business-solutions.jpg",
      title:
        "Transformative Web Solutions for Businesses of All Sizes and Industries",
      description:
        "I build responsive websites that engage users and drive results.",
      cta: "Explore",
    },
    {
      image: "/img/chart-paper.jpg",
      title:
        "Innovative Mobile App Development to Elevate Your Business Experience",
      description:
        "I create intuitive mobile applications that enhance user engagement and satisfaction.",
      cta: "Discover",
    },
    {
      image: "/img/chart-tablet.jpg",
      title:
        "Data-Driven Solutions to Optimize Your Business Operations and Growth",
      description:
        "I leverage analytics and insights to inform strategic decisions and improve efficiency.",
      cta: "Learn",
    },
  ],
};

export function SolutionsBlock() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <h2 className="text-[32px] font-semibold leading-10 text-[#ff8328] md:text-4xl lg:text-[38px] lg:leading-[1.2]">
            {solutionsConfig.title}
          </h2>
          <p className="text-lg font-normal leading-relaxed text-white md:text-xl">
            {solutionsConfig.description}
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:mt-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {solutionsConfig.solutions.map((solution, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={solution.image}
                  alt={`Illustration for ${solution.title}`}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                  {solution.title}
                </h3>
                <p className="text-lg font-normal leading-normal text-white">
                  {solution.description}
                </p>
              </div>
              <a
                href="#"
                className="mt-auto inline-flex items-center text-base font-normal leading-normal text-white transition-colors hover:text-[#ff8328]"
                aria-label={`${solution.cta} ${solution.title}`}
              >
                {solution.cta}
                <ChevronRightIcon className="ml-2 h-5 w-5 text-primary" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
