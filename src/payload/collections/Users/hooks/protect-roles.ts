import { FieldHook } from "payload";

import { User } from "@/payload-types";

export const protectRoles: FieldHook<User & { id: string }> = async ({
  req,
  data,
}) => {
  const isAdmin = req.user ? req.user.role === "admin" : false;
  if (!isAdmin) {
    return "user";
  }
  return data?.role;
};
