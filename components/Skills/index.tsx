"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import {
  Box,
  Group,
  MediaQuery,
  Stack,
  Text,
  Title,
  Grid,
} from "@mantine/core";
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
import { HiPencilAlt } from "react-icons/hi";

const frontend: Array<{ name: string; icon: any }> = [
  { name: "HTML 5", icon: <DiHtml5 size="3rem" /> },
  { name: "CSS 3", icon: <DiCss3 size="3rem" /> },
  { name: "Sass", icon: <DiSass size="3rem" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size="3rem" /> },
  { name: "JavaScript", icon: <SiJavascript size="3rem" /> },
  { name: "TypeScript", icon: <SiTypescript size="3rem" /> },
  { name: "React", icon: <DiReact size="3rem" /> },
  { name: "NextJS", icon: <SiNextdotjs size="3rem" /> },
];

const backend: Array<{ name: string; icon: any }> = [
  { name: "NodeJS", icon: <SiNodedotjs size="3rem" /> },
  { name: "Firebase", icon: <SiFirebase size="3rem" /> },
  { name: "MongoDB", icon: <DiMongodb size="3rem" /> },
  { name: "C#", icon: <SiCsharp size="3rem" /> },
];

const others: Array<{ name: string; icon: any }> = [
  { name: "GraphQL", icon: <SiGraphql size="3rem" /> },
  { name: "WordPress", icon: <SiWordpress size="3rem" /> },
  { name: "Blogging", icon: <HiPencilAlt size="3rem" /> },
];

type Props = {};

export default function Skills({}: Props) {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <MediaQuery styles={{ display: "none" }} largerThan="lg">
        <Stack>
          <Box sx={{ borderRadius: "0.5rem", border: "4px solid white" }} p="0">
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
                textAlign: "center",
              }}
              mb="md"
              py="md"
            >
              Front-end
            </Title>
            <Group position="center" p="lg">
              {frontend.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Box>
          <Box sx={{ borderRadius: "0.5rem", border: "4px solid white" }} p="0">
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
                textAlign: "center",
              }}
              mb="md"
              py="md"
            >
              Back-end
            </Title>
            <Group position="center" p="lg">
              {backend.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Box>
          <Box sx={{ borderRadius: "0.5rem", border: "4px solid white" }} p="0">
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
                textAlign: "center",
              }}
              mb="md"
              py="md"
            >
              Others
            </Title>
            <Group position="center" p="lg">
              {others.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Box>
        </Stack>
      </MediaQuery>
      <MediaQuery styles={{ display: "none" }} smallerThan="lg">
        <Grid
          sx={{ textAlign: "center", gap: "3rem" }}
          justify="center"
          align="stretch"
        >
          <Grid.Col
            span={3}
            sx={{ borderRadius: "0.5rem", border: "4px solid white" }}
            p="0"
          >
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
              }}
              mb="md"
              py="md"
            >
              Back-end
            </Title>
            <Group align="center" position="center" p="lg">
              {backend.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col
            span={3}
            sx={{ borderRadius: "0.5rem", border: "4px solid white" }}
            p="0"
          >
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
              }}
              mb="md"
              py="md"
            >
              Front-end
            </Title>
            <Group align="center" position="center" p="lg">
              {frontend.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Grid.Col>
          <Grid.Col
            span={3}
            sx={{ borderRadius: "0.5rem", border: "4px solid white" }}
            p="0"
          >
            <Title
              sx={{
                textTransform: "uppercase",
                width: "100%",
                background: "white",
                color: "#1c1d22",
              }}
              mb="md"
              py="md"
            >
              Others
            </Title>
            <Group align="center" position="center" p="lg">
              {others.map(({ name, icon }) => (
                <Stack align="center">
                  {icon}
                  <Text sx={{ fontWeight: "bold" }}>{name}</Text>
                </Stack>
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </MediaQuery>
    </section>
  );
}
