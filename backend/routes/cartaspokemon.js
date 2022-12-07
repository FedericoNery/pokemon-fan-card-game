const getAllCartasPokemon = require('../services/cartasPokemonService')
const router = require('express').Router();

/*OBTENER TODOS LOS POKEMON*/
router.route('/').get(getAllCartasPokemon);

module.exports = router;