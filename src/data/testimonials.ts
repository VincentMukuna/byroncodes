import { getCachedGlobal } from "@/lib/getGlobals";

export async function getTestimonials() {
  const testimonials = await getCachedGlobal("testimonials")();

  return testimonials;
}
