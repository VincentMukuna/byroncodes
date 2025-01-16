import { revalidatePath, revalidateTag } from "next/cache";

import { CollectionAfterChangeHook } from "payload";

import { Post } from "@/payload-types";

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === "published") {
    const path = `/blog/${doc.slug}`;

    payload.logger.info(`Revalidating blog post at path: ${path}`);
    revalidatePath("/blog");
    revalidateTag("featured-article");
    revalidatePath(path);
  }

  // If the project was previously published, we need to revalidate the previous path
  if (previousDoc?._status === "published") {
    const previousPath = `/blog/${previousDoc.slug}`;

    payload.logger.info(`Revalidating blog post at path: ${previousPath}`);
    revalidatePath("/blog");
    revalidateTag("featured-article");
    revalidatePath(previousPath);
  }
  return doc;
};
