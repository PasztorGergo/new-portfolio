import React from "react";
import Button from "../Button";
import WorkCard from "../WorkCard";
import Style from "./Projects.module.css";

export default function Projects({ ProjectsArray }) {
  return (
    <section
      aria-label="projects"
      className={`${Style.Projects} section`}
      id="work"
    >
      <h2 className={`${Style.title} sectionTitle`}>My Work</h2>
      <h3 className={Style.subtitle}>That I proud of</h3>
      <ul className={Style.display}>
        {ProjectsArray.map(({ _id, title, description, href, image }) => (
          <WorkCard
            key={_id}
            title={title}
            desc={description}
            href={href}
            image={`${Buffer.from(image).toString()}`}
          />
        ))}
      </ul>
      <Button
        ariaLabel="See more projects from Gergő"
        href="/projects"
        id="more"
        style={{ gridColumn: "6/8", marginTop: "10vh" }}
      >
        More
      </Button>
    </section>
  );
}
