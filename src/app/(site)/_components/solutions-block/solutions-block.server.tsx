import { getSolutions } from "@/data/solutions";

import { SolutionsBlockClient } from "./solutions-block.client";

export async function SolutionsBlock() {
  const { docs: solutions } = await getSolutions({ limit: 3 });

  return <SolutionsBlockClient solutions={solutions} />;
}
