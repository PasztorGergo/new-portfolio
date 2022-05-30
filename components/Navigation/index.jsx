import React from "react";
import Style from "./Navigation.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <nav className={Style.nav}>
      <FontAwesomeIcon icon={faBars} className={Style.bars} />
      <ul className={Style.navlinks}>
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
