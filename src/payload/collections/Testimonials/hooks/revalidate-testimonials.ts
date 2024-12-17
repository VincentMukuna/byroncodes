import { revalidatePath, revalidateTag } from "next/cache";

import { CollectionAfterChangeHook } from "payload";

import { Testimonial } from "@/payload-types";

export const revalidateTestimonial: CollectionAfterChangeHook<
  Testimonial
> = async ({ doc, req: { payload } }) => {
  payload.logger.info("Revalidating testimonials");

  revalidateTag("testimonials");
  revalidatePath("/", "layout");

  return doc;
};
