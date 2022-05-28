import React from "react";
import Style from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={`${Style.about} section`}>
      <Image src="/images/GergoTyping.png" className={Style.image} />
      <h2 className={`${Style.title} sectionTitle`}>About</h2>
    </section>
  );
}
