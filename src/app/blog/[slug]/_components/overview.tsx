"use client";

import React, { useState } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
                ? "w-full bg-[#009fba] px-4 py-3"
                : `px-${4 + level * 4} py-2`
            }`}
          >
            {hasChildren && (
              <span className="mr-2">
                {isOpen ? (
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 text-white" />
                )}
              </span>
            )}
            <a
              href={`#${heading.id ? heading.id : heading.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-poppins text-white transition-colors hover:text-[#ff8328]"
            >
              {heading.title}
            </a>
          </div>
        </CollapsibleTrigger>
        {hasChildren && (
          <CollapsibleContent>
            <ul className={`space-y-2 ${level > 0 ? "ml-4" : ""}`}>
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
        <h2 className="font-poppins text-2xl font-semibold text-white">
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
