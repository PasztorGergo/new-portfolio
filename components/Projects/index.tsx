"use client";

import { Stack } from "@mantine/core";
import React from "react";
import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";

export default function Projects() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <Stack mt="xl" sx={{ gap: "3rem" }}>
        <ProjectCard
          img="/project/Gradicol.webp"
          title="Gradicol"
          desc="Browse catchy linear gradients and copy the source code only with one click."
          tech={["TypeScript", "Next", "React", "Tailwind"]}
          href="https://gradicol.vercel.app"
          status="fresh"
          alt="Gradicol"
        />
        <ProjectCard
          img="/project/lampMuseum.webp"
          title="Electrotechnical Collection, Hungary"
          desc="Electrotechnical Collection, Hungary is a melting pot of lamps and electronic tools gathered by Levente Csíkász."
          tech={["TypeScript", "Next", "React"]}
          href="https://villamostechnikai-gyujtemeny.vercel.app/"
          status="since"
          date={new Date(2023, 0)}
          position="right"
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
          position="right"
        />
      </Stack>
    </section>
  );
}
