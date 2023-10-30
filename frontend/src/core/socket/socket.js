import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

const sockerUrl = "http://localhost:8000"

export function SocketInit(username, roomId, password, action, options) {
  const token = Cookies.get('pokemon-card-game-profile');
  const socket = io(`${sockerUrl}`, {
    reconnectionDelayMax: 10000,
    reconnectionAttempts: 3,
    path: '/',
    transports: ['websocket'],
    query: {
      username,
      roomId,
      password,
/*       action,
 */      /* token, */
/*       options: options && JSON.stringify(options) */
    }
  });
  return socket;
}