const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const gameLogic = require('./game-logic')
const app = express()

/**
 * Backend flow:
 * - check to see if the game ID encoded in the URL belongs to a valid game session in progress. 
 * - if yes, join the client to that game. 
 * - else, create a new game instance. 
 * - '/' path should lead to a new game instance. 
 * - '/game/:gameid' path should first search for a game instance, then join it. Otherwise, throw 404 error.  
 */


const server = http.createServer(app)
const io = socketio(server,
    {
        cors: {
            "origin": "*",
        }
    })

// get the gameID encoded in the URL. 
// check to see if that gameID matches with all the games currently in session. 
// join the existing game session. 
// create a new session.  
// run when client connects

// TODO ::: No funciona el emit? o hoppscotch no está capturando la respuesta al no estar suscripto
io.on('connection', client => {
    console.log("Conectando...")
    setInterval(() => io.emit("msg", { data: [123] }), 5000)
    gameLogic.initializeGame(io, client)
    socket.on("disconnect", (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
      });
    console.log("Termino...")
})

server.listen(process.env.PORT || 8000, () => {
    console.log(`Socket.IO server running at http://localhost:${process.env.PORT || 8000}/`);
})

//Versión más prolija con los import
/* const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, 
  {
      cors:{
          "origin": "*",
      }
  })

io.on('connection', (socket) => {
  console.log('a user connected')
  setInterval(() => {
    socket.emit('msg', { data: [1, 2, 3] })
  }, 5000)
  setInterval(() => {
      io.emit('msg', { data: [1, 2, 3] })
    }, 5000)
  socket.on("disconnect", (reason) => {
      console.log(`disconnect ${socket.id} due to ${reason}`);
    });
})
http.listen(process.env.PORT || 8000, () =>{
    console.log(`Socket.IO server running at http://localhost:${process.env.PORT || 8000}/`);
}) */