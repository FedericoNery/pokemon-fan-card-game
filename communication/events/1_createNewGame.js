const GameData = require("../models/GameData")
const { getNewGameId } = require("../services/getNewGameId")
const { EMIT_EVENTS } = require("../utils/events")

function createNewGame({ mazo, usuario }, gamesData, gamesIdsUsing, roomsConUnSoloJugador, gameSocket) {
    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    try {
        let gameId = getNewGameId(gamesIdsUsing)
        roomsConUnSoloJugador.push(gameId)
        // Join the Room and wait for the other player
        gameSocket.join(gameId)

        // Guardar información del usuario y el mazo a utilizar que hizo join de la sesión
        var gameData = new GameData()
        gameData.set_game_id(gameId)
        gameData.set_socket_id(gameSocket.id)
        gameData.setSocketIdUsuarioA(gameSocket.id)
        gameData.set_usuario_a(usuario)
        gameData.set_mazo_a(mazo)
        gamesData.push(gameData)

        gameSocket.emit(EMIT_EVENTS.NEW_GAME_CREATED, { gameId: gameId, mySocketId: gameSocket.id });
    }
    catch (ex) {
        console.log(ex)
    }
}

module.exports = { createNewGame }