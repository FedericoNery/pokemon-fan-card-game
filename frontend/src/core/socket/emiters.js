import { socket } from "../../components/multiplayer/WaitingRoom";

export const emit = {
  startDraft: () => {
    socket.emit('is-ready');
  },

  playerTurnPass: item => {
    socket.emit('player-turn-pass', item);
  },

  closeConnection: () => {
    socket.close();
  }
};