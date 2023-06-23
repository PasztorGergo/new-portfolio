"use client";

import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import TestimonialCard from "../TestimonialCard";
import { AnimatePresence, motion } from "framer-motion";

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
          <p className="text-center">
            Be the next satisfied person, with who I will collaborate! 😉
          </p>
        </>
      ),
    },
    {
      contact: "https://www.facebook.com/levente.csikasz.77",
      name: "Levente Csíkász",
      profilePicture: "/LeventeCsikasz.jpg",
      role: "CEO of Electrotechnical Collection, Hungary",
      children: (
        <>
          <p className="text-center">
            I must confess, He did a fantastic work!
            <br />
            I&apos;m keen on with the design, and the layout is outstanding.
          </p>{" "}
          <p className="text-center font-bold">I love it!</p>
        </>
      ),
    },
    {
      contact: "https://markodenic.com",
      name: "Marko Denic",
      profilePicture: "/MarkoDenic.jpg",
      role: "Software Engineer, Twitter Creator",
      children: (
        <>
          <p className="text-center max-w-[32rem]">
            Gergő&apos;s article for my blog was fantastic. The writing style
            was engaging, the content was well-researched and informative, and
            the overall quality was professional.
          </p>
          <p className="text-center max-w-[32rem]">
            I would highly recommend Gergő as a writer and I look forward to
            working with him again in the future.
          </p>
        </>
      ),
    },
  ]);
  return (
    <section className="my-16 mx-auto">
      <SectionTitle>Testimonials</SectionTitle>
      <p>See what other say about me!</p>
      <div className="w-full mt-24">
        <p className="font-bold text-xl opacity-50 text-center">
          Drag me horizontally ↔
        </p>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            height: "40vh",
            marginTop: "3rem",
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
                    drag="x"
                    index={isLast ? comments.length - 1 : 0}
                    setIndex={isLast ? setComments : 0}
                  >
                    {children}
                  </TestimonialCard>
                );
              }
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
