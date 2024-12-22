import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { FacebookIcon, YoutubeFilledIcon } from "@/components/icons/logos";
import { siteConfig } from "@/config/site";

export const resourcesLinks = [
  {
    title: "Portfolio Site",
    href: "/",
  },
  {
    title: "Blog Posts",
    href: "/blog",
  },
  {
    title: "Contact Me",
    href: "/contact",
  },
  {
    title: "My Work",
    href: "/my-work",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
] as const;

export const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: siteConfig.links.instagram },
  {
    name: "Instagram",
    icon: InstagramLogoIcon,
    href: siteConfig.links.instagram,
  },
  { name: "X", icon: TwitterLogoIcon, href: siteConfig.links.twitter },
  { name: "LinkedIn", icon: LinkedInLogoIcon, href: siteConfig.links.linkedin },
  { name: "YouTube", icon: YoutubeFilledIcon, href: siteConfig.links.youtube },
] as const;

export const siteResources = [
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Cookie Settings", href: "#" },
] as const;
