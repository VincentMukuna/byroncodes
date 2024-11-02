import configPromise from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";

export const buildPayloadHMR = async () => {
  return await getPayloadHMR({ config: configPromise });
};
