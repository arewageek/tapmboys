import { NextRequest, NextResponse } from "next/server";
import { Bot } from "grammy";

const bot = new Bot("6884436801:AAFSOhkRgrDoPy7S81lFVh-uReZ_5fM7rs4");

// export async function POST() {
//   console.log("response");
//   bot.command("start", (ctx) => console.log("received"));

//   return "hello";
// }

// export async function GET() {
//   bot.command("start", (ctx) => console.log("received"));

//   return "hello";
// }

async function handler() {
  // bot.start(    () => console.log("ee"));
  console.log("rddddddddddddddddddd");

  return NextResponse.json({ done: "yes" });
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PUSH,
};
