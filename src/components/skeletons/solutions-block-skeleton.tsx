import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Skeleton } from "@/components/ui/skeleton";

export function SolutionsBlockSkeleton() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:mt-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Skeleton className="aspect-[16/9] w-full rounded-lg" />
              <div className="flex flex-col gap-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
              <div className="mt-auto flex items-center">
                <Skeleton className="h-6 w-20" />
                <ChevronRightIcon className="ml-2 h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
