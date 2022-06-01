import React from "react";
import Style from "./SkillCard.module.css";

export default function SkillCard({ title, values }) {
  return (
    <div className={`${Style.card} skillCard`}>
      <h3 className={Style.title}>{title}</h3>
      <ul className={Style.list}>
        {values.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
