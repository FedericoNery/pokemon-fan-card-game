module.exports = function (app) {
    const juego = require("./juego")
    const cartasenergia = require("./cartasenergia")
    const cartaspokemon = require("./cartaspokemon")
    const mazos = require("./mazos")
    const tienda = require("./tienda")
    const usuarios = require("./usuarios")
    const authentication = require("./authentication")

    return {
        juego: juego,
        cartasenergia: cartasenergia,
        cartaspokemon: cartaspokemon,
        mazos: mazos,
        tienda: tienda,
        usuarios: usuarios,
        authentication: authentication
    }
}