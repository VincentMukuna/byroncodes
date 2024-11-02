import { Field } from "payload";

export const badge = ({
  conditional = true,
}: {
  conditional?: boolean;
}): Field[] => {
  const badgeResult: Field[] = [
    {
      name: "badge",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData.hasBadge,
      },
    },
  ];
  if (conditional) {
    badgeResult.push({
      name: "hasBadge",
      type: "checkbox",
    });
  }

  return badgeResult;
};
