import { format } from "date-fns";
import React from "react";
import Style from "./Ribbon.module.css";

export default function Ribbon({ name, date, placement }) {
  return (
    <div aria-label="Ribbon holder" className={Style.ribbonHolder}>
      <div
        aria-label="Ribbon"
        className={`${Style.ribbon} ${
          placement === 1
            ? "bg-amber-300"
            : placement === 2
            ? "bg-zinc-200"
            : "bg-amber-600"
        }`}
      >
        <p>
          {placement +
            (placement === 1
              ? "st"
              : placement === 2
              ? "nd"
              : placement === 3
              ? "rd"
              : "th")}
        </p>
        <img
          className={Style.branch}
          src="/images/oliveBranches.svg"
          alt="olive branches"
        />
      </div>
      <div aria-label="Competition" className={Style.name}>
        <h4 className={Style.competition}>{name}</h4>
        <h5 className={Style.date}>
          {format(new Date(date), "do LLLL, yyyy")}
        </h5>
      </div>
    </div>
  );
}
