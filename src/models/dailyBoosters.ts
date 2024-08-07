import mongoose, { Schema } from "mongoose";

const dailyBoostersSchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, default: 3 },
  image: { type: String },
});

const DailyBoosters =
  mongoose.models.DailyBoosters ||
  mongoose.model("DailyBoosters", dailyBoostersSchema);

export default DailyBoosters;
