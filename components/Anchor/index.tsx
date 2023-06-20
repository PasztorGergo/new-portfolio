"use client";
import React from "react";
import { useWindowScroll } from "@mantine/hooks";

type Props = {
  children: React.ReactNode;
  href: string | number;
  className?: string;
};

export default function Anchor({ children, href, className }: Props) {
  const [scrollPos, scrollTo] = useWindowScroll();

  return typeof href === "number" ? (
    <a
      className={`${className} cursor-pointer text-brand text-opacity-75 hover:text-opacity-100 hover:shadow-[0_-3px_0_0_#00B25A_inset] shadow-[0_0_0_0_#00B25A_inset]`}
      onClick={() => {
        scrollTo({ y: href });
      }}
    >
      {children}
    </a>
  ) : (
    <a
      className={`${className} cursor-pointer text-brand text-opacity-75 hover:text-opacity-100 hover:shadow-[0_-3px_0_0_#00B25A_inset] shadow-[0_0_0_0_#00B25A_inset]`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
