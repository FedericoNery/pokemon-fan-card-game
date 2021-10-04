const Campo = require("./Campo")
const EstadosDeLaPartida  = require('./EstadosPartida')  
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
        if(idJugador == this.jugador1.numero){
            return this.campo1
        }
        else{
            return this.campo2
        }
    }

    invocarCartasPokemon(cartasAInvocar, idJugador){
        if(idJugador == this.jugador1.numero){
            this.estadoDeLaRonda = EstadosDeLaPartida.INVOCACION_JUGADOR
            this.campo1.invocarCartas(cartasAInvocar)
            this.campo2.invocarCartasComputadora()
        }
    }

    iniciarBatalla(){
        const ataqueJugador = this.getAtaque(campo1)
        const ataqueComputadora = this.getAtaque(campo2)
        const defensaJugador = this.getDefensa(campo1)
        const defensaComputadora = this.getDefensa(campo2)
    }

    getAtaque(campo){

    }
    
    getDefensa(campo){

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