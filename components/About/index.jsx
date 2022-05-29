import React from "react";
import Style from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={`${Style.about} section`}>
      <div className={Style.circuit}>
        <div className={Style.Image}></div>
      </div>
      <h2 className={`${Style.title} sectionTitle`}>About</h2>
      <p className={Style.intro}>
        I’m a full stack webdeveloper & an entreprenuer, who searches for modern
        solutions.
      </p>
      <img src="/images/Plus.svg" alt="plus" className={Style.plus} />
    </section>
  );
}
