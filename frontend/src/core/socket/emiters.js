import { socket } from "../../components/multiplayer/WaitingRoom";

export const emit = {
  seleccionarCartaOrdenDeTurnos: (username, cartaSeleccionada) => {
    //tratar de enviar el id de la carta seleccionada y NO todo el objeto de la carta
    socket.emit('selected-card-calumon', { username, cartaSeleccionada });
  },
  startDrawPhase: () => { //esto no se si es necesario, porque directamente podría hacerlo desde el servidor a los clientes
    socket.emit('draw-phase');
  },

  finishLoadPhase: (username, roomId) => { 
    socket.emit('load-phase', { username, roomId });
  },
  finishSummonPhase: (username, cartasSeleccionadas, roomId) => { 
    socket.emit('summon-phase', { username, cartasSeleccionadas, roomId });
  },
  finishCompilePhase: (username, roomId) => {
    socket.emit('compile-phase', { username, roomId });
  },

  closeConnection: () => {
    socket.close();
  }
};