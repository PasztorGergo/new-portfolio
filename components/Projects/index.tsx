import { Box, createStyles, Stack } from "@mantine/core";
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
      <Stack mt="xl" sx={{ gap: "3rem" }}>
        <ProjectCard
          img="/project/lampMuseum.webp"
          title="Electrotechnical Collection, Hungary"
          desc="Electrotechnical Collection, Hungary is a melting pot of lamps and electronic tools gathered by Levente Csíkász."
          tech={["TypeScript", "Next", "React", "MongoDB"]}
          href="https://lamp-museum.vercel.app"
          highLight
          status="fresh"
          alt="Electrotechnical Collection, Hungary Preview"
        />
        <ProjectCard
          img="/project/weatherApp.webp"
          title="Sunnier"
          desc="Get the weather forecast up to three days in advance"
          tech={["React", "Node"]}
          href="https://weather-application-pasztorgergo.vercel.app"
          status="since"
          date={new Date(2022, 4)}
          position="right"
          alt="Sunnier Preview"
        />
        <ProjectCard
          img="/project/formified.webp"
          title="Formified"
          desc="Build HTML forms and copy-paste the code! Formified is a HTML generator for forms."
          tech={["Next", "Tailwind", "Sass"]}
          href="https://formified.vercel.app"
          status="wip"
          alt="Formified Preview"
        />
      </Stack>
    </section>
  );
}
