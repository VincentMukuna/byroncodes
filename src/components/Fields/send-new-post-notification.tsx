"use client";

import { Button, useDocumentInfo } from "@payloadcms/ui";
import { UIFieldClientComponent } from "payload";

import { notifySubscribersAboutNewPost } from "@/actions/newsletter";

export const SendNewPostNotifications: UIFieldClientComponent = ({}) => {
  const { id: postId } = useDocumentInfo();
  return (
    <Button
      onClick={() => {
        if (postId) {
          notifySubscribersAboutNewPost(postId);
        }
      }}
    >
      Send Notifications
    </Button>
  );
};
