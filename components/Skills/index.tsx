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

const skills: Array<{ name: string; icon: any }> = [
  { name: "HTML 5", icon: <DiHtml5 className="fill-[#F16529]" /> },
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
  { name: "CSS 3", icon: <DiCss3 className="fill-[#2965f1]" /> },
  { name: "React", icon: <DiReact className="fill-[#61DBFB]" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="fill-[#ffcb2f]" />,
  },
  { name: "NextJS", icon: <SiNextdotjs className="fill-white" /> },
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
];

interface ParallaxProps {
  baseVelocity: number;
}

function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 10], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-40, -20, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div className="flex opacity-80 text-[64px]" style={{ x }}>
        {skills.map((skill) => (
          <span className="block mr-4">{skill.icon}</span>
        ))}
      </motion.div>
    </div>
  );
}

//Glassmorphism and 3D cards

export default function Skills() {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        {skills.map((skill) => (
          <div className="flex flex-col w-32 h-32 text-[clamp(32px,10vw,3rem)] items-center justify-between bg-white bg-opacity-20 p-4 rounded-lg">
            {skill.icon}
            <h3 className="uppercase text-base font-bold text-center text-white text-opacity-80">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
