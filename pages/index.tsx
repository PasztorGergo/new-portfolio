import { NextPage } from "next";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";
import { About, Hero, Projects, Skills, Testimonials } from "../components";

const Home: NextPage = () => {
  const breakpoint = useMediaQuery("(min-width: 768px)", false);
  return (
    <>
      <Head>
        <title>Portfolio | Gergő Pásztor</title>
      </Head>
      <Box
        sx={{
          padding: breakpoint ? "7rem" : "1rem",
          margin: "0",
          minHeight: "100vh",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
