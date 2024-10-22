import Link from "next/link";

import { Logo } from "./icons/logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] w-full items-center justify-between border-border/40 bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-16">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/">
          <Logo className="size-20" />
        </Link>
        <MainNav />
      </div>
      <MobileNav />
      <div className="hidden gap-4 lg:flex">
        <Button variant={"outline"}>Join</Button>
        <Link href={"/my-work"} className={buttonVariants()}>
          Explore
        </Link>
      </div>
    </header>
  );
}
