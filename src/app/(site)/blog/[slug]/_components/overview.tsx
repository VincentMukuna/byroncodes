"use client";

import React, { useState } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface Heading {
  title: string;
  level: number;
  id?: string;
  children?: Heading[];
}

export interface OverviewProps {
  headings: Heading[];
}

const HeadingItem: React.FC<{ heading: Heading; level: number }> = ({
  heading,
  level,
}) => {
  const [isOpen, setIsOpen] = useState(level === 0);

  const hasChildren = heading.children && heading.children.length > 0;

  return (
    <li>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex w-full items-center justify-between text-left">
          <div
            className={`flex items-center ${
              level === 0
                ? "w-full bg-[#009fba] px-3 py-2"
                : `px-${2 + level * 2} py-2`
            }`}
            style={{
              paddingLeft: `${4 + level * 1}px`,
            }}
          >
            {hasChildren ? (
              <span className="mr-2">
                {isOpen ? (
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 text-white" />
                )}
              </span>
            ) : (
              <div className="h-4 w-4"></div>
            )}
            <a
              href={`#${heading.id ? heading.id : heading.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="overflow-hidden font-poppins text-white transition-colors hover:text-[#ff8328]"
            >
              {heading.title}
            </a>
          </div>
        </CollapsibleTrigger>
        {hasChildren && (
          <CollapsibleContent>
            <ul
              className={cn("space-y-2")}
              style={{
                paddingLeft: `${4 + level * 2}px`,
              }}
            >
              {heading.children!.map((child, index) => (
                <HeadingItem key={index} heading={child} level={level + 1} />
              ))}
            </ul>
          </CollapsibleContent>
        )}
      </Collapsible>
    </li>
  );
};

const Overview: React.FC<OverviewProps> = ({ headings }) => {
  const [isMainOpen, setIsMainOpen] = useState(true);
  return (
    <Collapsible open={isMainOpen} onOpenChange={setIsMainOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between text-left">
        <h2 className="font-poppins text-xl font-semibold text-white">
          Contents Overview
        </h2>
        {isMainOpen ? (
          <ChevronDownIcon className="h-6 w-6 text-white" />
        ) : (
          <ChevronRightIcon className="h-6 w-6 text-white" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="mt-4 space-y-2">
          {headings.map((heading, index) => (
            <HeadingItem key={index} heading={heading} level={0} />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Overview;
