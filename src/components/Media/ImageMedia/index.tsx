"use client";

import type { StaticImageData } from "next/image";
import NextImage from "next/image";
import React from "react";

import { env } from "@/env/client";
import cssVariables from "@/lib/cssVariables";
import { cn } from "@/lib/utils";

import type { Props as MediaProps } from "../types";

const { breakpoints } = cssVariables;

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
  } = props;

  const [, setIsLoading] = React.useState(true);

  let width: number | undefined;
  let height: number | undefined;
  let alt = altFromProps;
  let src: StaticImageData | string = srcFromProps || "";

  if (!src && resource && typeof resource === "object") {
    const {
      alt: altFromResource,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource;

    width = fullWidth || undefined;
    height = fullHeight || undefined;
    alt = altFromResource;

    src = `${env.NEXT_PUBLIC_SERVER_URL}${url}`;
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value}px`)
        .join(", ");

  return (
    <NextImage
      alt={alt || ""}
      className={cn(imgClassName)}
      fill={fill}
      height={!fill ? height : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false);
        if (typeof onLoadFromProps === "function") {
          onLoadFromProps();
        }
      }}
      priority={priority}
      quality={90}
      sizes={sizes}
      src={src}
      width={!fill ? width : undefined}
    />
  );
};
