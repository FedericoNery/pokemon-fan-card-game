import { io } from 'socket.io-client';
import Cookies from 'js-cookie';

const sockerUrl = "localhost:8000"

export function SocketInit(username, roomId, password, action, options) {
  const token = Cookies.get('pokemon-card-game-profile');
  const socket = io(`${sockerUrl}`, {
    path: '/classic-mode',
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