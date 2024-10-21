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
import { hasNestedItems } from "@/types/header-nav";

import { BxBxsCube } from "./icons/cube";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
            if (!hasNestedItems(link)) {
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
            }
            return (
              <Collapsible key={link.label}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 text-lg hover:bg-transparent active:bg-transparent"
                  >
                    <span className="text-blue-light">{link.label}</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-4 pl-0">
                  {link.menuItems?.map((menuItem) => (
                    <div key={menuItem.title} className="space-y-4">
                      <h3 className="font-roboto text-base font-semibold text-white">
                        {menuItem.title}
                      </h3>
                      <div className="space-y-4">
                        {menuItem.items.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-3"
                          >
                            <BxBxsCube className="h-6 w-6 text-primary" />
                            <div>
                              <h4 className="font-roboto text-base font-semibold text-[#009fba]">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="h-96 space-y-4 bg-blue-dark p-6">
                    <h3 className="font-roboto font-semibold text-white">
                      Featured Articles
                    </h3>
                    <div className="space-y-2">
                      <Image
                        src="/img/business-solutions.jpg"
                        alt="Image of partners shaking hands"
                        height={120}
                        width={178}
                        className="object-cover"
                      />
                      <div>
                        <h4 className="font-roboto text-base font-semibold text-[#ff8328]">
                          Tech Trends
                        </h4>
                        <p className="font-poppins text-sm text-white">
                          Latest trends shaping the tech industry.
                        </p>
                        <Link
                          href="#"
                          onClick={() => setOpen(false)}
                          className="font-roboto text-sm text-[#009fba] underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </nav>
        <div className="grid gap-3">
          <Button variant={"outline"}>Join</Button>
          <Button>Explore</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
