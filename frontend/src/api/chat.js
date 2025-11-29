import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const getChatMessages = (ticketId) =>
  axios.get(`${API_URL}/api/chat/${ticketId}`);
