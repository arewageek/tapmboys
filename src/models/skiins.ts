import mongoose, { Schema } from "mongoose";

export const SkinSchema = new Schema(
  {
    name: { type: String },
    profitPerHour: { type: Number, default: 0, required: true },
    image: {
      type: String,
      default: "/assets/images/space-bg.avif",
      required: true,
    },
    cost: { type: Number, required: true },
    league: { type: String, default: "intern", required: true },
  },
  { timestamps: true }
);

const Skins = mongoose.models.Skins || mongoose.model("Skins", SkinSchema);

export default Skins;
