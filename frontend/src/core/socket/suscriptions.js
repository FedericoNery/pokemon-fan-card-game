import { socket } from "../../components/multiplayer/WaitingRoom";

export const subscribeTo = {
  /* showPlayers: cb => {
    socket.on('show-players-joined', data => cb(null, data.playersJoined));
  },

  playerCollections: cb => {
    socket.on('show-players-teams', data => cb(null, data.teams));
  }, */

  /* passMyTurnStart: cb => {
    socket.on('personal-turn-start', message => {
      console.log(message);
      cb(null, message);
    });
  },

  playerTurnStart: cb => {
    socket.on('player-turn-start', message => {
      console.log(message);
      cb(null, message);
    });
  },

  personalTurnEnd: cb => {
    socket.on('personal-turn-end', message => {
      console.log(message);
      cb(null, message);
    });
  },

  playerTurnEnd: cb => {
    socket.on('player-turn-end', message => {
      console.log(message);
      cb(null, message);
    });
  }, */

  drawPhaseStart: cb => {
    socket.on('draw-phase-start', message => {
      console.log(message);
      cb(null, message);
    });
  },

  drawPhaseEnd: cb => {
    socket.on('draw-phase-end', message => {
      console.log(message);
      cb(null, message);
    });
  },
  loadPhaseStart: cb => {
    socket.on('load-phase-start', message => {
      console.log(message);
      cb(null, message);
    });
  },

  loadPhaseEnd: cb => {
    socket.on('load-phase-end', message => {
      console.log(message);
      cb(null, message);
    });
  },
  compilePhaseStart: cb => {
    socket.on('compile-phase-start', message => {
      console.log(message);
      cb(null, message);
    });
  },

  compilePhaseEnd: cb => {
    socket.on('compile-phase-end', message => {
      console.log(message);
      cb(null, message);
    });
  }
};