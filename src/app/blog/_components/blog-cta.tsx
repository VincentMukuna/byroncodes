import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BlogCta() {
  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="max-w-3xl">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <h2 className="font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
              Stay Updated with Our Blog
            </h2>
            <p className="font-poppins text-lg font-normal leading-relaxed text-white sm:text-xl">
              Subscribe to receive the latest updates and insights from our blog
              directly to your inbox.
            </p>
          </div>
          <form className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Your Email Here"
                className="h-12 flex-grow border-[#ff8328] bg-transparent font-poppins text-base text-[#82cbe4] placeholder-[#82cbe4]"
                required
                aria-label="Email for blog subscription"
              />
              <Button
                type="submit"
                className="h-12 border border-[#ff8328] bg-[#ff8328] px-6 py-3 font-poppins text-base font-normal text-white hover:bg-[#ff9541]"
              >
                Join Now
              </Button>
            </div>
            <p className="font-roboto text-xs font-normal leading-[18px] text-white">
              By clicking Join Now, you agree to our Terms and Conditions.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
