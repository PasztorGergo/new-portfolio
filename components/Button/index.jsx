import React from "react";
import Style from "./Button.module.css";

export default function Button({ children, href, style, id }) {
  return (
    <a href={href} id={id} className={Style.Button} style={style}>
      {children}
    </a>
  );
}
