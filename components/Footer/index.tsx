import React from "react";
import { Footer as F, Text, createStyles, Group, Stack } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    background: "transparent",
    padding: "2rem clamp(0.01rem, 7rem, 7rem)",
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
      <Group sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%" }} justify="center">
          <Text>
            Made with <span className={classes.heart}>❤</span> by Gergő Pásztor
          </Text>
          <Text>&copy; 2022</Text>
        </Stack>
      </Group>
    </F>
  );
}