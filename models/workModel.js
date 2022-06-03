import { Schema, model, models } from "mongoose";

const workSchema = new Schema({
  title: String,
  href: String,
  description: String,
  image: Buffer,
});

const Work = models.Work || model("Work", workSchema);

export default Work;
