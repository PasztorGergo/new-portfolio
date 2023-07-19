"use client";
import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";

import { DiHtml5, DiCss3, DiSass, DiReact, DiMongodb } from "react-icons/di";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiCsharp,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiGithub,
  SiGraphql,
  SiWordpress,
} from "react-icons/si";
import { format } from "date-fns";

const icons = {
  HTML: <DiHtml5 size={20} key="HTML" />,
  CSS: <DiCss3 size={20} key="CSS" />,
  Tailwind: <SiTailwindcss size={20} key="Tailwind" />,
  JavaScript: <SiJavascript size={20} key="JavaScript" />,
  TypeScript: <SiTypescript size={20} key="TypeScript" />,
  Sass: <DiSass size={20} key="Sass" />,
  React: <DiReact size={20} key="React" />,
  Next: <SiNextdotjs size={20} key="Next" />,
  MongoDB: <DiMongodb size={20} key="MongoDB" />,
  Firebase: <SiFirebase size={20} key="Firebase" />,
  Node: <SiNodedotjs size={20} key="Node" />,
  Csharp: <SiCsharp size={20} key="CSharp" />,
  GraphQL: <SiGraphql size={20} key="GraphQL" />,
  WordPress: <SiWordpress size={20} key="WordPress" />,
};

type Props = {
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
};

export default function ProjectCard({
  desc,
  img,
  status,
  tech,
  title,
  date,
  href,
  source,
  highLight,
  alt,
}: Props) {
  return (
    <div
      className={`bg-[hsl(230,10%,22%)] rounded-3xl p-4 flex flex-col items-center gap-4 justify-between ${
        highLight ? "0px 0px 1rem -0.5rem #00B25A" : "none"
      }`}
    >
      <Image
        width={1600}
        height={900}
        src={img}
        alt={alt}
        className="w-auto h-48 rounded-lg"
      />
      <h2 className="font-bold text-center text-xl tracking-wide">{title}</h2>
      <p className="uppercase text-brand">
        {status === "fresh"
          ? "Just kicked off"
          : status === "since"
          ? //@ts-ignore
            `Launched in ${format(date, "LLLL yyyy")}`
          : "Under construction"}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {tech.map((x, i) => (
          <div className="flex items-center gap-1" key={i}>
            {icons[x]} <p className="font-bold text-sm">{x}</p>
          </div>
        ))}
      </div>
      <p className="text-center">{desc}</p>
      <div className="flex items-center justify-between">
        <a
          href={href}
          className="px-4 py-2 rounded-lg bg-brand hover:bg-opacity-80"
        >
          {href.replace("https://", "").length > 24
            ? `${href.replace("https://", "").slice(0, 24)}...`
            : href.replace("https://", "")}
        </a>
        {source && (
          <a
            href={source}
            className="px-4 py-2 rounded-lg bg-brand hover:bg-opacity-80"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
}
