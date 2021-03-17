const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mazoSchema = new Schema({
  numero: {type: Number,required: true}	,
  nombre: {type: String, required: true, trim: true, minlength: 1},
  cartas: [[String]],
}, 
{ 
	timestamps: true,
});

const Mazo = mongoose.model('Mazo', mazoSchema);

module.exports = Mazo;