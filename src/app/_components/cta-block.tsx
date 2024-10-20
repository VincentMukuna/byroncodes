import { Button } from "@/components/ui/button";

export function CtaBlock() {
  return (
    <section className="bg-black px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg border border-gray-800 p-6 sm:p-8 md:p-12 lg:flex-row">
          <div className="flex flex-col items-start justify-start gap-4 lg:max-w-2xl">
            <h2 className="font-['Poppins'] text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[38px] md:leading-[1.2]">
              Let&apos;s Connect and Collaborate!
            </h2>
            <p className="font-['Poppins'] text-lg font-normal leading-7 text-white sm:text-xl sm:leading-8">
              Follow me on social media or reach out directly.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button size="lg">Contact</Button>
            <Button variant="outline" size="lg">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
