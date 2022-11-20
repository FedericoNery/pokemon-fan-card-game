const Campo = require("./Campo")
const EstadosDeLaPartida = require('./EstadosPartida')

//gameId sería el identificador de la sesión
class Juego {
    constructor() {
        this.esTurnoDeJugador1 = true
        this.esTurnoDeJugador2 = false
        this.jugador1 = null;
        this.jugador2 = null;
        this.campo1 = new Campo()
        this.campo2 = new Campo()
        this.rondasGanadasJugador1 = 0
        this.rondasGanadasJugador2 = 0
        this.numeroJugadorGanador = null
        this.numeroJugadorPerdedor = null
        this.jugador1InvocoCartas = false
        this.jugador2InvocoCartas = false
    }

    iniciarJuego(){
        this.estadoDeLaRonda = EstadosDeLaPartida.JUEGO_INICIADO
        this.campo1.mazo.mezclar()
        this.campo2.mazo.mezclar()
    }

    iniciarRonda(){
        this.estadoDeLaRonda = EstadosDeLaPartida.RONDA_INICIADA
    }

    setJugador1(jugador1){
        this.jugador1 = jugador1
    }

    setJugador2(jugador2){
        this.jugador2 = jugador2
    }

    setMazo1(mazo1){
        this.campo1.setMazo(mazo1)
    }

    setMazo2(mazo2){
        this.campo2.setMazo(mazo2)
    }

    repartirCartas() {
        this.estadoDeLaRonda = EstadosDeLaPartida.DRAW_PHASE
        this.campo1.repartirCartas(6)
        this.campo2.repartirCartas(6)
        this.contarEnergias()
        this.estadoDeLaRonda = EstadosDeLaPartida.LOAD_PHASE
        this.estadoDeLaRonda = EstadosDeLaPartida.SUMMON_PHASE

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
            this.estadoDeLaRonda = EstadosDeLaPartida.SUMMON_PHASE
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

    startPhase(){
        this.iniciarJuego()
        this.iniciarRonda()
    }

    drawPhase(){
        this.repartirCartas()
    }

    finishSummonPhase(usuario, cartasId){
        const { email, nombre_usuario } = usuario
        const { email: emailJugador1, nombre_usuario: nombreUsuarioJugador1 } = this.jugador1
        if (email === emailJugador1 && nombre_usuario === nombreUsuarioJugador1){
            this.campo1.invocarCartas(cartasId)
            this.jugador1InvocoCartas = true
        } 
        else{
            this.campo2.invocarCartas(cartasId)
            this.jugador2InvocoCartas = true
        }
    }

    finishedSummonPhase(){
        return this.jugador1InvocoCartas && this.jugador2InvocoCartas
    }

    finishCompilePhase(){
        this.estadoDeLaRonda = EstadosDeLaPartida.BATTLE_PHASE
    }
}

module.exports = Juego