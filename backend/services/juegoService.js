const resultados = require('../utils/enums').FASES_JUEGO
const Juego = require('../domain/Juego')
const mazoService = require('../services/mazoService')
const iniciarJuegoService = require('../services/iniciarJuegoService')
const usuariosService = require('../services/usuariosService')
const manoService = require('../services/manoService')

const iniciarJuego = async (idJugadorLogueado, idMazoSeleccionado) => {
    //Jugador logueado, selecciona mazo con el que desea jugar
    var jugadorLogueado = await usuariosService.getUsuarioBy(idJugadorLogueado)
    var mazoJugadorLogueado = await iniciarJuegoService.getMazoById(idMazoSeleccionado)

    //Jugador rival aleatorio, mazo aleatorio
    var rival = await iniciarJuegoService.getRandomUsuario().then(res => res)
    var mazoRival = await iniciarJuegoService.getRandomMazoByUsuarioId(rival.numero).then(res => res)

    const juego = new Juego(jugadorLogueado, rival, mazoJugadorLogueado, mazoRival)
    return juego
}


const iniciarRonda = (juego, turno) => {
    var mazo1 = juego.campo1.mazo
    var mazo2 = juego.campo2.mazo2
    //recibe el turno elegido por el jugador
    //Si recibió 1, arranca el jugador
    //Si recibió 2, arranca la computadora
    if(turno === 1)
    {
        //repartoCartas
        var mano1 = mazoService.repartirMano(juego.campo1.mazo,6)
        var mano2 = mazoService.repartirMano(juego.campo2.mazo,6)
        juego.campo1.mano = mano1
        juego.campo2.mano = mano2
        return {juego: juego, turno}
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
        //pasar turno computadora
    }
    else{
        //reparto cartas
        //pasar turno computadora
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
    }
    return {juego: juego, turno: turno}
}

const determinacionDeTurnos = (turno) => {
    //recibe el turno elegido por el jugador
    //Si recibió 1, arranca el jugador
    //Si recibió 2, arranca la computadora
    if(turno === 1)
    {
        //repartoCartas
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
        //pasar turno computadora
    }
    else{
        //reparto cartas
        //pasar turno computadora
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
    }
}

const repartirCartas = () => {
    
}

const invocacionCartasProgramacion = () => {
    
}

const getCartasInvocadas = (cartasAFiltrar, listaNumerosDeCartas) => {
    return cartasAFiltrar.filter(x => listaNumerosDeCartas.includes(x.numero))
}

const invocacionCartasPokemon = (cantidadesEnergias, cartas) => {
    return manoService.esValidaLaInvocacion(cantidadesEnergias, cartas)
    if(turno === 1){
        //enviar orden al jugador de seleccionar cartas a invocar
        //esperar en el otro endpoint de invocacion de que está todo ok
        //si pasa el endpoint
        //ejecutar invocación automática computadora
        //devolverCampoActualizado
    }
    else{
        //ejecutar invocación automática computadora
        //enviar orden al jugador de seleccionar cartas a invocar
        //esperar en el otro endpoint de invocacion de que está todo ok
        //si pasa el endpoint
        //devolverCampoActualizado
    }
}

const invocacionCartasProgramacion2 = (turno) => {
    if(turno === 1){
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
        //pasar turno computadora
        //pasar a batalla
    }
    else{
         //pasar turno computadora
        //enviar orden al jugador de invocar(ahora elegiría siempre no)
        //pasar a batalla
    }
}

const batalla = () => {
    //determinar ganador de ronda
    //verificar si hay ganador de la partida,
    //si hay finalizar juego
    //si no hay ganador seguir la otra ronda
}

const determinarGanadorRonda = () => {
    //determinar ganador de ronda
    //verificar si hay ganador de la partida,
    //si hay finalizar juego
    //si no hay ganador seguir la otra ronda
}

const determinarGanadorPartida = () => {
    //determinar ganador de ronda
    //verificar si hay ganador de la partida,
    //si hay finalizar juego
    //si no hay ganador seguir la otra ronda
}

module.exports={
    iniciarRonda: iniciarRonda,
    iniciarJuego: iniciarJuego,
    determinacionDeTurnos : determinacionDeTurnos,
    repartirCartas : repartirCartas,
    invocacionCartasProgramacion : invocacionCartasProgramacion,
    invocacionCartasPokemon : invocacionCartasPokemon,
    invocacionCartasProgramacion2 : invocacionCartasProgramacion2,
    batalla : batalla,
    determinarGanadorRonda: determinarGanadorRonda,
    determinarGanadorPartida: determinarGanadorPartida,
    getCartasInvocadas: getCartasInvocadas
}