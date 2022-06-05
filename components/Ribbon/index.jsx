import { format } from "date-fns";
import React from "react";
import Style from "./Ribbon.module.css";

export default function Ribbon({ name, date, placement }) {
  return (
    <div aria-label="Ribbon holder" className={Style.ribbonHolder}>
      <div aria-label="Ribbon"></div>
      <div aria-label="Competition" className={Style.name}>
        <h4 className={Style.competition}>{name}</h4>
        <h5 className={Style.date}>
          {format(new Date(date), "do LLLL, yyyy")}
        </h5>
      </div>
    </div>
  );
}
