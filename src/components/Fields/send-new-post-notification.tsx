"use client";

import { useState } from "react";

import { Button, useDocumentInfo } from "@payloadcms/ui";
import { UIFieldClientComponent } from "payload";

import { notifySubscribersAboutNewPost } from "@/actions/newsletter";

export const SendNewPostNotifications: UIFieldClientComponent = ({}) => {
  const { id: postId } = useDocumentInfo();
  const [isSending, setIsSending] = useState(false);

  const handleClick = async () => {
    if (postId) {
      setIsSending(true);
      await notifySubscribersAboutNewPost(postId);
      setIsSending(false);
    }
  };

  return (
    <Button disabled={!postId} onClick={handleClick}>
      {isSending ? "Sending..." : "Send New Post Notifications"}
    </Button>
  );
};
