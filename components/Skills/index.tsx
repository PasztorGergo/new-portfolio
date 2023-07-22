"use client";

import React, { useRef } from "react";
import SectionTitle from "../SectionTitle";
import { DiHtml5, DiCss3, DiSass, DiReact, DiMongodb } from "react-icons/di";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiCsharp,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiWordpress,
  SiGraphql,
  SiJest,
  SiTestinglibrary,
  SiCypress,
} from "react-icons/si";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { popUp, staggerContainer } from "utils";

const skills: Array<{ name: string; icon: any }> = [
  { name: "HTML 5", icon: <DiHtml5 className="fill-[#F16529]" /> },
  { name: "CSS 3", icon: <DiCss3 className="fill-[#2965f1]" /> },
  { name: "Sass", icon: <DiSass className="fill-[#c69]" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="fill-[#01b7d6]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="fill-[#f7e018]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="fill-[#3178c6]" />,
  },
  { name: "React", icon: <DiReact className="fill-[#61DBFB]" /> },
  { name: "NextJS", icon: <SiNextdotjs className="fill-white" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="fill-[#ffcb2f]" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="fill-[#e535ab]" />,
  },
  {
    name: "WordPress",
    icon: <SiWordpress className="fill-[#21759B]" />,
  },
  { name: "C#", icon: <SiCsharp className="fill-white" /> },
  {
    name: "NodeJS",
    icon: <SiNodedotjs className="fill-[#68A063]" />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="fill-[#00ed64]" />,
  },
  {
    name: "Jest",
    icon: <SiJest className="fill-[hsl(336,24%,42%)]" />,
  },
  {
    name: "Testing Library",
    icon: <SiTestinglibrary className="fill-[#f1719e]" />,
  },
  {
    name: "Cypress",
    icon: <SiCypress className="fill-white" />,
  },
];

export default function Skills() {
  return (
    <section className="z-[2]">
      <SectionTitle>Skills</SectionTitle>
      <motion.div
        variants={staggerContainer(0.075)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="flex flex-wrap items-center gap-4 justify-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={popUp}
            className="flex flex-col w-32 h-32 text-[clamp(32px,10vw,3rem)] items-center justify-between bg-white bg-opacity-[0.18] border border-white border-opacity-[0.19] backdrop-blur p-4 rounded-lg"
          >
            {skill.icon}
            <h3 className="uppercase text-base font-bold text-center text-white text-opacity-80">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
