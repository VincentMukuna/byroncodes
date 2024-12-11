import { revalidateTag } from "next/cache";

import type { GlobalAfterChangeHook } from "payload";

export const revalidateTestimonials: GlobalAfterChangeHook = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info("Revalidating testimonials");

  revalidateTag("global_testimonials");

  return doc;
};
