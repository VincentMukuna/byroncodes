import { withPayload } from "@payloadcms/next/withPayload";
import { createJiti } from "jiti";
import { env } from "node:process";
import { fileURLToPath } from "node:url";

import redirects from "./redirects.js";

const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import("./src/env/server.ts");

const NEXT_PUBLIC_SERVER_URL =
  env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
const S3_ENDPOINT = env.S3_ENDPOINT || "http://localhost:9000";
/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL, S3_ENDPOINT].map((item) => {
        const url = new URL(item);

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(":", ""),
        };
      }),
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
  redirects,
};

export default withPayload(nextConfig);
