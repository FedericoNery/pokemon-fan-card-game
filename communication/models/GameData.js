const Juego = require("./Juego")
const Mazo = require("./Mazo")

class GameData{
    constructor(){
        this.juego = new Juego()
        this.game_id = null
        this.socket_id = null
        this.socketIdUsuarioA = null
        this.socketIdUsuarioB = null
    }

    set_usuario_a(usuario){
        this.juego.setJugador1(usuario)
    }
    set_usuario_b(usuario){
        this.juego.setJugador2(usuario)
    }
    set_mazo_a(cartas){
        const nuevoMazo = new Mazo(cartas)
        this.juego.setMazo1(nuevoMazo)
    }
    set_mazo_b(cartas){
        const nuevoMazo = new Mazo(cartas)
        this.juego.setMazo2(nuevoMazo)
    }
    set_game_id(gameId){
        this.game_id = gameId
    }
    set_socket_id(socketId){
        this.socket_id = socketId
    }
    getGameId(){
        return this.game_id
    }
    setSocketIdUsuarioA(socketIdUsuarioA){
        this.socketIdUsuarioA = socketIdUsuarioA
    }
    setSocketIdUsuarioB(socketIdUsuarioB){
        this.socketIdUsuarioB = socketIdUsuarioB
    }
    getSocketIdUsuarioA(){
        return this.socketIdUsuarioA
    }
    getSocketIdUsuarioB(){
        return this.socketIdUsuarioB
    }
}

module.exports = GameData