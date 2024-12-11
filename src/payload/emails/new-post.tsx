import { Button, Heading, Img, Section, Text } from "@react-email/components";

import { buttonVariants } from "@/components/ui/button";
import { env } from "@/env/client";
import { cn } from "@/lib/utils";
import { Post, Subscriber } from "@/payload-types";

import EmailLayout from "./layouts/email-layout";

type NewPostEmailProps = {
  post: Post;
  subscriber: Subscriber;
};
export const NewPostEmail: React.FC<NewPostEmailProps> = ({
  post,
  subscriber,
}) => {
  const baseUrl = env.NEXT_PUBLIC_SERVER_URL;
  return (
    <EmailLayout
      heading="New Post"
      subscriptionToken={subscriber.subscription_token}
    >
      <Section>
        <Text>Hey there! I just published a new post on my blog.</Text>
      </Section>
      {typeof post.meta?.image === "object" && (
        <Img
          src={post.meta?.image?.url || ""}
          width="800"
          height="400"
          alt={post.title}
          className="mt-8"
        />
      )}
      <Heading as="h2" className="mt-8 text-lg font-semibold">
        {post.title}
      </Heading>
      <Text>{post.meta?.description}</Text>
      <Text> Click the button below to check it out.</Text>
      <Button
        href={`${baseUrl}/posts/${post.slug}`}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "mt-8 w-full"
        )}
      >
        View Post
      </Button>
    </EmailLayout>
  );
};
