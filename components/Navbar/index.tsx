"use client";

import React, { useEffect, useState } from "react";
import {
  Header as H,
  Title,
  createStyles,
  MediaQuery,
  Burger,
  Group,
  UnstyledButton,
  Box,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { motion, useAnimation } from "framer-motion";

const useStyles = createStyles((theme) => ({
  name: {
    fontWeight: 700,
  },
  header: {
    border: "none",
    background: "#1c1d22",
  },
  link: {
    color: "#fff",
    padding: "0.25rem",
    transition: "all 300ms 150ms ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPos, scrollTo] = useWindowScroll();
  const breakpoint = useMediaQuery("(min-width: 768px)", false);
  const controls = useAnimation();

  return (
    <nav className="w-full py-4 px-16 flex flex-row justify-between items-center fixed z-30 top-0 left-0">
      <Image alt="Logo" src="/favicon.svg" width={50.41} height={50.25} />
      <ul className="flex justify-between items-center grow-[0.25]">
        <li className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-100 text-sm">
          Home
        </li>
        <li className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-100 text-sm">
          About
        </li>
        <li className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-100 text-sm">
          Projects
        </li>
        <li className="uppercase tracking-wide text-center font-bold hover:border-b-2 border-b-brand border-0 opacity-75 hover:opacity-100 cursor-pointer transition-all duration-100 text-sm">
          Testimonails
        </li>
      </ul>
    </nav>
  );
}
