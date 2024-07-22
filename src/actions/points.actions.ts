"use server";

import prisma from "@/lib/prisma";

export type Leagues = {
  name: string;
  entry: number;
  trophy: string;
  limit: number;
};

export async function leagueData(): Promise<{
  level: number;
  current: string;
}> {
  return { level: 1200, current: "pilot" };
}

export async function allLeagues(): Promise<Leagues[]> {
  const leaguesList: Leagues[] = [
    {
      name: "Pilot",
      entry: 0,
      limit: 1000,
      trophy: "/assets/images/trophy-bronze.png",
    },

    {
      name: "Explorer",
      entry: 1001,
      limit: 5000,
      trophy: "/assets/images/trophy-silver.png",
    },

    {
      name: "Voyager",
      entry: 5001,
      limit: 10000,
      trophy: "/assets/images/trophy-gold.webp",
    },
  ];

  return leaguesList;
}

export async function updatePointsInDB({
  points,
  id,
}: {
  points: number;
  id: string;
}): Promise<"success" | "unknownError" | "userNotExist"> {
  try {
    const user = await prisma.user.findUnique({ where: { chatId: id } });

    if (!user) return "userNotExist";

    await prisma.user.update({ where: { chatId: id }, data: { points } });

    return "success";
  } catch (e) {
    console.log(e);
    return "unknownError";
  }
}

// export async function getPoints (id: string){
//   const user = await prisma.user.findUnique({ where})
// }
