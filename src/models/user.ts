import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: false },
    chatId: { type: String, unique: true },
    taps: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    profit: { type: Number, default: 0 },
    profitPerHour: { type: Number },
    lastProfitDate: { type: Number },
    rechargeLimit: { type: Number },
    pointsPerTap: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("User", UserSchema);

export default User;
