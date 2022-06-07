import React from "react";
import { connectDB } from "../../lib/Projects";
import mongoose from "mongoose";
import Post from "../../models/postModel";
import { getAllPosts, getPostPaths } from "../../lib/Blog";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ PostsArray }) {
  return (
    <>
      <Head>
        <title>Blog | Gergő Pásztor</title>
      </Head>
      <main>
        {PostsArray.map(({ _id, title, date, content_id }) => (
          <article key={_id}>
            <Link href={`/posts/${content_id}`}>
              <a>
                <h4>{title}</h4>
                <small>{date}</small>
              </a>
            </Link>
          </article>
        ))}
      </main>
    </>
  );
}
export async function getStaticProps() {
  try {
    await connectDB();

    const PostsArray = await getAllPosts();

    return {
      props: { PostsArray },
    };
  } catch (error) {
    console.error(error);
  }
}
