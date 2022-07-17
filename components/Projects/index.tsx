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
          img="/project/lampMuseum.png"
          title="Electrotechnical Collection, Hungary"
          desc="Electrotechnical Collection, Hungary is a melting pot of lamps and electronic tools gathered by Levente Csíkász."
          tech={["TypeScript", "Next", "React", "MongoDB"]}
          href="https://lamp-museum.vercel.app"
          highLight
          status="fresh"
        />
      </Box>
    </section>
  );
}
