import React from "react";

export type NavMenuItem = NavMenuItemDefault | NavMenuItemWithNestedItems;

export type NavMenuItemDefault = {
  label: string;
  href: string;
};

export type NavMenuItemWithNestedItems = {
  label: string;
  menuItems?: NavMenuGroup[];
  card?: NavMenuCard;
};

export function hasNestedItems(
  item: NavMenuItemDefault | NavMenuItemWithNestedItems
): item is NavMenuItemWithNestedItems {
  return (item as NavMenuItemDefault).href === undefined;
}

export type NavMenuGroup = {
  title: string;
  items: NavMenuGroupItem[];
};

export type NavMenuCard = {
  label: string;
  title: string;
  description: string;
  link: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    href: any;
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type NavMenuGroupItem = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  href: any;
  icon?: React.ReactNode;
  description: string;
};
