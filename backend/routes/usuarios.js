const router = require('express').Router();
let Usuario = require('../models/usuario.model');

/*OBTENER TODOS LOS USUARIOS*/
router.route('/getlist').get((req, res) => {
  Usuario.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getUltimoNumeroUsuario').get((req, res) => {
  const usuario = Usuario.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, doc) {
    if (err) 
      return handleError(err);
    if (doc) {
      return res.json(doc.numero);
    }
  });
});

/*ALTA USUARIO*/
router.route('/add').post((req, res) => {
  const numero = req.body.numero;
  const nombre_usuario = req.body.nombre_usuario;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const monedas = req.body.monedas;
  const rol_usuario = req.body.rol_usuario;
  const email = req.body.email;
  const mazos = req.body.mazos;


  const nuevoUsuario = new Usuario({
    numero,
    nombre_usuario,
    nombre,
    apellido,
    monedas,
    rol_usuario,
    email,
    mazos,
  });

  nuevoUsuario.save()
    .then(() => res.json('Usuario nuevo!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*GET BY ID USUARIO*/
router.route('/get/:id').get((req, res) => {
  const id = req.body.id;
  Usuario.findById(id)
    .then(() => res.json('Usuario obtenido!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*GET BY ID USUARIO*/
router.route('/nombre/:nombre').get((req, res) => {
  const nombre = req.params.nombre;
  console.log(nombre)
  Usuario.find({nombre_usuario: nombre}).limit(1)
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
});


/*DELETE BY ID USUARIO*/
router.route('/remove').post((req, res) => {
  const id = req.body.id;
  Usuario.findByIdAndDelete(id)
    .then(() => res.json('User eliminado!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;