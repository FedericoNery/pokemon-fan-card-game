const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartaEnergiaSchema = new Schema({
  numero: {type: String, required: true},
  nombre: {type: String},
  energias:
  	[
	  	{
  			numero: {type: Number},
  			nombre: {type: String}
	  	}
	]	
});

const Mazo = mongoose.model('cartaenergia', cartaEnergiaSchema, 'cartas_energias');

module.exports = Mazo;