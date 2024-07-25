"use server";

import { connectMongoDB } from "@/lib/mongodb";
import prisma from "@/lib/prisma";
import User from "@/models/user";

export type User = {
  id: string;
  name: string | null;
  chatId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User2 = Omit<User, "id, createdAt, updatedAt">;

export async function createAccount(
  chatId: string
): Promise<"success" | "accountAlreadyExist" | "unknownError"> {
  try {
    await connectMongoDB();

    const chatExist = await User.find({
      where: { chatId },
    });
    if (chatExist) return "accountAlreadyExist";

    await User.create({ chatId });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function authenticateUser({
  chatId,
}: {
  chatId: string;
}): Promise<User | "userNotFound" | "unknownError"> {
  try {
    const user = await User.find({ where: { chatId } });
    if (!user) return "userNotFound";
    return user;
  } catch (err) {
    return "unknownError";
  }
}

export async function updateProfile(
  data: User2
): Promise<"success" | "unknownError" | "userNotExist"> {
  try {
    const user = await prisma.user.findUnique({
      where: { chatId: data.chatId },
    });
    if (!user) return "userNotExist";

    await prisma.user.update({ where: { chatId: data.chatId }, data });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function authenticateUserOrCreateAccount({
  chatId,
}: {
  chatId: string;
}): Promise<"success" | "unknownError" | "accountCreationFailed"> {
  try {
    const userAuth = await authenticateUser({ chatId });
    if (userAuth === "userNotFound") {
      await createAccount(chatId);
    }

    const account = await prisma.user.findUnique({ where: { chatId } });
    if (!account) return "accountCreationFailed";
    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}
