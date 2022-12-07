const usuariosService = require('./usuariosService');
let Mazo = require('../models/mazo.model');
let CartaPokemon = require('../models/cartapokemon.model');
let CartaEnergia = require('../models/cartaenergia.model');
let Usuario = require('../models/usuario.model');

async function getMazoById(id) {
    const mazo = await Mazo.findOne({ numero: id })
        .then(mazos => {
            return mazos
        })
        .catch(err => res.status(400).json('Error: ' + err));

    const { cartas } = mazo
    const listadoDeCartas = await Promise.all(cartas.map(async (x) => {
        const numeroCarta = x
        if (numeroCarta.includes("P")) {
            const carta = await CartaPokemon.findOne({ numero: numeroCarta })
                .then(doc => {
                    return doc
                })
                .catch(err => res.status(400).json('Error: ' + err));
            return carta
        }
        if (numeroCarta.includes("E")) {
            const carta = await CartaEnergia.findOne({ numero: numeroCarta })
                .then(doc => {
                    return doc
                })
                .catch(err => res.status(400).json('Error: ' + err));
            return carta
        }
        return null
    }))

    return listadoDeCartas
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandomIntConBase1(max) {
    return Math.floor(Math.random() * max + 1);
  }
  
async function getRandomUsuario(){
    var maximo = await Usuario.countDocuments()
    .then((res) => res)
    .catch(err => res.status(400).json('Error: ' + err));
    var idUsuario = getRandomIntConBase1(maximo)
    var usuario = await usuariosService.getUsuarioBy(idUsuario).then(res => res)
    return usuario
}

async function getRandomMazoByUsuarioId(idUsuario){
    var usuario = await usuariosService.getUsuarioBy(idUsuario).then(res => res)
    var numerosDeLosMazos = usuario.mazos
    var indiceMazoSeleccionado = getRandomInt(numerosDeLosMazos.length)
    var idMazo = numerosDeLosMazos[indiceMazoSeleccionado]

    var mazo = await getMazoById(idMazo)
    return mazo
}

module.exports = {
    getRandomMazoByUsuarioId: getRandomMazoByUsuarioId,
    getRandomUsuario : getRandomUsuario,
    getMazoById : getMazoById
}