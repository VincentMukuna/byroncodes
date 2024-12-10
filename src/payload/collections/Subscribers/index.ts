import { CollectionConfig } from "payload";

import admin from "@/payload/access/admin";
import { checkRole } from "@/payload/access/check-role";

export const Subscribers: CollectionConfig = {
  slug: "subscribers",
  access: {
    admin: ({ req: { user } }) => checkRole(["admin"], user),
    read: admin,
    delete: admin,
    update: admin,
    create: admin,
  },

  fields: [
    {
      name: "email",
      label: "Subscriber Email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "subscription_token",
      type: "text",
      admin: {
        disabled: true,
      },
      access: {
        update: () => false,
      },
      unique: true,
      required: true,
    },
    {
      name: "subscription_confirmed_at",
      type: "date",
      admin: {
        disabled: true,
      },
    },
  ],
};
