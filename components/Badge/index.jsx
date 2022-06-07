import React from "react";
import Style from "./Badge.module.css";

export default function Badge({ children }) {
  const handleClick = () => {};
  return (
    <div
      aria-label="badge"
      className={`${children}-badge ${Style.badge}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
