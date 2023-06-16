"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

const Role = ({
  children,
  mv,
  number,
}: {
  children: React.ReactNode;
  mv: MotionValue<number>;
  number: number;
}) => {
  let yCoor: MotionValue<number> = useTransform(mv, (latest) => {
    let height = 32;
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
    >
      {children}
    </motion.p>
  );
};

export default Role;
