import { NextRequest, NextResponse } from "next/server";
import { Bot } from "grammy";

const bot = new Bot("6884436801:AAFSOhkRgrDoPy7S81lFVh-uReZ_5fM7rs4");

type ValidMessageType = {
  data: {
    update_id: number;
    message?: {
      message_id: number;
      from?: [];
      chat?: [];
      date: number;
      text: string;
      entities?: [];
    };
  };
};

async function handler(request: NextRequest) {
  // bot.start(    () => console.log("ee"));
  console.log("rddddddddddddddddddd");

  const data: Promise<ValidMessageType> = await request.json();
  console.log({ data: await data });
  console.log({ from: await data?.message.chat.id });
  // bot.api.sendMessage(await data?.message?.message_id, "hello");

  bot.command("start", () => {
    console.log({ input: "received" });
  });

  return NextResponse.json({ done: "yes" });
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PUSH,
};
