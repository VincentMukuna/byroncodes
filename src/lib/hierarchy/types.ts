import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedHeadingNode,
} from "@payloadcms/richtext-lexical";
import { Spread } from "lexical";
import { JsonObject } from "payload";

import { CodeBlockProps } from "@/components/blocks/Code";
import type { BannerBlock as BannerBlockProps } from "@/payload-types";

type BannerBlockPropsJsonObject = Spread<BannerBlockProps, JsonObject>;

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<BannerBlockPropsJsonObject | CodeBlockProps | any>;

export interface Heading {
  title: string;
  level: number;
  id: string;
  children: Heading[];
}

export interface HierarchyNode extends Heading {
  parent?: HierarchyNode | HierarchyRoot;
  children: HierarchyNode[];
}

export interface HierarchyRoot {
  root: true;
  children: HierarchyNode[];
}

// constants.ts
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
