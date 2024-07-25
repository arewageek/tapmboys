"use server";

import { connectMongoDB } from "@/lib/mongodb";
import prisma from "@/lib/prisma";
import User from "@/models/user";
import mongoose from "mongoose";

export type UserType = {
  id: string;
  name: string | null;
  chatId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User2 = Omit<UserType, "id, createdAt, updatedAt">;

export async function createAccount(
  chatId: string
): Promise<"success" | "accountAlreadyExist" | "unknownError"> {
  try {
    await connectMongoDB();

    // const chatExist = await User.find({
    //   where: { chatId },
    // });
    // if (chatExist) return "accountAlreadyExist";

    const user = new User({
      chatId,
    });

    user.save();

    if (false) return "accountAlreadyExist";
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
}): Promise<(typeof User)[] | "userNotFound" | "unknownError"> {
  try {
    const user = await mongoose.models.user.find();
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
}): Promise<
  "success" | "unknownError" | "accountCreationFailed" | "accountAlreadyExist"
> {
  try {
    const userAuth = await authenticateUser({ chatId });
    if (userAuth === "userNotFound") {
      const accountCreationState = await createAccount(chatId);
      console.log({ accountCreationState });
      return accountCreationState;
    }
    const account = await prisma.user.findUnique({ where: { chatId } });
    if (!account) return "accountCreationFailed";

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}
