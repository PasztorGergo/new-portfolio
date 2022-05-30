import Image from "next/image";
import React from "react";
import Navigation from "../Navigation";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <header className={Style.header}>
      <div className={Style.left}>
        <Image
          src="/images/Dots.svg"
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
        <Navigation />
      </div>
    </header>
  );
}
