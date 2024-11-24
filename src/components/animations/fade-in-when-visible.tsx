"use client";

import React from "react";

import { Variants, motion, useAnimation, useInView } from "framer-motion";

import { fadeInVariants } from "@/utils/animation-variants";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  variants = fadeInVariants,
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
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
