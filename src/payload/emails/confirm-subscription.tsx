import { Button, Section, Text } from "@react-email/components";

import { buttonVariants } from "@/components/ui/button";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";

import EmailLayout from "./layouts/email-layout";

interface ConfirmSubscriptionEmailProps {
  subscriptionToken: string;
}

export const ConfirmSubscriptionEmail = ({
  subscriptionToken,
}: ConfirmSubscriptionEmailProps) => {
  const baseUrl = env.NEXT_PUBLIC_SERVER_URL;
  return (
    <EmailLayout heading="Confirm Subscription" preview="Click to confrim">
      <Section>
        <Text>
          Please confirm your subscription by clicking the button below.
        </Text>
        <Button
          href={`${baseUrl}/newsletter/confirm-subscription?token=${subscriptionToken}`}
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "mt-8 w-full"
          )}
        >
          Confirm Subscription
        </Button>
      </Section>
    </EmailLayout>
  );
};

export default ConfirmSubscriptionEmail;
