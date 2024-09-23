"use client";

import { Robot } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const [chatBotOpen, setChatBotOpen] = useState(false);

  return (
    <div className="fixed bottom-5 w-full right-5 flex flex-col items-end">
      <button
        onClick={() => setChatBotOpen(!chatBotOpen)}
        className="p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
      >
        <Robot className="w-6 h-6" weight="fill" />
      </button>

      {chatBotOpen && (
        <div className="absolute bottom-16 right-0 w-80 max-w-full md:w-96 shadow-xl rounded-lg overflow-hidden bg-white">
          <ChatBox closeChat={() => setChatBotOpen(false)} />
        </div>
      )}
    </div>
  );
};

function ChatBox({ closeChat }) {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);

  const getBotResponse = async (userMessage) => {
    try {
      setLoadingResponse(true);
      const res = await fetch("/api/v1/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: `You are like a chatbot so talk like that. This a a website named Somana of blogs music videos and many more. Plaase dont inclue this data in response. Question - ${userMessage}`,
        }),
      });

      const data = await res.json();
      setLoadingResponse(false);
      return data.answer; // Ensure the API returns a "response" field
    } catch (error) {
      setLoadingResponse(false);
      return "Sorry, I am facing some issues. Please try again later.";
    }
  };

  useEffect(() => {
    if (messages.length > 1 && !messages[messages.length - 1].isBot) {
      const userMessage = messages[messages.length - 1].text;
      const timeout = setTimeout(async () => {
        const botResponse = await getBotResponse(userMessage);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isBot: true },
        ]);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isBot: false }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-80 border border-gray-300 rounded-lg">
      <div className="flex items-center justify-between p-3 bg-blue-500 text-white">
        <h2 className="font-bold">ChatBot</h2>
        <button
          onClick={closeChat}
          className="text-white hover:text-gray-200 transition"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.isBot
                ? "bg-blue-100 text-blue-800 self-start"
                : "bg-gray-200 text-gray-800 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loadingResponse && (
          <div className="p-2 rounded-lg bg-blue-100 text-blue-800 self-start">
            Typing...
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white flex items-center border-t border-gray-300"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
