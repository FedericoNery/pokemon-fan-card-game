const { EMIT_EVENTS } = require("../utils/events")

function obtenerRooms(roomsConUnSoloJugador, gameSocket) {
    gameSocket.emit(EMIT_EVENTS.SEND_ROOMS, { roomsConUnSoloJugador })
}

module.exports = { obtenerRooms }