import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import Button from "../Button";

export default function About() {
  return (
    <section
      aria-details="about"
      className={`${Style.about} section`}
      id="about"
    >
      <div className={Style.circuit}>
        <div title="Gergő at a competition" className={Style.Image}></div>
      </div>
      <div className={Style.content}>
        <h2 className={`${Style.title} sectionTitle`}>About</h2>
        <p className={Style.intro}>
          I&apos;m a full stack webdeveloper & an entreprenuer, who searches for
          modern solutions.
        </p>
        <Button
          ariaLabel="More about Gergő Pásztor"
          href="/about"
          style={{ alignSelf: "start", marginTop: "2rem" }}
        >
          Learn More
        </Button>
      </div>
      <img src="/images/Plus.svg" alt="plus" className={Style.plus} />
    </section>
  );
}
