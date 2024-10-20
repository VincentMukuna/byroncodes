import { Logo } from "./icons/logo";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] w-full items-center justify-between border-border/40 bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-16">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Logo className="size-20" />
        <MainNav />
      </div>
      <MobileNav />
      <div className="hidden gap-4 md:flex">
        <Button variant={"outline"}>Join</Button>
        <Button>Explore</Button>
      </div>
    </header>
  );
}
