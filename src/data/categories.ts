import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const getCategories = unstable_cache(
  async () => {
    const payload = await buildPayloadHMR();

    const res = await payload.find({
      collection: "categories",
      depth: 1,
      sort: "title",
      limit: 1000,
    });

    return res.docs;
  },
  ["categories"],
  { revalidate: 60 * 60, tags: ["categories"] }
);
