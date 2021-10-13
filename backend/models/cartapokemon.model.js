const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartaPokemonSchema = new Schema({
  numero: {type: String, trim :true},   
  pokemon: {type: String, trim: true},
  ps: {type: String},
  ataque: {type: Number},
  defensa: {type: Number},
  ataque_esp: {type: String},
  defensa_esp: {type: String},
  velocidad: {type: String},
  suma: {type: String},
  tipo_energia: {type: String},
  cantidad_energia: {type: Number}
});

const CartaPokemon = mongoose.model('cartapokemon', cartaPokemonSchema, 'cartas_pokemon');

module.exports = CartaPokemon;