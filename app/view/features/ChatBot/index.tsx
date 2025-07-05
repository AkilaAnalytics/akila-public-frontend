import type { ILoaderData } from "~/utils";

import { useEffect, useRef, useState } from "react";
import ChatLogo from "./chat-logo.svg";
import { useFetcher } from "react-router";
import { useLoaderData } from "react-router";

interface IChat {
  text: string;
  type: "bot" | "user" | "button" | "input";
}

export default function ChatBot() {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [savedEmail, setSavedEmail] = useState<boolean>(false);
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<IChat[]>([
    {
      text: "Hi there, welcome to Akila Analytics' Help Center. Please tell us which option best describes your visit today.",
      type: "bot",
    },
  ]);
  const addToChatHistory = (text: string, type: "bot" | "user") => {
    setChatHistory((prevHistory) => [...prevHistory, { text, type }]);
  };
  const [message, setMessage] = useState<string>("");
  const [messageSent, setMessageSent] = useState<boolean>(false);

  // styles
  //const chatMessageStyle = 'mb-3 p-3 rounded-lg bg-blue-200 text-blue-800'
  //const userMessageStyle = 'mb-3 p-3 rounded-lg bg-gray-200 text-gray-800'
  const chatMessageStyle =
    "w-10/12 p-3 rounded-lg mb-3 bg-blue-200 text-blue-800 text-left ml-0 mr-auto"; // Added text-left, ml-0 and mr-auto for left alignment
  const userMessageStyle =
    "text-left w-10/12 mb-3 p-3 rounded-lg bg-gray-200 text-gray-800 ml-auto mr-0"; // Added text-right, ml-auto and mr-0 for right alignment

  const userOptionStyle =
    "w-full p-3 rounded-lg border bg-gray-100 text-gray-800";
  const inputStyle = "mt-2 w-full rounded border p-2 text-black";

  // fetcher
  const fetcher = useFetcher();

  // loaderData (for phone number)
  const loaderData = useLoaderData<ILoaderData>();

  // ensure chat div is always scrolled to the bottom
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [savedEmail, selectedOption]);

  // bottom0-10
  return (
    <div>
      <div
        className={`h-15 fixed bottom-10 right-10 z-50 rounded-full p-5 ${
          showChat
            ? ""
            : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-periwinkle via-periwinkle to-darkGrey"
        }`}
      >
        <img
          src={ChatLogo}
          alt="Chat Icon"
          height={20}
          width={20}
          className={showChat ? "hidden" : "cursor-pointer"}
          onClick={() => setShowChat(!showChat)}
        />
      </div>

      {showChat && (
        <div
          className={`fixed bottom-0 right-0 z-50 h-[90vh] rounded-full p-5 pb-16 md:h-3/4 md:pb-0 ${
            showChat ? "" : "bg-periwinkle"
          }`}
        >
          <div className="flex h-full w-full flex-col overflow-y-scroll rounded-lg bg-white md:w-80">
            <div className="button-gradient flex w-full items-center justify-between gap-5 rounded-t-lg py-2 text-center font-semibold text-white">
              <div className="flex-grow p-2">
                <h6 className="text-center md:scale-105">
                  Akila Analytics' Help Center
                </h6>
              </div>
              <button
                className="pr-2 hover:font-bold hover:text-red-500"
                onClick={() => setShowChat(false)}
              >
                X
              </button>
            </div>
            <br />
            <br />

            <div
              className="flex-grow overflow-y-scroll p-2 font-poppins"
              ref={divRef}
            >
              {/* Display Chat History */}
              {chatHistory.map((entry, idx) => (
                <div
                  key={idx}
                  className={`${
                    entry.type === "bot" ? chatMessageStyle : userMessageStyle
                  }`}
                >
                  {entry.text}
                </div>
              ))}

              {/* Email Input */}
              {selectedOption && !savedEmail && (
                <>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={inputStyle}
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                  <button
                    className={userOptionStyle}
                    disabled={!userEmail}
                    onClick={() => {
                      addToChatHistory(`Please provide your email`, "bot");
                      addToChatHistory(`Email: ${userEmail}`, "user");
                      setSelectedOption("emailEntered");
                      setSavedEmail(true);
                      if (selectedOption === "existingCustomer") {
                        addToChatHistory(
                          `Provide us with some additional details and an account executive will follow up.`,
                          "bot"
                        );
                      }

                      if (selectedOption === "sales") {
                        addToChatHistory(
                          `Provide us with some additional details and an account executive will follow up.`,
                          "bot"
                        );
                      }
                      if (selectedOption === "tech") {
                        addToChatHistory(
                          `Provide us with some additional details and a member from our tech team will follow up.`,
                          "bot"
                        );
                      }
                    }}
                  >
                    Submit
                  </button>
                </>
              )}

              {/* Show Options if Email is Entered */}
              {!selectedOption && (
                <div className="mt-4 space-y-2">
                  <button
                    className={userOptionStyle}
                    onClick={() => {
                      addToChatHistory("Existing customer", "user");
                      setSelectedOption("existingCustomer");
                    }}
                  >
                    Existing customer
                  </button>
                  <button
                    className={userOptionStyle}
                    onClick={() => {
                      addToChatHistory("Talk with sales", "user");
                      setSelectedOption("sales");
                    }}
                  >
                    Talk with sales
                  </button>
                  <button
                    className={userOptionStyle}
                    onClick={() => {
                      addToChatHistory("Talk with tech team", "user");
                      setSelectedOption("tech");
                    }}
                  >
                    Talk with tech team
                  </button>
                </div>
              )}

              {/* Handle Responses */}
              {selectedOption === "existingcustomer" && userEmail && (
                <>
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    className={inputStyle}
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                  <button
                    className={userOptionStyle}
                    onClick={() => {
                      addToChatHistory(
                        `Account Number: ${accountNumber}`,
                        "user"
                      );
                      setSelectedOption("accountEntered");
                    }}
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
            {/* User text input for search bar */}
            {!messageSent && savedEmail && selectedOption && (
              <div className="p-2">
                <fetcher.Form method="post" action="/api/chat-bot">
                  <input
                    name="chatHistory"
                    type="hidden"
                    value={JSON.stringify(chatHistory)}
                  />
                  <textarea
                    rows={5}
                    maxLength={500}
                    placeholder="Enter details here."
                    className={inputStyle}
                    required={true}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <button
                    type="submit"
                    disabled={!message}
                    onClick={() => {
                      addToChatHistory(message, "user");
                      setMessage("");
                      setMessageSent(true);
                      addToChatHistory(
                        `Thank you for your message. A represenative will reach out shortly. But, sometimes you don't want to wait - call us directly at: ${loaderData.PHONE_NUMBER}`,
                        "bot"
                      );
                      fetcher.submit(
                        {
                          chatHistory: JSON.stringify({
                            email: userEmail,
                            message,
                          }),
                        },
                        { method: "post", action: "/api/chat-bot" }
                      );
                    }}
                    className="button-gradient w-full rounded-md p-3"
                  >
                    Send
                  </button>
                </fetcher.Form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
