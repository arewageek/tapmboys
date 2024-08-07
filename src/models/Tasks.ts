import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    category: { type: String },
    name: { type: String, reqired: true },
    points: { type: Number, default: 0, required: false },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Tasks = mongoose.models.Tasks || mongoose.model("Tasks", TaskSchema);

export default Tasks;
