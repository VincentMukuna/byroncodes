import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import { queryProjects } from "@/data/projects";

import { ProjectItem } from "./project-list-item";

const projectListConfig = {
  title: "Portfolio",
  heading: "Showcase of My Work",
  description: "Explore my diverse range of projects and skills.",
};

export async function ProjectListBlock() {
  const projects = await queryProjects();
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeInWhenVisible className="mb-12 text-center md:mb-16 lg:mb-20">
          <StaggerChildren>
            <h2 className="mb-2 font-roboto text-base font-semibold leading-normal text-white">
              {projectListConfig.title}
            </h2>
            <h3 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
              {projectListConfig.heading}
            </h3>
            <p className="font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
              {projectListConfig.description}
            </p>
          </StaggerChildren>
        </FadeInWhenVisible>

        <StaggerChildren className="space-y-12 md:space-y-16 lg:space-y-20">
          {projects.map((project) => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </StaggerChildren>

        <div className="mt-12 text-center md:mt-16 lg:mt-20">
          <Button variant="default" size="lg">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
