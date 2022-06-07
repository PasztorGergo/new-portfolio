import Post from "../models/postModel";
import Content from "../models/contentModel";
import { remark } from "remark";
import html from "remark-html";

export async function getAllPosts() {
  const Posts = await Post.find({}).sort({ date: "asc" });
  return JSON.parse(JSON.stringify(Posts));
}

export async function getPostContent(postID) {
  const Contents = JSON.parse(JSON.stringify(await Content.find({})));
  const Posts = await getAllPosts();

  const docContent = Contents.find(({ _id }) => _id == postID);

  const processedContent = await remark().use(html).process(docContent.content);

  const { title, date } = Posts.find(({ content_id }) => content_id == postID);
  return {
    id: postID,
    title,
    date,
    contentHtml: processedContent.toString(),
  };
}
