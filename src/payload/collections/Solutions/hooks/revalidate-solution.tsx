import { revalidatePath, revalidateTag } from "next/cache";

import { CollectionAfterChangeHook } from "payload";

import { Solution } from "@/payload-types";

export const revalidateSolution: CollectionAfterChangeHook<Solution> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === "published") {
    const path = `/solutions/${doc.slug}`;

    payload.logger.info(`Revalidating solution at path: ${path}`);

    revalidateTag("solutions");
    revalidatePath(path);
  }

  // If the solution was previously published, we need to revalidate the previous path
  if (previousDoc?._status === "published") {
    const previousPath = `/solutions/${previousDoc.slug}`;

    payload.logger.info(`Revalidating solution at path: ${previousPath}`);

    revalidateTag("solutions");
    revalidatePath(previousPath);
  }

  return doc;
};
