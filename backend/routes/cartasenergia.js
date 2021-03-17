const router = require('express').Router();
let CartaEnergia = require('../models/cartaenergia.model');

/*GET BY NUMERO Carta ENERGIA*/
router.route('/').get((req, res) => {
    const num = req.query.numero;
    console.log(num)
    CartaEnergia.find({numero: num}).limit(1)
    .then(doc => res.json(doc))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router

