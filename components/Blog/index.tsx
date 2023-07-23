import SectionTitle from "components/SectionTitle";
import React from "react";

const Blog = () => {
  return (
    <section className="md:mt-64 mt-16 flex flex-col items-center justify-center gap-8">
      <SectionTitle>Blog</SectionTitle>
      <h3 className="text-white text-center">
        I'm sharing my experience in web development and helping others master
        it
      </h3>
      <form className="flex flex-col items-center gap-4">
        <p>Get notified of my newest article</p>
        <input type={"email"} />
      </form>
    </section>
  );
};

export default Blog;
