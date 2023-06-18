"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { useAnimation } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollPos, scrollTo] = useWindowScroll();

  return (
    <nav
      className={`w-full bg-[#1c1d22] py-4 px-16 flex flex-row justify-between items-center ${
        scrollPos.y > 30 ? "fixed" : "absolute"
      } z-30 top-0 left-0`}
    >
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
