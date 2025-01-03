import { revalidateTag } from "next/cache";

import type { CollectionConfig } from "payload";

import admin from "../access/admin";
import { anyone } from "../access/anyone";

const Categories: CollectionConfig = {
  slug: "categories",
  access: {
    create: admin,
    delete: admin,
    read: anyone,
    update: admin,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      index: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
  hooks: {
    afterChange: [
      //revalidate categories cache
      async ({}) => {
        revalidateTag("categories");
      },
    ],
  },
};

export default Categories;
