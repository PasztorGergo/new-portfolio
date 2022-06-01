import Head from "next/head";
import { Header } from "../components";
import Style from "../styles/About.module.css";
import Link from "next/link";
import { SkillCard } from "../components";

export default function about() {
  const skills = [
    { title: "languages", values: ["HTML", "CSS", "JavaScript"] },
    { title: "frameworks", values: ["ReactJS", "NextJS", "TailwindCSS"] },
  ];
  return (
    <>
      <Head>
        <title>About | Gergő Pásztor</title>
      </Head>
      <Header title="I'm Gergő Pásztor" subTitle="Hi!" />
      <main>
        <section className={`${Style.section} section`}>
          <p className={Style.parag}>
            I was born in Győr, Hungary, and I&apos;m studying at{" "}
            <a
              href="https://gyor-pattantyus.www.intezmeny.edir.hu/"
              hrefLang="hu"
            >
              Pattantyús-Ábrahám Géza Technical Secondary school
            </a>
            .
          </p>
          <div className={Style.circuit}>
            <div className={Style.Image}></div>
          </div>
          <p className={Style.parag}>
            I live my life as a developer whose aspiration is to create
            solutions for tribulations.
          </p>
        </section>
        <section className={`${Style.section} section`}>
          <p>
            I have built several{" "}
            <Link href="https://gyor-pattantyus.www.intezmeny.edir.hu/">
              <a>masterpieces</a>
            </Link>{" "}
            for my customers, and I&apos;m still creating software products.
          </p>
          <p>
            In my opinion, uniting with others is an exceptional experience.
            That&apos;s why I usually offer my support.
          </p>
          <p>
            Over and above, I like to participate in competitions and while away
            with my friends and family.
          </p>
          <img src="/images/Plus.svg" className={Style.plus} />
        </section>
        <section className={`${Style.section} section`}>
          <h2 className={`${Style.title} sectionTitle`}>Skills</h2>
          {skills.map(({ title, values }) => (
            <SkillCard key={title} title={title} values={values} />
          ))}
        </section>
      </main>
    </>
  );
}
