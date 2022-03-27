let Usuario = require('../models/usuario.model');

function getAllUsuarios(req, res) {
  Usuario.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json('Error: ' + err));
}

function autenticar(req, res) {
  const { email } = req.body
  Usuario.findOne({ email: email })
    .then(usuario =>
      res.json(usuario)
    )
    .catch(err => res.status(400).json('Error: ' + err));
}

function getUsuarioByEmail(email) {
    const usuario = Usuario.findOne({ email })
    .then(usuario => {
      return usuario
    })
    .catch(err => { throw 'Usuario no encontrado' });
    return usuario
}

function esValidaLaContrasenia(usuario, contraseniaIngresada){
  const esValida = bcrypt.compareSync(contraseniaIngresada, usuario.password);
  if (!esValida)
    throw "Credenciales inválidas"
}

module.exports = {
  getAllUsuarios: getAllUsuarios,
  autenticar: autenticar,
  getUsuarioByEmail: getUsuarioByEmail,
  esValidaLaContrasenia: esValidaLaContrasenia
}