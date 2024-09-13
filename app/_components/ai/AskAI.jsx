// pages/ai.js
"use client";
// pages/ai.js

import { useState } from "react";

export default function AIComponent() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Store the chat history
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/v1/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (response.ok) {
        setChatHistory([
          { question, answer: data.answer }, // Add the new chat at the beginning
          ...chatHistory,
        ]);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch AI response");
    } finally {
      setLoading(false);
      setQuestion(""); // Clear the input field after submission
    }
  };

  return (
    <div className="min-h-screen flex py-2 justify-center">
      <div className="bg-white shadow-lg h-fit rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Ask the AI
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <textarea
            className="w-full p-4 border outline-none resize-none border-gray-300 rounded-lg"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>
        </form>

        {error && <p className="mt-4 text-red-500">{error}</p>}

        <div className="mt-6">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg mb-4 shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-800">You:</h2>
              <p className="mt-2 text-gray-700">{chat.question}</p>
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                Somana:
              </h2>
              <p className="mt-2 text-gray-700">{chat.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
