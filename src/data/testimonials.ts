import { unstable_cache } from "next/cache";

import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export const getTestimonials = unstable_cache(async () => {
  const payload = await buildPayloadHMR();

  payload.logger.info("Fetching testimonials");

  const { docs: testimonials } = await payload.find({
    collection: "testimonials",
    depth: 2,
    limit: 10,
  });

  payload.logger.info(`Fetched ${testimonials.length} testimonials`);

  return testimonials;
}, ["testimonials"]);
