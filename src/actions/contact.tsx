"use server";

import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";
import { z } from "zod";

import { env } from "@/env/server";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(2, { message: "Message must be at least 10 characters." }),
  token: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormData) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // Validate the Turnstile token
  const validationResponse = await validateTurnstileToken({
    token: result.data.token,
    secretKey: env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    idempotencyKey: v4(),
    sandbox: env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return {
      success: false,
      errors: {
        token: [
          "Could not verify you are human. Please refresh the page and try again.",
        ],
      },
    };
  }
  console.log("Form submitted:", result.data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  };
}
