import { createStyles, Text } from "@mantine/core";
import React from "react";
import SectionTitle from "../SectionTitle";

const useStyles = createStyles((theme) => ({
  section: {
    margin: "4rem auto",
  },
}));

export default function Testimonials() {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <SectionTitle>Testimonials</SectionTitle>
      <Text>See what other say about me!</Text>
    </section>
  );
}
