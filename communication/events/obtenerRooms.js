const { EMIT_EVENTS } = require("../utils/events")

function obtenerRooms(roomsConUnSoloJugador, gameSocket) {
    console.log(roomsConUnSoloJugador)
    gameSocket.emit(EMIT_EVENTS.SEND_ROOMS, { roomsConUnSoloJugador })
}

module.exports = { obtenerRooms }