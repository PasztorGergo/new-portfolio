"use client";

import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

const Role = ({
  children,
  mv,
  number,
}: {
  children: React.ReactNode;
  mv: number;
  number: number;
}) => {
  const motionValue = useSpring(mv);
  let yCoor: MotionValue<number> = useTransform(motionValue, (latest) => {
    let height = 36;
    let placeValue = latest % 3;
    let offset = number - placeValue;

    let memo = offset * height;

    if (offset > 1) {
      memo -= 3 * height;
    }

    return memo;
  });
  return (
    <motion.p
      className="absolute inset-0 flex justify-center text-center text-[clamp(24px,10vw,1.5rem)] font-bold"
      initial={{ y: yCoor.get() }}
      animate={{
        y: (number + motionValue.get()) * yCoor.get(),
        transition: { type: "spring", damping: 12, stiffness: 60 },
      }}
    >
      {children}
    </motion.p>
  );
};

export default Role;
