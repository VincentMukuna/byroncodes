import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),

    DATABASE_URI: z.string(),
    PAYLOAD_SECRET: z.string(),

    PAYLOAD_PUBLIC_SERVER_URL: z.string(),

    EMAIL_ADAPTER: z.enum(["resend", "smtp"]).optional(),
    EMAIL_FROM: z.string(),

    RESEND_API_KEY: z.string().optional(),

    SMTP_HOST: z.string().optional(),
    SMTP_PORT: z.string().optional(),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),

    S3_ACCESS_KEY_ID: z.string(),
    S3_SECRET_ACCESS_KEY: z.string(),
    S3_BUCKET: z.string(),
    S3_REGION: z.string(),
    S3_ENDPOINT: z.string().optional(),

    CLOUDFLARE_TURNSTILE_SECRET_KEY: z.string().min(1),

    OWNER_EMAIL: z.string().email(),
  },
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  //eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
