import { socket } from "../../components/multiplayer/WaitingRoom";

export const subscribeTo = {
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
