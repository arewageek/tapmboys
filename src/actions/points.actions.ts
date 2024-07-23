"use server";

import prisma from "@/lib/prisma";

export type League = {
  name: string;
  minEntry: number;
  trophy: string;
  entryReward: number;
  pointLimit: number;
};

export async function leagueData(): Promise<{
  level: number;
  current: string;
}> {
  return { level: 1200, current: "pilot" };
}

export async function allLeagues(): Promise<League[]> {
  const leaguesList: League[] = [
    {
      name: "Pilot",
      minEntry: 0,
      pointLimit: 1000,
      trophy: "/assets/images/trophy-bronze.png",
      entryReward: 10000,
    },

    {
      name: "Explorer",
      minEntry: 1001,
      pointLimit: 5000,
      trophy: "/assets/images/trophy-silver.png",
      entryReward: 20000,
    },

    {
      name: "Voyager",
      minEntry: 5001,
      pointLimit: 10000,
      trophy: "/assets/images/trophy-gold.webp",
      entryReward: 40000,
    },
  ];

  // const leaguesList = await prisma.leagues.findMany();
  // if (!leaguesList) return "noRecordFound";

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
