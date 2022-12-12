const { getIndiceGameData } = require("../services/getIndiceGameData")
const { EMIT_EVENTS } = require("../utils/events")
const { sleep } = require("../utils/sleep")
const { finishRound } = require("./7_finishRound")

async function finishSummonPhase({gameId, usuarioId, cartasId}, gamesData, io){
    var indexGame = getIndiceGameData(gameId, gamesData)
    gamesData[indexGame].juego.finishSummonPhase(usuarioId, cartasId)
    var socketIdUsuarioA = gamesData[indexGame].socketIdUsuarioA
    var socketIdUsuarioB = gamesData[indexGame].socketIdUsuarioB
    io.to(socketIdUsuarioA).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
    io.to(socketIdUsuarioB).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});

    if(gamesData[indexGame].juego.finishedSummonPhase()){
        gamesData[indexGame].juego.finishCompilePhase()

        io.to(socketIdUsuarioA).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});

        io.to(socketIdUsuarioA).emit("start battle phase");
        io.to(socketIdUsuarioB).emit("start battle phase");
        await sleep(5000)
        gamesData[indexGame].juego.iniciarBatalla()
        await sleep(1000)
        io.to(socketIdUsuarioA).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("UPDATE GAME DATA", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioA).emit("SHOW WINNER ROUND", {gameData: gamesData[indexGame]});
        io.to(socketIdUsuarioB).emit("SHOW WINNER ROUND", {gameData: gamesData[indexGame]});
        await sleep(3000)
        io.to(socketIdUsuarioA).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})
        io.to(socketIdUsuarioB).emit(EMIT_EVENTS.FINISH_BATTLE_PHASE, {gameData: gamesData[indexGame]})

        if(gamesData[indexGame].juego.estaFinalizado()){
            io.to(socketIdUsuarioA).emit(EMIT_EVENTS.FINISHED_GAME, {gameData: gamesData[indexGame]})
            io.to(socketIdUsuarioB).emit(EMIT_EVENTS.FINISHED_GAME, {gameData: gamesData[indexGame]})
        }
        else{
            finishRound(indexGame, gamesData, io)
        }
    }

    
}

module.exports = { finishSummonPhase }