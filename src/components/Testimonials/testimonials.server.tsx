import { getTestimonials } from "@/data/testimonials";

import { TestimonialsClient } from "./testimonials.client";

export async function TestimonialsBlock() {
  const testimonials = await getTestimonials();
  if (!testimonials.length) return null;
  return <TestimonialsClient testimonials={testimonials} />;
}
