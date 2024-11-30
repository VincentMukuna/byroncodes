"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const BuyMeCoffeeButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        asChild
        size="lg"
        className="bg-primary px-6 py-3 text-black hover:bg-[#ff9152] dark:text-white dark:hover:bg-[#ff7125]"
      >
        <a
          href="https://www.buymeacoffee.com/ByronCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-['Poppins'] text-xl font-medium"
        >
          <motion.span
            className="mr-3 text-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ☕
          </motion.span>
          Buy me a coffee
        </a>
      </Button>
    </motion.div>
  );
};

export default BuyMeCoffeeButton;
