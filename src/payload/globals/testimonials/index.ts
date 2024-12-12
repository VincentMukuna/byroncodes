import { GlobalConfig } from "payload";

import { revalidateTestimonials } from "./hooks/revalidate-testimonials";

export const Testimonials: GlobalConfig = {
  slug: "testimonials",
  fields: [
    {
      name: "items",
      type: "array",
      label: "Testimonials",
      required: true,
      admin: { initCollapsed: true },
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
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateTestimonials],
  },
};
