import { CollectionConfig } from "payload";

import admin from "@/payload/access/admin";
import { adminOrPublished } from "@/payload/access/adminOrPublished";
import { checkRole } from "@/payload/access/check-role";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  access: {
    admin: ({ req: { user } }) => checkRole(["admin"], user),
    read: adminOrPublished,
    delete: admin,
    update: admin,
    create: admin,
  },
  admin: {
    defaultColumns: ["name", "role", "rating"],
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "role",
          type: "text",
          label: "Role",
          required: true,
          admin: {
            description:
              "Role and company of the person giving the testimonial. E.g. 'CEO, Company Name'",
          },
        },
      ],
    },

    {
      name: "quote",
      label: "Quote",
      type: "textarea",
      required: true,
    },

    {
      name: "rating",
      type: "number",
      label: "Rating",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Image",
      required: true,
      admin: {
        description:
          "Image of the person giving the testimonial. This will be displayed alongside the testimonial.",
      },
    },
  ],
};
