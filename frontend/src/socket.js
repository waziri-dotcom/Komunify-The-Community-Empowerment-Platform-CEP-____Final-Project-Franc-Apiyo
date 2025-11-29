import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  cors: { origin: "*" },
});

export default socket;
