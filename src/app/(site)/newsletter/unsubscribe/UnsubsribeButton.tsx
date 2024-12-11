"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { toast } from "sonner";

import { unsubscribeFromNewsletter } from "@/actions/newsletter";
import { Message } from "@/components/message";
import { Button } from "@/components/ui/button";

export function UnsubscribeButton() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isVerifying, setIsUnsubscribing] = useState(false);
  const token = searchParams.get("subscription");
  if (!token) {
    return <Message variant="error" message="Invalid token" />;
  }
  const handleUnsubscribe = async () => {
    setIsUnsubscribing(true);
    try {
      const res = await unsubscribeFromNewsletter(token);

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
      setIsUnsubscribing(false);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUnsubscribe();
      }}
      className="grid w-full gap-2"
    >
      <Button className="w-full" disabled={isVerifying}>
        {isVerifying ? "Unsubscribing..." : "Unsubscribe "}
      </Button>
    </form>
  );
}
