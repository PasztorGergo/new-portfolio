import { About, Header, Projects } from "../components";
import Head from "next/head";

export default function Home() {
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
        <Projects />
      </main>
    </>
  );
}
