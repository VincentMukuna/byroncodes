import configPromise from "@payload-config";
import { getPayload } from "payload";

export const buildPayloadHMR = async () => {
  return await getPayload({ config: configPromise });
};
