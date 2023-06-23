"use client";

import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "utils";
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
    img: "/project/practomusicCover.png",
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
    href: "https://villamostechnikai-gyujtemeny.vercel.app/",
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
    <section className="overflow-hidden grid grid-cols-2 grid-rows-[auto] gap-8">
      <SectionTitle className="row-start-1 col-start-1 col-span-2">
        Projects
      </SectionTitle>
      <div className="row-start-2 col-start-1 col-span-2 flex lg:hidden flex-col overflow-hidden items-stretch justify-center gap-8">
        {projects.map((props) => (
          <ProjectCard key={props.title} {...props} />
        ))}
      </div>
      <motion.div
        initial="hidden"
        variants={staggerContainer()}
        className="hidden w-full h-fit lg:flex flex-col gap-8 row-start-2 col-start-1"
      >
        {projects.slice(0, 3).map((props) => (
          <motion.div
            viewport={{ once: false }}
            variants={fadeIn("up", 12, 60)}
            initial="hidden"
            whileInView="show"
            key={props.title}
          >
            <ProjectCard {...props} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        variants={staggerContainer()}
        className="hidden w-full h-fit lg:flex flex-col gap-8 row-start-2 col-start-2"
      >
        {projects.slice(3).map((props) => (
          <motion.div
            viewport={{ once: false }}
            variants={fadeIn("up", 12, 60)}
            initial="hidden"
            whileInView="show"
            key={props.title}
          >
            <ProjectCard {...props} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
