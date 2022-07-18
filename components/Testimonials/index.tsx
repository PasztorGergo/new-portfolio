import { Box, createStyles, Text } from "@mantine/core";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import TestimonialCard from "../TestimonialCard";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  section: {
    margin: "4rem auto",
  },
}));

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <SectionTitle>Testimonials</SectionTitle>
      <Text>See what other say about me!</Text>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            height: "40vh",
          }}
        >
          <AnimatePresence initial={false}>
            <TestimonialCard
              key={index + 1}
              initial={{ scale: 0, y: 105, opacity: 0 }}
              animate={{ scale: 0.75, y: 30, opacity: 1 }}
              transition={{
                scale: { duration: 0.2 },
                opacity: { duration: 0.4 },
              }}
              contact="https://www.facebook.com/levente.csikasz.77"
              name="Másik Csíkász"
              profilePicture="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/291327999_557328616133024_5215861544277751063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aKLS3r5f43UAX82PZAz&_nc_ht=scontent-vie1-1.xx&oh=00_AT9VVKyNxpLaAmWUSGYZpqGQag8e6FBzKdn4YrlkW3egrQ&oe=62D9CDF2"
              role="CEO of Electrotechnical Collection, Hungary"
              exitX={exitX}
              setExitX={setExitX}
            >
              <Text align="center">
                I must confess, He did a fantastic work! I'm keen on with the
                design, and the layout is outstanding.
              </Text>{" "}
              <Text align="center" weight="600">
                I love it!
              </Text>
            </TestimonialCard>
            <TestimonialCard
              key={index}
              index={index}
              setIndex={setIndex}
              contact="https://www.facebook.com/levente.csikasz.77"
              name="Levente Csíkász"
              profilePicture="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/291327999_557328616133024_5215861544277751063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aKLS3r5f43UAX82PZAz&_nc_ht=scontent-vie1-1.xx&oh=00_AT9VVKyNxpLaAmWUSGYZpqGQag8e6FBzKdn4YrlkW3egrQ&oe=62D9CDF2"
              role="CEO of Electrotechnical Collection, Hungary"
              drag="x"
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                opacity: { duration: 0.2 },
              }}
              exitX={exitX}
              setExitX={setExitX}
            >
              <Text align="center">
                I must confess, He did a fantastic work! I'm keen on with the
                design, and the layout is outstanding.
              </Text>{" "}
              <Text align="center" weight="600">
                I love it!
              </Text>
            </TestimonialCard>
          </AnimatePresence>
        </motion.div>
      </Box>
    </section>
  );
}
