import { NewPostEmail } from "@/payload/emails/new-post";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export default async function EmailPage() {
  const payload = await buildPayloadHMR();
  const { docs } = await payload.find({
    collection: "projects",
    limit: 1,
    overrideAccess: true,
  });

  const post = docs[0];
  const subscriber = {
    subscription_token: "subscription-token",
  };

  return <NewPostEmail post={post} subscriber={subscriber as any} />;
}
