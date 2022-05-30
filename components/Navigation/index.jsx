import React, { useState } from "react";
import Style from "./Navigation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [closed, setClosed] = useState(true);
  return (
    <nav className={`${Style.nav} ${closed ? "h-20" : "h-48"}`}>
      <FontAwesomeIcon
        icon={faBars}
        className={`${Style.bars} ${closed ? "visible" : "invisible"}`}
        onClick={() => setClosed((prev) => !prev)}
      />
      <ul
        className={`${Style.navlinks} ${
          closed
            ? "invisible justify-end w-0 md:w-full"
            : "visible justify-center w-full"
        } md:visible`}
      >
        {!closed && (
          <li onClick={() => setClosed(true)}>
            <FontAwesomeIcon icon={faTimes} />
          </li>
        )}
        <li className={Style.navlink}>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li className={Style.navlink}>
          <Link href="#work">
            <a>Projects</a>
          </Link>
        </li>
        <li className={Style.navlink}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
