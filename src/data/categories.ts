import { buildPayloadHMR } from "@/utilities/buildPayloadHMR";

export const getCategories = async () => {
  const payload = await buildPayloadHMR();

  const res = await payload.find({
    collection: "categories",
    depth: 1,
    sort: "title",
    limit: 1000,
  });

  return res.docs;
};
