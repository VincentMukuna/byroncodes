import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const queryProjects = async () => {
  const payload = await buildPayloadHMR();

  const res = await payload.find({
    collection: "projects",
    limit: 1000,
  });

  return res.docs;
};

export const getFeaturedProject = unstable_cache(
  async () => {
    const payload = await buildPayloadHMR();

    const { docs } = await payload.find({
      collection: "projects",
      limit: 1,
      depth: 4,
      where: {
        isFeatured: {
          equals: true,
        },
      },
    });

    if (docs.length === 0) {
      // Fallback to the first project if no featured project is found
      const { docs } = await payload.find({
        collection: "projects",
        limit: 1,
        depth: 4,
      });

      return docs[0];
    }

    return docs[0];
  },
  ["projects", "featuredProject"],
  {
    tags: ["projects", "featuredProject"],
  }
);
