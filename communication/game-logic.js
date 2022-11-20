
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function sleep(tiempo) {
    await timeout(tiempo);
  }

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

async function finishSummonPhase({gameId, usuarioId, cartasId}){
    var indexGame = getIndiceGameData(gameId)
    gamesData[indexGame].juego.finishSummonPhase(usuarioId, cartasId)
    var socketIdUsuarioA = gamesData[indexGame].socketIdUsuarioA
    var socketIdUsuarioB = gamesData[indexGame].socketIdUsuarioB

    if(gamesData[indexGame].juego.finishedSummonPhase()){
        gamesData[indexGame].juego.finishCompilePhase()
        //io.sockets.in(gameId).emit(EMIT_EVENTS.START_COMPILE_PHASE)

        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.START_BATTLE_PHASE)
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.START_BATTLE_PHASE)

        gamesData[indexGame].juego.startBattlePhaseJugador1()
        gamesData[indexGame].juego.finishBattlePhaseJugador1()
        gamesData[indexGame].juego.startBattlePhaseJugador2()
        gamesData[indexGame].juego.finishBattlePhaseJugador2()
        io.to(socketIdUsuarioA).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        await sleep(5000)
        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})

        finishRound(indexGame)
    }

    if(gamesData[indexGame].estaFinalizado()){
        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.FINISHED_GAME, {gameData: gamesData[indexGame]})
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.FINISHED_GAME, {gameData: gamesData[indexGame]})
    }
}

function finishRound(indexGame){
    if(gamesData[indexGame].finishedRonda()){
        gamesData[indexGame].nextRonda()
        var socketIdUsuarioA = gamesData[indexGame].socketIdUsuarioA
        var socketIdUsuarioB = gamesData[indexGame].socketIdUsuarioB
        io.to(socketIdUsuarioA).emit("START NEXT ROUND", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("START NEXT ROUND", {gameData: gamesData[indexGame]});
        startPhase(gameId)
        drawPhase(gameId)
        io.to(socketIdUsuarioA).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
    }
}

function finishCompilePhase(gameId, usuarioId, cartasId){
    var indexGame = getIndiceGameData(gameId)
    gamesData[indexGame].finishCompilePhase(usuarioId, cartasId)

    var socketIdUsuarioA = gamesData[indexGame].socketIdUsuarioA
    var socketIdUsuarioB = gamesData[indexGame].socketIdUsuarioB

    if(gamesData[indexGame].finishedCompilePhase()){
        //io.sockets.in(gameId).emit(EMIT_EVENTS.START_BATTLE_PHASE)
        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.START_BATTLE_PHASE)
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.START_BATTLE_PHASE)

        gamesData[indexGame].startBattlePhaseJugador1()
        gamesData[indexGame].finishBattlePhaseJugador1()
        gamesData[indexGame].startBattlePhaseJugador2()
        gamesData[indexGame].finishBattlePhaseJugador2()
        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})
    }
    if(gamesData[indexGame].finishedRonda()){
        gamesData[indexGame].nextRonda()
        io.to(socketIdUsuarioA).emit("START NEXT ROUND", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("START NEXT ROUND", {gameData: gamesData[indexGame]});
    }
}

function startPhase(gameId) {
    //enviar mensaje a ambos clientes, uno espera y el otro selecciona a Calumon
    //io.sockets.in(gameId)

    var gameDataToJoin = gamesData.filter(x => x.getGameId() === gameId)
    console.log(gameDataToJoin)
    gameDataToJoin[0].juego.startPhase()

    //ABAJO ES EL EJEMPLO DE CADA CLIENTE EN PARTICULAR
    /* io.to(data.id).emit(EMIT_EVENTS.SELECCIONAR_CALUMON, move);
    io.to(data.id).emit(EMIT_EVENTS.ESPERAR_SELECCION, move); */

    //io.sockets.in(gameIdToJoin).emit('start game')

}
function calumonSelected(gameId, idCartaSelected) {
    io.sockets.in(gameId).emit(EMIT_EVENTS.START_DRAW_PHASE)
}

function drawPhase(gameId) {
    var gameDataToJoin = gamesData.filter(x => x.getGameId() === gameId)
    console.log(gameDataToJoin)
    gameDataToJoin[0].juego.drawPhase()

    //Buscar juego en array de juegos
    //Buscar por el clientId al jugador o por otra cosa
    //Repartir cartas
    //io.to(data.id).emit('', move);
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
        gamesData[indexGame].setSocketIdUsuarioB(this.id)


        // Emit an event notifying the clients that the player has joined the room.
        //NO TIENE SENTIDO ESTE EVENTO
        //io.sockets.in(gameIdToJoin).emit(EMIT_EVENTS.PLAYER_JOINED_ROOM, { gameId: gameIdToJoin, socketId: sock.id });
        console.log(io.sockets.in(gameIdToJoin))
    } else {
        // Otherwise, send an error message back to the player.
        this.emit('status', "There are already 2 people playing in this room.");
    }
    console.log("ROOM SIZE: " + room.size)
    if (room.size === 2) {
        //Emitir al cliente para que seleccione a Calumon o al otro Digimon

        //Crear Juego y guardarlo en el array de juegos
        //Que Juego se encargue de mezclar el mazo
        console.log("IO SOCKETS IN GAME ID TO JOIN")
        console.log(io.sockets.in(gameIdToJoin))

        var gameDataArray = gamesData.filter(x => x.getGameId() === gameIdToJoin)

        io.sockets.in(gameDataArray[0].socketIdUsuarioA).emit(EMIT_EVENTS.START_GAME, {gameData: gameDataArray[0]})
        io.sockets.in(gameDataArray[0].socketIdUsuarioB).emit(EMIT_EVENTS.START_GAME, {gameData: gameDataArray[0]}) // Ver que pasarle al evento
        startPhase(gameIdToJoin)
        console.log("arranco el juego")
        drawPhase(gameIdToJoin)
        
        gameDataArray = gamesData.filter(x => x.getGameId() === gameIdToJoin)
        io.sockets.in(gameDataArray[0].socketIdUsuarioA).emit(EMIT_EVENTS.START_GAME, {gameData: gameDataArray[0]})
        io.sockets.in(gameDataArray[0].socketIdUsuarioB).emit(EMIT_EVENTS.START_GAME, {gameData: gameDataArray[0]})

        console.log("hizo el drop de cartas")
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
        gameData.setSocketIdUsuarioA(this.id)
        gameData.set_usuario_a(usuario)
        console.log("IS ARRAY", Array.isArray(mazo))
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