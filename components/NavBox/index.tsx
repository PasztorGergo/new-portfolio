import Link from "next/link";
import React from "react";
import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  triangle: {
    background: theme.colors.blue[4],
    aspectRatio: "1/1",
    width: "1.25rem",
    position: "relative",
  },
  text: {
    position: "absolute",
    left: "100%",
    top: 0,
    height: "100%",
  },
}));

export default function NavBox({ href, children }: any) {
  const { classes } = useStyle();
  return (
    <div className={classes.triangle}>
      <a href={`#${href}`} className={classes.text}>
        {children}
      </a>
    </div>
  );
}
