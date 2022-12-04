function getNewGameId(gamesIdsUsing) {
    x = null
    while (gamesIdsUsing.length === 0 || !gamesIdsUsing.includes(x)) {
        x = Math.floor((Math.random() * 100) + 1);
        if (!gamesIdsUsing.includes(x)) {
            gamesIdsUsing.push(x)
        }
    }
    return x
}

module.exports = { getNewGameId }