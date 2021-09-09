let Usuario = require('../models/usuario.model');

async function getUsuarioBy(id){
    var usuario = await Usuario.findOne({ numero: id })
    .then((res) => res)
    .catch(err => {
        console.log("Error" + err)
    });
    return usuario
}

module.exports = {
    getUsuarioBy: getUsuarioBy
}


