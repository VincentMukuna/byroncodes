import Image from "next/image";

import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { ScaleWhenVisible } from "@/components/animations/scale-when-visible";
import { StaggerChildren } from "@/components/animations/stagger-children";

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
              My name is Byron Mandela, and I&apos;m a Backend Developer
              specializing in Django, FastAPI, Shopify Backend Development, and
              Web Scraping.
            </FadeInWhenVisible>
            <FadeInWhenVisible
              variants={itemVariants}
              className="prose dark:prose-invert lg:prose-xl"
            >
              <p className="font-poppins text-lg font-normal leading-relaxed">
                With a strong focus on building efficient, scalable, and secure
                systems, I&apos;ve had the privilege of delivering solutions for
                diverse industries, including e-commerce, healthcare, and
                education.
              </p>
              <p className="font-poppins text-lg font-normal leading-relaxed">
                I am currently a Senior Software Engineer at a Shopify Plus
                store. My work primarily involves backend development for
                large-scale, mission-critical, cloud-based systems.
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
