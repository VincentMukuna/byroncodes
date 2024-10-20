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
    <div className="ml-4 hidden gap-3 font-poppins md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {headerNavLinks.map((link) => {
            if (!hasNestedItems(link)) {
              return (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-blue-light"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger className="text-blue-light">
                  {link.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex gap-8 pl-16">
                  {link.menuItems ? (
                    link.menuItems!.map((menuItem) => {
                      if (menuItem.isCard) {
                        return (
                          <div
                            key={menuItem.label}
                            className="inline-flex h-[477px] w-[416px] flex-col items-start justify-start gap-4 bg-[#003146] py-8 pl-8 pr-24"
                          >
                            <div className="self-stretch font-['Roboto'] text-sm font-semibold leading-[21px] text-white">
                              Featured Articles
                            </div>
                            <div className="flex h-[269px] flex-col items-start justify-start gap-4 self-stretch py-2">
                              <img
                                className="h-[120px] w-[178px]"
                                src="https://via.placeholder.com/178x120"
                              />
                              <div className="flex h-[78px] flex-col items-start justify-start gap-2 self-stretch">
                                <div className="flex h-[49px] flex-col items-start justify-start gap-1 self-stretch">
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
                        );
                      } else {
                        return (
                          <div
                            key={link.label}
                            className="inline-flex h-[413px] flex-col items-start justify-start gap-4 py-8"
                          >
                            <div className="self-stretch font-['Roboto'] text-sm font-semibold leading-[21px] text-white">
                              Explore My Work
                            </div>
                            <div className="flex flex-col items-start justify-start gap-4">
                              <div className="inline-flex h-[82px] w-72 items-start justify-start gap-3 py-2">
                                <BxBxsCube className="relative size-6 text-primary" />
                                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                                  <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#009fba]">
                                    Projects
                                  </div>
                                  <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                                    Discover my latest projects and
                                    achievements.
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex h-[82px] w-72 items-start justify-start gap-3 py-2">
                                <BxBxsCube className="relative size-6 text-primary" />
                                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                                  <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#009fba]">
                                    Testimonials
                                  </div>
                                  <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                                    What my clients say about my work.
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex h-[82px] w-72 items-start justify-start gap-3 py-2">
                                <BxBxsCube className="relative size-6 text-primary" />
                                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                                  <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#009fba]">
                                    Contact Me
                                  </div>
                                  <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                                    Get in touch for collaboration
                                    opportunities.
                                  </div>
                                </div>
                              </div>
                              <div className="inline-flex h-[82px] w-72 items-start justify-start gap-3 py-2">
                                <BxBxsCube className="relative size-6 text-primary" />
                                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start">
                                  <div className="self-stretch font-['Roboto'] text-base font-semibold leading-normal text-[#009fba]">
                                    Blog
                                  </div>
                                  <div className="self-stretch font-['Poppins'] text-sm font-normal leading-[21px] text-white">
                                    Insights and experiences shared through my
                                    blog.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })
                  ) : (
                    <div className="grid grid-flow-col gap-3 bg-blue-400 p-8 pr-20">
                      <div className="text-sm">{link.label}</div>
                    </div>
                  )}
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
