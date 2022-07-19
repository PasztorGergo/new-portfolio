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

type testimonial = {
  profilePicture: string;
  contact: string;
  name: string;
  children: React.ReactNode;
  role?: string;
};

export default function Testimonials() {
  const [exitX, setExitX] = useState("100%");
  const [comments, setComments] = useState<Array<testimonial>>([
    {
      contact: "",
      name: "You",
      profilePicture: "",
      children: (
        <>
          <Text align="center">
            Be the next satisfied person, with who I'll collaborate! 😉
          </Text>
        </>
      ),
    },
    {
      contact: "https://www.facebook.com/levente.csikasz.77",
      name: "Levente Csíkász",
      profilePicture:
        "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/291327999_557328616133024_5215861544277751063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aKLS3r5f43UAX82PZAz&_nc_ht=scontent-vie1-1.xx&oh=00_AT9VVKyNxpLaAmWUSGYZpqGQag8e6FBzKdn4YrlkW3egrQ&oe=62D9CDF2",
      role: "CEO of Electrotechnical Collection, Hungary",
      children: (
        <>
          <Text align="center">
            I must confess, He did a fantastic work! I'm keen on with the
            design, and the layout is outstanding.
          </Text>{" "}
          <Text align="center" weight="600">
            I love it!
          </Text>
        </>
      ),
    },
  ]);
  const { classes } = useStyles();
  return (
    <section className={classes.section}>
      <SectionTitle>Testimonials</SectionTitle>
      <Text>See what other say about me!</Text>
      <Box
        sx={{
          width: "100%",
          marginTop: "6rem",
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
          <AnimatePresence>
            {comments.map(
              ({ name, children, contact, profilePicture, role }, id) => {
                const isLast: boolean = id === comments.length - 1;
                return (
                  <TestimonialCard
                    key={id}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      opacity: { duration: 0.2 },
                    }}
                    name={name}
                    contact={contact}
                    profilePicture={profilePicture}
                    role={role}
                    initial={{ scale: 1, opacity: 1 }}
                    setExitX={setExitX}
                    exitX={exitX}
                    drag={
                      comments.length > 1
                        ? isLast
                          ? "x"
                          : undefined
                        : undefined
                    }
                    index={isLast ? comments.length - 1 : undefined}
                    setIndex={isLast ? setComments : undefined}
                  >
                    {children}
                  </TestimonialCard>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>
        <Text weight="600" size="xl" color="dimmed" align="center">
          Drag me horizontally ↔
        </Text>
      </Box>
    </section>
  );
}
