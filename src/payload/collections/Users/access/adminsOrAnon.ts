import { Access } from "payload";

import { checkRole } from "@/payload/access/check-role";

const adminsOrAnon: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(["admin"], user)) {
      return true;
    }
    return false;
  }

  return true;
};

export default adminsOrAnon;
