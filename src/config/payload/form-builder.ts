import { formBuilderPlugin } from "@payloadcms/plugin-form-builder";
import {
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

import admin from "@/payload/access/admin";
import { anyone } from "@/payload/access/anyone";

export const formBuilderPluginConfig = formBuilderPlugin({
  fields: {
    payment: false,
  },
  formOverrides: {
    access: {
      read: anyone,
      create: admin,
      update: admin,
      delete: admin,
    },
    fields: ({ defaultFields }) => {
      return defaultFields.map((field) => {
        if ("name" in field && field.name === "confirmationMessage") {
          return {
            ...field,
            editor: lexicalEditor({
              features: ({ rootFeatures }) => {
                return [
                  ...rootFeatures,
                  FixedToolbarFeature(),
                  HeadingFeature({
                    enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
                  }),
                ];
              },
            }),
          };
        }
        return field;
      });
    },
  },
  formSubmissionOverrides: {
    access: {
      read: admin,
      create: anyone,
      update: admin,
      delete: admin,
    },
  },
});
