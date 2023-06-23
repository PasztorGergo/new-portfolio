"use client";
import React from "react";
import { Footer as F, Text, createStyles, Group, Stack } from "@mantine/core";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  footer: {
    background: "transparent",
    [theme.fn.largerThan("md")]: {
      padding: "2rem 7rem",
    },
    [theme.fn.smallerThan("md")]: {
      padding: "2rem 1rem",
      "& *": {
        textAlign: "center",
      },
    },
  },
  heart: {
    color: "transparent",
    textShadow: `0 0 ${theme.colors.red[6]}`,
    fontSize: "1.25rem",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <footer className="md:h-[20vh]">
      <div className="h-full w-full flex justify-center">
        <p className="text-center h-full w-full">
          Made by Gergő Pásztor with{" "}
          <span className="text-transparent [text-shadow:]">❤</span> &copy; 2022
        </p>
      </div>
    </footer>
  );
}
