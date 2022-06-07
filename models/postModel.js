import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  _id: String,
  title: String,
  content_id: String,
  date: Date,
});

const Post = models ? models.Post || model("Post", postSchema) : undefined;

export default Post;
