import { About, Header, Projects } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
