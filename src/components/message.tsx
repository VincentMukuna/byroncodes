import React from "react";

import { cva } from "class-variance-authority";
import {
  BadgeAlertIcon,
  CheckCircleIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription } from "./ui/alert";

const messageVariants = cva("rounded p-2 text-sm w-full p-3", {
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      error: "bg-destructive text-destructive-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
    },
  },
});

export const Message: React.FC<{
  message?: React.ReactNode;
  variant?: "message" | "error" | "success" | "warning";
  className?: string;
}> = ({ message, variant, className }) => {
  const getMessageVariant = () => {
    switch (variant) {
      case "error":
        return "destructive";
      case "success":
        return "success";
      case "warning":
        return "warning";
      default:
        return "default";
    }
  };

  const getMessageIcon = () => {
    switch (variant) {
      case "error":
        return <TriangleAlertIcon className="h-4 w-4" />;
      case "success":
        return <CheckCircleIcon className="h-4 w-4" />;
      case "warning":
        return <BadgeAlertIcon className="h-4 w-4" />;
      default:
        return <InfoIcon className="h-4 w-4" />;
    }
  };

  if (message) {
    return (
      <Alert
        variant={getMessageVariant()}
        className={cn("flex items-center", className)}
      >
        {getMessageIcon()}
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    );
  }
  return null;
};
