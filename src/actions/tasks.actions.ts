"use server";

import prisma from "@/lib/prisma";

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
  const tasks = await prisma.tasks.findMany();

  if (!tasks) return [];
  return tasks;
}

export async function completeTask({
  userId,
  taskId,
}: {
  userId: string;
  taskId: string;
}): Promise<"success" | "unknownError" | "invalidTask" | "userNotExist"> {
  try {
    const task = await prisma.tasks.findUnique({ where: { id: taskId } });
    if (!task) return "invalidTask";

    const user = await prisma.user.findUnique({ where: { chatId: userId } });
    if (!user) return "userNotExist";

    await prisma.tasksCompletion.create({
      data: {
        reward: task.points,
        taskId,
        userId,
      },
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
