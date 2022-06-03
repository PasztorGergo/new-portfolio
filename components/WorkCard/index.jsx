import React from "react";
import Style from "./Card.module.css";

export default function WorkCard({ title, desc, href, image }) {
  return (
    <li
      className={`${Style.card}`}
      id={title.toLowerCase().replace(" ", "")}
      style={{
        backgroundImage: `url("data:image/png;base64,${Buffer.from(
          image.data
        )}")`,
      }}
    >
      <a className={`${Style.cardLink}`} href={href}>
        <h4 className={Style.cardTitle}>{title}</h4>
        <p className={Style.cardDescription}>{desc}</p>
      </a>
    </li>
  );
}
