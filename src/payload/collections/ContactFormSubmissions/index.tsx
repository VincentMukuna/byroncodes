import { CollectionConfig } from "payload";

import admin from "@/payload/access/admin";

export const ContactFormSubmissions: CollectionConfig = {
  slug: "contact-form-submissions",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: admin,
    delete: admin,
    update: () => false,
    create: () => false,
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
    },
  ],
};
