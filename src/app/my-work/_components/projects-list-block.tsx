import Image from "next/image";

import { Button } from "@/components/ui/button";

const projectListConfig = {
  title: "Portfolio",
  heading: "Showcase of My Work",
  description: "Explore my diverse range of projects and skills.",
  projects: [
    {
      image: "/img/phone.jpg",
      title: "E-commerce Website",
      tags: ["Web Development", "E-commerce", "Responsive Design"],
      description:
        "This project involved creating a fully functional e-commerce platform. It features user-friendly navigation and secure payment options.",
    },
    {
      image: "/img/blog.jpg",
      title: "Personal Blog",
      tags: ["Blog Development", "Content Management", "User Engagement"],
      description:
        "I designed a personal blog to share insights and experiences. It includes a clean layout and easy-to-use interface.",
    },
  ],
};

export function ProjectListBlock() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <h2 className="font-roboto mb-2 text-base font-semibold leading-normal text-white">
            {projectListConfig.title}
          </h2>
          <h3 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
            {projectListConfig.heading}
          </h3>
          <p className="font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
            {projectListConfig.description}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {projectListConfig.projects.map((project, index) => (
            <div key={index} className="space-y-6">
              <Image
                src={project.image}
                alt={project.title}
                width={1312}
                height={738}
                className="rounded-[30px] object-cover"
              />
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="space-y-4">
                  <h4 className="font-poppins text-2xl font-semibold leading-tight text-white">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-roboto bg-[#003146] px-2 py-1 text-sm font-semibold leading-[21px] text-[#ff8328]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-poppins text-base font-normal leading-normal text-white lg:max-w-xl">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16 lg:mt-20">
          <Button variant="default" size="lg">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
