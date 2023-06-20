import { Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeIn: (
  direction: "up" | "down" | "left" | "right",
  damping: number,
  stiffness: number
) => Variants = (
  direction: "up" | "down" | "left" | "right",
  damping: number = 8,
  stiffness: number = 60
) => {
  return {
    hidden: {
      x: direction === "left" ? "-3rem" : direction === "right" ? "3rem" : 0,
      y: direction === "up" ? "3rem" : direction === "down" ? "-3rem" : 0,
      opacity: 0,
    },
    show: {
      x: "0rem",
      y: "0rem",
      opacity: 1,
      transition: {
        damping,
        type: "spring",
        stiffness,
      },
    },
  };
};

const typingContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const typing: Variants = {
  hidden: {
    y: "0.5rem",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.02,
    },
  },
};

export { staggerContainer, fadeIn, typingContainer, typing };
