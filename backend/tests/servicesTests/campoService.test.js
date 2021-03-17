const resultados = require('../../utils/enums').RESULTADOS
const CartaPokemon = require('../../domain/CartaPokemon')
const campoService = require('../../services/campoService');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO
const CODIGO_TIPO_CARTA_HIERBA = require('../../utils/enums').CODIGO_TIPO_CARTA.HIERBA
const CODIGO_TIPO_CARTA_AGUA = require('../../utils/enums').CODIGO_TIPO_CARTA.AGUA

const campo = [
    new CartaPokemon("M0", "Bulbasur",   0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M1", "Squirtle",   0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_AGUA),
    new CartaPokemon("M2", "Charmander", 0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_FUEGO),
    new CartaPokemon("M3", "Treecko",    0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M4", "Turtwig",    0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_AGUA),
    new CartaPokemon("M4", "Snivy",      0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
]

const campoEvolucion = [
    new CartaPokemon("M0", "Bulbasur",  0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M0", "Bulbasur",  0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M0", "Bulbasur",  0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M1", "Treecko",   0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M1", "Treecko",   0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
    new CartaPokemon("M1", "Treecko",   0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA),
]

const pokemonEvolucion = new CartaPokemon("M0", "Bulbasur", 0, 10, 60, 0, 0, 0, 0, CODIGO_TIPO_CARTA_HIERBA)


const campoJugador1Ganador = {
    ataque: 100,
    defensa: 100,
    nombre_usuario: 'Jugador 1'
}

const campoJugador2Ganador = {
    ataque: 100,
    defensa: 100,
    nombre_usuario: 'Jugador 2'
}

const campoJugador1Perdedor = {
    ataque: 50,
    defensa: 50,
    nombre_usuario: 'Jugador 1'
}

const campoJugador2Perdedor = {
    ataque: 50,
    defensa: 50,
    nombre_usuario: 'Jugador 2'
}

test('Calcular Ataque', () => {
    expect(campoService.calcularAtaque(campo)).toBe(60);
});

test('Calcular Defensa', () => {
    expect(campoService.calcularDefensa(campo)).toBe(360);
});


test('Devolver lista pokemon a evolucionar', () => {
    expect(campoService.devolverListaEvoluciones(campoEvolucion)).toEqual(
        [
            {
                numero: "M0", cantidad: 3
            },
            {
                numero: "M1", cantidad: 3
            }
        ]
    );
});

test('Calcular evolución', () => {
    expect(campoService.calcularEvolucion(pokemonEvolucion, 3)).toEqual(
        {
            ataque: 30,
            defensa: 180,
        }
    );
});

test('Determinar Ganador Jugador 1', () => {
    expect(campoService.determinarGanador(campoJugador1Ganador, campoJugador2Perdedor)).toEqual(
        {nombreUsuario: 'Jugador 1', estado: resultados.GANADOR} 
    );
});

test('Determinar Ganador Jugador 2', () => {
    expect(campoService.determinarGanador(campoJugador2Ganador, campoJugador1Perdedor)).toEqual(
        {nombreUsuario: 'Jugador 2', estado: resultados.GANADOR} 
    );
});

test('Determinar Empate', () => {
    expect(campoService.determinarGanador(campoJugador1Ganador, campoJugador1Ganador)).toEqual(
        {estado: resultados.EMPATE} 
    );
});



