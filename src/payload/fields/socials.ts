import { Field } from "payload";

import deepMerge from "../utilities/deepMerge";

export type Socials =
  | "linkedin"
  | "twitter"
  | "email"
  | "instagram"
  | "facebook"
  | "threads"
  | "phone"
  | "pinterest"
  | "snapchat"
  | "reddit"
  | "youtube"
  | "tiktok";

export const socialOptions: Array<{ label: string; value: Socials }> = [
  {
    label: "LinkedIn",
    value: "linkedin",
  },
  {
    label: "Twitter/X",
    value: "twitter",
  },
  {
    label: "FaceBook",
    value: "facebook",
  },
  {
    label: "Instagram",
    value: "instagram",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Threads",
    value: "threads",
  },
  {
    label: "Phone",
    value: "phone",
  },
  {
    label: "Pinterest",
    value: "pinterest",
  },
  {
    label: "Snapchat",
    value: "snapchat",
  },
  {
    label: "Reddit",
    value: "reddit",
  },
  {
    label: "Youtube",
    value: "youtube",
  },
  {
    label: "TikTok",
    value: "tiktok",
  },
];

type SocialsType = (options?: {
  socials?: Socials[];
  disableLabel?: boolean;
  overrides?: Record<string, unknown>;
}) => Field;

export const socials: SocialsType = ({ overrides = {}, socials } = {}) => {
  const socialsSet = new Set(socials || []);
  const socialsResult: Field = {
    name: "socials",
    type: "array",
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "type",
            type: "select",
            options: socials
              ? socialOptions.filter((s) => socialsSet.has(s.value))
              : socialOptions,
          },
          {
            name: "value",
            type: "text",
          },
        ],
      },
    ],
  };

  return deepMerge(socialsResult, overrides);
};
