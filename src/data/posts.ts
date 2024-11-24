import { unstable_cache } from "next/cache";
import { cache } from "react";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

type PostsQuery = {
  title: string;
  author?: string;
  category?: string;
  page?: number;
  limit?: number;
};
export const queryPosts = cache(async (query: PostsQuery) => {
  const payload = await buildPayloadHMR();

  return await payload.find({
    collection: "posts",
    where: {
      or: [
        {
          title: {
            like: query.title || "",
          },
        },
        {
          "categories.title": {
            like: query.category || "",
          },
        },
        {
          "authors.name": {
            like: query.author || "",
          },
        },
      ],
    },
    depth: 1,
    limit: query.limit || 12,
    page: query.page || 1,
    sort: "-createdAt",
  });
});

export const getHighlightedPost = unstable_cache(
  async () => {
    const payload = await buildPayloadHMR();

    const res = await payload.find({
      collection: "posts",
      limit: 1,
    });

    if (!res.docs.length) return null;

    return res.docs[0];
  },
  ["highlighted-post"],
  { revalidate: 60 * 60, tags: ["highlighted-post"] }
);
