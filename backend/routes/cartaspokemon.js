const router = require('express').Router();
let CartaPokemon = require('../models/cartapokemon.model');

/*OBTENER TODOS LOS POKEMON*/
router.route('/getall').get((req, res) => {
  CartaPokemon.find()
    .then(cartas_pokemon => res.json(cartas_pokemon))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*GET BY PARAMS POKEMON*/
router.route('/').get((req, res) => {
  const numero = req.query.numero.toString();
  const nombre = req.params.nombre.toString();
  const ps = req.params.ps.toString();
  const ataque = req.params.ataque.toString();
  const defensa = req.params.defensa.toString();
  const ataque_esp = req.params.ataque_esp.toString();
  const defensa_esp = req.params.defensa_esp.toString();
  const velocidad = req.params.velocidad.toString();
  const suma = req.params.suma.toString();

    CartaPokemon.findOne( { 
      numero: numero,
      nombre: nombre,
      ps: ps,
      ataque: ataque,
      defensa: defensa,
      ataque_esp: ataque_esp,
      defensa_esp: defensa_esp,    
      velocidad: velocidad,
      suma: suma, 
    },
    function (err, card) {
      if (err) {
        res.json(err)
      }

      if (card) {
        console.log(card);
        return res.json(card);
      }
    }); 
});

module.exports = router;