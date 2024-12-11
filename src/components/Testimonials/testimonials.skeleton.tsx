"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSkeleton() {
  return (
    <section className="bg-[#201b1b] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[90vw] md:max-w-4xl">
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(3)].map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="flex flex-col items-center justify-center gap-8 p-6 text-center">
                    <div className="flex items-center justify-center gap-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <Skeleton
                          key={starIndex}
                          className="h-5 w-5 rounded-full"
                        />
                      ))}
                    </div>
                    <Skeleton className="h-24 w-full rounded-md" />
                    <div className="mt-auto flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                      <Skeleton className="h-14 w-14 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 hidden bg-transparent sm:-left-12 sm:flex" />
          <CarouselNext className="right-0 hidden bg-transparent sm:-right-12 sm:flex" />
        </Carousel>
        <div className="mt-4 flex items-center justify-center gap-4 md:gap-1">
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} className="h-5 w-5 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
