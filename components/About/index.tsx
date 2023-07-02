"use client";
import { motion } from "framer-motion";
import React from "react";
import Anchor from "../Anchor";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { fadeIn, staggerContainer } from "utils";
import { RiMailLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

export default function About() {
  return (
    <header>
      <SectionTitle>About</SectionTitle>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          className="flex flex-col justify-between w-full lg:w-1/2 gap-2"
          viewport={{ once: false }}
        >
          <motion.p variants={fadeIn("up", 12, 60)}>
            My name is <strong>Gergő Pásztor</strong> a full-stack web developer
            from Hungary.
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            In my second year at Pattantyús-Ábrahám Géza Technical Secondary
            School, I built my first-ever website. It was the moment that
            changed my perspective and <strong>incentivized</strong> me to go
            deeper into this hole.
          </motion.p>
          <motion.p variants={fadeIn("up", 12, 60)}>
            Throught the years, I development my intrapersonal skills to get
            accustomed to challenges. So if you are looking for someone with the{" "}
            <Anchor href={1300}>skills</Anchor> below, and who is a persistent
            coffee and code enthusiast, it is time to conncet! 😉{" "}
          </motion.p>
          <motion.ul
            className="flex items-center justify-center gap-8 mt-8 w-full"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
          >
            <motion.li className="group" variants={fadeIn("up", 12, 60)}>
              <a
                href="mailto:pasztor05@gmail.com"
                className=" text-[32px]"
                aria-label="Send me a mail"
              >
                <RiMailLine className="group-hover:fill-brand fill-white transition-colors" />
              </a>
            </motion.li>
            <motion.li className="group" variants={fadeIn("up", 12, 60)}>
              <a
                href="https://twitter.com/G3rgoPasztor"
                className=" text-[32px]"
                aria-label="View my Twitter profile"
              >
                <RiTwitterLine className="group-hover:fill-brand fill-white transition-colors" />
              </a>
            </motion.li>
            <motion.li className="group" variants={fadeIn("up", 12, 60)}>
              <a
                href="https://www.linkedin.com/in/gerg%C5%91-p%C3%A1sztor-a0aa41214/"
                className=" text-[32px]"
                aria-label="View my LinkedIn profile"
              >
                <RiLinkedinLine className="group-hover:fill-brand fill-white transition-colors" />
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 12, 60)}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false }}
          className="w-full sm:w-1/2 "
        >
          <Image
            src="/gergo.webp"
            alt="Gergő Pásztor's photo"
            width={720}
            height={634}
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </header>
  );
}
