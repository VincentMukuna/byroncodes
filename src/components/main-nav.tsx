"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerNavLinks } from "@/data/header-nav-links";
import { cn } from "@/lib/utils";
import { Category, Media, Post } from "@/payload-types";

import { BxBxsCube } from "./icons/cube";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

type Props = {
  latestBlogPosts: Post[];
  categories: Category[];
  featuredArticle: Post;
};

export function MainNav({
  latestBlogPosts,
  categories,
  featuredArticle,
}: Props) {
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
        description: category.description || "",
        href: `/blog?category=${category.id}`,
      })),
    },
  ];

  const featuredArticleCard = {
    label: "Featured Articles",
    title: "Tech Trends",
    description: featuredArticle.meta?.description || "Description",
    image: {
      src:
        (featuredArticle.meta?.image as Media)?.url ||
        "/img/business-solutions.jpg",
      alt:
        (featuredArticle.meta?.image as Media)?.alt ||
        "Image of partners shaking hands",
    },
    link: {
      href: `/blog/${featuredArticle.slug}`,
      label: "Read more",
    },
  };
  return (
    <div className="ml-4 hidden gap-3 font-poppins lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {headerNavLinks.map((link) => {
            return (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-blue-light decoration-primary underline-offset-8 transition-colors hover:bg-transparent hover:text-primary hover:underline active:bg-transparent active:text-primary",
                    pathName === link.href && "text-primary"
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-blue-light decoration-primary underline-offset-8 hover:underline">
              Content
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex max-w-[96vw] gap-8 pl-8">
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
                          <BxBxsCube className="relative size-6 text-primary" />
                          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                            <Link
                              href={item.href || ""}
                              className="self-stretch font-roboto text-base font-semibold leading-normal text-[#009fba]"
                            >
                              {item.title}
                            </Link>
                            <div className="line-clamp-2 self-stretch text-sm font-normal leading-[21px] text-white">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {featuredArticleCard && (
                <div
                  key={Math.random()}
                  className="inline-flex w-[300px] flex-col items-start justify-start gap-4 bg-[#003146] py-8 pl-8 pr-24"
                >
                  <div className="self-stretch font-roboto text-sm font-semibold leading-[21px] text-white">
                    {featuredArticleCard.title}
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 self-stretch py-2">
                    <Image
                      className="object-cover"
                      src={featuredArticleCard.image.src}
                      alt={featuredArticleCard.image.alt}
                      height={120}
                      width={178}
                    />
                    <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                      <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                        <div className="self-stretch font-roboto text-base">
                          {featuredArticleCard.label}
                        </div>
                        <div className="line-clamp-2 self-stretch text-sm font-normal leading-[21px] text-white">
                          {featuredArticleCard.description}
                        </div>
                      </div>
                      <Link
                        href={featuredArticleCard.link.href}
                        className="font-roboto text-sm font-normal leading-[21px] text-[#009fba] underline"
                      >
                        {featuredArticleCard.link.label}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
