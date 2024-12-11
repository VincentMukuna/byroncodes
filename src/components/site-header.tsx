import Link from "next/link";

import { getCategories } from "@/data/categories";
import { getHighlightedPost, queryPosts } from "@/data/posts";
import { cn } from "@/lib/utils";

import { Logo } from "./icons/logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";

export async function SiteHeader({ className }: { className?: string }) {
  const latestBlogPosts = await queryPosts({ title: "", limit: 4 });
  const categories = await getCategories();
  const featuredArticle = await getHighlightedPost();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-[72px] w-full items-center justify-between border-border/40 bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-16",
        className
      )}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/">
          <Logo className="size-20" />
        </Link>
        <MainNav
          categories={categories}
          latestBlogPosts={latestBlogPosts.docs}
          featuredArticle={featuredArticle}
        />
      </div>
      <MobileNav
        categories={categories}
        latestBlogPosts={latestBlogPosts.docs}
        featuredArticle={featuredArticle}
      />
      <div className="hidden gap-4 lg:flex">
        <Button variant={"outline"} asChild>
          <a href={"#newsletter-email"}>Join</a>
        </Button>
        <Link href={"/my-work"} className={buttonVariants()}>
          Explore
        </Link>
      </div>
    </header>
  );
}
