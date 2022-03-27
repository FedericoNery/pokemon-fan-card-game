let CartaPokemon = require('../models/cartapokemon.model');

function getAllCartasPokemon(req, res){
    CartaPokemon.find()
    .then(cartas_pokemon => res.json(cartas_pokemon))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = getAllCartasPokemon