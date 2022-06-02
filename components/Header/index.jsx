import Image from "next/image";
import React from "react";
import Navigation from "../Navigation";
import Style from "./Header.module.css";

export default function Header({ title, subTitle, home }) {
  return (
    <header className={Style.header}>
      <div className={Style.left}>
        <Image
          src="/images/Dots.svg"
          layout="fixed"
          width="100%"
          height="100%"
          alt="dots"
        />
        <div>
          <h2 className={Style.before}>{subTitle}</h2>
          <h1 className={Style.name}>{title}</h1>
        </div>
      </div>
      <div className={Style.right}>
        <Navigation home={home} />
      </div>
    </header>
  );
}
