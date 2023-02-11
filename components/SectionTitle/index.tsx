"use client";

import { createStyles, Title } from "@mantine/core";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: React.ReactNode;
};

const useStyles = createStyles((theme) => ({
  title: {
    maxWidth: "min-content",
    padding: "0 1rem 0.5rem 0",
    marginBottom: "2rem",
  },
}));

export default function SectionTitle({ children }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(() => ({
        borderRight: "4px solid #00B25A",
        transition: { duration: 0.4, delay: 0.3 },
      }));
      controls.start(() => ({
        borderBottom: "4px solid #00B25A",
        transition: { delay: 0.5, duration: 0.4 },
      }));
      controls.start(() => ({
        transition: { delay: 1, duration: 0.4 },
        color: "#fff",
      }));
    }
  }, [inView, controls]);

  const { classes } = useStyles();
  return (
    <motion.div
      className={classes.title}
      initial={{
        borderRight: "0px solid #00000000",
        borderBottom: "0px solid #00000000",
        color: "#00000000",
      }}
      animate={controls}
      ref={ref}
    >
      <Title order={2}>{children}</Title>
    </motion.div>
  );
}
