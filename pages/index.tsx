import { NextPage } from "next";
import { Title, Group, Text, Stack, Button } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((e) => ({
      translateY: 0,
      opacity: 1,
      transition: { delay: e * 0.3 },
    }));
  }, []);

  return (
    <>
      <Head>
        <title>Under construction | Gergő Pásztor</title>
      </Head>
      <Stack
        sx={{ width: "100%", height: "100vh" }}
        align="center"
        justify="center"
      >
        <Title order={1} sx={{ fontSize: "3.5rem" }} align="center">
          Under construction
        </Title>
        <Group grow>
          <motion.div
            custom={2}
            initial={{ translateY: "50%", opacity: 0 }}
            animate={controls}
          >
            <Text align="center" sx={{ fontSize: "6rem" }}>
              🏗
            </Text>
          </motion.div>
          <motion.div
            custom={1}
            initial={{ translateY: "50%", opacity: 0 }}
            animate={controls}
          >
            <Text align="center">
              Thanks for checking in, but the page is being under renovation.
            </Text>
          </motion.div>
        </Group>
        <motion.div
          custom={3}
          initial={{ translateY: "50%", opacity: 0 }}
          animate={controls}
        >
          <Text>See the progress on Twitter</Text>
        </motion.div>
        <motion.div
          custom={4}
          initial={{ translateY: "50%", opacity: 0 }}
          animate={controls}
        >
          <Button
            aria-label="Gergő Pásztor's Twitter"
            sx={{ background: "#1d9bf0" }}
            component="a"
            href="https://twitter.com/G3rgoPasztor"
            leftIcon={<IconBrandTwitter />}
          >
            G3rgoPasztor
          </Button>
        </motion.div>
      </Stack>
    </>
  );
};

export default Home;
