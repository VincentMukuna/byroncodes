import Link from "next/link";
import React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/payload-types";

type CMSLinkType = {
  appearance?: "inline" | ButtonProps["variant"];
  children?: React.ReactNode;
  className?: string;
  label?: string;
  newTab?: boolean;
  reference?: {
    relationTo: "pages" | "posts";
    value: Project | string | number;
  };
  size?: ButtonProps["size"];
  type?: "custom" | "reference";
  url?: string;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = "inline",
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props;

  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value.slug
      ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
          reference.value.slug
        }`
      : url;

  if (!href) return null;
  const size = appearance === "link" ? "clear" : sizeFromProps;
  const newTabProps = newTab
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};

  /* Ensure we don't break any styles set by richText */
  if (appearance === "inline") {
    return (
      //TODO: Fix this type issue
      <Link
        className={cn(className)}
        href={href || url || "/"}
        {...newTabProps}
      >
        {label && label}
        {children && children}
      </Link>
    );
  }

  return (
    <Button
      asChild
      className={className}
      //TODO: Fix this type issue
      size={size as any}
      variant={appearance}
    >
      <Link
        className={cn(className)}
        href={href || url || "/"}
        {...newTabProps}
      >
        {label && label}
        {children && children}
      </Link>
    </Button>
  );
};
