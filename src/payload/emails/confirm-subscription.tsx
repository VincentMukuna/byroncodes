import {
  Button,
  Column,
  Container,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

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
    <EmailLayout heading="Confirm Subscription">
      <Section>
        <Container>
          <Row>
            <Column>
              <Heading>Confirm Subscription</Heading>
              <Text>
                Please confirm your subscription by clicking the button below.
              </Text>
              <Button
                href={`${baseUrl}/newsletter/confirm-subscription/${subscriptionToken}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "mt-8"
                )}
              >
                Confirm Subscription
              </Button>
            </Column>
          </Row>
        </Container>
      </Section>
    </EmailLayout>
  );
};

export default ConfirmSubscriptionEmail;
