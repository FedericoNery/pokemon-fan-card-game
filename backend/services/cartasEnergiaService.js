let CartaEnergia = require('../models/cartaenergia.model');

function getAllCartasEnergias(req, res) {
    CartaEnergia.find()
        .then(cartasEnergias => res.json(cartasEnergias))
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = getAllCartasEnergias