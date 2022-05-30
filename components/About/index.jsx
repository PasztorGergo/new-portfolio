import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import Button from "../Button";

export default function About() {
  return (
    <section className={`${Style.about} section`}>
      <div className={Style.circuit}>
        <div className={Style.Image}></div>
      </div>
      <div className={Style.content}>
        <h2 className={`${Style.title} sectionTitle`}>About</h2>
        <p className={Style.intro}>
          I’m a full stack webdeveloper & an entreprenuer, who searches for
          modern solutions.
        </p>
        <Button href="" style={{ alignSelf: "start" }}>
          Learn More
        </Button>
      </div>
      <img src="/images/Plus.svg" alt="plus" className={Style.plus} />
    </section>
  );
}
