let Mazo = require('../models/mazo.model');
let CartaPokemon = require('../models/cartapokemon.model');
let CartaEnergia = require('../models/cartaenergia.model');
const router = require('express').Router();

router.route('/:id/cartas').get(async (req, res) => {
  const id = req.params.id;
  const mazo = await Mazo.findOne({ numero: id })
    .then(mazos => {
      return mazos
    })
    .catch(err => res.status(400).json('Error: ' + err));

  const { cartas } = mazo
  const listadoDeCartas = await Promise.all(cartas.map(async (x) => {
    const numeroCarta = x
    if (numeroCarta.includes("P")) {
      const carta = await CartaPokemon.findOne({ numero: numeroCarta })
        .then(doc => {
          return doc
        })
        .catch(err => res.status(400).json('Error: ' + err));
      return carta
    }
    if (numeroCarta.includes("E")) {
      const carta = await CartaEnergia.findOne({ numero: numeroCarta })
        .then(doc => {
          return doc
        })
        .catch(err => res.status(400).json('Error: ' + err));
      return carta
    }
    return null
  }))

  res.json(listadoDeCartas)
});

/*GET BY NUMERO Mazo*/
router.route('/:id').get((req, res) => {
  const num = req.params.id;
  Mazo.findOne({ numero: num })
    .then(doc => res.json(doc))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  Mazo.find()
    .then(mazos => res.json(mazos))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router