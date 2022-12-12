import objectMapper from "object-mapper"

export function mapJuegoToFront(juego, esUno) {
  const map = esUno ?
    {
      "jugador1": "miJugador",
      "jugador2": "jugadorEnemigo",
      "campo1": "miCampo",
      "campo2": "campoEnemigo",
      "rondasGanadasJugador1": "misRondasGanadas",
      "rondasGanadasJugador2": "rondasGanadasDelEnemigo",

      "campo1.cantidadesEnergias": "misEnergias",
      "campo2.cantidadesEnergias": "energiasDelEnemigo",

      "campo1.mano.cartas": "miMano",
      "campo1.zonaJuego.cartas": "miZonaJuego",
      "campo1.mazo.cartas": "miMazo",
      "campo1.descarte.cartas": "miDescarte",
      "campo1.atk": "miAtk",
      "campo1.def": "miDef",

      "campo2.mano.cartas": "manoEnemigo",
      "campo2.zonaJuego.cartas": "zonaJuegoEnemigo",
      "campo2.mazo.cartas": "mazoEnemigo",
      "campo2.descarte.cartas": "descarteEnemigo",
      "campo2.atk": "enemigoAtk",
      "campo2.def": "enemigoDef",

      "jugador1InvocoCartas": "jugador1InvocoCartas",
      "jugador2InvocoCartas": "jugador2InvocoCartas",
    } :
    {
      "jugador1": "jugadorEnemigo",
      "jugador2": "miJugador",
      "campo1": "campoEnemigo",
      "campo2": "miCampo",
      "rondasGanadasJugador1": "rondasGanadasDelEnemigo",
      "rondasGanadasJugador2": "misRondasGanadas",

      "campo2.cantidadesEnergias": "misEnergias",
      "campo1.cantidadesEnergias": "energiasDelEnemigo",

      "campo2.mano.cartas": "miMano",
      "campo2.zonaJuego.cartas": "miZonaJuego",
      "campo2.mazo.cartas": "miMazo",
      "campo2.descarte.cartas": "miDescarte",
      "campo2.atk": "miAtk",
      "campo2.def": "miDef",

      "campo1.mano.cartas": "manoEnemigo",
      "campo1.zonaJuego.cartas": "zonaJuegoEnemigo",
      "campo1.mazo.cartas": "mazoEnemigo",
      "campo1.descarte.cartas": "descarteEnemigo",
      "campo1.atk": "enemigoAtk",
      "campo1.def": "enemigoDef",

      "jugador1InvocoCartas": "jugador1InvocoCartas",
      "jugador2InvocoCartas": "jugador2InvocoCartas",
    }
  return objectMapper(juego, map)
}
