import React from "react";
import Ribbon from "../Ribbon";
import Style from "./Awards.module.css";

export default function Awards({ awards }) {
  return (
    <section className={`section ${Style.awards}`}>
      <h2 className={`sectionTitle ${Style.title}`}>Achievements</h2>
      <div className={Style.display}>
        {awards.map(({ name, date, placement, _id }) => (
          <Ribbon key={_id} name={name} date={date} placement={placement} />
        ))}
      </div>
    </section>
  );
}
