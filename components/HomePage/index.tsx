"use client";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { About, Hero, Projects, Skills, Testimonials } from "../../components";

const HomePage = () => {
  const breakpoint = useMediaQuery("(min-width: 768px)", false);
  return (
    <Box
      sx={{
        padding: breakpoint ? "3rem 7rem" : "1rem",
        margin: "0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </Box>
  );
};

export default HomePage;
