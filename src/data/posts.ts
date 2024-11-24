import { cache } from "react";

import { buildPayloadHMR } from "@/utilities/buildPayloadHMR";

type PostsQuery = {
  title: string;
  author?: string;
  category?: string;
  page?: number;
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
    limit: 12,
    page: query.page || 1,
    sort: "-createdAt",
  });
});

export const getHighlightedPost = async () => {
  const payload = await buildPayloadHMR();

  const res = await payload.find({
    collection: "posts",
    limit: 1,
  });

  if (!res.docs.length) return null;

  return res.docs[0];
};
