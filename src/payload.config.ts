// storage-adapter-import-placeholder
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { db as dbConfig } from "./config/payload/db";
import { lexicalEditorConfig } from "./config/payload/editor";
import { getEmailAdapter } from "./config/payload/email";
import { livePreview as livePreviewConfig } from "./config/payload/live-preview";
import { env as clientEnv } from "./env/client";
import { env } from "./env/server";
import { Project } from "./payload-types";
import { collections } from "./payload/collections";
import { Users } from "./payload/collections/Users";
import { globals } from "./payload/globals";
import { revalidateRedirects } from "./payload/hooks/revalidate-redirects";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const generateTitle: GenerateTitle<Project> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | ByronCodes`
    : "ByronCodes | Fullstack Developer";
};

const generateURL: GenerateURL<Project> = ({ doc }) => {
  return doc?.slug
    ? `${clientEnv.NEXT_PUBLIC_SERVER_URL}/my-work/${doc.slug}`
    : clientEnv.NEXT_PUBLIC_SERVER_URL;
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: "gravatar",
    components: {
      graphics: {
        Logo: {
          path: "@/components/icons/logo#Logo",
          clientProps: {
            style: {
              height: "12rem",
              width: "12rem",
            },
          },
          serverProps: {},
        },
      },
    },
    livePreview: livePreviewConfig,
  },
  collections: collections,
  globals: globals,
  email: getEmailAdapter(),
  // This config helps us configure global or default features that the other editors can inherit
  editor: lexicalEditorConfig,

  secret: env.PAYLOAD_SECRET || "",
  // database-adapter-config-start
  db: dbConfig,
  // database-adapter-config-end
  cors: [env.PAYLOAD_PUBLIC_SERVER_URL].filter(Boolean),
  csrf: [env.PAYLOAD_PUBLIC_SERVER_URL].filter(Boolean),
  sharp,
  plugins: [
    // storage-adapter-placeholder
    s3Storage({
      enabled: env.NODE_ENV === "production",
      bucket: env.S3_BUCKET,
      collections: {
        media: true,
      },
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY,
        },
      },
    }),
    seoPlugin({
      generateTitle,
      generateURL,
    }),
    redirectsPlugin({
      collections: ["projects"],
      overrides: {
        // @ts-expect-error hello
        fields: ({ defaultFields }) => {
          return defaultFields.map((field: object) => {
            if ("name" in field && field.name === "from") {
              return {
                ...field,
                admin: {
                  description:
                    "You will need to rebuild the website when changing this field.",
                },
              };
            }
            return field;
          });
        },
        hooks: {
          afterChange: [revalidateRedirects],
        },
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
