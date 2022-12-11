let Usuario = require('../models/usuario.model');

async function getUsuarioBy(id) {
    var usuario = await Usuario.findOne({ numero: id })
        .then((res) => res)
        .catch(err => {
            err => res.status(400).json('Error: ' + err)
        });
    return usuario
}

async function getUltimoNumeroUsuario() {//Buscar por el maximo numero
    var usuario = await Usuario.findOne()
        .sort({ 'numero': -1 }) // give me the max
        .then((res) => { return res })
        .catch((err) => err)
    return usuario.numero
}

async function eliminarMultiplesUsuarios(idsUsuarios) {
    //Ver de hacer el borrado por cascada de absolutamente todo usuario + mazo o hacer un borrado logico, implica que haya una reactivacion de la cuenta
    //Validar que no pueda borrar su usuario a si mismo o que si lo borra lo desloguee
    for (let index = 0; index < idsUsuarios.length; index++) {
        const element = idsUsuarios[index];
        try {
            await Usuario.deleteOne({ numero: element })
        }
        catch (error) {
        }
    }
}

async function aumentarPartidasGanadasYMonedas(jugador) {
    await Usuario.updateOne({ numero: jugador.numero },
        {
            partidas_ganadas: jugador.partidas_ganadas + 1,
            monedas: jugador.monedas + 1
        })
}

async function aumentarPartidasPerdidas(jugador) {
    await Usuario.updateOne({ numero: jugador.numero }, { partidas_perdidas: jugador.partidas_perdidas + 1 })
}

async function cantidadPartidas(req, res) {
    const id = req.params.id;
    Usuario.findOne({ numero: id })
        .then((usuario) => res.json({
            partidasGanadas: usuario.partidas_ganadas,
            partidasPerdidas: usuario.partidas_perdidas
        }))
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
    getUsuarioBy: getUsuarioBy,
    getUltimoNumeroUsuario: getUltimoNumeroUsuario,
    eliminarMultiplesUsuarios: eliminarMultiplesUsuarios,
    aumentarPartidasGanadasYMonedas: aumentarPartidasGanadasYMonedas,
    aumentarPartidasPerdidas: aumentarPartidasPerdidas,
    cantidadPartidas: cantidadPartidas
}


