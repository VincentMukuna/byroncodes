import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { FacebookIcon, YoutubeFilledIcon } from "@/components/icons/logos";

export const resourcesLinks = [
  {
    title: "Portfolio Site",
    href: "#",
  },
  {
    title: "Blog Posts",
    href: "#",
  },
  {
    title: "Contact Me",
    href: "#",
  },
  {
    title: "My Work",
    href: "#",
  },
  {
    title: "Testimonials",
    href: "#",
  },
] as const;

export const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: "#" },
  { name: "Instagram", icon: InstagramLogoIcon, href: "#" },
  { name: "X", icon: TwitterLogoIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedInLogoIcon, href: "#" },
  { name: "YouTube", icon: YoutubeFilledIcon, href: "#" },
] as const;

export const siteResources = [
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Cookie Settings", href: "#" },
] as const;
