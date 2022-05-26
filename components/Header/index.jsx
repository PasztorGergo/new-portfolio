import Image from "next/image";
import React from "react";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={Style.left}>
        <h2 className={Style.before}>My name is</h2>
        <h1 className={Style.name}>Gergő Pásztor</h1>
      </div>
      <div className={Style.right}>
        <nav></nav>
        <Image layout="fill" src="/images/Gergo.jpg" alt="Gergo Pasztor" />
      </div>
    </header>
  );
}
