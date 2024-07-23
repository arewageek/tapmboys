"use server";

import prisma from "@/lib/prisma";

export interface Bonus {
  id?: string;
  name: string;
  count: number;
  icon: string;
}

export async function allDailyBonuses(): Promise<
  Bonus[] | "noBonusFound" | "errorOccurred"
> {
  try {
    const bonuses = await prisma.dailyBoosters.findMany();
    if (!bonuses) {
      return "noBonusFound";
    }
    return bonuses;
  } catch (e) {
    console.log(e);
    return "errorOccurred";
  }
}
