import { revalidatePath } from "next/cache";

import { CollectionAfterChangeHook } from "payload";

import { Project } from "@/payload-types";

export const revalidateProject: CollectionAfterChangeHook<Project> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === "published") {
    const path = `/my-work/${doc.slug}`;

    payload.logger.info(`Revalidating project at path: ${path}`);

    revalidatePath(path);
  }

  // If the project was previously published, we need to revalidate the previous path
  if (previousDoc?._status === "published") {
    const previousPath = `/my-work/${previousDoc.slug}`;

    payload.logger.info(`Revalidating project at path: ${previousPath}`);

    revalidatePath(previousPath);
  }

  return doc;
};
