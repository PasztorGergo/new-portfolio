import { Schema, model, models } from "mongoose";

const contentSchema = new Schema({
  _id: String,
  content: String,
});

const Content = models
  ? models.Content || model("Content", contentSchema)
  : undefined;

export default Content;
