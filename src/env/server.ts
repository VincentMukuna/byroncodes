import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError } from "zod";

export const env = createEnv({
  server: {},
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
