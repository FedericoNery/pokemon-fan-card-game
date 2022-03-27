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
        this.campo1.mazo.mezclar()
        this.campo2.mazo.mezclar()
        this.repartirCartas()
        this.contarEnergias()
        this.estadoDeLaRonda = EstadosDeLaPartida.INVOCACION_JUGADOR
    }

    repartirCartas() {
        this.estadoDeLaRonda = EstadosDeLaPartida.REPARTIENDO_CARTAS
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
            console.log("Invoca las cartas")
            this.estadoDeLaRonda = EstadosDeLaPartida.INVOCACION_JUGADOR
            this.campo1.invocarCartas(cartasAInvocar)
            this.campo2.invocarCartasComputadora()

            console.log(this.campo1)
            console.log(this.campo2)
        }
    }

    iniciarBatalla() {
        this.determinarGanadorDeLaRonda()
        this.determinarGanadorPartida()
        this.pasarASiguienteRonda()
    }

    determinarGanadorDeLaRonda() {
        let ataqueJugador = this.campo1.getAtaque()
        let ataqueComputadora = this.campo2.getAtaque()
        let defensaJugador = this.campo1.getDefensa()
        let defensaComputadora = this.campo2.getDefensa()
        console.log(ataqueJugador)
        let deltaJugador = defensaJugador - ataqueComputadora
        let deltaComputadora = defensaComputadora - ataqueJugador

        console.log(deltaJugador + " deltaJugador")
        console.log(deltaComputadora + " deltaComputadora")
        const ambosJugadoresQuedaronSinDefensa = deltaJugador <= 0 && deltaComputadora <= 0
        const computadoraPudoDefenderseYJugadorQuedoSinDefensa = deltaComputadora > 0 && deltaJugador <= 0
        const jugadorPudoDefenderseYComputadoraQuedoSinDefensa = deltaJugador > 0 && deltaComputadora <= 0
        const ventajaDeComputadora = deltaJugador > 0 && deltaComputadora > 0 && deltaComputadora > deltaJugador
        const ventajaDeJugador = deltaJugador > 0 && deltaComputadora > 0 && deltaJugador > deltaComputadora

        if (ambosJugadoresQuedaronSinDefensa || computadoraPudoDefenderseYJugadorQuedoSinDefensa || ventajaDeComputadora) {
            this.rondasGanadasJugador2 += 1
            console.log("Suma ronda jugador 2")
        }
        else if (jugadorPudoDefenderseYComputadoraQuedoSinDefensa || ventajaDeJugador) {
            this.rondasGanadasJugador1 += 1
            console.log("Suma ronda jugador 1")
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

    pasarASiguienteRonda(){
        if(this.estadoDeLaRonda !== EstadosDeLaPartida.JUEGO_TERMINADO){
            this.estadoDeLaRonda = EstadosDeLaPartida.RONDA_INICIADA
            this.campo1.descartarCartasMano()
            this.campo1.descartarCartasCampo()
            this.campo2.descartarCartasMano()
            this.campo2.descartarCartasCampo()
            this.repartirCartas()
            this.contarEnergias()
        }
    }

    estaFinalizado(){
        return this.estadoDeLaRonda == EstadosDeLaPartida.JUEGO_TERMINADO
    }

    ganoJugador1(){
        return this.rondasGanadasJugador1 == 2
    }

    ganoJugador2(){
        return this.rondasGanadasJugador2 == 2
    }
}

module.exports = Juego