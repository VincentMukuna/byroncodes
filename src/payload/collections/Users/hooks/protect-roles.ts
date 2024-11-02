import { FieldHook } from "payload";

import { User } from "@/payload-types";

export const protectRoles: FieldHook<User & { id: string }> = async ({
  req,
  data,
}) => {
  // const isAdmin = req.user ? req.user.roles.includes("admin") : false;
  // if (!isAdmin) {
  //   return "user";
  // }
  return data;
};
