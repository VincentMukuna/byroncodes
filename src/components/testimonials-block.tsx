"use client";

import Image from "next/image";
import React from "react";

import { DotFilledIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsBlock() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section className="bg-[#201b1b] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[90vw] md:max-w-4xl">
        <Carousel
          setApi={setApi}
          opts={{}}
          plugins={[Autoplay({ delay: 7000 })]}
          className="w-full"
        >
          <CarouselContent className="">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="">
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="flex flex-col items-center justify-center gap-8 p-6 text-center">
                    <div className="flex items-center justify-center gap-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <StarFilledIcon
                            key={index}
                            className="size-5 text-primary"
                          />
                        )
                      )}
                    </div>
                    <blockquote className="text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl lg:leading-[1.4]">
                      &quot; {testimonial.quote} &quot;
                    </blockquote>
                    <div className="mt-auto flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile picture`}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />
                      <div className="">
                        <p className="font-roboto text-base font-semibold leading-normal text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm font-normal leading-normal text-white sm:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden bg-transparent sm:-left-12 sm:flex" />
          <CarouselNext className="right-0 hidden bg-transparent sm:-right-12 sm:flex" />
          <div className="mt-4 flex items-center justify-center gap-4 md:gap-1">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <DotFilledIcon
                  className={cn("size-5 text-blue-light transition-[color]", {
                    "text-primary": current === index + 1,
                  })}
                />
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
