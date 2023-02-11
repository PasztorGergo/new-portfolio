"use client";
import React from "react";
import { createStyles } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  a: {
    cursor: "pointer",
    color: "#00B25Aaf",
    boxShadow: "0 0 0 0 #00B25A inset",
    transition: "all 150ms ease-in",
    display: "inline-block",
    "&:hover": {
      color: "#00B25Aff",
      boxShadow: "0 -3px 0 0 #00B25A inset",
      transform: "translate(0, -2px)",
    },
  },
}));

type Props = {
  children: React.ReactNode;
  href: string | number;
};

export default function Anchor({ children, href }: Props) {
  const [scrollPos, scrollTo] = useWindowScroll();
  const { classes } = useStyles();

  return typeof href === "number" ? (
    <a
      className={classes.a}
      onClick={() => {
        scrollTo({ y: href });
      }}
    >
      {children}
    </a>
  ) : (
    <a className={classes.a} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
