"use server";

import prisma from "@/lib/prisma";

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
    await prisma.skins.create({
      data: {
        name,
        cost: 100,
        image,
        league: "first",
        profitPerHour: 400,
      },
    });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function getSkins(): Promise<
  SkinType[] | "unknownError" | "skinNotFound"
> {
  try {
    const skins = await prisma.skins.findMany();
    if (!skins) return "skinNotFound";
    return skins;
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

export async function getSkinById(
  id: string
): Promise<SkinType | "skinNotFound" | "unknownError"> {
  try {
    const skin = await prisma.skins.findUnique({ where: { id } });
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
    await prisma.skins.delete({ where: { id } });
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
    const skin = await prisma.skins.findUnique({ where: { id } });
    const user = await prisma.user.findUnique({ where: { chatId } });
    const newBalance = localBalance - skin?.cost!;

    if (!user) return { status: "invalidUser" };
    if (!skin) return { status: "invalidSkin" };

    if (newBalance < 0) {
      return { status: "insufficientBalance" };
    } else {
      await prisma.user.update({
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
