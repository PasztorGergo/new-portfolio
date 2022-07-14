import React, { useEffect } from "react";
import { createStyles, Title, Text, Avatar, Group, Box } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";

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

  useEffect(() => {
    controls.start((num: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 * num, duration: 1, type: "spring" },
    }));
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
            <Text>I create websites, and build applications</Text>
          </motion.div>
        </Box>
      </Group>
    </section>
  );
}
