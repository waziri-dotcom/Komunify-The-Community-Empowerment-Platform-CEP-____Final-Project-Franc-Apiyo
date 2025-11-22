import { useEffect } from "react";
import { io } from "socket.io-client";
import { useStore } from "../state/useStore";
import { setSocket } from "../utils/socketHelper";

export default function SocketClient() {
  const token = useStore((s) => s.token);
  useEffect(() => {
    const url = import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";
    const newSocket = io(url, { auth: { token } });
    setSocket(newSocket);
    newSocket.on("food:new", (payload) => {
      // use local notification or update store
      console.log("food:new", payload);
    });
    newSocket.on("chat:message", (msg) => console.log("chat", msg));
    return () => newSocket.disconnect();
  }, [token]);

  return null;
}