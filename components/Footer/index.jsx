import React from "react";
import Style from "./Footer.module.css";
import { faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className={`${Style.footer} section`}>
      <h2 className={`${Style.title} sectionTitle`}>Contacts</h2>
      <img src="/images/dots.svg" alt="dots" className={Style.dots} />
      <p className={Style.rights}>All rights reserved &copy;</p>
      <div className={Style.social}>
        <div className={Style.row}></div>
        <a href="https://twitter.com/G3rgoPasztor">
          <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/gerg%C5%91-p%C3%A1sztor-a0aa41214/">
          <FontAwesomeIcon className="text-2xl" icon={faLinkedinIn} />
        </a>
        <a href="mailto:pasztorg05@gmail.com">
          <FontAwesomeIcon className="text-2xl" icon={faAt} />
        </a>
      </div>
    </footer>
  );
}
