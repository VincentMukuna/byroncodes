import { withPayload } from "@payloadcms/next/withPayload";
import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import("./src/env/server.ts");
/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {};

export default withPayload(nextConfig);
