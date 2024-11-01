import { Button } from "@/components/ui/button";

export function BlogPostCta() {
  return (
    <section className="bg-[#003146] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 font-poppins text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[45px] md:leading-[1.2]">
          Stay Connected and Share
        </h2>
        <p className="mb-8 font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
          If you found this post helpful, share it with your friends and
          subscribe for updates!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="default"
            size="lg"
            className="w-full bg-[#ff8328] text-white hover:bg-[#ff9541] sm:w-auto"
          >
            Share
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-[#ff8328] text-white hover:bg-[#ff8328] hover:text-white sm:w-auto"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
