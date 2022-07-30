import { NextPage } from "next";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";
import dynamic from "next/dynamic";

const { About, Hero, Projects, Skills, Testimonials }: any = {
  About: dynamic(() => import("../components/About")),
  Hero: dynamic(() => import("../components/Hero")),
  Projects: dynamic(() => import("../components/Projects")),
  Skills: dynamic(() => import("../components/Skills")),
  Testimonials: dynamic(() => import("../components/Testimonials")),
};

const Home: NextPage = () => {
  const breakpoint = useMediaQuery("(min-width: 768px)", false);
  return (
    <>
      <Head>
        <title>Portfolio | Gergő Pásztor</title>
      </Head>
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
    </>
  );
};

export default Home;
