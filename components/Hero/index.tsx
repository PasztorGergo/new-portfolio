"use client";

import React, { useEffect } from "react";
import {
  createStyles,
  Title,
  Text,
  Avatar,
  Group,
  Box,
  Button,
  ThemeIcon,
} from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { FaAt } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: "clamp(24px, 10vw, 96px)",
  },
  [theme.fn.largerThan("xs")]: {
    fontSize: "2.5rem",
  },
  section: {
    height: "100vh",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const controls = useAnimation();
  const [scrollPos, scrollTo] = useWindowScroll();
  const breakpoint = useMediaQuery("(min-width:550px)", false);

  useEffect(() => {
    controls.start((num: number) =>
      num < 6
        ? {
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 * num, duration: 1, type: "spring" },
          }
        : {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 * num, duration: 1, type: "spring" },
          }
    );
  }, []);

  return (
    <section className={classes.section}>
      <Group position="apart" sx={{ height: "100%" }}>
        <Box>
          <Text size="xl" color="#ffffff" weight="bold">
            Greetings! 👋 My name is
          </Text>
          <Title className={classes.title}>Gergő Pásztor</Title>
          <Text>I create unique websites, and applications.</Text>
          <motion.div
            custom={6}
            initial={{ opacity: 0, y: "100%" }}
            animate={controls}
            style={{ marginTop: "2rem" }}
          >
            <Button
              sx={(theme) => ({
                background: "#00B25A",
                "&:hover": {
                  background: theme.fn.darken("#00B25A", 0.1),
                },
              })}
              onClick={() => scrollTo({ y: 1600 })}
            >
              My Projects
            </Button>
          </motion.div>
        </Box>
        <motion.div
          animate={{ opacity: 1, transition: { delay: 2 } }}
          initial={{ opacity: 0 }}
        >
          <Group direction={breakpoint ? "column" : "row"}>
            <a
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              href="https://twitter.com/G3rgoPasztor"
              target="_blank"
              rel="noreferrer"
            >
              <ThemeIcon
                variant="outline"
                radius="xl"
                sx={{
                  borderColor: "#00B25A",
                  borderWidth: "2px",
                  width: "3.5rem",
                  height: "3.5rem",
                  transition: "all 300ms ease-in-out",
                  "&:hover": {
                    background: "#00B25A",
                  },
                }}
              >
                <SiTwitter size={24} />
              </ThemeIcon>
            </a>
            <a
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              href="https://www.linkedin.com/in/gerg%C5%91-p%C3%A1sztor-a0aa41214/"
              target="_blank"
              rel="noreferrer"
            >
              <ThemeIcon
                variant="outline"
                radius="xl"
                sx={{
                  borderColor: "#00B25A",
                  borderWidth: "2px",
                  width: "3.5rem",
                  height: "3.5rem",
                  transition: "all 300ms ease-in-out",
                  "&:hover": {
                    background: "#00B25A",
                  },
                }}
              >
                <SiLinkedin size={24} />
              </ThemeIcon>
            </a>
            <a
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              href="mailto:pasztorg@gmail.com"
              rel="noreferrer"
            >
              <ThemeIcon
                variant="outline"
                radius="xl"
                sx={{
                  borderColor: "#00B25A",
                  borderWidth: "2px",
                  width: "3.5rem",
                  height: "3.5rem",
                  transition: "all 300ms ease-in-out",
                  "&:hover": {
                    background: "#00B25A",
                  },
                }}
              >
                <FaAt size={24} />
              </ThemeIcon>
            </a>
          </Group>
        </motion.div>
      </Group>
    </section>
  );
}
