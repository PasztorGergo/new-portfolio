import { About, Awards, Header, Projects } from "../components";
import Head from "next/head";
import { connectDB } from "../lib/Projects";
import Work from "../models/workModel";
import Award from "../models/awardModel";

export default function Home({ ProjectsArray, AwardsArray }) {
  return (
    <>
      <Head>
        <meta name="description" content="Gergő Pásztor's portfolio" />
        <meta property="og:title" content="Gergő Pásztor's portfolio" />
        <meta
          property="og:description"
          content="Take a view at my projects and learn more about me. Contact me any time."
        />
        <title>Portfolio | Gergő Pásztor</title>
      </Head>
      <Header title="Gergő Pásztor" home subTitle="My name is" />
      <main>
        <About />
        <Projects ProjectsArray={ProjectsArray} />
        <Awards awards={AwardsArray} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    await connectDB();

    const ProjectsArray = await Work.find({});
    const Awards = await Award.find({});

    return {
      props: {
        ProjectsArray: JSON.parse(JSON.stringify(ProjectsArray)),
        AwardsArray: JSON.parse(JSON.stringify(Awards)),
      },
    };
  } catch (error) {
    console.error(error);
  }
}
