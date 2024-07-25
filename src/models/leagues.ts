import mongoose, { Schema } from "mongoose";

const LeagueSchema = new Schema(
  {
    name: { type: String, required: true },
    minEntry: { type: Number },
    pointLimit: { type: Number },
    entryReward: { type: Number },
    trophy: { type: String },
  },
  { timestamps: true }
);

const Leagues =
  mongoose.models.league || mongoose.model("Leagues", LeagueSchema);

export default Leagues;
