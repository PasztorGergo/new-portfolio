import { About, Header, Projects, Footer } from "../components";

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
