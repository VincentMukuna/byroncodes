import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

import { HeadingUtils } from "./heading";
import { Heading, HierarchyNode, HierarchyRoot, NodeTypes } from "./types";

export class HierarchyBuilder {
  private root: HierarchyRoot = { root: true, children: [] };
  private lastHeading: HierarchyNode | null = null;

  build(nodes: NodeTypes[]): Heading[] {
    nodes.forEach((node) => {
      if (node.type === "heading") {
        this.processHeadingNode(node as SerializedHeadingNode);
      }
    });

    return this.convertToHeadings(this.root.children);
  }

  private processHeadingNode(heading: SerializedHeadingNode): void {
    const newHeading: HierarchyNode = {
      title: HeadingUtils.getTitle(heading),
      level: HeadingUtils.getLevel(heading),
      id: HeadingUtils.generateId(heading),
      parent: this.lastHeading ?? this.root,
      children: [],
    };

    this.insertHeading(newHeading);
    this.lastHeading = newHeading;
  }

  private insertHeading(newHeading: HierarchyNode): void {
    if (!this.lastHeading) {
      this.root.children.push(newHeading);
      return;
    }

    if (newHeading.level > this.lastHeading.level) {
      this.lastHeading.children.push(newHeading);
    } else if (newHeading.level === this.lastHeading.level) {
      this.insertSiblingHeading(newHeading);
    } else {
      const parent = this.findParentNode(this.lastHeading, newHeading.level);
      parent.children.push(newHeading);
    }
  }

  private insertSiblingHeading(newHeading: HierarchyNode): void {
    if (this.lastHeading?.parent) {
      this.lastHeading.parent.children.push(newHeading);
    } else {
      this.root.children.push(newHeading);
    }
  }

  private findParentNode(
    node: HierarchyNode,
    targetLevel: number
  ): HierarchyNode | HierarchyRoot {
    if (node.level === targetLevel || this.isRoot(node)) {
      return node;
    }

    if (node.parent && !this.isRoot(node.parent)) {
      return this.findParentNode(node.parent, targetLevel);
    }

    return node;
  }

  private isRoot(node: HierarchyNode | HierarchyRoot): node is HierarchyRoot {
    return "root" in node && node.root === true;
  }

  private convertToHeadings(nodes: HierarchyNode[]): Heading[] {
    return nodes.map((node) => ({
      title: node.title,
      level: node.level,
      id: node.id,
      children: this.convertToHeadings(node.children),
    }));
  }
}
