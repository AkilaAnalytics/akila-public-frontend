import { json } from "@remix-run/node";
import { getChatSession } from "~/utils/server/chatHelpers.server";
import { type LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");

  if (!sessionId) {
    return json({ error: "Session ID required" }, { status: 400 });
  }

  try {
    const session = await getChatSession(sessionId);

    if (!session) {
      return json({ messages: [] });
    }

    return json({
      messages: session.messages || [],
      userInfo: {
        name: session.userName,
        email: session.userEmail,
      },
    });
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return json({ error: "Failed to fetch chat history" }, { status: 500 });
  }
};
