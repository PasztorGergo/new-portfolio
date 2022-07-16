import { Box, createStyles } from "@mantine/core";
import React from "react";
import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";

const useStyles = createStyles((theme) => ({
  section: {
    margin: "4rem auto",
  },
}));

export default function Projects() {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <SectionTitle>Projects</SectionTitle>
      <Box mt="xl">
        <ProjectCard
          img="/gergo.jpg"
          title="test"
          desc="test"
          tech={["CSS", "JavaScript"]}
          href="/"
          highLight
          status="wip"
        />
      </Box>
    </section>
  );
}
