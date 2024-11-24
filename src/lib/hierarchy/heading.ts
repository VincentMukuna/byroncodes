import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

import { HEADING_LEVEL_MAP } from "./constants";

export class HeadingUtils {
  static getTitle(node: SerializedHeadingNode): string {
    const headingText = node.children.find(
      (child) => child.type === "text"
    ) as SerializedHeadingNode;
    return (headingText as any)?.text || "Heading";
  }

  static generateId(node: SerializedHeadingNode): string {
    return this.getTitle(node).toLowerCase().replace(/\s/g, "-");
  }

  static getLevel(node: SerializedHeadingNode): number {
    return HEADING_LEVEL_MAP[node.tag];
  }
}
