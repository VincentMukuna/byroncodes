"use client";

import React, { useEffect, useRef } from "react";

import { env } from "process";

import { cn } from "@/lib/utils";

import type { Props as MediaProps } from "../types";

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef;
    if (video) {
      video.addEventListener("suspend", () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      });
    }
  }, []);

  if (resource && typeof resource === "object") {
    const { filename } = resource;

    return (
      <video
        autoPlay
        className={cn(videoClassName, "rounded-lg")}
        controls={false}
        loop
        muted
        onClick={onClick}
        playsInline
        ref={videoRef}
      >
        <source src={`${env.NEXT_PUBLIC_SERVER_URL}/media/${filename}`} />
      </video>
    );
  }

  return null;
};