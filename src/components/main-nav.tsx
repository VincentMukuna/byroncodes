import Image from "next/image";

import { headerNavLinks } from "@/data/header-nav-links";
import { cn } from "@/lib/utils";
import { hasNestedItems } from "@/types/header-nav";

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

export function MainNav() {
  return (
    <div className="ml-4 hidden gap-3 font-poppins lg:flex">
      <NavigationMenu orientation="vertical">
        <NavigationMenuList>
          {headerNavLinks.map((link) => {
            if (!hasNestedItems(link)) {
              return (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-blue-light"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger className="bg-transparent text-blue-light">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex min-w-[100vw] gap-8 pl-8">
                  {link.menuItems ? (
                    link.menuItems!.map((menuItem) => {
                      return (
                        <div
                          key={menuItem.title}
                          className="inline-flex flex-col items-start justify-start gap-4 py-8"
                        >
                          <div className="self-stretch font-['Roboto'] text-sm font-semibold leading-[21px] text-white">
                            {menuItem.title}
                          </div>
                          <div className="flex flex-col items-start justify-start gap-4">
                            {menuItem.items.map((item) => (
                              <div
                                key={item.title}
                                className="inline-flex items-start justify-start gap-3 py-2"
                              >
                                <BxBxsCube className="relative size-6 text-primary" />
                                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                                  <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#009fba]">
                                    {item.title}
                                  </div>
                                  <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                                    {item.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="grid grid-flow-col gap-3 bg-blue-400 p-8 pr-20">
                      <div className="text-sm">{link.label}</div>
                    </div>
                  )}
                  <div
                    key={Math.random()}
                    className="inline-flex w-[416px] flex-col items-start justify-start gap-4 bg-[#003146] py-8 pl-8 pr-24"
                  >
                    <div className="self-stretch font-['Roboto'] text-sm font-semibold leading-[21px] text-white">
                      Featured Articles
                    </div>
                    <div className="flex flex-col items-start justify-start gap-4 self-stretch py-2">
                      <Image
                        className="object-cover"
                        src="/img/business-solutions.jpg"
                        alt="Image of partners shaking hands"
                        height={120}
                        width={178}
                      />
                      <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                        <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                          <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#ff8328]">
                            Tech Trends
                          </div>
                          <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                            Latest trends shaping the tech industry.
                          </div>
                        </div>
                        <div className="font-['Roboto'] text-sm font-normal leading-[21px] text-[#009fba] underline">
                          Read more
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}