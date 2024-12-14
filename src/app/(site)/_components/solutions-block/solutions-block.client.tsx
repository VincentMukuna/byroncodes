"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import { Solution } from "@/payload-types";

const solutionsConfig = {
  title:
    "Unlock Your Potential with Expert Software Development Services Tailored for You",
  description:
    "As a freelance software developer, I specialize in creating custom applications that meet your unique needs. My focus is on delivering high-quality code and exceptional user experiences. Let's collaborate to bring your ideas to life!",
};

export function SolutionsBlockClient({ solutions }: { solutions: Solution[] }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  return (
    <section className="bg-black px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[32px] font-semibold leading-10 text-[#ff8328] md:text-4xl lg:text-[38px] lg:leading-[1.2]"
          >
            {solutionsConfig.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg font-normal leading-relaxed text-white md:text-xl"
          >
            {solutionsConfig.description}
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-12 grid gap-x-8 gap-y-10 sm:mt-16 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => {
            const imageUrl =
              typeof solution.meta?.image === "object"
                ? solution.meta?.image?.url
                : null;
            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className="flex flex-col gap-3"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={imageUrl || "/img/business-solutions.jpg"}
                    alt={`Illustration for ${solution.title}`}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {solution.title}
                  </h3>
                  <p className="text-lg font-normal leading-normal text-white">
                    {solution.meta?.description}
                  </p>
                </div>
                <motion.a
                  href={`/solutions/${solution.slug}`}
                  className="mt-auto inline-flex items-center text-base font-normal leading-normal text-white transition-colors hover:text-[#ff8328]"
                  aria-label={`${solution.ctaLabel} ${solution.title}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {solution.ctaLabel || "Learn More"}
                  <ChevronRightIcon className="ml-2 h-5 w-5 text-primary" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
