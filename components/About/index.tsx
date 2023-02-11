"use client";
import { Group, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import Anchor from "../Anchor";
import SectionTitle from "../SectionTitle";

export default function About() {
  const breakpoint = useMediaQuery("(min-width: 750px)", false);
  return (
    <section>
      <SectionTitle>About</SectionTitle>
      <Group position="apart">
        <Stack sx={{ width: breakpoint ? "50%" : "100%" }}>
          <Text>
            My name is <strong>Gergő</strong> Pásztor a full-stack web developer
            from Hungary.
          </Text>
          <Text>
            In my second year at Pattantyús-Ábrahám Géza Technical Secondary
            School, I built my first-ever website. It was the{" "}
            <strong>moment</strong> that changed my perspective and{" "}
            <strong>incentivized</strong> me to go deeper into this hole.
          </Text>
          <Text>
            <strong>2022</strong> was the year that extremely affected me. I
            built <strong>relationships</strong> with people on Twitter and
            completed my first{" "}
            <Anchor href="https://villamostechnikai-gyujtemeny.vercel.app/">
              freelance work
            </Anchor>
            .
          </Text>
          <Text>
            Experiences like these made me build side projects and get in touch
            with other creators.
          </Text>
          <Text>
            If reading all of these got your attention, check out my{" "}
            <Anchor href={1000}>work</Anchor> below, and be the next one with
            who I will collaborate.
          </Text>
        </Stack>
        <Image
          src="/gergo.png"
          radius="sm"
          alt="Gergő Pásztor's photo"
          width={breakpoint ? "30vw" : "90%"}
          height={breakpoint ? "35vw" : "25rem"}
          sx={{ marginRight: "0" }}
        />
      </Group>
    </section>
  );
}
