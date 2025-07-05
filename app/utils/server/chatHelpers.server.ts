import { prisma } from "~/utils/server/index.server";

export interface ChatSessionData {
  sessionId: string;
  userInfo: {
    name: string;
    email: string;
  };
}

export interface MessageData {
  text: string;
  sender: "USER" | "BOT";
  timestamp?: Date;
}

export const createChatSession = async (
  sessionId: string,
  userInfo: { name: string; email: string }
) => {
  try {
    const session = await prisma.chatSession.create({
      data: {
        sessionId,
        userName: userInfo.name,
        userEmail: userInfo.email,
        status: "ACTIVE",
      },
    });
    return session;
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
};

export const addMessageToSession = async (
  sessionId: string,
  messageData: MessageData
) => {
  try {
    // Update last activity and add message in a transaction
    const result = await prisma.$transaction([
      prisma.chatSession.update({
        where: { sessionId },
        data: { lastActivity: new Date() },
      }),
      prisma.chatMessage.create({
        data: {
          sessionId,
          text: messageData.text,
          sender: messageData.sender,
          timestamp: messageData.timestamp || new Date(),
        },
      }),
    ]);

    return result[1]; // Return the created message
  } catch (error) {
    console.error("Error adding message to session:", error);
    throw error;
  }
};

export const getChatSession = async (sessionId: string) => {
  try {
    const session = await prisma.chatSession.findUnique({
      where: { sessionId },
      include: {
        messages: {
          orderBy: { timestamp: "asc" },
        },
      },
    });
    return session;
  } catch (error) {
    console.error("Error getting chat session:", error);
    throw error;
  }
};

// utils/chatHelpers.server.ts - Make sure this function filters correctly
export const getNewMessagesForSession = async (
  sessionId: string,
  lastMessageTimestamp?: string
) => {
  try {
    const whereClause: any = {
      sessionId,
      sender: "BOT", // Only get bot messages for the frontend
    };

    if (lastMessageTimestamp) {
      whereClause.timestamp = {
        gt: new Date(lastMessageTimestamp), // Only get messages after the last timestamp
      };
    }

    const messages = await prisma.chatMessage.findMany({
      where: whereClause,
      orderBy: { timestamp: "asc" },
    });

    return messages;
  } catch (error) {
    console.error("Error getting new messages:", error);
    throw error;
  }
};

export const getAllActiveSessions = async (limit = 50) => {
  try {
    const sessions = await prisma.chatSession.findMany({
      where: { status: "ACTIVE" },
      include: {
        messages: {
          orderBy: { timestamp: "desc" },
          take: 1, // Get latest message for each session
        },
      },
      orderBy: { lastActivity: "desc" },
      take: limit,
    });
    return sessions;
  } catch (error) {
    console.error("Error getting active sessions:", error);
    throw error;
  }
};

export const markSessionAsClosed = async (sessionId: string) => {
  try {
    const session = await prisma.chatSession.update({
      where: { sessionId },
      data: {
        status: "CLOSED",
        lastActivity: new Date(),
      },
    });
    return session;
  } catch (error) {
    console.error("Error closing session:", error);
    throw error;
  }
};

export const getSessionsByEmail = async (email: string) => {
  try {
    const sessions = await prisma.chatSession.findMany({
      where: { userEmail: email },
      include: {
        messages: {
          orderBy: { timestamp: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return sessions;
  } catch (error) {
    console.error("Error getting sessions by email:", error);
    throw error;
  }
};

// Cleanup old sessions (run this periodically)
export const cleanupOldSessions = async (daysOld = 30) => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const result = await prisma.chatSession.updateMany({
      where: {
        lastActivity: { lt: cutoffDate },
        status: "ACTIVE",
      },
      data: { status: "ARCHIVED" },
    });

    return result;
  } catch (error) {
    console.error("Error cleaning up old sessions:", error);
    throw error;
  }
};

export const fetchExistingMessages = async (sessionId: string) => {
  try {
    const response = await fetch(`/api/chat/history?sessionId=${sessionId}`);
    if (response.ok) {
      const data = await response.json();
      if (data.messages && data.messages.length > 0) {
        const formattedMessages = data.messages.map((msg: any) => ({
          id: msg.id,
          text: msg.text,
          sender: msg.sender.toLowerCase(),
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(formattedMessages);
        // Set the last timestamp for polling
        setLastPolledTimestamp(new Date().toISOString());
      }
    }
  } catch (error) {
    console.error("Error fetching existing messages:", error);
  }
};
