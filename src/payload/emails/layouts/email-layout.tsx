import * as React from "react";

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { env } from "@/env/client";

interface SubscribedLayoutProps {
  heading: string;
  children: React.ReactNode;
  subscriptionToken?: string;
  preview?: string;
}

export const EmailLayout = ({
  children,
  heading,
  subscriptionToken,
  preview = "ByronCodes Newsletter",
}: SubscribedLayoutProps) => {
  const baseUrl = env.NEXT_PUBLIC_SERVER_URL;
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/logo.png`}
            width="184"
            height="184"
            alt="Logo"
            className="mx-auto my-20 object-cover"
          />
          <Container className="p-45 bg-white">
            <Heading className="my-0 text-center leading-8">{heading}</Heading>
            {children}
          </Container>

          <Container className="mt-20">
            {subscriptionToken && (
              <Section>
                <Row>
                  <Column className="px-20 text-right">
                    <Link
                      href={`${baseUrl}/newsletter/unsubscribe?subscription=${subscriptionToken}`}
                    >
                      Unsubscribe
                    </Link>
                  </Column>
                  <Column className="text-left">
                    <Link href={`${baseUrl}/newsletter/preferences`}>
                      Manage Preferences
                    </Link>
                  </Column>
                </Row>
              </Section>
            )}
            <Text className="mb-45 text-center text-gray-400">
              Acme Inc, 123 ABC Road, Suite 300 Westlands, Nairobi
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailLayout;
