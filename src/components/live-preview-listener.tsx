"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";

import { env } from "@/env/client";

export const LivePreviewListener: React.FC = () => {
  const router = useRouter();
  return (
    <PayloadLivePreview
      refresh={router.refresh}
      serverURL={env.NEXT_PUBLIC_SERVER_URL}
    />
  );
};
