import React from "react";
import { useBadge } from "../../Hooks/CategoryContext";
import Style from "./Badge.module.css";

export default function Badge({ children }) {
  const { setCategories } = useBadge();
  const handleClick = () => {
    setCategories((prev) => prev.push(children));
  };
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
