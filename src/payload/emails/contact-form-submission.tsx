import { Button, Section, Text } from "@react-email/components";

import { buttonVariants } from "@/components/ui/button";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

import EmailLayout from "./layouts/email-layout";

interface ContactFormSubmissionEmailProps {
  name: string;
  email: string;
  message: string;
  id: string | number;
}
export const ContactFormSubmissionEmail = ({
  name,
  email,
  message,
  id,
}: ContactFormSubmissionEmailProps) => {
  const baseUrl = env.NEXT_PUBLIC_SERVER_URL;
  return (
    <EmailLayout
      heading="New Contact Form Submission"
      preview={`Message from ${name}`}
    >
      <Section>
        <Text>You have received a new contact form submission.</Text>
        <Text>
          <strong>Name:</strong> {name}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>
        <Text>
          <strong>Message:</strong> {message}
        </Text>
      </Section>
      <Section>
        <Text>Click the button below to view the submission.</Text>
        <Button
          href={`${baseUrl}/admin/collections/contact-form-submissions/${id}`}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "mt-8 w-full"
          )}
        >
          View Submission
        </Button>
      </Section>
    </EmailLayout>
  );
};
