"use client";

import { About, Hero, Projects, Skills, Testimonials } from "../../components";

const HomePage = () => {
  return (
    <div className="md:py-12 md:px-28 p-4 m-0 min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default HomePage;
