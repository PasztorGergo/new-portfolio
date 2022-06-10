import React from "react";
import { connectDB } from "../../lib/Projects";
import mongoose from "mongoose";
import Post from "../../models/postModel";
import { getAllPosts, getPostPaths } from "../../lib/Blog";
import Head from "next/head";
import Link from "next/link";
import Style from "../../styles/Blog.module.css";
import { Badge, DateParser } from "../../components";
import Navigation from "../../components/Navigation";

export default function Blog({ PostsArray }) {
  return (
    <>
      <Head>
        <title>Blog | Gergő Pásztor</title>
      </Head>
      <Navigation />
      <header></header>
      <main className={Style.postContainer}>
        <div className={Style.leftCol}>
          {PostsArray.map(
            ({ _id, title, date, content_id, categories }, indx) =>
              indx % 2 == 1 && (
                <article
                  key={_id}
                  className={`${Style.post}  ${categories
                    .toString()
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace(",", " ")}`}
                >
                  <Link href={`/posts/${content_id}`}>
                    <a>
                      <h4>{title}</h4>
                      <DateParser date={date} />
                    </a>
                  </Link>
                  <div className={Style.badgeContainer}>
                    {categories.map((category, i) => (
                      <Badge key={i}>{category}</Badge>
                    ))}
                  </div>
                </article>
              )
          )}
        </div>
        <div className={Style.rightCol}>
          {PostsArray.map(
            ({ _id, title, date, content_id, categories }, indx) =>
              indx % 2 == 0 && (
                <article
                  key={_id}
                  className={`${Style.post} ${categories
                    .toString()
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace(",", " ")}`}
                >
                  <Link href={`/posts/${content_id}`}>
                    <a>
                      <h4>{title}</h4>
                      <DateParser date={date} />
                    </a>
                  </Link>
                  <div className={Style.badgeContainer}>
                    {categories.map((category, i) => (
                      <Badge key={i}>{category}</Badge>
                    ))}
                  </div>
                </article>
              )
          )}
        </div>
        <div className={Style.responsiveCol}>
          {PostsArray.map(
            ({ _id, title, date, content_id, categories }, indx) => (
              <article
                key={_id}
                className={`${Style.post} ${categories
                  .toString()
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace(",", " ")}`}
              >
                <Link href={`/posts/${content_id}`}>
                  <a>
                    <h4>{title}</h4>
                    <DateParser date={date} />
                  </a>
                </Link>
                <div className={Style.badgeContainer}>
                  {categories.map((category, i) => (
                    <Badge key={i}>{category}</Badge>
                  ))}
                </div>
              </article>
            )
          )}
        </div>
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
