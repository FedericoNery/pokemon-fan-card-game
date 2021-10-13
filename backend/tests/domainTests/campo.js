const CartaPokemon = require('../../domain/cartapokemon');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO

test('Instanciar carta pokemon', () => {
  const pokemonPrueba = new CartaPokemon("M0", "Mi pokemon",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_FUEGO)

  expect(pokemonPrueba).toEqual({
      numero: "M0",
      nombre: "Mi pokemon",
      pokemon: "Mi pokemon",
      ps: 0,
      ataque: 0,
      defensa: 0,
      ataque_esp: 0,
      defensa_esp: 0,
      velocidad: 0,
      suma: 0,
      tipo_energia: CODIGO_TIPO_CARTA_FUEGO, 
  });
});