"use server";

import prisma from "@/lib/prisma";

export async function getUserConfig(id: string) {
  const user = await prisma.user.findUnique({ where: { id } });

  //   if (!user) throw new Error("COuld not find user");
  if (!user)
    return {
      user: {
        recharge: 0,
        clicks: 0,
        capacity: 0,
      },
    };

  return {
    user: {
      recharge: user.refillRate,
      clicks: user.pointPerTap,
      capacity: user.rechargeLimit,
    },
  };
}

export async function creditProfitPerHour(id: string) {
  const user = await prisma.user.findUnique({ where: { chatId: id } });
  try {
    if (!user?.lastProfitDate) {
      await prisma.user.update({
        where: { chatId: id },
        data: { lastProfitDate: Date.now() },
      });

      return "success";
    } else {
      const pph = user.profitPerHour;
      const now = Date.now();
      const lastProfitDate = user.lastProfitDate;
      const timeDiffInMilliSeconds = Math.abs(now - lastProfitDate);
      const hrs = timeDiffInMilliSeconds / (1000 * 60 * 60);

      const profitMade = pph * hrs;

      await prisma.user.update({
        where: { chatId: id },
        data: { profit: profitMade, lastProfitDate: now },
      });
    }
  } catch (e) {
    console.log(e);
  }
}
