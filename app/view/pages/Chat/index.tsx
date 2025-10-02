import React, { useState, useRef, useEffect } from "react";
import { logger } from "~/utils";
import { useAppContext } from "~/view/context";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Safe localStorage helper
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(key);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },
  removeItem: (key: string): void => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  },
};

export default function Chatbot() {
  const { toggleChat, isChatOpen } = useAppContext();
  logger.log({
    message: "Chat component useAppContext",
    isChatOpen,
    toggleChat: !!toggleChat,
  });
  const onToggle = toggleChat;
  const isOpen = isChatOpen;
  const [sessionId, setSessionId] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [showUserForm, setShowUserForm] = useState(true);
  const [lastPolledTimestamp, setLastPolledTimestamp] = useState<string | null>(
    null
  );
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize from localStorage after component mounts
  useEffect(() => {
    logger.log({
      message: "Chat initialization useEffect triggered",
      windowDefined: typeof window !== "undefined",
    });
    if (typeof window !== "undefined") {
      // Get or create session ID
      const existingSession = safeLocalStorage.getItem("chatSessionId");
      if (existingSession) {
        setSessionId(existingSession);
        logger.log({
          message: "Using existing session",
          sessionId: existingSession,
        });
      } else {
        const newSession = `chat_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`;
        safeLocalStorage.setItem("chatSessionId", newSession);
        setSessionId(newSession);
        logger.log({ message: "Created new session", sessionId: newSession });
      }

      // Get user info
      const savedUserInfo = safeLocalStorage.getItem("chatUserInfo");
      if (savedUserInfo) {
        try {
          const parsedUserInfo = JSON.parse(savedUserInfo);
          setUserInfo(parsedUserInfo);
          setShowUserForm(false);
          logger.log({
            message: "Loaded saved user info",
            userInfo: parsedUserInfo,
          });
        } catch (error) {
          logger.log({ message: "Error parsing saved user info", error });
        }
      }

      setIsInitialized(true);
      logger.log({ message: "Chat component initialized successfully" });
    }
  }, []);

  const fetchExistingMessages = async (sessionId: string) => {
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
          setLastPolledTimestamp(new Date().toISOString());
        }
      }
    } catch (error) {
      console.error("Error fetching existing messages:", error);
    }
  };

  // Fetch existing messages when initialized
  useEffect(() => {
    if (isInitialized && !showUserForm && sessionId) {
      fetchExistingMessages(sessionId);
    }
  }, [sessionId, showUserForm, isInitialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Poll for new messages from Slack
  useEffect(() => {
    if (isInitialized && !showUserForm && sessionId) {
      const interval = setInterval(async () => {
        try {
          const params = new URLSearchParams({
            sessionId: sessionId,
          });

          if (lastPolledTimestamp) {
            params.append("lastMessageTimestamp", lastPolledTimestamp);
          }

          const response = await fetch(`/api/chat/poll?${params.toString()}`);
          if (response.ok) {
            const data = await response.json();
            if (data.newMessages && data.newMessages.length > 0) {
              setIsTyping(true);

              setTimeout(() => {
                setMessages((prev) => {
                  const existingIds = new Set(prev.map((m) => m.id));
                  const uniqueNewMessages = data.newMessages.filter(
                    (msg: Message) => !existingIds.has(msg.id)
                  );
                  return [...prev, ...uniqueNewMessages];
                });
                setIsTyping(false);
              }, 1000);

              if (data.lastTimestamp) {
                setLastPolledTimestamp(data.lastTimestamp);
              }
            }
          }
        } catch (error) {
          console.error("Error polling for messages:", error);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [sessionId, showUserForm, lastPolledTimestamp, isInitialized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleUserInfoSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();
    if (userInfo.name && userInfo.email) {
      safeLocalStorage.setItem("chatUserInfo", JSON.stringify(userInfo));
      setShowUserForm(false);
      const welcomeMessage = {
        id: Date.now().toString(),
        text: `Thanks ${userInfo.name}! What can I help you with?`,
        sender: "bot" as const,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, welcomeMessage]);
      setLastPolledTimestamp(new Date().toISOString());
    }
  };

  const sendMessage = async (
    e?: React.FormEvent | React.MouseEvent | React.KeyboardEvent
  ) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputText,
          userInfo: userInfo,
          timestamp: new Date().toISOString(),
          sessionId,
        }),
      });

      if (response.ok) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thanks for your message! I've received it and will get back to you soon.",
          sender: "bot",
          timestamp: new Date(),
        };
        //setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, there was an error sending your message. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const clearChat = () => {
    safeLocalStorage.removeItem("chatSessionId");
    safeLocalStorage.removeItem("chatUserInfo");
    window.location.reload();
  };

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="fixed bottom-6 right-6 w-20 h-20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center z-50">
        <div className="text-gray-200 text-center">Loading chat...</div>
      </div>
    );
  }

  // Rest of your component remains the same...
  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="cursor-pointer fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Open chat"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className="z-[999] fixed bottom-6 right-6 w-96 h-[32rem] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="flex justify-between items-center relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="py-5">
            <h3 className="font-semibold text-lg">Chat Support</h3>
            <p className="text-white/80 text-xs">
              Our chat is monitored by real humans (no bots).
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggle}
            className="cursor-pointer relative text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close chat"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Rest of your component JSX remains the same... */}
      {/* User Info Form */}
      {showUserForm && (
        <div className="flex-1 p-6 bg-background">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Welcome!</h3>
            <p className="textBody text-sm">
              Let's get started with a quick introduction
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-4 py-3 bg-secondaryBg border border-borderColor rounded-md text-white placeholder-greyText focus:outline-none focus:border-greyText transition-all duration-200"
                placeholder="Enter your name"
                onKeyPress={(e) =>
                  e.key === "Enter" && userInfo.email && handleUserInfoSubmit(e)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-3 bg-secondaryBg border border-borderColor rounded-md text-white placeholder-greyText focus:outline-none focus:border-greyText transition-all duration-200"
                placeholder="your@email.com"
                onKeyPress={(e) =>
                  e.key === "Enter" && userInfo.name && handleUserInfoSubmit(e)
                }
              />
            </div>
            <button
              onClick={handleUserInfoSubmit}
              disabled={!userInfo.name || !userInfo.email}
              className="w-full py-3 bg-lightGrey hover:bg-darkGrey text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
        {messages.map((message, index) => (
          <div key={message.id} className="space-y-1">
            <div
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl text-sm ${
                  message.sender === "user"
                    ? "bg-secondaryBg text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
              </div>
            </div>
            <div
              className={`text-xs textBody ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              {new Date(message.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {(isLoading || isTyping) && (
          <div className="space-y-1">
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1 items-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">Typing...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {!showUserForm && (
        <div className="p-4 bg-lightGrey">
          <div className="flex space-x-3 items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" &&
                  !isLoading &&
                  inputText.trim() &&
                  sendMessage(e)
                }
                placeholder="Type your message..."
                className="w-full px-4 py-3 pr-12 bg-white rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none transition-all duration-200"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 disabled:text-gray-300 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-xs textBody mt-2 text-center">
            Press Enter to send • We typically reply within a few minutes
          </p>
        </div>
      )}
    </div>
  );
}
