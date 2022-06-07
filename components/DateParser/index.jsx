import { format } from "date-fns";
import React from "react";
import Style from "./Date.module.css";

export default function DateParser({ date }) {
  return (
    <small className={Style.date}>
      {format(new Date(date), "do LLLL yyyy")}
    </small>
  );
}
