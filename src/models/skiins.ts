import mongoose, { Schema } from "mongoose";

export const SkinSchema = new Schema(
  {
    name: { type: String },
    profitPerHour: { type: Number, default: 0 },
    image: { type: Number, defaul: 0 },
    cost: { type: Number, required: true },
    league: { type: String, default: "intern" },
  },
  { timestamps: true }
);

const Skins = mongoose.models.Skins || mongoose.model("Skins", SkinSchema);

export default Skins;
