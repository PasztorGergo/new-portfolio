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

export default async function Blog() {
  const posts: Array<{
    slug: string;
    brief: string;
    title: string;
    coverImage: string;
  }> = await getFeaturedPosts();

  return (
    <>
      <section className="md:mt-64 mt-16 flex flex-col items-center justify-center gap-8">
        <SectionTitle className="self-start">Blog</SectionTitle>
        <h3 className="text-white text-center">
          Helping you to be a master of web development by sharing my experience
          along my journey
        </h3>
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} {...post} />)
        ) : (
          <>
            <p>Get notified of my newest article</p>
            <button
              type="submit"
              className="bg-brand px-4 py-2 hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded-lg overflow-hidden"
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
    </>
  );
}
