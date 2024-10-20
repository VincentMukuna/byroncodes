import Image from "next/image";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90svh] items-center justify-start bg-black/80 px-4 sm:px-8 md:px-12 lg:px-16">
      <Image
        src="/img/bot.jpg"
        alt="Background image of a bot"
        priority
        fill
        className="-z-10 object-cover"
        sizes="100vw"
      />
      <div className="mx-auto max-w-7xl md:mx-0">
        <div className="flex flex-col items-center justify-start gap-8 py-12 sm:py-16 md:max-w-[560px] md:items-start lg:py-20">
          <div className="flex flex-col items-start justify-start gap-6 self-stretch">
            <h1 className="self-stretch font-['Poppins'] text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.2]">
              Crafting Innovative Software Solutions for You
            </h1>
            <p className="self-stretch font-['Poppins'] text-base font-normal leading-relaxed text-white sm:text-lg md:text-xl md:leading-[30px]">
              Welcome to my portfolio! As a freelance software developer, I
              specialize in creating custom applications that meet your unique
              needs.
            </p>
          </div>
          <div className="flex items-start justify-start gap-4">
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
            <Button variant="secondaryOutline" size="lg">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
