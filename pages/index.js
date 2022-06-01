import { About, Header, Projects } from "../components";

export default function Home() {
  return (
    <>
      <Header title="Gergő Pásztor" home subTitle="My name is" />
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
