import React, { useEffect } from "react";
import {
  createStyles,
  Title,
  Text,
  Avatar,
  Group,
  Box,
  Button,
} from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useWindowScroll } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  title: {
    [theme.fn.largerThan("md")]: {
      fontSize: "5rem !important",
    },
    [theme.fn.largerThan("sm")]: {
      fontSize: "3rem",
    },
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
          <motion.div
            custom={1}
            initial={{ opacity: 0, x: "-100%" }}
            animate={controls}
          >
            <Text size="xl" color="#00B25A" weight="600">
              Greetings! 👋 My name is
            </Text>
          </motion.div>
          <motion.div
            custom={2}
            initial={{ opacity: 0, x: "-100%" }}
            animate={controls}
          >
            <Title className={classes.title}>Gergő Pásztor</Title>
          </motion.div>
          <motion.div
            custom={3}
            initial={{ opacity: 0, x: "-100%" }}
            animate={controls}
          >
            <Text>I create unique websites, and applications.</Text>
          </motion.div>
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
      </Group>
    </section>
  );
}
