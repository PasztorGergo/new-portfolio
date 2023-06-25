"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Avatar } from "components";

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
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const opacity = useTransform(x, [-150, 0, 150], [0.1, 1, 0.1]);

  const handleDrag = (event: any, info: any) => {
    if (info.offset.x < -100 && index) {
      setExitX(-250);

      setIndex((prev: Array<any>) => [
        ...prev.filter(({ name }) => name !== prev[index].name),
      ]);
    }
    setExitX(250);
    if (info.offset.x > 100 && index) {
      setExitX(250);

      setIndex((prev: Array<any>) => [
        ...prev.filter(({ name }) => name !== prev[index].name),
      ]);
    }
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "0",
        cursor: "grab",
        x: x,
      }}
      whileTap={{ cursor: "grabbing" }}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      drag={drag}
      onDragEnd={handleDrag}
      animate={animate}
      transition={transition}
      initial={initial}
      exit={{
        x: "100%",
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
      >
        <div className="rounded-lg p-4 bg-[#25252a] md:min-w-[40%] min-w-full relative">
          <a
            href={contact}
            className="absolute left-0 -top-8 w-full flex items-center justify-center"
          >
            <Avatar
              alt={`Photo of ${name}`}
              className="w-24 h-24"
              src={profilePicture}
            />
          </a>
          <div className="pt-16 flex flex-col items-center justify-between gap-4">
            <h3 className="text-center font-bold text-xl">{name}</h3>
            <p className="text-center opacity-50 text-sm">{role}</p>
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
