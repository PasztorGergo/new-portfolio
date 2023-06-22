"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, staggerContainer } from "utils";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const scrollPos = window && window?.scrollY;

  return (
    <nav
      className={`w-full bg-[#1c1d22] py-4 px-16 flex flex-row justify-between items-center ${
        scrollPos > 30 ? "fixed" : "absolute"
      } z-30 top-0 left-0`}
    >
      <Image alt="Logo" src="/favicon.svg" width={50.41} height={50.25} />
      <ul className="hidden md:flex justify-between items-center grow-[0.25]">
        <li
          onClick={() => window?.scrollTo({ top: 0, behavior: "smooth" })}
          className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
        >
          Home
        </li>
        <li
          onClick={() => window?.scrollTo({ top: 600, behavior: "smooth" })}
          className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
        >
          About
        </li>
        <li
          onClick={() => window?.scrollTo({ top: 1200, behavior: "smooth" })}
          className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
        >
          Skills
        </li>
        <li
          onClick={() => window?.scrollTo({ top: 1750, behavior: "smooth" })}
          className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
        >
          Projects
        </li>
        <li className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm">
          Testimonails
        </li>
      </ul>
      <RiMenu3Fill
        className="text-[32px] text-white md:hidden inline"
        onClick={() => setOpen(true)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-30%", opacity: 0, filter: "blur(1rem)" }}
            animate={{
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: { type: "tween", duration: 0.5 },
            }}
            exit={{
              x: "30%",
              opacity: 0,
              filter: "blur(1rem)",
              transition: { type: "tween", duration: 0.5 },
            }}
            className="top-0 left-0 fixed w-full h-screen grid place-items-center bg-[#1c1d22]"
          >
            <motion.ul
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              className="h-full flex flex-col items-center justify-center gap-8"
              transition={{ delay: 0.3 }}
            >
              <motion.li
                variants={fadeIn("left", 8, 40)}
                className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
                onClick={() => {
                  setOpen(false);
                  window?.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </motion.li>
              <motion.li
                variants={fadeIn("left", 8, 40)}
                className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
                onClick={() => {
                  setOpen(false);
                  window?.scrollTo({ top: 600, behavior: "smooth" });
                }}
              >
                About
              </motion.li>
              <motion.li
                variants={fadeIn("left", 8, 40)}
                className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
                onClick={() => {
                  setOpen(false);
                  window?.scrollTo({ top: 1200, behavior: "smooth" });
                }}
              >
                Skills
              </motion.li>
              <motion.li
                variants={fadeIn("left", 8, 40)}
                className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
                onClick={() => {
                  setOpen(false);
                  window?.scrollTo({ top: 1750, behavior: "smooth" });
                }}
              >
                Projects
              </motion.li>
              <motion.li
                variants={fadeIn("left", 8, 40)}
                className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 text-opacity-75 hover:text-opacity-100 cursor-pointer transition-all duration-100 text-sm"
                onClick={() => {
                  setOpen(false);
                  window?.scrollTo({ top: 2300, behavior: "smooth" });
                }}
              >
                Testimonials
              </motion.li>
            </motion.ul>
            <RiCloseFill
              className="text-[32px] text-white absolute top-4 right-4"
              onClick={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
