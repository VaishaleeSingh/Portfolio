"use client";

import { motion } from "framer-motion";

type FadeInSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeInSection({
  id,
  children,
  className = "",
  delay = 0,
}: FadeInSectionProps) {
  return (
    <motion.section
      id={id}
      className={`section mx-auto w-full max-w-7xl scroll-mt-28 px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-14 xl:py-24 ${className}`}
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
