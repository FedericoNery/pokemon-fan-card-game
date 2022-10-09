
/**
 * Here is where we should register event listeners and emitters. 
 */

const GameData = require("./models/GameData")
const { SUBSCRIPTIONS_EVENTS, EMIT_EVENTS } = require("./utils/events")

var io
var gameSocket
// gamesInSession stores an array of all active socket connections
var gamesInSession = []
var roomsConUnSoloJugador = []

var gamesIdsUsing = []
var gamesData = []

function getNewGameId() {
    x = null
    while (gamesIdsUsing.length === 0 || !gamesIdsUsing.includes(x)) {
        x = Math.floor((Math.random() * 100) + 1);
        if (!gamesIdsUsing.includes(x)) {
            gamesIdsUsing.push(x)
        }
    }
    return x
}

const initializeGame = (sio, socket) => {
    /**
     * initializeGame sets up all the socket event listeners. 
     */

    // initialize global variables.
    io = sio
    gameSocket = socket

    // pushes this socket to an array which stores all the active sockets.
    gamesInSession.push(gameSocket)

    // Run code when the client disconnects from their socket session. 
    gameSocket.on(SUBSCRIPTIONS_EVENTS.DISCONNECT, onDisconnect)

    // Sends new move to the other socket session in the same room. 
    gameSocket.on("new move", newMove)

    // User creates new game room after clicking 'submit' on the frontend
    gameSocket.on(SUBSCRIPTIONS_EVENTS.CREATE_NEW_GAME, createNewGame)

    // User joins gameRoom after going to a URL with '/game/:gameId' 
    gameSocket.on(SUBSCRIPTIONS_EVENTS.PLAYER_JOIN_GAME, playerJoinsGame)

    gameSocket.on('request username', requestUserName)

    gameSocket.on('recieved userName', recievedUserName)

    gameSocket.on(SUBSCRIPTIONS_EVENTS.GET_ROOMS, obtenerRooms)

    gameSocket.on("ping", client => {
        console.log("PING LLEGÓ")
        gameSocket.emit('pong');
    })

    //gameSocket.on('start-phase', startPhase)
    gameSocket.on(SUBSCRIPTIONS_EVENTS.CALUMON_SELECTED, calumonSelected)
    gameSocket.on('draw-phase', drawPhase)
    gameSocket.on(SUBSCRIPTIONS_EVENTS.FINISH_DRAW_PHASE, finishDrawPhase)
    gameSocket.on(SUBSCRIPTIONS_EVENTS.FINISH_LOAD_PHASE, finishLoadPhase)
    gameSocket.on(SUBSCRIPTIONS_EVENTS.FINISH_SUMMON_PHASE, finishSummonPhase)
    gameSocket.on(SUBSCRIPTIONS_EVENTS.FINISH_COMPILE_PHASE, finishCompilePhase)
}

function getIndiceGameData(gameId){
    var gamesIdsList = gamesData.map(x => x.getGameId())
    console.log("GAMES IDS ", gamesIdsList)
    var indexGame = gamesIdsList.indexOf(gameId)
    return indexGame
}

function finishDrawPhase(gameId, usuarioId) {
    io.sockets.in(gameId).emit(EMIT_EVENTS.START_LOAD_PHASE)
}

function finishLoadPhase(gameId, usuarioId, cartasId) { 
    var indexGame = getIndiceGameData(gameId)
    gamesData[indexGame].finishLoadPhase(usuarioId, cartasId)
    if(gamesData[indexGame].finishedLoadPhase()){
        gamesData[indexGame].startSummonPhase()
        io.sockets.in(gameId).emit(EMIT_EVENTS.START_SUMMON_PHASE)
    }
}

function finishSummonPhase(gameId, usuarioId, cartasId){
    var indexGame = getIndiceGameData(gameId)
    gamesData[indexGame].finishSummonPhase(usuarioId, cartasId)
    if(gamesData[indexGame].finishedSummonPhase()){
        io.sockets.in(gameId).emit(EMIT_EVENTS.START_COMPILE_PHASE)
    }
}

function finishCompilePhase(gameId, usuarioId, cartasId){
    var indexGame = getIndiceGameData(gameId)
    gamesData[indexGame].finishCompilePhase(usuarioId, cartasId)
    if(gamesData[indexGame].finishedCompilePhase()){
        io.sockets.in(gameId).emit(EMIT_EVENTS.START_BATTLE_PHASE)
        gamesData[indexGame].startBattlePhaseJugador1()
        gamesData[indexGame].finishBattlePhaseJugador1()
        io.to(data.id).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE)
        gamesData[indexGame].startBattlePhaseJugador2()
        gamesData[indexGame].finishBattlePhaseJugador2()
        io.to(data.id).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE)
    }
    if(gamesData[indexGame].finishedRonda()){
        gamesData[indexGame].nextRonda()
        io.to(data.id).emit(EMIT_EVENTS.SELECCIONAR_CALUMON, move);
        io.to(data.id).emit(EMIT_EVENTS.ESPERAR_SELECCION, move);
    }
}

function startPhase(gameId) {
    //enviar mensaje a ambos clientes, uno espera y el otro selecciona a Calumon
    io.to(data.id).emit(EMIT_EVENTS.SELECCIONAR_CALUMON, move);
    io.to(data.id).emit(EMIT_EVENTS.ESPERAR_SELECCION, move);
    //io.sockets.in(gameIdToJoin).emit('start game')

}
function calumonSelected(gameId, idCartaSelected) {
    io.sockets.in(gameId).emit(EMIT_EVENTS.START_DRAW_PHASE)
}

function drawPhase(data) {
    const gameId = data.gameId
    const client = data.client

    //Buscar juego en array de juegos
    //Buscar por el clientId al jugador o por otra cosa
    //Repartir cartas
    io.to(data.id).emit('', move);
}


function playerJoinsGame({gameIdToJoin, usuario, mazo}) {
    /**
     * Joins the given socket to a session with it's gameId
     */

    // A reference to the player's Socket.IO socket object
    var sock = this

    // Look up the room ID in the Socket.IO manager object.
    console.log("GAME ID TO JOIN", gameIdToJoin)
    var room = io.sockets.adapter.rooms.get(gameIdToJoin)
    console.log(io.sockets.adapter.rooms)
    console.log(room)

    // If the room exists...
    if (room === undefined) {
        this.emit('status', "This game session does not exist.");
        return
    }
    console.log("room length: ", room.size)
    if (room.size < 2) {

        // Join the room
        sock.join(gameIdToJoin);
        console.log("Room Length", room.size)

        // Guardar información del usuario y el mazo a utilizar que hizo join de la sesión
        var gamesIdsList = gamesData.map(x => x.getGameId())
        console.log("GAMES IDS ", gamesIdsList)
        var indexGame = gamesIdsList.indexOf(gameIdToJoin)
        gamesData[indexGame].set_usuario_b(usuario)
        gamesData[indexGame].set_mazo_b(mazo)

        // Emit an event notifying the clients that the player has joined the room.
        io.sockets.in(gameIdToJoin).emit(EMIT_EVENTS.PLAYER_JOINED_ROOM, { gameId: gameIdToJoin, socketId: sock.id });

        if (room.size === 2) {
            //Emitir al cliente para que seleccione a Calumon o al otro Digimon

            //Crear Juego y guardarlo en el array de juegos
            //Que Juego se encargue de mezclar el mazo
            io.sockets.in(gameIdToJoin).emit(EMIT_EVENTS.START_GAME) // Ver que pasarle al evento
            startPhase()
            console.log("arranco el juego")
        }

    } else {
        // Otherwise, send an error message back to the player.
        this.emit('status', "There are already 2 people playing in this room.");
    }
}


function createNewGame({ mazo, usuario }) {
    // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
    try {
        let gameId = getNewGameId()
        console.log("Gameid: ", gameId)
        roomsConUnSoloJugador.push(gameId)
        // Join the Room and wait for the other player
        this.join(gameId)

        // Guardar información del usuario y el mazo a utilizar que hizo join de la sesión
        var gameData = new GameData()
        gameData.set_game_id(gameId)
        gameData.set_socket_id(this.id)
        gameData.set_usuario_a(usuario)
        gameData.set_mazo_a(mazo)
        gamesData.push(gameData)
        console.log("GAMES DATA", gamesData)

        this.emit(EMIT_EVENTS.NEW_GAME_CREATED, { gameId: gameId, mySocketId: this.id });
    }
    catch (ex) {
        console.log(ex)
    }
}


function newMove(move) {
    /**
     * First, we need to get the room ID in which to send this message. 
     * Next, we actually send this message to everyone except the sender
     * in this room. 
     */

    const gameId = move.gameId

    io.to(gameId).emit('opponent move', move);
}

function onDisconnect() {
    console.log("llego a la funcion disconnect")
    var i = gamesInSession.indexOf(gameSocket);
    gamesInSession.splice(i, 1);
}


function requestUserName(gameId) {
    io.to(gameId).emit('give userName', this.id);
}

function recievedUserName(data) {
    data.socketId = this.id
    io.to(data.gameId).emit('get Opponent UserName', data);
}

function obtenerRooms() {
    console.log("Llegó a Obtener rooms")
    console.log("Rooms con un solo jugador: " + roomsConUnSoloJugador)
    this.emit(EMIT_EVENTS.SEND_ROOMS, { roomsConUnSoloJugador })
    console.log("terminó de ejecutar")
}

module.exports = { initializeGame, io, gameSocket, gamesInSession, roomsConUnSoloJugador, gamesIdsUsing, gamesData }