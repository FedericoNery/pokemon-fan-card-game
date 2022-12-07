const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { initializeGame } = require('./game-logic')
const app = express()

const server = http.createServer(app)
const io = socketio(server,
  {
    cors: {
      "origin": "*",
    }
  })

io.on('connection', client => {
  initializeGame(io, client)
})

server.listen(process.env.PORT || 8000, () => {
  console.log(`Socket.IO server running at http://localhost:${process.env.PORT || 8000}/`);
})

module.exports = { io_from_app: io, server_from_app: server }