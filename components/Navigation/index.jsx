import React, { useState } from "react";
import Style from "./Navigation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ home }) {
  const [closed, setClosed] = useState(true);
  return (
    <nav className={`${Style.nav} ${closed ? "h-20" : "h-48"}`}>
      <FontAwesomeIcon
        icon={faBars}
        className={`${Style.bars} ${closed ? "visible" : "invisible"} ${
          Style.navlink
        }`}
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
          <li className={Style.navlink} onClick={() => setClosed(true)}>
            <FontAwesomeIcon icon={faTimes} />
          </li>
        )}
        {home ? (
          <>
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
              <Link href="/posts">
                <a>Blog</a>
              </Link>
            </li>
          </>
        ) : (
          <li className={Style.navlink}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
