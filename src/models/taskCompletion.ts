import mongoose, { Schema } from "mongoose";

export const TasksCompletionSchema = new Schema(
  {
    taskId: { type: String },
    userId: { type: String, reqired: true },
    reward: { type: Number, defaul: 0 },
  },
  { timestamps: true }
);

const TasksCompletion =
  mongoose.models.TasksCompletion ||
  mongoose.model("TasksCompletion", TasksCompletionSchema);

export default TasksCompletion;
