"use server";

import { render } from "@react-email/components";
import { nanoid } from "nanoid";

import ConfirmSubscriptionEmail from "@/payload/emails/confirm-subscription";
import { buildPayloadHMR } from "@/utils/buildPayloadHMR";

export async function subscribeToNewsletter(email: string) {
  const payload = await buildPayloadHMR();
  const { docs: subscribers } = await payload.find({
    collection: "subscribers",
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (subscribers.length > 0) {
    return {
      success: false,
      message: "Email already subscribed!",
    };
  }

  try {
    const subscription = await payload.create({
      collection: "subscribers",
      data: {
        email,
        subscription_token: nanoid(),
      },
    });

    await payload.sendEmail({
      to: email,
      subject: "Confirm your subscription",
      html: render(
        <ConfirmSubscriptionEmail
          subscriptionToken={subscription.subscription_token}
        />
      ),
    });

    return {
      success: true,
      message: "Subscribed successfully! Please check your email to confirm.",
    };
  } catch (error) {
    payload.logger.error("Error subscribing: ", error);
    return {
      success: false,
      message: "Error subscribing!",
    };
  }
}

export async function confirmNewsletterSubscription(subscriptionToken: string) {
  const payload = await buildPayloadHMR();
  const { docs: subscribers } = await payload.find({
    collection: "subscribers",
    where: {
      subscription_token: {
        equals: subscriptionToken,
      },
    },
  });

  if (subscribers.length === 0) {
    return {
      success: false,
      message: "Invalid token!",
    };
  }

  const subscriber = subscribers[0];

  if (subscriber.subscription_confirmed_at !== null) {
    return {
      success: false,
      message: "Subscription already confirmed!",
    };
  }

  try {
    await payload.update({
      collection: "subscribers",
      id: subscriber.id,
      data: {
        subscription_confirmed_at: new Date().toString(),
      },
    });

    return {
      success: true,
      message: "Subscription confirmed!",
    };
  } catch (error) {
    payload.logger.error("Error confirming subscription: ", error);
    return {
      success: false,
      message: "Error confirming subscription!",
    };
  }
}

export async function unsubscribeFromNewsletter(subscriptionToken: string) {
  const payload = await buildPayloadHMR();
  const { docs: subscribers } = await payload.find({
    collection: "subscribers",
    where: {
      subscription_token: {
        equals: subscriptionToken,
      },
    },
  });

  if (subscribers.length === 0) {
    return {
      success: false,
      message: "Invalid token!",
    };
  }

  const subscriber = subscribers[0];

  try {
    await payload.delete({
      collection: "subscribers",
      id: subscriber.id,
    });

    return {
      success: true,
      message: "Unsubscribed successfully!",
    };
  } catch (error) {
    payload.logger.error("Error unsubscribing: ", error);
    return {
      success: false,
      message: "Error unsubscribing!",
    };
  }
}
