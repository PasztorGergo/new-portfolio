import React from "react";
import { useBadge } from "../../Hooks/CategoryContext";
import Style from "./Badge.module.css";

export default function Badge({ children }) {
  const { toggleSelect } = useBadge();

  const handleClick = (e) => {
    console.log(e.target.innerText);
    toggleSelect(e.target.innerText);
  };
  return (
    <div
      aria-label="badge"
      className={`${children.toLowerCase()}-badge ${Style.badge}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </div>
  );
}
