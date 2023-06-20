"use client";

import { motion } from "framer-motion";
import React from "react";
import { typing, typingContainer } from "utils";

const TypingText = ({ children }: { children: string }) => {
  return (
    <motion.p
      variants={typingContainer}
      initial="hidden"
      whileInView="show"
      className="md:text-lg text-base"
    >
      {Array.from(children).map((letter, i) => (
        <motion.span variants={typing} key={i}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
