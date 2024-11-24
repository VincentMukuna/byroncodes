"use client";

import React from "react";

import { Variants, motion } from "framer-motion";

import { fadeInVariants } from "@/utils/animation-variants";

interface FadeInProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  variants = fadeInVariants,
  className = "",
}) => {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};
