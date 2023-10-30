const getAllCartasEnergias = require('../services/cartasEnergiaService')
const router = require('express').Router();

router.route('/').get(getAllCartasEnergias);


module.exports = router

