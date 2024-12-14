import { getSkills } from "@/data/skills";

import { SkillsSectionClient } from "./skills-section.client";

export async function SkillsSection() {
  const { docs: skills } = await getSkills({ limit: 3 });

  return <SkillsSectionClient skills={skills} />;
}
