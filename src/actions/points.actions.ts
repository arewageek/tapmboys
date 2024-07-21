"use server";

export type Leagues = {
  name: string;
  entry: number;
  planet: string;
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
      planet: "/assets/images/planet.png",
    },

    {
      name: "Explorer",
      entry: 1001,
      limit: 5000,
      planet: "/assets/images/planet.png",
    },

    {
      name: "Voyager",
      entry: 5001,
      limit: 10000,
      planet: "/assets/images/planet.png",
    },
  ];

  return leaguesList;
}
