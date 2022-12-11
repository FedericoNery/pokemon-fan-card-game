import { io } from 'socket.io-client';

const sockerUrl = "http://localhost:8000"

export function SocketInit(username, roomId, password, action, options) {
  const socket = io(`${sockerUrl}`, {
    reconnectionDelayMax: 10000,
    reconnectionAttempts: 3,
    path: '/',
    transports: ['websocket'],
    query: {
      username,
      roomId,
      password,
    }
  });
  return socket;
}
