"use server";

import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const getSkills = unstable_cache(
  async ({ limit }: { limit: number }) => {
    const payload = await buildPayloadHMR();

    return await payload.find({
      collection: "skills",
      depth: 10,
      limit,
      sort: ["createdAt"],
    });
  },
  ["skills"],
  { tags: ["skills"] }
);
