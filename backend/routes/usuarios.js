let Usuario = require('../models/usuario.model');
const { getAllUsuarios, autenticar } = require('../repositories/usuariosRepository');
const mazoService = require('../services/mazoService');
let usuarioService = require('../services/usuariosService');
const router = require('express').Router();

/*OBTENER TODOS LOS USUARIOS*/
router.route('/').get(getAllUsuarios);

router.route('/').post(async (req, res) => {
  const nombre_usuario = req.body.username;
  const nombre = req.body.firstName;
  const apellido = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const monedas = 10
  //OBTENER ULTIMO NUMERO
  var numero = await usuarioService.getUltimoNumeroUsuario()
  numero = numero + 1
  //CREAR MAZOS
  console.log(numero + "- del usuario num usuario -")
  const mazos = await mazoService.crearMazosParaElUsuario(numero)
  //ASIGNAR ROL
  console.log(mazos + " del usuario ")
  var rol_usuario = ""
  if (password === "asdfghjklñ123456789") {
    rol_usuario = "admin"
  }
  else {
    rol_usuario = "jugador"
  }

  const usuario = new Usuario({
    numero,
    nombre_usuario,
    nombre,
    apellido,
    monedas,
    rol_usuario,
    email,
    mazos,
  })

  usuario.save()
    .then(() => res.json('Usuario nuevo!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/authenticate').post(autenticar);

router.route('/getUltimoNumeroUsuario').get((req, res) => {
  const usuario = Usuario.findOne()
    .sort({ 'numero': -1 })
    .exec(function (err, doc) {
      if (err)
        return handleError(err);
      if (doc) {
        return res.json(doc.numero);
      }
    })
});

/*GET BY ID USUARIO*/
router.route('/:id').get((req, res) => {
  const id = req.params.id;
  Usuario.findOne({ numero: id })
    .then((usuario) => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
});


/*DELETE BY ID USUARIO*/
router.route('/remove').delete((req, res) => {
  const id = req.body.id;
  Usuario.findByIdAndDelete(id)
    .then(() => res.json('User eliminado!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*DELETE BY ID USUARIO*/
router.route('/:id').put((req, res) => {
  const id = req.params.id;
  const nombre_usuario = req.body.username;
  const nombre = req.body.firstName;
  const apellido = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const monedas = req.body.monedas

  Usuario.findOneAndUpdate({ numero: id },
    {
      nombre,
      apellido,
      email
    })
    .then(() => res.json('User actualizado!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/').delete(async (req, res) => {
  const ids = req.body.ids;
  console.log(ids)
  await usuarioService.eliminarMultiplesUsuarios(ids)
    .then(() => res.json('Users eliminados'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id/partidas').get(usuarioService.cantidadPartidas)


module.exports = router;