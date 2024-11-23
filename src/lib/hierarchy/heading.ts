import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

import { HEADING_LEVEL_MAP } from "./constants";

export class HeadingUtils {
  static getTitle(node: SerializedHeadingNode): string {
    const firstChild = node.children[0];
    if (
      !firstChild ||
      typeof firstChild !== "object" ||
      !("text" in firstChild)
    ) {
      throw new Error("Invalid heading node structure");
    }
    return firstChild.text as string;
  }

  static generateId(node: SerializedHeadingNode): string {
    return this.getTitle(node).toLowerCase().replace(/\s/g, "-");
  }

  static getLevel(node: SerializedHeadingNode): number {
    return HEADING_LEVEL_MAP[node.tag];
  }
}
