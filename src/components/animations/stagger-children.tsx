"use client";

import React from "react";

import { Variants, motion, useAnimation, useInView } from "framer-motion";

import { staggerContainerVariants } from "@/utils/animation-variants";

interface StaggerChildrenProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  variants = staggerContainerVariants,
  className = "",
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
