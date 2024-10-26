import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterForm() {
  return (
    <>
      <p className="text-base font-normal leading-normal text-white">
        Subscribe to my newsletter for the latest industry trends and insights.
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Your email here"
            className="w-full border border-primary bg-transparent text-base font-normal leading-normal text-[#82cbe4] placeholder-[#82cbe4] focus:outline-none"
            aria-label="Email for newsletter"
          />
          <Button className="bg-background-secondary" variant={"outline"}>
            Subscribe
          </Button>
        </div>
        <p className="text-xs font-normal leading-[18px] text-muted-foreground">
          By subscribing, you consent to our Privacy Policy and agree to receive
          updates.
        </p>
      </div>
    </>
  );
}
