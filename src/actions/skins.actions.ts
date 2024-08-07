"use server";

import { connectMongoDB } from "@/lib/mongodb";
import prisma from "@/lib/prisma";
import Skins from "@/models/skiins";

connectMongoDB();

export type SkinType = {
  id?: string;
  name: string;
  image: string;
  profitPerHour?: number | null;
  cost: number;
  league?: string;
};

export async function createSkin({
  name,
  profitPerHour,
  image,
  league,
  cost,
}: SkinType): Promise<"success" | "unknownError"> {
  try {
    await Skins.create({
      name,
      cost: 100,
      image,
      league: "first",
      profitPerHour: 400,
    });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function getSkins(): Promise<
  (typeof Skins)[] | "unknownError" | "skinNotFound"
> {
  try {
    const skins = await Skins.find();
    console.log({ skins });

    return skins;
  } catch (error) {
    console.log(error);
    return "unknownError";
  }
}

export async function getSkinById(
  id: string
): Promise<(typeof Skins)[] | "skinNotFound" | "unknownError"> {
  try {
    const skin = await Skins.findById(id);
    if (!skin) return "skinNotFound";
    return skin;
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function deleteSkin(
  id: string
): Promise<"success" | "unknonwnError"> {
  try {
    await Skins.deleteOne({ where: { id } });
    return "success";
  } catch (e) {
    return "unknonwnError";
  }
}

export async function skinBuy({
  id,
  localBalance,
  chatId,
}: {
  id: string;
  localBalance: number;
  chatId: string;
}): Promise<
  | { status: "success"; points: number; image: string }
  | { status: "errorOccurred" }
  | { status: "insufficientBalance" }
  | { status: "invalidUser" }
  | { status: "invalidSkin" }
> {
  try {
    const skin = await Skins.findById({ where: { id } });
    const user = await Skins.findById({ where: { chatId } });
    const newBalance = localBalance - skin?.cost!;

    if (!user) return { status: "invalidUser" };
    if (!skin) return { status: "invalidSkin" };

    if (newBalance < 0) {
      return { status: "insufficientBalance" };
    } else {
      await Skins.updateOne({
        where: { chatId },
        data: { points: newBalance },
      });

      return { points: newBalance, status: "success", image: skin.image };
    }
  } catch (e) {
    console.log(e);
    return { status: "errorOccurred" };
  }
}

// export async function getCurrentSkin({ user }: { user: string }) {
//   const acct: typeof Skins = await Skins.find({ where: { chatId: user } });

//   const skin = acct?.skin;

//   return skin;
// }
