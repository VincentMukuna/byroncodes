"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90svh] items-center justify-start overflow-hidden bg-black/80 px-4 pt-[80px] sm:px-8 md:px-12 lg:px-16">
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/img/header.jpg"
          alt="Background image of a mountain"
          priority
          fill
          className="select-none object-cover object-bottom"
          sizes="100vw"
        />
      </motion.div>
      <div className="mx-auto max-w-7xl md:mx-0">
        <div className="flex flex-col gap-8 py-12 sm:py-16 md:max-w-[560px] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-start gap-6 self-stretch"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="self-stretch text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.2]"
            >
              Mastering Development for Innovative Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="self-stretch text-base font-normal leading-relaxed text-white sm:text-lg md:text-xl md:leading-[30px]"
            >
              Byron Mandela specializes in web scraping, data extraction, and
              Django backend development—delivering automation and scalable
              solutions to clients worldwide.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.2 }}
            className="flex items-start justify-start gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={"/about-me"}
                className={cn(
                  buttonVariants({ size: "lg", variant: "secondary" }),
                  "border border-[#009fba] bg-[#003146] text-white"
                )}
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondaryOutline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
