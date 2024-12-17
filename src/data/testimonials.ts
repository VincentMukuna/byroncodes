import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const getTestimonials = unstable_cache(async () => {
  const payload = await buildPayloadHMR();

  const { docs: testimonials } = await payload.find({
    collection: "testimonials",
    depth: 2,
  });

  return testimonials;
}, ["testimonials"]);
