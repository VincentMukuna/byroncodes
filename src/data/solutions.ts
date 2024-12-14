"use server";

import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const getSolutions = unstable_cache(
  async ({ limit }: { limit: number }) => {
    const payload = await buildPayloadHMR();

    return await payload.find({
      collection: "solutions",
      depth: 10,
      limit,
    });
  },
  ["solutions"],
  { tags: ["solutions"] }
);
