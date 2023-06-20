"use client";
import { motion } from "framer-motion";
import React from "react";
import Anchor from "../Anchor";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { fadeIn, staggerContainer } from "utils";

export default function About() {
  return (
    <header>
      <SectionTitle>About</SectionTitle>
      <div className="flex justify-between items-center gap-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-between w-1/2 gap-2"
          viewport={{ once: false }}
        >
          <motion.p variants={fadeIn("up", 12, 60)}>
            My name is <strong>Gergő</strong> Pásztor a full-stack web developer
            from Hungary.
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            In my second year at Pattantyús-Ábrahám Géza Technical Secondary
            School, I built my first-ever website. It was the{" "}
            <strong>moment</strong> that changed my perspective and{" "}
            <strong>incentivized</strong> me to go deeper into this hole.
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            <strong>2022</strong> was the year that extremely affected me. I
            built <strong>relationships</strong> with people on Twitter and
            completed my first{" "}
            <Anchor href="https://villamostechnikai-gyujtemeny.vercel.app/">
              freelance work
            </Anchor>
            .
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            Experiences like these made me build side projects and get in touch
            with other creators.
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            If reading all of these got your attention, check out my{" "}
            <Anchor href={1000}>work</Anchor> below, and be the next one with
            who I will collaborate.
          </motion.p>
        </motion.div>
        <Image
          src="/gergo.webp"
          alt="Gergő Pásztor's photo"
          width={720}
          height={634}
          className="w-1/2 rounded-lg"
        />
      </div>
    </header>
  );
}
