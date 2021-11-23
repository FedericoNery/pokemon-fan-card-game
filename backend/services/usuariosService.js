let Usuario = require('../models/usuario.model');

async function getUsuarioBy(id){
    var usuario = await Usuario.findOne({ numero: id })
    .then((res) => res)
    .catch(err => {
        console.log("Error" + err)
    });
    return usuario
}

async function getUltimoNumeroUsuario(){//Buscar por el maximo numero
    var usuario = await Usuario.findOne()
    .sort({ 'numero': -1 }) // give me the max
    .then((res) => { return res })
    .catch((err) => err)
    console.log(usuario)
    return usuario.numero
}

module.exports = {
    getUsuarioBy: getUsuarioBy,
    getUltimoNumeroUsuario: getUltimoNumeroUsuario
}


