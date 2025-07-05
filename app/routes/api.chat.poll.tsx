// api.chat.poll.tsx - Updated to use Prisma
import { getNewMessagesForSession } from "~/utils/server/chatHelpers.server";
import { data, type LoaderFunctionArgs } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");
  const lastMessageTimestamp = url.searchParams.get("lastMessageTimestamp");

  if (!sessionId) {
    return data({ error: "Session ID required" }, { status: 400 });
  }

  try {
    const newMessages = await getNewMessagesForSession(
      sessionId,
      lastMessageTimestamp
    );

    // Only return bot messages for the frontend
    const botMessages = newMessages
      .filter((m) => m.sender === "BOT")
      .map((m) => ({
        id: m.id,
        text: m.text,
        sender: "bot",
        timestamp: m.timestamp,
      }));

    return data({
      newMessages: botMessages,
      lastTimestamp:
        newMessages.length > 0
          ? newMessages[newMessages.length - 1].timestamp
          : null,
    });
  } catch (error) {
    console.error("Error polling for messages:", error);
    return data({ error: "Failed to fetch messages" }, { status: 500 });
  }
};
