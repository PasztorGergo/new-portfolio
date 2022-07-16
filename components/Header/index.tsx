import React, { useState } from "react";
import {
  Header as H,
  Title,
  createStyles,
  MediaQuery,
  Burger,
  Group,
  UnstyledButton,
} from "@mantine/core";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";

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

  const { classes } = useStyles();
  return (
    <H fixed className={classes.header} height="min-content" py="lg">
      <Group
        align="center"
        position="apart"
        sx={{ margin: "0 clamp(0rem, 6rem, 6rem)" }}
      >
        <Group align="center">
          <Image src="/favicon.svg" width="64" height="64" />
          <Title className={classes.name} order={3}>
            Gergő Pásztor
          </Title>
        </Group>
        <MediaQuery styles={{ display: "none" }} largerThan="md">
          <Burger
            color="#00B25A"
            opened={open}
            onClick={() => setOpen((prev) => !prev)}
          />
        </MediaQuery>
        <MediaQuery styles={{ display: "none" }} smallerThan="md">
          <Group position="right" sx={{ gap: "3rem" }}>
            <UnstyledButton
              onClick={() => scrollTo({ y: 0 })}
              className={classes.link}
              sx={{
                borderBottom: scrollPos.y <= 350 ? "2px solid #00B25A" : "none",
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
              onClick={() => scrollTo({ y: 1000 })}
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
                  scrollPos.y <= 2500 && scrollPos.y > 1500
                    ? "2px solid #00B25A"
                    : "none",
                opacity: scrollPos.y <= 2500 && scrollPos.y > 1500 ? 1 : 0.6,
              }}
            >
              Projects
            </UnstyledButton>
            <UnstyledButton
              onClick={() => scrollTo({ y: 0 })}
              className={classes.link}
              sx={{
                borderBottom: scrollPos.y <= 0 ? "2px solid #00B25A" : "none",
                opacity: scrollPos.y <= 0 ? 1 : 0.6,
              }}
            >
              Contact
            </UnstyledButton>
          </Group>
        </MediaQuery>
      </Group>
    </H>
  );
}
