const CartaPokemon = require('../../domain/cartapokemon');
const CartaEnergia = require('../../domain/cartaenergia');

const manoService = require('../../services/manoService');
const CODIGO_TIPO_CARTA_FUEGO = require('../../utils/enums').CODIGO_TIPO_CARTA.FUEGO
const CODIGO_TIPO_CARTA_HIERBA = require('../../utils/enums').CODIGO_TIPO_CARTA.HIERBA

const mano = [
]

const manoConCartas = [
  new CartaPokemon("P1","Pokemon",0,0,0,0,0,0,0,CODIGO_TIPO_CARTA_HIERBA),
  new CartaEnergia("E0","Energia",[{nombre: CODIGO_TIPO_CARTA_FUEGO, numero: 1}]),
]

test('Contar las energias de un tipo especifico de la mano(sin cartas)', () => {
    expect(manoService.contarEnergias(mano, CODIGO_TIPO_CARTA_FUEGO)).toBe(0);
  });


test('Obtener todas las cantidades de energias de la mano(sin cartas)', () => {
  expect(manoService.obtenerEnergias(mano)).toEqual(
    {
        incoloro: 0,
        fuego : 0,
        tierra : 0,
        rayo : 0,
        dragon : 0,
        hierba : 0,
        agua : 0,
        fairy : 0,
        oscuro: 0,
        lucha: 0,
        psiquico: 0,
        metal: 0,
    }
  );
});

test('Contar las energias de un tipo especifico. Carta Energia', () => {
    expect(manoService.contarEnergias(manoConCartas, CODIGO_TIPO_CARTA_FUEGO)).toBe(1);
  });

  test('Contar las energias de un tipo especifico. Carta Pokemon', () => {
    expect(manoService.contarEnergias(manoConCartas, CODIGO_TIPO_CARTA_HIERBA)).toBe(1);
  });


test('Obtener todas las cantidades de energias de la mano', () => {
  expect(manoService.obtenerEnergias(manoConCartas)).toEqual(
    {
        incoloro: 0,
        fuego : 1,
        tierra : 0,
        rayo : 0,
        dragon : 0,
        hierba : 1,
        agua : 0,
        fairy : 0,
        oscuro: 0,
        lucha: 0,
        psiquico: 0,
        metal: 0,
    }
  );
});