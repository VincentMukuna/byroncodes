"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { headerNavLinks } from "@/data/header-nav-links";
import { cn } from "@/lib/utils";
import { Category, Media, Post } from "@/payload-types";

import { BxBxsCube } from "./icons/cube";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type Props = {
  latestBlogPosts: Post[];
  categories: Category[];
  featuredArticle?: Post | null;
};

export function MobileNav({
  latestBlogPosts,
  categories,
  featuredArticle,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();
  const contentLinks = [
    {
      title: "Explore My Work",
      items: [
        {
          title: "Projects",
          id: "nav-projects",
          description: "Discover my latest projects and achhievements.",
          href: "/my-work",
        },
        {
          title: "Testimonials",
          id: "nav-testimonials",
          description: "What my clients say about my work.",
          href: "/#testimonials",
        },

        {
          title: "Contact Me",
          id: "nav-contact",
          description: "Get in touch for collaboration opportunities.",
          href: "/my-work#contact-me",
        },
        {
          title: "Blog",
          id: "nav-blog",
          description: "Insights and experiences shared through my blog.",
          href: "/blog",
        },
      ],
    },
    {
      title: "Latest Blog Posts",
      items: latestBlogPosts.map((post) => ({
        title: post.title,
        id: `latest-${post.id}`,
        description: post.meta?.description,
        href: `/blog/${post.slug}`,
      })),
    },
    {
      title: "More Blog Topics",
      items: categories.map((category) => ({
        title: category.title,
        id: `moreblog-${category.id}`,
        description: category.description || "Description",
        href: `/blog?category=${category.id}`,
      })),
    },
  ];

  const featuredArticleCard = {
    label: "Featured Articles",
    title: "Tech Trends",
    description: featuredArticle?.meta?.description || "Description",
    image: {
      src:
        (featuredArticle?.meta?.image as Media)?.url ||
        "/img/business-solutions.jpg",
      alt:
        (featuredArticle?.meta?.image as Media)?.alt ||
        "Image of partners shaking hands",
    },
    link: {
      href: `/blog/${featuredArticle?.slug}`,
      label: "Read more",
    },
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetHeader className="sr-only">
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Explore my work and blog topics.</SheetDescription>
      </SheetHeader>
      <SheetTrigger asChild className="">
        <Button
          variant={"ghost"}
          className="size-10 p-0 lg:hidden"
          aria-label="Menu"
        >
          <HamburgerMenuIcon className="size-7 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-full overflow-auto">
        <nav className="flex flex-col space-y-4 p-4 font-poppins lg:hidden">
          {headerNavLinks.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-lg text-blue-light hover:text-primary",
                  pathName === link.href && "text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-0 text-lg hover:bg-transparent active:bg-transparent"
              >
                <span className="text-blue-light">Explore</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-4 pl-0">
              {contentLinks.map((link) => {
                return (
                  <div
                    key={link.title}
                    className="inline-flex w-[260px] flex-col items-start justify-start gap-4 py-8"
                  >
                    <div className="self-stretch font-roboto text-sm font-semibold leading-[21px] text-white">
                      {link.title}
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4">
                      {link.items.map((item) => (
                        <div
                          key={item.id}
                          className="inline-flex items-start justify-start gap-3 py-2"
                        >
                          <BxBxsCube className="h-6 w-6 text-primary" />

                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="font-roboto text-base font-semibold text-[#009fba]"
                          >
                            {item.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {featuredArticleCard && (
                <div className="h-96 space-y-4 bg-blue-dark p-6">
                  <h3 className="font-roboto font-semibold text-white">
                    {featuredArticleCard.label}
                  </h3>
                  <div className="space-y-2">
                    <Image
                      src={featuredArticleCard.image.src}
                      alt={featuredArticleCard.image.alt}
                      height={120}
                      width={178}
                      className="object-cover"
                    />
                    <div>
                      <h4 className="font-roboto text-base font-semibold text-[#ff8328]">
                        {featuredArticleCard.title}
                      </h4>
                      <p className="line-clamp-2 font-poppins text-sm text-white">
                        {featuredArticleCard.description}
                      </p>
                      <Link
                        href={featuredArticleCard.link.href}
                        onClick={() => setOpen(false)}
                        className="font-roboto text-sm text-[#009fba] underline"
                      >
                        {featuredArticleCard.link.label}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </nav>
        <div className="grid gap-3">
          <Button variant={"outline"} asChild>
            <a
              href={"#newsletter-email"}
              onClick={() => {
                setOpen(false);
              }}
            >
              Join
            </a>
          </Button>
          <Button>Explore</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
