const Juego = require("./Juego")

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
    set_mazo_a(mazo){
        this.juego.setMazo1(mazo)
    }
    set_mazo_b(mazo){
        this.juego.setMazo2(mazo)
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