const CartaPokemon = require("../../domain/CartaPokemon")
const { CODIGO_TIPO_CARTA } = require("../../utils/enums")

const generateCartasPokemonWithAtaqueYDefensa = (cantidad) => {
    const listaCartasPokemon = []
    for (let index = 0; index < cantidad; index++) {
        listaCartasPokemon.push(new CartaPokemon(
            index.toString(),
            "nombre" + index.toString(),
            0,
            10,
            10,
            0, 0, 0, 0, "tipo_energia", 0))
    }
    return listaCartasPokemon
} 

const generateCartasPokemonDeDistintosTipos = () => {
    const listaCartasPokemon = []
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.AGUA, 2))
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.DRAGON, 2))
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.FUEGO, 2))
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.HIERBA, 2))
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.OSCURO, 2))
    listaCartasPokemon.push(new CartaPokemon("0","nombre", 0, 10, 10, 0, 0, 0, 0, CODIGO_TIPO_CARTA.TIERRA, 2))
    return listaCartasPokemon
}

module.exports = {
    generateCartasPokemonWithAtaqueYDefensa: generateCartasPokemonWithAtaqueYDefensa,
    generateCartasPokemonDeDistintosTipos: generateCartasPokemonDeDistintosTipos
}
