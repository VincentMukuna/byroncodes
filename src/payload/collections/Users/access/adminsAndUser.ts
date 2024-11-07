import { Access } from "payload";

import { checkRole } from "@/payload/access/check-role";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(["admin"], user)) {
      return true;
    }

    return {
      id: {
        equals: user.id,
      },
    };
  }

  return false;
};

export default adminsAndUser;
