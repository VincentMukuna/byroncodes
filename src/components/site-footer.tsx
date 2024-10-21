import Image from "next/image";

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { FacebookIcon, YoutubeFilledIcon } from "./icons/logos";
import { Button } from "./ui/button";

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
            <p className="font-['Poppins'] text-base font-normal leading-normal text-white">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex h-12 grow items-center justify-start gap-2 border border-primary p-3">
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="w-full bg-transparent font-['Poppins'] text-base font-normal leading-normal text-[#82cbe4] placeholder-[#82cbe4] focus:outline-none"
                    aria-label="Email for newsletter"
                  />
                </div>
                <Button className="bg-background-secondary" variant={"outline"}>
                  Subscribe
                </Button>
              </div>
              <p className="font-['Roboto'] text-xs font-normal leading-[18px] text-white">
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:flex-1">
            <div className="flex flex-col gap-4">
              <h2 className="font-['Roboto'] text-base font-semibold leading-normal text-white">
                Resources Links
              </h2>
              <nav className="flex flex-col gap-2">
                {[
                  "Portfolio Site",
                  "Blog Posts",
                  "Contact Me",
                  "My Work",
                  "Testimonials",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="py-2 font-['Poppins'] text-sm font-normal leading-[21px] text-[#009fba]"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-['Roboto'] text-base font-semibold leading-normal text-white">
                Connect With
              </h2>
              <nav className="flex flex-col gap-2">
                {["Newsletter", "GitHub", "LinkedIn", "YouTube", "Twitter"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="py-2 font-['Poppins'] text-sm font-normal leading-[21px] text-[#009fba]"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-['Roboto'] text-base font-semibold leading-normal text-white">
                Stay Social
              </h2>
              <nav className="flex flex-col gap-2">
                {[
                  { name: "Facebook", icon: FacebookIcon },
                  { name: "Instagram", icon: InstagramLogoIcon },
                  { name: "X", icon: TwitterLogoIcon },
                  { name: "LinkedIn", icon: LinkedInLogoIcon },
                  { name: "YouTube", icon: YoutubeFilledIcon },
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center gap-3 py-2"
                  >
                    <item.icon className="size-6 text-primary" />
                    <span className="font-['Poppins'] text-sm font-normal leading-[21px] text-[#009fba]">
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
            <p className="font-['Poppins'] text-sm font-normal leading-[21px] text-white">
              © 2024 ByronCodes. All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-4 sm:gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-['Roboto'] text-sm font-normal leading-[21px] text-[#009fba] underline"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
