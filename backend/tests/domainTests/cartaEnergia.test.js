const CartaEnergia = require('../../domain/cartaenergia');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO

test('Instanciar carta energia', () => {
    const pokemonPrueba = new CartaEnergia("M0", "Mi pokemon", [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}])
    expect(pokemonPrueba).toEqual({
        numero: "M0",
        nombre: "Mi pokemon",
        energias: [{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1},{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}],
    });
  });