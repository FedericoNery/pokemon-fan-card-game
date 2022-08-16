
/**
 * Here is where we should register event listeners and emitters. 
 */

 var io
 var gameSocket
 // gamesInSession stores an array of all active socket connections
 var gamesInSession = []
 var roomsConUnSoloJugador = []
 
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
     gameSocket.on("disconnect", onDisconnect)
 
     // Sends new move to the other socket session in the same room. 
     gameSocket.on("new move", newMove)
 
     // User creates new game room after clicking 'submit' on the frontend
     gameSocket.on("createNewGame", createNewGame)
 
     // User joins gameRoom after going to a URL with '/game/:gameId' 
     gameSocket.on("playerJoinGame", playerJoinsGame)
 
     gameSocket.on('request username', requestUserName)
 
     gameSocket.on('recieved userName', recievedUserName)

     gameSocket.on('obtener-rooms', obtenerRooms)


     gameSocket.on('start-phase', startPhase) 
     gameSocket.on('draw-phase', drawPhase) 
     gameSocket.on('load-phase', loadPhase) 
     gameSocket.on('summon-phase', summonPhase) 
     gameSocket.on('compile-phase', compilePhase) 
     gameSocket.on('battle-phase', battlePhase) 
 }
 
 function startPhase(){
    //enviar mensaje a ambos clientes, uno espera y el otro selecciona a Calumon


 }

 function drawPhase(data){
    const gameId = data.gameId 
    const client = data.client 
     
    //Buscar juego en array de juegos
    //Buscar por el clientId al jugador o por otra cosa
    //Repartir cartas
    io.to(data.id).emit('', move);
}

 
 function playerJoinsGame(idData) {
     /**
      * Joins the given socket to a session with it's gameId
      */
 
     // A reference to the player's Socket.IO socket object
     var sock = this
     
     // Look up the room ID in the Socket.IO manager object.
     var room = io.sockets.adapter.rooms[idData.gameId]
    // console.log(room)
 
     // If the room exists...
     if (room === undefined) {
         this.emit('status' , "This game session does not exist." );
         return
     }
     if (room.length < 2) {
         // attach the socket id to the data object.
         idData.mySocketId = sock.id;
 
         // Join the room
         sock.join(idData.gameId);
 
         console.log(room.length)
 
         // Guardar información del usuario y el mazo a utilizar que hizo join de la sesión

         if (room.length === 2) {
            //Emitir al cliente para que seleccione a Calumon o al otro Digimon

            //Crear Juego y guardarlo en el array de juegos
            //Que Juego se encargue de mezclar el mazo
             io.sockets.in(idData.gameId).emit('start game', idData.userName)
         }
 
         // Emit an event notifying the clients that the player has joined the room.
         io.sockets.in(idData.gameId).emit('playerJoinedRoom', idData);
 
     } else {
         // Otherwise, send an error message back to the player.
         this.emit('status' , "There are already 2 people playing in this room." );
     }
 }
 
 
 function createNewGame(gameId) {
     // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
     this.emit('createNewGame', {gameId: gameId, mySocketId: this.id});
 
     // Join the Room and wait for the other player
     this.join(gameId)

      // Guardar información del usuario y el mazo a utilizar que hizo join de la sesión
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
 
 function obtenerRooms(){
    console.log("Llegó a Obtener rooms")
    this.emit("obtener-rooms", {roomsConUnSoloJugador})
    console.log("terminó de ejecutar")
 }
 exports.initializeGame = initializeGame