const Campo = require("./Campo")
const EstadosDeLaPartida = require('./EstadosPartida')
class Juego {
    constructor(jugador1, jugador2, mazo1, mazo2) {
        this.esTurnoDeJugador1 = true
        this.esTurnoDeJugador2 = false
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.campo1 = new Campo(mazo1)
        this.campo2 = new Campo(mazo2)
        this.rondasGanadasJugador1 = 0
        this.rondasGanadasJugador2 = 0
        this.numeroJugadorGanador = null
        this.numeroJugadorPerdedor = null
        this.estadoDeLaRonda = EstadosDeLaPartida.JUEGO_INICIADO
        this.repartirCartas()
        this.contarEnergias()
        this.estadoDeLaRonda = EstadosDeLaPartida.INVOCACION_JUGADOR
    }

    static iniciarJuego(turno) {
        //recibe el turno elegido por el jugador
        //Si recibió 1, arranca el jugador
        //Si recibió 2, arranca la computadora
        if (turno === 1) {
            //repartoCartas
            //enviar orden al jugador de invocar(ahora elegiría siempre no)
            //pasar turno computadora
        }
        else {
            //reparto cartas
            //pasar turno computadora
            //enviar orden al jugador de invocar(ahora elegiría siempre no)
        }
    }

    static determinacionDeTurnos() {

    }

    repartirCartas() {
        this.estadoDeLaRonda = EstadosDeLaPartida.REPARTIENDO_CARTAS
        console.log("Llego a hasta repartir cartas")
        this.campo1.repartirCartas(6)
        this.campo2.repartirCartas(6)
    }

    contarEnergias() {
        this.campo1.contarEnergias()
        this.campo2.contarEnergias()
    }

    getCampoByIdJugador(idJugador) {
        if (idJugador == this.jugador1.numero) {
            return this.campo1
        }
        else {
            return this.campo2
        }
    }

    invocarCartasPokemon(cartasAInvocar, idJugador) {
        if (idJugador == this.jugador1.numero) {
            this.estadoDeLaRonda = EstadosDeLaPartida.INVOCACION_JUGADOR
            this.campo1.invocarCartas(cartasAInvocar)
            this.campo2.invocarCartasComputadora()
        }
    }

    iniciarBatalla() {
        this.determinarGanadorDeLaRonda(campo1, campo2)
        this.determinarGanadorPartida()
    }

    determinarGanadorDeLaRonda(campo1, campo2) {
        let ataqueJugador = campo1.getAtaque()
        let ataqueComputadora = campo2.getAtaque()
        let defensaJugador = campo1.getDefensa()
        let defensaComputadora = campo2.getDefensa()

        let deltaJugador = defensaJugador - ataqueComputadora
        let deltaComputadora = defensaComputadora - ataqueJugador

        const ambosJugadoresQuedaronSinDefensa = deltaJugador <= 0 && deltaComputadora <= 0
        const computadoraPudoDefenderseYJugadorQuedoSinDefensa = deltaComputadora > 0 && deltaJugador <= 0
        const jugadorPudoDefenderseYComputadoraQuedoSinDefensa = deltaJugador > 0 && deltaComputadora <= 0
        const ventajaDeComputadora = deltaJugador > 0 && deltaComputadora > 0 && deltaComputadora > deltaJugador
        const ventajaDeJugador = deltaJugador > 0 && deltaComputadora > 0 && deltaJugador > deltaComputadora

        if (ambosJugadoresQuedaronSinDefensa || computadoraPudoDefenderseYJugadorQuedoSinDefensa || ventajaDeComputadora) {
            this.rondasGanadasJugador2 += 1
            return
        }
        else if (jugadorPudoDefenderseYComputadoraQuedoSinDefensa || ventajaDeJugador) {
            this.rondasGanadasJugador1 += 1
            return
        }
    }

    determinarGanadorPartida() {
        if (this.rondasGanadasJugador1 === 2) {
            this.estadoDeLaRonda = EstadosDeLaPartida.JUEGO_TERMINADO
            this.numeroJugadorGanador = this.jugador1.numero
            this.numeroJugadorPerdedor = this.jugador2.numero
        }
        else if (this.rondasGanadasJugador2 === 2) {
            this.estadoDeLaRonda = EstadosDeLaPartida.JUEGO_TERMINADO
            this.numeroJugadorGanador = this.jugador2.numero
            this.numeroJugadorPerdedor = this.jugador1.numero
        }
    }

    getAtaque(campo) {

    }

    getDefensa(campo) {

    }

    static invocacionCartasProgramacion() {

    }

    static invocacionCartasPokemon(turno) {
        if (turno === 1) {
            //enviar orden al jugador de seleccionar cartas a invocar
            //esperar en el otro endpoint de invocacion de que está todo ok
            //si pasa el endpoint
            //ejecutar invocación automática computadora
            //devolverCampoActualizado
        }
        else {
            //ejecutar invocación automática computadora
            //enviar orden al jugador de seleccionar cartas a invocar
            //esperar en el otro endpoint de invocacion de que está todo ok
            //si pasa el endpoint
            //devolverCampoActualizado
        }
    }

    static invocacionCartasProgramacion2(turno) {
        if (turno === 1) {
            //enviar orden al jugador de invocar(ahora elegiría siempre no)
            //pasar turno computadora
            //pasar a batalla
        }
        else {
            //pasar turno computadora
            //enviar orden al jugador de invocar(ahora elegiría siempre no)
            //pasar a batalla
        }
    }

    static batalla() {
        //determinar ganador de ronda
        //verificar si hay ganador de la partida,
        //si hay finalizar juego
        //si no hay ganador seguir la otra ronda
    }
}

module.exports = Juego