import { Variants } from "framer-motion";

const staggerContainer: (delay?: number) => Variants = (delay?: number) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: delay || 0.3,
    },
  },
});

const popUp: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transformOrigin: "center",
    transition: { type: "spring", damping: 15, stiffness: 120 },
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

export { staggerContainer, fadeIn, typingContainer, typing, popUp };
