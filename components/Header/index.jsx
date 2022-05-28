import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.left}>
        <Image
          src="/images/dots.svg"
          layout="fixed"
          width="100%"
          height="100%"
        />
        <div>
          <h2 className={Style.before}>My name is</h2>
          <h1 className={Style.name}>Gergő Pásztor</h1>
        </div>
      </div>
      <div className={Style.right}>
        <nav className={Style.nav}>
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
      </div>
    </header>
  );
}
