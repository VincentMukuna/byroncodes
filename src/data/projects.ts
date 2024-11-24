import { buildPayloadHMR } from "@/utilities/buildPayloadHMR";

export const queryProjects = async () => {
  const payload = await buildPayloadHMR();

  const res = await payload.find({
    collection: "projects",
    limit: 1000,
  });

  return res.docs;
};
