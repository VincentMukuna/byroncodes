import React from "react";

export type NavMenuItem = {
  label: string;
  href: string;
  menuItems?: (NavMenuGroup | NavMenuCard)[];
};

export type NavMenuGroup = {
  title: string;
  items: NavMenuGroupItem[];
};

export type NavMenuCard = {
  label: string;
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type NavMenuGroupItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  description: string;
};
