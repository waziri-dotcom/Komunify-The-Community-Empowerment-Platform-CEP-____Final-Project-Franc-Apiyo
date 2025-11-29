import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const createTicket = (data) => axios.post(`${API_URL}/api/tickets`, data);
export const getTickets = (userId) => axios.get(`${API_URL}/api/tickets/${userId}`);
export const updateTicket = (ticketId, data) => axios.put(`${API_URL}/api/tickets/${ticketId}`, data);
export const deleteTicket = (ticketId) => axios.delete(`${API_URL}/api/tickets/${ticketId}`);