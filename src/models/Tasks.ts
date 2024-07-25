import mongoose, { Schema } from "mongoose";

export const TaskSchema = new Schema(
  {
    category: { type: String },
    name: { type: String, reqired: true },
    points: { type: Number, defaul: 0 },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema);

export default Tasks;
