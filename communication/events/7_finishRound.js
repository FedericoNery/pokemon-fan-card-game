function finishRound(indexGame, gamesData, io){
    if(gamesData[indexGame].finishedRonda()){
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

module.exports = { finishRound }