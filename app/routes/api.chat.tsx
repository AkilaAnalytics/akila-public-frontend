import {
  createChatSession,
  addMessageToSession,
  getChatSession,
} from "~/utils/server/chatHelpers.server";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const { message, userInfo, sessionId, timestamp } = await request.json();

    // Check if session exists, create if not
    let session = await getChatSession(sessionId);
    if (!session) {
      session = await createChatSession(sessionId, userInfo);
    }

    // Add user message to session
    await addMessageToSession(sessionId, {
      text: message,
      sender: "USER",
      timestamp: new Date(timestamp),
    });

    // Format the message for Slack with interactive buttons
    const slackMessage = {
      text: "New Chat Message from Website",
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "💬 New Chat Message",
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*From:* ${userInfo.name}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:* ${userInfo.email}`,
            },
            {
              type: "mrkdwn",
              text: `*Session:* \`${sessionId}\``,
            },
          ],
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Message:*\n${message}`,
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Reply to Chat",
              },
              style: "primary",
              action_id: "reply_to_chat",
              value: sessionId,
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "View Full Chat",
              },
              action_id: "view_full_chat",
              value: sessionId,
            },
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Close Chat",
              },
              action_id: "close_chat",
              value: sessionId,
            },
          ],
        },
        {
          type: "divider",
        },
      ],
    };

    // Send to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API error: ${slackResponse.status}`);
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
};
