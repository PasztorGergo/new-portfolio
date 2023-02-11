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
    <F className={classes.footer} height="30vh" sx={{ border: "none" }}>
      <Stack sx={{ height: "100%", width: "100%" }} justify="center">
        <Text>
          Made by Gergő Pásztor with <span className={classes.heart}>❤</span>
        </Text>
        <Text>&copy; 2022</Text>
      </Stack>
    </F>
  );
}
