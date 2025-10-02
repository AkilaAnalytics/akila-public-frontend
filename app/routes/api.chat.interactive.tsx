import {
  getChatSession,
  addMessageToSession,
  markSessionAsClosed,
} from "~/utils/server/chatHelpers.server";

import { type ActionFunctionArgs, type LoaderFunctionArgs } from "react-router";

// Handle GET requests (for Slack URL verification)
export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('GET request received at /api/chat/interactive');
  return new Response("Chat Interactive Endpoint Active", { 
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const payload = JSON.parse(formData.get("payload") as string);

    if (payload.type === "block_actions") {
      const action = payload.actions[0];
      const sessionId = action.value;

      console.log(
        `Processing action: ${action.action_id} for session: ${sessionId}`
      );

      if (action.action_id === "reply_to_chat") {
        const modal = {
          type: "modal",
          callback_id: "chat_reply_modal",
          title: { type: "plain_text", text: "Reply to Chat" },
          submit: { type: "plain_text", text: "Send Reply" },
          close: { type: "plain_text", text: "Cancel" },
          private_metadata: sessionId,
          blocks: [
            {
              type: "input",
              block_id: "reply_message",
              element: {
                type: "plain_text_input",
                action_id: "message_text",
                multiline: true,
                placeholder: { type: "plain_text", text: "Type your reply..." },
              },
              label: { type: "plain_text", text: "Your Reply" },
            },
          ],
        };

        const modalResponse = await fetch("https://slack.com/api/views.open", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            trigger_id: payload.trigger_id,
            view: modal,
          }),
        });

        const modalResult = await modalResponse.json();
        console.log("Modal response:", modalResult);
      }

      if (action.action_id === "view_full_chat") {
        console.log(`Fetching chat session for: ${sessionId}`);

        try {
          const session = await getChatSession(sessionId);
          console.log("Session found:", !!session);
          console.log(
            "Session details:",
            session
              ? {
                  id: session.id,
                  userName: session.userName,
                  userEmail: session.userEmail,
                  messageCount: session.messages?.length || 0,
                }
              : "No session"
          );

          if (session) {
            if (!session.messages || session.messages.length === 0) {
              console.log("No messages found in session");

              // Send message indicating no chat history
              const noHistoryResponse = await fetch(
                "https://slack.com/api/chat.postEphemeral",
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    channel: payload.channel.id,
                    user: payload.user.id,
                    text: `No chat history found for session ${sessionId}. The chat may have just started.`,
                  }),
                }
              );

              const noHistoryResult = await noHistoryResponse.json();
              console.log("No history message response:", noHistoryResult);
            } else {
              console.log(`Found ${session.messages.length} messages`);

              const chatHistory = session.messages
                .map((m) => {
                  const timestamp = new Date(m.timestamp).toLocaleString();
                  return `*${m.sender.toLowerCase()}:* ${
                    m.text
                  } _(${timestamp})_`;
                })
                .join("\n");

              console.log("Formatted chat history:", chatHistory);

              const historyResponse = await fetch(
                "https://slack.com/api/chat.postEphemeral",
                {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    channel: payload.channel.id,
                    user: payload.user.id,
                    text: `Chat History for ${session.userName} (${session.userEmail}):\n\n${chatHistory}`,
                  }),
                }
              );

              const historyResult = await historyResponse.json();
              console.log("Chat history response:", historyResult);

              if (!historyResult.ok) {
                console.error("Slack API error:", historyResult.error);

                // Try sending a simpler message as fallback
                const fallbackResponse = await fetch(
                  "https://slack.com/api/chat.postEphemeral",
                  {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      channel: payload.channel.id,
                      user: payload.user.id,
                      text: `Error displaying chat history. Session: ${sessionId}, Messages: ${session.messages.length}`,
                    }),
                  }
                );

                const fallbackResult = await fallbackResponse.json();
                console.log("Fallback response:", fallbackResult);
              }
            }
          } else {
            console.log("Session not found in database");

            // Send message indicating session not found
            const notFoundResponse = await fetch(
              "https://slack.com/api/chat.postEphemeral",
              {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  channel: payload.channel.id,
                  user: payload.user.id,
                  text: `Chat session ${sessionId} not found in database.`,
                }),
              }
            );

            const notFoundResult = await notFoundResponse.json();
            console.log("Not found message response:", notFoundResult);
          }
        } catch (sessionError) {
          console.error("Error fetching session:", sessionError);

          // Send error message
          const errorResponse = await fetch(
            "https://slack.com/api/chat.postEphemeral",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                channel: payload.channel.id,
                user: payload.user.id,
                text: `Error fetching chat session: ${sessionError.message}`,
              }),
            }
          );

          const errorResult = await errorResponse.json();
          console.log("Error message response:", errorResult);
        }
      }

      if (action.action_id === "close_chat") {
        try {
          await markSessionAsClosed(sessionId);

          const closeResponse = await fetch(
            "https://slack.com/api/chat.postEphemeral",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                channel: payload.channel.id,
                user: payload.user.id,
                text: `✅ Chat session ${sessionId} has been closed.`,
              }),
            }
          );

          const closeResult = await closeResponse.json();
          console.log("Close message response:", closeResult);
        } catch (closeError) {
          console.error("Error closing session:", closeError);
        }
      }
    }

    if (payload.type === "view_submission") {
      const sessionId = payload.view.private_metadata;
      const replyText =
        payload.view.state.values.reply_message.message_text.value;

      console.log(`Adding bot reply to session ${sessionId}: ${replyText}`);

      try {
        await addMessageToSession(sessionId, {
          text: replyText,
          sender: "BOT",
        });
        console.log("Bot reply added successfully");
      } catch (replyError) {
        console.error("Error adding bot reply:", replyError);
      }

      return new Response("", { status: 200 });
    }

    return new Response("", { status: 200 });
  } catch (error) {
    console.error("Slack interactive error:", error);
    return new Response("Error", { status: 500 });
  }
};
