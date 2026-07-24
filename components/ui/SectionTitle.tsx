"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <motion.h2
      className="section-title mb-8 text-center text-3xl font-bold leading-tight text-aqua-dark sm:mb-10 sm:text-4xl md:mb-12"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
}
