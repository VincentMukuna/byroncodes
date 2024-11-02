import type { CollectionConfig } from "payload";

import { checkRole } from "@/payload/access/check-role";

import { protectRoles } from "./hooks/protect-roles";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  access: {
    admin: ({ req }) => checkRole(["admin"], req.user),
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      hasMany: false,
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
      hooks: {
        beforeChange: [protectRoles],
      },
    },
  ],
  timestamps: true,
};
