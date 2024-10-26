import Image from "next/image";

import {
  resourcesLinks,
  siteResources,
  socialLinks,
} from "@/data/footer-links";

import { NewsletterForm } from "./newsletter-form";

export function SiteFooter() {
  return (
    <footer className="bg-background-secondary px-4 py-8 sm:px-8 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-32">
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.png"
              alt="Logo"
              width={134}
              height={134}
              className="max-w-full"
            />
            <NewsletterForm />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:flex-1">
            <div className="flex flex-col gap-4">
              <h2 className="font-roboto text-base font-semibold leading-normal text-white">
                Resources Links
              </h2>
              <nav className="flex flex-col gap-2">
                {resourcesLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="py-2 text-sm font-normal leading-[21px] text-[#009fba]"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-roboto text-base font-semibold leading-normal text-white">
                Connect With
              </h2>
              <nav className="flex flex-col gap-2">
                {["Newsletter", "GitHub", "LinkedIn", "YouTube", "Twitter"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="py-2 text-sm font-normal leading-[21px] text-[#009fba]"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-roboto text-base font-semibold leading-normal text-white">
                Stay Social
              </h2>
              <nav className="flex flex-col gap-2">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 py-2"
                  >
                    <item.icon className="size-6 text-primary" />
                    <span className="text-sm font-normal leading-[21px] text-[#009fba]">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-8 lg:mt-20">
          <hr className="border-t border-black" />
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-normal leading-[21px] text-white">
              © 2024 ByronCodes. All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-4 sm:gap-6">
              {siteResources.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-roboto text-sm font-normal leading-[21px] text-[#009fba] underline"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
