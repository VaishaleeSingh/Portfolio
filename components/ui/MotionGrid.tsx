"use client";

import { motion } from "framer-motion";

type MotionGridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionGrid({
  children,
  className = "",
}: MotionGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionGridItem({ children, className = "" }: MotionGridProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 1, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
