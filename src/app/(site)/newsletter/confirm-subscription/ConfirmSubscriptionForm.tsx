"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { toast } from "sonner";

import { confirmNewsletterSubscription } from "@/actions/newsletter";
import { Message } from "@/components/message";
import { Button } from "@/components/ui/button";

export default function ConfirmNewsletterSubscriptionButton() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(false);
  const token = searchParams.get("token");
  if (!token) {
    return <Message variant="error" message="Invalid token" />;
  }
  const handleConfirmSubscription = async () => {
    setIsVerifying(true);
    try {
      const res = await confirmNewsletterSubscription(token);

      if (res.success) {
        toast.success("Success!", {
          description: res.message,
        });
      } else {
        toast.error("Failure!", {
          description: res.message,
        });
      }
      router.replace("/");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleConfirmSubscription();
      }}
      className="grid w-full gap-2"
    >
      <Button className="w-full" disabled={isVerifying}>
        Confirm Newsletter Subscription
      </Button>
    </form>
  );
}
