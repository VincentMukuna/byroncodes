import { revalidatePath, revalidateTag } from "next/cache";

import { CollectionAfterChangeHook } from "payload";

import { Skill } from "@/payload-types";

export const revalidateSkill: CollectionAfterChangeHook<Skill> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === "published") {
    const path = `/skills/${doc.slug}`;

    payload.logger.info(`Revalidating skill at path: ${path}`);

    revalidateTag("skills");
    revalidatePath(path);
  }

  // If the skill was previously published, we need to revalidate the previous path
  if (previousDoc?._status === "published") {
    const previousPath = `/skills/${previousDoc.slug}`;

    payload.logger.info(`Revalidating skill at path: ${previousPath}`);

    revalidateTag("skills");
    revalidatePath("/about-me");
    revalidatePath(previousPath);
  }

  return doc;
};
