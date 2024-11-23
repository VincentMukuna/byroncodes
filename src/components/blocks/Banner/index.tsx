import React from "react";

import type { BannerBlock as BannerBlockProps } from "src/payload-types";

import RichText from "@/components/rich-text";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
} & BannerBlockProps;

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={cn("mx-auto my-8 w-full", className)}>
      <div
        className={cn("flex items-center rounded border px-6 py-3", {
          "border-border bg-card": style === "info",
          "border-error/30 bg-red-700/10": style === "error",
          "border-green-300/30 bg-green-600/10": style === "success",
          "border-warning/30 bg-amber-400/10": style === "warning",
        })}
      >
        <RichText content={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
