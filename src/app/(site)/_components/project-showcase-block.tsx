"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion, useAnimation, useInView } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";

export function ProjectShowcaseBlock() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section className="bg-black px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-28">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
          <motion.div variants={itemVariants} className="w-full lg:w-1/2">
            <Image
              className="h-auto w-full rounded-[30px] object-cover"
              src="/img/web_inspo3.jpg"
              alt="web inspiration"
              width={616}
              height={640}
            />
          </motion.div>
          <div className="flex w-full flex-col items-start justify-start gap-8 lg:w-1/2">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start justify-start gap-4 self-stretch"
            >
              <div className="inline-flex items-center justify-start">
                <h2 className="font-roboto text-base font-semibold leading-normal text-white">
                  Innovative
                </h2>
              </div>
              <div className="flex flex-col items-start justify-start gap-6 self-stretch">
                <motion.h3
                  variants={itemVariants}
                  className="self-stretch text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[54px]"
                >
                  Transforming Ideas into Exceptional Software Solutions
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="self-stretch text-lg font-normal leading-relaxed text-white sm:text-xl sm:leading-[30px]"
                >
                  This project showcases a cutting-edge application that
                  streamlines user experience and enhances productivity.
                  Discover how this solution has made a significant impact in
                  the industry.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                href={"/my-work"}
                className={buttonVariants({ variant: "outline" })}
              >
                View
              </Link>
              <Link
                href={"/my-work"}
                className={buttonVariants({ variant: "ghost" })}
              >
                Explore{" "}
                <ChevronRightIcon className="ml-2 size-4 text-primary" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
