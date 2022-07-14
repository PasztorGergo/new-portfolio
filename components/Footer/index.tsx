import React from "react";
import { Footer as F, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    background: "transparent",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  return (
    <F className={classes.footer} height="30vh" sx={{ border: "none" }}>
      <Text>Made with ❤ by Gergő Pásztor</Text>
    </F>
  );
}
