import Image from "next/image";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90svh] items-center justify-start bg-black/80 px-4 pt-[80px] sm:px-8 md:px-12 lg:px-16">
      <Image
        src="/img/header.jpg"
        alt="Background image of a mountain"
        priority
        fill
        className="-z-10 select-none object-cover object-bottom"
        sizes="100vw"
      />
      <div className="mx-auto max-w-7xl md:mx-0">
        <div className="flex flex-col gap-8 py-12 sm:py-16 md:max-w-[560px] lg:py-20">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <h1 className="self-stretch text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.2]">
              Mastering Development for Innovative Solutions
            </h1>
            <p className="self-stretch text-base font-normal leading-relaxed text-white sm:text-lg md:text-xl md:leading-[30px]">
              Byron Mandela specializes in web scraping, data extraction, and
              Django backend development—delivering automation and scalable
              solutions to clients worldwide.
            </p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <Link
              href={"/about-me"}
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "border border-[#009fba] bg-[#003146] text-white"
              )}
            >
              Learn More
            </Link>
            <Button variant="secondaryOutline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
