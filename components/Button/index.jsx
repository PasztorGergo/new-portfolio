import React from "react";
import Style from "./Button.module.css";
import Link from "next/link";

export default function Button({ children, href, style, id, ariaLabel }) {
  return (
    <Link href={href}>
      <a aria-label={ariaLabel} id={id} className={Style.Button} style={style}>
        {children}
      </a>
    </Link>
  );
}
