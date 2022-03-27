const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  numero: { type: Number, required: true }	,
  nombre_usuario: {  type: String, required: true, trim: true, minlength: 1},
  password: {  type: String, required: true, trim: true, minlength: 1},
  nombre: {  type: String, required: true, trim: true, minlength: 1},
  apellido: {  type: String, required: true, trim: true, minlength: 1},
  monedas: {  type: Number, required: true},
  rol_usuario: {  type: String, required: true, trim: true, minlength: 1},
  email: {  type: String, required: true, trim: true, minlength: 3},
  mazos: [Number],
  partidas_ganadas: { type: Number, required: true },
  partidas_perdidas: { type: Number, required: true },
  activo: { type: Boolean, required: true }
}, 
{ 
	timestamps: true,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;