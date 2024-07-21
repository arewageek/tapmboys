import { NextResponse } from "next/server";
import { Bot } from "grammy";

export async function POST() {
  const bot = new Bot(process.env.TELEGRAM_BOT_API_KEY!);

  let chat;

  //   bot.on("message", async (ctx) => {
  //     // const msg = ctx.message;

  //     console.log("received");
  //   });

  await bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
    { command: "help", description: "Show help text" },
    { command: "settings", description: "Open settings" },
  ]);

  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

  return NextResponse.json({
    type: "response",
    chatId: chat,
  });
}
