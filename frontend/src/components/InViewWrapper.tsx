import { motion } from "motion/react";
import { ComponentPropsWithoutRef } from "react";

export function InViewWrapper({
  children,
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
