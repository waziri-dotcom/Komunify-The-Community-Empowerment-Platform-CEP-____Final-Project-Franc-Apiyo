import React, { useState } from "react";
import { MessageCircle, Bot, User, Send } from "lucide-react";

const LiveChat = () => {
  const [mode, setMode] = useState("assistant");
  const [messages, setMessages] = useState([
    { from: "assistant", text: "Hello! I'm Komunify Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Bot response simulation
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: mode === "assistant" ? "assistant" : "agent", text: "We're reviewing your message..." }
      ]);
    }, 900);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">24/7 Live Chat Support</h1>

      {/* Chat Mode Switch */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setMode("assistant")}
          className={`px-4 py-2 rounded-xl ${
            mode === "assistant" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-2"><Bot size={18}/> Virtual Assistant</div>
        </button>

        <button
          onClick={() => setMode("agent")}
          className={`px-4 py-2 rounded-xl ${
            mode === "agent" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          <div className="flex items-center gap-2"><User size={18}/> Human Agent</div>
        </button>
      </div>

      {/* Chat Window */}
      <div className="border rounded-xl p-4 h-[420px] overflow-y-auto bg-white shadow-sm">
        {messages.map((msg, i) => (
          <div key={i} className={`my-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-3 py-2 rounded-xl max-w-xs ${
                msg.from === "user"
                  ? "bg-blue-600 text-white"
                  : msg.from === "assistant"
                  ? "bg-gray-200"
                  : "bg-green-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex mt-4 gap-2">
        <input
          className="border rounded-xl px-3 flex-1"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="px-4 bg-blue-600 text-white rounded-xl">
          <Send size={20}/>
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
