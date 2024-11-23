import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

export const HEADING_LEVEL_MAP: Readonly<
  Record<SerializedHeadingNode["tag"], number>
> = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
} as const;
