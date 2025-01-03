import Image from "next/image";
import Link from "next/link";

import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { ScaleWhenVisible } from "@/components/animations/scale-when-visible";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#201b1b] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <StaggerChildren className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <StaggerChildren className="flex flex-col items-start justify-start gap-8 lg:max-w-[50%]">
            <FadeInWhenVisible
              variants={itemVariants}
              className="font-poppins text-3xl font-semibold leading-tight"
            >
              Join Me on My Journey: A Passionate Software Developer Committed
              to Crafting Excellence.
            </FadeInWhenVisible>
            <FadeInWhenVisible
              variants={itemVariants}
              className="prose dark:prose-invert lg:prose-xl"
            >
              <p className="font-poppins text-lg font-normal leading-relaxed">
                I&apos;m Byron Mandela, a developer passionate about building
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
                , I&apos;ve earned a reputation for delivering high-quality,
                time-sensitive results. Whether pulling insights from the web or
                designing robust backends, I take pride in transforming
                challenges into actionable solutions.
              </p>
            </FadeInWhenVisible>
          </StaggerChildren>
          <ScaleWhenVisible
            variants={imageVariants}
            className="relative aspect-square w-full overflow-hidden rounded-[30px] lg:w-[45%]"
          >
            <Image
              className="object-cover object-[left_30%] transition-transform duration-300 ease-in-out hover:scale-105"
              alt="Image of byron smiling at the camera"
              priority
              fill
              src="/img/profile-image.jpg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ScaleWhenVisible>
        </div>
      </StaggerChildren>
    </section>
  );
}
