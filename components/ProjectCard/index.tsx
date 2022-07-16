import {
  Button,
  createStyles,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

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
} from "react-icons/si";

const useStyles = createStyles((theme) => ({
  paper: {
    background: "#ffffff0a",
  },
  button: {
    background: "#00B25A",
    "&:hover": {
      background: theme.fn.darken("#00B25A", 0.1),
    },
  },
}));

const icons = {
  HTML: <DiHtml5 size={24} key="HTML" />,
  CSS: <DiCss3 size={24} key="CSS" />,
  Tailwind: <SiTailwindcss size={24} key="Tailwind" />,
  JavaScript: <SiJavascript size={24} key="JavaScript" />,
  TypeScript: <SiTypescript size={24} key="TypeScript" />,
  Sass: <DiSass size={24} key="Sass" />,
  React: <DiReact size={24} key="React" />,
  Next: <SiNextdotjs size={24} key="Next" />,
  MongoDB: <DiMongodb size={24} key="MongoDB" />,
  Firebase: <SiFirebase size={24} key="Firebase" />,
  Node: <SiNodedotjs size={24} key="Node" />,
  Csharp: <SiCsharp size={24} key="CSharp" />,
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
  >;
  href: string;
  img: string;
  source?: string;
  desc: string;
  highLight: boolean;
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
}: Props) {
  const { classes } = useStyles();
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (highLight && inView) {
      controls.start(() => ({
        boxShadow: "0px 0px 1rem 1px #00B25Aff",
        transition: { delay: 0.3 },
      }));
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{
        boxShadow: "0px 0px 1rem 1px #00B25A00",
      }}
      ref={ref}
      animate={controls}
    >
      <Paper
        sx={{ scale: highLight ? 1.05 : 1 }}
        radius="sm"
        className={classes.paper}
        p="xl"
      >
        <Group>
          <Image src={img} alt={img} radius="sm" height="40vh" />
          <Stack>
            <Text>
              {status === "fresh"
                ? "Just launched"
                : status === "since"
                ? `Launched in ${date}`
                : "Under construction"}
            </Text>
            <Title>{title}</Title>
            <Group>
              {tech.map((x, i) => (
                <Group key={i}>
                  {icons[x]} <Text weight={600}>{x}</Text>
                </Group>
              ))}
            </Group>
            <Text>{desc}</Text>
            <Group>
              <Button
                className={classes.button}
                component="a"
                href={href}
                leftIcon={<AiOutlineLink size={24} />}
              >
                Go to {href.replace("https://", "")}
              </Button>
              {source && (
                <Button
                  className={classes.button}
                  component="a"
                  href={source}
                  leftIcon={<SiGithub size={24} />}
                >
                  Source
                </Button>
              )}
            </Group>
          </Stack>
        </Group>
      </Paper>
    </motion.div>
  );
}
