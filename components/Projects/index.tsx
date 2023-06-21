"use client";

import { Stack } from "@mantine/core";
import React from "react";
import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";

const projects: Array<{
  title: string;
  status: "wip" | "fresh" | "since";
  date?: Date;
  tech: Array<
    | "HTML"
    | "CSS"
    | "Tailwind"
    | "JavaScript"
    | "TypeScript"
    | "Sass"
    | "React"
    | "Next"
    | "MongoDB"
    | "Firebase"
    | "Node"
    | "Csharp"
    | "GraphQL"
    | "WordPress"
  >;
  href: string;
  img: string;
  source?: string;
  desc: string;
  highLight?: boolean;
  alt: string;
}> = [
  {
    img: "/project/PratOMusic.webp",
    title: "Pract-o-music",
    desc: "Add your favorite songs from YouTube or import them from you device and play them everywhere with Pract-o-music!",
    tech: ["TypeScript", "Next", "React", "Tailwind"],
    href: "https://pract-o-music.vercel.app",
    status: "fresh",
    alt: "Pract-o-music",
    highLight: true,
  },
  {
    img: "/project/Gradicol.webp",
    title: "Gradicol",
    desc: "Browse catchy linear gradients and copy the source code only with one click.",
    tech: ["TypeScript", "Next", "React", "Tailwind"],
    href: "https://gradicol.vercel.app",
    status: "since",
    alt: "Gradicol",
    date: new Date(2023, 5),
  },
  {
    img: "/project/lampMuseum.webp",
    title: "Electrotechnical Collection, Hungary",
    desc: "Electrotechnical Collection, Hungary is a melting pot of lamps and electronic tools gathered by Levente Csíkász.",
    tech: ["TypeScript", "Next", "React", "GraphQL", "WordPress"],
    href: "https://gradicol.vercel.app",
    status: "since",
    alt: "Electrotechnical Collection, Hungary",
    date: new Date(2023, 0),
  },
  {
    img: "/project/weatherApp.webp",
    title: "Sunnier",
    desc: "Get the weather forecast up to three days in advance",
    tech: ["React", "Node"],
    href: "https://weather-application-pasztorgergo.vercel.app",
    status: "since",
    date: new Date(2022, 4),
    alt: "Sunnier Preview",
  },
  {
    img: "/project/formified.webp",
    title: "Formified",
    desc: "Build HTML forms and copy-paste the code! Formified is a HTML generator for forms.",
    tech: ["Next", "Tailwind", "Sass"],
    href: "https://formified.vercel.app",
    status: "wip",
    alt: "Formified Preview",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionTitle>Projects</SectionTitle>
      <Stack mt="xl" sx={{ gap: "3rem" }}>
        {projects.map((props) => (
          <ProjectCard {...props} />
        ))}
      </Stack>
    </section>
  );
}
