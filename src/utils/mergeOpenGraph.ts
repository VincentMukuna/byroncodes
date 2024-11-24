import type { Metadata } from "next";

import { env } from "process";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description: "An open-source website built with Payload and Next.js.",
  images: [
    {
      url: env.NEXT_PUBLIC_SERVER_URL
        ? `${env.NEXT_PUBLIC_SERVER_URL}/fixing-health-og.png`
        : "/fixing-health-og.png",
    },
  ],
  siteName: "Fixing Health",
  title: "Fixing Health Website",
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
