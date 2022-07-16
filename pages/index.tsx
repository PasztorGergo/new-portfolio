import { NextPage } from "next";
import { Title, Group, Text, Stack, Button, Box } from "@mantine/core";
import Head from "next/head";
import { About, Hero, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Gergő Pásztor</title>
      </Head>
      <Box
        sx={{
          padding: "0 clamp(0.01rem, 7rem, 7rem)",
          margin: "0",
          minHeight: "100vh",
        }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
      </Box>
    </>
  );
};

export default Home;
