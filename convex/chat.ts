import { action, mutation, query } from "./_generated/server";
import { v } from "convex/values";
import OpenAI from "openai";
import { api } from "./_generated/api";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export const handlePlayerAction = action({
  args: {
    message: v.string(),
  },
  handler: async (context, args) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: args.message }],
      model: "gpt-3.5-turbo",
    });

    const input = args.message;
    const response = chatCompletion.choices[0].message.content ?? "";

    await context.runMutation(api.chat.storeEntry, {
      input,
      response,
    });

    console.log(chatCompletion);
    return chatCompletion;
  },
});

export const storeEntry = mutation({
  args: {
    input: v.string(),
    response: v.string(),
  },
  handler: async (context, args) => {
    context.db.insert("entries", {
      input: args.input,
      response: args.response,
    });
  },
});

export const getEntries = query({
  handler: async (context) => {
    const entries = await context.db.query("entries").collect();
    return entries;
  },
});
