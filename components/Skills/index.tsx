import React from "react";
import SectionTitle from "../SectionTitle";
import { Box, createStyles, Group, Text } from "@mantine/core";
import { DiHtml5, DiCss3, DiSass, DiReact, DiMongodb } from "react-icons/di";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiCsharp,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const useStyles = createStyles((theme) => ({
  section: {},
  skill: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontWeight: 600,
    marginTop: "1rem",
  },
}));

type Props = {};

export default function Skills({}: Props) {
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <SectionTitle>Skills</SectionTitle>
      <Text mt="xl">The list of languages and services that I can use.</Text>
      <Group mt="xl" position="left" noWrap={false} sx={{ gap: "3rem" }}>
        <Box className={classes.skill}>
          <DiHtml5 size={80} />
          <Text className={classes.name} transform="uppercase">
            HTML
          </Text>
        </Box>
        <Box className={classes.skill}>
          <DiCss3 size={80} />
          <Text className={classes.name} transform="uppercase">
            CSS
          </Text>
        </Box>
        <Box className={classes.skill}>
          <SiJavascript size={80} />
          <Text className={classes.name}>JavaScript</Text>
        </Box>
        <Box className={classes.skill}>
          <SiTypescript size={80} />
          <Text className={classes.name}>TypeScript</Text>
        </Box>
        <Box className={classes.skill}>
          <SiTailwindcss size={80} />
          <Text className={classes.name}>TailwindCSS</Text>
        </Box>
        <Box className={classes.skill}>
          <DiSass size={80} />
          <Text className={classes.name}>Sass</Text>
        </Box>
        <Box className={classes.skill}>
          <DiReact size={80} />
          <Text className={classes.name}>ReactJS</Text>
        </Box>
        <Box className={classes.skill}>
          <SiNextdotjs size={80} />
          <Text className={classes.name}>NextJS</Text>
        </Box>
        <Box className={classes.skill}>
          <SiNodedotjs size={80} />
          <Text className={classes.name}>Node</Text>
        </Box>
        <Box className={classes.skill}>
          <DiMongodb size={80} />
          <Text className={classes.name}>MongoDB</Text>
        </Box>
        <Box className={classes.skill}>
          <SiCsharp size={80} />
          <Text className={classes.name}>C#</Text>
        </Box>
        <Box className={classes.skill}>
          <SiFirebase size={80} />
          <Text className={classes.name}>Firebase</Text>
        </Box>
      </Group>
    </section>
  );
}
