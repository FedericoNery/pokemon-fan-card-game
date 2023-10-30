const Campo = require('../../domain/Campo');
const CartaPokemon = require('../../domain/CartaPokemon');
const { generateCartasPokemonWithAtaqueYDefensa, generateCartasPokemonDeDistintosTipos } = require('../clases/CartaPokemon');

test('Repartir Cartas', () => {
  const mazo = generateCartasPokemonWithAtaqueYDefensa(6)
  const campo = new Campo(mazo)
  campo.repartirCartas(6)
  expect(campo.getMano().getLength()).toEqual(6);
  expect(campo.getMazo().getLength()).toEqual(0);
});

test('Contar energias', () => {
  const mano = generateCartasPokemonDeDistintosTipos()
  const campo = new Campo()
  campo.mano.setCartas(mano)
  expect(campo.contarEnergias()).toEqual({
    incoloro: 0,
    fuego: 2,
    tierra: 0,
    rayo: 0,
    dragon: 2,
    hierba: 2,
    agua: 2,
    fairy: 0,
    oscuro: 2,
    lucha: 0,
    psiquico: 0,
    metal: 0,
  });
});

test('invocarCartas by lista de ids cartas', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('invocarCartasComputadora', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('esValidaLaInvocacionDeLaCarta', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});


test('esValidaLaInvocacionDeLaCartaEnComputadora', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('invocarCartaComputadora', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('invocarCarta', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('quitarEnergiasGastadasPor', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('descartarCartasMano', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});

test('descartarCartasCampo', () => {
  const campo = new Campo()
  expect(pokemonPrueba).toEqual({});
});
