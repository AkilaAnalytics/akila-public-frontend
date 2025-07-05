import { getChatSession } from "~/utils/server/chatHelpers.server";
import { data } from "react-router";
import { type LoaderFunctionArgs } from "react-router";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");

  if (!sessionId) {
    return data({ error: "Session ID required" }, { status: 400 });
  }

  try {
    const session = await getChatSession(sessionId);

    if (!session) {
      return data({ messages: [] });
    }

    return data({
      messages: session.messages || [],
      userInfo: {
        name: session.userName,
        email: session.userEmail,
      },
    });
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return data({ error: "Failed to fetch chat history" }, { status: 500 });
  }
};
