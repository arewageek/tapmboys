"use server";

import prisma from "@/lib/prisma";
import Tasks from "@/models/Tasks";
import TasksCompletion from "@/models/taskCompletion";
import User from "@/models/user";

export type TasksList = {
  id?: string;
  category: string;
  name: string;
  points: number;
  icon: string;
};
export type CompletedTasksType = {
  id?: string;
  taskId: string;
  userId: string;
  reward: number;
};

export async function tasksList(): Promise<TasksList[] | []> {
  try {
    const tasks = await Tasks.find();
    console.log(tasks);

    return tasks;
  } catch (error) {
    console.log({ error });
    return [];
  }
}

export async function completeTask({
  userId,
  taskId,
}: {
  userId: string;
  taskId: string;
}): Promise<"success" | "unknownError" | "invalidTask" | "userNotExist"> {
  try {
    const task: typeof Tasks = await Tasks.find({ $where: { id: taskId } });
    if (!task) return "invalidTask";

    const user = await User.find({ where: { chatId: userId } });
    console.log(user);

    if (!user) return "userNotExist";

    await TasksCompletion.create({
      reward: task.points,
      taskId,
      userId,
    });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function checkCompletedTasks({
  userId,
  taskId,
}: {
  taskId: string;
  userId: string;
}): Promise<boolean> {
  try {
    const completion = await prisma.tasksCompletion.findFirst({
      where: { userId, taskId },
    });

    console.log({ completion });
    return !!completion;
  } catch (e) {
    console.log(e);
    return false;
  }
}
