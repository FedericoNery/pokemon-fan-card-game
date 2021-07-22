const router = require('express').Router();
let Mazo = require('../models/mazo.model');

/*GET BY NUMERO Mazo*/
router.route('/:id').get((req, res) => {
    const num = req.query.numero;
    console.log(num)
    Mazo.find({numero: num}).limit(1)
    .then(doc => res.json(doc))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/').get((req, res) => {
    Mazo.find()
      .then(mazos => res.json(mazos))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router