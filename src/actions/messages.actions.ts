"use server";

import { Bot } from "grammy";

const bot = new Bot(process.env.TELEGRAM_BOT_API_KEY!);

export async function sendMessage({ chatId }: { chatId: string }) {
  bot.api.sendMessage(chatId, "Sample message");
}
