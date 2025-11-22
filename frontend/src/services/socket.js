import { io } from 'socket.io-client'
let socket
export function InitSocket(){
  if(!socket) socket = io(import.meta.env.VITE_API_URL || 'http://localhost:4000')
  return socket
}
export default socket
