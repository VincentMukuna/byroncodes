import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { resendAdapter } from "@payloadcms/email-resend";
import { EmailAdapter } from "payload";

import { env } from "@/env/server";

export const getEmailAdapter: () =>
  | EmailAdapter
  | Promise<EmailAdapter>
  | undefined = () => {
  switch (env.EMAIL_ADAPTER) {
    case "resend":
      return resendAdapter({
        defaultFromAddress: env.EMAIL_FROM,
        defaultFromName: "Fixing Health",
        apiKey: env.RESEND_API_KEY || "",
      });
    case "smtp":
      return nodemailerAdapter({
        defaultFromAddress: env.EMAIL_FROM,
        defaultFromName: "Fixing Health",
        transportOptions: {
          host: env.SMTP_HOST,
          port: env.SMTP_PORT || 587,
          auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS,
          },
        },
      });
    default:
      return undefined;
  }
};
