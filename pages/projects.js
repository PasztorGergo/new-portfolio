import React from "react";
import WorkCard from "../components/WorkCard";
import sectionStyle from "../styles/About.module.css";
import displayStyle from "../components/Projects/Projects.module.css";
import Style from "../styles/Projects.module.css";
import { Header } from "../components";
import Head from "next/head";
import Work from "../models/workModel";
import { connectDB } from "../lib/Projects";

export default function projects({ ProjectsArray }) {
  return (
    <>
      <Head>
        <meta name="description" content="Gergő Pásztor's work" />
        <meta property="og:title" content="Gergő Pásztor's work" />
        <title>Projects | Gergő Pásztor</title>
      </Head>
      <Header title="Projects" subTitle="Realized & WIP" />
      <main>
        <section className={`${sectionStyle.section} section`}>
          <h2 className={`${Style.title} sectionTitle`}>Projects</h2>
          <p className={Style.parag}>
            Here you can view my work, that I have created, and I&apos;m
            building.
          </p>
          <ul className={displayStyle.display}>
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
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    await connectDB();

    const ProjectsArray = await Work.find({});

    return {
      props: {
        ProjectsArray: JSON.parse(JSON.stringify(ProjectsArray)),
      },
    };
  } catch (error) {
    console.error(error);
  }
}
