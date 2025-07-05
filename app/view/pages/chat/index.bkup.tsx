import { useFetcher } from "@remix-run/react";
import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface Props {
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Chatbot({ isOpen, onToggle }: Props) {
  const [sessionId] = useState(
    () => `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [showUserForm, setShowUserForm] = useState(true);
  const [lastPolledTimestamp, setLastPolledTimestamp] = useState<string | null>(
    null
  ); // Track last polled message

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetcher = useFetcher();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Poll for new messages from Slack
  useEffect(() => {
    if (!showUserForm) {
      const interval = setInterval(async () => {
        try {
          // Build URL with sessionId and lastPolledTimestamp
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
              // Add new messages and update timestamp tracking
              setMessages((prev) => {
                // Filter out any duplicates based on message ID
                const existingIds = new Set(prev.map((m) => m.id));
                const uniqueNewMessages = data.newMessages.filter(
                  (msg: Message) => !existingIds.has(msg.id)
                );

                return [...prev, ...uniqueNewMessages];
              });

              // Update the last polled timestamp
              if (data.lastTimestamp) {
                setLastPolledTimestamp(data.lastTimestamp);
              }
            }
          }
        } catch (error) {
          console.error("Error polling for messages:", error);
        }
      }, 3000); // Poll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [sessionId, showUserForm, lastPolledTimestamp]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false);
      const welcomeMessage = {
        id: Date.now().toString(),
        text: `Thanks ${userInfo.name}! What can I help you with?`,
        sender: "bot" as const,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, welcomeMessage]);

      // Set initial timestamp to prevent polling old messages
      setLastPolledTimestamp(new Date().toISOString());
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setMessages((prev) => [...prev, botMessage]);
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

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-black rounded-full p-4 shadow-lg transition-all duration-200 z-50"
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
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3 className="font-semibold">Chat Support</h3>
        <button
          onClick={onToggle}
          className="text-white hover:text-gray-200"
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

      {/* User Info Form */}
      {showUserForm && (
        <div className="p-4 border-b border-gray-200">
          <form onSubmit={handleUserInfoSubmit} className="space-y-3">
            <div className="text-black">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, name: e.target.value }))
                }
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                className="text-black w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
            >
              Start Chat
            </button>
          </form>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
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
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {!showUserForm && (
        <div className="border-t border-gray-200 p-4">
          <fetcher.Form
            onSubmit={sendMessage}
            className="flex space-x-2"
            method="POST"
            action="/api/chat"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="text-black flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
            >
              Send
            </button>
          </fetcher.Form>
        </div>
      )}
    </div>
  );
}
