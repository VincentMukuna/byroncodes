import { getCachedGlobal } from "@/lib/getGlobals";

export async function getTestimonials() {
  const testimonials = await getCachedGlobal("testimonials", 4)();

  return testimonials.items;
}
