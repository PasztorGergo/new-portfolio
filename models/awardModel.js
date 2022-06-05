import { Schema, model, models } from "mongoose";

const awardSchema = new Schema({
  _id: String,
  title: String,
  placement: Number,
  date: Date,
});

const Award = models.Award || model("Award", awardSchema);

export default Award;
