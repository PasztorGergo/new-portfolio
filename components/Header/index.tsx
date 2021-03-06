import React, { useEffect, useState } from "react";
import {
  Header as H,
  Title,
  createStyles,
  MediaQuery,
  Burger,
  Group,
  UnstyledButton,
  Box,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { motion, useAnimation } from "framer-motion";

const useStyles = createStyles((theme) => ({
  name: {
    fontWeight: 700,
  },
  header: {
    border: "none",
    background: "#1c1d22",
  },
  link: {
    color: "#fff",
    padding: "0.25rem",
    transition: "all 300ms 150ms ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPos, scrollTo] = useWindowScroll();
  const breakpoint = useMediaQuery("(min-width: 768px)", false);
  const controls = useAnimation();

  useEffect(() => {
    if (open) controls.start({ scaleY: 1, transformOrigin: "top" });
    else controls.start({ scaleY: 0, transformOrigin: "top" });
  }, [open]);

  const { classes } = useStyles();
  return (
    <H fixed className={classes.header} height="min-content" py="lg">
      <Group
        align="center"
        position="apart"
        sx={{ margin: `0 ${breakpoint ? "6rem" : "1rem"}` }}
      >
        <MediaQuery styles={{ display: "none" }} largerThan="md">
          <Box sx={{ width: "100%" }}>
            <Group align="center" position="apart">
              <Image
                src="/favicon.svg"
                alt="Gergő Pásztor's logo"
                width="64"
                height="64"
              />
              <Title className={classes.name} order={3}>
                Gergő Pásztor
              </Title>
              <Burger
                color="#00B25A"
                opened={open}
                onClick={() => setOpen((prev) => !prev)}
              />
            </Group>
            <motion.div initial={{ scaleY: 0 }} animate={controls}>
              <Stack sx={{ display: open ? "flex" : "none" }}>
                <UnstyledButton
                  onClick={() => scrollTo({ y: 0 })}
                  className={classes.link}
                  sx={{
                    borderBottom:
                      scrollPos.y <= 350 ? "2px solid #00B25A" : "none",
                    opacity: scrollPos.y <= 350 ? 1 : 0.6,
                    maxWidth: "fit-content",
                  }}
                >
                  Home
                </UnstyledButton>
                <UnstyledButton
                  onClick={() => scrollTo({ y: 600 })}
                  className={classes.link}
                  sx={{
                    borderBottom:
                      scrollPos.y <= 1000 && scrollPos.y > 350
                        ? "2px solid #00B25A"
                        : "none",
                    opacity: scrollPos.y <= 1000 && scrollPos.y > 350 ? 1 : 0.6,
                    maxWidth: "fit-content",
                  }}
                >
                  About
                </UnstyledButton>
                <UnstyledButton
                  onClick={() => scrollTo({ y: 1100 })}
                  className={classes.link}
                  sx={{
                    borderBottom:
                      scrollPos.y <= 1500 && scrollPos.y > 1000
                        ? "2px solid #00B25A"
                        : "none",
                    opacity:
                      scrollPos.y <= 1500 && scrollPos.y > 1000 ? 1 : 0.6,
                    maxWidth: "fit-content",
                  }}
                >
                  Skills
                </UnstyledButton>
                <UnstyledButton
                  onClick={() => scrollTo({ y: 1600 })}
                  className={classes.link}
                  sx={{
                    borderBottom:
                      scrollPos.y <= 2900 && scrollPos.y > 1500
                        ? "2px solid #00B25A"
                        : "none",
                    opacity:
                      scrollPos.y <= 2900 && scrollPos.y > 1500 ? 1 : 0.6,
                    maxWidth: "fit-content",
                  }}
                >
                  Projects
                </UnstyledButton>
                <UnstyledButton
                  onClick={() => scrollTo({ y: 3100 })}
                  className={classes.link}
                  sx={{
                    borderBottom:
                      scrollPos.y > 2900 && scrollPos.y < 3600
                        ? "2px solid #00B25A"
                        : "none",
                    opacity: scrollPos.y > 2900 && scrollPos.y < 3600 ? 1 : 0.6,
                    maxWidth: "fit-content",
                  }}
                >
                  Testimonials
                </UnstyledButton>
              </Stack>
            </motion.div>
          </Box>
        </MediaQuery>
        <MediaQuery styles={{ display: "none" }} smallerThan="md">
          <Group position="apart" sx={{ width: "100%" }}>
            <Group align="center">
              <Image
                src="/favicon.svg"
                alt="Gergő Pásztor's logo"
                width="64"
                height="64"
              />
              <Title className={classes.name} order={3}>
                Gergő Pásztor
              </Title>
            </Group>
            <Group position="right" sx={{ gap: "3rem" }}>
              <UnstyledButton
                onClick={() => scrollTo({ y: 0 })}
                className={classes.link}
                sx={{
                  borderBottom:
                    scrollPos.y <= 350 ? "2px solid #00B25A" : "none",
                  opacity: scrollPos.y <= 350 ? 1 : 0.6,
                }}
              >
                Home
              </UnstyledButton>
              <UnstyledButton
                onClick={() => scrollTo({ y: 600 })}
                className={classes.link}
                sx={{
                  borderBottom:
                    scrollPos.y <= 1000 && scrollPos.y > 350
                      ? "2px solid #00B25A"
                      : "none",
                  opacity: scrollPos.y <= 1000 && scrollPos.y > 350 ? 1 : 0.6,
                }}
              >
                About
              </UnstyledButton>
              <UnstyledButton
                onClick={() => scrollTo({ y: 1100 })}
                className={classes.link}
                sx={{
                  borderBottom:
                    scrollPos.y <= 1500 && scrollPos.y > 1000
                      ? "2px solid #00B25A"
                      : "none",
                  opacity: scrollPos.y <= 1500 && scrollPos.y > 1000 ? 1 : 0.6,
                }}
              >
                Skills
              </UnstyledButton>
              <UnstyledButton
                onClick={() => scrollTo({ y: 1600 })}
                className={classes.link}
                sx={{
                  borderBottom:
                    scrollPos.y <= 2900 && scrollPos.y > 1500
                      ? "2px solid #00B25A"
                      : "none",
                  opacity: scrollPos.y <= 2900 && scrollPos.y > 1500 ? 1 : 0.6,
                }}
              >
                Projects
              </UnstyledButton>
              <UnstyledButton
                onClick={() => scrollTo({ y: 3100 })}
                className={classes.link}
                sx={{
                  borderBottom:
                    scrollPos.y > 2900 && scrollPos.y < 3600
                      ? "2px solid #00B25A"
                      : "none",
                  opacity: scrollPos.y > 2900 && scrollPos.y < 3600 ? 1 : 0.6,
                }}
              >
                Testimonials
              </UnstyledButton>
            </Group>
          </Group>
        </MediaQuery>
      </Group>
    </H>
  );
}
