import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeMotionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

const FadeMotion = ({ children, direction = "up", delay = 0 }: FadeMotionProps) => {
  const variants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeMotion;
