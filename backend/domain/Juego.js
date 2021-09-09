class Juego {
    constructor(jugador1, jugador2, mazo1, mazo2) {
      this.jugador1 = jugador1;
      this.jugador2 = jugador2;
      this.mazo1 = mazo1;
      this.mazo2 = mazo2;
    }
    
    static iniciarJuego (turno) {
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
  
  static determinacionDeTurnos() {
      
  }
  
  static repartirCartas() {
      
  }
  
  static invocacionCartasProgramacion () {
      
  }
  
  static invocacionCartasPokemon (turno) {
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
  
  static invocacionCartasProgramacion2 (turno) {
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
  
  static batalla () {
      //determinar ganador de ronda
      //verificar si hay ganador de la partida,
      //si hay finalizar juego
      //si no hay ganador seguir la otra ronda
  }
}

module.exports = Juego