"use server";

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
