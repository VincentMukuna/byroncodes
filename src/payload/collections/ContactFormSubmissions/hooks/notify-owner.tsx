import { render } from "@react-email/components";
import { CollectionAfterChangeHook } from "payload";

import { env } from "@/env/server";
import { ContactFormSubmissionEmail } from "@/payload/emails/contact-form-submission";

export const notifyOwner: CollectionAfterChangeHook<any> = async ({
  doc,
  operation,
  req: { payload },
}) => {
  if (operation === "create") {
    // Send an email to the owner
    await payload.email.sendEmail({
      to: env.OWNER_EMAIL,
      subject: "New contact form submission",
      html: await render(<ContactFormSubmissionEmail {...doc} />),
    });
  }

  return doc;
};
