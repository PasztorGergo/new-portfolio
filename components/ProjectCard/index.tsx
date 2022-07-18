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
import React from "react";
import { AiOutlineLink } from "react-icons/ai";

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
import { useMediaQuery } from "@mantine/hooks";
import { format } from "date-fns";

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
  title: {
    borderLeft: "4px solid #00B25A",
    paddingLeft: "1rem",
    textTransform: "capitalize",
  },
}));

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
  highLight?: boolean;
  position?: "left" | "right";
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
  position,
}: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 808px)", false);

  return (
    <Paper
      sx={{ boxShadow: highLight ? "0px 0px 1rem -0.5rem #00B25A" : "none" }}
      radius="sm"
      className={classes.paper}
      p="xl"
    >
      <Group
        grow
        sx={{
          flexDirection: breakpoint
            ? position === "right"
              ? "row-reverse"
              : "row"
            : "column",
        }}
        direction={breakpoint ? "row" : "column"}
        position="apart"
      >
        <Image
          src={img}
          alt={img}
          mx={breakpoint ? "0" : "auto"}
          radius="sm"
          height="40vh"
          sx={{ maxWidth: breakpoint ? "40%" : "100%" }}
        />
        <Stack align="start" sx={{ width: "100%" }}>
          <Text transform="uppercase" color="#00B25A">
            {status === "fresh"
              ? "Just kicked off"
              : status === "since"
              ? //@ts-ignore
                `Launched in ${format(date, "LLLL yyyy")}`
              : "Under construction"}
          </Text>
          <Title className={classes.title} order={2}>
            {title}
          </Title>
          <Group>
            {tech.map((x, i) => (
              <Group position="left" sx={{ gap: "0.2rem" }} key={i}>
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
              target="_blank"
              leftIcon={<AiOutlineLink size={24} />}
            >
              {href.replace("https://", "").length > 24
                ? `${href.replace("https://", "").slice(0, 24)}...`
                : href.replace("https://", "")}
            </Button>
            {source && (
              <Button
                className={classes.button}
                component="a"
                target="_blank"
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
  );
}
