import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  UnderlineFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { RichTextAdapterProvider } from "payload";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lexicalEditorConfig: RichTextAdapterProvider<any, any, any> =
  lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => {
      return [
        ...rootFeatures,
        ...defaultFeatures,
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({
          enabledCollections: [],
          fields: ({ defaultFields }) => {
            const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
              if ("name" in field && field.name === "url") return false;
              return true;
            });

            return [
              ...defaultFieldsWithoutUrl,
              {
                name: "url",
                type: "text",
                admin: {
                  condition: ({ linkType }) => linkType !== "internal",
                },
                label: ({ t }) => t("fields:enterURL"),
                required: true,
              },
            ];
          },
        }),
      ];
    },
  });
