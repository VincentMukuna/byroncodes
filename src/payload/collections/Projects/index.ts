import { revalidateTag } from "next/cache";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

import { env } from "@/env/client";
import admin from "@/payload/access/admin";
import { adminOrPublished } from "@/payload/access/adminOrPublished";
import { checkRole } from "@/payload/access/check-role";
import { Banner } from "@/payload/blocks/Banner";
import { Code } from "@/payload/blocks/Code";
import { MediaBlock } from "@/payload/blocks/MediaBlock";
import { SocialMediaEmbed } from "@/payload/blocks/SocialMediaEmbed";
import { slugField } from "@/payload/fields/slug";
import { generatePreviewPath } from "@/payload/utilities/generatePreviewPath";

import { populateAuthors } from "../Posts/hooks/populate-authors";
import { revalidateProject } from "../Posts/hooks/revalidate-post";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    admin: ({ req: { user } }) => checkRole(["admin"], user),
    read: adminOrPublished,
    delete: admin,
    update: admin,
    create: admin,
  },
  admin: {
    defaultColumns: [
      "meta.image",
      "title",
      "slug",
      "isFeatured",
      "publishedAt",
    ],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "projects",
        });

        return `${env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (doc) =>
      generatePreviewPath({
        collection: "projects",
        slug: typeof doc?.slug === "string" ? doc.slug : "",
      }),
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "isFeatured",
      label: "Featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Show this project on the homepage",
      },
      hooks: {
        afterChange: [
          ({ data }) => {
            if (data?.isFeatured === true) {
              revalidateTag("featuredProject");
            }
            return data;
          },
        ],
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ["h1", "h2", "h3", "h4"],
                    }),
                    BlocksFeature({
                      blocks: [Banner, Code, MediaBlock, SocialMediaEmbed],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ];
                },
              }),
              label: false,
              required: true,
            },
          ],
        },
        {
          label: "Meta",
          fields: [
            {
              name: "relatedProjects",
              type: "relationship",
              admin: {
                position: "sidebar",
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              relationTo: "projects",
              hasMany: true,
            },
            {
              name: "categories",
              label: "Categories",
              type: "relationship",
              relationTo: "categories",
              hasMany: true,
            },
          ],
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
      access: {
        create: ({ req: { user } }) => checkRole(["admin"], user),
        update: ({ req: { user } }) => checkRole(["admin"], user),
      },
    },
    {
      name: "authors",
      type: "relationship",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "users",
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: "populatedAuthors",
      type: "array",
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateProject],
    afterRead: [populateAuthors],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
};
