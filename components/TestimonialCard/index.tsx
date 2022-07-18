import { Avatar, createStyles, Paper, Stack, Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const useStyles = createStyles((theme) => ({
  paper: {
    position: "relative",
    background: "#25252a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    top: "-2rem",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

type Props = {
  profilePicture: string;
  contact: string;
  name: string;
  children: React.ReactNode;
  role?: string;
  drag?: boolean | "x" | "y";
  animate: any;
  transition: any;
  initial?: any;
  setExitX: any;
  exitX: any;
  index?: number;
  setIndex?: any;
};

export default function TestimonialCard({
  profilePicture,
  contact,
  name,
  role,
  children,
  drag,
  animate,
  transition,
  initial,
  setExitX,
  exitX,
  index,
  setIndex,
}: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 808px)", false);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);

  const handleDrag = (event: any, info: any) => {
    if (info.offset.x < -100) {
      setIndex(index! + 1);
      setExitX(-250);
    }
    if (info.offset.x > 100) {
      setIndex(index! + 1);
      setExitX(250);
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "0",
        cursor: "grab",
        x: x,
        scale: scale,
      }}
      whileTap={{ cursor: "grabbing" }}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      drag={drag}
      onDragEnd={handleDrag}
      animate={animate}
      transition={transition}
      initial={initial}
      exit={{
        x: exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.6 },
      }}
    >
      <Paper
        className={classes.paper}
        radius="sm"
        p="xl"
        sx={{ width: breakpoint ? "40%" : "100%" }}
      >
        <Avatar
          src={profilePicture}
          component="a"
          href={contact}
          className={classes.avatar}
          size={96}
        />
        <Stack pt="3rem">
          <Title align="center" order={3}>
            {name}
          </Title>
          <Text align="center" color="dimmed" size="sm">
            {role}
          </Text>
          {children}
        </Stack>
      </Paper>
    </motion.div>
  );
}
