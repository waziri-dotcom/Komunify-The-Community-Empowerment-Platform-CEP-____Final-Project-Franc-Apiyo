import React, { useEffect, useState } from "react";
import { createTicket, getTickets } from "../api/tickets";

export default function TicketList({ user, onSelectTicket }) {
  const [tickets, setTickets] = useState([]);
  const [subject, setSubject] = useState("");

  const fetchTickets = async () => {
    const res = await getTickets(user._id);
    setTickets(res.data);
  };

  useEffect(() => {
    if (user) fetchTickets();
  }, [user]);

  const handleCreate = async () => {
    if (!subject) return;
    await createTicket({ userId: user._id, subject });
    setSubject("");
    fetchTickets();
  };

  return (
    <div>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="New ticket subject" />
      <button onClick={handleCreate}>Create Ticket</button>
      <ul>
        {tickets.map((t) => (
          <li key={t._id} onClick={() => onSelectTicket(t)}>
            {t.subject} - {new Date(t.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
