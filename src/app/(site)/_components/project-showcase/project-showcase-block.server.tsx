import { getFeaturedProject } from "@/data/projects";

import { ProjectShowcaseBlockClient } from "./project-showcas-block.client";

export async function ProjectShowcaseBlock() {
  const project = await getFeaturedProject();

  return <ProjectShowcaseBlockClient project={project} />;
}
