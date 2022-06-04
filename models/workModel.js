import { Schema, model, models } from "mongoose";

const workSchema = new Schema({
  _id: String,
  title: String,
  href: String,
  description: String,
  image: Buffer,
});

const Work = models.Work || model("Work", workSchema);

export default Work;
