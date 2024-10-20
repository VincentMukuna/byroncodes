"use client";

import Image from "next/image";
import React from "react";

import { DotFilledIcon } from "@radix-ui/react-icons";
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
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Working with this developer was a game-changer for our project. Their expertise and dedication exceeded our expectations!",
    name: "Alice Johnson",
    role: "Project Manager, TechCorp",
    image: "/img/jenny.jpg",
  },
  {
    quote:
      "The quality of work delivered was outstanding. I highly recommend their services to anyone looking for a reliable developer!",
    name: "Mark Smith",
    role: "CEO, InnovateX",
    image: "/img/jenny.jpg",
  },
  {
    quote:
      "Incredible problem-solving skills and attention to detail. Our app's performance improved significantly after their involvement.",
    name: "Emily Chen",
    role: "CTO, FutureTech",
    image: "/img/jenny.jpg",
  },
];

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
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-transparent">
                  <CardContent className="flex flex-col items-center justify-center gap-8 p-6 text-center">
                    <blockquote className="text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl lg:leading-[1.4]">
                      &quot; {testimonial.quote} &quot;
                    </blockquote>
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name}'s profile picture`}
                        width={56}
                        height={56}
                        className="rounded-full"
                      />
                      <div className="">
                        <p className="font-['Roboto'] text-base font-semibold leading-normal text-white">
                          {testimonial.name}
                        </p>
                        <p className="font-['Poppins'] text-sm font-normal leading-normal text-white sm:text-base">
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
          <div className="mt-4 flex items-center justify-center">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                }}
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
