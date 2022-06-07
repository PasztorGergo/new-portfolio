import React from "react";
import { DateParser } from "../../components";
import { getPostContent } from "../../lib/Blog";
import Head from "next/head";
import Link from "next/link";
import Style from "../../styles/Post.module.css";
import { connectDB } from "../../lib/Projects";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Gergő Pásztor</title>
      </Head>
      <header className={Style.header}>
        <h1>{postData.title}</h1>
        <DateParser date={postData.date} />
      </header>
      <main className={Style.postHolder}>
        <article
          className={Style.post}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        ></article>
        <Link href="/posts">
          <a className={Style.link}>← Back to Posts</a>
        </Link>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await connectDB();
  const postData = await getPostContent(params.id);
  return {
    props: {
      postData,
    },
  };
}
