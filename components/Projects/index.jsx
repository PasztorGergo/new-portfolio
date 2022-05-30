import React from "react";
import Button from "../Button";
import WorkCard from "../WorkCard";
import Style from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={`${Style.Projects} section`}>
      <h2 className={`${Style.title} sectionTitle`}>My Work</h2>
      <h3 className={Style.subtitle}>That I proud of</h3>
      <ul className={Style.display}>
        <WorkCard
          title="Codisplay"
          desc="
                Make engrossing pictures of your code. Codisplay is a code
                snippet editor."
          href="https://codisplay.vercel.app/"
        />
        <WorkCard
          title="Sunnier"
          desc="
          Sunnier is a basic weather application. Change your location,
          see the forecast 3 days in advance, and pay attention to the
          rain.
        "
          href="https://weather-application-pasztorgergo.vercel.app/"
        />
        <WorkCard
          title="Fresh News"
          desc="
          Fresh News is an unofficial Google News API. Get the top headlines with the publish dates and the providers. Search by country, or by title.
        "
          href="https://rapidapi.com/pasztorg05/api/fresh-news-unofficial-google-news/"
        />
      </ul>
      <Button id="more" style={{ gridColumn: "6/8", marginTop: "10vh" }}>
        More
      </Button>
    </section>
  );
}
