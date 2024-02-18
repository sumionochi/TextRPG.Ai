import { action } from "./_generated/server";
import { v } from "convex/values";

export const handlePlayerAction = action({
  args: {
    message: v.string(),
  },
  handler: () => {
    return "success";
  },
});
