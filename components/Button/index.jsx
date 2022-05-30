import React from "react";
import Style from "./Button.module.css";
import Link from "next/link";

export default function Button({ children, href, style, id }) {
  return (
    <Link href={href}>
      <a id={id} className={Style.Button} style={style}>
        {children}
      </a>
    </Link>
  );
}
