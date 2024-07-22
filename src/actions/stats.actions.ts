"use server";

import prisma from "@/lib/prisma";

export async function appStats() {
  const points = await prisma.user.aggregate({ _sum: { points: true } });
  console.log({ allPoints: points._sum.points });
}
