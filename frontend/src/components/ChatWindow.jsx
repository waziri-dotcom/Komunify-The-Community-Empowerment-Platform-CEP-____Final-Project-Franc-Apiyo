import React, { useEffect, useState } from "react";
import socket from "../socket";
import { getChatMessages } from "../api/chat";
import DonationButton from "./DonationButton";

export default function ChatWindow({ ticket, user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!ticket) return;
    const fetchMessages = async () => {
      const res = await getChatMessages(ticket._id);
      setMessages(res.data);
    };
    fetchMessages();

    socket.emit("joinTicket", ticket._id);

    socket.on("newMessage", (msg) => {
      if (msg.ticket === ticket._id) setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("newMessage");
  }, [ticket]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = { ticket: ticket._id, user: user._id, content: input };
    socket.emit("sendMessage", message);
    setInput("");
  };

  return ticket ? (
    <div>
      <h3>{ticket.subject}</h3>
      <div style={{ height: 300, overflowY: "auto" }}>
        {messages.map((m) => (
          <div key={m._id}>
            <b>{m.user.name}:</b> {m.content}
          </div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <DonationButton ticketId={ticket._id} user={user} />
    </div>
  ) : (
    <div>Select a ticket to start chatting</div>
  );
}
