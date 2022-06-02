import React from "react";
import WorkCard from "../components/WorkCard";
import sectionStyle from "../styles/About.module.css";
import displayStyle from "../components/Projects/Projects.module.css";
import Style from "../styles/Projects.module.css";
import { Header } from "../components";
import Head from "next/head";

export default function projects({ projects }) {
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
            <WorkCard
              title="Codisplay"
              desc="
                Make engrossing pictures of your code. Codisplay is a code
                snippet editor."
              href="https://codisplay.vercel.app/"
              image="/images/codisplay-thumbnail.png"
            />
            <WorkCard
              title="Sunnier"
              desc="
          Sunnier is a basic weather application. Change your location,
          see the forecast 3 days in advance, and pay attention to the
          rain.
        "
              href="https://weather-application-pasztorgergo.vercel.app/"
              image="/images/weatherapp.png"
            />
            <WorkCard
              title="Fresh News"
              desc="
          Fresh News is an unofficial Google News API. Get the top headlines with the publish dates and the providers. Search by country, or by title.
        "
              href="https://rapidapi.com/pasztorg05/api/fresh-news-unofficial-google-news/"
              image="/images/freshnews.png"
            />
          </ul>
        </section>
      </main>
    </>
  );
}
