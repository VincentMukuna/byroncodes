import { render } from "@react-email/components";
import { CollectionAfterChangeHook } from "payload";

import { Post, Subscriber } from "@/payload-types";
import { NewPostEmail } from "@/payload/emails/new-post";

export const sendNewPostEmail: CollectionAfterChangeHook<Post> = async ({
  doc,
  req: { payload },
}) => {
  //if the post is published and notifications_sent_at is null

  if (doc._status === "published" && !doc.notifications_sent_at) {
    const { docs: subscribers } = await payload.find({
      collection: "subscribers",
      where: {
        subscripiton_verified_at: {
          exists: true,
        },
      },
    });

    async function sendEmail(post: Post, subscriber: Subscriber) {
      await payload.sendEmail({
        to: subscriber.email,
        subject: `New Post: ${post.title}`,
        html: render(<NewPostEmail post={post} subscriber={subscriber} />),
      });
    }

    await Promise.all(
      subscribers.map((subscriber) => sendEmail(doc, subscriber))
    );

    doc.notifications_sent_at = new Date().toString();
  }

  return doc;
};
