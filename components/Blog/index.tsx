import PostCard from "components/PostCard";
import SectionTitle from "components/SectionTitle";
import React from "react";

const getFeaturedPosts = async () => {
  const res = await fetch("https://api.hashnode.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        user(username: "G3rgoPasztor") {
          publication {
            posts(page: 0) {
             slug
             title
             brief
             coverImage
            }
          }
        }
      }`,
    }),
  });

  const json = await res.json();

  return json.data.user.publication.posts;
};

const Blog = async () => {
  const posts: Array<{
    slug: string;
    brief: string;
    title: string;
    coverImage: string;
  }> = await getFeaturedPosts();

  console.log(posts);

  return (
    <section className="md:mt-64 mt-16 flex flex-col items-center justify-center gap-8">
      <SectionTitle className="self-start">Blog</SectionTitle>
      <h3 className="text-white text-center">
        I'm sharing my experience in web development and helping others master
        it
      </h3>
      {posts.length > 0 ? (
        posts.map(({ title }) => <PostCard />)
      ) : (
        <>
          <p>Get notified of my newest article</p>
          <button
            type="submit"
            className="bg-brand p-3 hover:mix-blend-screen text-white font-bold text-sm uppercase rounded-lg overflow-hidden"
          >
            <a
              href="https://gergopasztor.hashnode.dev/newsletter"
              className="w-full h-full"
            >
              Subscribe
            </a>
          </button>
        </>
      )}
    </section>
  );
};

export default Blog;
