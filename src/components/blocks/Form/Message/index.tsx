import React from "react";

import type { MessageField } from "@payloadcms/plugin-form-builder/types";

import RichText from "@/components/rich-text";

import { Width } from "../Width";

export const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <Width className="my-12" width="100">
      <RichText content={message as any} />
    </Width>
  );
};
