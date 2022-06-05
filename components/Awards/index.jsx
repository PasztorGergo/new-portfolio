import React from "react";
import Ribbon from "../Ribbon";

export default function Awards({ awards }) {
  return (
    <section className={`section`}>
      <h2 className={`sectionTitle`}>Awards</h2>
      {awards.map(({ title, date, placement, _id }) => (
        <Ribbon key={_id} title={title} date={date} placement={placement} />
      ))}
    </section>
  );
}
