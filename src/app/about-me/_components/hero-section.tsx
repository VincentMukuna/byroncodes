import Image from "next/image";
import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="bg-[#201b1b] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start justify-start gap-8 lg:max-w-[50%]">
            <h1 className="font-poppins text-3xl font-semibold leading-tight">
              Join Me on My Journey: A Passionate Software Developer Committed
              to Crafting Excellence.
            </h1>
            <div className="prose lg:prose-xl dark:prose-invert">
              <p className="font-poppins text-lg font-normal leading-relaxed">
                I’m Byron Mandela, a developer passionate about building
                efficient solutions for real-world problems. My expertise spans
                <strong className="ml-1">web scraping</strong>,{" "}
                <strong className="ml-1">data extraction</strong>, and{" "}
                <strong className="ml-1">Django backend development</strong>
                —offering streamlined automation and scalable backend systems.
              </p>
              <p className="font-poppins text-lg font-normal leading-relaxed">
                Having collaborated with numerous clients on{" "}
                <Link
                  href={siteConfig.links.upwork}
                  target="_blank"
                  className="inline-flex items-center gap-1"
                >
                  <strong>Upwork</strong>
                  <ExternalLinkIcon className="size-5" />
                </Link>
                , I’ve earned a reputation for delivering high-quality,
                time-sensitive results. Whether pulling insights from the web or
                designing robust backends, I take pride in transforming
                challenges into actionable solutions.
              </p>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[30px] lg:w-[45%]">
            <Image
              className="object-cover object-[left_30%] transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Image of byron smiling at the camera"
              priority
              fill
              src="/img/byron-about.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
